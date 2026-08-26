/* eslint-disable jsdoc/require-jsdoc */
//@ts-check
/* eslint-disable no-unused-vars */

// import "core-js";
// import "regenerator-runtime/runtime";

//@ts-ignore
import * as spcss from './css';
import {BROWSER, SCRIPT_MANAGER} from './utils/detect.js';
import {NOTIFICATION, SCRIPT_INFO} from './meta.js';
import {Tween, TweenEase, TweenM} from './utils/tween.js';
import {createDOM, getProperty, setProperty} from './utils/domTools.js';
import {factorySettings, getServerIp, loadLocalSetting, loadSettings, resetSettings, saveLocalSetting, saveSettings} from './utils/init.js';
import {getAllElements, getAllElementsByXpath, getElementByCSS, getElementByXpath, getLastVisibleElement} from './utils/domSelector.js';
import {setLang, template, userLang} from './locale/locale.js';
import {toRE, wildcardToRegExpStr} from './utils/regex.js';
import _ from 'lodash';
import {addStyle} from './utils/gm-enhanced.js';
import {compareVersions} from 'compare-versions';
import displace from 'displacejs';
import elementReady from './utils/element-ready.js';
import gotStock from './utils/got.js';
import {jsGeneralRule} from './rules/jsGeneralRule.js';
import {jsSiteRule} from './rules/jsSiteRule.js';
import jsonRuleLoader from './utils/json-rule.js';
import logger from './utils/logger.js';
import notice from './utils/notice.js';

