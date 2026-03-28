'use strict';

let memory = Cookies.get('memory') ? JSON.parse(Cookies.get('memory')) : {};

const html_el = document.documentElement;
const os_el = document.getElementById('os');
const browser_el = document.getElementById('browser');
const browser_width_el = document.getElementById('browserWidth');
const wider_el = document.getElementById('wider');
const return_el = document.getElementById('return');
const resume_el = document.getElementById('resume');
const reset_el = document.getElementById('reset');
const modeSelect = document.getElementById('mode');

modeSelect.addEventListener('change', () => {
  let mode = modeSelect.value;
  if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (mode === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
});

const state = {
  current_step: 0,
  platform: '',
  browser: '',
  os: '',
  mobile: false,
  tablet: false,
  desktop: false,
};

const stepHandlers = new Map();

const registerStep = (num, fn) => stepHandlers.set(num, fn);

const originalAlert = window.alert.bind(window);
window.alert = (str) => {
  originalAlert(str);
  stepHandlers.get(state.current_step)?.(str);
};


registerStep(1, (str) => {
  if (str === 'Hello World!') return showStep(2);
  if (str.toLowerCase() === 'hello world!') {
    return console.log(
      'ശ്രദ്ധിക്കുക! ജാവാസ്ക്രിപ്റ്റിൽ, അപ്പർകേസ് & ലോവർകേസ് അക്ഷരങ്ങൾ വ്യത്യാസമുണ്ട്. എല്ലാ അക്ഷരങ്ങൾക്കും ശരിയായ കേസ് ഉണ്ടെന്ന് ഉറപ്പുവരുത്തുക.'
    );
  }
  console.log('ദയവായി ശരിയായ സ്ട്രിങ് ടൈപ്പ് ചെയ്യുക.');
});

registerStep(5, (str) => {
  if (str == 24) return showStep(6);
  console.log('വീണ്ടും ശ്രമിക്കുക!');
});

registerStep(7, (str) => {
  if (str == window.innerWidth) {
    browser_width_el.innerHTML = window.innerWidth;
    return showStep(8);
  }
  console.log(`ഉത്തരം ${window.innerWidth} ആയിരിക്കണം!`);
});

registerStep(10, (str) => {
  if (str === window.location.href) showStep(11);
});

registerStep(12, (str) => {
  if (str === 'OMG') showStep(13);
});

registerStep(14, (str) => {
  if (str.toString() === 'What,is,up') showStep(15);
});

registerStep(15, (str) => {
  if (str.toString() === '7,unniyappam,true') showStep(16);
});

const requireMyThings = (minLength = 0) => {
  if (typeof my_things === 'undefined') {
    console.log('ദയവായി "my_things" എന്ന അറേ ഉണ്ടാക്കുക.');
    return false;
  }
  if (minLength && my_things.length < minLength) {
    console.log(`ദയവായി കുറഞ്ഞത് ${minLength} വസ്തുക്കളുള്ള അറേ ഉണ്ടാക്കുക.`);
    return false;
  }
  return true;
};

registerStep(18, (str) => {
  if (!state.desktop) return showStep(19);
  if (!requireMyThings()) return;
  if (str == my_things) showStep(19);
});

registerStep(19, (str) => {
  if (!state.desktop) return showStep(20);
  if (!requireMyThings(2)) return;
  if (str != my_things[1]) return console.log('ദയവായി ഇൻഡെക്സ് 1-ലുള്ള വസ്തു തിരഞ്ഞെടുക്കുക.');
  showStep(20);
});

registerStep(20, (str) => {
  if (!state.desktop) return showStep(21);
  if (!requireMyThings()) return;
  if (str == my_things.length) showStep(21);
  else console.log('ദയവായി "my_things" എന്ന അറേ ഉണ്ടാക്കുക.');
});

registerStep(21, (str) => {
  if (!state.desktop) return showStep(22);
  if (!requireMyThings()) return;
  if (str.toString() === '7,unniyappam,true') return;
  if (str.toString() === '7,unniyappam,true,LOVE') return showStep(22);
  console.log('ദയവായി "my_things" എന്ന അറേ ഉണ്ടാക്കി "LOVE" എന്ന സ്ട്രിങ് ചേർക്കുക.');
});

registerStep(22, (str) => {
  if (!state.desktop) return showStep(23);
  if (!requireMyThings()) return;
  if (str.toString() === '7,unniyappam,true') return;
  if (str.toString() === '7,unniyappam,true,The Button') return showStep(23);
  console.log('ദയവായി "my_things" എന്ന അറേ ഉണ്ടാക്കി "The Button" എന്ന സ്ട്രിങ് ചേർക്കുക.');
});

registerStep(23, (str) => {
  if (!state.desktop) return showStep(24);
  if (!requireMyThings()) return;
  if (str == true) return console.log('അറേയിൽ ഇല്ലാത്ത ഒരു ഘടകത്തിനായി പരീക്ഷിക്കുക.');
  if (str == false) return showStep(24);
  console.log('ദയവായി "my_things" എന്ന അറേ ഉണ്ടാക്കി "includes()" എന്ന മെത്തേഡിനെ വിളിക്കുക.');
});

registerStep(24, (str) => {
  if (str == window.innerWidth > 400) {
    wider_el.style.display = window.innerWidth > 400 ? 'none' : 'inline';
    return showStep(25);
  }
  console.log('വീണ്ടും ശ്രമിക്കുക!');
});

registerStep(26, (str) => {
  if (str.startsWith('Welcome to my Mana! 🤗')) return showStep(27);
  console.log('വീണ്ടും ശ്രമിക്കുക!');
});

registerStep(27, (str) => {
  if (str.startsWith('Welcome to my Mana! 🤗')) return showStep(28);
  if (str.startsWith('Come back, my son! 😉')) return console.log('"==" ഓപ്പറേറ്റർ ഉപയോഗിക്കുന്നുവെന്ന് ഉറപ്പാക്കുക.');
  console.log('വീണ്ടും ശ്രമിക്കുക!');
});

registerStep(28, (str) => {
  if (
    (window.innerWidth > 2000 && str.startsWith('Big screen')) ||
    (window.innerWidth < 600 && str.startsWith('Probably a mobile phone')) ||
    str.startsWith('Decent size')
  ) {
    return showStep(29);
  }
  console.log('എല്ലാ സ്റ്റേറ്റ്മെന്റുകളും ശരിയായ ക്രമത്തിൽ ചേർത്തിട്ടുണ്ടെന്ന് ഉറപ്പുവരുത്തുക.');
});

registerStep(30, (str) => {
  if (str === 0 || str === 1) return;
  if (str === 2) return showStep(31);
  console.log('വീണ്ടും ശ്രമിക്കുക!');
});

const checkArrayLoop = (str, nextStep) => {
  if (!state.desktop) return showStep(nextStep);
  if (!requireMyThings(2)) return;
  if (str == my_things[my_things.length - 1]) return showStep(nextStep);
  if (my_things.includes(str)) return;
  console.log('ദയവായി "my_things" എന്ന അറേ ഉണ്ടാക്കി അതിലൂടെ ലൂപ്പ് ചെയ്യുക.');
};

registerStep(32, (str) => checkArrayLoop(str, 33));
registerStep(34, (str) => checkArrayLoop(str, 35));

registerStep(36, (str) => {
  if (!state.desktop) return showStep(37);
  if (typeof greet === 'undefined') return console.log('ദയവായി "greet" എന്ന ഫംഗ്ഷൻ നിർമ്മിക്കുക.');
  if (str.startsWith('Hey there ')) return showStep(37);
  console.log("ദയവായി \"greet\" എന്ന ഫംഗ്ഷൻ നിർമ്മിച്ച് അതിനെ 'Kumbidi' എന്ന പാരാമീറ്ററുപയോഗിച്ച് വിളിക്കുക.");
});

const sidePanels = new Map([
  [3,  ['sides', 'sideConcepts', 'sideFunctions']],
  [4,  ['sideTypes', 'sideStrings']],
  [5,  ['sideNumbers']],
  [9,  ['sideObjects']],
  [14, ['sideArrays']],
  [17, ['sideBooleans']],
  [18, ['sideVariables']],
  [26, ['sideConditionals']],
  [30, ['sideLoops']],
]);

const showElement = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('is-active');
    el.scrollIntoView(true);
  }
};

