import { HTML_OP1 } from "./js/_html.js";
import { CSS_OP1 } from "./js/_css.js";
const $$ = (id) => document.querySelector(id);

export const Builder = (id) => {
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
    $$(`.knob-${knob}`).id = `knob-${knob}`;

    const dial = new Nexus.Add.Dial(`#knob-${knob}`, {
      size: [75, 75],
      interaction: "radial", // "radial", "vertical", or "horizontal"
      mode: "absolute", // "absolute" or "relative"
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
  $$(".knob-blue").id = "knob-blue";
  $$(".knob-blue").style.absolute = "absolute";
  $$(".imprint-blue").style.transform = "rotate(0deg)";
};
