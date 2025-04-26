// ==UserScript==
// @name         Super_preloaderPlus_one_New
// @name:zh-CN   Super_preloaderPlus_one_改
// @name:zh-TW   Super_preloaderPlus_one_改
// @namespace    https://github.com/machsix
// @description  Preload and Autopager
// @description:zh-CN  预读+翻页..全加速你的浏览体验
// @description:zh-TW  预读+翻页..全加速你的浏览体验
// @author       Mach6
// @contributers YFdyh000, suchunchen
// @thanksto     ywzhaiqi, NLF
// @version      6.6.83
// @license      GPL-3.0
// @update       2019/11/8
// @homepageURL  https://github.com/machsix/Super-preloader
// @supportURL   https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new/feedback
// @contributionURL https://ko-fi.com/machsix
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==
// @require      https://cdn.jsdelivr.net/gh/machsix/gm4-polyfill@2.0/gm4-polyfill-mach6-legacy.js
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.info
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @connect      wedata.net
// @connect      github.io
// @include      http*
// @exclude      http*://mail.google.com/*
// @exclude      http*://maps.google*
// @exclude      http*://www.google.com/reader*
// @exclude      http*://www.google.com/calendar*
// @exclude      https://docs.google.com/*
// @exclude      http*://app.yinxiang.com/*
// @exclude      http*://www.dropbox.com/*
// @exclude      http*://www.toodledo.com/*
// @exclude      http://cloud.feedly.com/*
// @exclude      http://weibo.com/*
// @exclude      http://w.qq.com/*
// @exclude      http://web2.qq.com/*
// @exclude      http://openapi.qzone.qq.com/*
// @exclude      http://*cloud.vip.xunlei.com/*
// @exclude      http*://www.wumii.com/*
// @exclude      http://pan.baidu.com/*
// @exclude      http://yun.baidu.com/*
// @exclude      http://www.cnbeta.com/*
// @exclude      http://www.youku.com/
// @exclude      http://v.youku.com/*
// @exclude      http://www.iqiyi.com/*
// @exclude      http://www.duokan.com/reader/*
// @exclude      https://www.kohls.com/*
// @exclude      http://list.jd.com/*
// @exclude      http*://eclick.baidu.com/*
// @exclude      http*://googleads.g.doubleclick.net/*
// @exclude      http*://pos.baidu.com/*
// @exclude      http*://tpc.googlesyndication.com/*
// @exclude      http*://ad.doubleclick.net/*
// @exclude      http*://ad.agrantsem.com/*
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable linebreak-style */

/* eslint-disable no-unused-vars */

/* eslint-disable no-empty */
var _ = __webpack_require__(1);

var axios = __webpack_require__(4);

var GME = __webpack_require__(37);

var logger = __webpack_require__(38);

var _require = __webpack_require__(39),
    SCRIPT_INFO = _require.SCRIPT_INFO,
    NOTIFICATION = _require.NOTIFICATION;

