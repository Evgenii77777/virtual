const body = document.querySelector("body");
body.innerHTML = `<div class="container">
      <div>
        <textarea name="text" id="text" class="text__area"></textarea>
      </div>
      <div>
        <ul class="first__list">
          <li>
            <div class="wrapper__dark">
              <span class="first__span">~</span>
              <span class="span__backuote"></span></div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">!</span>
              <span class="second__span">1</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">@</span>
              <span class="second__span">2</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">#</span>
              <span class="second__span">3</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">$</span>
              <span class="second__span">4</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">%</span>
              <span class="second__span">5</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">^</span>
              <span class="second__span">6</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">&</span>
              <span class="second__span">7</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">*</span>
              <span class="second__span">8</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">(</span>
              <span class="second__span">9</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">)</span>
              <span class="second__span">0</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">_</span>
              <span class="second__span span__minus">-</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">+</span>
              <span class="second__span span__equal">=</span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark-bigBack">
              <span class="span__backspace">Backspace</span>
            </div>
          </li>
        </ul>
        <ul class="second__list">
          <li>
            <div class="wrapper__dark">
              <span class="span__tab">Tab</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="q" class="second__span trans">Q</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="w" class="second__span">W</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="e" class="second__span">E</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="r" class="second__span">R</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="t" class="second__span">T</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="y" class="second__span">Y</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="u" class="second__span">U</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="i" class="second__span">I</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="o" class="second__span">O</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="p" class="second__span">P</span>
            </div>
          </li>
          <li>
            <div class="wrapper"><span class="second__span">[</span></div>
          </li>
          <li>
            <div class="wrapper"><span class="second__span">]</span></div>
          </li>
          <li>
            <div class="wrapper">
              <span class="first__span">|</span>
              <span class="second__span">\</span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark">
              <span class="span__del">DEL</span>
            </div>
          </li>
        </ul>
        <ul class="three__list">
          <li>
            <div class="wrapper__dark-bigCaps">
              <span class="span__capslock">Caps Lock</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="a" class="second__span">A</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="s" class="second__span">S</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="d" class="second__span">D</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="f" class="second__span">F</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="g" class="second__span">G</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="h" class="second__span">H</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="j" class="second__span">J</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="k" class="second__span">K</span>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <span data-i18="l" class="second__span">L</span>
            </div>
          </li>
          <li>
            <div class="wrapper"><span class="second__span">;</span></div>
          </li>
          <li>
            <div class="wrapper"><span class="second__span">'</span></div>
          </li>
          <li>
            <div class="wrapper__dark-big">
              <span class="span__enter">Enter</span>
            </div>
          </li>
        </ul>
        <ul class="four__list">
          <li>
            <div class="wrapper__dark-big">
              <span class="span__shift">Shift</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span data-i18="z" class="second__span">Z</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span data-i18="x" class="second__span">X</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span data-i18="c" class="second__span">C</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span data-i18="v" class="second__span">V</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span data-i18="b" class="second__span">B</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span data-i18="n" class="second__span">N</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span data-i18="m" class="second__span">M</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span class="second__span">,</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span class="second__span">.</span>
            </div>
          </li>
          <li>
            <div class="wrapper" class="wrapper">
              <span class="second__span">/</span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark" class="wrapper">
              <span class="span__up">
                <svg class="social__icon">
                  <use
                    xlink:href="./assets/symbol-defs.svg#icon-arrow-up2"
                  ></use>
                </svg>
              </span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark-big">
              <span class="span__shift-rigth">Shift</span>
            </div>
          </li>
        </ul>
        <ul class="five__list">
          <li>
            <div class="wrapper__dark-big">
              <span class="span__ctrl">Ctrl</span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark">
              <span class="span__win">Win</span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark">
              <span class="span__alt">Alt</span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark-space"></div>
          </li>
          <li>
            <div class="wrapper__dark">
              <span class="span__alt-rigth">Alt</span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark-big">
              <span class="span__ctrl-rigth">Ctrl</span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark">
              <span class="span__left">
                <svg class="social__icon">
                  <use
                    xlink:href="./assets/symbol-defs.svg#icon-arrow-left2"
                  ></use>
                </svg>
              </span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark">
              <span class="span__down">
                <svg class="social__icon">
                  <use
                    xlink:href="./assets/symbol-defs.svg#icon-arrow-down2"
                  ></use>
                </svg>
              </span>
            </div>
          </li>
          <li>
            <div class="wrapper__dark">
              <span class="span__right">
                <svg class="social__icon">
                  <use
                    xlink:href="./assets/symbol-defs.svg#icon-arrow-right2"
                  ></use>
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <p data-i18="change">Alt+Shift - change the language</p>
    </div>
    `;
