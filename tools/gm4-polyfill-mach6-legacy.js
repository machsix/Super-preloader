// ==UserScript==
// @name         gm4-polyfill-mach6-legacy
// @description  This utility is designed to ease authoring user scripts compatible with both Greasemonkey 4 and other/older user script engines.
// @version      1.0
// @namespace    https://github.com/machsix/gm4-polyfill-mach6-legacy
// @author       mach6
// ==/UserScript==
/*jshint esversion: 6 */

/*
This helper script bridges compatibility between the Greasemonkey 4 APIs and
existing/legacy APIs.  Say for example your user script includes

    // @grant GM_getValue

And you'd like to be compatible with both Greasemonkey 3 and Greasemonkey 4
(and for that matter all versions of Violentmonkey, Tampermonkey, and any other
user script engine).  Add:

    // @grant GM.getValue
    // @require https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js

And switch to the new (GM-dot) APIs, which return promises.  If your script
is running in an engine that does not provide the new asynchronous APIs, this
helper will add them, based on the old APIs.

If you use `await` at the top level, you'll need to wrap your script in an
`async` function to be compatible with any user script engine besides
Greasemonkey 4.

    (async () => {
    let x = await GM.getValue('x');
    })();
*/

if (typeof GM == 'undefined') {
  this.GM = {};
}

if (typeof GM_addStyle == 'undefined') {
    this.GM_addStyle = function (aCss, aId) {
        'use strict';
        var head = document.getElementsByTagName('head')[0];
        if (!head) {
            head = document.documentElement;
        }
        var style = document.createElement('style');
        if (aId) {
            style.setAttribute('id', aId);
        }
        style.setAttribute('type', 'text/css');
        style.textContent = aCss;
        if (head) {
            return head.appendChild(style);
        }
        else {
            return null;
        }
    }
}


if (typeof GM_registerMenuCommand == 'undefined') {
    this.GM_registerMenuCommand = function(caption, commandFunc, accessKey){
        if (!document.body) {
            if (document.readyState === 'loading'
                && document.documentElement && document.documentElement.localName === 'html') {
                new MutationObserver(function(mutations, observer){
                    if (document.body) {
                        observer.disconnect();
                        GM_registerMenuCommand(caption, commandFunc, accessKey);
                    }
                }).observe(document.documentElement, {childList: true});
            } else {
                console.error('GM_registerMenuCommand got no body.');
            }
            return;
        }
        var contextMenu = document.body.getAttribute('contextmenu');
        var menu = (contextMenu ? document.querySelector('menu#' + contextMenu) : null);
        if (!menu) {
            menu = document.createElement('menu');
            menu.setAttribute('id', 'gm-registered-menu');
            menu.setAttribute('type', 'context');
            document.body.appendChild(menu);
            document.body.setAttribute('contextmenu', 'gm-registered-menu');
        }
        var menuItem = document.createElement('menuitem');
        menuItem.textContent = caption;
        menuItem.addEventListener('click', commandFunc, true);
        menu.appendChild(menuItem);
    };
}


if (typeof GM_getResourceText == 'undefined') {
    this.GM_getResourceText = function(aRes){
        'use strict';
        return GM.getResourceUrl(aRes)
            .then( function(url){return fetch(url);})
            .then( function(resp){return resp.text();})
            .catch(function(error) {
            GM.log('Request failed', error);
            return null;
        });
    };
}


if (!Object.entries) {
    Object.entries = function( obj ){
        var ownProps = Object.keys( obj ),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--){
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
        }
        return resArray;
    };
}

Object.entries({
    'log': console.log.bind(console),
    // Pale Moon compatibility.  See #13.
    'info': GM_info,
}).forEach(function(values){
    var newKey = values[0];
    var old = values[1];
    if (old && (typeof GM[newKey] == 'undefined')) {
        GM[newKey] = old;
    }
});


Object.entries({
    'GM_addStyle': 'addStyle',
    'GM_deleteValue': 'deleteValue',
    'GM_getResourceURL': 'getResourceUrl',
    'GM_getValue': 'getValue',
    'GM_listValues': 'listValues',
    'GM_notification': 'notification',
    'GM_openInTab': 'openInTab',
    'GM_registerMenuCommand': 'registerMenuCommand',
    'GM_setClipboard': 'setClipboard',
    'GM_setValue': 'setValue',
    'GM_xmlhttpRequest': 'xmlHttpRequest',
    'GM_getResourceText': 'getResourceText',
}).forEach( function(values){
    var oldKey = values[0];
    var newKey = values[1];
    var old = this[oldKey];
    if (old && (typeof GM[newKey] == 'undefined')) {
        if (oldKey === 'GM_addStyle') {
            GM[newKey] = function(...args) {
                return old(args);
            };
        }
        else {
            GM[newKey] = function(...args) {
                return new Promise( function(resolve, reject){
                    try {
                        resolve(old.apply(this, args));
                    } catch (e) {
                        reject(e);
                    }
                }.bind(this));
            };
        }
    }
}.bind(this));