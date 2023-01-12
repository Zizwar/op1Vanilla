export const HTML_OP1 = (pathSVG = "./static/svg") => `
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
                src="${pathSVG}help-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="36"
                alt="Tempo button icon"
                src="${pathSVG}tempo-icon.svg"
              />
            </div>
          </div>
        </div>
        <div class="op-screen">
          <div class="op-screen-background" width="268"><svg width="268" height="132" viewBox="0 0 268 132" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="268" height="132" rx="6" fill="#0F0E0F"></rect><path d="M187.5 92L188 93.5" stroke="#34333A"></path><path d="M188.5 99.5V99.5C188.817 101.085 188.417 102.729 187.407 103.991L187 104.5" stroke="#34333A"></path><path d="M73.5 97.5V97.5C73.1783 95.8914 73.4677 94.2205 74.3117 92.8138L74.5 92.5" stroke="#34333A"></path><path d="M73.5 97.5V97.5C73.1783 95.8914 73.4677 94.2205 74.3117 92.8138L74.5 92.5" stroke="#34333A"></path><path d="M75.5 105L75 103" stroke="#34333A"></path><path d="M173.5 97.5L186 98.5" stroke="#646471"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M138.545 50.015V53.909L131.455 49.7726L138.545 45.6362V48.9999H141.909C145.273 48.9999 148 51.7269 148 55.0908C148 58.4547 145.273 61.1817 141.909 61.1817H126.091C122.727 61.1817 120 58.4547 120 55.0908C120 51.7269 122.727 48.9999 126.091 48.9999H127V50.015H126.317C123.565 50.015 121.333 52.2462 121.333 54.9985C121.333 57.7508 123.565 59.982 126.317 59.982H141.683C144.436 59.982 146.667 57.7508 146.667 54.9985C146.667 52.2462 144.436 50.015 141.683 50.015H138.545Z" fill="white"></path><path d="M108.144 26H107.05V13.2168L103.837 14.6523V13.5391L107.959 11.7324H108.144V26Z" fill="#28272A"></path><path d="M120.361 26H112.822V25.082L116.865 19.623C117.542 18.6921 118.014 17.9206 118.281 17.3086C118.548 16.6966 118.682 16.0977 118.682 15.5117C118.682 14.6198 118.467 13.9134 118.037 13.3926C117.614 12.8652 117.025 12.6016 116.27 12.6016C115.469 12.6016 114.831 12.9076 114.355 13.5195C113.88 14.125 113.643 14.9128 113.643 15.8828H112.559C112.559 14.6458 112.9 13.6204 113.584 12.8066C114.268 11.9928 115.163 11.5859 116.27 11.5859C117.35 11.5859 118.206 11.9245 118.838 12.6016C119.469 13.2721 119.785 14.2064 119.785 15.4043C119.785 16.5436 119.271 17.875 118.242 19.3984L117.617 20.2969L114.141 24.9941H120.361V26ZM122.129 25.2871C122.129 25.0527 122.201 24.8574 122.344 24.7012C122.494 24.5384 122.699 24.457 122.959 24.457C123.22 24.457 123.425 24.5384 123.575 24.7012C123.724 24.8574 123.799 25.0527 123.799 25.2871C123.799 25.515 123.724 25.7038 123.575 25.8535C123.425 26.0033 123.22 26.0781 122.959 26.0781C122.699 26.0781 122.494 26.0033 122.344 25.8535C122.201 25.7038 122.129 25.515 122.129 25.2871ZM122.149 16.2832C122.149 16.0488 122.22 15.8535 122.364 15.6973C122.513 15.5345 122.718 15.4531 122.979 15.4531C123.239 15.4531 123.444 15.5345 123.594 15.6973C123.744 15.8535 123.819 16.0488 123.819 16.2832C123.819 16.5111 123.744 16.6999 123.594 16.8496C123.444 16.9993 123.239 17.0742 122.979 17.0742C122.718 17.0742 122.513 16.9993 122.364 16.8496C122.22 16.6999 122.149 16.5111 122.149 16.2832ZM126.436 18.7148L127.022 11.7812H133.028V12.8945H127.95L127.55 17.6602C128.188 17.1393 128.92 16.8789 129.747 16.8789C130.834 16.8789 131.693 17.2988 132.325 18.1387C132.963 18.972 133.282 20.082 133.282 21.4688C133.282 22.9531 132.97 24.112 132.345 24.9453C131.72 25.7786 130.831 26.1953 129.679 26.1953C128.63 26.1953 127.781 25.847 127.13 25.1504C126.479 24.4473 126.111 23.4837 126.026 22.2598H127.061C127.152 23.2168 127.423 23.946 127.872 24.4473C128.321 24.9421 128.923 25.1895 129.679 25.1895C130.505 25.1895 131.13 24.8672 131.554 24.2227C131.983 23.5781 132.198 22.6667 132.198 21.4883C132.198 20.4401 131.957 19.5938 131.475 18.9492C131 18.2982 130.356 17.9727 129.542 17.9727C129.073 17.9727 128.669 18.0475 128.331 18.1973C127.992 18.3405 127.647 18.6042 127.296 18.9883L126.436 18.7148ZM142.355 20.0625C142.355 22.0807 142.042 23.6074 141.417 24.6426C140.799 25.6777 139.884 26.1953 138.673 26.1953C137.475 26.1953 136.56 25.681 135.929 24.6523C135.304 23.6172 134.985 22.1263 134.972 20.1797V17.6797C134.972 15.7005 135.281 14.1901 135.9 13.1484C136.518 12.1068 137.436 11.5859 138.654 11.5859C139.851 11.5859 140.763 12.0905 141.388 13.0996C142.013 14.1022 142.335 15.5671 142.355 17.4941V20.0625ZM141.261 17.5234C141.261 15.8958 141.043 14.6686 140.607 13.8418C140.177 13.015 139.526 12.6016 138.654 12.6016C137.814 12.6016 137.172 12.9987 136.73 13.793C136.293 14.5807 136.066 15.7559 136.046 17.3184V20.1992C136.046 21.7878 136.267 23.0182 136.71 23.8906C137.159 24.7565 137.814 25.1895 138.673 25.1895C139.506 25.1895 140.141 24.7793 140.577 23.959C141.02 23.1322 141.248 21.9212 141.261 20.3262V17.5234ZM144.406 25.2871C144.406 25.0527 144.477 24.8574 144.621 24.7012C144.77 24.5384 144.976 24.457 145.236 24.457C145.496 24.457 145.701 24.5384 145.851 24.7012C146.001 24.8574 146.076 25.0527 146.076 25.2871C146.076 25.515 146.001 25.7038 145.851 25.8535C145.701 26.0033 145.496 26.0781 145.236 26.0781C144.976 26.0781 144.77 26.0033 144.621 25.8535C144.477 25.7038 144.406 25.515 144.406 25.2871ZM144.425 16.2832C144.425 16.0488 144.497 15.8535 144.64 15.6973C144.79 15.5345 144.995 15.4531 145.255 15.4531C145.516 15.4531 145.721 15.5345 145.871 15.6973C146.02 15.8535 146.095 16.0488 146.095 16.2832C146.095 16.5111 146.02 16.6999 145.871 16.8496C145.721 16.9993 145.516 17.0742 145.255 17.0742C144.995 17.0742 144.79 16.9993 144.64 16.8496C144.497 16.6999 144.425 16.5111 144.425 16.2832ZM155.588 26H148.049V25.082L152.092 19.623C152.769 18.6921 153.241 17.9206 153.508 17.3086C153.775 16.6966 153.908 16.0977 153.908 15.5117C153.908 14.6198 153.693 13.9134 153.264 13.3926C152.84 12.8652 152.251 12.6016 151.496 12.6016C150.695 12.6016 150.057 12.9076 149.582 13.5195C149.107 14.125 148.869 14.9128 148.869 15.8828H147.785C147.785 14.6458 148.127 13.6204 148.811 12.8066C149.494 11.9928 150.389 11.5859 151.496 11.5859C152.577 11.5859 153.433 11.9245 154.064 12.6016C154.696 13.2721 155.012 14.2064 155.012 15.4043C155.012 16.5436 154.497 17.875 153.469 19.3984L152.844 20.2969L149.367 24.9941H155.588V26ZM164.631 20.0625C164.631 22.0807 164.319 23.6074 163.694 24.6426C163.075 25.6777 162.161 26.1953 160.95 26.1953C159.752 26.1953 158.837 25.681 158.205 24.6523C157.58 23.6172 157.261 22.1263 157.248 20.1797V17.6797C157.248 15.7005 157.558 14.1901 158.176 13.1484C158.795 12.1068 159.713 11.5859 160.93 11.5859C162.128 11.5859 163.039 12.0905 163.664 13.0996C164.289 14.1022 164.612 15.5671 164.631 17.4941V20.0625ZM163.537 17.5234C163.537 15.8958 163.319 14.6686 162.883 13.8418C162.454 13.015 161.802 12.6016 160.93 12.6016C160.09 12.6016 159.449 12.9987 159.006 13.793C158.57 14.5807 158.342 15.7559 158.323 17.3184V20.1992C158.323 21.7878 158.544 23.0182 158.987 23.8906C159.436 24.7565 160.09 25.1895 160.95 25.1895C161.783 25.1895 162.418 24.7793 162.854 23.959C163.297 23.1322 163.524 21.9212 163.537 20.3262V17.5234Z" fill="white"></path><rect x="117" y="34" width="1" height="3" fill="#646471"></rect><rect x="134" y="32" width="1" height="7" fill="#646471"></rect><rect x="125" y="34" width="1" height="3" fill="#646471"></rect><rect x="142" y="34" width="1" height="3" fill="#646471"></rect><rect x="150" y="33" width="1" height="5" fill="white"></rect><circle cx="191" cy="53" r="33.25" stroke="white" stroke-width="1.5"></circle><path d="M27.7598 27.0234H29.6836V28.0098H27.7598V31.2227H26.5879V28.0098H18.7266V27.3164L26.4121 16.623H27.7598V27.0234ZM20.1816 27.0234H26.5879V18.0098L26.1387 18.7812L20.1816 27.0234Z" fill="white"></path><rect x="12.75" y="12.75" width="22.5" height="22.5" stroke="white" stroke-width="1.5"></rect><path d="M73.5 100.5L58 81" stroke="#646471"></path><path d="M166.5 97L140.5 101.5" stroke="#646471"></path><path d="M128.5 101.5L103 98" stroke="#646471"></path><path d="M206.246 63.082L194.5 97.0001" stroke="#646471"></path><path d="M92 98.5L78.5 102.5" stroke="#646471"></path><circle cx="191.5" cy="96.5" r="3" stroke="white"></circle><circle cx="76.5" cy="100.5" r="3" stroke="white"></circle><circle cx="171.5" cy="100.5" r="6" stroke="white"></circle><rect x="168.672" y="102.621" width="7" height="1" rx="0.5" transform="rotate(-45 168.672 102.621)" fill="white"></rect><circle cx="97.5" cy="100.5" r="6" stroke="white"></circle><circle cx="97.5" cy="100.5" r="1.5" fill="white"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M129 93H140V101.074L138.258 101.208C137.174 101.291 136.087 101.339 135 101.35V97H134V101.35C132.913 101.339 131.826 101.291 130.742 101.208L129 101.074V93ZM138.335 102.205L141 102V93V92H140H129H128V93V102L130.665 102.205C133.218 102.401 135.782 102.401 138.335 102.205Z" fill="white"></path><rect x="134" y="104" width="1" height="25" fill="#B7BBDC"></rect><rect x="23" y="109" width="1" height="6" fill="#868490"></rect><rect x="65" y="109" width="1" height="6" fill="#868490"></rect><rect x="108" y="109" width="1" height="6" fill="#868490"></rect><rect x="151" y="109" width="1" height="6" fill="#868490"></rect><rect x="194" y="109" width="1" height="6" fill="#868490"></rect><rect x="237" y="109" width="1" height="6" fill="#868490"></rect><rect x="16" y="122" width="34" height="1" fill="#3D3150"></rect><rect x="16" y="120" width="42" height="1" fill="#3D3150"></rect><rect x="61" y="120" width="19" height="1" fill="#3D3150"></rect><rect x="82" y="120" width="10" height="1" fill="#3D3150"></rect><rect x="114" y="120" width="1" height="1" fill="#3D3150"></rect><rect x="123" y="120" width="1" height="1" fill="#3D3150"></rect><rect x="126" y="120" width="81" height="1" fill="#3D3150"></rect><rect x="117" y="120" width="3" height="1" fill="#3D3150"></rect><rect x="213" y="120" width="1" height="1" fill="#3D3150"></rect><rect x="216" y="120" width="36" height="1" fill="#3D3150"></rect><rect x="84" y="124" width="81" height="1" fill="#3D3150"></rect><rect x="16" y="124" width="58" height="1" fill="#3D3150"></rect><rect x="77" y="124" width="1" height="1" fill="#3D3150"></rect><rect x="198" y="124" width="11" height="1" fill="#3D3150"></rect><rect x="167" y="124" width="1" height="1" fill="#3D3150"></rect><rect x="176" y="124" width="1" height="1" fill="#3D3150"></rect><rect x="170" y="124" width="3" height="1" fill="#3D3150"></rect><rect x="16" y="117" width="59" height="1" fill="#FF3E65"></rect><rect x="77" y="117" width="1" height="1" fill="#FF3E65"></rect><rect x="84" y="117" width="81" height="1" fill="#6991FF"></rect><rect x="167" y="117" width="1" height="1" fill="#FF3E65"></rect><rect x="176" y="117" width="1" height="1" fill="#FF3E65"></rect><rect x="198" y="117" width="11" height="1" fill="#FF3E65"></rect><rect x="170" y="117" width="4" height="1" fill="#FF3E65"></rect><circle cx="134.767" cy="114.233" r="1.76724" fill="#1CF09A"></circle><circle cx="186.233" cy="114.233" r="1.76724" fill="#1CF09A"></circle><rect x="133.828" y="113.879" width="52.3448" height="0.706897" fill="#1CF09A"></rect><circle cx="76" cy="53" r="33.25" stroke="white" stroke-width="1.5"></circle><rect x="245" y="14" width="1" height="86" fill="#532933"></rect><rect id="display-rect-volume" x="245" y="66" width="1" height="34" fill="#F73C5B"></rect><circle id="display-circle-volume" cx="245.5" cy="47.8159" r="2.5" fill="#F73C5B"></circle></svg></div>
          <div class="tape-rolls">
            <img
              class="roll-1 rotate-center"
              width="60"
              alt="roll-1"
              src="${pathSVG}roll-1.svg"
            />
            <img
              class="rotate-center"
              width="60"
              alt="roll-2"
              src="${pathSVG}roll-2.svg"
            />
          </div>
          <img
            class="gloss"
            width="268"
            alt="Display gloss image"
            src="${pathSVG}gloss.svg"
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
                src="${pathSVG}mic-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <div>
                <img
                  width="16"
                  alt="Album button icon"
                  src="${pathSVG}album-icon.svg"
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
                src="${pathSVG}synthesizer-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="36"
                alt="Drum button icon"
                src="${pathSVG}drum-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="36"
                alt="Tape button icon"
                src="${pathSVG}tape-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <div>
                <img
                  width="16"
                  alt="Lift button icon"
                  src="${pathSVG}lift-icon.svg"
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
                src="${pathSVG}drop-icon.svg"
              />
              <img
                width="16"
                alt="Dot icon"
                src="${pathSVG}dot-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <div>
                <img
                  width="16"
                  alt="Split button icon"
                  src="${pathSVG}split-icon.svg"
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
                src="${pathSVG}record-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="24"
                alt="Play button icon"
                src="${pathSVG}play-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="24"
                alt="Stop button icon"
                src="${pathSVG}stop-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="24"
                alt="Back button icon"
                src="${pathSVG}back-icon.svg"
              />
            </div>
          </div>
          <div class="button-block">
            <div class="button">
              <img
                width="24"
                alt="Forward button icon"
                src="${pathSVG}forward-icon.svg"
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
                  src="${pathSVG}mixer-icon.svg"
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
                    src="${pathSVG}loop-icon.svg"
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
                    src="${pathSVG}break-icon.svg"
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
                    src="${pathSVG}chop-icon.svg"
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
                  src="${pathSVG}sequencer-icon.svg"
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
        src="${pathSVG}microphone.svg"
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
