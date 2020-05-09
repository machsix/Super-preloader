/* eslint-disable global-require */
import * as en_US from './en_US';
import * as zh_CN from './zh_CN';
// eslint-disable-next-line sort-imports
import * as jsonTemplate from './json';
import i8n from './json/i8n.json';

const ejs = {
  en_US,
  zh_CN
};

const availableJsonLangs = Object.keys(i8n);
const availableEjsLangs = Object.keys(ejs);

for (const lang of availableEjsLangs) {
  if (availableJsonLangs.includes(lang)) {
    const li8n = i8n[lang];
    // spinner
    const spinner = {};
    for (const [k, v] of Object.entries(li8n.spinner)) {
      spinner[k] = jsonTemplate.spinner({notice: v});
    }
    ejs[lang].spinner = spinner;
  } else {
    ejs[lang].spinner = ejs.en_US.spinner;
  }
}

export default ejs;
