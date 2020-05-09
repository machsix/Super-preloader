import ejsTemplate from './ejsTemplate';
const availableLangs = Object.keys(ejsTemplate);
export let template = ejsTemplate.en_US;

function langDetect() {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.indexOf('zh') !== -1) {
    return 'zh_CN';
  } else {
    return 'en_US';
  }
}

export let userLang = langDetect();
export function setLang(x) {
  if (availableLangs.includes(x)) {
    userLang = x;
    template = ejsTemplate[userLang];
  } else {
    userLang = 'en_US';
    template = ejsTemplate[userLang];
  }
}
