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

  if (!window.AudioContext && !window.webkitAudioContext) {
    console.error("Web Audio API غير مدعوم في هذا المتصفح");
    alert("متصفحك لا يدعم Web Audio API. قد لا يعمل السينثيسايزر بشكل صحيح.");
    return;
  }

  let audioContext;
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    console.error("خطأ في إنشاء AudioContext:", e);
    alert("فشل في إنشاء AudioContext. قد لا يعمل السينثيسايزر بشكل صحيح.");
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

  // Set initial volume
  masterGainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

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
      value: knob === "volume" ? 0.5 : 0,
    }).on("change", (value) => {
      $$(_class).style.transform = `rotate(${value * 360}deg)`;
      console.log(`تم تغيير قيمة المقبض ${knob} إلى ${value}`);
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

  const Piano = new Nexus.Add.Piano("#keyboard", {
    size: [1024, 180],
    mode: "button",
    lowNote: 48,
    highNote: 72,
  });

  Piano.parent.style.position = "absolute";
  Piano.parent.style.opacity = 0;

  const oscillators = {};
  let currentInstrument = 'piano';

  const instrumentSettings = {
    piano: { type: 'triangle', attack: 0.005, decay: 3, sustain: 0.1, release: 0.1 },
    violin: { type: 'sawtooth', attack: 0.1, decay: 0.3, sustain: 0.8, release: 0.2 },
    guitar: { type: 'square', attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.1 },
    flute: { type: 'sine', attack: 0.05, decay: 0.2, sustain: 0.7, release: 0.1 },
    trumpet: { type: 'sawtooth', attack: 0.05, decay: 0.1, sustain: 0.9, release: 0.1 },
    clarinet: { type: 'triangle', attack: 0.05, decay: 0.1, sustain: 0.8, release: 0.1 },
    harp: { type: 'triangle', attack: 0.001, decay: 2.5, sustain: 0.1, release: 0.1 },
    xylophone: { type: 'sine', attack: 0.001, decay: 0.5, sustain: 0, release: 0.001 }
  };

  function changeInstrument(instrumentType) {
    console.log(`تغيير نوع الآلة إلى ${instrumentType}`);
    currentInstrument = instrumentType;
    
    // Update filter settings based on the instrument
    const settings = instrumentSettings[instrumentType];
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(5000, audioContext.currentTime); // Default cutoff
    filterNode.Q.setValueAtTime(1, audioContext.currentTime); // Default resonance

    if (instrumentType === 'trumpet' || instrumentType === 'clarinet') {
      filterNode.type = 'bandpass';
      filterNode.frequency.setValueAtTime(2000, audioContext.currentTime);
      filterNode.Q.setValueAtTime(5, audioContext.currentTime);
    } else if (instrumentType === 'xylophone') {
      filterNode.type = 'highpass';
      filterNode.frequency.setValueAtTime(2000, audioContext.currentTime);
    }

    // Update reverb settings
    const reverbDuration = instrumentType === 'piano' || instrumentType === 'harp' ? 2 : 1;
    setReverbWetness(reverbDuration / 3); // Normalize to 0-1 range
  }

  Piano.on("change", function ({ note, state }) {
    console.log(`مفتاح البيانو ${note} ${state ? 'تم الضغط عليه' : 'تم تحريره'}`);
    const freq = 440 * Math.pow(2, (note - 69) / 12);

    if (state) {
      try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const settings = instrumentSettings[currentInstrument];

        oscillator.type = settings.type;
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);

        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + settings.attack);
        gainNode.gain.linearRampToValueAtTime(settings.sustain * 0.5, audioContext.currentTime + settings.attack + settings.decay);

        oscillator.connect(gainNode);
        gainNode.connect(masterGainNode);

        oscillator.start();
        oscillators[note] = { oscillator, gainNode };

        const id = note - 47;
        if ($$(`#key${id}`)) {
          $$(`#key${id}`).style.backgroundColor = "#369";
        }
      } catch (e) {
        console.error("خطأ في إنشاء أو بدء المذبذب:", e);
      }
    } else {
      if (oscillators[note]) {
        try {
          const { oscillator, gainNode } = oscillators[note];
          const settings = instrumentSettings[currentInstrument];
          
          gainNode.gain.setValueAtTime(gainNode.gain.value, audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + settings.release);
          oscillator.stop(audioContext.currentTime + settings.release);
          
          setTimeout(() => {
            delete oscillators[note];
          }, settings.release * 1000);

          const id = note - 47;
          if ($$(`#key${id}`)) {
            $$(`#key${id}`).style.backgroundColor = "#d1d7e0";
          }
        } catch (e) {
          console.error("خطأ في إيقاف المذبذب:", e);
        }
      }
    }
  });

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
      console.log(`زر التحكم ${control} ${v ? 'تم الضغط عليه' : 'تم تحريره'}`);
      if (v) {
        if (control.startsWith('s')) {
          const instrumentType = ['piano', 'violin', 'guitar', 'flute', 'trumpet', 'clarinet', 'harp', 'xylophone'][parseInt(control[1]) - 1];
          changeInstrument(instrumentType);
        }
      }
    });

    button.parent.style.position = "absolute";
    button.parent.style.opacity = 0.12345;
    Controls[control] = button;
  });

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
      console.log(`زر النقل ${transport} ${v ? 'تم الضغط عليه' : 'تم تحريره'}`);
      // Implement transport controls functionality here
    });
    button.parent.style.position = "absolute";
    button.parent.style.opacity = 0.12345;
    Transports[transport] = button;
  });

  // Initialize with piano sound
  changeInstrument('piano');

  console.log("تم تهيئة سينثيسايزر OP-1");
  return { Transports, Controls, Piano, Knobs };
}