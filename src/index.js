//@ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */

// import "core-js";
// import "regenerator-runtime/runtime";

//@ts-ignore
import * as spcss from './css';
import {BROWSER, SCRIPT_MANAGER} from './utils/detect';
import {NOTIFICATION, SCRIPT_INFO} from './meta';
import {Tween, TweenEase, TweenM} from './utils/tween';
import {createDOM, getProperty, setProperty} from './utils/domTools';
import {getAllElements, getAllElementsByXpath, getElementByCSS, getElementByXpath, getLastElement} from './utils/domSelector';
import {loadLocalSetting, loadSettings, resetSettings, saveLocalSetting, saveSettings} from './utils/init';
import {setLang, template, userLang} from './locale/locale';
import {toRE, wildcardToRegExpStr} from './utils/regex';

import _ from 'lodash';
import {addStyle} from './utils/gm-enhanced';
import compareVersions from 'compare-versions';
import displace from 'displacejs';
import elementReady from './utils/element-ready';
import gotStock from './utils/got';
import {jsGeneralRule} from './rules/jsGeneralRule';
import {jsSiteRule} from './rules/jsSiteRule';
import jsonRuleLoader from './utils/json-rule';
import logger from './utils/logger';
import notice from './utils/notice';

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

  const got = gotStock.create(gotConfig);
  const scriptInfo = SCRIPT_INFO;
  const upgradeNotification = NOTIFICATION;

  // ----------------------------------
  // all rules
  /** @type {IRule[]} */
  let SSRules = [];
  // ----------------------------------

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
    top:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==',
    bottom:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==',
    pre:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==',
    next:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC',
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
  // eslint-disable-next-line prettier/prettier
  loadSettings()
    .then(function (values) {
      let {jsonRule} = values;
      const {prefs, SITEINFO_D, autoMatch, version, blackList} = values;
      if (prefs.debug) {
        logger.setLevel('debug');
      } else {
        logger.setLevel(5);
      }
      logger.debug(`Script Manager: ${SCRIPT_MANAGER.name}  v${SCRIPT_MANAGER.version}`);
      logger.debug('Browser: ', JSON.stringify(BROWSER));
      const setup = function () {
        const d = document;

        /**
         *
         * @param {string} s s
         * @returns {HTMLInputElement} elem
         */
        const $ = function (s) {
          //@ts-ignore
          return d.getElementById('sp-prefs-' + s);
        };
        if ($('setup')) return;

        const styleNode = addStyle(spcss['sp-prefs-setup']);
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
          prefs.ChineseUI = !!$('ChineseUI').checked;
          prefs.custom_siteinfo = $('custom_siteinfo').value;
          prefs.debug = !!$('debug').checked;
          if (prefs.debug) {
            logger.setLevel('debug');
          } else {
            logger.setLevel(5);
          }
          prefs.enableHistory = !!$('enableHistory').checked;
          prefs.dblclick_pause = !!$('dblclick_pause').checked;
          prefs.excludes = $('excludes').value;
          prefs.arrowKeyPage = !!$('arrowKeyPage').checked;
          prefs.floatWindow = !!$('floatWindow').checked;
          prefs.disableBuiltinRules = !!$('disableBuiltinRules').checked;
          prefs.disableBuiltinSubscriptionRules = !!$('disableBuiltinSubscriptionRules').checked;
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
            //@ts-ignore
            //todo: patch the type
            GM.registerMenuCommand('Super_preloaderPlus_one_New 设置', setup);
          } else {
            //@ts-ignore
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
              // eslint-disable-next-line no-new-func
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
        // eslint-disable-next-line valid-jsdoc
        /**@type {(...rest:any[])=>void} */
        const nullFn = function () {}; // 空函数.
        const url = document.location.href.replace(/#.*$/, ''); // url 去掉hash
        var cplink = url; // 翻上来的最近的页面的url;
        const domain = document.domain; // 取得域名.
        const domain_port = url.match(/https?:\/\/([^\/]+)/)[1]; // 端口和域名,用来验证是否跨域.

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
           * */
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
              nextlink = getElement(SSS.nextLink || 'auto;');
              nextlink = getFullHref(nextlink);
              // preLink = getElement(SSS.preLink || 'auto;');
              autopager(SSS, floatWO);
            }, hashchangeTimer);
          }

          var iframe;
          var messageR;

          function iframeLoaded(event) {
            const iframe = event.currentTarget;
            const body = iframe.contentDocument.body;
            if (body && body.firstChild) {
              setTimeout(function () {
                doc = iframe.contentDocument;
                removeScripts(doc, SSS.a_scriptFilter);
                win = iframe.contentWindow || doc;
                floatWO.updateColor('autopager');
                floatWO.CmodeIcon('hide');
                floatWO.loadedIcon('show');
                working = false;

                scroll();
              }, SSS.a_itimeout);
            }
          }

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
              i.style.cssText = '\
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
              const reqConf = {
                headers: SSS.a_headers ? SSS.a_headers : {Referer: cplink}
              };
              got
                .get(nextlink, reqConf)
                .then(function (res) {
                  if (res.finalUrl === cplink) {
                    logger.debug('Same final address');
                    XHRNotLoaded(res);
                  } else {
                    XHRLoaded(res);
                  }
                })
                .catch(function (res) {
                  XHRNotLoaded(res);
                });
              logger.debug('Reading complete.');
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
              const spage = (el) => {
                if (doc) {
                  let value = Number(el.value);
                  if (isNaN(value) || value < 1) {
                    el.value = value = 1;
                  }
                  ipagesmode = true;
                  ipagesnumber = value + paged;
                  insertedIntoDoc();
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
                  spage(document.getElementById('sp-sp-md-number'));
                  manualDiv.remove();
                },
                false
              );
            }
            addIntoDoc(manualDiv);
            //manualDiv.style.display = "block";
          }

          function beforeInsertIntoDoc() {
            working = true;
            if (SSS.a_manualA && !ipagesmode) {
              // 显示手动翻页触发条.
              logger.debug('Manual stitching');
              manualAdiv();
            } else {
              // 直接拼接.
              logger.debug('Direct stitching');
              insertedIntoDoc();
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

          function insertedIntoDoc() {
            if (!doc) {
              logger.error('No document');
              return;
            }

            if (SSS.a_documentFilter) {
              try {
                SSS.a_documentFilter(doc, typeof nextlink === 'string' && nextlink);
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
            /** @type {HTMLElement|string} */
            var nl = getElement(SSS.nextLink, undefined, doc, win);
            if (nl) {
              nl = getFullHref(nl);
              if (nl == nextlink) {
                nextlink = null;
              } else {
                nextlink = nl;
              }
            } else {
              nextlink = null;
            }
            // 有部分下一页的信息是在script中（比如新加的csdn的规则），因此先查找下一页信息，再执行 removeScripts
            removeScripts(doc, SSS.a_scriptFilter);

            var i, pe_x, pe_x_nn;
            for (i = 0; i < ii; i++) {
              pe_x = pageElements[i];
              pe_x_nn = pe_x.nodeName;
              if (pe_x_nn == 'BODY' || pe_x_nn == 'HTML' || pe_x_nn == 'SCRIPT') continue;
              fragment.appendChild(pe_x);
            }

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
            const obj = getLastElement(relatedObj_0, _cplink);
            const scrollH = obj && obj.nodeType == 1 ? obj.getBoundingClientRect()[relatedObj_1] + scrolly : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            let exElementHeight = 0;
            if (SSS.a_excludeElement != undefined) {
              const exElementNode = getLastElement(SSS.a_excludeElement, _cplink);
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
            startipages: function (value) {
              if (value > 0) {
                ipagesmode = true;
                ipagesnumber = value + paged;
                notice('<b>Status</b>:' + 'Current number of pages turned: <b>' + paged + '</b>,' + 'Continue to turn page <b style="color:red!important;">' + ipagesnumber + '</b>');
                if (SSS.a_manualA) insertedIntoDoc();
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
            hr.style.cssText = '\
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
            iframe.style.cssText = '\
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
        const blackList_re = new RegExp(blackList.map(wildcardToRegExpStr).join('|'));
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
          //@ts-ignore
          GM.setValue('prefs', prefs);
        }

        // 重要的变量两枚.
        /** @type {Array<string|HTMLElement>} */
        const pagedLinks = [document.location.href];
        /** @type {HTMLElement|string} */
        var nextlink;
        /** @type {HTMLElement|string} */
        var prelink;

        //= ==============

        /**@type {IRuntimeRule} */
        let SSS = {};

        const findCurSiteInfo = function () {
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
                  SII.autopager.startFilter(document, window);
                  logger.debug('startFilter executed successfully');
                } catch (e) {
                  logger.error('Error executing startFilter', e);
                }
              }

              nextlink = getElement(SII.nextLink || 'auto;');
              if (!nextlink) {
                logger.warn('Could not find the next page link, continue searching for other rules, skiping rule:', SII);
                continue;
              }
              // 如果匹配到的下一页链接和当前页一致，继续查找下一条规则
              if (getFullHref(nextlink) == document.location.href) {
                nextlink = null;
                continue;
              }

              if (SII.preLink && SII.preLink != 'auto;') {
                // 如果设定了具体的preLink
                prelink = getElement(SII.preLink);
              } else {
                if (prefs.autoGetPreLink) {
                  getElement('auto;');
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
                if (!(SII.autopager instanceof Object)) SII.autopager = {};
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
                nextlink = null;
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
              nextlink = autoGetLink();
              if (nextlink) {
                // 强制模式.
                const FA = autoMatch.FA;
                SSS.Rurl = window.localStorage ? 'am:' + (url.match(/^https?:\/\/[^:]*\//i) || [])[0] : 'am:automatch';
                SSS.enable = true;
                SSS.nextLink = 'auto;';
                SSS.viewcontent = autoMatch.viewcontent;
                SSS.useiframe = autoMatch.useiframe;
                SSS.a_force = true;
                SSS.a_manualA = FA.manualA;
                // SSS.a_enable = FA.enable || false; //不能使a_enable的值==undefined...
                SSS.a_enable = FA.enable || SITEINFO_D.autopager.force_enable; // 不能使a_enable的值==undefined...
                SSS.a_useiframe = FA.useiframe;
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

        findCurSiteInfo();

        // 上下页都没有找到啊
        if (!nextlink && !prelink) {
          logger.warn(`No related links found, JS execution stopped. Total time spent: ${new Date().getTime() - startTime.getTime()}ms`);
          return;
        } else {
          logger.debug('Previous link:', prelink);
          logger.debug('Next link:', nextlink);
          //@ts-ignore
          nextlink = nextlink ? nextlink.href || nextlink : undefined;
          //@ts-ignore
          prelink = prelink ? prelink.href || prelink : undefined;
        }

        const superPreloader = {
          go: function () {
            if (typeof nextlink === 'string') window.location.href = nextlink;
          },
          back: function () {
            //fixme
            if (!prelink) getElement('auto;');
            if (typeof prelink === 'string') window.location.href = prelink;
          }
        };

        if (prefs.arrowKeyPage) {
          logger.debug('Adding left and right arrow keys to autopager listener.');
          document.addEventListener(
            'keyup',
            function (e) {
              //@ts-ignore
              const tarNN = e.target.nodeName;
              if (tarNN != 'BODY' && tarNN != 'HTML') return;

              // check is a combo pressed
              if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
                return;
              }

              switch (e.keyCode) {
                case 37:
                  superPreloader.back();
                  break;
                case 39:
                  superPreloader.go();
                  break;
                default:
                  break;
              }
            },
            false
          );
        }

        // 监听下一页事件.
        logger.debug('添加鼠标手势翻页监听');
        document.addEventListener(
          'superPreloader.go',
          function () {
            superPreloader.go();
          },
          false
        );

        // 监听下一页事件.
        document.addEventListener(
          'superPreloader.back',
          function () {
            superPreloader.back();
          },
          false
        );

        // 没找到下一页的链接
        if (!nextlink) {
          logger.error('The link to the next page does not exist, JS cannot continue.');
          logger.debug(`Total time spent:${new Date().getTime() - startTime.getTime()}ms`);

          return;
        }

        loadLocalSetting(SSS);

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
              //@ts-ignore
              GM.setValue('prefs', prefs);
            }
          });
          document.getElementById('sp-fw-container').style.position = 'fixed';
        }

        if (!SSS.enable) {
          logger.warn('This rule is disabled, script execution is stopped');
          logger.debug(`Total time spent:${new Date().getTime() - startTime.getTime()}ms`);

          return;
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

        var docChecked;

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

        /**
         *
         * @param {Document=} doc document
         * @param {Window=} win window
         * @returns {HTMLElement} a
         */
        function autoGetLink(doc, win) {
          if (!autoMatch.keyMatch) return;
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
            if (/^https?:/i.test(ahref) && ahref.replace(/#.*$/, '') != curLHref && ahref.match(/https?:\/\/([^\/]+)/)[1] == _domain_port) {
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

          const lasturlarray = lasturl.split(/-|\.|\&|\/|=|#|\?/);

          const urlarray = url.split(/-|\.|\&|\/|=|#|\?/);

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
        if (index == -1) return;
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
   * @param {HTMLElement} doc Document Fragment
   * @param {String} scriptFilter Regex string
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
        if (scripts_x.hasOwnProperty('src')) {
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
      return;
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
    if (typeof href !== 'string') href = href.getAttribute('href');
    // if(href.search(/^https?:/)==0)return href;//http打头,不一定就是完整的href;
    //@ts-ignore
    var a = getFullHref.a;
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
})();
