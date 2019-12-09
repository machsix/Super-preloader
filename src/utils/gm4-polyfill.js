export default function(win) {
  if (typeof win.GM == "undefined") {
    win.GM = {};
  }

  if (typeof win.GM_registerMenuCommand == "undefined") {
    win.GM_registerMenuCommand = function(caption, commandFunc, accessKey) {
      if (!document.body) {
        if (document.readyState === "loading" && document.documentElement && document.documentElement.localName === "html") {
          new MutationObserver(function(mutations, observer) {
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
      var contextMenu = document.body.getAttribute("contextmenu");
      var menu = contextMenu ? document.querySelector("menu#" + contextMenu) : null;
      if (!menu) {
        menu = document.createElement("menu");
        menu.setAttribute("id", "gm-registered-menu");
        menu.setAttribute("type", "context");
        document.body.appendChild(menu);
        document.body.setAttribute("contextmenu", "gm-registered-menu");
      }
      var menuItem = document.createElement("menuitem");
      menuItem.textContent = caption;
      menuItem.addEventListener("click", commandFunc, true);
      menu.appendChild(menuItem);
    };
  }

  if (typeof win.GM_getResourceText == "undefined") {
    win.GM_getResourceText = function(aRes) {
      return GM.getResourceUrl(aRes)
        .then(function(url) {
          return fetch(url);
        })
        .then(function(resp) {
          return resp.text();
        })
        .catch(function(error) {
          GM.log("Request failed", error);
          return null;
        });
    };
  }

  Object.entries({
    log: console.log.bind(console),
    // Pale Moon compatibility.  See #13.
    info: win.GM_info
  }).forEach(function(values) {
    var newKey = values[0];
    var old = values[1];
    if (old && typeof win.GM[newKey] == "undefined") {
      win.GM[newKey] = old;
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
  }).forEach(
    function(values) {
      var oldKey = values[0];
      var newKey = values[1];
      var old = this[oldKey];
      if (old && typeof GM[newKey] == "undefined") {
        GM[newKey] = function(...args) {
          return new Promise(
            function(resolve, reject) {
              try {
                resolve(old.apply(this, args));
              } catch (e) {
                reject(e);
              }
            }.bind(this)
          );
        };
      }
    }.bind(win)
  );
}
