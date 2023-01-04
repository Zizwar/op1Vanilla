const HTML_CSS_OP1 = `
<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");

  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");

  body {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0 auto;
  }

  /* Typefaces */

  h1 {
    font-family: "Roboto";
    font-weight: normal;
    font-size: 28px;
    margin: auto;
  }

  .op1-label {
    display: flex;
    text-align: left;
    width: 60px;
    height: 33px;
    line-height: 33px;
    font-weight: 300;
    color: rgba(67, 75, 95, 0.7);
    transform: rotate(-90deg);
    grid-row: 5;
    margin: 0px;
  }

  p {
    font-family: "Roboto";
    font-weight: normal;
    font-size: 12px;
    margin: auto;

    color: rgba(67, 75, 95, 0.7);
  }

  .condensed-10px {
    font-family: "Roboto Condensed";
    font-size: 10px;
  }

  .condensed-12px {
    font-family: "Roboto Condensed";
    font-size: 12px;
    letter-spacing: 0.04em;
    height: 14px;
  }

  .normal-10px {
    font-size: 10px;
  }

  .normal-12px {
    font-size: 12px;
  }

  .normal-18px {
    font-size: 18px;
  }

  .light-32px {
    font-size: 32px;
    font-weight: 300;
  }

  .green {
    color: #05bf37;
  }

  .orange {
    color: #ff5932;
  }

  .two-line-text {
    align-items: center;
    justify-content: center;
  }

  /* Container and background */

  .op1-container-layer1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 1256px;
    max-width: 1256px;
    height: 452px;

    background: linear-gradient(107.83deg, #dedfe4 1.91%, #cacdd4 97.76%);
    box-sizing: border-box;
    box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  .op1-container-layer2 {
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-start;
    align-items: center;
    min-width: 1256px;
    max-width: 1256px;
    height: 454px;

    background: linear-gradient(
      179.56deg,
      rgba(223, 224, 233, 0.5) 4.52%,
      rgba(205, 210, 220, 0.5) 96.3%
    );
    border: 2px solid #c4c4c2;
    box-sizing: border-box;
    box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  .inner-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 1162px;
    max-width: 1162px;
    height: 416px;
    margin-left: 18px;

    border: 1px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: inset 2px 2px 2px #d5d5d5;
    border-radius: 8px;
  }

  .dark-background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 1160px;
    max-width: 1160px;
    height: 412px;
    background-color: #0f0e0f;
    border-radius: 6px;
  }

  /* Upper elements */

  .upper-part {
    display: grid;
    grid-template-columns: repeat(8, 132px) 64px;
    grid-template-rows: repeat(1, 132px);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    margin-bottom: 4px;
  }

  .speaker-block {
    position: relative;
    display: flex;
    width: 132px;
    height: 132px;
    align-items: center;
    justify-content: center;
    grid-column: 1;
    grid-row: 1;

    background: #dfe0e9;
    border-radius: 4px;
  }

  .speaker {
    background-image: url("https://pizzabreakfast.co/project-assets/web-op-1/speaker.svg");
    width: 109px;
    height: 109px;
    background-size: 109px;
  }

  .button-group-1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }

  .long-button-block {
    position: relative;
    width: 132px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background: #dfe0e9;
    border-radius: 4px;
  }

  .vol-knob {
    position: relative;
    width: 44px;
    height: 44px;

    background: #fcfbfc;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
    border-radius: 100%;
    margin-left: 10px;
  }

  .knob-dot {
    position: relative;
    width: 8px;
    height: 8px;
    left: 11px;
    top: 27px;

    background: #f3f3f3;
    box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5),
      inset 1px 1px 1px rgba(209, 205, 199, 0.5);
    border-radius: 100%;
  }

  /* OP-1 screen */

  .op-screen {
    position: relative;
    width: 268px;
    height: 132px;

    background-color: #0f0e0f;
    border-radius: 4px;
    grid-column: 3 / 4;
  }

  .tape-rolls {
    position: absolute;
    top: 22.5px;
    left: 45px;
    min-width: 176px;
    max-width: 176px;
    min-height: 60px;
    max-height: 60px;
    display: grid;
    grid-template-columns: 60px 60px;
    grid-template-rows: 60px;
    grid-gap: 56px;
  }

  .roll-1 {
    transform: rotate(320deg);
  }

  .rotate-center {
    -webkit-animation: rotate-center 5s linear infinite;
    animation: rotate-center 5s linear infinite;
  }

  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .gloss {
    position: absolute;
    top: 0;
    left: 0;
  }

  /* Encoder section */

  .knobs {
    display: flex;
    grid-column: 5 / 9;
    justify-content: space-between;
  }

  .knob-block {
    position: relative;
    width: 132px;
    height: 132px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #dfe0e9;
    border-radius: 4px;
  }

  .outer-knob {
    position: relative;
    background-image: url("https://user-images.githubusercontent.com/11149530/71559596-96038580-2a68-11ea-8e32-8d0d6dc0e95f.png");
    width: 79px;
    height: 79px;
    background-size: 79px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .knob-blue {
    position: relative;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #5fbaf2;
    border: 2px solid #8bd0f9;
    box-sizing: border-box;
    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
    border-radius: 100%;
  }

  .imprint-blue {
    position: relative;
    width: 32px;
    height: 9px;

    background: #5bb3ee;
    box-shadow: 1px 1px 2px #89d9ff, inset 1px 1px 1px #0292d4;
    border-radius: 4px;
    transform: rotate(-45deg);
  }

  .knob-green {
    position: relative;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #00cd73;
    border: 2px solid #00f1ab;
    box-sizing: border-box;
    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
    border-radius: 100%;
  }

  .imprint-green {
    position: relative;
    width: 32px;
    height: 9px;

    background: #00cf77;
    box-shadow: 1px 1px 2px rgba(0, 241, 171, 0.75),
      -1px -1px 1px rgba(0, 241, 171, 0.5), inset 2px 2px 4px #00b34d,
      inset -2px -2px 4px #00bf66;
    border-radius: 4px;
  }

  .knob-white {
    position: relative;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #fcfbfc;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
    border-radius: 100%;
  }

  .imprint-white {
    position: relative;
    width: 32px;
    height: 9px;

    background: #f3f3f3;
    /* plastic-button-inner */
    box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5),
      inset 1px 1px 1px rgba(209, 205, 199, 0.5);
    border-radius: 4px;
    transform: rotate(45deg);
  }

  .knob-orange {
    position: relative;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ff6d27;
    border: 2px solid #ffa361;
    box-sizing: border-box;
    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
    border-radius: 100%;
  }

  .imprint-orange {
    position: relative;
    width: 32px;
    height: 9px;

    background: #ff6e2b;
    box-shadow: 1px 1px 2px #ffaa70, inset 1px 1px 2px #f74b26,
      inset -1px -1px 1px #ff6423;
    border-radius: 4px;
    transform: rotate(-90deg);
  }

  .top-right {
    display: flex;
    flex-direction: column;
    grid-column: 9;
    justify-content: space-between;
  }

  .transports-controls-keyboard {
    display: flex;
    flex-direction: row;
  }

  .transports {
    width: 204px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 64px);
    grid-template-rows: repeat(4, 64px);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }

  .controls-keyboard {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
  }

  .controls {
    display: grid;
    grid-template-columns: repeat(14, 64px);
    grid-template-rows: 64px;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    padding-bottom: 2px;
    margin-bottom: 2px;
  }

  .keyboard {
    display: grid;
    grid-template-columns: 268px 200px 268px 200px;
    grid-template-rows: 64px 132px;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }

  .black-keys-1 {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    /* grid-column: 1; */
  }

  .black-keys-2 {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    grid-column: 2;
  }

  .black-keys-3 {
    display: flex;
    justify-content: space-between;
    grid-column: 3;
  }

  .black-keys-4 {
    display: flex;
    justify-content: space-between;
    grid-column: 4;
  }

  .white-keys-1 {
    display: flex;
    justify-content: space-between;
    grid-column: 1;
    grid-row: 2;
  }

  .white-keys-2 {
    display: flex;
    justify-content: space-between;
    grid-column: 2;
    grid-row: 2;
  }

  .white-keys-3 {
    display: flex;
    justify-content: space-between;
    grid-column: 3;
    grid-row: 2;
  }

  .white-keys-4 {
    display: flex;
    justify-content: space-between;
    grid-column: 4;
    grid-row: 2;
  }

  .button-block {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #d1d7e0;
    border-radius: 4px;
  }

  .button {
    position: relative;
    width: 44px;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: #d8dbe3;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
    border-radius: 100%;
  }

  .buttons-two-elements {
    display: grid;
    grid-template-columns: 24px;
    grid-template-rows: 18px 18px;
    justify-content: center;
    align-items: center;
  }

  .black-key-block-short {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #dfe0e9;
    border-radius: 4px;
  }

  .black-key-block-long {
    width: 98px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #dfe0e9;
    border-radius: 4px;
  }

  .black-key {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 100%;

    background: #101010;
    border: 2px solid #e5e4eb;
    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
  }

  .black-key-left {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 100%;

    background: #101010;
    border: 2px solid #e5e4eb;
    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
    transform: translateX(-16px);
  }

  .black-key-right {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 100%;

    background: #101010;
    border: 2px solid #e5e4eb;
    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
    transform: translateX(16px);
  }

  .white-key-block {
    position: relative;
    width: 64px;
    height: 132px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d1d7e0;
    border-radius: 4px;
  }

  .white-key {
    position: relative;
    width: 42px;
    height: 110px;
    background: #d8dbe3;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;

    /* rubber-button */
    box-shadow: 6px 6px 16px #9fa6b3, -6px -6px 16px #e8ebf3;
    border-radius: 50px;
  }

  #icon16px {
    width: 16px;
  }

  #icon24px {
    width: 24px;
  }

  #icon36px {
    width: 36px;
  }

  .right-side-part {
    display: grid;
    grid-template-columns: 72px;
    grid-template-rows: 1fr;
    justify-content: center;
  }

  .microphone-vu-op1 {
    display: grid;
    grid-template-columns: 64px;
    grid-template-rows: 64px 64px 64px 64px 132px;
    grid-gap: 4px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    /* text-align: center; */
  }

  .vu-meter {
    display: grid;
    grid-template-columns: 4px;
    grid-template-rows: repeat(5, 13px);
    grid-row: 3;
  }

  .oval-4px {
    width: 4px;
    height: 4px;

    background: #42434e;
    border-radius: 100%;
  }
</style>

  <div class="op1-container-layer1">
    <div class="op1-container-layer2">
      <div class="inner-profile">
        <div class="dark-background">
          <div class="upper-part">
            <div class="speaker-block"><div class="speaker"></div></div>
            <div class="button-group-1">
              <div class="long-button-block">
                <div class="vol-knob">
                  <div class="knob-dot"></div>
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="36"
                    alt="Help button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/help-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="36"
                    alt="Tempo button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/tempo-icon.svg"
                  />
                </div>
              </div>
            </div>
            <div class="op-screen">
              <img
                class="op-screen-background"
                width="268"
                alt="op1-display-background"
                src="https://pizzabreakfast.co/project-assets/web-op-1/op1-display-background.svg"
              />
              <div class="tape-rolls">
                <img
                  class="roll-1 rotate-center"
                  width="60"
                  alt="roll-1"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/roll-1.svg"
                />
                <img
                  class="rotate-center"
                  width="60"
                  alt="roll-2"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/roll-2.svg"
                />
              </div>
              <img
                class="gloss"
                width="268"
                alt="Display gloss image"
                src="https://pizzabreakfast.co/project-assets/web-op-1/gloss.svg"
              />
            </div>
            <div class="knobs">
              <div class="knob-block">
                <div class="outer-knob">
                  <div class="knob-blue">
                    <div class="imprint-blue"></div>
                  </div>
                </div>
              </div>
              <div class="knob-block">
                <div class="outer-knob">
                  <div class="knob-green">
                    <div class="imprint-green"></div>
                  </div>
                </div>
              </div>
              <div class="knob-block">
                <div class="outer-knob">
                  <div class="knob-white">
                    <div class="imprint-white"></div>
                  </div>
                </div>
              </div>
              <div class="knob-block">
                <div class="outer-knob">
                  <div class="knob-orange">
                    <div class="imprint-orange"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="top-right">
              <div class="button-block">
                <div class="button">
                  <img
                    width="36"
                    alt="Microphone button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/mic-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <div>
                    <img
                      width="16"
                      alt="Album button icon"
                      src="https://pizzabreakfast.co/project-assets/web-op-1/album-icon.svg"
                    />
                    <p class="condensed-10px">COM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="transports-controls-keyboard">
            <div class="transports">
              <div class="button-block">
                <div class="button">
                  <img
                    width="36"
                    alt="Synthesizer button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/synthesizer-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="36"
                    alt="Drum button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/drum-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="36"
                    alt="Tape button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/tape-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <div>
                    <img
                      width="16"
                      alt="Lift button icon"
                      src="https://pizzabreakfast.co/project-assets/web-op-1/lift-icon.svg"
                    />
                    <p class="normal-10px">1–4</p>
                  </div>
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="16"
                    alt="Drop button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/drop-icon.svg"
                  />
                  <img
                    width="16"
                    alt="Dot icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/dot-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <div>
                    <img
                      width="16"
                      alt="Split button icon"
                      src="https://pizzabreakfast.co/project-assets/web-op-1/split-icon.svg"
                    />
                    <p class="condensed-10px">JOIN</p>
                  </div>
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="36"
                    alt="Record button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/record-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="24"
                    alt="Play button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/play-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="24"
                    alt="Stop button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/stop-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="24"
                    alt="Back button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/back-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button">
                  <img
                    width="24"
                    alt="Forward button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/forward-icon.svg"
                  />
                </div>
              </div>
              <div class="button-block">
                <div class="button"><p>Shift</p></div>
              </div>
            </div>

            <div class="controls-keyboard">
              <div class="controls">
                <div class="button-block">
                  <div class="button">
                    <img
                      width="36"
                      alt="Mixer button icon"
                      src="https://pizzabreakfast.co/project-assets/web-op-1/mixer-icon.svg"
                    />
                  </div>
                </div>
                <div class="button-block">
                  <div class="button"><p class="light-32px">1</p></div>
                </div>
                <div class="button-block">
                  <div class="button"><p class="light-32px">2</p></div>
                </div>
                <div class="button-block">
                  <div class="button"><p class="light-32px">3</p></div>
                </div>
                <div class="button-block">
                  <div class="button"><p class="light-32px">4</p></div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <div class="buttons-two-elements">
                      <p class="normal-18px">1</p>
                      <p class="condensed-12px green">IN</p>
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <div class="buttons-two-elements">
                      <p class="normal-18px">2</p>
                      <p class="condensed-12px green">OUT</p>
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <div class="buttons-two-elements">
                      <p class="normal-18px">3</p>
                      <img
                        width="24"
                        alt="Loop button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/loop-icon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <div class="buttons-two-elements">
                      <p class="normal-18px">4</p>
                      <img
                        width="24"
                        alt="Break button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/break-icon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <div class="buttons-two-elements">
                      <p class="normal-18px">5</p>
                      <p class="normal-12px orange">Я</p>
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <div class="buttons-two-elements">
                      <p class="normal-18px">6</p>
                      <img
                        width="24"
                        alt="Chop button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/chop-icon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <div class="buttons-two-elements">
                      <p class="normal-18px">7</p>
                      <p class="condensed-12px">M1</p>
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <div class="buttons-two-elements">
                      <p class="normal-18px">8</p>
                      <p class="condensed-12px">M2</p>
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <img
                      width="36"
                      alt="Sequencer button icon"
                      src="https://pizzabreakfast.co/project-assets/web-op-1/sequencer-icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div class="keyboard">
                <div class="black-keys-1">
                  <div class="black-key-block-long">
                    <div class="black-key-right"></div>
                  </div>
                  <div class="black-key-block-short">
                    <div class="black-key"></div>
                  </div>
                  <div class="black-key-block-long">
                    <div class="black-key-left"></div>
                  </div>
                </div>
                <div class="black-keys-2">
                  <div class="black-key-block-long">
                    <div class="black-key-right"></div>
                  </div>
                  <div class="black-key-block-long">
                    <div class="black-key-left"></div>
                  </div>
                </div>
                <div class="black-keys-3">
                  <div class="black-key-block-long">
                    <div class="black-key-right"></div>
                  </div>
                  <div class="black-key-block-short">
                    <div class="black-key"></div>
                  </div>
                  <div class="black-key-block-long">
                    <div class="black-key-left"></div>
                  </div>
                </div>
                <div class="black-keys-4">
                  <div class="black-key-block-long">
                    <div class="black-key-right"></div>
                  </div>
                  <div class="black-key-block-long">
                    <div class="black-key-left"></div>
                  </div>
                </div>
                <div class="white-keys-1">
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                </div>
                <div class="white-keys-2">
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                </div>
                <div class="white-keys-3">
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                </div>
                <div class="white-keys-4">
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                  <div class="white-key-block">
                    <div class="white-key"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side-part">
        <div class="microphone-vu-op1">
          <img
            width="16"
            alt="Inbuilt microphone image"
            src="https://pizzabreakfast.co/project-assets/web-op-1/microphone.svg"
          />
          <div class="vu-meter">
            <div class="oval-4px"></div>
            <div class="oval-4px"></div>
            <div class="oval-4px"></div>
            <div class="oval-4px"></div>
            <div class="oval-4px"></div>
          </div>
          <h1 class="op1-label">OP-1</h1>
        </div>
      </div>
    </div>
  </div>

`