(function () {
  // use charset from currentDocument
  const gotConfig = {
    html: true,
    encoding: document.characterSet
  };
  logger.setLevel('warn');

  // `options.cookie`, dirty fix for older versions of TM and VM on Firefox
  if (BROWSER.name === 'firefox') {
    if ((SCRIPT_MANAGER.name === 'Violentmonkey' && compareVersions(SCRIPT_MANAGER.version, '2.12.3') <= 0) || (SCRIPT_MANAGER.name === 'Tampermonkey' && compareVersions(SCRIPT_MANAGER.version, '4.10.6103') < 0)) {
      logger.warn(`${SCRIPT_MANAGER.name}  v${SCRIPT_MANAGER.version} has a flaw with Firefox, which may affect this script`);
      logger.warn('Check https://github.com/Tampermonkey/tampermonkey/issues/786 and https://github.com/violentmonkey/violentmonkey/issues/606 to learn more');
      gotConfig.cookie = true;
    }
  } else if (SCRIPT_MANAGER.name === 'Tampermonkey' && BROWSER.name === 'safari') {
    logger.warn(`${SCRIPT_MANAGER.name} has a flaw with Safari, which may affect this script`);
    logger.warn('Check https://github.com/Tampermonkey/tampermonkey/issues/786 and https://github.com/violentmonkey/violentmonkey/issues/606 to learn more');
    gotConfig.cookie = true;
  }

  if (SCRIPT_MANAGER.name.toLowerCase().includes('adguard')) {
    logger.warn(`${SCRIPT_MANAGER.name} has issues with some specific like Google due to the way it injects script`);
  }

  const got = gotStock.create(gotConfig);
  const scriptInfo = SCRIPT_INFO;
  const upgradeNotification = NOTIFICATION;

  const exhentaiSPagePattern = /^https?:\/\/(?:e-hentai|exhentai)\.org\/s\//;
  const exhentaiRetryingImages = new WeakSet();
  const exhentaiTriedRequests = new WeakMap();
  const exhentaiPostLoadTimers = new WeakMap();
  const exhentaiReloadButtons = new WeakMap();
  const exhentaiReloadMessages = new WeakMap();
  const exhentaiReloadMessageTimers = new WeakMap();
  const exhentaiTraversingImages = new WeakSet();
  const exhentaiMaxTraversalPasses = 3;
  const exhentaiReloadIconDataUri =
    'data:image/png;base64,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';

  function addSearchParamToUrl(url, name, value) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  }

  function extractExhentaiNlToken(value) {
    if (!value) return null;
    const match = String(value).match(/nl\(['"]([^'"]+)['"]\)/);
    return match ? match[1] : null;
  }

  function toAbsoluteExhentaiUrl(url, baseUrl) {
    if (!url) return null;
    try {
      return new URL(url, baseUrl).href;
    } catch (e) {
      return url;
    }
  }

  function getExhentaiPageImageData(pageHtml, pageUrl) {
    const pageDoc = new DOMParser().parseFromString(pageHtml, 'text/html');
    const img = pageDoc.querySelector('#img');
    const i3 = pageDoc.querySelector('#i3');
    const loadfail = pageDoc.querySelector('#loadfail');
    const imgToken = img ? extractExhentaiNlToken(img.getAttribute('onerror')) : null;
    const loadfailToken = loadfail ? extractExhentaiNlToken(loadfail.getAttribute('onclick')) : null;
    return {
      src: img ? toAbsoluteExhentaiUrl(img.getAttribute('src'), pageUrl) : null,
      nlToken: loadfailToken || imgToken,
      imgNlToken: imgToken,
      loadfailToken,
      imgStyle: img ? img.getAttribute('style') : null,
      imgWidth: img ? img.getAttribute('width') : null,
      imgHeight: img ? img.getAttribute('height') : null,
      i3Style: i3 ? i3.getAttribute('style') : null,
      i3Class: i3 ? i3.getAttribute('class') : null
    };
  }

  function findExhentaiImageByToken(root, token) {
    if (!root || !token || !root.querySelectorAll) return null;
    const imgs = Array.prototype.slice.call(root.querySelectorAll('img'));
    return imgs.find((img) => img.dataset && img.dataset.spExhentaiNlToken === token) || null;
  }

  function findExhentaiPrimaryImage(root) {
    if (!root || !root.querySelectorAll) return null;
    return root.querySelector('img#img') || root.querySelector('img[data-sp-exhentai-original-id="img"]') || root.querySelector('img[src*="hath.network"]') || null;
  }

  function getExhentaiLoadfailToken(root) {
    if (!root || !root.querySelector) return null;
    const loadfail = root.querySelector('#loadfail, [data-sp-exhentai-original-id="loadfail"]');
    if (!loadfail) return null;
    return (loadfail.dataset && loadfail.dataset.spExhentaiNlToken) || extractExhentaiNlToken(loadfail.getAttribute('onclick'));
  }

  function getExhentaiPageWindow() {
    try {
      if (typeof unsafeWindow !== 'undefined') return unsafeWindow;
    } catch (e) {}
    return window;
  }

  function findExhentaiImageForToken(token) {
    return findExhentaiImageByToken(document, token) || findExhentaiPrimaryImage(document);
  }

  function updateExhentaiNlTriggers(oldToken, newToken, pageUrl) {
    if (!oldToken || !newToken) return;
    Array.prototype.slice.call(document.querySelectorAll('[data-sp-exhentai-nl-token]')).forEach((elem) => {
      if (elem.dataset.spExhentaiNlToken === oldToken) {
        elem.dataset.spExhentaiNlToken = newToken;
        if (pageUrl) elem.dataset.spExhentaiPageUrl = pageUrl;
      }
    });
  }

  function setExhentaiAttrIfPresent(elem, name, value) {
    if (!elem || value === undefined || value === null) return;
    if (value === '') {
      elem.removeAttribute(name);
    } else {
      elem.setAttribute(name, value);
    }
  }

  function installExhentaiReloadButtonStyle() {
    if (document.getElementById('sp-exhentai-reload-button-style')) return;
    addStyle(
      `
.sp-exhentai-reload-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2147483000;
  width: 96px;
  height: 96px;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  box-shadow: none;
  cursor: pointer;
  overflow: visible;
  user-select: none;
}
.sp-exhentai-reload-button img {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
}
.sp-exhentai-reload-button[data-sp-visible="1"] {
  display: flex;
}
.sp-exhentai-reload-button:hover {
  filter: brightness(1.08);
}
.sp-exhentai-reload-button[data-sp-loading="1"] {
  pointer-events: none;
}
.sp-exhentai-reload-button[data-sp-loading="1"] img {
  animation: spExhentaiReloadSpin 0.9s linear infinite;
}
.sp-exhentai-reload-message {
  position: absolute;
  left: 50%;
  top: calc(50% + 62px);
  z-index: 2147483000;
  display: none;
  transform: translateX(-50%);
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(24, 29, 40, 0.82);
  color: #edf1ff;
  font: 12px/1.4 Arial, sans-serif;
  pointer-events: none;
  white-space: nowrap;
}
.sp-exhentai-reload-message[data-sp-visible="1"] {
  display: block;
}
@keyframes spExhentaiReloadSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,
      'sp-exhentai-reload-button-style'
    );
  }

  function getExhentaiImageContainer(img) {
    if (!img || !img.closest) return img ? img.parentElement : null;
    return img.closest('#i3, [data-sp-exhentai-original-id="i3"]') || img.parentElement;
  }

  function isExhentaiImageFailed(img) {
    return !!(img && img.complete && (!img.naturalWidth || !img.naturalHeight));
  }

  function hideExhentaiReloadButton(img) {
    const button = exhentaiReloadButtons.get(img);
    if (!button) return;
    button.dataset.spVisible = '0';
    button.dataset.spLoading = '0';
  }

  function ensureExhentaiReloadButton(img) {
    if (!img || !(img.dataset && img.dataset.spExhentaiNlToken)) return null;
    installExhentaiReloadButtonStyle();

    const container = getExhentaiImageContainer(img);
    if (!container) return null;

    let button = exhentaiReloadButtons.get(img);
    if (!button || !button.isConnected) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'sp-exhentai-reload-button';
      button.title = 'Reload broken image';
      button.setAttribute('aria-label', 'Reload broken image');
      button.innerHTML = `<img alt="" src="${exhentaiReloadIconDataUri}">`;
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        const token = img.dataset && img.dataset.spExhentaiNlToken;
        const pageUrl = (img.dataset && img.dataset.spExhentaiPageUrl) || location.href;
        if (!token || !pageUrl) return;
        startExhentaiRetryTraversal(img, token, pageUrl);
      });
      exhentaiReloadButtons.set(img, button);
    }

    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
    if (button.parentElement !== container) {
      container.appendChild(button);
    }
    return button;
  }

  function ensureExhentaiReloadMessage(img) {
    installExhentaiReloadButtonStyle();

    const container = getExhentaiImageContainer(img);
    if (!container) return null;

    let message = exhentaiReloadMessages.get(img);
    if (!message || !message.isConnected) {
      message = document.createElement('div');
      message.className = 'sp-exhentai-reload-message';
      message.textContent = '加载失败';
      exhentaiReloadMessages.set(img, message);
    }

    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
    if (message.parentElement !== container) {
      container.appendChild(message);
    }
    return message;
  }

  function setExhentaiReloadButtonLoading(img, loading) {
    const button = ensureExhentaiReloadButton(img);
    if (!button) return;
    button.dataset.spVisible = '1';
    button.dataset.spLoading = loading ? '1' : '0';
  }

  function showExhentaiReloadButton(img) {
    if (img && img.dataset && img.dataset.spExhentaiTraversing === '1') return;
    const button = ensureExhentaiReloadButton(img);
    if (!button) return;
    button.dataset.spLoading = '0';
    button.dataset.spVisible = '1';
  }

  function showExhentaiReloadMessage(img, text) {
    const message = ensureExhentaiReloadMessage(img);
    if (!message) return;

    message.textContent = text || '加载失败';
    message.dataset.spVisible = '1';
    if (exhentaiReloadMessageTimers.has(img)) clearTimeout(exhentaiReloadMessageTimers.get(img));
    const timer = setTimeout(() => {
      message.dataset.spVisible = '0';
      exhentaiReloadMessageTimers.delete(img);
    }, 2400);
    exhentaiReloadMessageTimers.set(img, timer);
  }

  function applyExhentaiImageLayout(img, data) {
    if (!img || !data) return;

    setExhentaiAttrIfPresent(img, 'style', data.imgStyle);
    setExhentaiAttrIfPresent(img, 'width', data.imgWidth);
    setExhentaiAttrIfPresent(img, 'height', data.imgHeight);

    const container = img.closest ? img.closest('#i3') : null;
    if (container) {
      setExhentaiAttrIfPresent(container, 'style', data.i3Style);
      setExhentaiAttrIfPresent(container, 'class', data.i3Class);
    }
  }

  function getExhentaiTriedRequests(img) {
    let tried = exhentaiTriedRequests.get(img);
    if (!tried) {
      tried = new Set();
      exhentaiTriedRequests.set(img, tried);
    }
    return tried;
  }

  function getExhentaiImageLoadResult(img, expectedSrc) {
    return new Promise((resolve) => {
      let settled = false;
      const done = (ok) => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(ok);
      };
      const cleanup = () => {
        clearTimeout(timer);
        img.removeEventListener('load', onLoad, true);
        img.removeEventListener('error', onError, true);
      };
      const isExpected = () => !expectedSrc || img.currentSrc === expectedSrc || img.src === expectedSrc;
      const isLoaded = () => !!(isExpected() && img.complete && img.naturalWidth && img.naturalHeight);
      const onLoad = () =>
        setTimeout(() => {
          if (isExpected()) done(isLoaded());
        }, 50);
      const onError = () => {
        if (isExpected()) done(false);
      };
      const timer = setTimeout(() => done(isLoaded()), 9000);

      img.addEventListener('load', onLoad, true);
      img.addEventListener('error', onError, true);
      if (isLoaded()) {
        setTimeout(() => done(true), 50);
      }
    });
  }

  async function retryExhentaiImage(img, explicitToken, explicitPageUrl, options = {}) {
    if (!img || exhentaiRetryingImages.has(img)) return {ok: false, reason: 'busy'};
    const manual = !!options.manual;
    const showButtonOnStop = options.showButtonOnStop !== false;
    if (!manual && img.dataset && img.dataset.spExhentaiRetryStopped === '1') return {ok: false, reason: 'stopped'};
    const token = explicitToken || (img.dataset && img.dataset.spExhentaiNlToken) || extractExhentaiNlToken(img.getAttribute('onerror'));
    const retryPageUrl = explicitPageUrl || (img.dataset && img.dataset.spExhentaiPageUrl) || location.href;
    if (!token || !retryPageUrl || !exhentaiSPagePattern.test(retryPageUrl)) return {ok: false, reason: 'missing-token'};

    const retryUrl = addSearchParamToUrl(retryPageUrl, 'nl', token);
    const tried = getExhentaiTriedRequests(img);
    if (!manual && tried.has(retryUrl)) {
      logger.warn('ExHentai nl retry stopped because the same token was already tried', retryUrl);
      img.dataset.spExhentaiRetryStopped = '1';
      if (showButtonOnStop) showExhentaiReloadButton(img);
      return {ok: false, reason: 'duplicate-url', retryUrl, token};
    }

    exhentaiRetryingImages.add(img);
    if (!options.keepButtonVisible) hideExhentaiReloadButton(img);
    if (!manual) {
      img.dataset.spExhentaiAutoRetryDone = '1';
    }
    tried.add(retryUrl);
    try {
      const res = await got.get(retryUrl, {
        headers: {
          Referer: retryPageUrl
        },
        html: true
      });
      const data = getExhentaiPageImageData(res.data || res.body || '', retryUrl);
      const oldSrc = img.currentSrc || img.src;
      const oldToken = img.dataset && img.dataset.spExhentaiNlToken;
      if (!data.src && !data.nlToken) {
        logger.warn('ExHentai nl retry stopped because no replacement source or token was found', retryPageUrl);
        img.dataset.spExhentaiRetryStopped = '1';
        if (showButtonOnStop) showExhentaiReloadButton(img);
        return {ok: false, reason: 'no-data', retryUrl, token};
      }

      img.dataset.spExhentaiPageUrl = retryUrl;
      if (data.nlToken) {
        updateExhentaiNlTriggers(img.dataset.spExhentaiNlToken || token, data.nlToken, retryUrl);
        img.dataset.spExhentaiNlToken = data.nlToken;
      }
      applyExhentaiImageLayout(img, data);
      img.removeAttribute('onerror');
      img.onerror = null;
      if (data.src) {
        img.dataset.spExhentaiRetryStopped = '0';
        if (data.src === oldSrc) {
          img.removeAttribute('src');
        }
        img.src = data.src;
        scheduleExhentaiFailedImageCheck(img, 1200, {autoRetry: false});
      } else {
        scheduleExhentaiFailedImageCheck(img, 50, {autoRetry: false});
      }
      return {
        ok: true,
        reason: 'requested',
        retryUrl,
        srcChanged: !!data.src && data.src !== oldSrc,
        tokenChanged: !!data.nlToken && data.nlToken !== oldToken,
        repeatedToken: !!data.nlToken && data.nlToken === oldToken,
        token: data.nlToken || oldToken || token,
        data
      };
    } catch (e) {
      logger.warn('ExHentai nl retry request failed', e);
      if (showButtonOnStop) showExhentaiReloadButton(img);
      return {ok: false, reason: 'request-failed', error: e, retryUrl, token};
    } finally {
      exhentaiRetryingImages.delete(img);
    }
  }

  async function startExhentaiRetryTraversal(img, explicitToken, explicitPageUrl) {
    if (!img || exhentaiTraversingImages.has(img)) return false;
    const initialToken = explicitToken || (img.dataset && img.dataset.spExhentaiNlToken);
    const initialPageUrl = explicitPageUrl || (img.dataset && img.dataset.spExhentaiPageUrl) || location.href;
    if (!initialToken || !initialPageUrl || !exhentaiSPagePattern.test(initialPageUrl)) return false;

    exhentaiTraversingImages.add(img);
    img.dataset.spExhentaiTraversing = '1';
    img.dataset.spExhentaiRetryStopped = '0';
    setExhentaiReloadButtonLoading(img, true);

    try {
      let token = initialToken;
      let pageUrl = initialPageUrl;
      for (let pass = 1; pass <= exhentaiMaxTraversalPasses; pass += 1) {
        const seenTokens = new Set();
        for (;;) {
          if (!token || !pageUrl) break;
          const repeatedInPass = seenTokens.has(token);
          seenTokens.add(token);

          const result = await retryExhentaiImage(img, token, pageUrl, {
            manual: true,
            keepButtonVisible: true,
            showButtonOnStop: false
          });
          if (!result.ok) break;

          pageUrl = (img.dataset && img.dataset.spExhentaiPageUrl) || result.retryUrl || pageUrl;
          token = (img.dataset && img.dataset.spExhentaiNlToken) || result.token || token;

          const expectedSrc = result.data && result.data.src;
          const loaded = await getExhentaiImageLoadResult(img, expectedSrc);
          if (loaded) {
            img.dataset.spExhentaiRetryStopped = '0';
            hideExhentaiReloadButton(img);
            return true;
          }

          if (repeatedInPass || result.repeatedToken || !result.tokenChanged) {
            break;
          }
        }
      }

      img.dataset.spExhentaiRetryStopped = '1';
      showExhentaiReloadButton(img);
      showExhentaiReloadMessage(img, '加载失败');
      return false;
    } finally {
      img.dataset.spExhentaiTraversing = '0';
      exhentaiTraversingImages.delete(img);
      const button = exhentaiReloadButtons.get(img);
      if (button) button.dataset.spLoading = '0';
    }
  }

  function bindExhentaiImageRetry(img, pageUrl, options, explicitToken) {
    const nlToken = explicitToken || (img.dataset && img.dataset.spExhentaiNlToken) || extractExhentaiNlToken(img.getAttribute('onerror'));
    if (!nlToken) return;

    img.dataset.spExhentaiPageUrl = img.dataset.spExhentaiPageUrl || pageUrl;
    img.dataset.spExhentaiNlToken = nlToken;
    img.dataset.spExhentaiOriginalId = img.dataset.spExhentaiOriginalId || img.id || '';
    img.removeAttribute('onerror');
    img.onerror = null;
    if (!img.dataset.spExhentaiRetryBound) {
      img.dataset.spExhentaiRetryBound = '1';
      img.addEventListener('error', (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (img.dataset.spExhentaiAutoRetryDone === '1') {
          showExhentaiReloadButton(img);
        } else {
          retryExhentaiImage(img);
        }
      });
      img.addEventListener('load', () => {
        scheduleExhentaiFailedImageCheck(img, 50, {autoRetry: false});
      });
    }
    scheduleExhentaiFailedImageCheck(img, 250, {autoRetry: true});

    if (options.renameIds && img.id === 'img') {
      img.id = `sp-exhentai-img-${options.pageIndex}-${options.index}`;
    }
  }

  function scheduleExhentaiFailedImageCheck(img, delay, options = {}) {
    if (!img || !(img.dataset && img.dataset.spExhentaiNlToken)) return;
    if (exhentaiPostLoadTimers.has(img)) clearTimeout(exhentaiPostLoadTimers.get(img));
    const timer = setTimeout(() => {
      exhentaiPostLoadTimers.delete(img);
      if (isExhentaiImageFailed(img)) {
        if (options.autoRetry === false || img.dataset.spExhentaiAutoRetryDone === '1') {
          showExhentaiReloadButton(img);
          return;
        }
        retryExhentaiImage(img);
      } else if (img.complete && img.naturalWidth && img.naturalHeight) {
        hideExhentaiReloadButton(img);
      }
    }, delay);
    exhentaiPostLoadTimers.set(img, timer);
  }

  function handleExhentaiNlCall(token) {
    if (!token || !exhentaiSPagePattern.test(location.href)) return false;
    const img = findExhentaiImageForToken(token);
    if (img) {
      bindExhentaiImageRetry(img, location.href, {renameIds: false, pageIndex: 0, index: 0}, token);
      retryExhentaiImage(img, token, img.dataset.spExhentaiPageUrl || location.href);
      return false;
    }
    return false;
  }

  function installExhentaiNlOverride() {
    if (!exhentaiSPagePattern.test(location.href)) return;
    /** @type {Window & {__spExhentaiNlOverrideInstalled?: boolean, __spExhentaiOriginalNl?: Function, nl?: Function}} */
    const pageWin = getExhentaiPageWindow();
    if (pageWin.__spExhentaiNlOverrideInstalled) return;
    pageWin.__spExhentaiNlOverrideInstalled = true;

    const replacement = function (token) {
      return handleExhentaiNlCall(token);
    };
    try {
      Object.defineProperty(pageWin, 'nl', {
        configurable: true,
        get: function () {
          return replacement;
        },
        set: function (fn) {
          pageWin.__spExhentaiOriginalNl = fn;
        }
      });
    } catch (e) {
      pageWin.nl = replacement;
    }
  }

  function bindExhentaiNlTrigger(elem, root, pageUrl, options) {
    const nlToken = (elem.dataset && elem.dataset.spExhentaiNlToken) || extractExhentaiNlToken(elem.getAttribute('onclick'));
    if (!nlToken) return;

    const linkedImg = findExhentaiImageByToken(root, nlToken) || findExhentaiPrimaryImage(root);
    if (linkedImg) {
      bindExhentaiImageRetry(linkedImg, pageUrl, options, nlToken);
    }

    elem.dataset.spExhentaiPageUrl = elem.dataset.spExhentaiPageUrl || pageUrl;
    elem.dataset.spExhentaiNlToken = nlToken;
    elem.dataset.spExhentaiOriginalId = elem.dataset.spExhentaiOriginalId || elem.id || '';
    elem.removeAttribute('onclick');
    elem.onclick = null;
    if (!elem.dataset.spExhentaiRetryBound) {
      elem.dataset.spExhentaiRetryBound = '1';
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        const img = findExhentaiImageByToken(root, elem.dataset.spExhentaiNlToken) || findExhentaiPrimaryImage(root);
        if (img) bindExhentaiImageRetry(img, elem.dataset.spExhentaiPageUrl || pageUrl, options, elem.dataset.spExhentaiNlToken);
        if (img) startExhentaiRetryTraversal(img, elem.dataset.spExhentaiNlToken, elem.dataset.spExhentaiPageUrl || pageUrl);
      });
    }

    if (options.renameIds && elem.id === 'loadfail') {
      elem.id = `sp-exhentai-loadfail-${options.pageIndex}-${options.index}`;
    }
  }

  function enableExhentaiNlRetry(root, pageUrl, options = {}) {
    if (!root || !pageUrl || !exhentaiSPagePattern.test(pageUrl) || !root.querySelectorAll) return;

    const bindOptions = {
      renameIds: !!options.renameIds,
      pageIndex: options.pageIndex || 0,
      index: 0
    };
    Array.prototype.slice.call(root.querySelectorAll('img')).forEach((img, index) => {
      bindOptions.index = index;
      bindExhentaiImageRetry(img, pageUrl, bindOptions);
    });
    Array.prototype.slice.call(root.querySelectorAll('[onclick*="nl("], a[data-sp-exhentai-nl-token], #loadfail[data-sp-exhentai-nl-token]')).forEach((elem, index) => {
      bindOptions.index = index;
      bindExhentaiNlTrigger(elem, root, pageUrl, bindOptions);
    });
  }

  function installExhentaiCurrentPageNlRetry() {
    if (!exhentaiSPagePattern.test(location.href)) return;
    installExhentaiNlOverride();

    const patchCurrentPage = () => enableExhentaiNlRetry(document, location.href);
    window.addEventListener(
      'error',
      (event) => {
        const img = event.target;
        if (!(img instanceof HTMLImageElement)) return;
        const token = (img.dataset && img.dataset.spExhentaiNlToken) || extractExhentaiNlToken(img.getAttribute('onerror')) || getExhentaiLoadfailToken(document);
        if (!token) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        bindExhentaiImageRetry(img, location.href, {renameIds: false, pageIndex: 0, index: 0}, token);
        if (img.dataset.spExhentaiAutoRetryDone === '1') {
          showExhentaiReloadButton(img);
        } else {
          retryExhentaiImage(img, token, img.dataset.spExhentaiPageUrl || location.href);
        }
      },
      true
    );
    document.addEventListener(
      'click',
      (event) => {
        const target = event.target instanceof Element ? event.target : null;
        /** @type {HTMLElement | null} */
        const elem = target ? target.closest('[onclick*="nl("], a[data-sp-exhentai-nl-token], #loadfail[data-sp-exhentai-nl-token]') : null;
        if (!elem) return;
        const token = (elem.dataset && elem.dataset.spExhentaiNlToken) || extractExhentaiNlToken(elem.getAttribute('onclick'));
        if (!token) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        bindExhentaiNlTrigger(elem, document, location.href, {renameIds: false, pageIndex: 0, index: 0});
        const img = findExhentaiImageByToken(document, token) || findExhentaiPrimaryImage(document);
        if (img) bindExhentaiImageRetry(img, elem.dataset.spExhentaiPageUrl || location.href, {renameIds: false, pageIndex: 0, index: 0}, token);
        if (img) startExhentaiRetryTraversal(img, token, elem.dataset.spExhentaiPageUrl || img.dataset.spExhentaiPageUrl || location.href);
      },
      true
    );

    const observeRoot = () => {
      const root = document.documentElement;
      if (!root || root.dataset.spExhentaiObserverBound) return;
      root.dataset.spExhentaiObserverBound = '1';
      const observer = new MutationObserver(patchCurrentPage);
      observer.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['onerror', 'onclick']
      });
      patchCurrentPage();
    };
    observeRoot();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeRoot, {once: true});
      document.addEventListener('DOMContentLoaded', patchCurrentPage, {once: true});
    } else {
      patchCurrentPage();
    }
  }

  installExhentaiCurrentPageNlRetry();

  function startSuperPreloader() {
    // ----------------------------------
    // all rules
    /** @type {IRule[]} */
    let SSRules = [];
    // ----------------------------------

    // Check if we are looking at a file instead of a webpage
    if (
      // <svg>: SVG Document
      document.documentElement.matches('svg') ||
      // <pre>: plain text
      // <img>: Image
      // <video>: Audio and video
      // <embed>: PDF (Chrome)
      // body > #outerContainer:first-child + #printContainer:last-child: PDF (Firefox)
      document.querySelector('body > pre:only-child, body > img:only-child, body > video:only-child, body > embed:only-child, body > #outerContainer:first-child + #printContainer:last-child')
    ) {
      return;
    }

    if (window.name === 'mynovelreader-iframe') {
      return;
    }

    function CheckIframe() {
      if (window.name === 'superpreloader-iframe') {
        return true;
      } else {
        return false;
      }
    }

    // how to trigger lazy_load
    // https://wiki.greasespot.net/Generate_Click_Events
    if (CheckIframe()) {
      // 搜狗,iframe里面怎么不加载js啊?
      // 去掉了原版的另一种方法，因为新版本 chrome 已经支持。旧版本 chrome iframe里面 无法访问window.parent,返回undefined
      const domLoaded = function () {
        //window.scroll(window.scrollX, 99999);
        const mutationObserver = window.frameElement ? JSON.parse(window.frameElement.getAttribute('mutationObserver')) : null;
        if (!mutationObserver) {
          window.parent.postMessage('superpreloader-iframe:DOMLoaded', '*');
        } else {
          const observers = mutationObserver.observers;

          /**@type {Promise} */
          let p = null;
          /**@type {Array<Promise>} */
          const parr = [];
          if (observers) {
            ['attributes', 'addedNodes', 'removedNodes'].forEach((key) => {
              const el = getAllElements(observers[key]);
              if (el.length > 0) {
                if (mutationObserver.relatedObj) {
                  //el.forEach((x) => {
                  //  p.push(elementReady(x, key));
                  //});
                  parr.push(elementReady(el[el.length - 1], key));
                  el[0].scrollIntoView();
                  el[el.length - 1].scrollIntoView();
                } else {
                  parr.push(elementReady(el[el.length - 1], key));
                }
              }
            });
          }
          if (p) {
            p = Promise.all(parr);
          } else {
            p = Promise.resolve(undefined);
          }
          const timeout = mutationObserver.timeout && 0;
          setTimeout(() => {
            p.then((values) => {
              if (values) {
                values.forEach(({element, type, mutationList, observer}) => {
                  observer.disconnect();
                });
              }
              //window.scrollTo(0, scrollLocation);
              window.parent.postMessage('superpreloader-iframe:DOMLoaded', '*');
            });
          }, timeout);
        }
      };
      //@ts-ignore
      if (window.opera) {
        document.addEventListener('DOMContentLoaded', domLoaded, false);
      } else {
        domLoaded();
      }
      return;
    }

    // 在以下网站上允许在非顶层窗口上加载JS..比如猫扑之类的框架集网页.
    const DIExclude = [
      ['猫扑帖子', true, /^https?:\/\/dzh\.mop\.com\/[a-z]{3,6}\/\d{8}\/.*\.shtml$/i],
      ['铁血社区', true, /^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i],
      ['铁血社区-2', true, /^https?:\/\/bbs\.qichelian\.com\/bbsqcl\.php\?fid/i],
      // 像 http://so.baiduyun.me/ 内嵌的百度、Google 框架
      ['百度网盘搜索引擎-百度', true, /^https?:\/\/www\.baidu\.com\/baidu/i],
      ['百度网盘搜索引擎-Google', true, /^https?:\/\/74\.125\.128\.147\/custom/i]
    ];

    // 页面不刷新的站点
    const HashchangeSites = [
      {
        url: /^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|#|$|\?)/,
        timer: 2000,
        mutationSelector: '#main'
      },
      // 运营商可能会在 #wd= 前面添加 ?tn=07084049_pg
      {
        url: /^https?:\/\/www\.baidu\.com\/($|#wd=)/,
        timer: 1000,
        mutationSelector: '#wrapper_wrapper'
      },
      {
        url: /^https?:\/\/www\.newsmth\.net/,
        timer: 1000
      }
    ];

    //  ///////// ----- End of Rules obtained from online json files -------///////////

    // 分页导航的6个图标以及颜色设置:
    const sep_icons = {
      top: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==',
      bottom:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==',
      pre: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==',
      next: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC',
      next_gray:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==',
      pre_gray:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC',
      text_span_style: 'color:#595959!important;'
    };

    // 悬浮窗的状态颜色.
    const FWKG_color = {
      loading: '#8B00E8', // 读取中状态
      prefetcher: '#5564AF', // 预读状态
      autopager: '#038B00', // 翻页状态
      Apause: '#B7B700', // 翻页状态(暂停).
      Astop: '#A00000', // 翻页状态(停止)(翻页完成,或者被异常停止.)(无法再开启)
      dot: '#00FF05' // 读取完后,会显示一个小点,那么小点的颜色.
    };

    // 上一页关键字
    let prePageKey = [
      '上一页',
      '上一頁',
      '上1页',
      '上1頁',
      '上页',
      '上頁',
      '翻上頁',
      '翻上页',
      '上一张',
      '上一張',
      '上一幅',
      '上一章',
      '上一节',
      '上一節',
      '上一篇',
      '前一页',
      '前一頁',
      '后退',
      '後退',
      '上篇',
      'previous',
      'previous Page',
      '前へ',
      '前のページ'
    ];

    // 下一页关键字
    let nextPageKey = [
      '下一页',
      '下一頁',
      '下1页',
      '下1頁',
      '下页',
      '下页 ›',
      '下頁',
      '翻页',
      '翻頁',
      '翻下頁',
      '翻下页',
      '下一张',
      '下一張',
      '下一幅',
      '下一章',
      '下一节',
      '下一節',
      '下一篇',
      '前进',
      '下篇',
      '后页',
      '往后',
      'Next',
      'Next Page',
      '次へ',
      '次のページ',
      '次のページ »',
      '下一页 →',
      '下一頁 →',
      '下1页 →',
      '下1頁 →',
      '下页 →',
      '下頁 →',
      '翻页 →',
      '翻頁 →',
      '翻下頁 →',
      '翻下页 →',
      '下一张 →',
      '下一張 →',
      '下一幅 →',
      '下一章 →',
      '下一节 →',
      '下一節 →',
      '下一篇 →',
      '前进 →',
      '下篇 →',
      '后页 →',
      '往后 →',
      'Next →',
      'Next Page →',
      '次へ →',
      '次のページ →',
      '下一页 »',
      '下一頁 »',
      '下1页 »',
      '下1頁 »',
      '下页 »',
      '下頁 »',
      '翻页 »',
      '翻頁 »',
      '翻下頁 »',
      '翻下页 »',
      '下一张 »',
      '下一張 »',
      '下一幅 »',
      '下一章 »',
      '下一节 »',
      '下一節 »',
      '下一篇 »',
      '前进 »',
      '下篇 »',
      '后页 »',
      '往后 »',
      'Next »',
      'Next Page »',
      '次へ »',
      '后一页',
      '後一頁',
      '下一页 ›',
      '下一頁 ›',
      '下1页 ›',
      '下1頁 ›',
      '下頁 ›',
      '翻页 ›',
      '翻頁 ›',
      '翻下頁 ›',
      '翻下页 ›',
      '下一张 ›',
      '下一張 ›',
      '下一幅 ›',
      '下一章 ›',
      '下一节 ›',
      '下一節 ›',
      '下一篇 ›',
      '前进 ›',
      '下篇 ›',
      '后页 ›',
      '往后 ›',
      'Next ›',
      'Next >',
      'Next Page ›',
      '次へ ›',
      '次のページ ›',
      '»',
      '→',
      '早期文章→'
    ];
    // THX to https://greasyfork.org/en/forum/discussion/39361/x
    // 出在自动翻页信息附加显示真实相对页面信息，一般能智能识别出来。如果还有站点不能识别，可以把地址的特征字符串加到下面
    // 最好不要乱加，一些不规律的站点显示出来的数字也没有意义
    const REALPAGE_SITE_PATTERN = ['search?', 'search_', 'forum', 'thread'];

    // ------------------------下面的不要管他-----------------
    /// ////////////////////////////////////////////////////////////////

    Promise.all([loadSettings(), getServerIp(location.hostname)])
      // @ts-ignore
      .then(function ([values, serverIp]) {
        let {jsonRule} = values;
        const {prefs, SITEINFO_D, autoMatch, version, blackList} = values;
        if (prefs.debug) {
          logger.setLevel('debug');
        } else {
          logger.setLevel(5);
        }
        logger.debug('Script Manager: ', JSON.stringify({name: SCRIPT_MANAGER.name, version: SCRIPT_MANAGER.version || 'unknown'}));
        logger.debug('Browser: ', JSON.stringify(BROWSER));
        logger.debug(`Server ip: ', ${serverIp}`);
        const setup = function () {
          const d = document;

          /**
           *
           * @param {string} s s
           * @returns {HTMLInputElement} elem
           */
          const $ = function (s) {
            // @ts-ignore
            return d.getElementById('sp-prefs-' + s);
          };
          if ($('setup')) return;

          const styleNode = addStyle(spcss['sp-prefs-setup']);
          if (prefs.customCSS.length > 0) {
            addStyle(prefs.customCSS);
          }
          var div = d.createElement('div');
          div.id = 'sp-prefs-setup';
          div.style.position = 'fixed';
          if (prefs.FW_position !== 2) {
            div.style.right = '38px';
            div.style.top = '20px';
          } else {
            div.style.right = `${prefs.FW_offset[1]}px`;
            div.style.top = `${prefs.FW_offset[0]}px`;
          }
          const nextUpdateDate = prefs.disableBuiltinSubscriptionRules ? 'N/A' : jsonRuleLoader.expire.toDateString();
          div.innerHTML = template['sp-prefs']({
            prefs,
            scriptInfo,
            nextUpdateDate: nextUpdateDate
          });
          d.body.appendChild(div);

          const close = () => {
            if (styleNode) {
              styleNode.parentNode.removeChild(styleNode);
            }
            const div = $('setup');
            div.parentNode.removeChild(div);
          };

          const on = (node, e, f) => {
            node.addEventListener(e, f, false);
          };

          on($('ok'), 'click', function () {
            Object.keys(factorySettings.prefs).forEach((key) => {
              const el = $(key);
              if (el !== null) {
                prefs[key] = getProperty(el);
              }
            });
            if (prefs.debug) {
              logger.setLevel('debug');
            } else {
              logger.setLevel(5);
            }
            autoMatch.keyMatch = !$('autoMatchKeyMatch').checked;

            SITEINFO_D.useiframe = !!$('SITEINFO_D-useiframe').checked;
            SITEINFO_D.autopager.enable = !!$('SITEINFO_D-a_enable').checked;
            SITEINFO_D.autopager.force_enable = !!$('SITEINFO_D-a_force_enable').checked;

            autoMatch.useiframe = SITEINFO_D.useiframe;

            saveSettings({
              prefs,
              SITEINFO_D,
              autoMatch
            }).then(() => {
              SP.loadSetting();
              close();
              location.reload();
            });
          });

          on($('reset'), 'click', () => {
            $('setup').innerHTML = template.spinner.reset;
            addStyle(spcss['sp-prefs-spinner']);
            resetSettings().then(() => {
              location.reload();
            });
          });

          if (prefs.disableBuiltinSubscriptionRules) {
            $('updaterule').setAttribute('disabled', '');
          }

          on($('updaterule'), 'click', function () {
            if (prefs.disableBuiltinSubscriptionRules) return;
            $('setup').innerHTML = template.spinner.update;
            addStyle(spcss['sp-prefs-spinner']);
            jsonRuleLoader.updateRule(true).then(() => {
              jsonRule = jsonRuleLoader.getRule();
              SP.loadSetting();
              close();
              location.reload();
            });
          });

          on($('cancel'), 'click', close);

          $('debug').checked = logger.getLevel() === logger.levels.DEBUG;
          $('ChineseUI').checked = prefs.ChineseUI;
          $('floatWindow').checked = prefs.floatWindow;
          $('enableHistory').checked = prefs.enableHistory;
          // $('forceTargetWindow').checked = prefs.forceTargetWindow;
          $('dblclick_pause').checked = prefs.dblclick_pause;
          $('SITEINFO_D-useiframe').checked = SITEINFO_D.useiframe;
          $('SITEINFO_D-a_enable').checked = SITEINFO_D.autopager.enable;
          $('arrowKeyPage').checked = prefs.arrowKeyPage;
          $('SITEINFO_D-a_force_enable').checked = SITEINFO_D.autopager.force_enable;
          $('excludes').value = prefs.excludes;
          $('custom_siteinfo').value = prefs.custom_siteinfo;
          $('customCSS').value = prefs.customCSS;
          $('disableBuiltinRules').checked = prefs.disableBuiltinRules;
          $('disableBuiltinSubscriptionRules').checked = prefs.disableBuiltinSubscriptionRules;
          $('autoMatchKeyMatch').checked = !autoMatch.keyMatch;
        };

        // main functions
        const SP = {
          spinit: function () {
            if (document.body.getAttribute('name') === 'MyNovelReader') {
              return;
            }

            this.loadSetting();

            if (userLang === 'zh_CN') {
              GM.registerMenuCommand('Super_preloaderPlus_one_New 设置', setup);
            } else {
              GM.registerMenuCommand('Super_preloaderPlus_one_New Settings', setup);
            }

            // 查找是否是页面不刷新的站点
            const locationHref = location.href;
            const hashSite = _.find(HashchangeSites, function (x) {
              return toRE(x.url).test(locationHref);
            });

            if (hashSite) {
              isHashchangeSite = true;
              hashchangeTimer = hashSite.timer;
              logger.debug('This site does not refresh the page.', hashSite);
              const p1 = new Promise(function (resolve, reject) {
                setTimeout(resolve, hashchangeTimer);
              });
              p1.then(function (values) {
                init(window, document);
              });
            } else {
              init(window, document);
            }
            // 分辨率 高度 > 宽度 的是手机
            if (window.screen.height > window.screen.width) {
              addStyle('div.sp-separator { min-width:auto !important; }');
            }
          },
          loadSetting: function () {
            const a_enable = SITEINFO_D.autopager.enable;
            if (a_enable !== undefined) {
              SITEINFO_D.autopager.enable = a_enable;
            }

            const loadDblclickPause = function (reload) {
              const dblclickPause = prefs.dblclick_pause;
              if (dblclickPause) {
                prefs.mouseA = false;
                prefs.Pbutton = [0, 0, 0];
              }

              if (reload) location.reload();
            };

            const loadCustomSiteInfo = function () {
              let userRules;
              try {
                userRules = new Function('', 'return ' + prefs.custom_siteinfo)();
              } catch (e) {
                logger.error('Custom site rule error:', prefs.custom_siteinfo);
              }

              if (_.isArray(userRules)) {
                SSRules = SSRules.concat(userRules);
              }
            };

            loadDblclickPause();

            loadCustomSiteInfo();
          }
        };

        SP.spinit();
        /**
         *
         * @param {Window} window window
         * @param {Document} document document
         * @returns {void}
         */
        function init(window, document) {
          const startTime = new Date();
          /**@type {(...rest:any[])=>void} */
          const nullFn = function () {}; // 空函数.
          const url = document.location.href.replace(/#.*$/, ''); // url 去掉hash
          var cplink = url; // 翻上来的最近的页面的url;
          const domain = document.domain; // 取得域名.
          const domain_port = url.match(/https?:\/\/([^/]+)/)[1]; // 端口和域名,用来验证是否跨域.

          // 新加的，以示区别
          const remove = []; // 需要移除的事件

          // 悬浮窗
          var floatWO = {
            updateColor: nullFn,
            loadedIcon: nullFn,
            CmodeIcon: nullFn
          };
          /**
           *
           * @param {IRuntimeRule} SSS a rule
           * @returns {void}
           */
          function floatWindow(SSS) {
            // inject css
            addStyle(spcss['sp-fw']);

            // create container
            const div = document.createElement('div');
            div.id = 'sp-fw-container';
            div.innerHTML = template.floatWindow();
            document.body.appendChild(div);

            // helper function to get element
            /**
             *
             * @param {string} id id
             * @returns {HTMLInputElement} return
             */
            function $(id) {
              //@ts-ignore
              return document.getElementById(id);
            }

            const rect = $('sp-fw-rect'); // 悬浮窗的小正方形,用颜色描述当前的状态.
            const spanel = $('sp-fw-content'); // 设置面板.

            // 设置面板显隐
            const spanelc = {
              show: function () {
                spanel.style.display = 'block';
              },
              hide: function () {
                spanel.style.display = 'none';
              }
            };
            spanelc.hide();
            let rectt1, rectt2;
            rect.addEventListener(
              'mouseover',
              function (e) {
                rectt1 = setTimeout(spanelc.show, 100);
              },
              false
            );
            rect.addEventListener(
              'mouseleave',
              function (e) {
                clearTimeout(rectt1);
              },
              false
            );

            div.addEventListener(
              'mouseover',
              function (e) {
                clearTimeout(rectt2);
              },
              false
            );

            div.addEventListener(
              'mouseleave',
              function (e) {
                // Firefox bug
                // https://stackoverflow.com/questions/46831247/select-triggers-mouseleave-event-on-parent-element-in-mozilla-firefox
                if (e.relatedTarget === null) return;
                rectt2 = setTimeout(spanelc.hide, 288);
              },
              false
            );

            const dot = $('sp-fw-dot'); // 载入完成后,显示的小点
            dot.style.backgroundColor = FWKG_color.dot;

            const cur_mode = $('sp-fw-cur-mode'); // 当载入状态时,用来描述当前是翻页模式,还是预读模式.
            cur_mode.style.backgroundColor = SSS.a_enable ? FWKG_color.autopager : FWKG_color.prefetcher;

            const a_enable = $('sp-fw-a_enable'); // 启用翻页模式
            const autopager_field = $('sp-fw-autopager-field'); // 翻页设置区域

            // 预读设置
            const useiframe = $('sp-fw-useiframe');
            const viewcontent = $('sp-fw-viewcontent');

            // 翻页设置
            const a_useiframe = $('sp-fw-a_useiframe');
            const a_iloaded = $('sp-fw-a_iloaded');
            const a_itimeout = $('sp-fw-a_itimeout');
            const a_manualA = $('sp-fw-a_manualA');
            const a_remain = $('sp-fw-a_remain');
            const a_maxpage = $('sp-fw-a_maxpage');
            const a_separator = $('sp-fw-a_separator');
            const a_ipages_0 = $('sp-fw-a_ipages_0');
            const a_ipages_1 = $('sp-fw-a_ipages_1');
            const a_force = $('sp-fw-a_force');

            // newIframe 输入框的点击
            const a_newIframe = $('sp-fw-a_newIframe');
            a_newIframe.addEventListener(
              'click',
              function () {
                a_useiframe.checked = a_newIframe.checked;
              },
              false
            );

            const a_starti = $('sp-fw-a_starti'); // 开始立即翻页
            a_starti.addEventListener(
              'click',
              function (e) {
                //@ts-ignore
                if (e.currentTarget.disabled) return;
                var value = parseInt(a_ipages_1.value);
                if (isNaN(value) || value < 0) {
                  value = SSS.a_ipages[1];
                  //@ts-ignore
                  a_ipages_1.value = value;
                }
                autoPO.startipages(value);
              },
              false
            );

            // 总开关
            const enable = $('sp-fw-enable');
            $('sp-fw-setup').addEventListener('click', setup, false);

            // 保存设置按钮.
            const savebutton = $('sp-fw-savebutton');
            savebutton.addEventListener(
              'click',
              function (e) {
                const value = {
                  Rurl: SSS.Rurl,
                  useiframe: getProperty(useiframe),
                  viewcontent: getProperty(viewcontent),
                  enable: getProperty(enable)
                };

                if (SSS.a_enable !== undefined) {
                  /** @type {(s:HTMLElement)=>number} */
                  //@ts-ignore
                  const getPropertyNumber = getProperty;
                  value.a_enable = getProperty(a_enable) === 'autopager';
                  value.a_useiframe = getProperty(a_useiframe);
                  value.a_newIframe = getProperty(a_newIframe);
                  value.a_iloaded = getProperty(a_iloaded);
                  value.a_manualA = getProperty(a_manualA);
                  value.a_force = getProperty(a_force);
                  const t_a_itimeout = getPropertyNumber(a_itimeout);
                  value.a_itimeout = isNaN(t_a_itimeout) ? SSS.a_itimeout : t_a_itimeout >= 0 ? t_a_itimeout : 0;
                  const t_a_remain = getPropertyNumber(a_remain);
                  value.a_remain = isNaN(t_a_remain) ? SSS.a_remain : Number(t_a_remain);
                  const t_a_maxpage = getPropertyNumber(a_maxpage);
                  value.a_maxpage = isNaN(t_a_maxpage) ? SSS.a_maxpage : t_a_maxpage >= 1 ? t_a_maxpage : 1;
                  const t_a_ipages_1 = getPropertyNumber(a_ipages_1);
                  value.a_ipages = [getProperty(a_ipages_0), isNaN(t_a_ipages_1) ? SSS.a_ipages[1] : t_a_ipages_1 >= 0 ? t_a_ipages_1 : 1];
                  value.a_separator = getProperty(a_separator);
                }
                saveLocalSetting(value);
                if (e.shiftKey ? !prefs.FW_RAS : prefs.FW_RAS) {
                  // 按住shift键,执行反向操作.
                  setTimeout(function () {
                    location.reload();
                  }, 1);
                }
              },
              false
            );

            // 载入翻页设置.
            if (SSS.a_enable === undefined) {
              // 未定义翻页功能.
              a_enable.disabled = true;
              autopager_field.style.display = 'none';
            } else {
              setProperty(a_enable, SSS.a_enable ? 'autopager' : 'preloader');
              setProperty(a_useiframe, SSS.a_useiframe);
              setProperty(a_newIframe, SSS.a_newIframe);
              setProperty(a_iloaded, SSS.a_iloaded);
              setProperty(a_itimeout, SSS.a_itimeout);
              setProperty(a_manualA, SSS.a_manualA);
              setProperty(a_force, SSS.a_force);
              setProperty(a_remain, SSS.a_remain);
              setProperty(a_maxpage, SSS.a_maxpage);
              setProperty(a_separator, SSS.a_separator);
              setProperty(a_ipages_0, SSS.a_ipages[0]);
              setProperty(a_ipages_1, SSS.a_ipages[1]);
            }

            if (!SSS.a_enable) {
              // 当前不是翻页模式,禁用立即翻页按钮.
              a_starti.disabled = true;
            }

            if (!SSS.hasRule) {
              // 如果没有高级规则,那么此项不允许操作.
              a_force.disabled = true;
            }

            // 载入预读设置.
            setProperty(useiframe, SSS.useiframe);
            setProperty(viewcontent, SSS.viewcontent);

            // 总开关
            setProperty(enable, SSS.enable);

            const FWKG_state = {
              loading: '读取中状态',
              prefetcher: '预读状态',
              autopager: '翻页状态',
              Apause: '翻页状态(暂停)',
              Astop: '翻页状态(停止)(翻页完成,或者被异常停止)(无法再开启)',
              dot: '读取完后'
            };

            if (userLang !== 'zh_CN') {
              FWKG_state.loading = 'Loading';
              FWKG_state.prefetcher = 'Prefetching';
              FWKG_state.autopager = 'Autopagger (Running)';
              FWKG_state.Apause = 'Autopagger (Pause)';
              FWKG_state.Astop = 'Autopagger (Stop)';
              FWKG_state.dot = 'Finish loading';
            }

            floatWO = {
              updateColor: function (state) {
                rect.style.backgroundColor = FWKG_color[state];
                rect.setAttribute('title', FWKG_state[state]);
              },
              loadedIcon: function (command) {
                dot.style.display = command == 'show' ? 'block' : 'none';
              },
              CmodeIcon: function (command) {
                cur_mode.style.display = command == 'show' ? 'block' : 'none';
              }
            };

            const vertical = parseInt(prefs.FW_offset[0] + '', 10);
            const horiz = parseInt(prefs.FW_offset[1] + '', 10);
            const FW_position = prefs.FW_position;

            // 非opera用fixed定位.
            div.style.position = 'fixed';
            switch (FW_position) {
              case 1:
                div.style.top = vertical + 'px';
                div.style.left = horiz + 'px';
                break;
              case 2:
                div.style.top = vertical + 'px';
                div.style.right = horiz + 'px';
                break;
              case 3:
                div.style.bottom = vertical + 'px';
                div.style.right = horiz + 'px';
                break;
              case 4:
                div.style.bottom = vertical + 'px';
                div.style.left = horiz + 'px';
                break;
              default:
                break;
            }
          }

          function sp_transition(start, end) {
            //@ts-ignore
            var TweenF = sp_transition.TweenF;
            if (!TweenF) {
              TweenF = Tween[TweenM[prefs.s_method]];
              TweenF = TweenF[TweenEase[prefs.s_ease]] || TweenF;
              //@ts-ignore
              sp_transition.TweenF = TweenF;
            }
            const frameSpeed = 1000 / prefs.s_FPS;
            var t = 0; // 次数,开始
            const b = start; // 开始
            const c = end - start; // 结束
            const d = Math.ceil(prefs.s_duration / frameSpeed); // 次数,结束

            const x = window.scrollX;

            function transition() {
              const y = Math.ceil(TweenF(t, b, c, d));
              window.scroll(x, y);
              if (t < d) {
                t++;
                setTimeout(transition, frameSpeed);
              }
            }
            transition();
          }

          function sepHandler(e) {
            e.stopPropagation();
            const div = e.currentTarget;
            const target = e.target;

            function getRelativeDiv(which) {
              var id = div.id;
              id = id.replace(/(sp-separator-)(.+)/, function (a, b, c) {
                return b + String(Number(c) + (which == 'pre' ? -1 : 1));
              });
              return id ? document.getElementById(id) : null;
            }

            function scrollIt(a, b) {
              // a=a!==undefined? a : window.scrollY;
              if (prefs.sepT) {
                sp_transition(a, b);
              } else {
                window.scroll(window.scrollX, b);
              }
            }

            var o_scrollY, divS;

            switch (target.className) {
              case 'sp-sp-gotop':
                scrollIt(window.scrollY, 0);
                break;
              case 'sp-sp-gopre': {
                const prediv = getRelativeDiv('pre');
                if (!prediv) return;
                o_scrollY = window.scrollY;
                var preDS = prediv.getBoundingClientRect().top;
                if (prefs.sepP) {
                  divS = div.getBoundingClientRect().top;
                  preDS = o_scrollY - (divS - preDS);
                } else {
                  preDS += o_scrollY - 6;
                }
                scrollIt(o_scrollY, preDS);
                break;
              }
              case 'sp-sp-gonext': {
                const nextdiv = getRelativeDiv('next');
                if (!nextdiv) return;
                o_scrollY = window.scrollY;
                var nextDS = nextdiv.getBoundingClientRect().top;
                if (prefs.sepP) {
                  divS = div.getBoundingClientRect().top;
                  nextDS = o_scrollY + (-divS + nextDS);
                } else {
                  nextDS += o_scrollY - 6;
                }
                scrollIt(o_scrollY, nextDS);
                break;
              }
              case 'sp-sp-gobottom':
                scrollIt(window.scrollY, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
                break;
              default:
                break;
            }
          }

          // autopager
          var autoPO = {
            /**@type {(value?:number)=>void} f*/
            startipages: nullFn
          };
          var hashchangeAdded = false;
          /**
           * @param {IRuntimeRule} SSS a rule
           * @param {*} floatWO float window object
           * @returns {void}
           */
          function autopager(SSS, floatWO) {
            // return;
            // 更新悬浮窗的颜色.
            floatWO.updateColor('autopager');

            // 获取插入位置节点.
            var insertPoint;
            var pageElement;
            var insertMode;
            if (SSS.a_HT_insert) {
              insertPoint = getElement(SSS.a_HT_insert[0]);
              insertMode = SSS.a_HT_insert[1];
            } else {
              pageElement = getAllElements(SSS.a_pageElement, document, document, null, cplink);
              if (pageElement.length > 0) {
                const pELast = pageElement[pageElement.length - 1];
                insertPoint = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(' '));
              }
              insertMode = -1;
            }

            if (insertPoint) {
              logger.debug('Verify that the insertion position node can be found: success', insertPoint);
            } else {
              logger.error('Verify that the insertion position node can be found: failed. JS execution stopped', SSS.a_HT_insert ? SSS.a_HT_insert[0] : '');
              floatWO.updateColor('Astop');
              return;
            }
            if (window.navigator.language != 'en') {
              logger.debug('Language: ', window.navigator.language);
            }

            if (pageElement === undefined) {
              pageElement = getAllElements(SSS.a_pageElement);
            }
            if (pageElement.length > 0) {
              logger.debug('Verify that the main element can be found: success', pageElement);
            } else {
              logger.error('Verify that the main element can be found: failure', SSS.a_pageElement);
              floatWO.updateColor('Astop');
              return;
            }

            if (SSS.a_stylish) {
              // 插入自定义样式
              addStyle(SSS.a_stylish, 'Super_preloader-style');
            }

            /** @type {Node} */
            var insertPointP;
            if (insertMode != 2) {
              insertPointP = insertPoint.parentNode;
            }

            var addIntoDoc;
            if (insertMode == -1 || insertMode == 1) {
              addIntoDoc = function (obj) {
                return insertPointP.insertBefore(obj, insertPoint);
              };
            } else if (insertMode == 2) {
              addIntoDoc = function (obj) {
                return insertPoint.appendChild(obj);
              };
            } else if (insertMode == 0) {
              addIntoDoc = function (obj) {
                return insertPointP.insertBefore(obj, insertPoint.nextSibling);
              };
            }

            /** @type {HTMLDocument} */
            var doc, win;

            function XHRLoaded(res) {
              const str = res.data;
              doc = win = createDocumentByString(str);

              if (!doc) {
                logger.error('Document object creation failed');
                removeL();
                return;
              }
              floatWO.updateColor('autopager');
              floatWO.CmodeIcon('hide');
              floatWO.loadedIcon('show');
              working = false;
              scroll();
            }

            function XHRNotLoaded(res) {
              logger.error('XHR is failed to be loaded');
              logger.error(res);
              removeL();
            }

            function removeL(isRemoveAddPage) {
              logger.debug('Remove various event listeners');
              floatWO.updateColor('Astop');
              const _remove = remove;
              for (var i = 0, ii = _remove.length; i < ii; i++) {
                _remove[i]();
              }

              if (isRemoveAddPage) {
                const separator = document.querySelector('.sp-separator');
                if (separator) {
                  var insertBefore = insertPoint;
                  if (insertMode == 2) {
                    const l = insertPoint.children.length;
                    if (l > 0) {
                      insertBefore = insertPoint.children[l - 1];
                    }
                  }

                  const range = document.createRange();
                  range.setStartBefore(separator);
                  range.setEndBefore(insertBefore);
                  range.deleteContents();
                  range.detach();

                  if (insertMode == 2) {
                    // 还需要额外移除？
                    insertPoint.removeChild(insertBefore);
                  }
                }
                const style = document.getElementById('Super_preloader-style');
                if (style) {
                  style.parentNode.removeChild(style);
                }
              }
            }
            if (isHashchangeSite && !hashchangeAdded) {
              window.addEventListener('hashchange', onhashChange, false);
              hashchangeAdded = true;
              logger.debug('Successfully added hashchange event');
            }

            function onhashChange(event) {
              logger.debug('hashchange event triggered');
              removeL(true);

              setTimeout(function () {
                nextlinkElem = getElement(SSS.nextLink || 'auto;');
                nextlink = elemToHref(nextlinkElem);
                // preLink = getElement(SSS.preLink || 'auto;');
                autopager(SSS, floatWO);
              }, hashchangeTimer);
            }

            /** @type {HTMLIFrameElement} */
            var iframe;
            var messageR;

            /**
             * Event handler of iframe loaded
             * @param {IFrameLoadedEvent} event Iframe loaded event
             * @returns {void}
             */
            function iframeLoaded(event) {
              const iframe = event.currentTarget;
              const body = iframe.contentDocument.body;
              if (body && body.firstChild) {
                setTimeout(function () {
                  doc = iframe.contentDocument;
                  // removeScripts(doc, SSS.a_scriptFilter);
                  win = iframe.contentWindow || doc;
                  floatWO.updateColor('autopager');
                  floatWO.CmodeIcon('hide');
                  floatWO.loadedIcon('show');
                  working = false;

                  scroll();
                }, SSS.a_itimeout);
              }
            }

            /**
             * Load next page in iframe
             * @param {string} link Link of the next page
             * @returns {void}
             */
            function iframeRequest(link) {
              messageR = false;
              if (SSS.a_newIframe || !iframe) {
                let insertLoc = null;
                const i = document.createElement('iframe');
                iframe = i;
                i.name = 'superpreloader-iframe';
                i.width = '100%';
                i.height = '0';
                i.frameBorder = '0';
                i.style.cssText =
                  '\
                    margin:0!important;\
                    padding:0!important;\
                    visibility:hidden!important;\
                ';
                if (SSS.a_sandbox != false) {
                  //sandbox is readonly property
                  //i.sandbox = SSS.a_sandbox;
                  i.setAttribute('sandbox', '');
                }
                i.src = link;
                if (SSS.a_mutationObserver) {
                  i.setAttribute('mutationObserver', JSON.stringify(SSS.a_mutationObserver));
                  if (SSS.a_mutationObserver.relatedObj) {
                    insertLoc = getAllElements(SSS.a_mutationObserver.relatedObj);
                    if (insertLoc.length > 0) {
                      insertLoc = insertLoc[0];
                    } else {
                      insertLoc = null;
                    }
                  }
                }
                if (SSS.a_iloaded) {
                  i.addEventListener('load', iframeLoaded, false);
                  remove.push(function () {
                    i.removeEventListener('load', iframeLoaded, false);
                  });
                } else {
                  const messagehandler = function (e) {
                    if (!messageR && e.data == 'superpreloader-iframe:DOMLoaded') {
                      messageR = true;
                      iframeLoaded.call(i, {currentTarget: i});
                      if (SSS.a_newIframe) {
                        window.removeEventListener('message', messagehandler, false);
                      }
                    }
                  };
                  window.addEventListener('message', messagehandler, false);
                  remove.push(function () {
                    window.removeEventListener('message', messagehandler, false);
                  });
                }
                if (insertLoc) {
                  insertLoc.parentNode.insertBefore(i, insertLoc);
                } else {
                  document.body.appendChild(i);
                }
              } else {
                iframe.src = link;
                iframe.contentDocument.location.replace(link);
                if (SSS.a_reload) {
                  iframe.contentWindow.location.reload();
                }
              }
            }

            /**
             * Send XHR request to obtain next page content
             * @param {string} link Link of next page
             * @returns {void}
             */
            function XHRrequest(link) {
              const reqConf = {
                headers: SSS.a_headers ? SSS.a_headers : {Referer: cplink}
              };
              got
                .get(link, reqConf)
                .then(
                  /**
                   * Handling of XHR request
                   * @param {ResponseObject} res Response of got
                   * @returns {void}
                   */
                  (res) => {
                    if (res.finalUrl === cplink) {
                      logger.debug('Same final address');
                      XHRNotLoaded(res);
                    } else {
                      XHRLoaded(res);
                      logger.debug('XHRrequest complete');
                    }
                  }
                )
                .catch(
                  /**
                   * Error handling of XHR request
                   * @param {ResponseObject} res Response of got
                   * @returns {void}
                   */
                  (res) => {
                    XHRNotLoaded(res);
                  }
                );
            }

            var working;

            function doRequest() {
              working = true;
              floatWO.updateColor('loading');
              floatWO.CmodeIcon('show');

              logger.debug('Get next page', SSS.a_useiframe ? '(iframe method)' : '(XHR method)', nextlink);
              pagedLinks.push(nextlink);
              if (SSS.a_useiframe) {
                iframeRequest(nextlink);
              } else {
                if (/(?:http|\/).*/.test(nextlink)) {
                  // request next page by XHR
                  XHRrequest(nextlink);
                } else {
                  logger.error('Lazyload or Invalid nextLinkElem', nextlinkElem);
                }
              }
            }

            let [ipagesmode = false, ipagesnumber = 2] = SSS.a_ipages;
            if (ipagesmode && ipagesnumber === 0) {
              ipagesnumber = Number.MAX_SAFE_INTEGER;
            }
            var scrollDo = nullFn;
            var afterInsertDo = nullFn;
            if (prefs.Aplus) {
              afterInsertDo = doRequest;
              doRequest();
            } else {
              scrollDo = doRequest;
              if (ipagesmode) doRequest();
            }

            var manualDiv;

            function manualAdiv() {
              if (!manualDiv) {
                addStyle(spcss['sp-separator']);
                const spage = async (el) => {
                  if (doc) {
                    let value = Number(el.value);
                    if (isNaN(value) || value < 1) {
                      el.value = value = 1;
                    }
                    ipagesmode = true;
                    ipagesnumber = value + paged;
                    await insertedIntoDoc();
                  }
                };

                const div = createDOM('div', {
                  attr: {
                    id: 'sp-sp-manualdiv',
                    class: 'sp-separator'
                  },
                  children: [
                    createDOM('span', {
                      attr: {
                        class: 'sp-md-span'
                      },
                      innerHTML: userLang === 'zh_CN' ? '下' : 'Next'
                    }),
                    createDOM('input', {
                      attr: {
                        type: 'number',
                        value: 1,
                        min: 1,
                        title: userLang === 'zh_CN' ? '输入你想要拼接的页数(必须>=1),然后按回车.' : 'Type number of pageringzing and press enter',
                        id: 'sp-sp-md-number'
                      },
                      eventListener: [
                        {
                          type: 'keyup',
                          listener: (e) => {
                            if (e.keyCode == 13) {
                              // 回车
                              spage(e.target);
                            }
                          }
                        }
                      ]
                    }),
                    createDOM('span', {
                      attr: {class: 'sp-md-span'},
                      innerHTML: userLang === 'zh_CN' ? '页' : 'page'
                    }),
                    createDOM('img', {
                      attr: {
                        id: 'sp-sp-md-imgnext',
                        src: _sep_icons.next
                      }
                    }),
                    createDOM('div', {
                      attr: {
                        class: 'sp-someinfo',
                        id: 'sp-separator-hover'
                      },
                      children: [
                        createDOM('a', {
                          attr: {
                            href: 'https://github.com/machsix/Super-preloader',
                            target: '_blank'
                          },
                          innerHTML: 'Powered by Super-preloader'
                        })
                      ]
                    })
                  ]
                });
                manualDiv = div;

                document.body.appendChild(div);
                div.addEventListener(
                  'click',
                  function (e) {
                    //@ts-ignore
                    if (e.target.id === 'sp-sp-md-number') return;
                    spage(document.getElementById('sp-sp-md-number')).then(() => {
                      manualDiv.remove();
                    });
                  },
                  false
                );
              }
              addIntoDoc(manualDiv);
              //manualDiv.style.display = "block";
            }

            async function beforeInsertIntoDoc() {
              working = true;
              if (SSS.a_manualA && !ipagesmode) {
                // 显示手动翻页触发条.
                logger.debug('Manual stitching');
                manualAdiv();
              } else {
                // 直接拼接.
                logger.debug('Direct stitching');
                await insertedIntoDoc();
              }
            }

            var sepStyle;
            //looks like goNextImg is useless here.
            //const goNextImg = [false];
            const sNumber = prefs.sepStartN;
            const _sep_icons = sep_icons;
            var curNumber = sNumber;

            function createSep(lastUrl, currentUrl, nextUrl) {
              const div = document.createElement('div');
              if (SSS.a_separator) {
                if (!sepStyle) {
                  sepStyle = addStyle(spcss['sp-separator']);
                  if (prefs.customCSS.length > 0) addStyle(prefs.customCSS);
                }

                div.className = 'sp-separator';
                div.id = 'sp-separator-' + curNumber;
                div.addEventListener('click', sepHandler, false);
                let pageStr = '';
                if (userLang === 'zh_CN') {
                  pageStr = '<b>第 <span style="' + sep_icons.text_span_style + '">' + curNumber + '</span> 页</b>' + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : '');
                } else {
                  pageStr = '<b>Page <span style="' + sep_icons.text_span_style + '">' + curNumber + '</span></b>' + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : '');
                }
                div.appendChild(
                  createDOM('a', {
                    attr: {
                      class: 'sp-sp-nextlink',
                      target: '_blank',
                      href: currentUrl,
                      title: currentUrl
                    },
                    innerHTML: pageStr
                  })
                );

                div.appendChild(
                  createDOM('img', {
                    attr: {
                      src: _sep_icons.top,
                      class: 'sp-sp-gotop',
                      alt: userLang === 'zh_CN' ? '去到顶部' : 'To Top',
                      title: userLang === 'zh_CN' ? '去到顶部' : 'To Top'
                    }
                  })
                );

                div.appendChild(
                  createDOM('img', {
                    attr: {
                      src: curNumber == sNumber ? _sep_icons.pre_gray : _sep_icons.pre,
                      class: 'sp-sp-gopre',
                      title: userLang === 'zh_CN' ? '上滚一页' : 'Scroll up a page'
                    }
                  })
                );

                const i_next = createDOM('img', {
                  attr: {
                    src: _sep_icons.next_gray,
                    class: 'sp-sp-gonext',
                    title: userLang === 'zh_CN' ? '下滚一页' : 'Scroll down a page'
                  }
                });

                //if (goNextImg.length == 2) {
                //  goNextImg.shift();
                //}
                //goNextImg.push(i_next);
                div.appendChild(i_next);

                div.appendChild(
                  createDOM('img', {
                    attr: {
                      src: _sep_icons.bottom,
                      class: 'sp-sp-gobottom',
                      alt: userLang === 'zh_CN' ? '去到底部' : 'To Bottom',
                      title: userLang === 'zh_CN' ? '去到底部' : 'To Bottom'
                    }
                  })
                );

                div.appendChild(
                  createDOM('div', {
                    attr: {
                      class: 'sp-someinfo',
                      id: 'sp-separator-hover'
                    },
                    children: [
                      createDOM('a', {
                        attr: {
                          href: 'https://github.com/machsix/Super-preloader',
                          target: '_blank'
                        },
                        innerHTML: 'Powered by Super-preloader'
                      })
                    ]
                  })
                );
                curNumber += 1;
              } else {
                div.style.cssText =
                  '\
                    height:0!important;\
                    width:0!important;\
                    margin:0!important;\
                    padding:0!important;\
                    border:none!important;\
                    clear:both!important;\
                    display:block!important;\
                    visibility:hidden!important;\
                ';
              }
              return div;
            }

            var paged = 0;

            async function insertedIntoDoc() {
              if (!doc) {
                logger.error('No document');
                return;
              }

              if (SSS.a_documentFilter) {
                try {
                  await SSS.a_documentFilter(doc, typeof nextlink === 'string' && nextlink);
                  logger.debug('Successfully executeed documentFilter');
                } catch (e) {
                  logger.error('Error executing documentFilter', e, SSS.a_documentFilter.toString());
                }
              }

              const docTitle = getElementByCSS('title', doc).textContent;

              const fragment = document.createDocumentFragment();
              const pageElements = getAllElements(SSS.a_pageElement, undefined, doc, win, typeof nextlink === 'string' && nextlink);
              const ii = pageElements.length;
              if (ii <= 0) {
                logger.error('Failed to get the main content of the next page', SSS.a_pageElement);
                removeL();
                return;
              } else {
                logger.debug('Successfully got the main content of the next page', pageElements);
              }

              // 提前查找下一页链接，后面再赋值
              const lastUrl = cplink;
              cplink = String(nextlink);
              /** @type {HTMLElement | string} */
              const nl = getElement(SSS.nextLink, undefined, doc, win);
              if (nl) {
                if (nl === nextlinkElem) {
                  nextlinkElem = null;
                } else {
                  nextlinkElem = nl;
                }
              } else {
                nextlinkElem = null;
              }
              nextlink = elemToHref(nextlinkElem);
              // 有部分下一页的信息是在script中（比如新加的csdn的规则），因此先查找下一页信息，再执行 removeScripts
              removeScripts(doc, SSS.a_scriptFilter);

              var i, pe_x, pe_x_nn;
              for (i = 0; i < ii; i++) {
                pe_x = pageElements[i];
                pe_x_nn = pe_x.nodeName;
                if (pe_x_nn == 'BODY' || pe_x_nn == 'HTML' || pe_x_nn == 'SCRIPT') continue;
                fragment.appendChild(pe_x);
              }
              enableExhentaiNlRetry(fragment, cplink, {
                renameIds: true,
                pageIndex: paged + 1
              });

              if (SSS.filter && typeof SSS.filter === 'string') {
                // 功能未完善.
                var nodes = [];
                try {
                  nodes = getAllElements(SSS.filter, fragment);
                } catch (e) {}
                var nodes_x;
                for (i = nodes.length - 1; i >= 0; i--) {
                  nodes_x = nodes[i];
                  nodes_x.parentNode.removeChild(nodes_x);
                }
              }

              // lazyImgSrc
              if (SSS.lazyImgSrc) {
                handleLazyImgSrc(SSS.lazyImgSrc, fragment);
              }

              var imgs;
              //@ts-ignore
              if (!window.opera && SSS.a_useiframe && !SSS.a_iloaded) {
                imgs = getAllElements('css;img[src]', fragment); // 收集所有图片
              }

              // 处理下一页内容部分链接是否新标签页打开
              if (prefs.forceTargetWindow) {
                const arr = Array.prototype.slice.call(fragment.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])'));
                arr.forEach(function (elem) {
                  elem.setAttribute('target', '_blank');
                  if (elem.getAttribute('onclick') == 'atarget(this)') {
                    // 卡饭论坛的控制是否在新标签页打开
                    elem.removeAttribute('onclick');
                  }
                });
              }

              /** @type {HTMLElement} */
              const sepdiv = createSep(lastUrl, cplink, nextlink);
              let toInsert = sepdiv;
              var ncol = 0;
              if (SSS.a_sepdivDom !== undefined && typeof SSS.a_sepdivDom === 'function') {
                toInsert = SSS.a_sepdivDom(doc, sepdiv);
              } else if (pageElements[0] && pageElements[0].tagName === 'TR' && pageElements[pageElements.length - 1].tagName === 'TR') {
                const insertParent = insertPoint.parentNode;
                let colNodes = getAllElements('child::tr[1]/child::*[self::td or self::th]', insertParent);
                if (colNodes.length == 0) {
                  colNodes = getAllElements('child::*[self::td or self::th]', pageElements[0]);
                }
                const ncol = [].reduce.call(colNodes, (acc, cur) => acc + (parseInt(cur.getAttribute('colspan'), 10) || 1), 0);
                toInsert = createDOM('tr', {
                  children: [
                    createDOM('td', {
                      attr: {colspan: ncol},
                      children: [sepdiv]
                    })
                  ]
                });
              } else if (pageElements[0] && pageElements[0].tagName === 'TBODY' && pageElements[pageElements.length - 1].tagName === 'TBODY') {
                // https://bbs.kafan.cn/forum-8-1.html
                const trs = pageElements[pageElements.length - 1].getElementsByTagName('tr');
                if (trs) {
                  const ncol = [].reduce.call(trs[trs.length - 1].children, (acc, cur) => acc + (parseInt(cur.getAttribute('colspan'), 10) || 1), 0);
                  toInsert = createDOM('tbody', {
                    children: [
                      createDOM('tr', {
                        children: [
                          createDOM('td', {
                            attr: {colspan: ncol},
                            children: [sepdiv]
                          })
                        ]
                      })
                    ]
                  });
                } else {
                  logger.warn('No trs found');
                }
              }
              fragment.insertBefore(toInsert, fragment.firstChild);

              addIntoDoc(fragment);

              // filter
              if (SSS.filter && typeof SSS.filter === 'function') {
                try {
                  SSS.filter(pageElements);
                  logger.debug('Execution of filter(pages) succeeded');
                } catch (e) {
                  logger.error('Error executing filter(pages)', e, SSS.filter.toString());
                }
              }

              if (imgs) {
                // 非opera,在iframeDOM取出数据时需要重载图片.
                setTimeout(function () {
                  const _imgs = imgs;
                  var i, ii, img;
                  for (i = 0, ii = _imgs.length; i < ii; i++) {
                    img = _imgs[i];
                    const src = img.src;
                    img.src = src;
                  }
                }, 99);
              }

              if (SSS.a_replaceE) {
                const oldE = getAllElements(SSS.a_replaceE);
                const oldE_lt = oldE.length;
                if (oldE_lt > 0) {
                  const newE = getAllElements(SSS.a_replaceE, undefined, doc, win);
                  const newE_lt = newE.length;
                  if (newE_lt == oldE_lt) {
                    // 替换
                    var oldE_x, newE_x;
                    for (i = 0; i < newE_lt; i++) {
                      oldE_x = oldE[i];
                      newE_x = newE[i];
                      newE_x = doc.importNode(newE_x, true);
                      oldE_x.parentNode.replaceChild(newE_x, oldE_x);
                    }
                  }
                }
              }

              paged += 1;
              if (ipagesmode && paged >= ipagesnumber) {
                ipagesmode = false;
              }
              floatWO.loadedIcon('hide');
              if (manualDiv) {
                manualDiv.style.display = 'none';
              }
              //if (goNextImg[0]) goNextImg[0].src = _sep_icons.next;

              const ev = document.createEvent('Event');
              ev.initEvent('Super_preloaderPageLoaded', true, false);
              document.dispatchEvent(ev);

              if (prefs.enableHistory) {
                try {
                  window.history.pushState(null, docTitle, cplink);
                } catch (e) {}
              }

              if (paged >= SSS.a_maxpage) {
                logger.debug(`Reached the set maximum number of page turns ${SSS.a_maxpage}`);
                notice('<b>Status</b>:' + 'Reached the set maximum number of page turns:<b style="color:red">' + SSS.a_maxpage + '</b>');
                removeL();
                return;
              }
              const delayiframe = function (fn) {
                setTimeout(fn, 199);
              };
              if (nextlink && !pagedLinks.includes(nextlink)) {
                // debug('Found the next page link:', nextlink);
                doc = win = null;
                if (ipagesmode) {
                  if (SSS.a_useiframe) {
                    // 延时点,firefox,太急会卡-_-!
                    delayiframe(doRequest);
                  } else {
                    doRequest();
                  }
                } else {
                  working = false;
                  if (SSS.a_useiframe) {
                    delayiframe(afterInsertDo);
                  } else {
                    afterInsertDo();
                  }
                }
              } else {
                logger.error('No next page link found.', SSS.nextLink);
                removeL();
              }
            }

            // 返回,剩余高度是总高度的比值.
            var relatedObj_0, relatedObj_1;
            if (SSS.a_relatedObj) {
              if (_.isArray(SSS.a_relatedObj)) {
                relatedObj_0 = SSS.a_relatedObj[0];
                relatedObj_1 = SSS.a_relatedObj[1];
              } else {
                relatedObj_0 = SSS.a_pageElement;
                relatedObj_1 = 'bottom';
              }
            }

            function getRemain() {
              const _cplink = cplink || undefined;
              const scrolly = window.scrollY;
              const windowHeight = window.innerHeight;
              const domHeight = document.body.clientHeight;
              const obj = getLastVisibleElement(relatedObj_0, _cplink);
              const scrollH = obj && obj.nodeType == 1 ? obj.getBoundingClientRect()[relatedObj_1] + scrolly : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
              let exElementHeight = 0;
              if (SSS.a_excludeElement != undefined) {
                const exElementNode = getLastVisibleElement(SSS.a_excludeElement, _cplink);
                if (exElementNode !== null) {
                  exElementHeight = exElementNode.offsetHeight;
                }
              }

              return (scrollH - scrolly - windowHeight - exElementHeight) / windowHeight; // 剩余高度于页面总高度的比例.
            }

            let pause = false;
            if (prefs.pauseA) {
              const Sbutton = ['target', 'shiftKey', 'ctrlKey', 'altKey'];
              const ltype = prefs.mouseA ? 'mousedown' : 'dblclick';
              const button_1 = Sbutton[prefs.Pbutton[0]];
              const button_2 = Sbutton[prefs.Pbutton[1]];
              const button_3 = Sbutton[prefs.Pbutton[2]];

              const pauseIt = function () {
                pause = !pause;
                if (prefs.stop_ipage) ipagesmode = false;
                if (pause) {
                  floatWO.updateColor('Apause');
                  if (userLang === 'zh_CN') {
                    notice('<b>状态</b>:' + '自动翻页<span style="color:red!important;"><b> 暂停</b></span>.', prefs.disappearDelay);
                  } else {
                    notice('<b>Status</b>:' + 'Autopagger<span style="color:red!important;"><b> Pause</b></span>.', prefs.disappearDelay);
                  }
                } else {
                  floatWO.updateColor('autopager');
                  floatWO.CmodeIcon('hide');
                  if (userLang === 'zh_CN') {
                    notice('<b>状态</b>:' + '自动翻页<span style="color:red!important;"><b> 启用</b></span>.');
                  } else {
                    notice('<b>Status</b>:' + 'Autopagger<span style="color:red!important;"><b> Enable</b></span>.');
                  }
                }
                scroll();
              };
              var Sctimeout;

              const clearPause = function () {
                clearTimeout(Sctimeout);
                document.removeEventListener('mouseup', clearPause, false);
              };

              const pausehandler = function (e) {
                if (!SSS.a_manualA || ipagesmode) {
                  if (e[button_1] && e[button_2] && e[button_3]) {
                    if (e.type == 'mousedown') {
                      document.addEventListener('mouseup', clearPause, false);
                      Sctimeout = setTimeout(pauseIt, prefs.Atimeout);
                    } else {
                      pauseIt();
                    }
                  }
                }
              };
              document.addEventListener(ltype, pausehandler, false);
              remove.push(function () {
                document.removeEventListener(ltype, pausehandler, false);
              });
            }

            function scroll() {
              if (!pause && !working && (getRemain() <= SSS.a_remain || ipagesmode)) {
                if (doc) {
                  // 有的话,就插入到文档.
                  beforeInsertIntoDoc();
                } else {
                  // 否则就请求文档.
                  scrollDo();
                }
              } else {
                // debug('Scroll fails');
                // debug('Likely caused by firefox');
              }
            }

            var timeout;

            function timeoutfn() {
              clearTimeout(timeout);
              timeout = setTimeout(scroll, 100);
            }
            window.addEventListener('scroll', timeoutfn, false);
            remove.push(function () {
              window.removeEventListener('scroll', timeoutfn, false);
            });

            autoPO = {
              startipages: async function (value) {
                if (value > 0) {
                  ipagesmode = true;
                  ipagesnumber = value + paged;
                  notice('<b>Status</b>:' + 'Current number of pages turned: <b>' + paged + '</b>,' + 'Continue to turn page <b style="color:red!important;">' + ipagesnumber + '</b>');
                  if (SSS.a_manualA) await insertedIntoDoc();
                  scroll();
                }
              }
            };
          }

          /**
           * prefetcher
           * @param {IRuntimeRule} SSS a rule
           * @param {*} floatWO float window object
           * @returns {void}
           */
          function prefetcher(SSS, floatWO) {
            function cContainer() {
              const div = document.createElement('div');
              /** @type {HTMLElement} */
              //@ts-ignore
              const div2 = div.cloneNode(false);
              const hr = document.createElement('hr');
              div.style.cssText =
                '\
                margin:3px!important;\
                padding:5px!important;\
                border-radius:8px!important;\
                -moz-border-radius:8px!important;\
                border-bottom:1px solid #E30005!important;\
                border-top:1px solid #E30005!important;\
                background-color:#F5F5F5!important;\
                float:none!important;\
                display:none!important;\
            ';
              div.title = 'Prefetched content';
              div2.style.cssText =
                '\
                text-align:left!important;\
                color:red!important;\
                font-size:13px!important;\
                float:none!important;\
                display:block!important;\
                position:static!important;\
            ';
              hr.style.cssText =
                '\
                display:block!important;\
                border:1px inset #000!important;\
            ';
              div.appendChild(div2);
              div.appendChild(hr);
              document.body.appendChild(div);
              return {
                div: div,
                div2: div2
              };
            }

            floatWO.updateColor('prefetcher');

            floatWO.updateColor('loading');
            floatWO.CmodeIcon('show');

            if (SSS.useiframe) {
              const iframe = document.createElement('iframe');
              iframe.name = 'superpreloader-iframe';
              iframe.src = String(nextlink);
              iframe.width = '100%';
              iframe.height = '0';
              iframe.frameBorder = '0';
              iframe.style.cssText =
                '\
                margin:0!important;\
                padding:0!important;\
            ';
              iframe.addEventListener(
                'load',
                function (e) {
                  //@ts-ignore
                  const body = e.currentTarget.contentDocument.body;
                  if (body && body.firstChild) {
                    floatWO.updateColor('prefetcher');
                    floatWO.CmodeIcon('hide');
                    floatWO.loadedIcon('show');
                    //@ts-ignore
                    e.currentTarget.removeEventListener('load', arguments.callee, false);

                    if (SSS.lazyImgSrc) {
                      handleLazyImgSrc(SSS.lazyImgSrc, body);
                    }
                  }
                },
                false
              );
              if (SSS.viewcontent) {
                const container = cContainer();
                container.div.style.display = 'block';
                container.div2.innerHTML = 'iframe full prefetch: ' + '<br />' + 'Prefetch URL: ' + '<b>' + nextlink + '</b>';
                iframe.height = '300px';
                container.div.appendChild(iframe);
              } else {
                document.body.appendChild(iframe);
              }
            } else {
              const reqConf = {
                headers: SSS.a_headers ? SSS.a_headers : {Referer: cplink}
              };
              got.get(nextlink, reqConf).then((res) => {
                const doc = createDocumentByString(res.data);
                if (!doc) {
                  logger.error('Document object creation failed!');
                  return;
                }

                if (SSS.lazyImgSrc) {
                  handleLazyImgSrc(SSS.lazyImgSrc, doc);
                }

                const images = doc.images;
                const isl = images.length;
                var img;
                const iarray = [];
                var i;
                const existSRC = {};
                var isrc;
                for (i = isl - 1; i >= 0; i--) {
                  isrc = images[i].getAttribute('src');

                  if (!isrc || existSRC[isrc]) {
                    continue;
                  } else {
                    existSRC[isrc] = true;
                  }
                  img = document.createElement('img');
                  img.src = isrc;
                  iarray.push(img);
                }
                var container = cContainer();
                var div = container.div;
                i = iarray.length;
                container.div2.innerHTML = 'Number of prefetched pictures: ' + '<b>' + i + '</b>' + '<br />' + 'Prefetch URL:' + '<b>' + nextlink + '</b>';
                logger.info('Number of prefetched pictures: ' + i + 'Prefetch URL: ' + nextlink);

                for (i -= 1; i >= 0; i--) {
                  div.appendChild(iarray[i]);
                }
                if (SSS.viewcontent) {
                  container.div.style.display = 'block';
                }
                floatWO.updateColor('prefetcher');
                floatWO.loadedIcon('show');
                floatWO.CmodeIcon('hide');
              });
            }
          }

          // 执行开始..///////////////////

          // 分析黑名单
          const blackList_re = new RegExp(
            blackList
              .map((x) => {
                if (x.substring(0, 3).toLowerCase() == 're:') {
                  return x.substring(4);
                } else {
                  return wildcardToRegExpStr(x);
                }
              })
              .join('|')
          );
          if (blackList_re.test(url)) {
            logger.debug('Matched blacklist, JS execution stopped');
            return;
          }

          // 是否在frame上加载..
          if (prefs.DisableI && window.self != window.parent) {
            const isReturn = !_.find(DIExclude, function (x) {
              //@ts-ignore
              return x[1] && x[2].test(url);
            });
            if (isReturn) {
              logger.debug(`The page with url:${url} is not a top-level window, JS execution stopped`);
              return;
            }
          }
          logger.debug(`Page url is: ${url}, JS loaded successfully`);

          // 第一阶段..分析高级模式..
          if (prefs.disableBuiltinRules) {
            logger.warn('Builtin js rules are disabled');
          } else {
            SSRules = SSRules.concat(jsSiteRule);
          }
          if (prefs.disableBuiltinSubscriptionRules) {
            logger.warn('Remote json rules are disabled');
          } else {
            SSRules = SSRules.concat(jsonRule);
          }
          if (!prefs.disableBuiltinRules) {
            SSRules = SSRules.concat(jsGeneralRule);
          }

          if (!prefs.numOfRule || prefs.numOfRule != SSRules.length) {
            prefs.numOfRule = SSRules.length;
            GM.setValue('prefs', prefs);
          }

          // 重要的变量两枚.
          /** @type {Array<string|HTMLElement>} */
          const pagedLinks = [document.location.href];
          /** @type {HTMLElement|string} */
          var nextlinkElem;
          /** @type {string} */
          var nextlink;
          /** @type {HTMLElement|string} */
          var prelink;

          //= ==============

          /**@type {IRuntimeRule} */
          let SSS = {};
          const findCurSiteInfo = async function () {
            const SIIAD = SITEINFO_D.autopager;
            var Rurl;
            const ii = SSRules.length;

            if (userLang === 'zh_CN') {
              logger.debug(`高级规则数目:${ii}`);
              logger.debug(`Number of rules > ${ii - jsonRule.length} from other sources, such as: wedata.net`);
            } else {
              logger.debug(`Number of advanced rules:${ii}`);
            }

            for (var i = 0; i < ii; i++) {
              const SII = SSRules[i];
              if (SII.autopager && SII.autopager.ip) {
                if (SII.autopager.ip.indexOf(serverIp) < 0) {
                  continue;
                }
              }
              Rurl = toRE(SII.url);
              if (Rurl.test(url)) {
                if (userLang === 'zh_CN') {
                  logger.debug('Find current site rules:', SII);
                  logger.debug(`规则ID: ${i + 1}`);
                } else {
                  logger.debug('Find rule for this website:', SII);
                  logger.debug(`Rule ID: ${i + 1}`);
                }

                // 运行规则的 startFilter
                if (SII.autopager && SII.autopager.startFilter) {
                  try {
                    await SII.autopager.startFilter(document, window);
                    logger.debug('startFilter executed successfully');
                  } catch (e) {
                    logger.error('Error executing startFilter', e);
                  }
                }

                if (SII.nextLink === 'null;') {
                  logger.debug('Find the rule for a site without nextpage', SII);
                  SSS.hasRule = false;
                  break;
                }

                nextlinkElem = getElement(SII.nextLink || 'auto;');
                if (!nextlinkElem) {
                  logger.warn('Could not find the next page link, continue searching for other rules, skiping rule:', SII);
                  continue;
                }
                // extract next page link from an a link
                nextlink = getFullHref(nextlinkElem);
                if (nextlink === document.location.href) {
                  nextlinkElem = null;
                  continue;
                }

                if (SII.preLink && SII.preLink != 'auto;') {
                  // 如果设定了具体的preLink
                  prelink = getElement(SII.preLink);
                } else {
                  if (prefs.autoGetPreLink) {
                    prelink = getElement('auto;');
                  }
                }

                SSS = {};
                SSS.Rurl = String(Rurl);
                SSS.nextLink = SII.nextLink || 'auto;';
                SSS.viewcontent = SII.viewcontent;
                SSS.enable = SII.enable === undefined ? SITEINFO_D.enable : SII.enable;
                SSS.useiframe = SII.useiframe === undefined ? SITEINFO_D.useiframe : SII.useiframe;
                if (SII.pageElement) {
                  // 如果是Oautopager的规则..
                  if (typeof SII.autopager !== 'object') SII.autopager = {};
                  SII.autopager.pageElement = SII.pageElement;
                  if (!SII.autopager.useiframe) SII.autopager.useiframe = SII.useiframe;
                  if (SII.preLink) SII.autopager.preLink = SII.preLink;
                  if (SII.insertBefore) SII.autopager.HT_insert = [SII.insertBefore, 1];
                }

                // 自动翻页设置.
                const SIIA = SII.autopager;
                if (SIIA) {
                  SSS.a_pageElement = SIIA.pageElement;
                  if (!SSS.a_pageElement) break;
                  SSS.a_manualA = SIIA.manualA === undefined ? SIIAD.manualA : SIIA.manualA;
                  SSS.a_enable = SIIA.enable === undefined ? SIIAD.enable : SIIA.enable;
                  SSS.a_useiframe = SIIA.useiframe === undefined ? SIIAD.useiframe : SIIA.useiframe;
                  SSS.a_mutationObserver = SSS.a_useiframe ? (SIIA.mutationObserver === undefined ? null : SIIA.mutationObserver) : null;
                  SSS.a_newIframe = SIIA.newIframe === undefined ? SIIAD.newIframe : SIIA.newIframe;
                  SSS.a_iloaded = SIIA.iloaded === undefined ? SIIAD.iloaded : SIIA.iloaded;
                  SSS.a_itimeout = SIIA.itimeout === undefined ? SIIAD.itimeout : SIIA.itimeout;
                  SSS.a_remain = SIIA.remain === undefined ? SIIAD.remain : SIIA.remain;
                  SSS.a_maxpage = SIIA.maxpage === undefined ? SIIAD.maxpage : SIIA.maxpage;
                  SSS.a_separator = SIIA.separator === undefined ? SIIAD.separator : SIIA.separator;
                  SSS.a_sepdivDom = SIIA.sepdivDom === undefined ? undefined : SIIA.sepdivDom;
                  SSS.a_separatorReal = SIIA.separatorReal === undefined ? SIIAD.separatorReal : SIIA.separatorReal;
                  SSS.a_replaceE = SIIA.replaceE;
                  SSS.a_HT_insert = SIIA.HT_insert;
                  SSS.a_relatedObj = SIIA.relatedObj === undefined ? SIIAD.relatedObj : SIIA.relatedObj;
                  SSS.a_ipages = SIIA.ipages === undefined ? SIIAD.ipages : SIIA.ipages;

                  // new
                  SSS.filter = SII.filter || SIIA.filter; // 新增了函数的形式，原来的功能是移除 pageElement
                  const documentFilter = SII.documentFilter || SIIA.documentFilter;
                  if (documentFilter === 'startFilter') {
                    SSS.a_documentFilter = (doc) => SII.autopager.startFilter(doc);
                  } else if (typeof documentFilter === 'function') {
                    SSS.a_documentFilter = documentFilter;
                  } else {
                    SSS.a_documentFilter = undefined;
                  }
                  SSS.a_scriptFilter = SIIA.scriptFilter === undefined ? '' : SIIA.scriptFilter;

                  SSS.a_stylish = SII.stylish || SIIA.stylish;
                  SSS.lazyImgSrc = SIIA.lazyImgSrc;
                  SSS.a_headers = SIIA.headers === undefined ? undefined : SIIA.headers; // custom header for XHRLoaded
                  SSS.a_reload = SIIA.reload === undefined ? SIIAD.reload : SIIA.reload; // force reload iframe
                  SSS.a_sandbox = SIIA.sandbox === undefined ? SIIAD.sandbox : SIIA.sandbox;

                  // 在翻页的时候会有一些其他元素占据了页面的高度，导致翻页不精准。
                  // 比如正文下面的推荐文章列表（占据超过整个页面10%就很难受）
                  SSS.a_excludeElement = SIIA.excludeElement;
                }

                // 检验是否存在内容
                const pageElement = getElement(SSS.a_pageElement);
                if (!pageElement || (Array.isArray(pageElement) && pageElement.length === 0)) {
                  nextlinkElem = null;
                  logger.error('Could not find content, skiping rule:', SII, 'Continue to search for other rules.');
                  continue;
                }

                SSS.hasRule = true;
                break;
              }
            }

            if (!SSS.hasRule) {
              // 自动搜索.
              if (!autoMatch.keyMatch) {
                logger.warn('Auto match is disabled');
              } else {
                logger.warn('No rules are found. Auto match starts');
                nextlinkElem = autoGetLink();
                if (nextlinkElem) {
                  // 强制模式.
                  const FA = autoMatch.FA;
                  SSS.Rurl = window.localStorage ? 'am:' + (url.match(/^https?:\/\/[^:]*\//i) || [])[0] : 'am:automatch';
                  SSS.enable = true;
                  SSS.nextLink = 'auto;';
                  SSS.viewcontent = autoMatch.viewcontent;
                  SSS.useiframe = autoMatch.useiframe || SITEINFO_D.autopager.useiframe;
                  SSS.a_force = true;
                  SSS.a_manualA = FA.manualA;
                  SSS.a_enable = FA.enable || SITEINFO_D.autopager.force_enable; // Force join is enabled when this becomes true
                  SSS.a_useiframe = FA.useiframe || SITEINFO_D.useiframe;
                  SSS.a_iloaded = FA.iloaded;
                  SSS.a_itimeout = FA.itimeout;
                  SSS.a_remain = FA.remain;
                  SSS.a_maxpage = FA.maxpage;
                  SSS.a_separator = FA.separator;
                  SSS.a_ipages = FA.ipages;
                }
              }
            }

            // 如果规则没 lazyImgSrc，设置默认值
            if (!SSS.lazyImgSrc) {
              SSS.lazyImgSrc = prefs.lazyImgSrc;
            }

            logger.debug(`Total time spent on searching for advanced rules and automatic matching: ${new Date().getTime() - startTime.getTime()}ms`);
          };

          findCurSiteInfo().then(() => {
            // 上下页都没有找到啊
            if (!nextlinkElem && !prelink) {
              logger.warn(`No related links found, JS execution stopped. Total time spent: ${new Date().getTime() - startTime.getTime()}ms`);
              return;
            } else if (!nextlink) {
              logger.error('The link to the next page does not exist, JS cannot continue.');
              logger.debug(`Total time spent:${new Date().getTime() - startTime.getTime()}ms`);
              return;
            } else {
              logger.debug('Previous link element:', prelink);
              logger.debug('Next link element:', nextlinkElem);
              nextlink = elemToHref(nextlinkElem);
              logger.debug('Next link:', nextlink);
              //@ts-ignore
              prelink = prelink ? prelink.href || prelink : undefined;
            }

            const keyBinding = {
              go: function () {
                if (typeof nextlink === 'string') window.location.href = nextlink;
              },
              back: function () {
                //fixme
                if (!prelink) getElement('auto;');
                if (typeof prelink === 'string') window.location.href = prelink;
              },
              register: function (/**@type {IPrefs} */ prefs) {
                if (prefs.arrowKeyPage) {
                  logger.debug('Adding left and right arrow keys to autopager listener.');
                  document.addEventListener(
                    'keyup',
                    (e) => {
                      //@ts-ignore
                      const tarNN = e.target.nodeName;
                      if (tarNN != 'BODY' && tarNN != 'HTML') return;

                      // check is a combo pressed
                      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
                        return;
                      }

                      switch (e.keyCode) {
                        case 37:
                          this.back();
                          break;
                        case 39:
                          this.go();
                          break;
                        default:
                          break;
                      }
                    },
                    false
                  );

                  // 监听下一页事件.
                  logger.debug('添加鼠标手势翻页监听');
                  document.addEventListener(
                    'superPreloader.go',
                    () => {
                      this.go();
                    },
                    false
                  );

                  // 监听下一页事件.
                  document.addEventListener(
                    'superPreloader.back',
                    () => {
                      this.back();
                    },
                    false
                  );
                }
              }
            };

            keyBinding.register(prefs);

            loadLocalSetting(SSS);
            if (!SSS.enable) {
              logger.warn('This rule is disabled, script execution is stopped');
              logger.debug(`Total time spent:${new Date().getTime() - startTime.getTime()}ms`);
              return;
            }

            if (!SSS.hasRule) {
              SSS.a_force = true;
            }

            if (SSS.a_force) {
              SSS.a_pageElement = '//body/*';
              SSS.a_HT_insert = undefined;
              SSS.a_relatedObj = undefined;
            }

            if (prefs.floatWindow) {
              logger.debug('Creating a floating window');
              floatWindow(SSS);
              const floatWindowWidth = getFloatWindowWith();
              const d = displace(document.getElementById('sp-fw-container'), {
                handle: document.getElementById('sp-fw-rect'),
                customMove: (el, x, y) => {
                  delete el.style.left;
                  delete el.style.bottom;
                  let right = document.body.clientWidth - floatWindowWidth - x;
                  if (right < 0) {
                    right = 0;
                  } else if (right > window.innerWidth - floatWindowWidth) {
                    right = window.innerWidth - floatWindowWidth;
                  }

                  let top = y;
                  if (top > window.innerHeight - document.getElementById('sp-fw-rect').scrollHeight) {
                    top = window.innerHeight - document.getElementById('sp-fw-rect').scrollHeight;
                  } else if (top < 0) {
                    top = 0;
                  }
                  el.style.right = `${right}px`;
                  el.style.top = `${top}px`;
                },
                onMouseUp: (el) => {
                  prefs.FW_offset[0] = parseInt(el.style.top.replace('px', ''), 10);
                  prefs.FW_offset[1] = parseInt(el.style.right.replace('px', ''), 10);
                  prefs.FW_position = 2;
                  GM.setValue('prefs', prefs);
                }
              });
              document.getElementById('sp-fw-container').style.position = 'fixed';
            }

            logger.debug(`Total time spent:${new Date().getTime() - startTime.getTime()}ms`);

            // 预读或者翻页.
            if (SSS.a_enable) {
              logger.debug('Initializing, autopager mode.');
              autopager(SSS, floatWO);
            } else {
              logger.debug('Initializing, prefetch mode.');
              prefetcher(SSS, floatWO);
            }
          });

          // 获取单个元素,混合
          /**
           *
           * @param {string|Function|Array|IHrefIncObject} selector selector
           * @param {HTMLElement|Document=} contextNode element
           * @param {Document=} doc document
           * @param {Window=} win window
           * @returns {HTMLElement} element
           */
          function getElement(selector, contextNode, doc, win) {
            const _cplink = cplink;
            var ret;
            if (!selector) return ret;
            doc = doc || document;
            win = win || window;
            contextNode = contextNode || doc;
            if (typeof selector === 'string') {
              if (selector.search(/^css;/i) === 0) {
                ret = getElementByCSS(selector.slice(4), contextNode);
              } else if (selector.toLowerCase() == 'auto;') {
                ret = autoGetLink(doc, win);
              } else {
                ret = getElementByXpath(selector, contextNode, doc);
              }
            } else if (typeof selector === 'function') {
              ret = selector(doc, win, _cplink);
            } else if (selector instanceof Array) {
              for (var i = 0, l = selector.length; i < l; i++) {
                ret = getElement(selector[i], contextNode, doc, win);
                if (ret) {
                  break;
                }
              }
            } else {
              ret = hrefInc(selector, doc, win, _cplink);
            }
            return ret;
          }

          var docChecked;
          /**
           *
           * @param {Document=} doc document
           * @param {Window=} win window
           * @returns {HTMLElement|null} a
           */
          function autoGetLink(doc, win) {
            if (!autoMatch.keyMatch) return null;
            //@ts-ignore
            if (!parseKWRE.done) {
              parseKWRE();
              //@ts-ignore
              parseKWRE.done = true;
            }

            const startTime = new Date();
            doc = doc || document;
            win = win || window;

            if (doc == document) {
              // 当前文档,只检查一次.
              if (docChecked) {
                // @ts-ignore
                return nextlink;
              }
              docChecked = true;
            }

            const _prePageKey = prePageKey;
            const _nextPageKey = nextPageKey;
            const _nPKL = nextPageKey.length;
            const _pPKL = prePageKey.length;
            const _getFullHref = getFullHref;
            const _getAllElementsByXpath = getAllElementsByXpath;
            const _Number = Number;
            const _domain_port = domain_port;
            const alllinks = doc.links;
            const alllinksl = alllinks.length;

            const curLHref = cplink;
            var _nextlink;
            var _prelink;
            //@ts-ignore
            if (!autoGetLink.checked) {
              // 第一次检查
              _nextlink = nextlink;
              _prelink = prelink;
            } else {
              _prelink = true;
            }

            const DCEnable = autoMatch.digitalCheck;
            const DCRE = /^\s*\D{0,1}(\d+)\D{0,1}\s*$/;

            var i, a, ahref, atext, numtext;
            var aP;
            var initSD;
            var searchD = 1;

            var preS1;
            var preS2;
            var searchedD;
            var pSNText;
            var preSS;
            var nodeType;
            var nextS1, nextS2, nSNText, nextSS;
            var aimgs, j, jj, aimg_x, xbreak, k, keytext;

            function finalCheck(a, type) {
              var ahref = a.getAttribute('href'); // 在chrome上当是非当前页面文档对象的时候直接用a.href访问,不返回href
              if (ahref == '#') {
                return null;
              }
              ahref = _getFullHref(ahref); // 从相对路径获取完全的href;

              // 3个条件:http协议链接,非跳到当前页面的链接,非跨域
              if (/^https?:/i.test(ahref) && ahref.replace(/#.*$/, '') != curLHref && ahref.match(/https?:\/\/([^/]+)/)[1] == _domain_port) {
                logger.debug(type == 'pre' ? 'previous' : 'next' + 'match:', atext);
                return a; // 返回对象A
                // return ahref;
              }
            }

            logger.debug(`Number of full document links:${alllinksl}`);

            for (i = 0; i < alllinksl; i++) {
              if (_nextlink && _prelink) break;
              a = alllinks[i];
              if (!a) continue; // undefined跳过
              // links集合返回的本来就是包含href的a元素..所以不用检测
              // if(!a.hasAttribute("href"))continue;
              atext = a.textContent;
              if (atext) {
                if (DCEnable) {
                  numtext = atext.match(DCRE);
                  if (numtext) {
                    // 是不是纯数字
                    // debug(numtext);
                    numtext = numtext[1];
                    aP = a;
                    initSD = 0;

                    if (!_nextlink) {
                      preS1 = a.previousSibling;
                      preS2 = a.previousElementSibling;

                      while (!(preS1 || preS2) && initSD < searchD) {
                        aP = aP.parentNode;
                        if (aP) {
                          preS1 = aP.previousSibling;
                          //@ts-ignore
                          preS2 = aP.previousElementSibling;
                        }
                        initSD++;
                      }
                      searchedD = initSD > 0;

                      if (preS1 || preS2) {
                        pSNText = preS1 ? preS1.textContent.match(DCRE) : '';
                        if (pSNText) {
                          preSS = preS1;
                        } else {
                          pSNText = preS2 ? preS2.textContent.match(DCRE) : '';
                          preSS = preS2;
                        }
                        if (pSNText) {
                          pSNText = pSNText[1];
                          if (_Number(pSNText) == _Number(numtext) - 1) {
                            nodeType = preSS.nodeType;
                            if (
                              nodeType == 3 ||
                              (nodeType == 1 && (searchedD ? _getAllElementsByXpath('./descendant-or-self::a[@href]', preSS, doc).length === 0 : !preSS.hasAttribute('href') || _getFullHref(preSS.getAttribute('href')) == curLHref))
                            ) {
                              _nextlink = finalCheck(a, 'next');
                            }
                            continue;
                          }
                        }
                      }
                    }

                    if (!_prelink) {
                      nextS1 = a.nextSibling;
                      nextS2 = a.nextElementSibling;

                      while (!(nextS1 || nextS2) && initSD < searchD) {
                        aP = aP.parentNode;
                        if (aP) {
                          nextS1 = a.nextSibling;
                          nextS2 = a.nextElementSibling;
                        }
                        initSD++;
                      }
                      searchedD = initSD > 0;

                      if (nextS1 || nextS2) {
                        nSNText = nextS1 ? nextS1.textContent.match(DCRE) : '';
                        if (nSNText) {
                          nextSS = nextS1;
                        } else {
                          nSNText = nextS2 ? nextS2.textContent.match(DCRE) : '';
                          nextSS = nextS2;
                        }
                        if (nSNText) {
                          nSNText = nSNText[1];
                          if (_Number(nSNText) == _Number(numtext) + 1) {
                            nodeType = nextSS.nodeType;
                            if (
                              nodeType == 3 ||
                              // @ts-ignore
                              (nodeType == 1 && (searchedD ? _getAllElementsByXpath('./descendant-or-self::a[@href]', nextSS, doc).length === 0 : !nextSS.hasAttribute('href') || _getFullHref(nextSS.getAttribute('href')) == curLHref))
                            ) {
                              _prelink = finalCheck(a, 'pre');
                            }
                          }
                        }
                      }
                    }
                    continue;
                  }
                }
              } else {
                atext = a.title;
              }
              if (!atext) {
                aimgs = a.getElementsByTagName('img');
                for (j = 0, jj = aimgs.length; j < jj; j++) {
                  aimg_x = aimgs[j];
                  atext = aimg_x.alt || aimg_x.title;
                  if (atext) break;
                }
              }
              if (!atext) continue;
              if (!_nextlink) {
                xbreak = false;
                for (k = 0; k < _nPKL; k++) {
                  keytext = _nextPageKey[k];
                  //@ts-ignore
                  if (!keytext.test(atext)) continue;
                  _nextlink = finalCheck(a, 'next');
                  xbreak = true;
                  break;
                }
                if (xbreak || _nextlink) continue;
              }
              if (!_prelink) {
                for (k = 0; k < _pPKL; k++) {
                  keytext = _prePageKey[k];
                  //@ts-ignore
                  if (!keytext.test(atext)) continue;
                  _prelink = finalCheck(a, 'pre');
                  break;
                }
              }
            }
            logger.debug(`Time to search ${i} links:${new Date().getTime() - startTime.getTime()}ms`);
            //@ts-ignore
            if (!autoGetLink.checked) {
              // 只在第一次检测的时候,抛出上一页链接.
              prelink = _prelink;
              //@ts-ignore
              autoGetLink.checked = true;
            }

            return _nextlink;
          }

          function parseKWRE() {
            function modifyPageKey(name, pageKey, pageKeyLength) {
              function strMTE(str) {
                return str
                  .replace(/\\/g, '\\\\')
                  .replace(/\+/g, '\\+')
                  .replace(/\./g, '\\.')
                  .replace(/\?/g, '\\?')
                  .replace(/\{/g, '\\{')
                  .replace(/\}/g, '\\}')
                  .replace(/\[/g, '\\[')
                  .replace(/\]/g, '\\]')
                  .replace(/\^/g, '\\^')
                  .replace(/\$/g, '\\$')
                  .replace(/\*/g, '\\*')
                  .replace(/\(/g, '\\(')
                  .replace(/\)/g, '\\)')
                  .replace(/\|/g, '\\|')
                  .replace(/\//g, '\\/');
              }

              const pfwordl = autoMatch.pfwordl;

              const sfwordl = autoMatch.sfwordl;

              const RE_enable_a = pfwordl[name].enable;

              const RE_maxPrefix = pfwordl[name].maxPrefix;

              const RE_character_a = pfwordl[name].character;

              const RE_enable_b = sfwordl[name].enable;

              const RE_maxSubfix = sfwordl[name].maxSubfix;

              const RE_character_b = sfwordl[name].character;
              var plwords, slwords, rep;

              plwords = RE_maxPrefix > 0 ? '[' + (RE_enable_a ? strMTE(RE_character_a.join('')) : '.') + ']{0,' + RE_maxPrefix + '}' : '';
              plwords = '^\\s*' + plwords;
              slwords = RE_maxSubfix > 0 ? '[' + (RE_enable_b ? strMTE(RE_character_b.join('')) : '.') + ']{0,' + RE_maxSubfix + '}' : '';
              slwords = slwords + '\\s*$';
              rep = autoMatch.cases ? '' : 'i';

              for (var i = 0; i < pageKeyLength; i++) {
                pageKey[i] = new RegExp(plwords + strMTE(pageKey[i]) + slwords, rep);
              }
              return pageKey;
            }

            // 转成正则.
            prePageKey = modifyPageKey('previous', prePageKey, prePageKey.length);
            nextPageKey = modifyPageKey('next', nextPageKey, nextPageKey.length);
          }
        }

        // By lastDream2013 略加修改，原版只能用于 Firefox
        function getRalativePageStr(lastUrl, currentUrl, nextUrl) {
          function getDigital(str) {
            const num = str.replace(/^p/i, '');
            return parseInt(num, 10);
          }

          const getRalativePageNumArray = function (lasturl, url) {
            if (!lasturl || !url) {
              return [0, 0];
            }

            const lasturlarray = lasturl.split(/-|\.|&|\/|=|#|\?/);

            const urlarray = url.split(/-|\.|&|\/|=|#|\?/);

            var url_info;

            var lasturl_info;
            // 一些 url_info 为 p1,p2,p3 之类的
            const handleInfo = function (s) {
              if (s) {
                return s.replace(/^p/, '');
              }
              return s;
            };
            while (urlarray.length !== 0) {
              url_info = handleInfo(urlarray.pop());
              lasturl_info = handleInfo(lasturlarray.pop());
              if (url_info != lasturl_info) {
                if (/[0-9]+/.test(url_info) && (url_info == '2' || /[0-9]+/.test(lasturl_info))) {
                  return [parseInt(lasturl_info) || 1, parseInt(url_info)];
                }
              }
            }
            return [0, 0];
          };

          var relativeOff;

          // 论坛和搜索引擎网页显示实际页面信息
          var relativePageNumarray = [];
          if (nextUrl) {
            relativePageNumarray = getRalativePageNumArray(currentUrl, nextUrl);
          } else {
            relativePageNumarray = getRalativePageNumArray(lastUrl, currentUrl);
            relativeOff = relativePageNumarray[1] - relativePageNumarray[0]; // 用的上一页的相对信息比较的，要补充差值……
            relativePageNumarray[1] = relativePageNumarray[1] + relativeOff;
            relativePageNumarray[0] = relativePageNumarray[0] + relativeOff;
          }

          // console.log('[获取实际页数] ', '要比较的3个页数：',arguments, '，得到的差值:', relativePageNumarray);
          if (isNaN(relativePageNumarray[0]) || isNaN(relativePageNumarray[1])) {
            return '';
          }

          var realPageSiteMatch = false;
          relativeOff = relativePageNumarray[1] - relativePageNumarray[0];
          // 上一页与下一页差值为1，并最大数值不超过10000(一般论坛也不会超过这么多页……)
          if (relativeOff === 1 && relativePageNumarray[1] < 10000) {
            realPageSiteMatch = true;
          }

          // 上一页与下一页差值不为1，但上一页与下一页差值能被上一页与下一面所整除的，有规律的页面
          if (!realPageSiteMatch && relativeOff !== 1) {
            if (relativePageNumarray[1] % relativeOff === 0 && relativePageNumarray[0] % relativeOff === 0) {
              realPageSiteMatch = true;
            }
          }

          if (!realPageSiteMatch) {
            // 不满足以上条件，再根据地址特征来匹配
            var sitePattern;
            for (var i = 0, length = REALPAGE_SITE_PATTERN.length; i < length; i++) {
              sitePattern = REALPAGE_SITE_PATTERN[i];
              if (currentUrl.toLocaleLowerCase().indexOf(sitePattern) >= 0) {
                realPageSiteMatch = true;
                break;
              }
            }
          }

          var relativePageStr;
          if (realPageSiteMatch) {
            // 如果匹配就显示实际网页信息
            if (userLang === 'zh_CN') {
              if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
                // 一般是搜索引擎的第xx - xx项……
                relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + ' - ' + relativePageNumarray[1] + '</span> 项 ]';
              } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
                // 一般的翻页数，差值应该是1
                relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + '</span> 页 ]';
              } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
                // 找不到的话……
                relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">实际网页结束</span> ]';
              }
            } else {
              if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
                // 一般是搜索引擎的第xx - xx项……
                relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + ' - ' + relativePageNumarray[1] + '</span> ]';
              } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
                // 一般的翻页数，差值应该是1
                relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + '</span> ]';
              } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
                // 找不到的话……
                relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">Actual elements ends</span> ]';
              }
            }
          } else {
            relativePageStr = '';
          }
          return relativePageStr || '';
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // ------------------------下面的不要管他-----------------
    /// ////////////////////////////////////////////////////////////////

    // 变量
    var isHashchangeSite = false;

    var hashchangeTimer = 0;

    // ====================  libs  ==============================
    /**
     *
     * @param {IHrefIncObject} obj obj
     * @param {Document=} doc document
     * @param {Window=} win window
     * @param {string=} cplink cplink
     * @returns {string} next link
     * @description 地址栏递增处理函数
     */
    function hrefInc(obj, doc, win, cplink) {
      var _cplink = cplink;

      function getHref(href) {
        const mFails = obj.mFails;
        if (!mFails) return href;
        var str;
        if (typeof mFails === 'string') {
          str = mFails;
        } else {
          const array = [];
          for (var i = 0, ii = mFails.length; i < ii; i++) {
            const fx = mFails[i];
            if (!fx) continue;
            if (typeof fx !== 'string' || fx.indexOf('re;') === 0) {
              const fxre = typeof fx === 'string' ? toRE(fx.slice(3)) : fx;
              const mValue = href.match(fxre);
              if (!mValue) return href;
              array.push(mValue);
            } else {
              array.push(fx);
            }
          }
          str = array.join('');
        }
        return str;
      }

      var sa = obj.startAfter;
      const saType = typeof sa;
      var index;

      if (typeof sa === 'string') {
        if (sa[0] == '#') {
          _cplink = doc.location.href;
        }
        index = _cplink.indexOf(sa);
        if (index == -1) {
          _cplink = getHref(_cplink);
          index = _cplink.indexOf(sa);
          if (index == -1) return null;
        }
      } else {
        const tsa = _cplink.match(sa);
        if (!tsa) {
          _cplink = getHref(_cplink);
          sa = (_cplink.match(sa) || [])[0];
          if (!sa) return;
          index = _cplink.indexOf(sa);
          if (index == -1) return;
        } else {
          sa = tsa[0];
          index = _cplink.indexOf(sa);
        }
      }

      index += sa.length;
      const max = obj.max === undefined ? 9999 : obj.max;
      const min = obj.min === undefined ? 1 : obj.min;
      const aStr = _cplink.slice(0, index);
      const bStr = _cplink.slice(index);
      const nbStr = bStr.replace(/^(\d+)(.*)$/, function (a, b, c) {
        b = Number(b) + obj.inc;
        if (b >= max || b < min) return a;
        return b + c;
      });
      if (nbStr !== bStr) {
        var ilresult;
        try {
          ilresult = obj.isLast(doc, unsafeWindow, _cplink);
        } catch (e) {}
        if (ilresult) return;
        return aStr + nbStr;
      }
      return null;
    }

    // ====================  functions  ==============================
    function handleLazyImgSrc(rule, doc) {
      const imgAttrs = rule.split('|');
      imgAttrs.forEach(function (attr) {
        attr = attr.trim();
        [].forEach.call(doc.querySelectorAll('img[' + attr + ']'), function (img) {
          const newSrc = img.getAttribute(attr);
          if (newSrc && newSrc != img.src) {
            img.setAttribute('src', newSrc);
            img.removeAttribute(attr);
          }
        });
      });
    }

    /**
     *
     * @param {HTMLDocument} doc Document Fragment
     * @param {string} scriptFilter Regex string
     * @description Remove scripts node from doc
     * @returns {void}
     */
    function removeScripts(doc, scriptFilter) {
      const scripts = getAllElements('css;script', doc);

      var regFilter;
      if (scriptFilter) {
        regFilter = toRE(scriptFilter);
      }
      /** @type {HTMLScriptElement} */
      var scripts_x;
      for (var i = scripts.length - 1; i >= 0; i--) {
        //@ts-ignore
        scripts_x = scripts[i];
        var iremove = false;
        if (regFilter) {
          if (Object.prototype.hasOwnProperty.call(scripts_x, 'src')) {
            if (!regFilter.test(scripts_x.src)) {
              iremove = true;
            }
          }
          if (scripts_x.text) {
            if (!regFilter.test(scripts_x.text)) {
              iremove = true;
            }
          }
          if (iremove) {
            scripts_x.parentNode.removeChild(scripts_x);
          }
        } else {
          scripts_x.parentNode.removeChild(scripts_x);
        }
      }
    }

    /**
     *
     * @param {string} str str
     * @returns {HTMLDocument} document
     */
    function createDocumentByString(str) {
      // string转为DOM
      if (!str) {
        logger.error('No string found to be converted to DOM');
        return null;
      }
      if (document.documentElement.nodeName != 'HTML') {
        return new DOMParser().parseFromString(str, 'application/xhtml+xml');
      }
      /**@type {HTMLDocument} */
      var doc;
      try {
        // firefox and chrome 30+，Opera 12 会报错
        doc = new DOMParser().parseFromString(str, 'text/html');
      } catch (ex) {}

      if (doc) {
        return doc;
      }

      if (document.implementation.createHTMLDocument) {
        doc = document.implementation.createHTMLDocument('superPreloader');
      } else {
        try {
          //@ts-ignore
          doc = document.cloneNode(false);
          doc.appendChild(doc.importNode(document.documentElement, false));
          doc.documentElement.appendChild(doc.createElement('head'));
          doc.documentElement.appendChild(doc.createElement('body'));
        } catch (e) {}
      }
      if (!doc) return;
      const range = document.createRange();
      range.selectNodeContents(document.body);
      const fragment = range.createContextualFragment(str);
      doc.body.appendChild(fragment);
      const headChildNames = {
        TITLE: true,
        META: true,
        LINK: true,
        STYLE: true,
        BASE: true
      };
      var child;
      const body = doc.body;
      const bchilds = body.childNodes;
      for (var i = bchilds.length - 1; i >= 0; i--) {
        // 移除head的子元素
        child = bchilds[i];
        if (headChildNames[child.nodeName]) body.removeChild(child);
      }
      return doc;
    }

    /**
     *
     * @param {string|HTMLElement} href href
     * @returns {string} href
     * @description 从相对路径的a.href获取完全的href值.
     */
    function getFullHref(href) {
      // getAttribute may give relative url but href always give full url
      if (typeof href !== 'string') href = href.getAttribute('href');

      /** @type {HTMLAnchorElement} */
      // @ts-ignore
      let a = getFullHref.a;
      if (!a) {
        //@ts-ignore
        getFullHref.a = a = document.createElement('a');
      }

      a.href = href;
      return a.href;
    }

    function getFloatWindowWith() {
      const el = document.getElementById('sp-fw-container');
      /** @type {HTMLElement} */
      //@ts-ignore
      const elc = el.cloneNode(true);
      elc.id = `${el.id}`;
      elc.style.visibility = 'hidden';
      //@ts-ignore
      elc.querySelector('#sp-fw-content').style.display = 'block';
      document.body.appendChild(elc);
      //@ts-ignore
      const width = elc.querySelector('#sp-fw-content').offsetWidth;
      elc.remove();
      return width;
    }

    /**
     * Get next page link from an element
     * @param {string | HTMLElement} elem nextlink element
     * @returns {string} link of next page
     */
    function elemToHref(elem) {
      if (!elem) return undefined;
      if (typeof elem === 'string' || elem.hasAttribute('href')) {
        return getFullHref(elem);
      } else {
        return 'javascript:void(0);'; // pseudo href
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startSuperPreloader, {once: true});
  } else {
    startSuperPreloader();
  }
})();
