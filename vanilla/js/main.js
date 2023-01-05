import { HTML_OP1 } from "./_html.js";
import { CSS_OP1 } from "./_css.js";
const $$ = (id) => document.querySelector(id);
export const builder = (id) => {
  const innerOp = $$(id);
  innerOp.innerHTML = CSS_OP1 + HTML_OP1;
  innerOp.onload = () => alert("loaded 100%");

  $$(".knob-blue").id = "knob-blue";
  $$(".knob-blue").style.absolute = "absolute";
  $$(".imprint-blue").style.transform = "rotate(0deg)";

  const dial = new Nexus.Add.Dial("#knob-blue", {
    size: [75, 75],
    interaction: "radial", // "radial", "vertical", or "horizontal"
    mode: "absolute", // "absolute" or "relative"
    min: 0,
    max: 1,
    step: 0,
    value: 0,
  });
  dial.parent.style.position = "absolute";
  dial.parent.style.float = "left";
  dial.parent.style.opacity = 0;

  dial.on("change", (val) => {
    $$(".imprint-blue").style.transform = `rotate(${val * 360}deg)`;
  });
};
