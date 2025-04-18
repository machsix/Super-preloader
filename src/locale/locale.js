import ejsTemplate from './ejsTemplate.js';
const availableLangs = Object.keys(ejsTemplate);
export let template = ejsTemplate.en_US;

/**
 * Detects the user's language based on the browser's settings.
 * @returns {string} The detected language code ('zh_CN' or 'en_US').
 */
function langDetect() {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.indexOf('zh') !== -1) {
    return 'zh_CN';
  } else {
    return 'en_US';
  }
}

export let userLang = langDetect();
/**
 * Sets the user's language and updates the template accordingly.
 * @param {string} x - The language code to set ('zh_CN' or 'en_US').
 */
export function setLang(x) {
  if (availableLangs.includes(x)) {
    userLang = x;
    template = ejsTemplate[userLang];
  } else {
    userLang = 'en_US';
    template = ejsTemplate[userLang];
  }
}
