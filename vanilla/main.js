import { HTML_OP1 } from "./js/_html.js";
import { CSS_OP1 } from "./js/_css.js";
import { SCREEN_OP1 } from "./js/_screen.js";

export default function ({
  id,
  pathIconSVG = "https://res.cloudinary.com/wino/image/upload/v1673484384/op1/",
  screen = SCREEN_OP1(pathIconSVG)
}) {
  const $$ = (id) => document.querySelector(id);
  const elementsOp = CSS_OP1 + HTML_OP1({ pathIconSVG, screen });
  const innerOp = $$(id);
  if (innerOp) innerOp.innerHTML = elementsOp;
  else document.body.innerHTML += elementsOp;

  // Check Web Audio API support
  if (!window.AudioContext && !window.webkitAudioContext) {
    console.error("Web Audio API is not supported in this browser");
    alert("Your browser does not support Web Audio API. The synthesizer may not work correctly.");
    return;
  }

  // Knobs
  const _knobs = ["blue", "green", "orange", "white", "volume"];
  const Knobs = {};

  _knobs.forEach((knob) => {
    const idKnob = `knob-${knob}`;
    const _class = knob === "volume" ? `.${idKnob}` : `.imprint-${knob}`;

    $$(_class).style.transform = `rotate(0deg)`;
    $$(`.${idKnob}`).id = idKnob;

    const dial = new Nexus.Add.Dial(`#${idKnob}`, {
      size: [75, 75],
      interaction: "radial",
      mode: "absolute",
      min: 0,
      max: 1,
      step: 0,
      value: 0,
    }).on("change", (value) => {
      $$(_class).style.transform = `rotate(${value * 360}deg)`;
      console.log(`Knob ${knob} value changed to ${value}`);
      if (knob === "volume") {
        setVolume(value);
      } else if (knob === "blue") {
        setReverbWetness(value);
      } else if (knob === "green") {
        setFilterCutoff(value);
      } else if (knob === "orange") {
        setDelay(value);
      }
    });

    dial.parent.style.position = "absolute";
    dial.parent.style.opacity = 0;
    if (knob === "volume") {
      dial.parent.style.left = "-15px";
      dial.parent.style.top = "-15px";
    }
    Knobs[knob] = dial;
  });

  // Piano
  $$(".keyboard").id = "keyboard";

  const idKey = [
    [2, 4, 6],
    [9, 11],
    [14, 16, 18],
    [21, 23],
    [1, 3, 5, 7],
    [8, 10, 12],
    [13, 15, 17, 19],
    [20, 22, 24],
  ];
  const keyboard = document.querySelectorAll(".keyboard > div");
  keyboard.forEach((elms, ii) => {
    if (!elms.id) {
      const nameClass = elms.className;
      elms.querySelectorAll(`.${nameClass}>div`).forEach((elm, i) => {
        if (idKey[ii][i]) {
          elm.id = `key${idKey[ii][i]}`;
        }
      });
    }
  });

  let audioContext;
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    console.error("Error creating AudioContext:", e);
    alert("Failed to create AudioContext. The synthesizer may not work correctly.");
    return;
  }

  const masterGainNode = audioContext.createGain();
  masterGainNode.connect(audioContext.destination);

  const reverbNode = audioContext.createConvolver();
  const filterNode = audioContext.createBiquadFilter();
  const delayNode = audioContext.createDelay(5.0);

  masterGainNode.connect(reverbNode);
  reverbNode.connect(filterNode);
  filterNode.connect(delayNode);
  delayNode.connect(audioContext.destination);

  function setReverbWetness(value) {
    reverbNode.buffer = createReverbImpulse(audioContext, value * 3);
  }

  function setFilterCutoff(value) {
    filterNode.frequency.setValueAtTime(value * 10000 + 100, audioContext.currentTime);
  }

  function setDelay(value) {
    delayNode.delayTime.setValueAtTime(value * 0.5, audioContext.currentTime);
  }

  function setVolume(value) {
    masterGainNode.gain.setValueAtTime(value, audioContext.currentTime);
  }

  function createReverbImpulse(context, duration) {
    const sampleRate = context.sampleRate;
    const length = sampleRate * duration;
    const impulse = context.createBuffer(2, length, sampleRate);
    const leftChannel = impulse.getChannelData(0);
    const rightChannel = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate;
      const amplitude = Math.exp(-t * 3) * Math.random() * 0.5;
      leftChannel[i] = amplitude * (Math.random() * 2 - 1);
      rightChannel[i] = amplitude * (Math.random() * 2 - 1);
    }

    return impulse;
  }

  const Piano = new Nexus.Add.Piano("#keyboard", {
    size: [1024, 180],
    mode: "button",
    lowNote: 29,
    highNote: 53,
  });

  Piano.parent.style.position = "absolute";
  Piano.parent.style.opacity = 0;

  const oscillators = {};

  Piano.on("change", function ({ note, state }) {
    console.log(`Piano key ${note} ${state ? 'pressed' : 'released'}`);
    const id = note - 28;
    const freq = 440 * Math.pow(2, (note - 69) / 12);

    if (state) {
      try {
        const oscillator = audioContext.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);

        const gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(masterGainNode);

        oscillator.start();
        oscillators[note] = { oscillator, gainNode };

        if ($$(`#key${id}`)) {
          $$(`#key${id}`).style.backgroundColor = "#369";
        }
      } catch (e) {
        console.error("Error creating or starting oscillator:", e);
      }
    } else {
      if (oscillators[note]) {
        try {
          const { oscillator, gainNode } = oscillators[note];
          gainNode.gain.setValueAtTime(gainNode.gain.value, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.03);
          oscillator.stop(audioContext.currentTime + 0.03);
          delete oscillators[note];
        } catch (e) {
          console.error("Error stopping oscillator:", e);
        }
      }

      if ($$(`#key${id}`)) {
        $$(`#key${id}`).style.backgroundColor = "#d1d7e0";
      }
    }
  });

  // Controls
  const _controls = "mixer,t1,t2,t3,t4,s1,s2,s3,s4,s5,s6,s7,s8,sequencer".split(",");

  document
    .querySelectorAll(".controls .button-block")
    .forEach((control, index) => (control.id = _controls[index]));

  const Controls = {};
  _controls.forEach((control) => {
    const button = new Nexus.Add.Button(control, {
      size: [44, 44],
      mode: "button",
      state: false,
    }).on('change', function(v) {
      console.log(`Control ${control} ${v ? 'pressed' : 'released'}`);
      if (v) {
        if (control === 't1') changePianoType('sine');
        else if (control === 't2') changePianoType('square');
        else if (control === 't3') changePianoType('sawtooth');
        else if (control === 't4') changePianoType('triangle');
      }
    });

    button.parent.style.position = "absolute";
    button.parent.style.opacity = 0.12345;
    Controls[control] = button;
  });

  function changePianoType(type) {
    console.log(`Changing piano type to ${type}`);
    Object.values(oscillators).forEach(({ oscillator }) => {
      oscillator.type = type;
    });
  }

  // Transports
  const _transports = "synthesizer,drum,tape,lift,drop,split,record,play,stop,back,forward,Shift".split(",");

  document
    .querySelectorAll(".transports .button-block")
    .forEach((transport, index) => (transport.id = _transports[index]));

  const Transports = {};
  _transports.forEach((transport) => {
    const button = new Nexus.Add.Button(transport, {
      size: [44, 44],
      mode: "button",
      state: false,
    }).on('change', function(v) {
      console.log(`Transport ${transport} ${v ? 'pressed' : 'released'}`);
    });
    button.parent.style.position = "absolute";
    button.parent.style.opacity = 0.12345;
    Transports[transport] = button;
  });

  console.log("OP-1 Synthesizer initialized");
  return { Transports, Controls, Piano, Knobs };
}