(function () {
  var scriptInfo = SCRIPT_INFO;
  var upgradeNotification = NOTIFICATION;
  shim_GM_notification(); // ----------------------------------
  // rule.js

  if (window.name === "mynovelreader-iframe") {
    return;
  } // Website which has script to change window name


  var ChangeIframeSites = [/^https?:\/\/www\.930mh\.com/i];

  function CheckIframe() {
    for (var i = 0; i < ChangeIframeSites.length; i++) {
      if (toRE(ChangeIframeSites[i]).test(window.location.href)) {
        try {
          return window.self !== window.top;
        } catch (e) {
          return true;
        }
      }
    }

    if (window.name === "superpreloader-iframe") {
      return true;
    } else {
      return false;
    }
  } // Website which uses lazyload feature [url, xpath, timeout]
  // the script does the following:
  //    1. wait for another timeout ms
  //    2. wait change of xpath


  var LazyLoadSites = [{
    url: /^https?:\/\/www\.flickr\.com\/photos\/[^\/]+\/favorites(?:[\/?#]|$)/i,
    // target of mutation
    target: '//div[@role="main"]/div[contains(@class,"photo-list-view")]',
    mutationParser: function mutationParser(mutation, ncheck) {
      if (mutation.type == "childList") {
        if (mutation.addedNodes) {
          for (var i = 0; i < mutation.addedNodes.length; i++) {
            if (mutation.addedNodes[i].className.indexOf("photo-view") != -1) {
              ncheck = ncheck + 1;
              break;
            }
          }

          window.scroll(window.scrollX, 99999);
        }
      }

      return ncheck;
    },
    node_check_time: 2
  }]; // 如果是取出下一页使用的iframe window

  if (CheckIframe()) {
    // 搜狗,iframe里面怎么不加载js啊?
    // 去掉了原版的另一种方法，因为新版本 chrome 已经支持。旧版本 chrome iframe里面 无法访问window.parent,返回undefined
    var domloaded = function domloaded() {
      // 滚动到底部,针对,某些使用滚动事件加载图片的网站.
      var targetNode;
      var LLS;

      for (var i = 0; i < LazyLoadSites.length; i++) {
        if (toRE(LazyLoadSites[i].url).test(window.location.href)) {
          // Select the node that will be observed for mutations
          targetNode = getElementByXpath(LazyLoadSites[i].target, document, document);
          LLS = LazyLoadSites[i];
          break;
        }
      }

      if (targetNode) {
        var num_node_check = 0; // Callback function to execute when mutations are observed

        var callback = function callback(mutationsList, observer) {
          for (var i = 0; i < mutationsList.length; i++) {
            num_node_check = LLS.mutationParser(mutationsList[i], num_node_check);

            if (num_node_check == LLS.node_check_time) {
              observer.disconnect();
              window.parent.postMessage("superpreloader-iframe:DOMLoaded", "*");
            }
          }
        };

        var observer_lazyload = new MutationObserver(callback); // Start observing the target node for configured mutations

        observer_lazyload.observe(targetNode, {
          childList: true
        });
        window.scroll(window.scrollX, 99999);
      } else {
        window.scroll(window.scrollX, 99999);
        window.parent.postMessage("superpreloader-iframe:DOMLoaded", "*");
      }
    };

    if (window.opera) {
      document.addEventListener("DOMContentLoaded", domloaded, false);
    } else {
      domloaded();
    }

    return;
  } /// //////////////////设置(请注意开关的缩进关系..子开关一般在父开关为true的时候才会生效.)//////////////////////


  var userLang = navigator.language || navigator.userLanguage; // (Default settings)

  var prefsFactory = {
    floatWindow: true,
    // 显示悬浮窗
    FW_position: 2,
    // 1:出现在左上角;2:出现在右上角;3：出现在右下角;4：出现在左下角;
    FW_offset: [20, 38],
    // 偏离版边的垂直和水平方向的数值..(单位:像素)
    FW_RAS: true,
    // 点击悬浮窗上的保存按钮..立即刷新页面;
    pauseA: true,
    // 快速停止自动翻页(当前模式为翻页模式的时候生效.);
    Pbutton: [2, 0, 0],
    // 需要按住的键.....0: 不按住任何键;1: shift鍵;2: ctrl鍵; 3: alt鍵;(同时按3个键.就填 1 2 3)(一个都不按.就填 0 0 0)
    mouseA: true,
    // 按住鼠标左键..否则.双击;
    Atimeout: 200,
    // 按住左键时..延时.多少生效..(单位:ms);
    stop_ipage: true,
    // 如果在连续翻页过程中暂停.重新启用后.不在继续..连续翻页..
    Aplus: true,
    // 自动翻页模式的时候..提前预读好一页..就是翻完第1页,立马预读第2页,翻完第2页,立马预读第3页..(大幅加快翻页快感-_-!!)(建议开启)..
    sepP: true,
    // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候是否保持相对位置..
    sepT: true,
    // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候使用动画过渡..
    s_method: 3,
    // 动画方式 0-10 一种11种动画效果..自己试试吧
    s_ease: 2,
    // 淡入淡出效果 0：淡入 1：淡出 2：淡入淡出
    s_FPS: 60,
    // 帧速.(单位:帧/秒)
    s_duration: 333,
    // 动画持续时长.(单位:ms);
    someValue: "",
    // 显示在翻页导航最右边的一个小句子..-_-!!..Powered by Super_preloader 隐藏了
    DisableI: true,
    // 只在顶层窗口加载JS..提升性能..如果开启了这项,那么DIExclude数组有效,里面的网页即使不在顶层窗口也会加载....
    arrowKeyPage: false,
    // 允许使用 左右方向键 翻页..
    sepStartN: 2,
    // 翻页导航上的,从几开始计数.(貌似有人在意这个,所以弄个开关出来,反正简单.-_-!!)
    // 新增或修改的
    forceTargetWindow: true,
    // 下一页的链接设置成在新标签页打开
    debug: false,
    enableHistory: false,
    // 把下一页链接添加到历史记录
    autoGetPreLink: false,
    // 一开始不自动查找上一页链接，改为调用时再查找
    excludes: "",
    custom_siteinfo: "[]",
    lazyImgSrc: "zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder",
    ChineseUI: false,
    dblclick_pause: false,
    factoryCheck: true,
    disappearDelay: -1,
    //暂停翻页状态栏disappearDelay ms后消失, -1为不消失
    numOfRule: 4308
  };
  var prefs = prefsFactory; /// ///////////////////////---------------规则-------////////////////
  // 高级规则的一些默认设置..如果你不知道是什么..请务必不要修改(删除)它.此修改会影响到所有高级规则...
  // (Default settings)

  var SITEINFO_D = {
    enable: true,
    // 启用
    useiframe: false,
    // (预读)是否使用iframe..
    viewcontent: false,
    // 查看预读的内容,显示在页面的最下方.
    autopager: {
      enable: true,
      // 启用自动翻页...
      force_enable: false,
      // 默认启用强制拼接
      manualA: false,
      // 手动翻页.
      useiframe: false,
      // (翻页)是否使用iframe..
      iloaded: false,
      // 是否在iframe完全load后操作..否则在DOM完成后操作
      itimeout: 0,
      // 延时多少ms后,在操作..
      newIframe: false,
      remain: 1,
      // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
      maxpage: 99,
      // 最多翻多少页..
      ipages: [false, 2],
      // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
      separator: true,
      // 显示翻页导航..(推荐显示.)
      separatorReal: true,
      // 显示真实的页数
      reload: false,
      // 强制重载iframe
      sandbox: false // Iframe sandbox 选项

    }
  }; // 在以下网站上允许在非顶层窗口上加载JS..比如猫扑之类的框架集网页.

  var DIExclude = [["猫扑帖子", true, /^https?:\/\/dzh\.mop\.com\/[a-z]{3,6}\/\d{8}\/.*\.shtml$/i], ["铁血社区", true, /^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i], ["铁血社区-2", true, /^https?:\/\/bbs\.qichelian\.com\/bbsqcl\.php\?fid/i], // 像 http://so.baiduyun.me/ 内嵌的百度、Google 框架
  ["百度网盘搜索引擎-百度", true, /^https?:\/\/www\.baidu\.com\/baidu/i], ["百度网盘搜索引擎-Google", true, /^https?:\/\/74\.125\.128\.147\/custom/i]]; // 页面不刷新的站点

  var HashchangeSites = [{
    url: /^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|#|$|\?)/,
    timer: 2000,
    mutationSelector: "#main"
  }, // 运营商可能会在 #wd= 前面添加 ?tn=07084049_pg
  {
    url: /^https?:\/\/www\.baidu\.com\/($|#wd=)/,
    timer: 1000,
    mutationSelector: "#wrapper_wrapper"
  }, {
    url: /^https?:\/\/www\.newsmth\.net/,
    timer: 1000
  }]; /// ///////////////////////---------------Rules-------------////////////////
  //  ///////// ----- Rules for specific sites -------///////////
  //  Highest priority

  var SITEINFO = [{
    // 站点名字...(可选)             // 站点正则...(~~必须~~)
    name: "Google搜索",
    url: "^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp|search|#|$|\\?)",
    // url:'wildc;http://www.google.com.hk/search*',
    exampleUrl: "http://www.google.com",
    // 站点实例...(可选)
    enable: true,
    // 启用.(总开关)(可选)
    useiframe: false,
    // 是否用iframe预读...(可选)
    // sandbox: "allow-forms allow-modals allow-same-origin allow-scripts";    //设置sandbox选项
    viewcontent: false,
    nextLink: 'id("pnnext") | id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a | id("nn")/parent::a',
    // BaisicOptions: check(function getElement)
    // 1. auto
    //    nextLink:'auto;',
    // 2. xpath selector
    //    nextLink:'//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',              //下一页链接 xpath 或者 CSS选择器 或者 函数返回值(此函数必须使用第一个传入的参数作为document对象) (~~必选~~)
    // 3. css selector (prefix must be `css;`)
    //    nextLink:'css;table#nav>tbody>tr>td.b:last-child>a',
    // 4. function (function(document, window, currentURL))
    //    nextLink:function(D,W){return D.evaluate('//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',D,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;},
    //
    // Complex Options:
    // 5. array:
    //    Check the above types one-by-one
    // 6. object:
    //    check function hrefInc
    //
    // 新增 Array 的格式，依次查找
    // preLink:'auto;',
    preLink: '//a[@id="pnprev"]',
    // preLink:'//table[@id="nav"]/descendant::a[1][parent::td[@class="b"]]',            //上一页链接 xpath 或者 CSS选择器 或者 函数返回值 (可选)
    autopager: {
      enable: true,
      // 启用(自动翻页)(可选)
      useiframe: false,
      // 是否使用iframe翻页(可选)
      iloaded: false,
      // 是否在iframe完全load之后操作..否则在DOM完成后操作.
      itimeout: 0,
      // 延时多少ms后,在操作..
      // reload: true,      // Force reload iframe when the src is changed
      newIframe: false,
      // 下一页使用新的 iframe，能解决按钮无法点击的问题
      pageElement: '//div[@id="res"]|//div[@id="extrares"]',
      // 主体内容 xpath 或 CSS选择器 或函数返回值(~~必须~~)
      // pageElement:'css;div#ires',
      // pageElement:function(doc,win){return doc.getElementById('ires')},
      // filter:'//li[@class="g"]',                                                                        //(此项功能未完成)xpath 或 CSS选择器从匹配到的节点里面过滤掉符合的节点.
      remain: 1 / 3,
      // 剩余页面的高度..是显示高度的 remain 倍开始翻页(可选)
      relatedObj: ["css;div#navcnt", "bottom"],
      // 以这个元素当做最底的元素,计算页面总高度的计算.(可选)
      replaceE: '//div[@id="navcnt"]',
      // 需要替换的部分 xpath或 CSS选择器 一般是页面的本来的翻页导航(可选);
      // replaceE:'css;div#navcnt',
      ipages: [false, 2],
      // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.(可选)
      separator: true,
      // 是否显示翻页导航(可选)
      // sepdivDom: function(doc, sepdiv) {
      //   // 一个用于创建翻页条node的函数
      //   // 例子参见小木虫-帖子
      //   const td = doc.createElement("td");
      //   td.appendChild(sepdiv);
      //   const tr = doc.createElement("tr");
      //   td.setAttribute("colspan", 2);
      //   tr.appendChild(td);
      //   const tbody = doc.createElement("tbody");
      //   return tbody;
      // },
      separatorReal: true,
      maxpage: 66,
      // 最多翻页数量(可选)
      manualA: false,
      // 是否使用手动翻页.
      // HT_insert: ['//div[@id="res"]', 0], // 插入方式此项为一个数组: [节点xpath或CSS选择器,插入方式(0: 插入到给定节点之后 1：插入到给定节点之前;2：附加到给定节点的里面;)](可选);
      // HT_insert:['css;div#res',2],
      lazyImgSrc: "imgsrc",
      documentFilter: function documentFilter(doc, nextLink) {
        // 作用于xhr或iframe加载的下一页
        // 可以是一个函数 接收doc, nextLink 两个参数，也可以是字符串'startFilter'
        var x = doc.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', doc, null, 9, null).singleNodeValue;

        if (x) {
          try {
            new Function("document", "window", "google", x.nodeValue)(doc, unsafeWindow, unsafeWindow.google);
          } catch (e) {}
        } // Fix images
        // add horizontal flexity first


        var imgPs = getAllElementsByXpath("//g-scrolling-carousel/div/div/div", doc, doc);

        if (imgPs.snapshotLength > 0) {
          for (var i = 0; i < imgPs.snapshotLength; i++) {
            var d = imgPs.snapshotItem(i);
            d.style.cssText += "display: flex;flex-wrap: nowrap;width: 600px;white-space: nowrap;overflow-x: auto;";
          }
        }

        var hiddenImgs = getAllElementsByXpath("//g-scrolling-carousel/div/div/div/div[not(@data-vis)]//g-img/img", doc, doc);

        if (hiddenImgs.snapshotLength > 0) {
          for (var _i = 0; _i < hiddenImgs.snapshotLength; _i++) {
            var _d = hiddenImgs.snapshotItem(_i);

            _d.setAttribute("src", _d.getAttribute("data-src"));

            _d.style.opacity = 1;
          }
        }

        var brs = doc.getElementById("brs");

        if (brs) {
          brs.remove();
        }
      },
      // filter: function() {
      // 在添加内容到页面后运行
      //},
      startFilter: function startFilter(doc, win) {
        // 只作用一次, 用于打开的页面
        // 函数： 接收doc, win 两个参数
        // 移除 Google 重定向
        var script = doc.createElement("script");
        script.type = "text/javascript";
        script.textContent = '\
                  Object.defineProperty(window, "rwt", {\
                      configurable: false,\
                      enumerable: true,\
                      get: function () {\
                          return function() {};\
                      },\
                  });\
                  ';
        doc.documentElement.appendChild(script);
        doc.documentElement.removeChild(script); // change id of related search

        var brs = doc.getElementById("brs");

        if (brs) {
          brs.id = "ibrs";
        }

        console.log("%cGoogle    is %s", "font-weight:bold;color:red", emoji("1F4A9"));
        var keyword = getElementByXpath("//input[@title='Search']", doc, doc);

        if (keyword) {
          console.log("%cMicrosoft is %s %csearch with Bing %s", "font-weight:bold;color:00bbee", emoji("1F60E"), "font-weight:bold;color:00bbee", encodeURI("https://www.bing.com/search?q=" + keyword.value));
        } else {
          console.log("%cMicrosoft is %s", "font-weight:bold;color:00bbee", emoji("1F60E"));
        }
      }
    }
  }, {
    name: "百度搜索",
    url: "^https?://www\\.baidu\\.com/",
    // 由于 Super_preloader 默认去掉了 # 后面部分
    // url: "^https?://www\\.baidu\\.com/(s|baidu|#wd=)",
    enable: true,
    nextLink: '//div[@id="page"]/a[contains(text(),"下一页")][@href]',
    preLink: '//div[@id="page"]/a[contains(text(),"上一页")][@href]',
    autopager: {
      pageElement: "css;div#content_left > *",
      HT_insert: ["css;div#content_left", 2],
      replaceE: "css;#page",
      stylish: ".autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}",
      startFilter: function startFilter(doc, win) {
        // 设置百度搜索类型为 s?wd=
        try {
          win.document.cookie = "ISSW=1";
        } catch (ex) {}
      }
    }
  }, {
    name: "kongregate",
    url: "^https?://www\\.kongregate\\.com",
    nextLink: "(//li[@class='next_link']/a)[1]",
    autopager: {
      scriptFilter: "renderPosts",
      pageElement: "//table[@class='posts']/tbody",
      filter: function filter(pageElements) {
        var scripts = getAllElementsByXpath(".//script[contains(text(), 'renderPosts')]", pageElements[0], document);

        if (scripts.snapshotLength > 0) {
          for (var i = 0; i < scripts.snapshotLength; i++) {
            var s = scripts.snapshotItem(i);

            try {
              eval(s.innerText);
            } catch (e) {}
          }
        }
      }
    }
  }, {
    name: "kongregate_list",
    url: "^https?://www\\.kongregate\\.com",
    nextLink: "(//li[@class='next_link']/a)[1]",
    pageElement: "//div[@id='featurewide']/table/tbody"
  }, {
    name: "小木虫-帖子",
    url: "^https?://(www\\.)?muchong\\.com/t-.*$",
    nextLink: "auto;",
    pageElement: "//div[@id='maincontent']/table/tbody[@id]",
    autopager: {
      relatedObj: true,
      sepdivDom: function sepdivDom(doc, sepdiv) {
        var td = doc.createElement("td");
        td.appendChild(sepdiv);
        var tr = doc.createElement("tr");
        td.setAttribute("colspan", 2);
        tr.appendChild(td);
        var tbody = doc.createElement("tbody");
        tbody.appendChild(td);
        return tbody;
      }
    }
  }, {
    name: "smzdm-comment",
    url: /^https?:\/\/\w+\.smzdm\.com(\/\w+)?\/p\/[\d\w\W]+/i,
    exampleUrl: "https://post.smzdm.com/p/559992/",
    // 还有另外一种评论
    // exampleUrl: 'https://www.smzdm.com/p/11496450/ | https://test.smzdm.com/pingce/p/70095121/',
    nextLink: '//ul[@class="pagination"]/li[@class="pagedown"]/a',
    autopager: {
      pageElement: 'id("commentTabBlockNew")/ul[@class="comment_listBox"]',
      excludeElement: '//div[@class="article-card J_trigger_ani"]',
      replaceE: '(//ul[@class="pagination"])[1]',
      startFilter: function startFilter(doc) {
        var firstDiv = doc.querySelector(".pagination");

        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  }, {
    name: "和讯博客",
    url: /^https?:\/\/\w+\.blog\.hexun\.com\//i,
    exampleUrl: "http://23802543.blog.hexun.com/",
    nextLink: function nextLink(doc) {
      var url = doc.querySelector('.PageSkip_1 a[title="下一页"]').getAttribute("href");
      url = url.replace(/(\/p\d+\/).*/, "$1default.html");
      return url;
    },
    autopager: {
      pageElement: 'id("DefaultContainer1_ArticleList_Panel1")'
    }
  }, {
    name: "m-team artist detail",
    url: "^https?://pt\\.m-team\\.cc/artist\\.php?",
    nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
    autopager: {
      pageElement: '//form[@id="form2"]/table',
      relatedObj: true,
      documentFilter: "startFilter",
      startFilter: function startFilter(doc) {
        var trs = getAllElementsByXpath("//div[@class='artist']/div[@class='atl']/form/table/tbody/tr/td[@colspan='5']/parent::tr", doc, doc);

        if (trs.snapshotLength > 0) {
          for (var i = 0; i < trs.snapshotLength; i++) {
            var img = trs.snapshotItem(i).getElementsByTagName("img");

            if (img) {
              img = img[0];
              var imgSrc = img.getAttribute("src");
              var newImg = $C("img", {
                src: imgSrc,
                style: "display:block; width:100%; height:auto;"
              });
              var newtd = $C("td", {
                colspan: 5,
                style: "border-bottom:1px dashed black;"
              });
              var newtr = $C("tr", {
                align: "center"
              });
              newtd.appendChild(newImg);
              newtr.appendChild(newtd);
              trs.snapshotItem(i).parentNode.insertBefore(newtr, trs.snapshotItem(i));
            }
          }
        }
      }
    }
  }, {
    name: "m-team adults",
    url: "^https?://pt\\.m-team\\.cc/adult\\.php",
    nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
    autopager: {
      pageElement: '//table[@class="torrents"]',
      startFilter: function startFilter(doc) {
        var tds = doc.getElementsByClassName("torrentimg");
        [].forEach.call(tds, function (td) {
          var imgSrc = td.getElementsByTagName("img");

          if (imgSrc) {
            var newImg = $C("img", {
              src: imgSrc[0].getAttribute("src"),
              style: "display:block; width:100%; height:auto;"
            });
            var newtd = $C("td", {
              colspan: 2,
              style: "border-bottom:1px solid black;"
            });
            var newtr = $C("tr", {
              align: "center"
            });
            newtd.appendChild(newImg);
            newtr.appendChild(newtd);
            td.parentNode.parentNode.insertBefore(newtr, td.parentNode);
          }
        });
      },
      documentFilter: "startFilter"
    }
  }, {
    name: "idope.se",
    url: /^https?:\/\/idope\.se\/torrent-list\/.+/i,
    exampleUrl: "https://idope.se/torrent-list/transformer/?p=3",
    preLink: {
      startAfter: "?p=",
      inc: -1,
      min: 1
    },
    nextLink: {
      startAfter: "?p=",
      mFails: [/^https?:\/\/idope\.se\/torrent-list\/.+/i, "/?p=1"],
      inc: 1,
      isLast: function isLast(doc, win, lhref) {
        var pageSel = doc.getElementById("next");

        if (!pageSel) {
          return true;
        }
      }
    },
    autopager: {
      pageElement: '//*[@id="div2child"]',
      useiframe: true
    }
  }, {
    name: "天涯论坛帖子",
    url: /^https?:\/\/bbs\.tianya\.cn\/.+\.shtml/i,
    exampleUrl: "http://bbs.tianya.cn/post-feeling-2792523-1.shtml",
    nextLink: '//div[@class="atl-pages"]/descendant::a[text()="下页"][@href]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="atl-main"]',
      lazyImgSrc: "original",
      filter: function filter(pages) {
        var see_only_uname = unsafeWindow.see_only_uname;
        var setOnlyUser = unsafeWindow.setOnlyUser;

        if (see_only_uname) {
          setOnlyUser(see_only_uname);
        }
      }
    }
  }, {
    name: "Firefox中文社区 - 列表",
    url: "^https?://www\\.firefox\\.net\\.cn/thread",
    nextLink: '//div[@class="pages"]/a[contains(text(), "下一页")]',
    autopager: {
      pageElement: 'id("J_posts_list")',
      replaceE: "css;.pages",
      documentFilter: function documentFilter(doc) {
        // 头像载入出错的修正
        [].forEach.call(doc.querySelectorAll("img.J_avatar"), function (img) {
          img.setAttribute("onerror", 'this.src="http://www.firefox.net.cn/res/images/face/face_small.jpg";');
        });
      }
    }
  }, {
    name: "小米手机官方论坛",
    url: "^https?://bbs\\.xiaomi\\.cn/",
    nextLink: "//a[@class='nxt' and (text()='下一页')]",
    autopager: {
      pageElement: "id('postlist') | id('threadlist')",
      replaceE: '//div[@class="pg"][child::a[@class="nxt"]]',
      documentFilter: function documentFilter(doc) {
        var firstDiv = doc.querySelector("div[id^='post_']");

        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  }, {
    name: "游民星空",
    url: /^https?:\/\/www\.gamersky\.com\/\w+\/\d{6}\/.*.shtml/i,
    exampleUrl: "https://www.gamersky.com/ent/201510/671493.shtml | https://www.gamersky.com/handbook/201707/922480.shtml",
    nextLink: function nextLink(doc, win, cplink) {
      var node = getElementByXpath('//div[@class="page_css"]//a[(text()="下一页")]', doc, doc);

      if (!node) {
        return null;
      } // 请求协议保持一致


      var a = /^(https)?:\/\/.*$/.exec(cplink);

      if (a) {
        var b = /^https?:\/\/(.*)$/.exec(node.getAttribute("href"));
        return a[1] + "://" + b[1];
      }

      return node.getAttribute("href");
    },
    autopager: {
      relatedObj: true,
      pageElement: '//div[@class="Mid2L_con"]',
      replaceE: '//div[@class="page_css"]'
    } // credit : https://greasyfork.org/en/forum/discussion/42040/x

  }, {
    name: "ali213 - 攻略",
    url: /^http:\/\/gl\.ali213\.net\/html/,
    exampleUrl: "http://gl.ali213.net/html/2011/25399_2.html",
    nextLink: "id('after_this_page')",
    autopager: {
      useiframe: true,
      pageElement: "//div[@class='glzjshow_con']",
      replaceE: "id('after_this_page')",
      startFilter: function startFilter(doc) {
        var comments = getElementByXpath('//div[@class="glzjshow_plun"]', doc, doc);

        if (comments) {
          comments.style.display = "none";
        }
      }
    }
  }, {
    name: "多玩 - 攻略",
    url: /^https?:\/\/tv\.duowan\.com\/\d+\/\d+\.html/,
    exampleUrl: "http://tv.duowan.com/1801/380717306538.html",
    nextLink: "id('pageNum')//a[text()='下一页']",
    autopager: {
      useiframe: true,
      replaceE: "id('pageNum')",
      pageElement: "//div[@class='box-bd'][last()]",
      startFilter: function startFilter(doc) {
        var pager = doc.querySelector("#pageNum");

        if (pager) {
          getElementByXpath("//div[@class='box-bd'][last()]", doc, doc).after(pager);
        } //删除侧边栏


        var ad = doc.querySelector(".aside-wrap");

        if (ad) {
          ad.style.display = "none";
        }
      },
      documentFilter: function documentFilter(doc) {
        var pager = doc.querySelector("#pageNum");

        if (pager) {
          pager.style.display = "none";
        }
      }
    }
  }, {
    name: "电玩巴士 - 图文",
    url: "^https?://pc\\.tgbus\\.com/.*\\d+/$",
    exampleUrl: "http://pc.tgbus.com/tuwen_180/88983/",
    nextLink: "//div[contains(@class, 'art-page')]/a[text()='下一页']",
    autopager: {
      pageElement: "//div[@class='art-body']",
      documentFilter: function documentFilter(doc) {
        // 删除导航
        var navigator = doc.querySelector(".art-pagination");

        if (navigator) {
          navigator.parentNode.removeChild(navigator);
        } // 隐藏分页


        doc.querySelector(".art-page").style.display = "none";
      }
    }
  }, {
    name: "抽屉新热榜",
    url: /^https?:\/\/dig\.chouti\.com\//i,
    nextLink: '//a[@class="ct_page_edge" and (text()="下一页")]',
    autopager: {
      pageElement: '//div[@id="content-list"]',
      lazyImgSrc: "original",
      filter: function filter(pages) {
        var chouti = unsafeWindow.chouti;
        var NS_links_comment_top = unsafeWindow.NS_links_comment_top;
        chouti.vote();
        chouti.addCollect();
        chouti.shareweibo();
        chouti.playVido();
        NS_links_comment_top.init();
      }
    }
  }, {
    name: "koolshare扩展页面",
    url: "^https?://koolshare\\.cn/home\\.php",
    exampleUrl: "http://koolshare.cn/home.php",
    nextLink: "//a[contains(text(),'下一页')]",
    pageElement: "id('ct')//tbody",
    autopager: {
      // 只执行一次，删除多余的表头
      documentFilter: function documentFilter(doc) {
        var firstDiv = doc.querySelector(".th");

        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  }, {
    name: "Jable",
    url: /^https?:\/\/jable\.tv/i,
    nextLink: function nextLink(doc, win, cplink) {
      var a = getElementByXpath("//ul[@class='pagination']/li[span[contains(@class,'active')]]/following-sibling::li[1]/a", doc, doc);
      var blockID = a.getAttribute("data-block-id");
      var parms = a.getAttribute("data-parameters").replace(/:/g, "=").replace(/;/g, "&");
      var containerID = a.getAttribute("data-container-id");
      var nextLink = cplink + "?mode=async&function=get_block&block_id=" + blockID + "&" + parms + "&_=" + Date.now();
      return nextLink;
    },
    autopager: {
      enable: false,
      useiframe: true,
      pageElement: "//ul[@class='pagination']/preceding-sibling::div/div"
    },
    exampleUrl: "http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html"
  }, {
    name: "Netflav",
    url: "^https?://netflav\\.com",
    nextLink: {
      startAfter: "?page=",
      mFails: [/^https?:\/\/(?:netflav\.com)\/.+/i, "?page=1"],
      inc: 1,
      isLast: function isLast(doc, win, lhref) {
        var CurrentPage = Number(getElementByXpath("//div[@id='general-pagination']/div/a[@aria-current='true']", doc, doc).innerText);
        var TotalPage = Number(getElementByXpath("(//div[@id='general-pagination']/div/a[@type='nextItem']/preceding-sibling::a)[last()]", doc, doc).innerText);

        if (CurrentPage == TotalPage) {
          return true;
        }
      }
    },
    autopager: {
      useiframe: true,
      iloaded: true,
      pageElement: "(//div[@id='general-pagination']/preceding-sibling::div)[last()]/div",
      HT_insert: ["(//div[@id='general-pagination']/preceding-sibling::div)[last()]", 2]
    },
    exampleUrl: "https://netflav.com/chinese-sub?page=1"
  }, {
    name: "悠悠美图",
    url: /^https?:\/\/www\.youyourentiyishu\.com/i,
    nextLink: function nextLink(doc, win, cplink) {
      var m = cplink.match(/\d+-(\d+)\.html/);

      if (!m) {
        return cplink.replace(".html", "-2.html");
      } else {
        var current = Number(m[1]);
        var next = current + 1;
        var url = cplink.replace(m[1] + ".html", next + ".html");
        var url2 = doc.querySelector("a.next").getAttribute("href");

        if (url != url2) {
          return undefined;
        } else {
          return url;
        }
      }
    },
    autopager: {
      enable: true,
      pageElement: '//div[@class="showimg"]/a',
      ipages: [true, 30]
    },
    exampleUrl: "http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html"
  }, {
    name: "laomaoit - 老殁软件分享",
    url: "^https?://www\\.(laomoit|mpyit)\\.com",
    exampleUrl: "https://www.laomoit.com",
    nextLink: '//div[@id="pagenavi"]//a[text()="下一页"]',
    autopager: {
      pageElement: 'id("post") | id("content")',
      replaceE: "css;#pagenavi",
      // 删除页面上不需要的元素
      documentFilter: function documentFilter(doc) {
        var nodeBrowse = doc.querySelector(".browse");

        if (nodeBrowse) {
          nodeBrowse.parentNode.removeChild(nodeBrowse);
        }

        var nodeMap = doc.querySelector("#map");

        if (nodeMap) {
          nodeMap.parentNode.removeChild(nodeMap);
        }
      }
    }
  }, {
    name: "CSDN博客",
    url: /^https?:\/\/blog\.csdn\.net/i,
    exampleUrl: "http://blog.csdn.net/wangjieest?viewmode=list",
    nextLink: function nextLink(doc, win, cplink) {
      for (var i = 0; i < doc.scripts.length; i++) {
        var scriptText = doc.scripts[i].text;

        if (typeof scriptText != "undefined" && scriptText.indexOf("currentPage") > 0) {
          var pageMatches = scriptText.match(/currentPage[ ]?=[ ]?(\d+)/);

          if (pageMatches.length != 2) {
            continue;
          }

          var baseUrlMatches = scriptText.match(/baseUrl[ ]?=[ ]?'([^']+)'/);

          if (baseUrlMatches.length != 2) {
            continue;
          }

          return baseUrlMatches[1] + "/" + (parseInt(pageMatches[1]) + 1);
        }
      }

      return null;
    },
    autopager: {
      pageElement: '//div[@id="article_list"] | // div[@class="article-list"]',
      documentFilter: function documentFilter(doc) {
        // 文档底部的 marginBottom 重置
        var articleList = doc.querySelector(".article-list");

        if (articleList) {
          articleList.style.marginBottom = "0";
        }
      },
      startFilter: function startFilter(doc, win) {
        // 文档底部的 marginBottom 重置
        var articleList = doc.querySelector(".article-list");

        if (articleList) {
          articleList.style.marginBottom = "0";
        } // 移动分页位置


        var pageBox = document.querySelector("#pageBox");

        if (pageBox) {
          pageBox.parentNode.parentNode.appendChild(pageBox);
        } // 删除广告


        var adBox = document.querySelector(".box-box-large");

        if (adBox) {
          adBox.parentNode.removeChild(adBox);
        }
      }
    }
  }, {
    name: "CSDN话题",
    url: /^https?:\/\/bbs\.csdn\.net\/topics\//i,
    exampleUrl: "http://bbs.csdn.net/topics/390244325",
    nextLink: '(//div[@class="page_nav"])[1]/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("bbs_detail_wrap")',
      documentFilter: function documentFilter(doc) {
        // 删除文档中的多余表头
        var titleH = doc.querySelector(".bbs_title_h");

        if (titleH) {
          titleH.parentNode.removeChild(titleH);
        }

        var titleBar = doc.querySelector(".bbs_title_bar");

        if (titleBar) {
          titleBar.parentNode.removeChild(titleBar);
        }

        var breadWrap = doc.querySelector(".bbs_bread_wrap");

        if (breadWrap) {
          breadWrap.parentNode.removeChild(breadWrap);
        } // 尾页的分页信息隐藏


        var pageNav = doc.querySelectorAll(".mod_fun_wrap");

        if (pageNav) {
          var index = 0;

          if (pageNav.length == 2) {
            index = 1;
          }

          pageNav[index].style.display = "none";
        }
      },
      startFilter: function startFilter(doc) {
        // 尾页的分页信息隐藏
        var pageNav = doc.querySelectorAll(".mod_fun_wrap");

        if (pageNav) {
          var index = 0;

          if (pageNav.length == 2) {
            index = 1;
          }

          pageNav[index].style.display = "none";
        } // 扩展的其他话题信息移除，长度太长，导致翻页信息有点问题


        var feedBox = doc.querySelector(".post_feed_box");

        if (feedBox) {
          feedBox.parentNode.removeChild(feedBox);
        }
      },
      sepdivDom: function sepdivDom(doc, sepdiv) {
        sepdiv.className += " bbs_detail_wrap";
        return sepdiv;
      }
    }
  }, {
    name: "bl-novel",
    url: "^https?://bl-novel\\.in/novel",
    nextLink: "//a[@id='pb_next']",
    pageElement: "//div[@id='nr']",
    documentFilter: function documentFilter(doc, nextLink) {
      var scripts = doc.getElementsByTagName("script");
      var re = /chapter\s*=\s*secret\(['"](.*)['"],\s*['"](.*)['"],\s*(\w+)\s*\)/g;
      var c;
      [].forEach.call(scripts, function (x) {
        if (x.innerText.indexOf("var chapter") >= 0) {
          var temp = re.exec(x.innerText);
          var content = temp[1];
          var salt = temp[2]; // function secret is provided by the website

          if (temp[3].indexOf("true") >= 0) {
            // eslint-disable-next-line no-undef
            c = secret(content, salt, true);
          } else {
            // eslint-disable-next-line no-undef
            c = secret(content, salt, false);
          }

          doc.getElementById("nr1").innerHTML = c;
        }
      });
    }
  }, {
    name: "第一版主",
    url: "^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",
    nextLink: "auto;",
    pageElement: "//div[@id='content']"
  }, {
    name: "第一版主",
    url: "^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",
    pageElement: "//div[@id='content']",
    nextLink: function nextLink(doc, win, cplink) {
      var chapters = getAllElementsByXpath("//div[@class='chapterPages']/a", doc);
      var prefix = cplink.substr(0, cplink.lastIndexOf("/")) + "/";
      var i = 0;

      for (i = 0; i < chapters.snapshotLength; i++) {
        if (chapters.snapshotItem(i).className === "curr") {
          if (i + 1 < chapters.snapshotLength) {
            return prefix + chapters.snapshotItem(i + 1).getAttribute("href");
          } else {
            return getDomain(cplink) + getElementByXpath("//span[@class='next']/a").getAttribute("href");
          }
        }
      }
    }
  }, {
    name: "起点文学-排行榜",
    url: /^https?:\/\/www\.(qidian)\.com(\/mm)?\/rank\/.*/i,
    exampleUrl: "https://www.qidian.com/rank/collect",
    nextLink: function nextLink(doc, win, cplink) {
      var res = getElementByXpath('//div[@id="page-container"]', doc);

      if (res === null) {
        return undefined;
      }

      var next = Number(res.dataset.page) + 1;

      if (next > res.dataset.pagemax) {
        return undefined;
      } else {
        if (cplink.indexOf("page=") != -1) {
          return cplink.replace(/page=\d+/, "page=" + next);
        } else if (cplink.indexOf("?") != -1) {
          return cplink + "&page=" + next;
        } else {
          return cplink + "?page=" + next;
        }
      }
    },
    autopager: {
      pageElement: '//div[@class="rank-body"]'
    }
  }, {
    name: "rushi.net",
    url: "^https?://www.rushi.net/Home/Works",
    nextLink: "css;.gopage .next-btn",
    // 或者//div[@class='gopage']//a[contains(@class,'next-btn')]
    autopager: {
      pageElement: "css;.work_list_line",
      startFilter: function startFilter(doc) {
        var firstDiv = document.querySelector(".hot-company-job");

        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      },
      documentFilter: "startFilter"
    }
  }, {
    name: "优书-书单|评论",
    url: /^https?:\/\/www\.yousuu\.com\/(comments|booklist)/i,
    nextLink: function nextLink(doc, win, cplink) {
      var res = getElementByXpath('//ul[contains(@class, "pagination")]', doc);

      if (res === null) {
        return undefined;
      }

      var nextNode;

      if (res.childNodes.length == 2) {
        // 只有2个子节点，首页|下一页
        nextNode = res.childNodes[1];
      } else {
        // 其他类型 << 1 2(active) 3 ... >>
        // 找到active的后一项
        for (var i = res.childNodes.length - 1; i >= 0; i--) {
          if (res.children[i].className == "active") {
            // 如果当前页是最后第二项，就不翻页
            if (i == res.childNodes.length - 2) {
              return undefined;
            }

            nextNode = res.childNodes[i + 1];
          }
        }
      }

      var findout = /jumpurl\('(\w+)','?(\d+)'?\)/.exec(nextNode.innerHTML);

      if (findout === null || findout.length != 3) {
        return undefined;
      }

      var pageInfo = findout[1] + "=" + findout[2];

      if (cplink.indexOf(findout[1] + "=") != -1) {
        return cplink.replace(new RegExp(findout[1] + "=\\d+"), pageInfo);
      } else if (cplink.indexOf("?") != -1) {
        return cplink + "&" + pageInfo;
      } else {
        return cplink + "?" + pageInfo;
      }
    },
    autopager: {
      pageElement: '//table[contains(@class, "shudanlist")] | //ul[contains(@class, "ys-comments")] | //div[@class="ro"]'
    }
  }, {
    name: "动漫之家漫画网",
    url: /^https?:\/\/(www|manhua)\.(dmzj|178)\.com\/\w+\/\d+\.shtml/,
    exampleUrl: "https://manhua.dmzj.com/yuanlian/36944.shtml#@page=1",
    nextLink: function nextLink(doc, win, cplink) {
      var current = Number(getElementByXpath('//*[@id="page_select"]/option[@selected][1]', doc).text.match(/(\d+)/)[1]);
      var xpath_last = '//*[@id="page_select"]/option[last()]';
      var end_num = Number(getElementByXpath(xpath_last, doc).text.match(/(\d+)/)[1]);
      var next = current + 1;

      if (next > end_num) {
        return undefined;
      } else {
        return cplink.replace(/\.shtml(?:#@page=\d+)?/, ".shtml#@page=" + next);
      }
    },
    autopager: {
      useiframe: true,
      reload: true,
      // do not create new iframe but reload
      ipages: [true, 20],
      pageElement: '//div[@id="center_box"]/img'
    }
  }, {
    name: "看漫画",
    url: /^https?:\/\/www\.manhuagui\.com\/comic\/.+/i,
    // this is a set which uses hash to change page
    // we need to manually add hash
    nextLink: function nextLink(doc, win, cplink) {
      var current = Number(getElementByXpath('//*[@id="page"]', doc).innerHTML);
      var xpath_last = '//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]';
      var end_num = Number(getElementByXpath(xpath_last, doc).text);
      var next = current + 1;

      if (next > end_num) {
        return undefined;
      } else {
        return cplink.replace(/\.html(?:#p=\d+)?/, ".html#p=" + next);
      }
    },
    autopager: {
      useiframe: true,
      newIframe: false,
      reload: true,
      // do not create new iframe but reload
      pageElement: '//div[@class="clearfix"]',
      ipages: [true, 20]
    },
    exampleUrl: "https://www.manhuagui.com/comic/17332/372862.html"
  }, {
    name: "SF在线漫画",
    url: "^https?://(manhua\\.sfacg\\.com/mh|www\\.acg456\\.com)/.+",
    exampleUrl: "https://manhua.sfacg.com/mh/YULINGSHI/20087/#p=2",
    preLink: {
      startAfter: "#p=",
      inc: -1,
      min: 1
    },
    nextLink: {
      startAfter: "#p=",
      mFails: [/^https?:\/\/(?:manhua\.sfacg\.com\/mh|www\.acg456\.com)\/.+/i, "#p=1"],
      inc: 1,
      isLast: function isLast(doc, win, lhref) {
        var TotalPage = Number(doc.getElementById("TotalPage").innerText) - 1;
        var CurrentPage = Number(doc.getElementById("CurrentPage").innerText);

        if (CurrentPage == TotalPage) {
          return true;
        }
      }
    },
    autopager: {
      pageElement: '//img[@id="curPic"]',
      useiframe: true,
      reload: true,
      replaceE: 'id("Pages")'
    }
  }, {
    name: "哦漫画",
    url: /^https?:\/\/www\.omanhua\.com\/comic\//i,
    exampleUrl: "http://www.omanhua.com/comic/2957/36463/index.html?p=2",
    nextLink: {
      startAfter: "?p=",
      mFails: [/^http:\/\/www\.omanhua\.com\/comic\/.+/i, "?p=1"],
      inc: 1,
      isLast: function isLast(doc, win, lhref) {
        var select = doc.getElementById("pageSelect");

        if (select) {
          var s2os = select.options;
          var s2osl = s2os.length;
          if (select.selectedIndex == s2osl - 1) return true;
        }
      }
    },
    autopager: {
      useiframe: true,
      pageElement: '//img[@id="mangaFile"]'
    }
  }, {
    name: "汗汗漫画",
    url: /^https?:\/\/\w+\.(?:vs20|3gmanhua|hhcomic|huhudm|huhumh|hhimm|hhmmoo)\.(?:com|net)\/\w+\/\d+\.html/i,
    exampleUrl: "http://www.hhmmoo.com/page315224/1.html?s=1； http://www.hhmmoo.com/page315224/4.html?s=1&d=0",
    nextLink: function nextLink(doc, win, cplink) {
      // created based on http://www.hhmmoo.com/script/view.js
      var m = cplink.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/);
      var url_head = m[1];
      var current = Number(m[2]);
      var dID = m[4];
      if (!dID) dID = "&d=0";
      var next = current + 1;
      var xpath = '//div[@class="cH1"]/b[1]';
      var maxpage = document.getElementById("hdPageCount");

      if (maxpage) {
        maxpage = Number(maxpage.value);
      } else {
        maxpage = document.getElementById("spPageCount");

        if (maxpage) {
          maxpage = Number(maxpage.innerText);
        } else {
          return undefined;
        }
      }

      if (next == maxpage + 1) {
        return undefined;
      } else {
        return m[1] + next + m[3] + dID;
      }
    },
    autopager: {
      useiframe: true,
      pageElement: '//div[@id="iBody"]',
      ipages: [true, 20]
    }
  }, {
    name: "99漫画",
    url: /^https?:\/\/(cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(com|cc)/i,
    exampleUrl: "http://dm.99manga.com/comic/35416/316645/?p=2&s=0",
    nextLink: {
      startAfter: "?p=",
      inc: 1,
      mFails: [/^https?:\/\/(?:cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(?:com|cc)\/.+/i, "?p=1&s=0"],
      isLast: function isLast(doc, win, lhref) {
        var maxpage = Number(doc.getElementById("spPageCount").innerText);
        var current = Number(doc.getElementById("spPageIndex").innerText);
        if (current == maxpage) return true;
      }
    },
    autopager: {
      useiframe: true,
      pageElement: '//*[@id="iBody"]'
    }
  }, {
    name: "天使漫画网,TSDM漫画组",
    url: /^https?:\/\/mh\.tsdm\.net\/comic\/.+/i,
    exampleUrl: "http://mh.tsdm.net/comic/4697/68059.html",
    useiframe: true,
    preLink: {
      startAfter: "?p=",
      inc: -1,
      min: 1
    },
    nextLink: {
      startAfter: "?p=",
      mFails: [/^http:\/\/mh\.tsdm\.net\/comic\/.+\.html/i, "?p=1"],
      inc: 1,
      isLast: function isLast(doc, win, lhref) {
        var pageSelect = doc.getElementById("qTcms_select_i");

        if (pageSelect) {
          var s2os = pageSelect.options;
          var s2osl = s2os.length; // alert(s2.selectedIndex);

          if (pageSelect.selectedIndex == s2osl - 1) return true;
        }
      }
    },
    autopager: {
      useiframe: true,
      remain: 1 / 2,
      pageElement: '//img[@id="qTcms_pic"]',
      ipages: [true, 20]
    }
  }, {
    name: "930mh",
    url: /^https?:\/\/www\.930mh\.com\/manhua\/.+/i,
    exampleUrl: "http://www.930mh.com/manhua/13355/500671.html?p=2",
    preLink: {
      startAfter: "?p=",
      inc: -1,
      min: 1
    },
    nextLink: {
      startAfter: "?p=",
      mFails: [/^https?:\/\/www\.930mh\.com\/manhua\/.+\.html/i, "?p=1"],
      inc: 1,
      isLast: function isLast(doc, win, lhref) {
        var index = doc.getElementById("images").children[1].innerText;
        var nums = index.match(/\d+/g);

        if (Number(nums[0]) >= Number(nums[1])) {
          return true;
        }
      }
    },
    autopager: {
      pageElement: '//div[@id="images"]/img',
      useiframe: true,
      ipages: [true, 20]
    }
  }, {
    name: "sis001.com",
    url: /^https?:\/\/(\w+\.)?sis001\.com\/forum\/(forum|thread)[0-9\-]+\.html/i,
    exampleUrl: "https://www.sis001.com/forum/forum-230-1.html",
    nextLink: '//div[@class="pages_btns"]//a[@class="next"]',
    autopager: {
      pageElement: '//div[@class="mainbox"]//table[last()]',
      replaceE: '//div[@class="pages_btns"]',
      startFilter: function startFilter(doc, win) {
        var firstDiv = doc.querySelector("#ad_text");

        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  }, {
    name: "xkcd",
    url: "^https?://(?:www.)?xkcd.com",
    nextLink: function nextLink(doc, win, cplink) {
      var m = cplink.match(/\d+/);

      if (!m) {
        return cplink + "/2/";
      } else {
        var url = doc.querySelector("a[rel=next]").getAttribute("href");
        url = "https://www.xkcd.com/" + url;
        return url;
      }
    },
    pageElement: 'id("middleContainer")'
  }]; //  ///////// ----- End of Rules for specific sites -------///////////
  // 统配规则..用来灭掉一些DZ.或者phpwind论坛系统..此组规则..优先级自动降为最低..

  var SITEINFO_TP = [{
    name: "Discuz 论坛 - 搜索",
    url: "^https?://bbs\\.[a-z]+\\.cn/search\\.php\\?mod=forum",
    preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
    nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
    autopager: {
      pageElement: '//div[@id="threadlist"]',
      replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
    }
  }, {
    name: "Discuz 论坛 - 导读",
    url: /^https?:\/\/(?:bbs|u)\.[^\/]+\/(?:forum\.php\?mod=guide|home\.php\?mod=space)/i,
    preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
    nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
    autopager: {
      pageElement: "//div[@id='postlist'] | //form[@method='post'][@name] | //div[@id='threadlist']/div[@class='bm_c'] | //div[@class='xld xlda']",
      replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
    }
  }, {
    name: "Discuz论坛列表",
    url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:forum)|(?:showforum)|(?:viewforum)|(?:forumdisplay))+/i,
    preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
    nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/a[@class="p_curpage"]/following-sibling::a[@class="p_num"]',
    autopager: {
      pageElement: '//form[@method="post"][@name] | //div[@id="postlist"] | //div[@id="threadlist"]',
      replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
      lazyImgSrc: "file|pagespeed_lsc_url"
    }
  }, {
    name: "Discuz论坛帖子",
    url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:thread)|(?:viewthread)|(?:showtopic)|(?:viewtopic))+/i,
    preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
    nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/descendant::a[text()="??"]',
    autopager: {
      pageElement: '//div[@id="postlist"] | //form[@method="post"][@name]',
      replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
      lazyImgSrc: "zoomfile",
      stylish: '.mbbs_code{font-family:Monaco,Consolas,"Lucida Console","Courier New",serif;font-size:12px;line-height:1.8em;list-style-type:decimal-leading-zero;padding-left:10px;background:none repeat scroll 0 0 #f7f7f7;color:#666;border:1px solid #ccc;overflow:hidden;padding:10px 0 5px 10px}',
      filter: function filter(pages) {
        // 回复后插入到最后一页
        var replays = document.querySelectorAll("#postlistreply");

        if (replays.length > 1) {
          var first = replays[0];
          first.parentNode.removeChild(first);
        } // 在卡饭论坛如果不存在，会提示，所以默认禁用
        // var SyntaxHighlighter = unsafeWindow.SyntaxHighlighter;
        // if (SyntaxHighlighter && SyntaxHighlighter.highlight) {
        //     SyntaxHighlighter.highlight();
        // }

      },
      documentFilter: function documentFilter(doc) {
        // 卡饭论坛的下一页代码区域可能无法着色，所以手动修改并添加样式
        var pres = doc.querySelectorAll('pre[class^="brush:"]');
        [].forEach.call(pres, function (pre) {
          pre.classList.add("mbbs_code");
        });
      }
    }
  }, {
    name: "phpWind论坛列表",
    url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?thread/i,
    preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
    nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
    autopager: {
      pageElement: '//div[@class="t z"] | //div[@class="z"] | //div[@id="ajaxtable"]'
    }
  }, {
    name: "phpWind论坛帖子",
    url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?read/i,
    preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
    nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
    autopager: {
      pageElement: '//div[@class="t5"] | //div[@class="read_t"] | //div[@id="pw_content"]'
    }
  }, {
    name: "phpBB列表",
    url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewforum/i,
    exampleUrl: "http://www.firefox.net.cn/forum/viewforum.php?f=4",
    nextLink: "auto;",
    autopager: {
      pageElement: '(//div[@id="page-body"]/div[@class="forumbg"]|//table[@class="forumline"]|//table[@class="tablebg"])',
      // replaceE:'//fildset[@class="display-options")]',
      remain: 1 / 3
    }
  }, {
    name: "phpBB帖子",
    url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewtopic/i,
    exampleUrl: "http://www.firefox.net.cn/forum/viewtopic.php?t=34339",
    nextLink: "auto;",
    autopager: {
      // pageElement:'//div[@id="page-body"]',
      pageElement: '(//div[@id="page-body"]/div[contains(@class,"post")]|//table[@class="forumline"]|//table[@class="tablebg"])' // replaceE:"//fildset[@class='display-options']",

    }
  }, {
    name: "phpBB Search",
    url: /^https?:\/\/forum\.[^\/]+\/search\.php/i,
    exampleUrl: "http://forum.everedit.net/search.php?keywords=%E5%A4%A7%E7%BA%B2",
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("page-body")/div[starts-with(@class, "search post")]',
      replaceE: 'id("page-body")/ul[@class="linklist"]'
    }
  }]; // 兼容 oautopager的规则放在这里,此规则组..优先级最低(比统配规则还低)..
  // 所以说尽量不要放规则在这个组里面.

  var SITEINFO_comp = [{
    name: "discuz论坛通用搜索",
    url: "^https?://[^/]+/f/(?:discuz|search)",
    nextLink: "auto;",
    pageElement: 'id("result-items")'
  }, {
    name: "View forum - 通用",
    url: "^https?://.+?/viewforum\\.php\\?",
    nextLink: '//span[@class="gensmall"]/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class="nav"])[last()]/b[last()]/following-sibling::a[1]  | //div[@class="pagination"]/span/strong/following-sibling::a[1] | //a[text()="Next"]',
    pageElement: '//ul[contains(concat(" ",@class," ")," topics ")]|//form[table/@class="forumline"]'
  }, {
    name: "wiki 通用",
    url: ".\\?(?:.+&)?search=",
    nextLink: '//a[@class="mw-nextlink"]',
    pageElement: '//ul[@class="mw-search-results"]'
  }, {
    name: "通用 Forum 规则1",
    url: "^https?://.*((showthread\\.php\\?)|(forum|thread))",
    nextLink: '//a[@rel="next"]',
    pageElement: '//div[@id="posts"]|//ol[@id="posts"]/li',
    separatorReal: false
  }, {
    name: "通用 Forum 规则2 vBulletin threads",
    url: "^https?://[^?#]+?/showthread\\.php\\?",
    nextLink: '//tr[@valign="top"]//div[@class="pagenav"]//a[contains(text(), ">")]',
    pageElement: '(//div[@class="pagenav"])[1]|//div[@id="posts"]/node()',
    separatorReal: false
  }, {
    name: "通用 Forum 规则3 vBulletin thread_list",
    url: "^https?://.*((forumdisplay\\.php\\?)|forum)",
    nextLink: "auto;",
    pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"]',
    separatorReal: false
  }, {
    name: "通用 Forum 规则4",
    url: /^https?:\/\/forums\..*\/threads/i,
    nextLink: '(//div[@class="PageNav"])[1]//a[contains(text(),' > ")]",
    pageElement: '//ol[@id="messageList"]/li',
    separatorReal: false
  }, {
    name: "PHPWind 5.3.0 / 6.0.0 / 6.3.2 / 7.0.0 / 7.5.0 - View Thread",
    url: "^https?://.+/read\\.php\\?.*tid((=[0-9]+.*)|(-[0-9]+.*\\.html?))$",
    nextLink: "auto;",
    pageElement: '//form[@name="delatc"]',
    exampleUrl: "http://www.yydzh.com/read.php?tid=1584013"
  }, {
    name: "Typecho",
    url: "^https?://",
    nextLink: "//ol[@class='page-navigator']/li[@class='next']/a",
    autopager: {
      pageElement: function pageElement(doc, win, _cplink) {
        var gen = getElementByXpath("//head/meta[@name='generator']", doc, doc);

        if (!gen || !gen.content.includes("Typecho") || !doc.documentElement.outerHTML.includes("Typecho")) {
          return null;
        }

        try {
          return getAllElementsByXpath("//article[@class='post'] | //div[@class='blog-post']", doc, doc);
        } catch (error) {
          return null;
        }
      },
      relatedObj: true
    }
  }, {
    name: "WordPress",
    url: "^https?://[^/]+(/page/\\d+)?",
    nextLink: function nextLink(doc, win, _cplink) {
      var cplink = _cplink.replace(/^(.*)(#[^\/]*)?$/, "$1");

      if (cplink.slice(cplink.length - 5, cplink.length) === ".html") {
        return undefined;
      }

      if (cplink.slice(cplink.length - 4, cplink.length) === ".htm") {
        return undefined;
      }

      var a = /^(https?:\/\/.*?)(\/page\/\d+\/?)?$/.exec(cplink);

      if (a[2]) {
        var b = Number(/\/page\/(\d+)/.exec(a[2])[1]) + 1;
        return cplink.replace(/^(https?:\/\/.*?\/page\/)\d+(.*)$/, "$1" + String(b) + "$2");
      } else {
        return cplink.replace(/^(.*?)\/?$/, "$1") + "/page/2";
      }
    },
    autopager: {
      pageElement: function pageElement(doc, win, _cplink) {
        var blackList = [/^https?:\/\/bwg\.net\/?$/, /^https?:\/\/sunbox\.cc\/?$/, /^https?:\/\/anime1\.me/, /^https?:\/\/github\.com/];

        for (var i = 0; i < blackList.length; i++) {
          if (blackList[i].test(_cplink)) {
            return null;
          }
        } // detect if this is wordpress


        var wpText = ["wp-content", "wp-plugin", "wp-comment"];
        var isWP = false;

        for (i = 0; i < wpText.length; i++) {
          if (doc.documentElement.outerHTML.indexOf(wpText[i]) > -1) {
            isWP = true;
            break;
          }
        }

        if (!isWP) {
          return null;
        } // if this is the page of an article, return null


        var submitComment = ["发表评论", "提交评论", "添加留言", "提交留言", "コメントを送信", "SUBMIT COMMENT", "POST COMMENT", "Submit Comment", "Post comment", "Post Comment"];

        for (i = 0; i < submitComment.length; i++) {
          if (getElementByXpath("//input[@value='" + submitComment[i] + "']", doc, doc)) {
            return null;
          }

          if (getElementByXpath("//a[text()='" + submitComment[i] + "']", doc, doc)) {
            return null;
          }
        }

        var postXpath = ["//button[@id='submit']", "//div[@class='single-post-box']", "//div[@class='single_post']"];

        for (i = 0; i < postXpath.length; i++) {
          if (getElementByXpath(postXpath[i], doc, doc)) {
            return null;
          }
        } // get from latest post
        // example https://next.365cent.com/ v5.1.1


        var posts = getAllElements("//div[contains(@class,'main')]//article[starts-with(@id,'post-')]", doc, doc, win);

        if (posts.length > 0) {
          return posts;
        }

        posts = getAllElements("//article[starts-with(@id,'post-')]", doc, doc, win);

        if (posts.length > 0) {
          return posts;
        }

        posts = getAllElements("//*[contains(@class,'container')]//article|//*[contains(@class,'container')]//div[contains(@class,'article-post')]", doc, doc, win);

        if (posts.length > 0) {
          return posts;
        } //https://www.portablesoft.org/


        posts = getAllElements("//div[@id='main']/div[@class='post-entry']", doc, doc, win);

        if (posts.length > 0) {
          return posts;
        }

        posts = getAllElements("//*[contains(@class,'container')]//div[substring(@class,string-length(@class) -string-length('post')+1)='post']", doc, doc, win);
        return posts;
      },
      relatedObj: true
    }
  }, {
    name: "Generic Posts Rule created by swdyh",
    exampleUrl: "http://wedata.net/items/400.json",
    url: "^https?://.+",
    pageElement: "(//article[not(contains(../@class,'widget'))][not(contains(@class,'columns four'))][not(ancestor::*[starts-with(@class,'sidebar')])]|//*[starts-with(@id,'post-')][not(contains(@id,'post-rating'))])[not(.//*[contains(@class,'admz')])][not(id('load-more-posts') or @id='fpost' or contains(@class,'carousel'))][parent::node()[not(self::h2)][not(@id='side')][not(contains(@class,'thumbnail'))][not(following-sibling::*[not(@id='side')][article or *[starts-with(@id,'post-')]])]/*[self::article or starts-with(@id,'post-')]/following-sibling::*[self::article or starts-with(@id,'post-')][not(contains(@id,'nav'))]]|id('content')[count(div)>1]/div[contains(@class,'post')][not(contains(div/@class,'breadcrumb'))][not(contains(div/@class,'nav'))]",
    nextLink: "(//*[not(contains(@class,'_inactive'))]/a[starts-with(@class,'nextpostslink') or contains(@class,'next page-numbers') or (.|..)[normalize-space(@rel)='next' or normalize-space(@class)='next' or contains(@class,'pagination-next')]][not(span/@class='link-text')]|//*[contains(@class,'nav-previous')][not(contains(@class,'pull'))]/a|(//*[contains(@class,'current')][number()>0]/following-sibling::a[1]|(//li|//span|//div)[(.//*|.)[contains(@class,'current')]][number()>0]/following-sibling::*[self::li or self::span or self::div][1]/a))[not(starts-with(@href, '#'))]",
    autopager: {
      stylish: '@-moz-document domain("wotopi.jp") { .figure-list{display:flex; flex-wrap:wrap;} }'
    }
  }]; //  ///////// ----- Rules obtained from online json files -------///////////

  var SITEINFO_json = [];
  var jsonRule = {
    info: {
      expire: new Date("1992-05-15"),
      updatePeriodInDay: 1 // json rules are update everyday

    },
    rule: [[], []],
    // length should be the same as this.provider

    /**
     * import string into data
     * @param {object} jsonRuleInfo GM saved info
     * @param {object} jsonRule GM saved rules
     * @returns {void}
     */
    importData: function importData(jsonRuleInfo, jsonRule) {
      var _jsonRuleInfo = JSON.parse(jsonRuleInfo);

      this.info.expire = new Date(_jsonRuleInfo.expire);
      this.info.updatePeriodInDay = _jsonRuleInfo.updatePeriodInDay;
      this.rule = JSON.parse(jsonRule);
    },
    saveData: function saveData(withRule, updatePeriodInDay) {
      var promise = [];

      if (withRule) {
        promise.push(GM.setValue("SITEINFO_json", JSON.stringify(this.rule)));
      }

      var _updatePeriodInDay = typeof updatePeriodInDay === "undefined" ? this.info.updatePeriodInDay : updatePeriodInDay;

      var today = new Date();
      this.info.expire = new Date(today.getTime() + _updatePeriodInDay * 24 * 60 * 60 * 1000);
      promise.push(GM.setValue("jsonRuleInfo", JSON.stringify(this.info)));
      return Promise.all(promise);
    },
    exportRule: function exportRule() {
      return _.flatten(this.rule);
    },
    provider: [{
      name: "machsix.github.io",
      url: ["https://machsix.github.io/Super-preloader/mydata.json", "https://cdn.jsdelivr.net/gh/machsix/Super-preloader/dist/mydata.json"],
      detailUrl: "https://machsix.github.io/Super-preloader/mydata_detail.json",
      ruleParser: function ruleParser(responseText) {
        return JSON.parse(responseText);
      }
    }, {
      name: "wedata.net",
      url: ["http://wedata.net/databases/AutoPagerize/items.json", "https://super-preloader.netlify.com/wedata.json"],
      detailUrl: "http://wedata.net/databases/AutoPagerize.json",
      ruleParser: function ruleParser(responseText) {
        return JSON.parse(responseText).filter(function (i) {
          var nameFilter = ["Generic Posts Rule", "hAtom"];

          for (var j = 0; j < nameFilter.length; j++) {
            if (nameFilter[j].indexOf(i.name) >= 0) {
              return false;
            }
          }

          return true;
        }).map(function (i) {
          i.data.name = i.name;
          i.data.source = "wedata.net";
          return i.data;
        });
      }
    }],

    /**
     * Download rule from provider[i]
     * @param {number} i provider[i]
     * @returns {promise} the downloaded rule
     */
    downloadRule: function downloadRule(i) {
      var createRequest = function (iurl) {
        return new Promise(function (resolve, reject) {
          axios.get(this.provider[i].url[iurl], {
            nocache: true
          }).then(function (res) {
            try {
              var rule = this.provider[i].ruleParser(res.responseText);
              logger.warn(`[UpdateRule] ${this.provider[i].name} [Status] Success`);
              resolve(rule);
            } catch (error) {
              logger.error(`[UpdateRule] ${this.provider[i].name} [Status] Fail to parse`);
              reject(error);
            }
          }.bind(this)).catch(function (error) {
            if (iurl < this.provider[i].url.length) {
              return createRequest(iurl + 1);
            } else {
              logger.error(`[Update Rule] ${this.provider[i].name} [Status] Fail to download`);
              reject(error);
            }
          }.bind(this));
        }.bind(this));
      }.bind(this);

      return createRequest(0);
    },

    /**
     * update rule for a specific index
     * @param {number} i index of provider
     * @param {boolean} force whether to forcely update
     * @param {Object} lastUpdate override this.data.expire
     * @returns {void}
     */
    updateRule: function updateRule(i, force, lastUpdate) {
      // update rule[i] if we don't have rule for it
      var _force = typeof force !== "undefined" ? this.rule[i].length < 1 || force : this.rule[i].length < 1 || false;

      var _lastUpdate = typeof lastUpdate !== "undefined" ? lastUpdate : this.info.expire;

      return new Promise(function (resolve, reject) {
        axios.get(this.provider[i].detailUrl, {
          nocache: true
        }).then(function (res) {
          var detail = res.data;
          var ruleLastUpdate = new Date(detail.updated_at);

          if (_force || ruleLastUpdate > _lastUpdate || this.rule[i].length === 0) {
            // download rule for:
            // 1. forced update
            // 2. rule is updated
            // 3. rule is empty
            this.downloadRule(i).then(function (rule) {
              resolve(rule);
            }).catch(function (error) {
              reject(error);
            });
          } else {
            logger.log(`[UpdateRule] ${this.provider[i].name} [Status] No need to update`);
            resolve(this.rule[i]);
          }
        }.bind(this)).catch(function (error) {
          logger.error(`[UpdateRule] ${this.provider[i].name} [Status] Fail to fetch detail`);
          reject(error);
        }.bind(this));
      }.bind(this));
    },

    /**
     * update all rules
     * @param {force} force force update rule
     * @return {promise/val} the resolved rules
     */
    updateAllRules: function updateAllRules(force) {
      var _force = this.rule.length !== this.provider.length ? true : !!force;

      var today = new Date();

      if (_force || today > this.info.expire) {
        var reflect = function reflect(promise) {
          return promise.then(function (v) {
            return {
              v: v,
              status: "resolved"
            };
          }, function (e) {
            return {
              e: e,
              status: "rejected"
            };
          });
        }; // update rule if we have mismatched rule and provider


        return Promise.all(this.provider.map(function (val, i) {
          return reflect(this.updateRule(i, _force));
        }.bind(this))).then(function (v) {
          var s = true;
          this.rule = v.map(function (val, index) {
            if (val.status === "resolved") {
              return val.v;
            } else {
              s = false;
              return [];
            }
          });

          if (s) {
            // although it returns a promise, we don't need to wait for it
            this.saveData(true);
          } else {
            this.saveData(true, -1);
          }

          return Promise.resolve(this.exportRule());
        }.bind(this));
      } else {
        this.saveData(false);
        logger.debug("[Rule] Next update at:" + this.info.expire.toISOString());
        return Promise.resolve(this.exportRule());
      }
    }
  }; //  ///////// ----- End of Rules obtained from online json files -------///////////
  // 分页导航的6个图标以及颜色设置:

  var sep_icons = {
    top: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==",
    bottom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==",
    pre: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==",
    next: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC",
    next_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==",
    pre_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC",
    text_span_style: "color:#595959!important;"
  }; // 悬浮窗的状态颜色.

  var FWKG_color = {
    loading: "#8B00E8",
    // 读取中状态
    prefetcher: "#5564AF",
    // 预读状态
    autopager: "#038B00",
    // 翻页状态
    Apause: "#B7B700",
    // 翻页状态(暂停).
    Astop: "#A00000",
    // 翻页状态(停止)(翻页完成,或者被异常停止.)(无法再开启)
    dot: "#00FF05" // 读取完后,会显示一个小点,那么小点的颜色.

  }; // 当没有找到规则的时候,进入自动搜索模式.
  // 在没有高级规则的网站上.的一些设置..
  // (Default settings)

  var autoMatch = {
    keyMatch: true,
    // 是否启用关键字匹配
    cases: false,
    // 关键字区分大小写....
    digitalCheck: true,
    // 对数字连接进行检测,从中找出下一页的链接
    pfwordl: {
      // 关键字前面的字符限定.
      previous: {
        // 上一页关键字前面的字符,例如 "上一页" 要匹配 "[上一页" ,那么prefix要的设置要不小于1,并且character要包含字符 "["
        enable: true,
        maxPrefix: 3,
        character: [" ", "　", "[", "［", "<", "＜", "?", "?", "<<", "『", "「", "【", "(", "←"]
      },
      next: {
        // 下一页关键字前面的字符
        enable: true,
        maxPrefix: 2,
        character: [" ", "　", "[", "［", "『", "「", "【", "("]
      }
    },
    sfwordl: {
      // 关键字后面的字符限定.
      previous: {
        // 上一页关键字后面的字符
        enable: true,
        maxSubfix: 2,
        character: [" ", "　", "]", "］", "』", "」", "】", ")"]
      },
      next: {
        // 下一页关键字后面的字符
        enable: true,
        maxSubfix: 3,
        character: [" ", "　", "]", "］", ">", "﹥", "?", "?", ">>", "』", "」", "】", ")", "→"]
      }
    },
    useiframe: SITEINFO_D.useiframe || false,
    // (预读)是否使用iframe..
    viewcontent: false,
    // 查看预读的内容,显示在页面的最下方.
    FA: {
      // 强制拼接 选项 功能设置.
      enable: false,
      // 默认启用 强制拼接
      manualA: false,
      // 手动翻页.
      useiframe: false,
      // (翻页)是否使用iframe..
      iloaded: false,
      // (只在opera有效)如果使用iframe翻页..是否在iframe完全load后操作..否则在DOM完成后操作
      itimeout: 0,
      // 当使用iframe翻页时在完成后继续等待多少ms后,在操作..
      remain: 1,
      // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
      maxpage: 99,
      // 最多翻多少页..
      ipages: [false, 2],
      // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
      separator: true // 显示翻页导航..(推荐显示.)..

    }
  }; // 上一页关键字

  var prePageKey = ["上一页", "上一頁", "上1页", "上1頁", "上页", "上頁", "翻上頁", "翻上页", "上一张", "上一張", "上一幅", "上一章", "上一节", "上一節", "上一篇", "前一页", "前一頁", "后退", "後退", "上篇", "previous", "previous Page", "前へ", "前のページ"]; // 下一页关键字

  var nextPageKey = ["下一页", "下一頁", "下1页", "下1頁", "下页", "下页 ›", "下頁", "翻页", "翻頁", "翻下頁", "翻下页", "下一张", "下一張", "下一幅", "下一章", "下一节", "下一節", "下一篇", "前进", "下篇", "后页", "往后", "Next", "Next Page", "次へ", "次のページ", "次のページ »", "下一页 →", "下一頁 →", "下1页 →", "下1頁 →", "下页 →", "下頁 →", "翻页 →", "翻頁 →", "翻下頁 →", "翻下页 →", "下一张 →", "下一張 →", "下一幅 →", "下一章 →", "下一节 →", "下一節 →", "下一篇 →", "前进 →", "下篇 →", "后页 →", "往后 →", "Next →", "Next Page →", "次へ →", "次のページ →", "下一页 »", "下一頁 »", "下1页 »", "下1頁 »", "下页 »", "下頁 »", "翻页 »", "翻頁 »", "翻下頁 »", "翻下页 »", "下一张 »", "下一張 »", "下一幅 »", "下一章 »", "下一节 »", "下一節 »", "下一篇 »", "前进 »", "下篇 »", "后页 »", "往后 »", "Next »", "Next Page »", "次へ »", "次のページ »", "后一页", "後一頁", "下一页 ›", "下一頁 ›", "下1页 ›", "下1頁 ›", "下页 ›", "下頁 ›", "翻页 ›", "翻頁 ›", "翻下頁 ›", "翻下页 ›", "下一张 ›", "下一張 ›", "下一幅 ›", "下一章 ›", "下一节 ›", "下一節 ›", "下一篇 ›", "前进 ›", "下篇 ›", "后页 ›", "往后 ›", "Next ›", "Next >", "Next Page ›", "次へ ›", "次のページ ›", "»", "→", "Next >"]; // THX to https://greasyfork.org/en/forum/discussion/39361/x
  // 出在自动翻页信息附加显示真实相对页面信息，一般能智能识别出来。如果还有站点不能识别，可以把地址的特征字符串加到下面
  // 最好不要乱加，一些不规律的站点显示出来的数字也没有意义

  var REALPAGE_SITE_PATTERN = ["search?", "search_", "forum", "thread"]; // ------------------------下面的不要管他-----------------
  /// ////////////////////////////////////////////////////////////////

  Promise.all([GM.getValue("prefs", JSON.stringify(prefsFactory)), GM.getValue("SITEINFO_D", JSON.stringify(SITEINFO_D)), GM.getValue("autoMatch", JSON.stringify(autoMatch)), GM.getValue("jsonRuleInfo", JSON.stringify(jsonRule.info)), GM.getValue("SITEINFO_json", JSON.stringify(jsonRule.rule)), GM.getValue("version", "1.0.00")]).then(function (values) {
    // retrieve settings
    prefs = JSON.parse(values[0]);
    SITEINFO_D = JSON.parse(values[1]);
    autoMatch = JSON.parse(values[2]); // import jsonRule to its handler

    jsonRule.importData(values[3], values[4]);
    SITEINFO_json = jsonRule.exportRule(); // check the consistency of script settings

    var myVersion = values[5];

    if (versionCompare(myVersion, scriptInfo.version) < 0) {
      // update rule if the script is upgraded or it is installed for the first time
      if (upgradeNotification) {
        if (upgradeNotification.show(myVersion)) {
          if (i8n() === "zh_CN") {
            var text = "脚本从 v" + myVersion + " 升级到 v" + scriptInfo.version + "。 "; // eslint-disable-next-line no-undef

            GM_notification(text + upgradeNotification.text.zh_CN, upgradeNotification.title, upgradeNotification.image, upgradeNotification.onload);
          } else {
            var _text = "Script is upgraded from v" + myVersion + " to v" + scriptInfo.version + ". "; // eslint-disable-next-line no-undef


            GM_notification(_text + upgradeNotification.text.en_US, upgradeNotification.title, upgradeNotification.image, upgradeNotification.onload);
          }
        }
      }

      jsonRule.info.expire = new Date("1992-05-15");
      GM.setValue("version", scriptInfo.version);
      prefs.factoryCheck = true;
    } else if (versionCompare(myVersion, scriptInfo.version) > 0) {
      // downgrade
      GM.setValue("version", scriptInfo.version);
    }

    if (prefs.factoryCheck === true || prefs.factoryCheck === undefined) {
      var hasMissing = assignMissingProperty(prefsFactory, prefs);

      if (hasMissing) {
        logger.debug("Old prefs:", prefs);
      }

      prefs.factoryCheck = false;
      GM.setValue("prefs", JSON.stringify(prefs));
    }

    logger.enableDebug(prefs.debug || false); // 黑名单,网站正则..

    var blackList = [// 例子
      // 'http://*.douban.com/*',
    ];
    blackList = blackList.concat(prefs.excludes.split(/[\n\r]+/).map(function (line) {
      return line.trim();
    }));

    var setup = function setup() {
      var d = document;

      var $ = function $(s) {
        return d.getElementById("sp-prefs-" + s);
      };

      if ($("setup")) return;
      var styleNode = GME.addStyle('\
        #sp-prefs-setup { position:fixed;z-index:2147483647;top:30px;right:60px;padding:20px 30px;box-sizing:content-box;\
                          border-radius: 3px!important;border: 1px solid #A0A0A0!important; \
                          box-shadow: -2px 2px 5px rgba(0,0,0,0.3)!important;\
                          background: -moz-linear-gradient(top, #FCFCFC, #F2F2F7 100%)!important;\
                          background: -webkit-gradient(linear, 0 0, 0 100%, from(#FCFCFC), to(#F2F2F7))!important;\
                          font-family:"Arial","sans-serif" !important; color:transparent;max-height:80%;overflow:auto; }\
        #sp-prefs-setup * { color:black;text-align:left;line-height:normal;font-size:12px; min-height: 12px}\
        #sp-prefs-setup a { color:black;text-decoration:underline; }\
        #sp-prefs-setup div { text-align:center;font-weight:bold;font-size:15px; }\
        #sp-prefs-setup ul { margin:15px 0 15px 0;padding:0;list-style:none;background:none;border:0;}\
        #sp-prefs-setup input, #sp-prefs-setup select { border:1px solid gray;padding:2px;background:white;margin:0px; }\
        #sp-prefs-setup li { margin:0;padding:5px 0;vertical-align:middle;background:none;border:0; font-size:12px; }\
        #sp-prefs-setup button { margin:0 10px;text-align:center;white-space: nowrap; background-color:#F9F9F9!important; \
                                 border:1px solid #ccc!important;\
                                 box-shadow:inset 0 10px 5px white!important;\
                                 border-radius:3px!important;\
                                 padding:3px 3px!important;}\
        #sp-prefs-setup textarea { width:98%; height:60px; margin:3px 0; font-weight:50; }\
        #sp-prefs-setup b { font-weight: bold; font-family: "微软雅黑", sans-serif; }\
        #sp-prefs-setup button:disabled { color: graytext; }\
        ');
      var div = d.createElement("div");
      div.id = "sp-prefs-setup";
      d.body.appendChild(div);

      if (i8n() === "zh_CN") {
        /* Deleted options
                                   <li title="下一页的链接设置成在新标签页打开"><input type="checkbox" id="sp-prefs-forceTargetWindow" checked/> 新标签打开链接</li>\
          */
        div.innerHTML = "\
                           <div>Super_preloaderPlus_one_New设置</div>\
                               <ul>\
                                   <li>脚本版本: <b>" + scriptInfo.version + " </b>   更新时间: <b>" + scriptInfo.updateTime + '</b>\
                                       <a id="sp-prefs-homepageURL" target="_blank" href="' + scriptInfo.homepageURL + '"/>脚本主页</a>\
                                       <a id="sp-prefs-homepageURL-feedback" target="_blank" href="' + scriptInfo.homepageURL + "/feedback" + '"/> 反馈规则 </a>\
                                   </li>\
                                   <li>维护者: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b>   更新日志: <b>' + scriptInfo.changelog + "</b></li>\
                                   <li>规则数目: <b>" + prefs.numOfRule + "</b> 下次更新时间: <b>" + jsonRule.info.expire.toDateString() + '</b> <button id="sp-prefs-updaterule">更新规则</button></li>\
                                   <li><input type="checkbox" id="sp-prefs-debug" /> 调试模式</li>\
                                   <li><input title="强制开启中文界面" type="checkbox" id="sp-prefs-ChineseUI" /> 中文界面</li>\
                                   <li><input type="checkbox" id="sp-prefs-enableHistory" /> 添加下一页到历史记录</li>\
                                   <li><input type="checkbox" id="sp-prefs-dblclick_pause" /> 鼠标双击暂停翻页（默认为 Ctrl + 长按左键）</li>\
                                   <li><input type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> 全局启用iframe方式\
                                   <li><input title="启用自动翻页，否则仅启用预读" type="checkbox" id="sp-prefs-SITEINFO_D-a_enable" checked/> 启用自动翻页 </li>\
                                   <li><input type="checkbox" id="sp-prefs-arrowKeyPage"/> 使用 ← → 翻页 </li>\
                                   <li><input title="强行拼接规则中没有的站点，不建议启用" type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" /> 启用强制拼接（不建议）</li>\
                                   <li>自定义排除列表：\
                                       <div><textarea id="sp-prefs-excludes" placeholder="自定义排除列表，支持通配符。\n例如：http://*.douban.com/*"></textarea></div>\
                                   </li>\
                                   <li>自定义站点规则：\
                                       <div><textarea id="sp-prefs-custom_siteinfo" placeholder="自定义站点规则"></textarea></div>\
                                   </li>\
                               </ul>\
                           <div><button id="sp-prefs-ok" style="width:100px;">确定</button><button id="sp-prefs-cancel" style="width:100px;">取消</button><button id="sp-prefs-reset" style="width:100px;">重置</button></div>';
      } else {
        div.innerHTML = "\
                           <div>Super_preloaderPlus_one_New Settings</div>\
                               <ul>\
                                   <li>Version: <b>" + scriptInfo.version + " </b>  Update time: <b> " + scriptInfo.updateTime + '</b>\
                                       <a id="sp-prefs-homepageURL" target="_blank" href="' + scriptInfo.homepageURL + '"/>Homepage</a>\
                                       <a id="sp-prefs-homepageURL-feedback" target="_blank" href="' + scriptInfo.homepageURL + "/feedback" + '"/> Feedback </a>\
                                   </li>\
                                   <li>Maintainer: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b>  Changelog: <b>' + scriptInfo.changelog + "</b></li>\
                                   <li>Number of Rules: <b>" + prefs.numOfRule + "</b> Next update: <b>" + jsonRule.info.expire.toDateString() + '</b> <button id="sp-prefs-updaterule">Update rules</button></li>\
                                   <li><input type="checkbox" id="sp-prefs-debug" /> Debug mode</li>\
                                   <li><input type="checkbox"  tile="English/Chinese UI" id="sp-prefs-ChineseUI" /> Chinese UI</li>\
                                   <li><input type="checkbox" id="sp-prefs-enableHistory" /> Add next page to history</li>\
                                   <li><input type="checkbox" id="sp-prefs-dblclick_pause" /> Double click to stop preload (Default: Ctrl + Long Left)</li>\
                                   <li><input type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> Enable iframe mode globally</li>\
                                   <li><input type="checkbox" title="Enable autopagger, otherwise only prefetcher is enabled" id="sp-prefs-SITEINFO_D-a_enable" checked/> Enable autopagger globally</li>\
                                   <li><input type="checkbox" id="sp-prefs-arrowKeyPage"/> Turn to the next page with  ← →</li>\
                                   <li><input type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" /> Mandatorily join pages if not covered by the rules</li>\
                                   <li>Custom excludes:\
                                       <div><textarea id="sp-prefs-excludes" placeholder="Customized excludes, support regex\nEx: http://*.douban.com/*"></textarea></div>\
                                   </li>\
                                   <li>Custom rules:\
                                       <div><textarea id="sp-prefs-custom_siteinfo" placeholder="Custom rules"></textarea></div>\
                                   </lhttps://greasyfork.org/en/scripts/33522-super-preloaderplus-one-newi>\
                               </ul>\
                           <div><button id="sp-prefs-ok" style="width:100px;">OK</button><button id="sp-prefs-cancel" style="width:100px;">Cancel</button><button id="sp-prefs-reset" style="width:100px;">Reset</button></div>';
      }

      div = null;

      var close = function close() {
        if (styleNode) {
          styleNode.parentNode.removeChild(styleNode);
        }

        var div = $("setup");
        div.parentNode.removeChild(div);
      };

      var on = function on(node, e, f) {
        node.addEventListener(e, f, false);
      };

      on($("ok"), "click", function () {
        prefs.ChineseUI = !!$("ChineseUI").checked; // document.getElementById('sp-fw-container').innerHTML = floatWindowUI();

        prefs.custom_siteinfo = $("custom_siteinfo").value;
        prefs.debug = !!$("debug").checked;
        logger.enableDebug(prefs.debug);
        prefs.enableHistory = !!$("enableHistory").checked;
        prefs.dblclick_pause = !!$("dblclick_pause").checked;
        prefs.excludes = $("excludes").value;
        prefs.arrowKeyPage = !!$("arrowKeyPage").checked;
        SITEINFO_D.useiframe = !!$("SITEINFO_D-useiframe").checked;
        SITEINFO_D.autopager.enable = !!$("SITEINFO_D-a_enable").checked;
        SITEINFO_D.autopager.force_enable = !!$("SITEINFO_D-a_force_enable").checked;
        autoMatch.useiframe = SITEINFO_D.useiframe;
        Promise.all([GM.setValue("prefs", JSON.stringify(prefs)), GM.setValue("SITEINFO_D", JSON.stringify(SITEINFO_D)), GM.setValue("autoMatch", JSON.stringify(autoMatch))]).then(function (values) {
          SP.loadSetting();
          close();
          location.reload();
        });
      });
      on($("reset"), "click", function () {
        prefs = prefsFactory;
        GM.setValue("prefs", JSON.stringify(prefs)).then(function () {
          SP.loadSetting();
          close();
          location.reload();
        });
      });
      on($("updaterule"), "click", function () {
        $("updaterule").innerHTML = "Updating...";
        jsonRule.updateAllRules(true).then(function (val) {
          SITEINFO_json = val;
          SP.loadSetting();
          close();
          location.reload();
        });
      });
      on($("cancel"), "click", close);
      $("debug").checked = logger.getLevel() === logger.levels.DEBUG;
      $("ChineseUI").checked = prefs.ChineseUI;
      $("enableHistory").checked = prefs.enableHistory; // $('forceTargetWindow').checked = prefs.forceTargetWindow;

      $("dblclick_pause").checked = prefs.dblclick_pause;
      $("SITEINFO_D-useiframe").checked = SITEINFO_D.useiframe;
      $("SITEINFO_D-a_enable").checked = SITEINFO_D.autopager.enable;
      $("arrowKeyPage").checked = prefs.arrowKeyPage; // $('SITEINFO_D-a_force_enable').checked = SITEINFO_D.autopager.force_enable;

      $("excludes").value = prefs.excludes;
      $("custom_siteinfo").value = prefs.custom_siteinfo;
    }; // main functions


    var SP = {
      spinit: function spinit() {
        if (document.body.getAttribute("name") === "MyNovelReader") {
          return;
        }

        this.loadSetting();

        if (i8n() === "zh_CN") {
          GM.registerMenuCommand("Super_preloaderPlus_one_New 设置", setup);
        } else {
          GM.registerMenuCommand("Super_preloaderPlus_one_New Settings", setup);
        } // 查找是否是页面不刷新的站点


        var locationHref = location.href;

        var hashSite = _.find(HashchangeSites, function (x) {
          return toRE(x.url).test(locationHref);
        }); // update json rule


        var p2 = jsonRule.updateAllRules();

        if (hashSite) {
          isHashchangeSite = true;
          hashchangeTimer = hashSite.timer;
          logger.debug("当前是页面不刷新的站点", hashSite);
          var p1 = new Promise(function (resolve, reject) {
            setTimeout(resolve, hashchangeTimer);
          });
          Promise.all([p1, p2]).then(function (values) {
            init(window, document);
          });
        } else {
          p2.then(function (values) {
            SITEINFO_json = values;
            init(window, document);
          });
        } // 分辨率 高度 > 宽度 的是手机


        if (window.screen.height > window.screen.width) {
          GME.addStyle("div.sp-separator { min-width:auto !important; }");
        }
      },
      loadSetting: function loadSetting() {
        var a_enable = SITEINFO_D.autopager.enable;

        if (a_enable !== undefined) {
          SITEINFO_D.autopager.enable = a_enable;
        }

        var loadDblclickPause = function loadDblclickPause(reload) {
          var dblclickPause = prefs.dblclick_pause;

          if (dblclickPause) {
            prefs.mouseA = false;
            prefs.Pbutton = [0, 0, 0];
          }

          if (reload) location.reload();
        };

        var loadCustomSiteInfo = function loadCustomSiteInfo() {
          var infos;

          try {
            infos = new Function("", "return " + prefs.custom_siteinfo)();
          } catch (e) {
            logger.error("自定义站点规则错误", prefs.custom_siteinfo);
          }

          if (_.isArray(infos)) {
            SITEINFO = infos.concat(SITEINFO);
          }
        };

        loadDblclickPause();
        loadCustomSiteInfo();
      }
    };
    logger.debug("Entrypoint");
    SP.spinit();

    function init(window, document) {
      var startTime = new Date();

      var nullFn = function nullFn() {}; // 空函数.


      var url = document.location.href.replace(/#.*$/, ""); // url 去掉hash

      var cplink = url; // 翻上来的最近的页面的url;

      var domain = document.domain; // 取得域名.

      var domain_port = url.match(/https?:\/\/([^\/]+)/)[1]; // 端口和域名,用来验证是否跨域.
      // 新加的，以示区别

      var remove = []; // 需要移除的事件
      // 悬浮窗

      var floatWO = {
        updateColor: nullFn,
        loadedIcon: nullFn,
        CmodeIcon: nullFn
      };

      function floatWindow(SSS) {
        GME.addStyle('\
                         #sp-fw-container {\
                             z-index:999999!important;\
                             text-align:left!important;\
                         }\
                         #sp-fw-container * {\
                             font-size:13px!important;\
                             color:black!important;\
                             float:none!important;\
                         }\
                         #sp-fw-main-head{\
                             position:relative!important;\
                             top:0!important;\
                             left:0!important;\
                         }\
                         #sp-fw-span-info{\
                             position:absolute!important;\
                             right:1px!important;\
                             top:0!important;\
                             font-size:10px!important;\
                             line-height:10px!important;\
                             background:none!important;\
                             font-style:italic!important;\
                             color:#5a5a5a!important;\
                             text-shadow:white 0px 1px 1px!important;\
                         }\
                         #sp-fw-container input {\
                             vertical-align:middle!important;\
                             display:inline-block!important;\
                             outline:none!important;\
                             height: auto !important;\
                             padding: 0px !important;\
                             margin-bottom: 0px !important;\
                         }\
                         #sp-fw-container input[type="number"] {\
                             width:50px!important;\
                             text-align:left!important;\
                         }\
                         #sp-fw-container input[type="checkbox"] {\
                             border:1px solid #B4B4B4!important;\
                             padding:1px!important;\
                             margin:3px!important;\
                             width:13px!important;\
                             height:13px!important;\
                             background:none!important;\
                             cursor:pointer!important;\
                             visibility: visible !important;\
                             position: static !important;\
                         }\
                         #sp-fw-container input[type="button"] {\
                             border:1px solid #ccc!important;\
                             cursor:pointer!important;\
                             background:none!important;\
                             width:auto!important;\
                             height:auto!important;\
                         }\
                         #sp-fw-container li {\
                             list-style:none!important;\
                             margin:3px 0!important;\
                             border:none!important;\
                             float:none!important;\
                         }\
                         #sp-fw-container fieldset {\
                             border:2px groove #ccc!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             padding:4px 9px 6px 9px!important;\
                             margin:2px!important;\
                             display:block!important;\
                             width:auto!important;\
                             height:auto!important;\
                         }\
                         #sp-fw-container legend {\
                             line-height: 20px !important;\
                             margin-bottom: 0px !important;\
                         }\
                         #sp-fw-container fieldset>ul {\
                             padding:0!important;\
                             margin:0!important;\
                         }\
                         #sp-fw-container ul#sp-fw-a_useiframe-extend{\
                             padding-left:40px!important;\
                         }\
                         #sp-fw-rect {\
                             position:relative!important;\
                             top:0!important;\
                             left:0!important;\
                             float:right!important;\
                             height:10px!important;\
                             width:10px!important;\
                             padding:0!important;\
                             margin:0!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             border:1px solid white!important;\
                             -webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3), 0 0 3px rgba(0,0,0,0.8)!important;\
                             -moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3), 0 0 3px rgba(0,0,0,0.8)!important;\
                             box-shadow:inset 0 5px 0 rgba(255,255,255,0.3), 0 0 3px rgba(0,0,0,0.8)!important;\
                             opacity:0.8!important;\
                         }\
                         #sp-fw-dot,\
                         #sp-fw-cur-mode {\
                             position:absolute!important;\
                             z-index:9999!important;\
                             width:5px!important;\
                             height:5px!important;\
                             padding:0!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             border:1px solid white!important;\
                             opacity:1!important;\
                             -webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3), 0px 1px 2px rgba(0,0,0,0.9)!important;\
                             -moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3), 0px 1px 2px rgba(0,0,0,0.9)!important;\
                             box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3), 0px 1px 2px rgba(0,0,0,0.9)!important;\
                         }\
                         #sp-fw-dot{\
                             right:-3px!important;\
                             top:-3px!important;\
                         }\
                         #sp-fw-cur-mode{\
                             left:-3px!important;\
                             top:-3px!important;\
                             width:6px!important;\
                             height:6px!important;\
                         }\
                         #sp-fw-content{\
                             padding:0!important;\
                             margin:5px 5px 0 0!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             border:1px solid #A0A0A0!important;\
                             -webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;\
                             -moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;\
                             box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;\
                         }\
                         #sp-fw-main {\
                             padding:5px!important;\
                             border:1px solid white!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             background-color:#F2F2F7!important;\
                             background: -moz-linear-gradient(top, #FCFCFC, #F2F2F7 100%)!important;\
                             background: -webkit-gradient(linear, 0 0, 0 100%, from(#FCFCFC), to(#F2F2F7))!important;\
                         }\
                         #sp-fw-foot{\
                          position:relative!important;\
                          left:0!important;\
                          right:0!important;\
                          top: 2px!important;\
                          min-height:20px!important;\
                         }\
                         #sp-fw-container .sp-fw-spanbutton{\
                             padding:2px 3px!important;\
                             border:1px solid #ccc!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             cursor:pointer!important;\
                             background-color:#F9F9F9!important;\
                             -webkit-box-shadow:inset 0 10px 5px white!important;\
                             -moz-box-shadow:inset 0 10px 5px white!important;\
                             box-shadow:inset 0 10px 5px white!important;\
                         }\
                         #sp-fw-container #sp-fw-savebutton{\
                             position:relative!important;\
                             left: 96px!important;\
                         }');
        var div = document.createElement("div");
        div.id = "sp-fw-container";
        div.innerHTML = floatWindowUI();
        document.body.appendChild(div);

        function $(id) {
          return document.getElementById(id);
        }

        var rect = $("sp-fw-rect"); // 悬浮窗的小正方形,用颜色描述当前的状态.

        var spanel = $("sp-fw-content"); // 设置面板.

        var spanelc = {
          show: function show() {
            spanel.style.display = "block";
          },
          hide: function hide() {
            spanel.style.display = "none";
          }
        };
        var rectt1, rectt2; // 设置面板显隐

        rect.addEventListener("mouseover", function (e) {
          rectt1 = setTimeout(spanelc.show, 100);
        }, false);
        rect.addEventListener("mouseout", function (e) {
          clearTimeout(rectt1);
        }, false);
        div.addEventListener("mouseover", function (e) {
          clearTimeout(rectt2);
        }, false);
        div.addEventListener("mouseout", function (e) {
          if (e.relatedTarget && e.relatedTarget.disabled) return; // for firefox and chrome

          rectt2 = setTimeout(spanelc.hide, 288);
        }, false);
        var dot = $("sp-fw-dot"); // 载入完成后,显示的小点

        dot.style.backgroundColor = FWKG_color.dot;
        var cur_mode = $("sp-fw-cur-mode"); // 当载入状态时,用来描述当前是翻页模式,还是预读模式.

        cur_mode.style.backgroundColor = SSS.a_enable ? FWKG_color.autopager : FWKG_color.prefetcher;
        var a_enable = $("sp-fw-a_enable"); // 启用翻页模式

        var autopager_field = $("sp-fw-autopager-field"); // 翻页设置区域
        // 预读设置

        var useiframe = $("sp-fw-useiframe");
        var viewcontent = $("sp-fw-viewcontent"); // 翻页设置

        var a_useiframe = $("sp-fw-a_useiframe");
        var a_iloaded = $("sp-fw-a_iloaded");
        var a_itimeout = $("sp-fw-a_itimeout");
        var a_manualA = $("sp-fw-a_manualA");
        var a_remain = $("sp-fw-a_remain");
        var a_maxpage = $("sp-fw-a_maxpage");
        var a_separator = $("sp-fw-a_separator");
        var a_ipages_0 = $("sp-fw-a_ipages_0");
        var a_ipages_1 = $("sp-fw-a_ipages_1");
        var a_force = $("sp-fw-a_force"); // newIframe 输入框的点击

        var a_newIframe = $("sp-fw-a_newIframe");
        a_newIframe.addEventListener("click", function () {
          a_useiframe.checked = a_newIframe.checked;
        }, false);
        var a_starti = $("sp-fw-a_starti"); // 开始立即翻页

        a_starti.addEventListener("click", function (e) {
          if (e.currentTarget.disabled) return;
          var value = Number(a_ipages_1.value);

          if (isNaN(value) || value <= 0) {
            value = SSS.a_ipages[1];
            a_ipages_1.value = value;
          }

          autoPO.startipages(value);
        }, false); // 总开关

        var enable = $("sp-fw-enable");
        $("sp-fw-setup").addEventListener("click", setup, false); // 保存设置按钮.

        var savebutton = $("sp-fw-savebutton");
        savebutton.addEventListener("click", function (e) {
          var value = {
            Rurl: SSS.Rurl,
            useiframe: gl(useiframe),
            viewcontent: gl(viewcontent),
            enable: gl(enable)
          };

          function gl(obj) {
            switch (obj.type) {
              case "checkbox":
                return obj.checked;

              case "number":
                {
                  var min = obj.hasAttribute("min") ? Number(obj.min) : undefined;
                  var max = obj.hasAttribute("max") ? Number(obj.max) : undefined;
                  if (min >= Number(obj.value)) return min;
                  if (max < Number(obj.value)) return max;
                  return obj.value;
                }

              default:
                return obj.value;
            }
          }

          if (SSS.a_enable !== undefined) {
            value.a_enable = gl(a_enable);
            value.a_useiframe = gl(a_useiframe);
            value.a_newIframe = gl(a_newIframe);
            value.a_iloaded = gl(a_iloaded);
            value.a_manualA = gl(a_manualA);
            value.a_force = gl(a_force);
            var t_a_itimeout = gl(a_itimeout);
            value.a_itimeout = isNaN(t_a_itimeout) ? SSS.a_itimeout : t_a_itimeout >= 0 ? t_a_itimeout : 0;
            var t_a_remain = gl(a_remain);
            value.a_remain = isNaN(t_a_remain) ? SSS.a_remain : Number(t_a_remain);
            var t_a_maxpage = gl(a_maxpage);
            value.a_maxpage = isNaN(t_a_maxpage) ? SSS.a_maxpage : t_a_maxpage >= 1 ? t_a_maxpage : 1;
            var t_a_ipages_1 = gl(a_ipages_1);
            value.a_ipages = [gl(a_ipages_0), isNaN(t_a_ipages_1) ? SSS.a_ipages[1] : t_a_ipages_1 >= 1 ? t_a_ipages_1 : 1];
            value.a_separator = gl(a_separator);
          } // alert(xToString(value));


          SSS.savedValue[SSS.sedValueIndex] = value; // alert(xToString(SSS.savedValue));

          saveValue("spfwset", xToString(SSS.savedValue));

          if (e.shiftKey ? !prefs.FW_RAS : prefs.FW_RAS) {
            // 按住shift键,执行反向操作.
            setTimeout(function () {
              location.reload();
            }, 1);
          }
        }, false);

        function ll(obj, value) {
          if (obj.type == "checkbox") {
            obj.checked = value;
          } else {
            obj.value = value;
          }
        } // 载入翻页设置.


        if (SSS.a_enable === undefined) {
          // 未定义翻页功能.
          a_enable.disabled = true;
          autopager_field.style.display = "none";
        } else {
          ll(a_enable, SSS.a_enable);
          ll(a_useiframe, SSS.a_useiframe);
          ll(a_newIframe, SSS.a_newIframe);
          ll(a_iloaded, SSS.a_iloaded);
          ll(a_itimeout, SSS.a_itimeout);
          ll(a_manualA, SSS.a_manualA);
          ll(a_force, SSS.a_force);
          ll(a_remain, SSS.a_remain);
          ll(a_maxpage, SSS.a_maxpage);
          ll(a_separator, SSS.a_separator);
          ll(a_ipages_0, SSS.a_ipages[0]);
          ll(a_ipages_1, SSS.a_ipages[1]);
        }

        if (!SSS.a_enable) {
          // 当前不是翻页模式,禁用立即翻页按钮.
          a_starti.disabled = true;
        }

        if (!SSS.hasRule) {
          // 如果没有高级规则,那么此项不允许操作.
          a_force.disabled = true;
        } // 载入预读设置.


        ll(useiframe, SSS.useiframe);
        ll(viewcontent, SSS.viewcontent); // 总开关

        ll(enable, SSS.enable);
        var FWKG_state = {
          loading: "读取中状态",
          prefetcher: "预读状态",
          autopager: "翻页状态",
          Apause: "翻页状态(暂停)",
          Astop: "翻页状态(停止)(翻页完成,或者被异常停止)(无法再开启)",
          dot: "读取完后"
        };

        if (i8n() !== "zh_CN") {
          FWKG_state.loading = "Loading";
          FWKG_state.prefetcher = "Prefetching";
          FWKG_state.autopager = "Autopagger (Running)";
          FWKG_state.Apause = "Autopagger (Pause)";
          FWKG_state.Astop = "Autopagger (Stop)";
          FWKG_state.dot = "Finish loading";
        }

        floatWO = {
          updateColor: function updateColor(state) {
            rect.style.backgroundColor = FWKG_color[state];
            rect.setAttribute("title", FWKG_state[state]);
          },
          loadedIcon: function loadedIcon(command) {
            dot.style.display = command == "show" ? "block" : "none";
          },
          CmodeIcon: function CmodeIcon(command) {
            cur_mode.style.display = command == "show" ? "block" : "none";
          }
        };
        var vertical = parseInt(prefs.FW_offset[0], 10);
        var horiz = parseInt(prefs.FW_offset[1], 10);
        var FW_position = prefs.FW_position; // 非opera用fixed定位.

        div.style.position = "fixed";

        switch (FW_position) {
          case 1:
            div.style.top = vertical + "px";
            div.style.left = horiz + "px";
            break;

          case 2:
            div.style.top = vertical + "px";
            div.style.right = horiz + "px";
            break;

          case 3:
            div.style.bottom = vertical + "px";
            div.style.right = horiz + "px";
            break;

          case 4:
            div.style.bottom = vertical + "px";
            div.style.left = horiz + "px";
            break;

          default:
            break;
        }
      }

      function floatWindowUI() {
        var innerHTML = "";

        if (i8n() === "zh_CN") {
          innerHTML = '\
                                <div id="sp-fw-rect" style="background-color:#000;">\
                                    <div id="sp-fw-dot" style="display:none;"></div>\
                                    <div id="sp-fw-cur-mode" style="display:none;"></div>\
                                </div>\
                                <div id="sp-fw-content" style="display:none;">\
                                    <div id="sp-fw-main">\
                                        <div id="sp-fw-main-head">\
                                            <input type="checkbox" title="使用翻页模式,否则使用预读模式" id="sp-fw-a_enable" name="sp-fw-a_enable"/>使用翻页模式\
                                            <span id="sp-fw-span-info">Super_preloader</span>\
                                        </div>\
                                        <fieldset>\
                                            <legend title="预读模式的相关设置" >预读设置</legend>\
                                            <ul>\
                                                <li>\
                                                    <input type="checkbox" title="使用iframe预先载入好下一页到缓存,否则使用xhr请求下一页源码,取出所有的图片进行预读" id="sp-fw-useiframe" name="sp-fw-useiframe"/>使用iframe方式\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" title="查看预读的内容,将其显示在页面的底部,看看预读了些什么." id="sp-fw-viewcontent" name="sp-fw-viewcontent"/>查看预读的内容\
                                                </li>\
                                            </ul>\
                                        </fieldset>\
                                        <fieldset id="sp-fw-autopager-field" style="display:block;">\
                                            <legend title="自动翻页模式的相关设置">翻页设置</legend>\
                                            <ul>\
                                                <li>\
                                                    <input type="checkbox" title="使用iframe方式进行翻页,否则使用xhr方式翻页,可以解决某些网页xhr方式无法翻页的问题,如果xhr翻页正常的话,就不要勾这项吧." id="sp-fw-a_useiframe" name="sp-fw-a_useiframe"/>使用iframe方式</input>\
                                                    <input type="checkbox" title="每个下一页都用新的iframe，可以解决下一页图片或按钮点击的问题" id="sp-fw-a_newIframe" name="sp-fw-a_newIframe">新iframe</input>\
                                                    <ul id="sp-fw-a_useiframe-extend">\
                                                        <li>\
                                                            <input type="checkbox" title="等待iframe完全载入后(发生load事件),将内容取出,否则在DOM完成后,就直接取出来..(勾上后,会比较慢,但是可能会解决一些问题.)" id="sp-fw-a_iloaded" name="sp-fw-a_iloaded" />等待iframe完全载入\
                                                        </li>\
                                                        <li>\
                                                            <input type="number"  min="0" title="在可以从iframe取数据的时候,继续等待设定的ms才开始取出数据(此项为特殊网页准备,如果正常,请设置为0)" id="sp-fw-a_itimeout" name="sp-fw-a_itimeout"/>ms延时取出\
                                                        </li>\
                                                    </ul>\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA" title="不会自动拼接上来,会出现一个类似翻页导航的的图形,点击翻页(在论坛的帖子内容页面,可以考虑勾选此项,从而不影响你的回帖)"/>手动模式\
                                                </li>\
                                                <li>\
                                                     剩余<input type="number" min="0" id="sp-fw-a_remain" name="sp-fw-a_remain" title="当剩余的页面的高度是浏览器可见窗口高度的几倍开始翻页"/>倍页面高度触发\
                                                </li>\
                                                <li>\
                                                     最多翻<input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage" title="最多翻页数量,当达到这个翻页数量的时候,自动翻页停止." />页\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator" title="分割页面主要内容的导航条,可以进行页面主要内容之间的快速跳转定位等."/>显示翻页导航\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" title="将下一页的body部分内容整个拼接上来.(当需翻页的网站没有高级规则时,该项强制勾选,无法取消.)" id="sp-fw-a_force" name="sp-fw-a_force"/>强制拼接\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0" title="在JS加载后,立即连续翻后面设定的页数"/>启用 \
                                                    立即翻<input type="number" min="1" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="连续翻页的数量" />页\
                                                    <span  class="sp-fw-spanbutton"  title="现在立即开始连续翻页" id="sp-fw-a_starti">开始</span>\
                                                </li>\
                                            </ul>\
                                        </fieldset>\
                                        <div id="sp-fw-foot">\
                                         <input type="checkbox" id="sp-fw-enable" title="总开关,启用js,否则禁用." name="sp-fw-enable"/>启用\
                                         <span id="sp-fw-setup" class="sp-fw-spanbutton" title="打开设置窗口">设置</span>\
                                         <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="保存设置">保存</span>\
                                        </div>\
                                    </div>\
                                </div>';
        } else {
          innerHTML = '\
                                <div id="sp-fw-rect" style="background-color:#000;">\
                                    <div id="sp-fw-dot" style="display:none;"></div>\
                                    <div id="sp-fw-cur-mode" style="display:none;"></div>\
                                </div>\
                                <div id="sp-fw-content" style="display:none;">\
                                    <div id="sp-fw-main">\
                                        <div id="sp-fw-main-head">\
                                            <input type="checkbox" title="Enable autopagger, otherwise only prefetcher is enabled" id="sp-fw-a_enable" name="sp-fw-a_enable"/>Enable autopagger\
                                            <span id="sp-fw-span-info">Super_preloader</span>\
                                        </div>\
                                        <fieldset>\
                                            <legend title="Preloader helps accelerating loading" >Preloader Settings</legend>\
                                            <ul>\
                                                <li>\
                                                    <input type="checkbox" title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal." id="sp-fw-useiframe" name="sp-fw-useiframe"/>Use iframe\
                                                    <input type="checkbox" title="Check preload contents." id="sp-fw-viewcontent" name="sp-fw-viewcontent"/>Show preloaded content\
                                                </li>\
                                            </ul>\
                                        </fieldset>\
                                        <fieldset id="sp-fw-autopager-field" style="display:block;">\
                                            <legend title="Autopager frees you from clicking next page">Autopager Settings</legend>\
                                            <ul>\
                                                <li>\
                                                    <input type="checkbox" title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal" id="sp-fw-a_useiframe" name="sp-fw-a_useiframe"/>Use iframe</input>\
                                                    <input type="checkbox" title="Use a new iframe for the next page. It may solve problems with figures" id="sp-fw-a_newIframe" name="sp-fw-a_newIframe">Use new iframe</input>\
                                                    <ul id="sp-fw-a_useiframe-extend">\
                                                        <li>\
                                                            <input type="checkbox" title="Append the content untill iframe is fully loaded" id="sp-fw-a_iloaded" name="sp-fw-a_iloaded" />Wait iframe to be fully loaded\
                                                        </li>\
                                                        <li>\
                                                            <input type="number"  min="0" title="Wait for X ms untill the content is appended to the current page. (Default: 0)" id="sp-fw-a_itimeout" name="sp-fw-a_itimeout"/> ms delay\
                                                        </li>\
                                                    </ul>\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA" title="The next page won\'t be appended to the current page and you need to click a button"/>Manual mode\
                                                </li>\
                                                <li>\
                                                     Trick autopager until the height is <input type="number" min="0" id="sp-fw-a_remain" name="sp-fw-a_remain" />x page height\
                                                </li>\
                                                <li>\
                                                     Turn at most <input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage" /> pages\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator" title="Show the page navigation bar"/>Navigation bar\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" title="Append the whole next page to current page (When there is not rule for the website, this is the only method)" id="sp-fw-a_force" name="sp-fw-a_force"/>Force to join page\
                                                </li>\
                                                <li>\
                                                    <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0" title="Turn X pages instantly once the script is loaded. This is good for some gallery."/>Turn <input type="number" min="1" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="number of pages" /> pages instantly\
                                                    <span  class="sp-fw-spanbutton"  id="sp-fw-a_starti">Start</span>\
                                                </li>\
                                            </ul>\
                                        </fieldset>\
                                        <div id="sp-fw-foot">\
                                         <input type="checkbox" id="sp-fw-enable" title="Enable for thie website" name="sp-fw-enable"/>Enable\
                                         <span id="sp-fw-setup" class="sp-fw-spanbutton" title="Global Settings">Global Settings</span>\
                                         <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="Save settings">Save</span>\
                                        </div>\
                                    </div>\
                                </div>';
        }

        return innerHTML;
      }

      function sp_transition(start, end) {
        var TweenF = sp_transition.TweenF;

        if (!TweenF) {
          TweenF = Tween[TweenM[prefs.s_method]];
          TweenF = TweenF[TweenEase[prefs.s_ease]] || TweenF;
          sp_transition.TweenF = TweenF;
        }

        var frameSpeed = 1000 / prefs.s_FPS;
        var t = 0; // 次数,开始

        var b = start; // 开始

        var c = end - start; // 结束

        var d = Math.ceil(prefs.s_duration / frameSpeed); // 次数,结束

        var x = window.scrollX;

        function transition() {
          var y = Math.ceil(TweenF(t, b, c, d)); // alert(y);

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
        var div = e.currentTarget; // alert(div);

        var target = e.target; // alert(target);

        function getRelativeDiv(which) {
          var id = div.id;
          id = id.replace(/(sp-separator-)(.+)/, function (a, b, c) {
            return b + String(Number(c) + (which == "pre" ? -1 : 1));
          }); // alert(id);

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
          case "sp-sp-gotop":
            scrollIt(window.scrollY, 0);
            break;

          case "sp-sp-gopre":
            {
              var prediv = getRelativeDiv("pre");
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

          case "sp-sp-gonext":
            {
              var nextdiv = getRelativeDiv("next");
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

          case "sp-sp-gobottom":
            scrollIt(window.scrollY, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
            break;

          default:
            break;
        }
      } // autopager


      var autoPO = {
        startipages: nullFn
      };
      var hashchangeAdded = false;

      function autopager(SSS, floatWO) {
        // return;
        // 更新悬浮窗的颜色.
        floatWO.updateColor("autopager"); // 获取插入位置节点.

        var insertPoint;
        var pageElement;
        var insertMode;

        if (SSS.a_HT_insert) {
          insertPoint = getElement(SSS.a_HT_insert[0]);
          insertMode = SSS.a_HT_insert[1];
        } else {
          pageElement = getAllElements(SSS.a_pageElement, document, document, null, cplink);

          if (pageElement.length > 0) {
            var pELast = pageElement[pageElement.length - 1];
            insertPoint = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(" "));
          }

          insertMode = -1;
        }

        if (insertPoint) {
          logger.log("验证是否能找到插入位置节点:成功", insertPoint);
        } else {
          logger.error("验证是否能找到插入位置节点:失败  JS执行终止", SSS.a_HT_insert ? SSS.a_HT_insert[0] : "");
          floatWO.updateColor("Astop");
          return;
        }

        if (window.navigator.language != "en") {
          logger.debug("Language: %s", window.navigator.language);
        }

        if (pageElement === undefined) {
          pageElement = getAllElements(SSS.a_pageElement);
        }

        if (pageElement.length > 0) {
          logger.debug("验证是否能找到主要元素:成功", pageElement);
        } else {
          logger.error("验证是否能找到主要元素:失败", SSS.a_pageElement);
          floatWO.updateColor("Astop");
          return;
        }

        if (SSS.a_stylish) {
          // 插入自定义样式
          GME.addStyle(SSS.a_stylish, "Super_preloader-style");
        }

        var insertPointP;

        if (insertMode != 2) {
          insertPointP = insertPoint.parentNode;
        }

        var addIntoDoc;

        if (insertMode == -1 || insertMode == 1) {
          addIntoDoc = function addIntoDoc(obj) {
            return insertPointP.insertBefore(obj, insertPoint);
          };
        } else if (insertMode == 2) {
          addIntoDoc = function addIntoDoc(obj) {
            return insertPoint.appendChild(obj);
          };
        } else if (insertMode == 0) {
          addIntoDoc = function addIntoDoc(obj) {
            return insertPointP.insertBefore(obj, insertPoint.nextSibling);
          };
        }

        var doc, win;

        function XHRLoaded(res) {
          var str = res.responseText;
          doc = win = createDocumentByString(str);

          if (!doc) {
            logger.error("文档对象创建失败");
            removeL();
            return;
          }

          floatWO.updateColor("autopager");
          floatWO.CmodeIcon("hide");
          floatWO.loadedIcon("show");
          working = false;
          scroll();
        }

        function XHRNotLoaded(res) {
          logger.error("XHR is failed to be loaded");
          logger.error(res);
          removeL();
        }

        function removeL(isRemoveAddPage) {
          logger.debug("移除各种事件监听");
          floatWO.updateColor("Astop");
          var _remove = remove;

          for (var i = 0, ii = _remove.length; i < ii; i++) {
            _remove[i]();
          }

          if (isRemoveAddPage) {
            var separator = document.querySelector(".sp-separator");

            if (separator) {
              var insertBefore = insertPoint;

              if (insertMode == 2) {
                var l = insertPoint.children.length;

                if (l > 0) {
                  insertBefore = insertPoint.children[l - 1];
                }
              }

              var range = document.createRange();
              range.setStartBefore(separator);
              range.setEndBefore(insertBefore);
              range.deleteContents();
              range.detach();

              if (insertMode == 2) {
                // 还需要额外移除？
                insertPoint.removeChild(insertBefore);
              }
            }

            var style = document.getElementById("Super_preloader-style");

            if (style) {
              style.parentNode.removeChild(style);
            }
          }
        }

        if (isHashchangeSite && !hashchangeAdded) {
          window.addEventListener("hashchange", onhashChange, false);
          hashchangeAdded = true;
          logger.debug("成功添加 hashchange 事件");
        }

        function onhashChange(event) {
          logger.debug("触发 Hashchang 事件");
          removeL(true);
          setTimeout(function () {
            nextlink = getElement(SSS.nextLink || "auto;");
            nextlink = getFullHref(nextlink); // preLink = getElement(SSS.preLink || 'auto;');

            autopager(SSS, floatWO);
          }, hashchangeTimer);
        }

        var iframe;
        var messageR;

        function iframeLoaded(event) {
          var iframe = event.currentTarget; // alert(this.contentDocument.body)

          var body = iframe.contentDocument.body;

          if (body && body.firstChild) {
            setTimeout(function () {
              doc = iframe.contentDocument;
              removeScripts(doc, SSS.a_scriptFilter);
              win = iframe.contentWindow || doc;
              floatWO.updateColor("autopager");
              floatWO.CmodeIcon("hide");
              floatWO.loadedIcon("show");
              working = false;
              scroll();
            }, SSS.a_itimeout);
          }
        }

        function iframeRequest(link) {
          messageR = false;

          if (SSS.a_newIframe || !iframe) {
            var i = document.createElement("iframe");
            iframe = i;
            i.name = "superpreloader-iframe";
            i.width = "100%";
            i.height = "0";
            i.frameBorder = "0";
            i.style.cssText = "\
                    margin:0!important;\
                    padding:0!important;\
                    visibility:hidden!important;\
                ";

            if (SSS.a_sandbox != false) {
              i.sandbox = SSS.a_sandbox;
            }

            i.src = link;

            if (SSS.a_iloaded) {
              i.addEventListener("load", iframeLoaded, false);
              remove.push(function () {
                i.removeEventListener("load", iframeLoaded, false);
              });
            } else {
              var messagehandler = function messagehandler(e) {
                if (!messageR && e.data == "superpreloader-iframe:DOMLoaded") {
                  messageR = true;
                  iframeLoaded.call(i, {
                    currentTarget: i
                  });

                  if (SSS.a_newIframe) {
                    window.removeEventListener("message", messagehandler, false);
                  }
                }
              };

              window.addEventListener("message", messagehandler, false);
              remove.push(function () {
                window.removeEventListener("message", messagehandler, false);
              });
            }

            document.body.appendChild(i);
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
          floatWO.updateColor("loading");
          floatWO.CmodeIcon("show");
          logger.debug("获取下一页", SSS.a_useiframe ? "(iframe方式)" : "(XHR方式)", nextlink);

          if (SSS.a_useiframe) {
            iframeRequest(nextlink);
          } else {
            var reqConf = {
              overrideMimeType: "text/html; charset=" + document.characterSet,
              headers: SSS.a_headers ? SSS.a_headers : {
                Referer: cplink
              }
            };
            axios.get(nextlink, reqConf).then(function (res) {
              if (res.finalUrl === cplink) {
                logger.debug("最终地址相同");
                XHRNotLoaded(res);
              } else {
                XHRLoaded(res);
              }
            }).catch(function (res) {
              XHRNotLoaded(res);
            });
            logger.debug("读取完成");
          }
        }

        var ipagesmode = SSS.a_ipages[0];
        var ipagesnumber = SSS.a_ipages[1];
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
            GME.addStyle("\
                    #sp-sp-manualdiv{\
                        line-height:1.6!important;\
                        opacity:1!important;\
                        position:relative!important;\
                        float:none!important;\
                        top:0!important;\
                        left:0!important;\
                        z-index: 1000!important;\
                        min-width:366px!important;\
                        width:auto!important;\
                        text-align:center!important;\
                        font-size:14px!important;\
                        padding:3px 0!important;\
                        margin:5px 10px 8px;\
                        clear:both!important;\
                        border-top:1px solid #ccc!important;\
                        border-bottom:1px solid #ccc!important;\
                        -moz-border-radius:30px!important;\
                        border-radius:30px!important;\
                        background-color:#F5F5F5!important;\
                        -moz-box-shadow:inset 0 10px 16px #fff,0 2px 3px rgba(0,0,0,0.1);\
                        -webkit-box-shadow:inset 0 10px 16px #fff,0 2px 3px rgba(0,0,0,0.1);\
                        box-shadow:inset 0 10px 16px #fff,0 2px 3px rgba(0,0,0,0.1);\
                    }\
                    .sp-sp-md-span{\
                        font-weight:bold!important;\
                        margin:0 5px!important;\
                    }\
                    #sp-sp-md-number{\
                        width:50px!important;\
                        vertical-align:middle!important;\
                        display:inline-block!important;\
                        text-align:left!important;\
                    }\
                    #sp-sp-md-imgnext{\
                        padding:0!important;\
                        margin:0 0 0 5px!important;\
                        vertical-align:middle!important;\
                        display:inline-block!important;\
                    }\
                    #sp-sp-manualdiv:hover{\
                        cursor:pointer;\
                    }\
                    #sp-sp-md-someinfo{\
                        position:absolute!important;\
                        right:16px!important;\
                        bottom:1px!important;\
                        font-size:10px!important;\
                        text-shadow:white 0 1px 0!important;\
                        color:#5A5A5A!important;\
                        font-style:italic!important;\
                        z-index:-1!important;\
                        background:none!important;\
                    }\
                ");
            var div = $C("div", {
              id: "sp-sp-manualdiv"
            });
            manualDiv = div;
            var nextStr = "Next";

            if (i8n() === "zh_CN") {
              nextStr = "下";
            }

            var span = $C("span", {
              class: "sp-sp-md-span"
            }, nextStr);
            div.appendChild(span);
            var input = $C("input", {
              type: "number",
              value: 1,
              min: 1,
              title: "输入你想要拼接的页数(必须>=1),然后按回车.",
              id: "sp-sp-md-number"
            });

            var getInputValue = function getInputValue() {
              var value = Number(input.value);

              if (isNaN(value) || value < 1) {
                value = 1;
                input.value = 1;
              }

              return value;
            };

            var spage = function spage() {
              if (doc) {
                var value = getInputValue(); // alert(value);

                ipagesmode = true;
                ipagesnumber = value + paged;
                insertedIntoDoc();
              }
            };

            input.addEventListener("keyup", function (e) {
              // alert(e.keyCode);
              if (e.keyCode == 13) {
                // 回车
                spage();
              }
            }, false);
            div.appendChild(input);

            if (i8n() === "zh_CN") {
              div.appendChild($C("span", {
                className: "sp-sp-md-span"
              }, "页"));
            } else {
              div.appendChild($C("span", {
                className: "sp-sp-md-span"
              }, "page"));
            }

            div.appendChild($C("img", {
              id: "sp-sp-md-imgnext",
              src: _sep_icons.next
            }));
            div.appendChild($C("span", {
              id: "sp-sp-md-someinfo"
            }, prefs.someValue));
            document.body.appendChild(div);
            div.addEventListener("click", function (e) {
              if (e.target.id == "sp-sp-md-number") return;
              spage();
            }, false);
          }

          addIntoDoc(manualDiv);
          manualDiv.style.display = "block";
        }

        function beforeInsertIntoDoc() {
          working = true;

          if (SSS.a_manualA && !ipagesmode) {
            // 显示手动翻页触发条.
            logger.debug("手动拼接");
            manualAdiv();
          } else {
            // 直接拼接.
            logger.debug("直接拼接");
            insertedIntoDoc();
          }
        }

        var sepStyle;
        var goNextImg = [false];
        var sNumber = prefs.sepStartN;
        var _sep_icons = sep_icons;
        var curNumber = sNumber;

        function createSep(lastUrl, currentUrl, nextUrl) {
          var div = document.createElement("div");

          if (SSS.a_separator) {
            if (!sepStyle) {
              sepStyle = GME.addStyle("\
                        div.sp-separator{\
                            line-height:1.8!important;\
                            opacity:1!important;\
                            position:relative!important;\
                            float:none!important;\
                            top:0!important;\
                            left:0!important;\
                            min-width:366px;\
                            width:auto;\
                            text-align:center!important;\
                            font-size:14px!important;\
                            display:block!important;\
                            padding:3px 0!important;\
                            margin:5px 10px 8px;\
                            clear:both!important;\
                            border-style: solid!important;\
                            border-color: #cccccc!important;\
                            border-width: 1px;!important;\
                            -moz-border-radius:30px!important;\
                            border-radius:30px!important;\
                            background-color:#FFFFFF!important;\
                        }\
                        div.sp-separator:hover {\
                            box-shadow: 0 0 11px rgba(33,33,33,.2);\
                         }\
                        div.sp-separator img{\
                            vertical-align:middle!important;\
                            cursor:pointer!important;\
                            padding:0!important;\
                            margin:0 5px!important;\
                            border:none!important;\
                            display:inline-block!important;\
                            float:none!important;\
                            width: auto;\
                            height: auto;\
                        }\
                        div.sp-separator a.sp-sp-nextlink{\
                            margin:0 20px 0 -6px!important;\
                            display:inline!important;\
                            text-shadow:#fff 0 1px 0!important;\
                            background:none!important;\
                            color:#595959!important;\
                        }\
                        div.sp-separator span.sp-span-someinfo{\
                            position:absolute!important;\
                            right:16px!important;\
                            bottom:1px!important;\
                            font-size:10px!important;\
                            text-shadow:white 0 1px 0!important;\
                            color:#5A5A5A!important;\
                            font-style:italic!important;\
                            z-index:-1!important;\
                            background:none!important;\
                        }\
                    ");
            }

            div.className = "sp-separator";
            div.id = "sp-separator-" + curNumber;
            div.addEventListener("click", sepHandler, false);
            var pageStr = "";

            if (i8n() === "zh_CN") {
              pageStr = '<b>第 <span style="' + sep_icons.text_span_style + '">' + curNumber + "</span> 页</b>" + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : "");
            } else {
              pageStr = '<b>Page <span style="' + sep_icons.text_span_style + '">' + curNumber + "</span></b>" + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : "");
            }

            div.appendChild($C("a", {
              class: "sp-sp-nextlink",
              target: "_blank",
              href: currentUrl,
              title: currentUrl
            }, pageStr));
            div.appendChild($C("img", {
              src: _sep_icons.top,
              class: "sp-sp-gotop",
              alt: "去到顶部",
              title: "去到顶部"
            }));
            div.appendChild($C("img", {
              src: curNumber == sNumber ? _sep_icons.pre_gray : _sep_icons.pre,
              class: "sp-sp-gopre",
              title: "上滚一页"
            }));
            var i_next = $C("img", {
              src: _sep_icons.next_gray,
              class: "sp-sp-gonext",
              title: "下滚一页"
            });

            if (goNextImg.length == 2) {
              goNextImg.shift();
            }

            goNextImg.push(i_next);
            div.appendChild(i_next);
            div.appendChild($C("img", {
              src: _sep_icons.bottom,
              class: "sp-sp-gobottom",
              alt: "去到底部",
              title: "去到底部"
            }));
            div.appendChild($C("span", {
              class: "sp-span-someinfo"
            }, prefs.someValue));
            curNumber += 1;
          } else {
            div.style.cssText = "\
                    height:0!important;\
                    width:0!important;\
                    margin:0!important;\
                    padding:0!important;\
                    border:none!important;\
                    clear:both!important;\
                    display:block!important;\
                    visibility:hidden!important;\
                ";
          }

          return div;
        }

        var paged = 0;

        function insertedIntoDoc() {
          if (!doc) {
            logger.error("No document");
            return;
          }

          if (SSS.a_documentFilter) {
            try {
              SSS.a_documentFilter(doc, nextlink);
              logger.debug("执行 documentFilter 成功");
            } catch (e) {
              logger.error("执行 documentFilter 错误", e, SSS.a_documentFilter.toString());
            }
          }

          var docTitle = getElementByCSS("title", doc).textContent;
          var fragment = document.createDocumentFragment();
          var pageElements = getAllElements(SSS.a_pageElement, false, doc, win, nextlink);
          var ii = pageElements.length;

          if (ii <= 0) {
            logger.error("获取下一页的主要内容失败", SSS.a_pageElement);
            removeL();
            return;
          } else {
            logger.debug("获取下一页的主要内容成功", pageElements);
          } // 提前查找下一页链接，后面再赋值


          var lastUrl = cplink;
          cplink = nextlink;
          var nl = getElement(SSS.nextLink, false, doc, win);

          if (nl) {
            nl = getFullHref(nl);

            if (nl == nextlink) {
              nextlink = null;
            } else {
              nextlink = nl;
            }
          } else {
            nextlink = null;
          } // 有部分下一页的信息是在script中（比如新加的csdn的规则），因此先查找下一页信息，再执行 removeScripts


          removeScripts(doc, SSS.a_scriptFilter);
          var i, pe_x, pe_x_nn;

          for (i = 0; i < ii; i++) {
            pe_x = pageElements[i];
            pe_x_nn = pe_x.nodeName;
            if (pe_x_nn == "BODY" || pe_x_nn == "HTML" || pe_x_nn == "SCRIPT") continue;
            fragment.appendChild(pe_x);
          }

          if (SSS.filter && typeof SSS.filter === "string") {
            // 功能未完善.
            // alert(SSS.filter);
            var nodes = [];

            try {
              nodes = getAllElements(SSS.filter, fragment);
            } catch (e) {}

            var nodes_x;

            for (i = nodes.length - 1; i >= 0; i--) {
              nodes_x = nodes[i];
              nodes_x.parentNode.removeChild(nodes_x);
            }
          } // lazyImgSrc


          if (SSS.lazyImgSrc) {
            handleLazyImgSrc(SSS.lazyImgSrc, fragment);
          }

          var imgs;

          if (!window.opera && SSS.a_useiframe && !SSS.a_iloaded) {
            imgs = getAllElements("css;img[src]", fragment); // 收集所有图片
          } // 处理下一页内容部分链接是否新标签页打开


          if (prefs.forceTargetWindow) {
            var arr = Array.prototype.slice.call(fragment.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])'));
            arr.forEach(function (elem) {
              elem.setAttribute("target", "_blank");

              if (elem.getAttribute("onclick") == "atarget(this)") {
                // 卡饭论坛的控制是否在新标签页打开
                elem.removeAttribute("onclick");
              }
            });
          }

          var sepdiv = createSep(lastUrl, cplink, nextlink);
          var toInsert = sepdiv;
          var ncol = 0;

          if (SSS.a_sepdivDom !== undefined && typeof SSS.a_sepdivDom === "function") {
            toInsert = SSS.a_sepdivDom(doc, sepdiv);
          } else if (pageElements[0] && pageElements[0].tagName === "TR" && pageElements[pageElements.length - 1].tagName === "TR") {
            var insertParent = insertPoint.parentNode;
            var colNodes = getAllElements("child::tr[1]/child::*[self::td or self::th]", insertParent);

            if (colNodes.length == 0) {
              colNodes = getAllElements("child::*[self::td or self::th]", pageElements[0]);
            }

            for (i = 0, ncol = 0; i < colNodes.length; i++) {
              ncol += parseInt(colNodes[i].getAttribute("colspan"), 10) || 1;
            }

            var td = doc.createElement("td");
            td.appendChild(sepdiv);
            var tr = doc.createElement("tr");
            td.setAttribute("colspan", ncol);
            tr.appendChild(td);
            toInsert = tr;
          } else if (pageElements[0] && pageElements[0].tagName === "TBODY" && pageElements[pageElements.length - 1].tagName === "TBODY") {
            var trs = pageElements[pageElements.length - 1].getElementsByTagName("tr");

            if (trs) {
              trs = trs[trs.length - 1];

              for (i = 0, ncol = 0; i < trs.children.length; i++) {
                ncol += parseInt(trs.children[i].getAttribute("colspan"), 10) || 1;
              }

              var tbody = doc.createElement("tbody");

              var _td = $C("td", {
                colspan: ncol
              });

              var _tr = doc.createElement("tr");

              _td.appendChild(sepdiv);

              _tr.appendChild(_td);

              tbody.appendChild(_tr);
              toInsert = tbody;
            }
          }

          fragment.insertBefore(toInsert, fragment.firstChild);
          addIntoDoc(fragment); // filter

          if (SSS.filter && typeof SSS.filter === "function") {
            try {
              SSS.filter(pageElements);
              logger.debug("执行 filter(pages) 成功");
            } catch (e) {
              logger.error("执行 filter(pages) 错误", e, SSS.filter.toString());
            }
          }

          if (imgs) {
            // 非opera,在iframeDOM取出数据时需要重载图片.
            setTimeout(function () {
              var _imgs = imgs;
              var i, ii, img;

              for (i = 0, ii = _imgs.length; i < ii; i++) {
                img = _imgs[i];
                var src = img.src;
                img.src = src;
              }
            }, 99);
          }

          if (SSS.a_replaceE) {
            var oldE = getAllElements(SSS.a_replaceE);
            var oldE_lt = oldE.length; // alert(oldE_lt);

            if (oldE_lt > 0) {
              var newE = getAllElements(SSS.a_replaceE, false, doc, win);
              var newE_lt = newE.length; // alert(newE_lt);

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

          floatWO.loadedIcon("hide");

          if (manualDiv) {
            manualDiv.style.display = "none";
          }

          if (goNextImg[0]) goNextImg[0].src = _sep_icons.next;
          var ev = document.createEvent("Event");
          ev.initEvent("Super_preloaderPageLoaded", true, false);
          document.dispatchEvent(ev);

          if (prefs.enableHistory) {
            try {
              window.history.pushState(null, docTitle, cplink);
            } catch (e) {}
          }

          if (paged >= SSS.a_maxpage) {
            logger.debug(`到达所设定的最大翻页数 ${SSS.a_maxpage}`);
            notice("<b>状态</b>:" + '到达所设定的最大翻页数:<b style="color:red">' + SSS.a_maxpage + "</b>");
            removeL();
            return;
          }

          var delayiframe = function delayiframe(fn) {
            setTimeout(fn, 199);
          };

          if (nextlink) {
            // debug('找到下一页链接:', nextlink);
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
            logger.error("没有找到下一页链接", SSS.nextLink);
            removeL();
          }
        } // 返回,剩余高度是总高度的比值.


        var relatedObj_0, relatedObj_1;

        if (SSS.a_relatedObj) {
          if (_.isArray(SSS.a_relatedObj)) {
            relatedObj_0 = SSS.a_relatedObj[0];
            relatedObj_1 = SSS.a_relatedObj[1];
          } else {
            relatedObj_0 = SSS.a_pageElement;
            relatedObj_1 = "bottom";
          }
        }

        function getRemain() {
          var _cplink = cplink || undefined;

          var scrolly = window.scrollY;
          var WI = window.innerHeight;
          var obj = getLastElement(relatedObj_0, _cplink);
          var scrollH = obj && obj.nodeType == 1 ? obj.getBoundingClientRect()[relatedObj_1] + scrolly : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
          var exElementHeight = 0;

          if (SSS.a_excludeElement != undefined) {
            exElementHeight = getLastElement(SSS.a_excludeElement, _cplink).offsetHeight;
          }

          return (scrollH - scrolly - WI - exElementHeight) / WI; // 剩余高度于页面总高度的比例.
        }

        var pause = false;

        if (prefs.pauseA) {
          var Sbutton = ["target", "shiftKey", "ctrlKey", "altKey"];
          var ltype = prefs.mouseA ? "mousedown" : "dblclick";
          var button_1 = Sbutton[prefs.Pbutton[0]];
          var button_2 = Sbutton[prefs.Pbutton[1]];
          var button_3 = Sbutton[prefs.Pbutton[2]];

          var pauseIt = function pauseIt() {
            pause = !pause;
            if (prefs.stop_ipage) ipagesmode = false;

            if (pause) {
              floatWO.updateColor("Apause");

              if (i8n() === "zh_CN") {
                notice("<b>状态</b>:" + '自动翻页<span style="color:red!important;"><b> 暂停</b></span>.', prefs.disappearDelay);
              } else {
                notice("<b>Status</b>:" + 'Autopagger<span style="color:red!important;"><b> Pause</b></span>.', prefs.disappearDelay);
              }
            } else {
              floatWO.updateColor("autopager");
              floatWO.CmodeIcon("hide");

              if (i8n() === "zh_CN") {
                notice("<b>状态</b>:" + '自动翻页<span style="color:red!important;"><b> 启用</b></span>.');
              } else {
                notice("<b>Status</b>:" + 'Autopagger<span style="color:red!important;"><b> Enable</b></span>.');
              }
            }

            scroll();
          };

          var Sctimeout;

          var clearPause = function clearPause() {
            clearTimeout(Sctimeout);
            document.removeEventListener("mouseup", arguments.callee, false);
          };

          var pausehandler = function pausehandler(e) {
            if (!SSS.a_manualA || ipagesmode) {
              if (e[button_1] && e[button_2] && e[button_3]) {
                if (e.type == "mousedown") {
                  document.addEventListener("mouseup", clearPause, false);
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
          } else {// debug('Scroll fails');
            // debug('Likely caused by firefox');
          }
        }

        var timeout;

        function timeoutfn() {
          clearTimeout(timeout);
          timeout = setTimeout(scroll, 100);
        }

        window.addEventListener("scroll", timeoutfn, false);
        remove.push(function () {
          window.removeEventListener("scroll", timeoutfn, false);
        });
        autoPO = {
          startipages: function startipages(value) {
            if (value > 0) {
              ipagesmode = true;
              ipagesnumber = value + paged;
              notice("<b>状态</b>:" + "当前已翻页数量:<b>" + paged + "</b>," + '连续翻页到第<b style="color:red!important;">' + ipagesnumber + "</b>页.");
              if (SSS.a_manualA) insertedIntoDoc();
              scroll();
            }
          }
        };
      } // prefetcher


      function prefetcher(SSS, floatWO) {
        function cContainer() {
          var div = document.createElement("div");
          var div2 = div.cloneNode(false);
          var hr = document.createElement("hr");
          div.style.cssText = "\
                margin:3px!important;\
                padding:5px!important;\
                border-radius:8px!important;\
                -moz-border-radius:8px!important;\
                border-bottom:1px solid #E30005!important;\
                border-top:1px solid #E30005!important;\
                background-color:#F5F5F5!important;\
                float:none!important;\
            ";
          div.title = "预读的内容";
          div2.style.cssText = "\
                text-align:left!important;\
                color:red!important;\
                font-size:13px!important;\
                display:block!important;\
                float:none!important;\
                position:static!important;\
            ";
          hr.style.cssText = "\
                display:block!important;\
                border:1px inset #000!important;\
            ";
          div.appendChild(div2);
          div.appendChild(hr);
          document.body.appendChild(div);
          return {
            div: div,
            div2: div2
          };
        }

        floatWO.updateColor("prefetcher");
        floatWO.updateColor("loading");
        floatWO.CmodeIcon("show");

        if (SSS.useiframe) {
          var iframe = document.createElement("iframe");
          iframe.name = "superpreloader-iframe";
          iframe.src = nextlink;
          iframe.width = "100%";
          iframe.height = "0";
          iframe.frameBorder = "0";
          iframe.style.cssText = "\
                margin:0!important;\
                padding:0!important;\
            ";
          iframe.addEventListener("load", function (e) {
            var body = e.currentTarget.contentDocument.body;

            if (body && body.firstChild) {
              floatWO.updateColor("prefetcher");
              floatWO.CmodeIcon("hide");
              floatWO.loadedIcon("show");
              e.currentTarget.removeEventListener("load", arguments.callee, false);

              if (SSS.lazyImgSrc) {
                handleLazyImgSrc(SSS.lazyImgSrc, body);
              }
            }
          }, false);

          if (SSS.viewcontent) {
            var container = cContainer();
            container.div2.innerHTML = "iframe全预读: " + "<br />" + "预读网址: " + "<b>" + nextlink + "</b>";
            iframe.height = "300px";
            container.div.appendChild(iframe);
          } else {
            document.body.appendChild(iframe);
          }
        } else {
          axios.get(nextlink).then(function (res) {
            var doc = createDocumentByString(res.responseText);

            if (!doc) {
              logger.error("文档对象创建失败!");
              return;
            }

            if (SSS.lazyImgSrc) {
              handleLazyImgSrc(SSS.lazyImgSrc, doc);
            }

            var images = doc.images;
            var isl = images.length;
            var img;
            var iarray = [];
            var i;
            var existSRC = {};
            var isrc;

            for (i = isl - 1; i >= 0; i--) {
              isrc = images[i].getAttribute("src");

              if (!isrc || existSRC[isrc]) {
                continue;
              } else {
                existSRC[isrc] = true;
              }

              img = document.createElement("img");
              img.src = isrc;
              iarray.push(img);
            }

            if (SSS.viewcontent) {
              var containter = cContainer();
              var div = containter.div;
              i = iarray.length;
              containter.div2.innerHTML = "预读取图片张数: " + "<b>" + i + "</b>" + "<br />" + "预读网址: " + "<b>" + nextlink + "</b>";

              for (i -= 1; i >= 0; i--) {
                div.appendChild(iarray[i]);
              }
            }

            floatWO.updateColor("prefetcher");
            floatWO.loadedIcon("show");
            floatWO.CmodeIcon("hide");
          });
        }
      } // 执行开始..///////////////////
      // 分析黑名单


      var blackList_re = new RegExp(blackList.map(wildcardToRegExpStr).join("|"));

      if (blackList_re.test(url)) {
        logger.debug("匹配黑名单，js执行终止");
        return;
      } // 是否在frame上加载..


      if (prefs.DisableI && window.self != window.parent) {
        var isReturn = !_.find(DIExclude, function (x) {
          return x[1] && x[2].test(url);
        });

        if (isReturn) {
          logger.debug(`url为:${url}的页面为非顶层窗口,JS执行终止`);
          return;
        }
      }

      logger.debug(`url为:${url}的页面,JS加载成功`); // 第一阶段..分析高级模式..

      SITEINFO = SITEINFO.concat(SITEINFO_json, SITEINFO_TP, SITEINFO_comp);

      if (!prefs.numOfRule || prefs.numOfRule != SITEINFO.length) {
        prefs.numOfRule = SITEINFO.length;
        GM.setValue("prefs", JSON.stringify(prefs));
      } // 重要的变量两枚.


      var nextlink;
      var prelink; //= ==============

      var SSS = {};

      var findCurSiteInfo = function findCurSiteInfo() {
        var SIIAD = SITEINFO_D.autopager;
        var Rurl;
        var ii = SITEINFO.length;

        if (i8n() === "zh_CN") {
          logger.debug(`高级规则数目:${ii}`);
          logger.debug(`规则数 > ${ii - SITEINFO_json.length} 来自其他来源, 比如: wedata.net`);
        } else {
          logger.debug(`Number of advanced rules:${ii}`);
        }

        var _loop2 = function _loop2() {
          var SII = SITEINFO[i];
          Rurl = toRE(SII.url);

          if (Rurl.test(url)) {
            if (i8n() === "zh_CN") {
              logger.debug("找到当前站点规则:", SII);
              logger.debug(`规则ID: ${i + 1}`);
            } else {
              logger.debug("Find rule for this website:", SII);
              logger.debug(`Rule ID: ${i + 1}`);
            } // 运行规则的 startFilter


            if (SII.autopager && SII.autopager.startFilter) {
              try {
                SII.autopager.startFilter(document, window);
                logger.debug("执行 startFilter 成功");
              } catch (e) {
                logger.error("执行 startFilter 错误", e);
              }
            }

            nextlink = getElement(SII.nextLink || "auto;");

            if (!nextlink) {
              logger.warn("无法找到下一页链接,继续查找其他规则,跳过规则:", SII);
              return "continue";
            } // 如果匹配到的下一页链接和当前页一致，继续查找下一条规则


            if (getFullHref(nextlink) == document.location.href) {
              nextlink = null;
              return "continue";
            }

            if (SII.preLink && SII.preLink != "auto;") {
              // 如果设定了具体的preLink
              prelink = getElement(SII.preLink);
            } else {
              if (prefs.autoGetPreLink) {
                getElement("auto;");
              }
            } // alert(prelink);


            SSS = {};
            SSS.Rurl = String(Rurl); // alert(SSS.Rurl);

            SSS.nextLink = SII.nextLink || "auto;";
            SSS.viewcontent = SII.viewcontent;
            SSS.enable = SII.enable === undefined ? SITEINFO_D.enable : SII.enable;
            SSS.useiframe = SII.useiframe === undefined ? SITEINFO_D.useiframe : SII.useiframe;

            if (SII.pageElement) {
              // 如果是Oautopager的规则..
              if (!(SII.autopager instanceof Object)) SII.autopager = {};
              SII.autopager.pageElement = SII.pageElement;
              if (SII.useiframe) SII.autopager.useiframe = SII.useiframe;
              if (SII.preLink) SII.autopager.preLink = SII.preLink;
              if (SII.insertBefore) SII.autopager.HT_insert = [SII.insertBefore, 1];
            } // 自动翻页设置.


            var SIIA = SII.autopager;

            if (SIIA) {
              SSS.a_pageElement = SIIA.pageElement;
              if (!SSS.a_pageElement) return "break";
              SSS.a_manualA = SIIA.manualA === undefined ? SIIAD.manualA : SIIA.manualA;
              SSS.a_enable = SIIA.enable === undefined ? SIIAD.enable : SIIA.enable;

              if (SIIA.useiframe === undefined) {
                if (SII.useiframe === undefined) {
                  SSS.a_useiframe = SIIAD.useiframe;
                } else {
                  SSS.a_useiframe = SII.useiframe;
                }
              } else {
                SSS.a_useiframe = SIIA.useiframe;
              }

              SSS.a_newIframe = SIIA.newIframe === undefined ? SIIAD.newIframe : SIIA.newIframe;
              SSS.a_iloaded = SIIA.iloaded === undefined ? SIIAD.iloaded : SIIA.iloaded;
              SSS.a_itimeout = SIIA.itimeout === undefined ? SIIAD.itimeout : SIIA.itimeout; // alert(SSS.a_itimeout);

              SSS.a_remain = SIIA.remain === undefined ? SIIAD.remain : SIIA.remain;
              SSS.a_maxpage = SIIA.maxpage === undefined ? SIIAD.maxpage : SIIA.maxpage;
              SSS.a_separator = SIIA.separator === undefined ? SIIAD.separator : SIIA.separator;
              SSS.a_sepdivDom = SIIA.sepdivDom === undefined ? undefined : SIIA.sepdivDom;
              SSS.a_separatorReal = SIIA.separatorReal === undefined ? SIIAD.separatorReal : SIIA.separatorReal;
              SSS.a_replaceE = SIIA.replaceE;
              SSS.a_HT_insert = SIIA.HT_insert;
              SSS.a_relatedObj = SIIA.relatedObj;
              SSS.a_ipages = SIIA.ipages === undefined ? SIIAD.ipages : SIIA.ipages; // new

              SSS.filter = SII.filter || SIIA.filter; // 新增了函数的形式，原来的功能是移除 pageElement

              SSS.a_documentFilter = SII.documentFilter || SIIA.documentFilter;
              SSS.a_scriptFilter = SIIA.scriptFilter === undefined ? "" : SIIA.scriptFilter;

              if (typeof SSS.a_documentFilter === "string") {
                if (SSS.a_documentFilter === "startFilter") {
                  SSS.a_documentFilter = function (doc, nextLink) {
                    return SII.autopager.startFilter(doc);
                  };
                }
              }

              SSS.a_stylish = SII.stylish || SIIA.stylish;
              SSS.lazyImgSrc = SIIA.lazyImgSrc;
              SSS.a_headers = SIIA.headers === undefined ? undefined : SIIA.headers; // custom header for XHRLoaded

              SSS.a_reload = SIIA.reload === undefined ? SIIAD.reload : SIIA.reload; // force reload iframe

              SSS.a_sandbox = SIIA.sandbox === undefined ? SIIAD.sandbox : SIIA.sandbox; // 在翻页的时候会有一些其他元素占据了页面的高度，导致翻页不精准。
              // 比如正文下面的推荐文章列表（占据超过整个页面10%就很难受）

              SSS.a_excludeElement = SIIA.excludeElement;
            } // 检验是否存在内容


            var pageElement = getElement(SSS.a_pageElement);

            if (!pageElement || Array.isArray(pageElement) && pageElement.length === 0) {
              nextlink = null;
              logger.error("无法找到内容,跳过规则:", SII, "继续查找其他规则");
              return "continue";
            }

            SSS.hasRule = true;
            return "break";
          }
        };

        _loop: for (var i = 0; i < ii; i++) {
          var _ret = _loop2();

          switch (_ret) {
            case "continue":
              continue;

            case "break":
              break _loop;
          }
        }

        if (!SSS.hasRule) {
          logger.warn("未找到合适的高级规则,开始自动匹配."); // 自动搜索.

          if (!autoMatch.keyMatch) {
            logger.debug("自动匹配功能被禁用了.");
          } else {
            nextlink = autoGetLink(); // alert(nextlink);

            if (nextlink) {
              // 强制模式.
              var FA = autoMatch.FA;
              SSS.Rurl = window.localStorage ? "am:" + (url.match(/^https?:\/\/[^:]*\//i) || [])[0] : "am:automatch"; // alert(SSS.Rurl);

              SSS.enable = true;
              SSS.nextLink = "auto;";
              SSS.viewcontent = autoMatch.viewcontent;
              SSS.useiframe = autoMatch.useiframe;
              SSS.a_force = true;
              SSS.a_manualA = FA.manualA; // SSS.a_enable = FA.enable || false; //不能使a_enable的值==undefined...

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
        } // 如果规则没 lazyImgSrc，设置默认值


        if (!SSS.lazyImgSrc) {
          SSS.lazyImgSrc = prefs.lazyImgSrc;
        }

        logger.debug(`搜索高级规则和自动匹配过程总耗时:${new Date() - startTime}ms`);
      };

      findCurSiteInfo(); // 上下页都没有找到啊

      if (!nextlink && !prelink) {
        logger.warn(`未找到相关链接, JS执行停止. 共耗时:${new Date() - startTime}ms`);
        return;
      } else {
        logger.debug("上一页链接:", prelink);
        logger.debug("下一页链接:", nextlink);
        nextlink = nextlink ? nextlink.href || nextlink : undefined;
        prelink = prelink ? prelink.href || prelink : undefined;
      }

      var superPreloader = {
        go: function go() {
          if (nextlink) window.location.href = nextlink;
        },
        back: function back() {
          if (!prelink) getElement("auto;");
          if (prelink) window.location.href = prelink;
        }
      };

      if (prefs.arrowKeyPage) {
        logger.debug("添加键盘左右方向键翻页监听.");
        document.addEventListener("keyup", function (e) {
          var tarNN = e.target.nodeName;
          if (tarNN != "BODY" && tarNN != "HTML") return; // check is a combo pressed

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
        }, false);
      } // 监听下一页事件.


      logger.debug("添加鼠标手势翻页监听");
      document.addEventListener("superPreloader.go", function () {
        superPreloader.go();
      }, false); // 监听下一页事件.

      document.addEventListener("superPreloader.back", function () {
        superPreloader.back();
      }, false); // 没找到下一页的链接

      if (!nextlink) {
        logger.error("下一页链接不存在,JS无法继续.");
        logger.debug(`全部过程耗时:${new Date() - startTime}ms`);
        return;
      } // 载入设置..


      var loadLocalSetting = function loadLocalSetting() {
        logger.debug("加载设置");
        var savedValue = getValue("spfwset");

        if (savedValue) {
          try {
            savedValue = eval(savedValue);
          } catch (e) {
            saveValue("spfwset", ""); // 有问题的设置,被手动修改过?,清除掉,不然下次还是要出错.
          }
        }

        if (savedValue) {
          SSS.savedValue = savedValue;
          var i, ii;

          for (i = 0, ii = savedValue.length; i < ii; i++) {
            var savedValue_x = savedValue[i];

            if (savedValue_x.Rurl == SSS.Rurl) {
              for (var ix in savedValue_x) {
                if (savedValue_x.hasOwnProperty(ix)) {
                  SSS[ix] = savedValue_x[ix]; // 加载键值.
                }
              }

              break;
            }
          } // alert(i);


          SSS.sedValueIndex = i;
        } else {
          SSS.savedValue = [];
          SSS.sedValueIndex = 0;
        }
      };

      loadLocalSetting();

      if (!SSS.hasRule) {
        SSS.a_force = true;
      }

      if (SSS.a_force) {
        SSS.a_pageElement = "//body/*";
        SSS.a_HT_insert = undefined;
        SSS.a_relatedObj = undefined;
      }

      if (prefs.floatWindow) {
        logger.debug("创建悬浮窗");
        floatWindow(SSS);
      }

      if (!SSS.enable) {
        logger.warn("本规则被关闭,脚本执行停止");
        logger.debug(`全部过程耗时:${new Date() - startTime}ms`);
        return;
      }

      logger.debug(`全部过程耗时:${new Date() - startTime}ms`); // 预读或者翻页.

      if (SSS.a_enable) {
        logger.debug("初始化,翻页模式.");
        autopager(SSS, floatWO);
      } else {
        logger.debug("初始化,预读模式.");
        prefetcher(SSS, floatWO);
      }

      var docChecked; // 获取单个元素,混合

      function getElement(selector, contextNode, doc, win) {
        var _cplink = cplink;
        var ret;
        if (!selector) return ret;
        doc = doc || document;
        win = win || window;
        contextNode = contextNode || doc;
        var type = typeof selector;

        if (type == "string") {
          if (selector.search(/^css;/i) === 0) {
            ret = getElementByCSS(selector.slice(4), contextNode);
          } else if (selector.toLowerCase() == "auto;") {
            ret = autoGetLink(doc, win);
          } else {
            ret = getElementByXpath(selector, contextNode, doc);
          }
        } else if (type == "function") {
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

      function autoGetLink(doc, win) {
        if (!autoMatch.keyMatch) return;

        if (!parseKWRE.done) {
          parseKWRE();
          parseKWRE.done = true;
        }

        var startTime = new Date();
        doc = doc || document;
        win = win || window;

        if (doc == document) {
          // 当前文档,只检查一次.
          // alert(nextlink);
          if (docChecked) return nextlink;
          docChecked = true;
        }

        var _prePageKey = prePageKey;
        var _nextPageKey = nextPageKey;
        var _nPKL = nextPageKey.length;
        var _pPKL = prePageKey.length;
        var _getFullHref = getFullHref;
        var _getAllElementsByXpath = getAllElementsByXpath;
        var _Number = Number;
        var _domain_port = domain_port;
        var alllinks = doc.links;
        var alllinksl = alllinks.length;
        var curLHref = cplink;

        var _nextlink;

        var _prelink;

        if (!autoGetLink.checked) {
          // 第一次检查
          _nextlink = nextlink;
          _prelink = prelink;
        } else {
          _prelink = true;
        }

        var DCEnable = autoMatch.digitalCheck;
        var DCRE = /^\s*\D{0,1}(\d+)\D{0,1}\s*$/;
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
          var ahref = a.getAttribute("href"); // 在chrome上当是非当前页面文档对象的时候直接用a.href访问,不返回href

          if (ahref == "#") {
            return null;
          }

          ahref = _getFullHref(ahref); // 从相对路径获取完全的href;
          // 3个条件:http协议链接,非跳到当前页面的链接,非跨域

          if (/^https?:/i.test(ahref) && ahref.replace(/#.*$/, "") != curLHref && ahref.match(/https?:\/\/([^\/]+)/)[1] == _domain_port) {
            logger.debug(type == "pre" ? "上一页" : "下一页" + "匹配到的关键字为:", atext);
            return a; // 返回对象A
            // return ahref;
          }
        }

        logger.debug(`全文档链接数量:${alllinksl}`);

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
                numtext = numtext[1]; // alert(numtext);

                aP = a;
                initSD = 0;

                if (!_nextlink) {
                  preS1 = a.previousSibling;
                  preS2 = a.previousElementSibling;

                  while (!(preS1 || preS2) && initSD < searchD) {
                    aP = aP.parentNode;

                    if (aP) {
                      preS1 = aP.previousSibling;
                      preS2 = aP.previousElementSibling;
                    }

                    initSD++; // alert('initSD: '+initSD);
                  }

                  searchedD = initSD > 0;

                  if (preS1 || preS2) {
                    pSNText = preS1 ? preS1.textContent.match(DCRE) : "";

                    if (pSNText) {
                      preSS = preS1;
                    } else {
                      pSNText = preS2 ? preS2.textContent.match(DCRE) : "";
                      preSS = preS2;
                    } // alert(previousS);


                    if (pSNText) {
                      pSNText = pSNText[1]; // debug(pSNText)
                      // alert(pSNText)

                      if (_Number(pSNText) == _Number(numtext) - 1) {
                        // alert(searchedD);
                        nodeType = preSS.nodeType; // alert(nodeType);

                        if (nodeType == 3 || nodeType == 1 && (searchedD ? _getAllElementsByXpath("./descendant-or-self::a[@href]", preSS, doc).snapshotLength === 0 : !preSS.hasAttribute("href") || _getFullHref(preSS.getAttribute("href")) == curLHref)) {
                          _nextlink = finalCheck(a, "next"); // alert(_nextlink);
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

                    initSD++; // alert('initSD: '+initSD);
                  }

                  searchedD = initSD > 0;

                  if (nextS1 || nextS2) {
                    nSNText = nextS1 ? nextS1.textContent.match(DCRE) : "";

                    if (nSNText) {
                      nextSS = nextS1;
                    } else {
                      nSNText = nextS2 ? nextS2.textContent.match(DCRE) : "";
                      nextSS = nextS2;
                    } // alert(nextS);


                    if (nSNText) {
                      nSNText = nSNText[1]; // alert(pSNText)

                      if (_Number(nSNText) == _Number(numtext) + 1) {
                        // alert(searchedD);
                        nodeType = nextSS.nodeType; // alert(nodeType);

                        if (nodeType == 3 || nodeType == 1 && (searchedD ? _getAllElementsByXpath("./descendant-or-self::a[@href]", nextSS, doc).snapshotLength === 0 : !nextSS.hasAttribute("href") || _getFullHref(nextSS.getAttribute("href")) == curLHref)) {
                          _prelink = finalCheck(a, "pre"); // alert(_prelink);
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
            aimgs = a.getElementsByTagName("img");

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
              if (!keytext.test(atext)) continue;
              _nextlink = finalCheck(a, "next");
              xbreak = true;
              break;
            }

            if (xbreak || _nextlink) continue;
          }

          if (!_prelink) {
            for (k = 0; k < _pPKL; k++) {
              keytext = _prePageKey[k];
              if (!keytext.test(atext)) continue;
              _prelink = finalCheck(a, "pre");
              break;
            }
          }
        }

        logger.debug(`搜索链接数量:${i} 耗时:${new Date() - startTime}ms`);

        if (!autoGetLink.checked) {
          // 只在第一次检测的时候,抛出上一页链接.
          prelink = _prelink;
          autoGetLink.checked = true;
        } // alert(_nextlink);


        return _nextlink;
      }

      function parseKWRE() {
        function modifyPageKey(name, pageKey, pageKeyLength) {
          function strMTE(str) {
            return str.replace(/\\/g, "\\\\").replace(/\+/g, "\\+").replace(/\./g, "\\.").replace(/\?/g, "\\?").replace(/\{/g, "\\{").replace(/\}/g, "\\}").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\*/g, "\\*").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\|/g, "\\|").replace(/\//g, "\\/");
          }

          var pfwordl = autoMatch.pfwordl;
          var sfwordl = autoMatch.sfwordl;
          var RE_enable_a = pfwordl[name].enable;
          var RE_maxPrefix = pfwordl[name].maxPrefix;
          var RE_character_a = pfwordl[name].character;
          var RE_enable_b = sfwordl[name].enable;
          var RE_maxSubfix = sfwordl[name].maxSubfix;
          var RE_character_b = sfwordl[name].character;
          var plwords, slwords, rep;
          plwords = RE_maxPrefix > 0 ? "[" + (RE_enable_a ? strMTE(RE_character_a.join("")) : ".") + "]{0," + RE_maxPrefix + "}" : "";
          plwords = "^\\s*" + plwords; // alert(plwords);

          slwords = RE_maxSubfix > 0 ? "[" + (RE_enable_b ? strMTE(RE_character_b.join("")) : ".") + "]{0," + RE_maxSubfix + "}" : "";
          slwords = slwords + "\\s*$"; // alert(slwords);

          rep = prefs.cases ? "" : "i";

          for (var i = 0; i < pageKeyLength; i++) {
            pageKey[i] = new RegExp(plwords + strMTE(pageKey[i]) + slwords, rep); // alert(pageKey[i]);
          }

          return pageKey;
        } // 转成正则.


        prePageKey = modifyPageKey("previous", prePageKey, prePageKey.length);
        nextPageKey = modifyPageKey("next", nextPageKey, nextPageKey.length);
      }
    } // By lastDream2013 略加修改，原版只能用于 Firefox


    function getRalativePageStr(lastUrl, currentUrl, nextUrl) {
      function getDigital(str) {
        var num = str.replace(/^p/i, "");
        return parseInt(num, 10);
      }

      var getRalativePageNumArray = function getRalativePageNumArray(lasturl, url) {
        if (!lasturl || !url) {
          return [0, 0];
        }

        var lasturlarray = lasturl.split(/-|\.|\&|\/|=|#|\?/);
        var urlarray = url.split(/-|\.|\&|\/|=|#|\?/);
        var url_info;
        var lasturl_info; // 一些 url_info 为 p1,p2,p3 之类的

        var handleInfo = function handleInfo(s) {
          if (s) {
            return s.replace(/^p/, "");
          }

          return s;
        };

        while (urlarray.length !== 0) {
          url_info = handleInfo(urlarray.pop());
          lasturl_info = handleInfo(lasturlarray.pop());

          if (url_info != lasturl_info) {
            if (/[0-9]+/.test(url_info) && (url_info == "2" || /[0-9]+/.test(lasturl_info))) {
              return [parseInt(lasturl_info) || 1, parseInt(url_info)];
            }
          }
        }

        return [0, 0];
      };

      var relativeOff; // 论坛和搜索引擎网页显示实际页面信息

      var relativePageNumarray = [];

      if (nextUrl) {
        relativePageNumarray = getRalativePageNumArray(currentUrl, nextUrl);
      } else {
        relativePageNumarray = getRalativePageNumArray(lastUrl, currentUrl);
        relativeOff = relativePageNumarray[1] - relativePageNumarray[0]; // 用的上一页的相对信息比较的，要补充差值……

        relativePageNumarray[1] = relativePageNumarray[1] + relativeOff;
        relativePageNumarray[0] = relativePageNumarray[0] + relativeOff;
      } // console.log('[获取实际页数] ', '要比较的3个页数：',arguments, '，得到的差值:', relativePageNumarray);


      if (isNaN(relativePageNumarray[0]) || isNaN(relativePageNumarray[1])) {
        return "";
      }

      var realPageSiteMatch = false;
      relativeOff = relativePageNumarray[1] - relativePageNumarray[0]; // 上一页与下一页差值为1，并最大数值不超过10000(一般论坛也不会超过这么多页……)

      if (relativeOff === 1 && relativePageNumarray[1] < 10000) {
        realPageSiteMatch = true;
      } // 上一页与下一页差值不为1，但上一页与下一页差值能被上一页与下一面所整除的，有规律的页面


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
        if (i8n() === "zh_CN") {
          if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
            // 一般是搜索引擎的第xx - xx项……
            relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + " - " + relativePageNumarray[1] + "</span> 项 ]";
          } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
            // 一般的翻页数，差值应该是1
            relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + "</span> 页 ]";
          } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
            // 找不到的话……
            relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">实际网页结束</span> ]';
          }
        } else {
          if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
            // 一般是搜索引擎的第xx - xx项……
            relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + " - " + relativePageNumarray[1] + "</span> ]";
          } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
            // 一般的翻页数，差值应该是1
            relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + "</span> ]";
          } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
            // 找不到的话……
            relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">Actual elements ends</span> ]';
          }
        }
      } else {
        relativePageStr = "";
      }

      return relativePageStr || "";
    }
  }); // ------------------------下面的不要管他-----------------
  /// ////////////////////////////////////////////////////////////////

  var C = console; // 变量

  var isHashchangeSite = false;
  var hashchangeTimer = 0; // ====================  libs  ==============================
  // 地址栏递增处理函数.

  function hrefInc(obj, doc, win, cplink) {
    var _cplink = cplink;

    function getHref(href) {
      var mFails = obj.mFails;
      if (!mFails) return href;
      var str;

      if (typeof mFails === "string") {
        str = mFails;
      } else {
        var array = [];

        for (var i = 0, ii = mFails.length; i < ii; i++) {
          var fx = mFails[i];
          if (!fx) continue;

          if (typeof fx !== "string" || fx.indexOf("re;") === 0) {
            var fxre = typeof fx === "string" ? toRE(fx.slice(3)) : fx;
            var mValue = href.match(fxre);
            if (!mValue) return href;
            array.push(mValue);
          } else {
            array.push(fx);
          }
        }

        str = array.join("");
      }

      return str;
    } // alert(getHref(_cplink))


    var sa = obj.startAfter;
    var saType = typeof sa;
    var index;

    if (saType == "string") {
      if (sa[0] == "#") {
        _cplink = doc.location.href;
      }

      index = _cplink.indexOf(sa);

      if (index == -1) {
        _cplink = getHref(_cplink);
        index = _cplink.indexOf(sa);
        if (index == -1) return; // alert(index);
      }
    } else {
      var tsa = _cplink.match(sa); // alert(sa);


      if (!tsa) {
        _cplink = getHref(_cplink);
        sa = (_cplink.match(sa) || [])[0];
        if (!sa) return;
        index = _cplink.indexOf(sa);
        if (index == -1) return;
      } else {
        sa = tsa[0];
        index = _cplink.indexOf(sa); // alert(index)
        // alert(tsa.index)
      }
    }

    index += sa.length;
    var max = obj.max === undefined ? 9999 : obj.max;
    var min = obj.min === undefined ? 1 : obj.min;

    var aStr = _cplink.slice(0, index);

    var bStr = _cplink.slice(index);

    var nbStr = bStr.replace(/^(\d+)(.*)$/, function (a, b, c) {
      b = Number(b) + obj.inc;
      if (b >= max || b < min) return a;
      return b + c;
    }); // alert(aStr+nbStr);

    if (nbStr !== bStr) {
      var ilresult;

      try {
        ilresult = obj.isLast(doc, unsafeWindow, _cplink);
      } catch (e) {}

      if (ilresult) return;
      return aStr + nbStr;
    }
  }
  /* jshint ignore:start */
  // 动画库


  var Tween = {
    Linear: function Linear(t, b, c, d) {
      return c * t / d + b;
    },
    Quad: {
      easeIn: function easeIn(t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOut: function easeOut(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOut: function easeInOut(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b;
      }
    },
    Cubic: {
      easeIn: function easeIn(t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOut: function easeOut(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOut: function easeInOut(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    },
    Quart: {
      easeIn: function easeIn(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOut: function easeOut(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOut: function easeInOut(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      }
    },
    Quint: {
      easeIn: function easeIn(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOut: function easeOut(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOut: function easeInOut(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }
    },
    Sine: {
      easeIn: function easeIn(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOut: function easeOut(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOut: function easeInOut(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      }
    },
    Expo: {
      easeIn: function easeIn(t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOut: function easeOut(t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      },
      easeInOut: function easeInOut(t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    },
    Circ: {
      easeIn: function easeIn(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOut: function easeOut(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOut: function easeInOut(t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    },
    Elastic: {
      easeIn: function easeIn(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        var s;

        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },
      easeOut: function easeOut(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        var s;

        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },
      easeInOut: function easeInOut(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (0.3 * 1.5);
        var s;

        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
      }
    },
    Back: {
      easeIn: function easeIn(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOut: function easeOut(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOut: function easeInOut(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      }
    },
    Bounce: {
      easeIn: function easeIn(t, b, c, d) {
        return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
      },
      easeOut: function easeOut(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
      },
      easeInOut: function easeInOut(t, b, c, d) {
        if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
      }
    }
  };
  var TweenM = ["Linear", "Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Elastic", "Back", "Bounce"];
  var TweenEase = ["easeIn", "easeOut", "easeInOut"];
  /* jshint ignore:end */
  // ====================  functions  ==============================

  function handleLazyImgSrc(rule, doc) {
    var imgAttrs = rule.split("|");
    imgAttrs.forEach(function (attr) {
      attr = attr.trim();
      [].forEach.call(doc.querySelectorAll("img[" + attr + "]"), function (img) {
        var newSrc = img.getAttribute(attr);

        if (newSrc && newSrc != img.src) {
          img.setAttribute("src", newSrc);
          img.removeAttribute(attr);
        }
      });
    });
  }

  function removeScripts(node, scriptFilter) {
    // 移除元素的 script
    var scripts = getAllElements("css;script", node);
    var regFilter;

    if (scriptFilter) {
      regFilter = toRE(scriptFilter);
    }

    var scripts_x;

    for (var i = scripts.length - 1; i >= 0; i--) {
      scripts_x = scripts[i];
      var iremove = false;

      if (regFilter) {
        if (scripts_x.hasOwnProperty("src")) {
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

  var noticeDiv;
  var noticeDivto;
  var noticeDivto2;

  function notice(html_txt, showTime) {
    if (!noticeDiv) {
      var div = document.createElement("div");
      noticeDiv = div;
      div.style.cssText = "\
            position:fixed!important;\
            z-index:2147483647!important;\
            float:none!important;\
            width:auto!important;\
            height:auto!important;\
            font-size:13px!important;\
            padding:3px 20px 2px 5px!important;\
            background-color:#7f8f9c!important;\
            border:none!important;\
            color:#000!important;\
            text-align:left!important;\
            left:0!important;\
            bottom:0!important;\
            opacity:0;\
            -moz-border-radius:0 6px 0 0!important;\
            border-radius:0 6px 0 0!important;\
            -o-transition:opacity 0.3s ease-in-out;\
            -webkit-transition:opacity 0.3s ease-in-out;\
            -moz-transition:opacity 0.3s ease-in-out;\
        ";
      document.body.appendChild(div);
    }

    clearTimeout(noticeDivto);
    clearTimeout(noticeDivto2);
    noticeDiv.innerHTML = html_txt;
    noticeDiv.style.display = "block";
    noticeDiv.style.opacity = "0.96";

    if (showTime === undefined) {
      showTime = 1666;
    }

    if (showTime > 0) {
      noticeDivto2 = setTimeout(function () {
        noticeDiv.style.opacity = "0";
      }, showTime);
      noticeDivto = setTimeout(function () {
        noticeDiv.style.display = "none";
      }, showTime + 300);
    }
  } // create element with attribute


  function $C(type, atArr, inner, action, listen) {
    var e = document.createElement(type);

    for (var at in atArr) {
      if (atArr.hasOwnProperty(at)) {
        e.setAttribute(at, atArr[at]);
      }
    }

    if (action && listen) {
      e.addEventListener(action, listen, false);
    }

    if (inner) {
      e.innerHTML = inner;
    }

    return e;
  } // set multiple attributes for a dom element


  function setAttributes(el, attrs) {
    for (var key in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, key)) {
        el.setAttribute(key, attrs[key]);
      }
    }
  } // css 获取单个元素


  function getElementByCSS(css, contextNode) {
    return (contextNode || document).querySelector(css);
  } // css 获取所有元素


  function getAllElementsByCSS(css, contextNode) {
    return (contextNode || document).querySelectorAll(css);
  } // xpath 获取单个元素


  function getElementByXpath(xpath, contextNode, doc) {
    doc = doc || document;
    contextNode = contextNode || doc;

    try {
      var result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return result.singleNodeValue;
    } catch (err) {
      logger.error(`Invalid xpath: ${xpath}`);
      return undefined;
    }
  } // xpath 获取多个元素.


  function getAllElementsByXpath(xpath, contextNode, doc) {
    doc = doc || document;
    contextNode = contextNode || doc;
    return doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  } // 获取多个元素


  function getAllElements(selector, contextNode, doc, win, _cplink) {
    var ret = [];
    if (!selector) return ret;
    var Eles;
    doc = doc || document;
    win = win || window;
    _cplink = _cplink || undefined;
    contextNode = contextNode || doc;

    if (typeof selector === "string") {
      if (selector.search(/^css;/i) === 0) {
        Eles = getAllElementsByCSS(selector.slice(4), contextNode);
      } else {
        Eles = getAllElementsByXpath(selector, contextNode, doc);
      }
    } else {
      Eles = selector(doc, win, _cplink);
      if (!Eles) return ret;

      if (Eles.nodeType) {
        // 单个元素.
        ret[0] = Eles;
        return ret;
      }
    }

    function unique(array) {
      // 数组去重并且保持数组顺序.
      var i, ca, ca2, j;

      for (i = 0; i < array.length; i++) {
        ca = array[i];

        for (j = i + 1; j < array.length; j++) {
          ca2 = array[j];

          if (ca2 == ca) {
            array.splice(j, 1);
            j--;
          }
        }
      }

      return array;
    }

    function makeArray(x) {
      var ret = [];
      var i, ii;
      var x_x;

      if (x.pop) {
        // 普通的 array
        for (i = 0, ii = x.length; i < ii; i++) {
          x_x = x[i];

          if (x_x) {
            if (x_x.nodeType) {
              // 普通类型,直接放进去.
              ret.push(x_x);
            } else {
              ret = ret.concat(makeArray(x_x)); // 嵌套的.
            }
          }
        } // alert(ret)


        return unique(ret);
      } else if (x.item) {
        // nodelist or HTMLcollection
        i = x.length;

        while (i) {
          ret[--i] = x[i];
        }
        /*
                for(i=0,ii=x.length;i<ii;i++){
                    ret.push(x[i]);
                };
                */


        return ret;
      } else if (x.iterateNext) {
        // XPathResult
        i = x.snapshotLength;

        while (i) {
          ret[--i] = x.snapshotItem(i);
        }
        /*
                for(i=0,ii=x.snapshotLength;i<ii;i++){
                    ret.push(x.snapshotItem(i));
                };
                */


        return ret;
      }
    }

    return makeArray(Eles);
  } // 获取最后一个元素.


  function getLastElement(selector, _cplink, contextNode, doc, win) {
    var eles = getAllElements(selector, contextNode, doc, win, _cplink);
    var l = eles.length;

    if (l > 0) {
      return eles[l - 1];
    }
  }

  function saveValue(key, value) {
    localStorage.setItem(key, encodeURIComponent(value));
  }

  function getValue(key) {
    var value = localStorage.getItem(key);
    return value ? decodeURIComponent(value) : undefined;
  }

  function createDocumentByString(str) {
    // string转为DOM
    if (!str) {
      logger.error("没有找到要转成DOM的字符串");
      return;
    }

    if (document.documentElement.nodeName != "HTML") {
      return new DOMParser().parseFromString(str, "application/xhtml+xml");
    }

    var doc;

    try {
      // firefox and chrome 30+，Opera 12 会报错
      doc = new DOMParser().parseFromString(str, "text/html");
    } catch (ex) {}

    if (doc) {
      return doc;
    }

    if (document.implementation.createHTMLDocument) {
      doc = document.implementation.createHTMLDocument("superPreloader");
    } else {
      try {
        doc = document.cloneNode(false);
        doc.appendChild(doc.importNode(document.documentElement, false));
        doc.documentElement.appendChild(doc.createElement("head"));
        doc.documentElement.appendChild(doc.createElement("body"));
      } catch (e) {}
    }

    if (!doc) return;
    var range = document.createRange();
    range.selectNodeContents(document.body);
    var fragment = range.createContextualFragment(str);
    doc.body.appendChild(fragment);
    var headChildNames = {
      TITLE: true,
      META: true,
      LINK: true,
      STYLE: true,
      BASE: true
    };
    var child;
    var body = doc.body;
    var bchilds = body.childNodes;

    for (var i = bchilds.length - 1; i >= 0; i--) {
      // 移除head的子元素
      child = bchilds[i];
      if (headChildNames[child.nodeName]) body.removeChild(child);
    }

    return doc;
  } // 从相对路径的a.href获取完全的href值.


  function getFullHref(href) {
    if (typeof href !== "string") href = href.getAttribute("href"); // alert(href);
    // if(href.search(/^https?:/)==0)return href;//http打头,不一定就是完整的href;

    var a = getFullHref.a;

    if (!a) {
      getFullHref.a = a = document.createElement("a");
    }

    a.href = href; // alert(a.href);

    return a.href;
  } // 任何转成字符串，存储，修改过


  function xToString(x) {
    function toStr(x) {
      switch (typeof x) {
        case "undefined":
          return Str(x);

        case "boolean":
          return Str(x);

        case "number":
          return Str(x);

        case "string":
          return '"' + x.replace(/(?:\r\n|\n|\r|\t|\\|\")/g, function (a) {
            var ret;

            switch (a // 转成字面量
            ) {
              case "\r\n":
                ret = "\\r\\n";
                break;

              case "\n":
                ret = "\\n";
                break;

              case "\r":
                ret = "\\r";
                break;

              case "\t":
                ret = "\\t";
                break;

              case "\\":
                ret = "\\\\";
                break;

              case '"':
                ret = '\\"';
                break;

              default:
                break;
            }

            return ret;
          }) + '"';

        case "function":
          {
            var fnStr = Str(x);
            return fnStr.indexOf("native code") == -1 ? fnStr : "function(){}";
          }

        case "object":
          // 注,object的除了单纯{},其他的对象的属性会造成丢失..
          if (x === null) {
            return Str(x);
          }

          var rStr = "";
          var i;

          switch (x.constructor.name) {
            case "Object":
              for (i in x) {
                if (!x.hasOwnProperty(i)) {
                  // 去掉原型链上的属性.
                  continue;
                }

                rStr += toStr(i) + ":" + toStr(x[i]) + ",";
              }

              return "{" + rStr.replace(/,$/i, "") + "}";

            case "Array":
              for (i in x) {
                if (!x.hasOwnProperty(i)) {
                  // 去掉原型链上的属性.
                  continue;
                }

                rStr += toStr(x[i]) + ",";
              }

              return "[" + rStr.replace(/,$/i, "") + "]";

            case "String":
              return toStr(Str(x));

            case "RegExp":
              return Str(x);

            case "Number":
              return Str(x);

            case "Boolean":
              return Str(x);

            default:
              // alert(x.constructor);//漏了什么类型么?
              break;
          }

          break;

        default:
          break;
      }
    }

    var Str = String;
    return toStr(x);
  }

  function toRE(obj) {
    if (obj instanceof RegExp) {
      return obj;
    } else if (obj instanceof Array) {
      return new RegExp(obj[0], obj[1]);
    } else {
      if (obj.search(/^wildc;/i) === 0) {
        obj = wildcardToRegExpStr(obj.slice(6));
      }

      return new RegExp(obj);
    }
  }

  function wildcardToRegExpStr(urlstr) {
    if (urlstr.source) return urlstr.source;
    var reg = urlstr.replace(/[()\[\]{}|+.,^$?\\]/g, "\\$&").replace(/\*+/g, function (str) {
      return str === "*" ? ".*" : "[^/]*";
    });
    return "^" + reg + "$";
  }

  function getAllIndexes(arr, val) {
    var indexes = [];
    var i = -1;

    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i);
    }

    return indexes;
  }

  function getDomain(cplink) {
    // Get [PROTOCOL]://[DOMAIN]
    var a = getAllIndexes(cplink, "/");

    if (a.length > 2) {
      return cplink.substr(0, a[2]);
    } else {
      return cplink;
    }
  }

  function assignMissingProperty(a, b) {
    var hasMissing = false;

    for (var prop in a) {
      if (!b.hasOwnProperty(prop)) {
        hasMissing = true;
        b[prop] = a[prop];
      }
    }

    return hasMissing;
  }

  function i8n() {
    if (userLang.indexOf("zh") !== -1 || prefs.ChineseUI) {
      return "zh_CN";
    } else {
      return "en_US";
    }
  } //Function to compare two version strings https://gist.github.com/TheDistantSea/8021359


  function versionCompare(v1, v2, options) {
    var lexicographical = options && options.lexicographical,
        zeroExtend = options && options.zeroExtend,
        v1parts = v1.split("."),
        v2parts = v2.split(".");

    function isValidPart(x) {
      return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
      return NaN;
    }

    if (zeroExtend) {
      while (v1parts.length < v2parts.length) {
        v1parts.push("0");
      }

      while (v2parts.length < v1parts.length) {
        v2parts.push("0");
      }
    }

    if (!lexicographical) {
      v1parts = v1parts.map(Number);
      v2parts = v2parts.map(Number);
    }

    for (var i = 0; i < v1parts.length; ++i) {
      if (v2parts.length == i) {
        return 1;
      }

      if (v1parts[i] == v2parts[i]) {
        continue;
      } else if (v1parts[i] > v2parts[i]) {
        return 1;
      } else {
        return -1;
      }
    }

    if (v1parts.length != v2parts.length) {
      return -1;
    }

    return 0;
  }

  function emoji(unifiedValue) {
    if (String.fromCodePoint) {
      var emoji = parseInt(unifiedValue, 16);
      return String.fromCodePoint(emoji);
    } else {
      logger.error("Shame on your browser!");
      return "";
    }
  } // https://gist.github.com/cking/aa1787207596261eaf69d79d983f6f49


  function shim_GM_notification() {
    if (typeof GM_notification === "function") {
      return;
    }

    window.GM_notification = function (ntcOptions) {
      checkPermission();

      function checkPermission() {
        if (Notification.permission === "granted") {
          fireNotice();
        } else if (Notification.permission === "denied") {
          alert("User has denied notifications for this page/site!"); // eslint-disable-next-line no-useless-return

          return;
        } else {
          // eslint-disable-next-line compat/compat
          Notification.requestPermission(function (permission) {
            console.log("New permission: ", permission);
            checkPermission();
          });
        }
      }

      function fireNotice() {
        if (!ntcOptions.title) {
          console.log("Title is required for notification");
          return;
        }

        if (ntcOptions.text && !ntcOptions.body) {
          ntcOptions.body = ntcOptions.text;
        }

        var ntfctn = new Notification(ntcOptions.title, ntcOptions);

        if (ntcOptions.onclick) {
          ntfctn.onclick = ntcOptions.onclick;
        }

        if (ntcOptions.timeout) {
          setTimeout(function () {
            ntfctn.close();
          }, ntcOptions.timeout);
        }
      }
    };
  }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if ( true && !exports.nodeType) {
    if ( true && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(3)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__(5);

var adapter = __webpack_require__(32);

axios.defaults.adapter = adapter;
module.exports = axios;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);
var bind = __webpack_require__(8);
var Axios = __webpack_require__(10);
var mergeConfig = __webpack_require__(28);
var defaults = __webpack_require__(16);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(29);
axios.CancelToken = __webpack_require__(30);
axios.isCancel = __webpack_require__(15);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(31);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8);
var isBuffer = __webpack_require__(9);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);
var buildURL = __webpack_require__(11);
var InterceptorManager = __webpack_require__(12);
var dispatchRequest = __webpack_require__(13);
var mergeConfig = __webpack_require__(28);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);
var transformData = __webpack_require__(14);
var isCancel = __webpack_require__(15);
var defaults = __webpack_require__(16);
var isAbsoluteURL = __webpack_require__(26);
var combineURLs = __webpack_require__(27);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(7);
var normalizeHeaderName = __webpack_require__(18);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(19);
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(19);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);
var settle = __webpack_require__(20);
var buildURL = __webpack_require__(11);
var parseHeaders = __webpack_require__(23);
var isURLSameOrigin = __webpack_require__(24);
var createError = __webpack_require__(21);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(25);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(21);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(22);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(29);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// 'use strict'
// modified from https://github.com/Trim21/axios-userscript-adapter
var _require = __webpack_require__(7),
    isFormData = _require.isFormData;

var settle = __webpack_require__(20);

var buildURL = __webpack_require__(11);

var parseHeaders = __webpack_require__(23);

var createError = __webpack_require__(21);

var btoa;

if (typeof btoa === "undefined") {
  btoa = function btoa(x) {
    return Buffer.from(x).toString("base64");
  };
}
/**
 *
 * @param {Object} config
 * @return {Promise<any>}
 */


module.exports = function (config) {
  return new Promise(function (resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (requestData === undefined) {
      requestData = null; // Remove Content-Type if data is undefined

      [].forEach.call(requestHeaders, function (val, key) {
        if (key.toLowerCase() === "content-type") {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        }
      });
    } else if (isFormData(requestData)) {
      delete requestHeaders["Content-Type"]; // Let the browser set it
    } // HTTP basic authentication


    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password || "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    } // No cache cache


    if (config.hasOwnProperty("nocache") && config.nocache === true) {
      if (config.hasOwnProperty("params")) {
        config.params.timestamp = new Date().getTime();
      } else {
        config.params = {
          timestamp: new Date().getTime()
        };
      }
    } // Send the request
    // Listen for ready state


    var onload = function onload(resp) {
      // Prepare the response
      var responseHeaders = "responseHeaders" in resp ? parseHeaders(resp.responseHeaders) : null;
      var responseData = !config.responseType || config.responseType === "text" ? resp.responseText : resp.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: resp.status === 1223 ? 204 : resp.status,
        statusText: resp.status === 1223 ? "No Content" : resp.statusText,
        headers: responseHeaders,
        config: config,
        request: null
      };
      settle(resolve, reject, response);
    };

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        reject(cancel); // Clean up request
      });
    }

    GM.xmlHttpRequest({
      method: config.method.toUpperCase(),
      url: buildURL(config.url, config.params, config.paramsSerializer),
      headers: requestHeaders,
      data: requestData,
      timeout: config.timeout,
      ontimeout: function ontimeout() {
        reject(createError("timeout of " + config.timeout + "ms exceeded", config, "ECONNABORTED"));
      },
      onload: onload,
      onerror: function onerror() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError("Network Error", config));
      }
    });
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33).Buffer))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(34)
var ieee754 = __webpack_require__(35)
var isArray = __webpack_require__(36)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var addStyle = function addStyle(aCss, aId, doc) {
  doc = doc || document;
  var head = doc.getElementsByTagName("head");

  if (!head) {
    head = doc.documentElement;
  } else {
    head = head[0];
  }

  var style = doc.createElement("style");

  if (aId) {
    style.setAttribute("id", aId);
  }

  style.setAttribute("type", "text/css");
  style.textContent = aCss;

  if (head) {
    return head.appendChild(style);
  } else {
    return null;
  }
};

module.exports = {
  addStyle
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _ = __webpack_require__(1);

var BROWSER_LEVEL = {
  DEBUG: 0,
  INFO: 1,
  LOG: 2,
  WARN: 3,
  ERROR: 4
};
var LEVEL_NUM = Object.keys(BROWSER_LEVEL).map(function (x) {
  return BROWSER_LEVEL[x];
});
var PREFIX = "[Super-preloader]";
var PREFIX_STYLE = "color:#02A9DE";

var logFormat = function logFormat() {
  var str = [`%c${PREFIX}`];
  var extra = [PREFIX_STYLE];

  var stylish = function stylish(e) {
    if (_.isString(e)) {
      return ["%c%s", ""];
    } else {
      return ["%c%o", ""];
    }
  };

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var e = _args[_i];

    var _stylish = stylish(e),
        _stylish2 = _slicedToArray(_stylish, 2),
        a = _stylish2[0],
        b = _stylish2[1];

    str.push(a);
    extra.push(b);
    extra.push(e);
  }

  return [str.join(" "), ...extra];
};

var logger = {
  levels: BROWSER_LEVEL,
  loglevel: BROWSER_LEVEL.WARN,

  enableDebug() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (i) {
      this.loglevel = BROWSER_LEVEL.DEBUG;
    }
  },

  getLevel() {
    return this.loglevel;
  },

  setLevel(i) {
    if (_.isNumber(i)) {
      this.loglevel = i;
    } else if (_.isString(i) && Object.keys(BROWSER_LEVEL).includes(i.toUpperCase())) {
      this.loglevel = BROWSER_LEVEL[i.toUpperCase()];
    } else {
      this.loglevel = BROWSER_LEVEL.WARN;
    }
  },

  _log: function _log(level) {
    if (level >= this.loglevel) {
      return console[Object.keys(BROWSER_LEVEL)[LEVEL_NUM.indexOf(level)].toLowerCase()];
    } else {
      return function () {}; // empty function
    }
  }
};
Object.keys(BROWSER_LEVEL).forEach(function (key) {
  logger[key.toLowerCase()] = function () {
    this._log(BROWSER_LEVEL[key]).apply(console, logFormat(...arguments));
  };
});
module.exports = logger;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var pkg = __webpack_require__(40); // Information of script


var now = new Date();
var SCRIPT_INFO = {
  name: "Super_preloaderPlus_one_New",
  shortname: "Super-preloader",
  "name-CN": "Super_preloaderPlus_one_改",
  namespace: "https://github.com/machsix",
  icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==",
  author: pkg.author,
  version: pkg.version,
  license: pkg.license,
  changelog: "Webpack",
  greasyfork: "https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new",
  updateTime: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`,
  homepageURL: "https://github.com/machsix/Super-preloader"
};
SCRIPT_INFO.downloadURL = `${SCRIPT_INFO.greasyfork}/code/${SCRIPT_INFO.name}.user.js`;
SCRIPT_INFO.metaURL = `${SCRIPT_INFO.greasyfork}/code/${SCRIPT_INFO.name}.meta.js`; // New notification to send

var NOTIFICATION = {
  text: {
    zh_CN: "感谢首位捐助者 loveqianool o(*￣▽￣*)ブ",
    en_US: "Thanks to the first donor: loveqianool!"
  },
  title: SCRIPT_INFO.name,
  image: SCRIPT_INFO.icon,
  onload: function onload() {},
  // eslint-disable-next-line no-unused-vars
  show: function show(oldversion) {
    return false;
  }
}; // Meta for userscript

var METADATA = `// ==UserScript==
// @name         ${SCRIPT_INFO.name}
// @name:zh-CN   ${SCRIPT_INFO["name-CN"]}
// @name:zh-TW   ${SCRIPT_INFO["name-CN"]}
// @namespace    ${SCRIPT_INFO.namespace}
// @description  Preload and Autopager
// @description:zh-CN  预读+翻页..全加速你的浏览体验
// @description:zh-TW  预读+翻页..全加速你的浏览体验
// @author       ${SCRIPT_INFO.author}
// @contributers YFdyh000, suchunchen
// @thanksto     ywzhaiqi, NLF
// @version      ${SCRIPT_INFO.version}
// @license      ${SCRIPT_INFO.license}
// @update       ${SCRIPT_INFO.updateTime}
// @homepageURL  ${SCRIPT_INFO.homepageURL}
// @supportURL   ${SCRIPT_INFO.greasyfork}/feedback
// @contributionURL https://ko-fi.com/machsix
// @icon         ${SCRIPT_INFO.icon}
// @require      https://greasyfork.org/scripts/373124-gm4-polyfill-mach6-legacy/code/gm4-polyfill-mach6-legacy.js?version=635792
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.info
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @connect      wedata.net
// @connect      github.io
// @include      http*
// @exclude      http*://mail.google.com/*
// @exclude      http*://maps.google*
// @exclude      http*://www.google.com/reader*
// @exclude      http*://www.google.com/calendar*
// @exclude      https://docs.google.com/*
// @exclude      http*://app.yinxiang.com/*
// @exclude      http*://www.dropbox.com/*
// @exclude      http*://www.toodledo.com/*
// @exclude      http://cloud.feedly.com/*
// @exclude      http://weibo.com/*
// @exclude      http://w.qq.com/*
// @exclude      http://web2.qq.com/*
// @exclude      http://openapi.qzone.qq.com/*
// @exclude      http://*cloud.vip.xunlei.com/*
// @exclude      http*://www.wumii.com/*
// @exclude      http://pan.baidu.com/*
// @exclude      http://yun.baidu.com/*
// @exclude      http://www.cnbeta.com/*
// @exclude      http://www.youku.com/
// @exclude      http://v.youku.com/*
// @exclude      http://www.iqiyi.com/*
// @exclude      http://www.duokan.com/reader/*
// @exclude      https://www.kohls.com/*
// @exclude      http://list.jd.com/*
// @exclude      http*://eclick.baidu.com/*
// @exclude      http*://googleads.g.doubleclick.net/*
// @exclude      http*://pos.baidu.com/*
// @exclude      http*://tpc.googlesyndication.com/*
// @exclude      http*://ad.doubleclick.net/*
// @exclude      http*://ad.agrantsem.com/*
// ==/UserScript==
`;
module.exports = {
  SCRIPT_INFO,
  NOTIFICATION,
  METADATA
};

/***/ }),
/* 40 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"super-preloader\",\"version\":\"6.6.83\",\"description\":\"Super-preloader\",\"main\":\"dist/Super_preloaderPlus_one_New.user.js\",\"author\":\"Mach6\",\"license\":\"GPL-3.0\",\"bugs\":{\"url\":\"https://github.com/machsix/Super-preloader/issues\"},\"homepage\":\"https://github.com/machsix/Super-preloader\",\"directories\":{\"doc\":\"docs\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/machsix/Super-preloader.git\"},\"scripts\":{\"lint\":\"eslint \\\"dist/*.json\\\" \\\"src/**/*.js\\\" \\\".ci/*.js\\\"\",\"format\":\"prettier --ignore-path=.eslintignore --write \\\"dist/*.json\\\" \\\"src/**.js\\\" \\\".ci/*.js\\\" \\\"docs/**/*.{js,md}\\\"\",\"format:check\":\"prettier --ignore-path=.eslintignore --check \\\"dist/*.json\\\" \\\"src/**.js\\\" \\\".ci/*.js\\\" \\\"docs/**/*.{js,md}\\\"\",\"format:staged\":\"pretty-quick --staged --ignore-path=.eslintignore --write \\\"dist/*.json\\\" \\\"src/**.js\\\" \\\".ci/*.js\\\" \\\"docs/**/*.{js,md}\\\"\",\"test\":\"npm run lint && npm run format:staged\",\"dev\":\"webpack-dev-server --color\",\"build\":\"webpack\",\"preversion\":\"npm run test\",\"version\":\"npm run build  && git add dist/*.js\",\"postversion\":\"git add package.json package-lock.json\",\"docs:dev\":\"vuepress dev docs\",\"docs:build\":\"vuepress build docs\",\"docs:publish\":\"npm run docs:build && .ci/gen_ghpage.sh\"},\"husky\":{\"hooks\":{\"pre-commit\":\"npm --no-git-tag-version version patch\"}},\"_moduleAliases\":{\"@\":\"src/lib\"},\"keywords\":[\"userscript\"],\"devDependencies\":{\"vuepress\":\"1.2.0\",\"@vuepress/plugin-back-to-top\":\"1.0.4\",\"@vuepress/plugin-google-analytics\":\"1.2.0\",\"@vuepress/plugin-pwa\":\"1.0.4\"},\"dependencies\":{\"@babel/core\":\"^7.6.4\",\"@babel/preset-env\":\"^7.6.3\",\"axios\":\"^0.19.0\",\"babel-eslint\":\"^10.0.3\",\"babel-loader\":\"^8.0.6\",\"eslint\":\"^6.6.0\",\"eslint-config-prettier\":\"6.2.0\",\"eslint-plugin-compat\":\"3.3.0\",\"eslint-plugin-json\":\"1.4.0\",\"eslint-plugin-prettier\":\"3.1.0\",\"husky\":\"3.0.9\",\"prettier\":\"1.18.2\",\"pretty-quick\":\"1.11.1\",\"underscore\":\"^1.9.1\",\"webpack\":\"^4.41.2\",\"webpack-cli\":\"^3.3.10\",\"webpack-dev-server\":\"^3.9.0\",\"webpack-inject-plugin\":\"^1.5.3\"}}");

/***/ })
/******/ ]);