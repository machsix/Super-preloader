/**
 * @this window
 * @returns {null} null
 */
function gm4polyfill() {
  if (typeof GM == "undefined") {
    this.GM = {};
  }

  if (typeof GM_registerMenuCommand == "undefined") {
    this.GM_registerMenuCommand = (caption, commandFunc, accessKey) => {
      if (!document.body) {
        if (document.readyState === "loading" && document.documentElement && document.documentElement.localName === "html") {
          new MutationObserver((mutations, observer) => {
            if (document.body) {
              observer.disconnect();
              GM_registerMenuCommand(caption, commandFunc, accessKey);
            }
          }).observe(document.documentElement, {childList: true});
        } else {
          console.error("GM_registerMenuCommand got no body.");
        }
        return;
      }
      const contextMenu = document.body.getAttribute("contextmenu");
      let menu = contextMenu ? document.querySelector("menu#" + contextMenu) : null;
      if (!menu) {
        menu = document.createElement("menu");
        menu.setAttribute("id", "gm-registered-menu");
        menu.setAttribute("type", "context");
        document.body.appendChild(menu);
        document.body.setAttribute("contextmenu", "gm-registered-menu");
      }
      const menuItem = document.createElement("menuitem");
      menuItem.textContent = caption;
      menuItem.addEventListener("click", commandFunc, true);
      menu.appendChild(menuItem);
    };
  }

  if (typeof GM_getResourceText == "undefined") {
    this.GM_getResourceText = (aRes) =>
      GM.getResourceUrl(aRes)
        .then((url) => fetch(url))
        .then((resp) => resp.text())
        .catch(function(error) {
          GM.log("Request failed", error);
          return null;
        });
  }

  Object.entries({
    log: console.log.bind(console), // Pale Moon compatibility.  See #13.
    info: GM_info
  }).forEach(([newKey, old]) => {
    if (old && typeof GM[newKey] == "undefined") {
      GM[newKey] = old;
    }
  });

  Object.entries({
    GM_deleteValue: "deleteValue",
    GM_getResourceURL: "getResourceUrl",
    GM_getValue: "getValue",
    GM_listValues: "listValues",
    GM_notification: "notification",
    GM_openInTab: "openInTab",
    GM_registerMenuCommand: "registerMenuCommand",
    GM_setClipboard: "setClipboard",
    GM_setValue: "setValue",
    GM_xmlhttpRequest: "xmlHttpRequest",
    GM_getResourceText: "getResourceText"
  }).forEach(([oldKey, newKey]) => {
    const old = this[oldKey];
    if (typeof GM[newKey] == "undefined") {
      if (typeof old === "function") {
        GM[newKey] = function(...args) {
          return new Promise((resolve, reject) => {
            try {
              resolve(old.apply(this, args));
            } catch (e) {
              reject(e);
            }
          });
        };
      } else if (eval(`typeof ${oldKey} === "function"`)) {
        // dirty hack for GM3 because it doesn't export GM API to window
        GM[newKey] = new Function('arg1','arg2',
          'return new Promise(function(resolve,reject){try {resolve(' + oldKey + '(arg1,arg2));} catch (e) {reject(e);}});'
        ); // es5 syntax only, because babel couldn't handle this
        console.warn("[Super-preloader] GM3 polyfill");
      }
    }
  });
}
export default gm4polyfill;