const showSide = (id) => document.getElementById(id)?.classList.add('is-active');

const showStep = (num, skipSave = false) => {
  showElement(`step${num}`);
  state.current_step = num;
  return_el.classList.remove('is-active');

  if (!skipSave) {
    memory.latest_step = num;
    Cookies.set('memory', JSON.stringify(memory));
  }

  sidePanels.get(num)?.forEach(showSide);
};

const detectPlatform = () => {
  const hints = {
    brands: navigator.userAgentData?.brands,
  };

  const parser = bowser.getParser(window.navigator.userAgent, hints);
  const platformType = parser.getPlatformType();
  const browserName = parser.getBrowserName().toLowerCase();
  const osName = parser.getOSName().toLowerCase();

  state.mobile  = platformType === 'mobile';
  state.tablet  = platformType === 'tablet';
  state.desktop = platformType === 'desktop';
  state.platform = platformType || 'desktop';

  state.browser =
    browserName.includes('brave')                                        ? 'brave'
    : browserName.includes('chrome') || browserName.includes('chromium') ? 'chrome'
    : browserName.includes('firefox')                                    ? 'firefox'
    : browserName.includes('microsoft edge')                             ? 'edge'
    : browserName.includes('safari')                                     ? 'safari'
    : browserName.includes('opera')                                      ? 'opera'
    : '';

  state.os =
    osName.includes('macos') || osName.includes('mac') ? 'mac'
    : osName.includes('windows') ? 'windows'
    : osName.includes('linux')   ? 'linux'
    : '';

  os_el.value = state.os;
  browser_el.value = state.browser;
  setPlatform();
};

