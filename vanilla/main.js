import { HTML_OP1 } from "./js/_html.js";
import { CSS_OP1 } from "./js/_css.js";

export default function (id) {
  const $$ = (id) => document.querySelector(id);
  const innerOp = $$(id);
  innerOp.innerHTML = CSS_OP1 + HTML_OP1;
  //
  const _knobs = ["blue", "green", "orange", "white"];
  //
  const Knobs = [];
  _knobs.forEach((knob) => {
    const classImprint = `.imprint-${knob}`;
    const idKnobe = `knob-${knob}`;
    $$(classImprint).style.transform = `rotate(0deg)`;
    //
    $$(`.${idKnobe}`).id = idKnobe;

    const dial = new Nexus.Add.Dial(`#${idKnobe}`, {
      size: [75, 75],
      interaction: "radial",
      mode: "absolute",
      min: 0,
      max: 1,
      step: 0,
      value: 0,
    }).on("change", (value) => {
      // $$("#display-circle-volume").setAttribute("cy", 100 - value * 100);
      $$(classImprint).style.transform = `rotate(${value * 360}deg)`;
    });

    dial.parent.style.position = "absolute";
    dial.parent.style.opacity = 0;
    Knobs[knob] = dial;
  });
  //
  // Piano
  // preapr elemnt
  // compatibe key style with piano nexus
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
          //console.log({id:idKey[ii][i],i})
        }
      });
    }
  });
  //creat piano nexus
  const Piano = new Nexus.Add.Piano("#keyboard", {
    size: [1024, 180],
    mode: "button",
    lowNote: 29,
    highNote: 53,
  });
  Piano.parent.style.position = "absolute";
  Piano.parent.style.opacity = 0.5;

  Piano.on("change", function ({ note, state }) {
    const id = note - 28;
    if ($$(`#key${id}`))
      $$(`#key${id}`).style.backgroundColor = state ? "#369" : "#d1d7e0";
    // console.log({ note, state });
  });
  // Controle
  //prepar Element
  //compatibe controle style with Button nexus
  //
  const _controls = "mixer,t1,t2,t3,t4,s1,s2,s3,s4,s5,s6,s7,s8,sequencer".split(
    ","
  );

  document
    .querySelectorAll(".controls .button-block")
    .forEach((control, index) => (control.id = _controls[index]));

  const Controls = [];
  _controls.forEach((control) => {
    const button = new Nexus.Add.Button(control, {
      size: [44, 44],
      mode: "button",
      state: false,
    });
    button.parent.style.position = "absolute";
    button.parent.style.opacity = 0.12345;
    Controls[control] = button;
  });
  return { Controls, Piano, Knobs };
};
