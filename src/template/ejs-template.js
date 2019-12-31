/* eslint-disable global-require */
export default {
  "sp-prefs": (i8n) => {
    switch (i8n) {
      case "zh_CN":
        return require("./zh_CN/sp-prefs.ejs");

      default:
        return require("./en_US/sp-prefs.ejs");
    }
  },
  floatWindow: (i8n) => {
    switch (i8n) {
      case "zh_CN":
        return require("./zh_CN/floatWindow.ejs");

      default:
        return require("./en_US/floatWindow.ejs");
    }
  }
};