const setPlatform = () => {
  html_el.className = '';
  html_el.classList.add(`case-${state.platform}`, `case-${state.browser}`, `case-${state.os}`);
};


const runSnippet = () => {
  document.querySelectorAll('.run-snippet').forEach((el) => {
    const snippetEl =
      el.previousElementSibling?.firstElementChild?.firstElementChild
        ?.firstElementChild?.firstElementChild;
    const code = snippetEl?.outerText;
    if (!code) return;

    el.querySelector('a')?.addEventListener('click', () => {
      eval(code);
    });
  });
};

const jumpToStep = (num) => {
  for (let i = 1; i <= num; i++) showStep(i, true);
};

const resetSteps = () => {
  return_el.classList.remove('is-active');
  window.scrollTo(0, 0);
  memory = {};
  Cookies.remove('memory');
};

document.addEventListener('DOMContentLoaded', () => {
  detectPlatform();
  runSnippet();

  os_el.addEventListener('change', ({ target }) => {
    state.os = target.value;
    setPlatform();
  });

  browser_el.addEventListener('change', ({ target }) => {
    state.browser = target.value;
    setPlatform();
  });

  resume_el.addEventListener('click', () => jumpToStep(memory.latest_step));

  reset_el.addEventListener('click', () => {
    if (confirm('ഉറപ്പാണോ?')) resetSteps();
  });

  if (memory?.latest_step !== undefined) {
    return_el.classList.add('is-active');
  }

  new ClipboardJS('.snippet-copy', {
    target: (trigger) =>
      trigger.previousElementSibling?.firstElementChild?.firstElementChild
        ?.firstElementChild?.firstElementChild,
  });
});