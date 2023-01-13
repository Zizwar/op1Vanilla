export const HTML_OP1 = ({ pathIconSVG, screen }) => `
<div class="op1-container-layer1">
<div class="op1-container-layer2">
  <div class="inner-profile">
    <div class="dark-background">
      <div class="upper-part">
        <div class="speaker-block"><div class="speaker"></div></div>
        <div class="button-group-1">
          <div class="long-button-block">
            <div class="knob-volume">
              <div class="knob-dot"></div>
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="36"
                alt="Help button icon"
                src="${pathIconSVG}help-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="36"
                alt="Tempo button icon"
                src="${pathIconSVG}tempo-icon.svg"
              />
            </div>
          </div>
        </div>
        <div class="op-screen">
        
          <div class="op-screen-background" width="268">${screen}</div>
          <img
            class="gloss"
            width="268"
            alt="Display gloss image"
            src="${pathIconSVG}gloss.svg"
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
                src="${pathIconSVG}mic-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <div>
                <img
                  width="16"
                  alt="Album button icon"
                  src="${pathIconSVG}album-icon.svg"
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
                src="${pathIconSVG}synthesizer-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="36"
                alt="Drum button icon"
                src="${pathIconSVG}drum-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="36"
                alt="Tape button icon"
                src="${pathIconSVG}tape-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <div>
                <img
                  width="16"
                  alt="Lift button icon"
                  src="${pathIconSVG}lift-icon.svg"
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
                src="${pathIconSVG}drop-icon.svg"
              />
              <img
                width="16"
                alt="Dot icon"
                src="${pathIconSVG}dot-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <div>
                <img
                  width="16"
                  alt="Split button icon"
                  src="${pathIconSVG}split-icon.svg"
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
                src="${pathIconSVG}record-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="24"
                alt="Play button icon"
                src="${pathIconSVG}play-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="24"
                alt="Stop button icon"
                src="${pathIconSVG}stop-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="24"
                alt="Back button icon"
                src="${pathIconSVG}back-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="24"
                alt="Forward button icon"
                src="${pathIconSVG}forward-icon.svg"
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
                  src="${pathIconSVG}mixer-icon.svg"
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
                    src="${pathIconSVG}loop-icon.svg"
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
                    src="${pathIconSVG}break-icon.svg"
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
                    src="${pathIconSVG}chop-icon.svg"
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
                  src="${pathIconSVG}sequencer-icon.svg"
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
        src="${pathIconSVG}microphone.svg"
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

`;
