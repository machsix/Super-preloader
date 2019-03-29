/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable no-console */
// ==UserScript==
// @name         Super_preloaderPlus_one_New
// @name:zh-CN   Super_preloaderPlus_one_改
// @name:zh-TW   Super_preloaderPlus_one_改
// @namespace    https://github.com/machsix
// @description  Preload and Autopager
// @description:zh-cn  预读+翻页..全加速你的浏览体验
// @description:zh-TW  预读+翻页..全加速你的浏览体验
// @author       Mach6
// @version      6.6.24
// @license      GNU GPL v3
// @homepageURL  https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new
// @supportURL   https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new/feedback
// @icon         https://raw.githubusercontent.com/machsix/Super-preloader/master/icon.png
// @require      https://greasyfork.org/scripts/373124-gm4-polyfill-mach6-legacy/code/gm4-polyfill-mach6-legacy.js?version=635792
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
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

// ==/UserScript==
(function () {
  const scriptInfo = {
    version: '6.6.24',
    updateTime: '2019/3/29',
    changelog: 'Improve UI',
    homepageURL: 'https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new',
    downloadUrl: 'https://greasyfork.org/scripts/33522-super-preloaderplus-one-new/code/Super_preloaderPlus_one_New.user.js',
    metaUrl: 'https://greasyfork.org/scripts/33522-super-preloaderplus-one-new/code/Super_preloaderPlus_one_New.meta.js',
  };

  // ----------------------------------
  // rule.js

  if (window.name === 'mynovelreader-iframe') {
    return;
  }

  // Website which has script to change window name
  const ChangeIframeSites = [
    /^https?:\/\/www\.930mh\.com/i
  ];

  function CheckIframe () {
    for (var i = 0; i < ChangeIframeSites.length; i++) {
      if (toRE(ChangeIframeSites[i]).test(window.location.href)) {
        try {
          return window.self !== window.top;
        } catch (e) {
          return true;
        }
      }
    }
    if (window.name === 'superpreloader-iframe') { return true; } else { return false; }
  }

  // Website which uses lazyload feature [url, xpath, timeout]
  // the script does the following:
  //    1. wait for another timeout ms
  //    2. wait change of xpath

  const LazyLoadSites = [{
    url: /^https?:\/\/www\.flickr\.com\/photos\/[^\/]+\/favorites(?:[\/?#]|$)/i,
    // target of mutation
    target: '//div[@role="main"]/div[contains(@class,"photo-list-view")]',
    mutationParser: function (mutation, ncheck) {
      if (mutation.type == 'childList') {
        if (mutation.addedNodes) {
          for (var i = 0; i < mutation.addedNodes.length; i++) {
            if (mutation.addedNodes[i].className.indexOf('photo-view') != -1) {
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
  } ];

  // 如果是取出下一页使用的iframe window
  if (CheckIframe()) { // 搜狗,iframe里面怎么不加载js啊?
    // 去掉了原版的另一种方法，因为新版本 chrome 已经支持。旧版本 chrome iframe里面 无法访问window.parent,返回undefined
    const domloaded = function () { // 滚动到底部,针对,某些使用滚动事件加载图片的网站.
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
        var num_node_check = 0;
        // Callback function to execute when mutations are observed
        const callback = function (mutationsList, observer) {
          // console.log("First callback");
          for (var i = 0; i < mutationsList.length; i++) {
            num_node_check = LLS.mutationParser(mutationsList[i], num_node_check);
            //  console.log(num_node_check);
            if (num_node_check == LLS.node_check_time) {
              //    console.log("finish");
              observer.disconnect();
              window.parent.postMessage('superpreloader-iframe:DOMLoaded', '*');
            }
          }
        };
        const observer_lazyload = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        observer_lazyload.observe(targetNode, {
          childList: true
        });
        window.scroll(window.scrollX, 99999);
      } else {
        window.scroll(window.scrollX, 99999);
        window.parent.postMessage('superpreloader-iframe:DOMLoaded', '*');
      }
    };
    if (window.opera) {
      document.addEventListener('DOMContentLoaded', domloaded, false);
    } else {
      domloaded();
    }

    return;
  }

  /// //////////////////设置(请注意开关的缩进关系..子开关一般在父开关为true的时候才会生效.)//////////////////////
  const userLang = navigator.language || navigator.userLanguage;
  // (Default settings)
  const prefsFactory = {
    floatWindow: true, // 显示悬浮窗
    FW_position: 2, // 1:出现在左上角;2:出现在右上角;3：出现在右下角;4：出现在左下角;
    FW_offset: [20, 38], // 偏离版边的垂直和水平方向的数值..(单位:像素)
    FW_RAS: true, // 点击悬浮窗上的保存按钮..立即刷新页面;
    pauseA: true, // 快速停止自动翻页(当前模式为翻页模式的时候生效.);
    Pbutton: [2, 0, 0], // 需要按住的键.....0: 不按住任何键;1: shift鍵;2: ctrl鍵; 3: alt鍵;(同时按3个键.就填 1 2 3)(一个都不按.就填 0 0 0)
    mouseA: true, // 按住鼠标左键..否则.双击;
    Atimeout: 200, // 按住左键时..延时.多少生效..(单位:毫秒);
    stop_ipage: true, // 如果在连续翻页过程中暂停.重新启用后.不在继续..连续翻页..

    Aplus: true, // 自动翻页模式的时候..提前预读好一页..就是翻完第1页,立马预读第2页,翻完第2页,立马预读第3页..(大幅加快翻页快感-_-!!)(建议开启)..
    sepP: true, // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候是否保持相对位置..
    sepT: true, // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候使用动画过渡..
    s_method: 3, // 动画方式 0-10 一种11种动画效果..自己试试吧
    s_ease: 2, // 淡入淡出效果 0：淡入 1：淡出 2：淡入淡出
    s_FPS: 60, // 帧速.(单位:帧/秒)
    s_duration: 333, // 动画持续时长.(单位:毫秒);
    someValue: '', // 显示在翻页导航最右边的一个小句子..-_-!!..Powered by Super_preloader 隐藏了
    DisableI: true, // 只在顶层窗口加载JS..提升性能..如果开启了这项,那么DIExclude数组有效,里面的网页即使不在顶层窗口也会加载....
    arrowKeyPage: false, // 允许使用 左右方向键 翻页..
    sepStartN: 2, // 翻页导航上的,从几开始计数.(貌似有人在意这个,所以弄个开关出来,反正简单.-_-!!)

    // 新增或修改的
    forceTargetWindow: true, // 下一页的链接设置成在新标签页打开
    debug: false,
    enableHistory: true, // 把下一页链接添加到历史记录
    autoGetPreLink: false, // 一开始不自动查找上一页链接，改为调用时再查找
    excludes: '',
    custom_siteinfo: '[]',
    lazyImgSrc: 'zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder',
    ChineseUI: false,
    dblclick_pause: false,
    factoryCheck: true
  };
  var prefs = prefsFactory;

  /// ///////////////////////---------------规则-------////////////////
  // 高级规则的一些默认设置..如果你不知道是什么..请务必不要修改(删除)它.此修改会影响到所有高级规则...
  // (Default settings)
  var SITEINFO_D = {
    enable: true, // 启用
    useiframe: false, // (预读)是否使用iframe..
    viewcontent: false, // 查看预读的内容,显示在页面的最下方.
    autopager: {
      enable: true, // 启用自动翻页...
      force_enable: false, // 默认启用强制拼接
      manualA: false, // 手动翻页.
      useiframe: false, // (翻页)是否使用iframe..
      iloaded: false, // 是否在iframe完全load后操作..否则在DOM完成后操作
      itimeout: 0, // 延时多少毫秒后,在操作..
      newIframe: false,
      remain: 1, // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
      maxpage: 99, // 最多翻多少页..
      ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
      separator: true, // 显示翻页导航..(推荐显示.)
      separatorReal: true, // 显示真实的页数
      reload: false, // 强制重载iframe
      sandbox: false // Iframe sandbox 选项
    },
    numOfRule: 4308
  };

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
  const HashchangeSites = [{
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

  /// ///////////////////////---------------Rules-------------////////////////

  //  ///////// ----- Rules for specific sites -------///////////
  //  Highest priority
  var SITEINFO = [
    {
      // 站点名字...(可选)             // 站点正则...(~~必须~~)
      name: 'Google搜索',
      url: '^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp|search|#|$|\\?)',
      // url:'wildc;http://www.google.com.hk/search*',
      siteExample: 'http://www.google.com', // 站点实例...(可选)
      enable: true, // 启用.(总开关)(可选)
      useiframe: false, // 是否用iframe预读...(可选)
      // sandbox: "allow-forms allow-modals allow-same-origin allow-scripts";    //设置sandbox选项
      viewcontent: false,
      nextLink: 'id("pnnext") | id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a | id("nn")/parent::a',
      // 查看预读的内容,显示在页面的最下方.(可选)
      // nextLink:'auto;',
      // nextLink:'//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',              //下一页链接 xpath 或者 CSS选择器 或者 函数返回值(此函数必须使用第一个传入的参数作为document对象) (~~必选~~)
      // nextLink:'css;table#nav>tbody>tr>td.b:last-child>a',
      // nextLink:function(D,W){return D.evaluate('//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',D,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;},
      // 新增 Array 的格式，依次查找

      // preLink:'auto;',
      preLink: '//a[@id="pnprev"]',
      // preLink:'//table[@id="nav"]/descendant::a[1][parent::td[@class="b"]]',            //上一页链接 xpath 或者 CSS选择器 或者 函数返回值 (可选)
      autopager: {
        enable: true, // 启用(自动翻页)(可选)
        useiframe: false, // 是否使用iframe翻页(可选)
        iloaded: false, // 是否在iframe完全load之后操作..否则在DOM完成后操作.
        itimeout: 0, // 延时多少毫秒后,在操作..
        // reload: true,      // Force reload iframe when the src is changed
        newIframe: false, // 下一页使用新的 iframe，能解决按钮无法点击的问题
        pageElement: '//div[@id="ires"]', // 主体内容 xpath 或 CSS选择器 或函数返回值(~~必须~~)
        // pageElement:'css;div#ires',
        // pageElement:function(doc,win){return doc.getElementById('ires')},
        // filter:'//li[@class="g"]',                                                                        //(此项功能未完成)xpath 或 CSS选择器从匹配到的节点里面过滤掉符合的节点.
        remain: 1 / 3, // 剩余页面的高度..是显示高度的 remain 倍开始翻页(可选)
        relatedObj: ['css;div#navcnt', 'bottom'], // 以这个元素当做最底的元素,计算页面总高度的计算.(可选)
        replaceE: '//div[@id="navcnt"]', // 需要替换的部分 xpath或 CSS选择器 一般是页面的本来的翻页导航(可选);
        // replaceE:'css;div#navcnt',
        ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.(可选)
        separator: true, // 是否显示翻页导航(可选)
        separatorReal: true,
        maxpage: 66, // 最多翻页数量(可选)
        manualA: false, // 是否使用手动翻页.
        HT_insert: ['//div[@id="res"]', 2], // 插入方式此项为一个数组: [节点xpath或CSS选择器,插入方式(1：插入到给定节点之前;2：附加到给定节点的里面;)](可选);
        // HT_insert:['css;div#res',2],
        lazyImgSrc: 'imgsrc',
        // 新增的自定义样式。下面这个是调整 Google 下一页可能出现的图片排列问题。
        stylish: 'hr.rgsep{display:none;}' +
                    '.rg_meta{display:none}.bili{display:inline-block;margin:0 6px 6px 0;overflow:hidden;position:relative;vertical-align:top}._HG{margin-bottom:2px;margin-right:2px}',
        documentFilter: function (doc) {
          // 修正下一页的图片
          const x = doc.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', doc, null, 9, null).singleNodeValue;
          if (x) {
            try {
              new Function('document', 'window', 'google', x.nodeValue)(doc, unsafeWindow, unsafeWindow.google);
            } catch (e) {}
          }

          // 修正可能出现的 小箭头更多按钮 排版不正确的情况（2014-7-29）
          //                     var oClarelssName = window.document.querySelector('#ires .ab_button').className;
          //                     [].forEach.call(doc.querySelectorAll('#ires .ab_button'), function (elem) {
          //                         if (elem.className != oClassName)
          //                             elem.className = oClassName;
          //                     });
        },
        filter: function () { // 在添加内容到页面后运行

        },
        startFilter: function (win, doc) { // 只作用一次
          // 移除 Google 重定向
          const script = doc.createElement('script');
          script.type = 'text/javascript';
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
          doc.documentElement.removeChild(script);

          // 移动相关搜索到第一页
          const ins = doc.getElementById('ires');
          const bres = doc.getElementById('bres');
          const brs = doc.getElementById('brs');
          // var imagexbox = getElementByXpath('//*[@id="imagebox_bigimages"]//parent::div', doc, doc);
          // var rso = doc.getElementById('rso');
          if (ins) {
            if (bres) {
              ins.appendChild(bres);
            }
            if (brs) {
              ins.appendChild(brs);
            }
          }
          // if (rso && imagexbox) {
          // rso.appendChild(imagexbox);
          // }
        }
      }
    },
    {
      name: '百度搜索',
      url: '^https?://www\\.baidu\\.com/',
      // 由于 Super_preloader 默认去掉了 # 后面部分
      // url: "^https?://www\\.baidu\\.com/(s|baidu|#wd=)",
      enable: true,
      nextLink: '//div[@id="page"]/a[contains(text(),"下一页")][@href]',
      preLink: '//div[@id="page"]/a[contains(text(),"上一页")][@href]',
      autopager: {
        pageElement: 'css;div#content_left > *',
        HT_insert: ['css;div#content_left', 2],
        replaceE: 'css;#page',
        stylish: '.autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}',
        startFilter: function (win) {
          // 设置百度搜索类型为 s?wd=
          try {
            win.document.cookie = 'ISSW=1';
          } catch (ex) {}
        }
      }
    },
    {
      name: '百度搜索-手机',
      url: /^https?:\/\/m\.baidu\.com/i,
      enable: true,
      nextLink: '//div[@id="page-controller"]//a[contains(@class,"new-nextpage")]',
      preLink: '//div[@id="page-controller"]//a[contains(@class,"new-prepage")]',
      autopager: {
        pageElement: '//div[@id="results"]',
        useiframe: true,
        relatedObj: true
      }
    },
    {
      name: '百度搜索 - baidulocal',
      url: '^https?://www\\.baidu\\.com/s.*&tn=baidulocal',
      nextLink: '//a[font[text()="下一页"]]',
      pageElement: '//table[@width="100%" and @border="0"]/tbody/tr/td/ol',
      exampleUrl: 'http://www.baidu.com/s?wd=firefox&rsv_spt=1&issp=1&rsv_bp=0&ie=utf-8&tn=baidulocal&inputT=1364'
    },
    {
      name: '360搜索',
      url: '^https?://www\\.so\\.com/s',
      nextLink: '//div[@id="page"]/a[text()="下一页>"] | id("snext")',
      autopager: {
        pageElement: '//div[@id="container"]',
        stylish: '.autopagerize_page_info, div.sp-separator { margin-bottom: 20px !important; }'
      }
    },
    {
      name: '搜狗搜索',
      url: /^https?:\/\/www\.sogou\.com\/(?:web|sogou)/i,
      siteExample: 'http://www.sogou.com',
      enable: true,
      nextLink: '//div[@id="pagebar_container"]/a[@id="sogou_next"]',
      autopager: {
        pageElement: '//div[@class="results"]',
        replaceE: 'id("pagebar_container")'
      }
    },
    {
      name: 'Bing网页搜索',
      url: '^https?://(?:www|cnweb|cn)\.bing\.com/(?:[^/]+/)*?(?:results\.aspx|search)',
      siteExample: 'bing.com/search?q=',
      nextLink: '//a[contains(@class,"sb_pagN")]',
      autopager: {
        pageElement: 'id("b_results")/li[not(contains(@class,"b_pag") or contains(@class,"b_ans b_top"))]',
        //pageElement: 'id("b_results")/li[@class="b_algo"]',
        replaceE: '//nav[@role="navigation"]',
        HT_insert: ['id("b_results")/li[@class="b_pag"]', 1],
        // startFilter: function (win, doc) { // 移动相关搜索到第一页
        //   var brs = doc.evaluate('id("b_results")/li[@class="b_ans"]').iterateNext();
        //   debug(brs);
        //   var ins = doc.getElementsByClassName('b_algo');
        //   ins = ins[ins.length - 1];
        //   debug(ins);
        //   if (brs && ins) {
        //     ins.appendChild(brs);
        //   }
        // }
      }
    },
    {
      name: 'AOL 搜索',
      url: /^https?:\/\/(www\.)?aolsearch.com\/search\?q=/i,
      siteExample: 'https://www.aolsearch.com/search?q=test',
      nextLink: '//div[@class="compPagination"]/a[@class="next"]',
      autopager: {
        pageElement: '//ol[contains(@class,"searchCenterMiddle")]'
      }
    },
    {
      name: 'Yahoo.com Search',
      url: '^https?://(.+\.)?(news\.)?(search|chiebukuro)?\.yahoo\.co(m|\.jp)/(yhs/)?search',
      nextLink: '//div[contains(@class,"Pagination")]/a[contains(@class,"next")]|//a[contains(span[2],">")]|//li[@class="nex"]/a',
      autopager: {
        pageElement: 'id("web resultsWrapper")/ol|//div[@class="searchCenterMiddle"]/div|id("WS2m NSm")/*|//ol[@class="cl"]/*|//div[contains(concat(" ", normalize-space(@class), " "), " cmm ") and @data-pos]',
        stylish: ' @-moz-document domain("yahoo.com") {     img.s-img {         display: inline-block !important;     };     .layoutleft a{padding:0;} ; }'
      },
      created_by: 'tokumeisan',
      resource_url: 'http://wedata.net/items/62707'
    },
    // ====== 目前 Super_preloaderPlus_one 还有问题的 ========
    {
      name: '水木社区',
      url: '^https?://www\\.newsmth\\.net/nForum',
      nextLink: '//a[@title="下一页"]',
      pageElement: '//div[@class="b-content"] | //div[@class="b-content corner"]',
      exampleUrl: 'http://www.newsmth.net/nForum/#!board/TouHou'
    },

    // =============== baidu 其它 ===========
    //     {name: '百度贴吧列表',
    //         url: /^https?:\/\/tieba\.baidu\.com\/f/i,
    //         nextLink: '//div[@id="frs_list_pager"]/a[last()-1]',
    //         preLink: '//a[@class="pre pagination-item "]',
    //         autopager: {
    //             enable: false,
    //             pageElement: '//ul[@id="thread_list"]',
    //             replaceE: '//div[@id="frs_list_pager"]',
    //             useiframe: true,
    //                 // newIframe: true,
    //                 iloaded: false,
    //             // lazyImgSrc: "bpic",
    //         }
    //     },
    {
      name: '百度贴吧帖子',
      url: /^https?:\/\/tieba\.baidu\.com\/p/i,
      siteExample: 'https://tieba.baidu.com/p/918674650',
      nextLink: '(//ul[@class="l_posts_num"])[2]/li/a[text()="下一页"]',
      preLink: '(//ul[@class="l_posts_num"])[2]/li/a[text()="上一页"]',
      autopager: {
        enable: true,
        pageElement: "id('j_p_postlist')", // "css;.l_post"
        replaceE: 'css;.l_posts_num > .l_pager'
        //  useiframe: true,
        // newIframe: true,
        //    iloaded: false
        // filter: function(pages){
        //     var pb = unsafeWindow.pb;
        //     pb.ForumListV3.initial();
        // }
      }
    },
    {
      name: '百度吧内搜索',
      url: /^https?:\/\/tieba\.baidu\.com\/f\/search/i,
      siteExample: 'http://tieba.baidu.com/f/search/',
      nextLink: 'auto;',
      pageElement: 'css;.s_post'
    },
    {
      name: '百度新闻搜索',
      url: '^https?://news\\.baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/ns',
      nextLink: 'id("page")/a[text()="下一页>"]',
      pageElement: 'id("content_left")'
    },
    {
      name: '百度知道',
      url: /^https?:\/\/zhidao\.baidu\.com\/search\?/i,
      siteExample: 'http://zhidao.baidu.com/search?pn=0&&rn=10&word=%BD%AD%C4%CFstyle',
      nextLink: 'auto;',
      pageElement: 'css;#wgt-list'
    },
    {
      name: '百度空间',
      url: '^https?://hi\\.baidu\\.com',
      nextLink: 'id("pagerBar")/div/a[@class="next"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@class="mod-realcontent mod-cs-contentblock"]'
      },
      exampleUrl: 'http://hi.baidu.com/gelida'
    },
    {
      name: '百度文库搜索',
      url: /^https?:\/\/wenku\.baidu\.com\/search\?/i,
      exampleUrl: 'http://wenku.baidu.com/search?word=firefox&lm=0&od=0&fr=top_home',
      nextLink: '//div[@class="page-content"]/a[@class="next"]',
      autopager: {
        pageElement: '//div[@class="search-result"]/dl'
      }
    },
    {
      name: 'smzdm-search',
      url: '^https?://search\\.smzdm\\.com/\\?c=',
      exampleUrl: 'http://search.smzdm.com/?c=post&s=%E7%A9%BA%E8%B0%83&v=b',
      // 添加了如下页面的匹配
      // exampleUrl: 'https://search.smzdm.com/?c=youhui&s=%E7%A9%BA%E8%B0%83',
      // exampleUrl: 'https://search.smzdm.com/?c=haitao&s=%E7%A9%BA%E8%B0%83',
      enable: true,
      nextLink: '//a[contains(text(),"下一页")][@href]',
      preLink: '//a[contains(text(),"上一页")][@href]',
      autopager: {
        pageElement: 'css;ul#feed-main-list >*',
        replaceE: 'css;#J_feed_pagenation',
      }
    },
    {
      name: 'smzdm-fenlei',
      url: /^https?:\/\/www\.smzdm\.com\/fenlei\//i,
      exampleUrl: 'https://www.smzdm.com/fenlei/shuiguo/',
      nextLink: '//li/a[text()="下一页"]',
      preLink: '//li/a[text()="上一页"]',
      autopager: {
        pageElement: '//li[@class="feed-row-wide"]',
      }
    },
    {
      name: 'smzdm-tag',
      url: /^https?:\/\/www\.smzdm\.com\/tag\//i,
      exampleUrl: 'https://www.smzdm.com/tag/%E5%8D%8A%E4%BB%B7%E7%89%B9%E6%83%A0/youhui/',
      nextLink: '//li/a[text()="下一页"]',
      preLink: '//li/a[text()="上一页"]',
      autopager: {
        pageElement: '//div[contains(@class,"list list_preferential")]',
      }
    },
    {
      name: 'smzdm-comment',
      url: /^https?:\/\/\w+\.smzdm\.com(\/\w+)?\/p\/[\d\w\W]+/i,
      exampleUrl: 'https://post.smzdm.com/p/559992/',
      // 还有另外一种评论
      // exampleUrl: 'https://www.smzdm.com/p/11496450/ | https://test.smzdm.com/pingce/p/70095121/',
      nextLink: '//ul[@class="pagination"]/li[@class="pagedown"]/a',
      autopager: {
        pageElement: 'id("commentTabBlockNew")/ul[@class="comment_listBox"]',
        replaceE: '(//ul[@class="pagination"])[1]',
        // 好好的一个页面非要弄出2个翻页器，干掉一个
        // 只执行一次
        startFilter: function (win, doc) {
          const firstDiv = doc.querySelector(".pagination");
          if (firstDiv) {
            firstDiv.parentNode.removeChild(firstDiv);
          }
        }
      }
    },
    {
      name: 'smzdm-值友评论',
      url: /^https?:\/\/zhiyou\.smzdm\.com\/member\/\d+\/pinglun/i,
      exampleUrl: 'https://zhiyou.smzdm.com/member/1823681945/pinglun/',
      nextLink: '//ul[@class="pagination"]/li[@class="pagedown"]/a',
      autopager: {
        pageElement: '//div[@class="infoPerBlock infoCommentBlock"]',
        replaceE: '(//ul[@class="pagination"])[1]',
      }
    },
    // ================ news、Reading ===========================
    {
      name: '新浪新闻',
      url: /^https?:\/\/[a-z]+\.sina\.com\.cn\//i,
      exampleUrl: 'http://news.sina.com.cn/c/sd/2013-11-08/165728658916.shtml',
      nextLink: '//p[@class="page"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="artibody"]',
        relatedObj: true
      }
    },
    {
      name: '搜狐新闻',
      url: /^https?:\/\/news\.sohu\.com\/.*\.shtml/i,
      exampleUrl: 'http://news.sohu.com/20120901/n352071543.shtml',
      nextLink: '//a[text()="下一页"]',
      autopager: {
        useiframe: true,
        pageElement: 'id("contentText")'
      }
    },
    {
      name: '新华网新闻页面',
      url: /^https?:\/\/www\.xinhuanet\.com\/(\w+\/)?\d{4}-\d{2}\/\d{2}\/.+\.html?/i,
      siteExample: 'http://www.xinhuanet.com/2018-04/07/c_1122646152.htm',
      nextLink: 'auto;',
      autopager: {
        remain: 2,
        pageElement: '//div[@id="p-detail"]/p'
      }
    },
    {
      name: '中国新闻网',
      url: /^https?:\/\/www\.chinanews\.com\/[a-z]+\/.+\.shtml/i,
      siteExample: 'http://www.chinanews.com/英文/年/日期/编号.shtml',
      nextLink: '//div[@id="function_code_page"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="left_zw"] | //div[@class="hd_photo"]',
        relatedObj: true,
        HT_insert: ['//div[@id="function_code_page"]', 1],
        filter: '//div[@id="function_code_page"]'
      }
    },
    {
      name: '人民网新闻',
      url: /^https?:\/\/[a-z]+\.people\.com\.cn\/.*\.html/i,
      exampleUrl: 'http://cpc.people.com.cn/xuexi/n/2015/0527/c387492-27065648-25.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="text_img"] | //div[@id="p_content"]|//dl[@class="clearfix"]',
        relatedObj: true
      }
    },
    {
      name: '中关村在线新闻页面',
      url: /^https?:\/\/(?:[^\.]+\.)?zol\.com\.cn\/\d+\/\d+/i,
      siteExample: 'http://lcd.zol.com.cn/187/1875145.html',
      nextLink: '//div[@class="page"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="cotent_idd" or @id="article-content"]',
        relatedObj: true,
        replaceE: 'css;.page'
      }
    },
    {
      name: 'FT中文网',
      url: /^https?:\/\/www\.ftchinese\.com\/story\//i,
      exampleUrl: 'http://www.ftchinese.com/story/001053472',
      nextLink: '//div[@class="pagination"]/a[text()="余下全文"]',
      autopager: {
        pageElement: '//div[@id="bodytext"]',
        relatedObj: true,
        replaceE: '//div[@class="pagination"]'
      }
    },
    {
      name: 'Solidot: 奇客的资讯，重要的东西',
      url: /^https?:\/\/www\.solidot\.org\//i,
      exampleUrl: 'http://www.solidot.org/?issue=20131205',
      nextLink: 'id("center")/div[@class="page"]/a[last()]',
      autopager: {
        pageElement: 'id("center")/div[@class="block_m"]',
        separatorReal: false
      }
    },
    // Fix till here
    {
      name: 'IT 之家',
      url: /^https?:\/\/\w+\.ithome\.com\//i,
      nextLink: 'id("Pager")/div[@class="pagenew"]/a[text()=">"]',
      autopager: {
        pageElement: 'id("wrapper")/div[@class="content fl"]/div[@class="cate_list" or @class="post_list"]/ul[@class="ulcl"]',
        replaceE: 'id("Pager")/div[@class="pagenew"]'
      }
    },
    {
      name: '虎嗅网',
      url: '^https?://www\\.huxiu\\.com/',
      nextLink: '//span[@class="next"]/a[text()=">"]',
      pageElement: '//div[@class="center-ctr-box"]'
    },
    {
      name: '36氪',
      url: '^https?://www\\.36kr\\.com/.+',
      nextLink: '//a[@rel="next"]',
      pageElement: 'id("mainContainer")/descendant::div[contains(concat(" ", @class, ""),"krContent")]'
    },
    {
      name: '爱范儿 · Beats of Bits - 发现创新价值的科技媒体',
      url: '^https?://www\\.ifanr\\.com/',
      nextLink: '//div[@class="content-nav"]/a[text()="下一页"]',
      pageElement: 'id("content")/div[contains(concat(" ", @class, ""), "main")]'
    },
    {
      name: '创业帮',
      url: /^https?:\/\/www\.cyzone\.cn\//i,
      exampleUrl: 'http://www.cyzone.cn/',
      nextLink: 'id("pages")/*[@class="current"]/following-sibling::a[1]',
      autopager: {
        pageElement: '//div[@class="left"]/div[starts-with(@class, "intere")]/ul[@class="list clearfix"]'
      }
    },
    {
      name: '萝卜网',
      url: /^https?:\/\/luo\.bo\//i,
      exampleUrl: 'http://luo.bo/',
      nextLink: '//div[@class="pagenavi"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="homeposts"]/ul[contains(@class, "explist homelist")] | //div[@class="container"]/div[@class="content"]',
        replaceE: '//div[@class="pagenavi"]'
      }
    },
    {
      name: '爱活网 Evolife.cn_科技进化生活',
      url: /^https?:\/\/[a-z]+\.evolife\.cn\//i,
      exampleUrl: 'http://go.evolife.cn/category/focus_121_1.html',
      nextLink: '//div[contains(@class, "pages")]/a[text()="下一页" or contains(text(), ">")]',
      autopager: {
        pageElement: '//div[@class="zuijingengxin"]/div[@class="zuijingengxin_box"] | //div[@class="zuijingengxin"]/div[@class="text"]',
        replaceE: 'css;.pages',
        relatedObj: true
      }
    },
    {
      name: '凤凰网 - 凤凰汽车',
      url: /^https?:\/\/auto\.ifeng\.com\/.*\.shtml/i,
      exampleUrl: 'http://auto.ifeng.com/youji/20131115/1003513.shtml',
      nextLink: '//div[@class="arl-pages"]/a[@class="next"]',
      autopager: {
        pageElement: '//div[starts-with(@class,"arl-mian")]/div/div[@class="arl-cont"]',
        relatedObj: true,
        replaceE: '//div[@class="arl-pages"]'
      }
    },
    {
      name: '凤凰网 - 新闻、财经',
      url: /^https?:\/\/\w+\.ifeng\.com\//i,
      exampleUrl: 'http://finance.ifeng.com/a/20131115/11089994_1.shtml',
      nextLink: '//a[@id="pagenext"] | //div[@class="next" or @class="fy"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="artical_real"] | //div[@class="content"]/div[@class="contentL"] | //div[@class="yib_left"]/div[@class="box_list"]',
        relatedObj: true,
        replaceE: 'id("artical")/div[@class="an"]/div[@class="next"] | //div[@class="yib_left"]/div[@class="fy"]'
      }
    },
    {
      name: '和讯财经微博',
      url: /^https?:\/\/t\.hexun\.com\/.*\.html/i,
      exampleUrl: 'http://t.hexun.com/21210301/default.html',
      nextLink: '//li[contains(@class, "nextbtn2")]/a[text()="下一页 >"]',
      autopager: {
        pageElement: '//div[@id="listWeibo"]',
        replaceE: '//div[@id="page2"]'
      }
    },
    {
      name: '和讯博客',
      url: /^https?:\/\/\w+\.blog\.hexun\.com\//i,
      exampleUrl: 'http://23802543.blog.hexun.com/',
      nextLink: function (doc) {
        var url = doc.querySelector('.PageSkip_1 a[title="下一页"]').getAttribute('href');
        url = url.replace(/(\/p\d+\/).*/, '$1default.html');
        return url;
      },
      autopager: {
        pageElement: 'id("DefaultContainer1_ArticleList_Panel1")'
      }
    },
    {
      name: '汽车之家',
      url: /^https?:\/\/www\.autohome\.com\.cn\/.*\.html/i,
      exampleUrl: 'http://www.autohome.com.cn/culture/201310/643479-7.html',
      nextLink: 'id("articlewrap")/div[@class="page"]/a[@class="page-item-next"]',
      autopager: {
        pageElement: 'id("articleContent")',
        relatedObj: true,
        replaceE: 'id("articlewrap")/div[@class="page"]'
      }
    },
    {
      name: '汽车之家论坛帖子和列表',
      url: /^https?:\/\/club\.autohome\.com\.cn\/bbs/i,
      siteExample: 'http://club.autohome.com.cn/bbs/forum-c-2313-1.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//dl[@class="list_dl "][@lang] | //div[@class="conmain"]'
      }
    },
    {
      name: '爱卡汽车',
      url: /^https?:\/\/yp\.xcar\.com\.cn\/.*\.html/i,
      exampleUrl: 'http://yp.xcar.com.cn/201311/news_1351064_1.html',
      nextLink: '//div[@class="article_page_bottom"]/a[@class="page_down"]',
      autopager: {
        pageElement: 'id("newsbody")',
        relatedObj: true,
        replaceE: '//div[@class="article_page_bottom"]'
      }
    },
    {
      name: '爱卡汽车论坛帖子',
      url: /^https?:\/\/www\.xcar\.com\.cn\/bbs\/viewthread/i,
      siteExample: 'http://www.xcar.com.cn/bbs/viewthread.php?tid=12474760',
      nextLink: '//a[text()="下一页＞"][@href]',
      autopager: {
        pageElement: '//form[@id="delpost"] | //div[@class="maintable"][@id="_img"]'
      }
    },
    {
      name: '新闻 - 加拿大华人网',
      url: /^https?:\/\/www\.sinonet\.org\/.*\.html/i,
      exampleUrl: 'http://www.sinonet.org/news/society/2013-11-15/301940.html',
      nextLink: '//p[@class="pageLink"]/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("zoom")',
        relatedObj: true
      }
    },
    {
      name: '美国中文网',
      url: /^https?:\/\/news\.sinovision\.net\/.*\.htm/i,
      exampleUrl: 'http://news.sinovision.net/politics/201401/00279206.htm',
      nextLink: '//div[@class="pg"]/a[@class="nxt"]',
      autopager: {
        pageElement: '//div[@class="d"]/table[@class="vwtb"]',
        replaceE: '//div[@class="pg"]',
        relatedObj: true
      }
    },
    {
      name: '火星网－中国领先的数字艺术门户',
      url: /^https?:\/\/news\.hxsd\.com\/.*\.html/i,
      exampleUrl: 'http://news.hxsd.com/CG-dynamic/201401/684528.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="news_content_left"]/div[@class="content"]'
      }
    },
    {
      name: '铁血网',
      url: /^https?:\/\/bbs\.tiexue\.net\/post.*\.html/i,
      exampleUrl: 'http://bbs.tiexue.net/post2_7969883_3.html',
      nextLink: '//div[@class="page"]/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("postContent")/div[@class="newconli2"]',
        relatedObj: true
      }
    },
    {
      name: '看天下',
      url: /^https?:\/\/www\.vistastory\.com\/.*\.html/i,
      exampleUrl: 'http://www.vistastory.com/a/201408/5395.html',
      nextLink: '//a[@class="cpnext"]',
      autopager: {
        pageElement: 'css;.arc_body'
      }
    },
    {
      name: '参政消息',
      url: '^https?://china\\.cankaoxiaoxi\\.com/.*\\.shtml',
      nextLink: 'id("next_page")',
      pageElement: 'id("ctrlfscont")',
      exampleUrl: 'http://china.cankaoxiaoxi.com/roll10/2014/0817/464381.shtml'
    },
    {
      name: '中国网山东频道',
      url: '^https?://sd\\.china\\.com\\.cn/.*\\.html',
      autopager: {
        pageElement: 'css;.content',
        relatedObj: true
      }
    },
    {
      name: '凯迪社区',
      url: '^https?://club\\.kdnet\\.net/list\\.asp',
      nextLink: 'auto;',
      pageElement: '//div[@class="lf w840px"]/div[@class="list-table"]/table',
      exampleUrl: 'http://club.kdnet.net/list.asp?t=0&boardid=1&selTimeLimit=0&action=&topicmode=0&s=&page=1'
    },
    {
      name: '木木文摘',
      url: '^https?://www\\.85nian\\.net/',
      nextLink: 'auto;',
      pageElement: 'css;.entry-content'
    },

    // --- 国外新闻
    {
      name: 'TouringCarTimes',
      url: /^https?:\/\/www\.touringcartimes\.com\/category\//i,
      nextLink: '//li[@class="bpn-next-link"]/a',
      autopager: {
        pageElement: '//div[@id="archive_page_wrapper"]'
      }
    },
    {
      name: 'tomshardware',
      url: /^https?:\/\/www\.tomshardware\.com\//i,
      exampleUrl: 'http://www.tomshardware.com/reviews/chrome-27-firefox-21-opera-next,3534-2.html',
      nextLink: '//li[@class="item icon active"]/following::a[1]',
      autopager: {
        pageElement: '//article[@id="news-content"]'
      }
    },

    // ========================= video =====================
    {
      name: '优酷视频',
      url: /^https?:\/\/(?:www|u|i|tv)\.youku\.com\//i,
      nextLink: '//a[@title="下一页"] | //li[@class="next"]/a[text()="下一页"] | //a[em/@class="ico_next"] | //a[span/@class="ico__pagenext"]',
      autopager: {
        pageElement: '//div[@id="list" or @id="listofficial"] | id("getVideoList") | id("imgType") | //div[@class="YK_main" or @class="mainCol"]/descendant::div[@class="items"] | div[@class="videos-list"]/div[@class="items"]'
      }
    },
    {
      name: '搜库-专找视频',
      url: /^https?:\/\/(so\.youku|www\.soku)\.com/i,
      nextLink: '//li[@class="next"]/a[@title="下一页"]',
      exampleUrl: 'http://www.soku.com/nt/search/q_55?f=1&kb=040200000000000__55',
      autopager: {
        pageElement: '//div[@class="sk-result-list"]|//div[@class="sk_result"]/div[@class="sk-vlist clearfix"]',
        useiframe: true,
        separatorReal: false
      }
    },
    {
      name: '爱奇艺',
      url: /^https?:\/\/(list|so)\.iqiyi\.com\//i,
      exampleUrl: 'http://list.iqiyi.com/, http://so.iqiyi.com/so/q_iqi?source=input&sr=70685231574',
      nextLink: '//div[@class="mod-page"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="wrapper-piclist"]/ul/li | //ul[@class="mod_result_list"]'
      }
    },
    {
      name: '搜狐视频 搜索',
      url: /^https?:\/\/so\.tv\.sohu\.com\/mts\?(box=1)?&wd=/i,
      exampleUrl: 'http://so.tv.sohu.com/mts?&wd=%u6211%u662F%u7279%u79CD%u5175%u4E4B%u706B%u51E4%u51F0',
      nextLink: '//div[contains(@class, "ssPages")]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[contains(@class,"ssList")]/ul'
      }
    },
    {
      name: '搜狐视频',
      url: /^https?:\/\/so\.tv\.sohu\.com\/list/i,
      exampleUrl: 'http://so.tv.sohu.com/list_p1169_p2_u4E16_u754C_u676F_p3_p4_p5_p6_p7_p8_p9_p10_p11.html',
      nextLink: '//div[contains(@class, "ssPages")]/a[@title="下一页"]',
      pageElement: '//div[contains(@class,"column-bd")]/ul'
    },
    //     {name: 'bilibili',
    //         url: /^https?:\/\/search\.bilibili\.com/i,
    //         preLink:{
    //             startAfter:'&page=',
    //             inc:-1,
    //             min:1,
    //         },
    //         nextLink:{
    //             startAfter:'&page=',
    //             mFails:[/^https?:\/\/search\.bilibili\.(?:tv|com)\/.*keyword=.*(?:&.*)?/i,'&page=1'],
    //             inc:1,
    //             isLast:function(doc,win,lhref){
    //                 var active=Number(doc.evaluate('//li[@class="page-item active"]/button').iterateNext().innerText);
    //                 var lastpage=Number(doc.evaluate('//li[@class="page-item next"]/button').iterateNext().innerText);
    //                 if (active == lastpage){
    //                     return true;
    //                 }
    //             },
    //         },
    //         autopager:{
    //             lazyImgSrc: 'lazy-img',
    //             pageElement: '//ul[contains(@class,"video-contain")]/li',
    //         }
    //     },
    {
      name: 'imdb',
      url: /^https?:\/\/www\.imdb\.com\/search/i,
      exampleUrl: 'http://www.imdb.com/search/title?count=100&title_type=feature,tv_series&ref_=nv_ch_mm_1',
      nextLink: '//span[@class="pagination"]/a[last()] | id("right")/a[last()]',
      autopager: {
        pageElement: 'id("main")/*'
      }
    },
    // ====================== shopping、生活 ===========================
    //     {name: '淘宝搜索',
    //         url: '^https?://(?:list|s|search[^.]*)\\.taobao\\.com/search',
    //         nextLink: '//a[@class="page-next"]',
    //         autopager: {
    //             pageElement: '//div[@class="tb-content"]',
    //             lazyImgSrc: 'data-lazyload-src|data-ks-lazyload',
    //         }
    //     },
    //     {name: "淘宝",
    //         url: /^http:\/\/(?!bbs).*\.taobao\.com\//i,
    //         nextLink: 'auto;',
    //         autopager: {
    //             pageElement: '//div[@id="J_ShopSearchResult"]/div/div[contains(@class, "shop-hesper-bd")] | id("J_ItemListsContainer")/ul[@class="item-lists"]',
    //             lazyImgSrc: 'data-lazyload-src|data-ks-lazyload',
    //         }
    //     },
    //     {name: '天猫 - 搜索',
    //         url: '^http://list\\.tmall\\.com//?search_product\\.htm\\?',
    //         nextLink: '//a[@class="ui-page-next" and (text()="下一页>>")]',
    //         autopager: {
    //             pageElement: '//div[@id="J_ItemList"]',
    //             relatedObj: true,
    //             replaceE: '//div[@class="ui-page-wrap"]',
    //             lazyImgSrc: 'data-lazyload-src|data-ks-lazyload',
    //         },
    //     },
    //     {name: '店内搜索页-淘宝网',
    //         url: /^http:\/\/[^.]+\.taobao\.com\/search\.htm\?/i,
    //         exampleUrl: 'http://jiaqibaihou.taobao.com/search.htm?spm=a1z10.3.w4002-1381691988.18.GgWBry&mid=w-1381691988-0&search=y&keyword=%BC%AA%C1%D0&pageNo=1',
    //         nextLink: '//a[(text()="下一页")][not(@class="disable")]',
    //         autopager: {
    //             pageElement: '//div[@id="J_ShopSearchResult"]/div/div[contains(@class, "shop-hesper-bd")]',
    //             lazyImgSrc: 'data-lazyload-src|data-ks-lazyload',
    //         }
    //     },
    //     {name: '淘宝论坛 ',
    //         url: /^http:\/\/bbs\.taobao\.com\//i,
    //         exampleUrl: 'http://bbs.taobao.com/catalog/thread/647133-264959947.htm?spm=0.0.0.0.Ji1u2u',
    //         nextLink: 'auto;',
    //         autopager: {
    //             pageElement: 'id("detail")/div[@class="bbd"] | //div[@class="main-wrap"]//div[@class="bd"]/table[@class="posts"]',
    //             replaceE: '//div[@class="pagination"]'
    //         }
    //     },
    //     {name: '京东商城',
    //         url: /^http:\/\/.*\.jd\.com\//i,
    //         exampleUrl: 'http://list.jd.com/670-686-690-0-0-0-0-0-0-0-1-1-1-1-18-1574-29455-0.html',
    //         nextLink: 'auto;',
    //         autopager: {
    //             pageElement: 'id("plist")',
    //             useiframe: true,
    //             //lazyImgSrc: 'data-lazyload',
    //         }
    //     },
    {
      name: '亚马逊',
      url: /^https?:\/\/www\.amazon\.cn/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: '//ul[@id="s-results-list-atf"] | id("btfResults")'
      }
    },
    {
      name: 'Amazon.com',
      url: 'https?:\/\/(\w+).amazon.com\/.+',
      nextLink: '/html/body/div[2]/div[4]/div[2]/div[5]/div/span/div[1]/ul/li[7]/a',
      siteExample: 'https://smile.amazon.com/toys/b/ref=sd_allcat_tg?ie=UTF8&node=165793011',
      pageElement: '//*[@id="widgetContent"]'
    },
    {
      name: '易迅网',
      url: /^https?:\/\/searchex\.yixun\.com\//i,
      exampleUrl: 'http://searchex.yixun.com/705798t706810-1001-/?YTAG=3.706810246020',
      nextLink: '//div[@class="sort_page_num"]/a[@title="下一页"]',
      autopager: {
        pageElement: '//UL[@id="itemList"]',
        lazyImgSrc: 'init_src'
      }
    },
    {
      name: '前程无忧 - 搜索',
      url: /^https?:\/\/search\.51job\.com\/jobsearch\/search_result/i,
      nextLink: '//table[@class="searchPageNav"]//td[@class="currPage"]/following-sibling::td[1]/a',
      autopager: {
        pageElement: 'id("resultList")'
      }
    },
    {
      name: '抢了个便宜 | 高性价比正品低价商品推荐网',
      url: /^https?:\/\/www\.qlgpy\.com\//i,
      nextLink: '//div[@class="wpagenavi"]/a[text()="下页"]',
      autopager: {
        pageElement: 'id("wrapmain")//ul[starts-with(@id, "post-")]'
      }
    },
    {
      name: '秒便宜论坛',
      url: /^https?:\/\/bbs\.miaopy\.com\//i,
      exampleUrl: 'http://bbs.miaopy.com/activity/list-3.aspx',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'css;.forumtopics-list',
        stylish: 'div.sp-separator { width: 800px !important;}'
      }
    },
    {
      name: '露天拍賣',
      url: /^https?:\/\/[a-z]+\.ruten\.com\.tw\//i,
      exampleUrl: 'http://class.ruten.com.tw/category/sub00.php?c=0019000800010001',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="searchResult"]'
      }
    },
    {
      name: 'Yahoo!奇摩拍賣',
      url: /^https:\/\/tw\.bid\.yahoo\.com\//i,
      exampleUrl: 'https://tw.bid.yahoo.com/tw/2092076277-category-leaf.html?.r=1408853888',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("srp_sl_result")'
      }
    },
    // 手机评测等
    {
      name: '杀价帮3C导购网—真实 客观 独立 自由',
      url: /^https?:\/\/www\.shajia\.cn\/article/i,
      exampleUrl: 'http://www.shajia.cn/article_list.php',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("agreement")'
      }
    },
    {
      name: '机锋网',
      url: /^https?:\/\/www\.gfan\.com\/review\/\w+\.html/,
      exampleUrl: 'http://www.gfan.com/review/2014091557751.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="news-content"]',
        relatedObj: true
      }
    },

    // ========================= 知识、阅读 ============================
    {
      name: '知乎收藏夹',
      url: /^https?:\/\/www\.zhihu\.com\/collection/i,
      exampleUrl: 'https?://www.zhihu.com/collection/19561986',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("zh-list-collection-wrap")/div[@class="zm-item"]'
      }
    },
    {
      name: '译言网 | 译文库和原文库',
      url: /^https?:\/\/(?:article|source)\.yeeyan\.org\//i,
      nextLink: '//ul[contains(concat(" ",normalize-space(@class)," "), " y_page") ]/li/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[contains(concat(" ",normalize-space(@class)," "), "content_box")] | //div[@class="y_l"]/div[@class="y_s_list"]',
        replaceE: '//ul[contains(concat(" ",normalize-space(@class)," "), " y_page") ]'
      }
    },
    {
      name: '译言精选',
      url: /^https?:\/\/select\.yeeyan\.org\//i,
      nextLink: '//ul[contains(@class, "s_page_n")]/li/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("article_list")',
        replaceE: '//ul[contains(@class, "s_page_n")]'
      }
    },
    {
      name: ' 译言小组',
      url: /^https?:\/\/group\.yeeyan\.org\//i,
      nextLink: '//div[@class="paginator"]/a[@class="next"]',
      autopager: {
        pageElement: '//div[contains(@class, "column-main")]/div[contains(@class, "stream")]',
        replaceE: '//div[@class="paginator"]'
      }
    },
    {
      name: '主题站 | 果壳网 ',
      url: '^https?://www\\.guokr\\.com/(?:site|group|ask|event)/',
      nextLink: '//ul[@class="gpages"]/li/a[contains(.,"下一页")]',
      pageElement: '//div[@class="article-list"] | //ul[@class="titles"] | //ul[@class="ask-list"] | //ul[@class="event_list gclear"]'
    },
    {
      name: '大众点评网',
      url: '^https?://www\\.dianping\\.com/.*',
      nextLink: '//a[@class="NextPage"]',
      pageElement: '//div[@id="searchList"] | //div[@class="reviews-items"]'
    },
    {
      name: '家在深圳',
      url: /^https?:\/\/bbs\.szhome\.com\/.*\.html/i,
      exampleUrl: 'http://bbs.szhome.com/330010-8-0-0-2.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[contains(@class,"mainList")]'
      }
    },

    // ========================= download ===========================
    {
      name: 'VeryCD搜索页面',
      url: /^https?:\/\/www\.verycd\.com\/search\/folders.+/i,
      siteExample: 'http://www.verycd.com/search/folders/',
      nextLink: '//ul[@class="page"]//a[contains(text(),"下一页")][@href]',
      autopager: {
        pageElement: '//ul[@id="resultsContainer"]',
        replaceE: 'id("page_html")/ul[@class="page"]',
        lazyImgSrc: '_src'
      }
    },
    {
      name: 'VeryCD分类资源页',
      url: /^https?:\/\/www\.verycd\.com\/sto\/.+/i,
      exampleUrl: 'http://www.verycd.com/sto/music/page1',
      nextLink: '//div[@class="pages-nav"]/a[text()="下一页 ?"]',
      autopager: {
        pageElement: '//div[@id="content"]/ul',
        lazyImgSrc: 'load-src',
        replaceE: '//div[@class="pages-nav"]'
      }
    },
    {
      name: 'SimpleCD | 让被墙变得简单',
      url: /^https?:\/\/www\.simplecd\.me\//i,
      exampleUrl: 'http://www.simplecd.me/search/entry/?query=%E7%81%8C%E7%AF%AE%E9%AB%98%E6%89%8B',
      nextLink: '//td[@class="next"]/a[@class="enabled"]',
      autopager: {
        pageElement: '//div[@class="result-list" or @class="sub-recommend"]/div[@class="content"]'
      }
    },
    {
      name: '电驴站 爱磁力 iCiLi - 电驴下载站',
      url: /^https?:\/\/www\.icili\.com\/emule/i,
      exampleUrl: 'http://www.icili.com/emule',
      nextLink: 'id("main")/div[@class="pager"]/descendant::a[text()=" > "]',
      autopager: {
        pageElement: 'id("main")/ul',
        replaceE: 'id("main")/div[@class="pager"]'
      }
    },
    {
      name: '伪射手网',
      url: /^https?:\/\/(?:www\.)?assrt\.net\/sub\/\?searchword/i,
      exampleUrl: 'http://assrt.net/sub/?searchword=fight+club',
      preLink: {
        startAfter: '&page=',
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: '&page=',
        mFails: [/^https?:\/\/(?:www\.)?assrt\.net\/sub\/\?searchword=[^\/]+/i, '&page=1'],
        // mFails: if we don't get a match of startAfter in url, use the combination of mFails
        inc: 1
      },
      autopager: {
        pageElement: '//div[@id="resultsdiv"]/div[@class="subitem"]'
      }
    },
    {
      name: '多看阅读',
      url: '^https?://www.duokan.com/',
      pageElement: 'css;ul.u-list, ul.j-list'
    },
    {
      name: 'kindle114',
      url: /^https?:\/\/www\.kindle114\.com\/thread-.*?\.html/i,
      autopager: {
        pageElement: 'css;#postlist',
        filter: 'css;#sidebar'
      }
    },
    {
      name: '传送门 -- 微信公众账号和文章的导航及推荐',
      url: '^https?://chuansong\\.me/account/',
      nextLink: 'auto;',
      pageElement: 'css;.pagedlist_item',
      ntimeout: 1 * 1000
    },
    {
      name: 'TTmeiju.Com 您的高清美剧片源下载中心',
      url: /^https?:\/\/www\.ttmeiju\.com\//i,
      exampleUrl: 'http://www.ttmeiju.com/meiju/Person.of.Interest.html?page=1',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="seedlistdiv" or @class="contentbox"]/table[@class="seedtable"]'
      }
    },
    {
      name: '电影天堂',
      url: /^https?:\/\/www\.dy2018\.com\//i,
      exampleUrl: 'http://www.dy2018.com/html/gndy/dyzz/index.html',
      nextLink: '//div[@class="x"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="co_area2"]/div[@class="co_content8"]'
      }
    },
    {
      name: '最新电影 | 龙部落',
      url: /^https?:\/\/www\.longbuluo\.com\//i,
      exampleUrl: 'http://www.longbuluo.com/category/movie',
      nextLink: '//div[@class="pagebar"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="postlist"]',
        replaceE: 'css;.pagebar'
      }
    },
    {
      name: '高清连续剧 | 一起下载吧',
      url: /^https?:\/\/17down\.net\/category/i,
      exampleUrl: 'http://17down.net/category/tv',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("content")/div[starts-with(@class, "entry_box")]',
        replaceE: '//div[@class="pagination"]'
      }
    },
    {
      name: 'Go下载',
      url: /^https?:\/\/goxiazai\.cc\//i,
      exampleUrl: 'http://goxiazai.cc/',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("main")/div[@class="post"]',
        replaceE: 'id("pagenavi")'
      }
    },
    {
      name: '720P电影下载,1080P电影下载,bt蓝光电影下载,BT原盘电影下载：BT之家老牌电影下载网站，百万用户选择了这里',
      url: /^https?:\/\/bbs\.1lou\.com\//i,
      exampleUrl: 'http://bbs.1lou.com/forum-index-fid-1183.htm',
      nextLink: '//div[@class="page"]/a[text()="?"]',
      autopager: {
        pageElement: 'id("threadlist") | id("body")/div/table[@class="post_table"]'
      }
    },
    {
      name: '很BT电影联盟',
      url: /^https?:\/\/henbt\.com\//i,
      exampleUrl: 'http://henbt.com/',
      nextLink: '//div[@class="pages clear"]/a[@class="nextprev"]',
      autopager: {
        pageElement: 'id("btm")/div[@class="main"]/div[@class="box clear"]',
        separatorReal: false
      }
    },
    // ================== PT ==============================
    {
      name: '光华，cmct，chd，皇后，hd86，khdbits，hdsky，hdvnbits，hd-sportbits，tccf，皇后mv，mt，hd4fans，hdhc，发烧友，tlfbits，joyhd，蚂蚁pt，清影pt，北邮人，u2',
      url: /^https?:\/\/(?:bt\.upc\.edu|hdcmct|chdbits|open|hd86|khdbits|hdsky|hdvnbits|hd-sportbits|et8|mv\.open|tp\.m-team|www\.hd4fans|www\.hdhc|www\.pt|pt\.eastgame|www\.joyhd|ipv6\.antsoul|ipv4\.antsoul|pt\.hit\.edu|bt\.byr|u2\.dmhy)\.(net|cn|org|com|cd|cc|me|cm)\//i,
      exampleUrl: 'http://hdcmct.org/torrents.php',
      nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
      autopager: {
        pageElement: '//table[@class="torrents"]'
      }
    },
    {
      name: '葡萄 :: 种子',
      url: /^https:\/\/pt\.sjtu\.edu\.cn\/torrents\.php/i,
      exampleUrl: 'https://pt.sjtu.edu.cn/torrents.php',
      nextLink: '//b[contains(text(), "下一页")]/parent::a',
      autopager: {
        pageElement: '//table[@class="torrents"]'
      }
    },
    {
      name: '- hdchina 高清影音人士的分享乐园',
      url: /^https?:\/\/hdchina\.org/i,
      exampleUrl: 'http://hdchina.org',
      nextLink: '//b[contains(text(), "下一页")]/parent::a',
      autopager: {
        pageElement: '//table[@class="torrent_list"]'
      }
    },
    {
      name: 'TTG',
      url: /^https?:\/\/ttg\.im\/browse\.php/i,
      exampleUrl: 'http://ttg.im/browse.php',
      nextLink: '//b[contains(text(), "下页")]/parent::a',
      autopager: {
        pageElement: 'id("torrent_table")'
      }
    },
    {
      name: 'https://exoticaz.to/torrents',
      url: '^https?://exoticaz\.to/torrents',
      nextLink: '//a[@rel="next"]',
      pageElement: '//table',
    },
    {
      name: '麦田',
      url: /^https?:\/\/pt\.nwsuaf6\.edu\.cn\/torrents\.php/i,
      exampleUrl: 'http://hdcmct.org/torrents.php',
      nextLink: '//b[contains(text(), "下一页")]/parent::a[@class="next"]',
      autopager: {
        pageElement: '//table[@class="torrents"]'
      }
    },
    {
      name: '乐乎网-有乐乎！',
      url: '^https?://www\\.ulehu\\.com/',
      nextLink: '//a[@class="a1" and (text()="下一页")]',
      pageElement: '//body/div[@class="container mt20"]/div[@class="content"]/div[@class="colMain"]/div',
      exampleUrl: 'http://www.ulehu.com/'
    },
    {
      name: 'HDRoad - 资源区',
      url: /^https?:\/\/hdroad\.org\/browse\.php/i,
      exampleUrl: 'http://hdroad.org/browse.php',
      nextLink: '//a[contains(text(), "下一页")]',
      autopager: {
        pageElement: '//div[@id="torrent-list"]'
      }
    },
    {
      name: '种子列表-北京交通大学知行PT',
      url: '^https?://pt\\.zhixing\\.bjtu\\.edu\\.cn/search/',
      nextLink: '//a[@class="next"]',
      pageElement: '//table[@class="torrenttable"]',
      exampleUrl: 'http://pt.zhixing.bjtu.edu.cn/search/'
    },
    {
      name: '紫荆站 | ZiJingBT v2 | 种子页',
      url: /^https?:\/\/zijingbt\.njuftp\.org\//i,
      exampleUrl: 'http://zijingbt.njuftp.org/index.html',
      nextLink: '//a[contains(text(), "下一页")]',
      autopager: {
        pageElement: '//table[@class="torrent_table"]'
      }
    },
    {
      name: 'idope.se',
      url: /^https?:\/\/idope\.se\/torrent-list\/.+/i,
      siteExample: 'https://idope.se/torrent-list/transformer/?p=3',
      preLink: {
        startAfter: '?p=',
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: '?p=',
        mFails: [/^https?:\/\/idope\.se\/torrent-list\/.+/i, '/?p=1'],
        inc: 1,
        isLast: function (doc, win, lhref) {
          const pageSel = doc.getElementById('next');
          if (!pageSel) {
            return true;
          }
        }
      },
      autopager: {
        pageElement: '//*[@id="div2child"]',
        useiframe: true
      }
    },
    // ========================= bbs、blog ======================
    {
      name: '天涯论坛_帖子列表',
      url: '^https?://bbs\\.tianya\\.cn/list',
      nextLink: '//a[text()="下一页"]',
      pageElement: '//div[@class="mt5"]'
    },
    {
      name: '天涯论坛帖子',
      url: /^https?:\/\/bbs\.tianya\.cn\/.+\.shtml/i,
      siteExample: 'http://bbs.tianya.cn/post-feeling-2792523-1.shtml',
      nextLink: '//div[@class="atl-pages"]/descendant::a[text()="下页"][@href]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@class="atl-main"]',
        lazyImgSrc: 'original',
        filter: function (pages) {
          const see_only_uname = unsafeWindow.see_only_uname;
          const setOnlyUser = unsafeWindow.setOnlyUser;
          if (see_only_uname) {
            setOnlyUser(see_only_uname);
          }
        }
      }
    },
    {
      name: 'mozest社区',
      url: /^https?:\/\/g\.mozest\.com/i,
      nextLink: '//div[@class="pages"]//a[@class="next"]',
      autopager: {
        pageElement: '//div[@id="threadlist"] | //div[@id="postlist"]',
        useiframe: true,
        replaceE: 'css;.pages_btns > .pages'
      }
    },
    {
      name: 'Firefox中文社区 - 列表',
      url: '^https?://www\\.firefox\\.net\\.cn/thread',
      nextLink: '//div[@class="pages"]/a[contains(text(), "下一页")]',
      autopager: {
        pageElement: 'id("J_posts_list")',
        replaceE: 'css;.pages',
        documentFilter: function (doc) {
          // 头像载入出错的修正
          [].forEach.call(doc.querySelectorAll('img.J_avatar'), function (img) {
            img.setAttribute('onerror', 'this.src="http://www.firefox.net.cn/res/images/face/face_small.jpg";');
          });
        }
      }
    },
    {
      name: 'Firefox中文社区 - 帖子',
      url: '^https?://www\\.firefox\\.net\\.cn/read',
      nextLink: '//div[@class="pages"]/a[contains(text(), "下一页")]',
      autopager: {
        pageElement: 'id("J_posts_list")/*',
        useiframe: true,
        newIframe: true
      }
    },
    {
      name: 'Mozilla Addons - 用户信息',
      url: /^https:\/\/addons\.mozilla\.org\/zh-CN\/[^\/]+\/user\//i,
      exampleUrl: 'https://addons.mozilla.org/zh-CN/firefox/user/Vasiliy_Temnikov/',
      nextLink: '//p[@class="rel"]/a[@class="button next"]',
      autopager: {
        pageElement: 'id("my-addons")',
        relatedObj: true
      }
    },
    {
      name: 'Mozilla Addons',
      url: /^https?:\/\/addons\.mozilla\.org\/[^\/]+\/firefox/i,
      siteExample: 'https://addons.mozilla.org/zh-CN/firefox/',
      nextLink: '//p[@class="rel"]/a[@class="button next"][@href] | //ol[@class="pagination"]/li/a[@rel="next"][@href]',
      autopager: {
        pageElement: '//div[@id="pjax-results" or @class="separated-listing"]/div[@class="items"] | //section[@class="primary"]/div/div[@class="items"] | //ul[@class="personas-grid"] | //div[@id="my-addons"] | //div[@id="reviews"]',
        relatedObj: true,
        replaceE: 'css;.paginator'
      }
    },
    {
      name: '搜索 | Mozilla 技术支持',
      url: '^https://support\\.mozilla\\.org/zh-CN/search\\?',
      exampleUrl: 'https://support.mozilla.org/zh-CN/search?esab=a&product=firefox&q=%E7%BE%A4%E7%BB%84',
      nextLink: '//a[@class="btn-page btn-page-next" and contains(text(),"下一个")]',
      autopager: {
        pageElement: '//div[@id="search-results"]/div[@class="grid_9"]/div[@class="content-box"]'
      }
    },
    {
      name: '傲游浏览器-插件中心',
      url: '^https?://extension\\.maxthon\\.cn/',
      nextLink: '//div[@class="pages page-right"]/a[text()=">"]',
      pageElement: '//ul[@id="delegate-all"]'
    },
    {
      name: '小米手机官方论坛',
      url: '^https?://bbs\\.xiaomi\\.cn/',
      nextLink: "//a[@class='nxt' and (text()='下一页')]",
      autopager: {
        pageElement: "id('postlist') | id('threadlist')",
        replaceE: '//div[@class="pg"][child::a[@class="nxt"]]',
        documentFilter: function (doc) {
          const firstDiv = doc.querySelector("div[id^='post_']");
          if (firstDiv) {
            firstDiv.parentNode.removeChild(firstDiv);
          }
        }
      }
    },
    {
      name: '棋友家园',
      url: /^https?:\/\/www\.weiqitv\.com\/home\/forum/i,
      exampleUrl: 'http://www.weiqitv.com/home/forum.php?mod=viewthread&tid=1623&extra=&page=1',
      nextLink: '//div[@class="pg"]/a[@class="nxt"]',
      autopager: {
        pageElement: 'id("threadlisttableid") | id("postlist")',
        useiframe: true
      }
    },
    {
      name: 'Discuz X2.5修复',
      url: /^https?:\/\/(bbs.gfan|bbs.xda|bbs.weiphone|bbs.feng|www.weiqitv|www.diypda|f.ppxclub|bbs.sd001|bbs.itiankong)\.(com|cn)/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@id="threadlist"] | //div[@id="postlist"]',
        replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
      }
    },
    {
      name: '威锋论坛搜索',
      url: /^https?:\/\/s\.feng\.com\/f\?srchtxt=/i,
      nextLink: '//div[@class="pages"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="searchresult"]',
        replaceE: '//div[@class="pages"]'
      }
    },
    {
      name: 'Discuz 页面跳转修复',
      url: /^https?:\/\/(bbs.pcbeta|bbs.besgold|www.pt80)\.(com|net)/i,
      nextLink: '//div[@class="pg"]/descendant::a[@class="nxt"]',
      autopager: {
        pageElement: '//div[@id="postlist"] | //form[@id="moderate"]',
        replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
      }
    },
    {
      name: 'vBulletin论坛 加加/看雪/XDA',
      url: /^https?:\/\/(bbs|forum)\.(jjol|pediy|xda-developers)\.(cn|com)\/(forumdisplay|showthread)/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"]'
      }
    },
    {
      name: 'xda-developers',
      url: '^https?://forum\\.xda-developers\\.com/',
      nextLink: "//div[@class='pagenav']/a[@rel='next']",
      autopager: {
        pageElement: "//div[@class='thread-listing'] | //div[@id='posts']",
        replaceE: "//div[@class='forum-display-controls']",
        separatorReal: false,
        relatedObj: true
      }
    },
    {
      name: '玩机圈',
      url: /^https?:\/\/www\.wanjiquan\.com\//i,
      exampleUrl: 'http://www.wanjiquan.com/forum-169-1.html',
      nextLink: 'css;.ma_tiezi_list_page > .next',
      autopager: {
        pageElement: '//form[@id="moderate"] | id("postlist")'
      }
    },
    {
      name: '极限社区',
      url: '^https?://bbs\\.themex\\.net/',
      nextLink: '//a[@rel="next"]',
      pageElement: 'id("threadslist posts")'
    },
    {
      name: '天坛',
      url: /^https?:\/\/bbs\.waptw\.com/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '铁血社区',
      url: /^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i,
      nextLink: '//div[@class="pages"]/span/a[text()=">>"]',
      autopager: {
        pageElement: '//div[@class="posts_list"]'
      }
    },
    {
      name: '铁血网',
      url: /^https?:\/\/[a-z]+\.tiexue\.net/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="fontListBox"]'
      }
    },
    {
      name: '霏凡论坛 - 帖子列表',
      url: /^https?:\/\/bbs\.crsky\.com\/read\.php/i,
      nextLink: '//div[@class="pages"]//a[text()=">"]',
      autopager: {
        // useiframe:true,
        pageElement: '//div[@class="t5 t2"]'
      }
    },
    {
      name: '虎扑篮球论坛',
      url: /^https?:\/\/bbs\.hupu\.com\/.*\.html/i,
      exampleUrl: 'https://bbs.hupu.com/22125719.html',
      nextLink: "//a[@class='nextPage']",
      autopager: {
        pageElement: '//div[div[@class="floor-show  "]]',
        //  useiframe:f,
        //  iloaded: true,
        replaceE: 'css;.page'
      }
    },
    {
      name: '虎扑篮球论坛',
      url: /^https?:\/\/bbs\.hupu\.com\/\w+/i,
      exampleUrl: 'https://bbs.hupu.com/bxj',
      nextLink: "//a[@class='nextPage']",
      autopager: {
        pageElement: '//li[div[@class="titlelink box"]]',
        useiframe: true,
        //  iloaded: true,
        replaceE: 'css;.page'
      }
    },
    {
      name: '人大经济论坛',
      url: /^https?:\/\/bbs\.pinggu\.org\/thread/i,
      siteExample: 'http://bbs.pinggu.org/thread-1562552-3-1.html',
      nextLink: '//div[@id="pgt"]/descendant::a[@class="nxt"]',
      autopager: {
        pageElement: '//div[@class="floor"]'
      }
    },
    {
      name: '九尾网',
      url: /joowii\.com\/arc/i,
      siteExample: 'http://www.joowii.com/arc/ysyl/ssgx/2012/0905/125571.html',
      nextLink: 'auto;',
      autopager: {
        useiframe: true,
        pageElement: '//div[@class="article"]'
      }
    },
    {
      name: '17173.com中国游戏第一门户站',
      url: '^https?://news\\.17173\\.com/content/.*\\.shtml',
      nextLink: '//a[@class="page-next"]',
      pageElement: '//div[@id="matterc"]'
    },
    {
      name: '游侠网',
      url: /^https?:\/\/(?:www|down)\.ali213\.net\//i,
      exampleUrl: 'http://www.ali213.net/news/html/2013-12/91377.html',
      nextLink: 'auto;',
      // nextLink: '//a[@id="after_this_page"][@href] | //div[@class="p_bar"]/a[text()="下页"] | //div[@class="list_body_page"]/a[@title="下一页"]',
      autopager: {
        pageElement: '//div[@id="Content" or @id="game_content" or @id="rqjxhb"]',
        relatedObj: true,
        lazyImgSrc: 'data-original'
      }
    },
    {
      name: '游民星空',
      url: /^https?:\/\/www\.gamersky\.com/i,
      siteExample: 'http://www.gamersky.com/news/201207/206490.shtml',
      nextLink: 'auto;',
      autopager: {
        remain: 1 / 2,
        pageElement: '//div[@class="Mid2L_con"]/*[not(contains(@class, "page_css"))] | //div[span/@id="pe100_page_contentpage"]'
      }
      // credit : https://greasyfork.org/en/forum/discussion/42040/x
    },
    {
      name: '3DMGAME',
      url: '^https://.*\.3dmgame\.com/*',
      siteExample: 'https://www.3dmgame.com/news/201312/2310792.html|https://www.3dmgame.com/news/',
      nextLink: '//li[(@class="next")]//a',
      autopager: {
        remain: 1 / 2,
        pageElement: '//div[@class="news_warp_center"] | //ul[@class="list"]'
      }
      // credit : https://greasyfork.org/en/forum/discussion/42040/x
    },
    {
      name: '猴岛论坛',
      url: /^https?:\/\/bbs\.houdao\.com/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="z threadCommon"] | //div[@class="mb10 bodd"]'
      }
    },
    {
      name: '巴哈姆特',
      url: /^https?:\/\/(?:acg|forum|webbbs|mbox)\.gamer\.com\.tw\/(?:B|C|board|index)\.php\?\w+=[^&]+(?:&\w+=[^&]+)*/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: "//div[@id='BH-master']/form/div/table//tr[td/@class='b-list__summary']",
        useiframe: true,
        newIframe: true
      }
    },
    {
      name: '178 魔兽世界、178动漫频道',
      url: /^https?:\/\/[a-z]+\.178\.com\/.*\.html/i,
      exampleUrl: 'http://wow.178.com/201308/170546277543.html',
      nextLink: 'id("cms_page_next")',
      autopager: {
        pageElement: '//div[@id="text"]',
        replaceE: '//div[@class="page"] | id("m_pbtnbtm")',
        relatedObj: true
      }
    },
    {
      name: '阡陌居',
      url: /^https?:\/\/www\.1000qm\.com\/(?:thread\.php\?fid\-\d+|read\.php\?tid\-\d+)\.html/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="z threadCommon"] | //div[@id="pw_content"][@class="mb10"]'
      }
    },
    {
      name: '煎蛋首页',
      url: /^https?:\/\/jandan\.net\/(?:page)?/i,
      siteExample: 'http://jandan.net/',
      useiframe: true,
      prevLink: '//a[contains(text(),"上一页")]',
      nextLink: '//a[contains(text(),"下一页")]|//a[contains(text(),"更多文章")]',
      autopager: {
        pageElement: '//div[@class="post f list-post"] | //ol[@class="commentlist"]/li'
      }
    },
    {
      name: '蜂鸟网',
      url: /^https?:\/\/qicai\.fengniao\.com\/\d+\/\d+.html/i,
      siteExample: 'http://qicai.fengniao.com/370/3705137.html',
      useiframe: true,
      nextLink: 'auto;',
      autopager: {
        remain: 1 / 3,
        relatedObj: ['css;div.page_num', 'bottom'],
        pageElement: '//div[@class="article"]'
      }
    },
    {
      name: '55188论坛',
      url: /^https?:\/\/www\.55188\.com/i,
      siteExample: 'http://www.55188.com/forum-8-1.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="mainbox threadlist"] | //div[@class="mainbox viewthread"]'
      }
    },
    {
      name: 'pcdvd论坛',
      url: /^https?:\/\/(?:www|forum)\.pcdvd\.com\.tw\/showthread\.php\?/i,
      siteExample: 'https://www.pcdvd.com.tw/showthread.php?t=1144412',
      nextLink: '(//div[@class="pagenav"]//a[text()="下一頁"])[1]',
      autopager: {
        pageElement: 'id("posts") | id("posts")/following-sibling::div[@align="center"][position() < last()]'
      }
    },
    {
      name: 'pcdvd论坛_thread_list',
      url: /^https?:\/\/(?:www|forum)\.pcdvd\.com\.tw\/forumdisplay\.php\?/i,
      siteExample: 'https://www.pcdvd.com.tw/forumdisplay.php?f=34&page=4&sort=lastpost&order=&pp=18&daysprune=-1',
      nextLink: '//div[@class="pagenav"]//a[text()="下一頁"]',
      autopager: {
        pageElement: '//td[@width="100%"][@valign="top"]/table[@class="tborder"]/tbody/tr[td[@class="alt1Active"]]'
      }
    },
    {
      name: 'PCHOME 社区',
      url: /^https?:\/\/club\.pchome\.net/i,
      siteExample: 'http://club.pchome.net/forum_1_15.html#',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//form[@id="mytopics"] | //div[@id="weibo_app"]'
      }
    },
    {
      name: 'pconline',
      url: '^https?://[a-z]+\\.pconline\\.com\\.cn/',
      nextLink: '//div[contains(@class, "pconline_page") or contains(@class, "pager")]/a[@class="next"]',
      autopager: {
        pageElement: '//div[@id="article"]//div[@class="content"] | //ul[@id="ulHoverPic"] | //table[@class="posts"] | id("post_list") | id("topicList")',
        relatedObj: true,
        replaceE: 'css;.pconline_page'
      },
      exampleUrl: 'http://diy.pconline.com.cn/377/3774616.html'
    },
    {
      name: 'Chiphell',
      url: /^https?:\/\/www\.chiphell\.com\/(?!forum)/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("ct")/div[@class="mn"]/div[@id="threadlist"] | id("article_content")/../..',
        replaceE: '//div[@class="pg"]'
      }
    },
    {
      name: '糗事百科',
      url: '^https?://www\\.qiushibaike\\.com/',
      nextLink: '//span[contains(text(),"下一页")]//parent::a',
      autopager: {
        useiframe: true,
        pageElement: 'id("content-left")/div[contains(@class,"article")]'
        //  stylish: '.sp-separator { width: 620px !important; }'
      }
    },
    {
      name: 'haha.mx',
      url: '^https?://www\\.haha\\.mx/',
      nextLink: 'auto;',
      autopager: {
        useiframe: true,
        pageElement: '//div[@class="joke-list"]'
      }
    },
    {
      name: '抽屉新热榜',
      url: /^https?:\/\/dig\.chouti\.com\//i,
      nextLink: '//a[@class="ct_page_edge" and (text()="下一页")]',
      autopager: {
        pageElement: '//div[@id="content-list"]',
        lazyImgSrc: 'original',
        filter: function (pages) {
          const chouti = unsafeWindow.chouti;
          const NS_links_comment_top = unsafeWindow.NS_links_comment_top;
          chouti.vote();
          chouti.addCollect();
          chouti.shareweibo();
          chouti.playVido();
          NS_links_comment_top.init();
        }
      }
    },
    {
      name: '猫扑大杂烩帖子',
      url: /^https?:\/\/dzh\.mop\.com\/topic\/readSub/i,
      nextLink: '//a[contains(text(),"下一页")][@href]',
      autopager: {
        pageElement: '//div[@class="huitie"]'
      }
    },
    {
      name: '猫扑数码、猫扑汽车等',
      url: /^https?:\/\/(?!dzh).*\.mop\.com\/.*\.shtml/i,
      exampleUrl: 'http://digi.mop.com/sjsj/140522002176016.shtml',
      nextLink: 'id("nextp") | id("page_use")/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="article"] | //div[@class="content"]/div[@class="inner"]/div[@class="nr_con"]',
        replaceE: '//div[@class="page"]',
        relatedObj: true
      }
    },
    {
      name: '色影无忌帖子',
      url: /^https?:\/\/forum\.xitek\.com\/showthread/i,
      siteExample: 'http://forum.xitek.com/showthread.php?threadid=571986',
      nextLink: '//font[@size="2"]/font[@class="thtcolor"]/following-sibling::a[@href]',
      autopager: {
        pageElement: '//body/table[position()>2 and position()<(last()-2)]'
      }
    },
    {
      name: '19楼帖子',
      url: /^https?:\/\/www\.19lou\.com/i,
      siteExample: 'http://www.19lou.com/forum-1502-thread-29762777-1-1.html',
      nextLink: 'auto;',
      useiframe: true,
      autopager: {
        useiframe: true,
        pageElement: '//form[@name="postForm"] | //form[@name="manageForm"]'
      }
    },
    {
      name: 'blogspot',
      url: '^https?://[^./]+\\.(blogspot|playpcesor)(?:\\.[^./]{2,3}){1,2}/(?!\\d{4}/)',
      exampleUrl: 'http://program-think.blogspot.com/  http://www.playpcesor.com/',
      nextLink: '//a[contains(concat(" ", @class, " "), " blog-pager-older-link ")]',
      autopager: {
        pageElement: '//div[contains(concat(" ", @class, " "), " hfeed ") or contains(concat(" ", @class, " "), " blog-posts ")] | id("Blog1")/div[contains(concat(" ", @class, " "), " entry ")]',
        relatedObj: true,
        replaceE: 'css;#blog-pager'
      }
    },
    {
      name: '北海365网',
      url: /^https?:\/\/[a-z]+\.beihai365\.com\//i,
      exampleUrl: 'http://kj.beihai365.com/',
      nextLink: '//div[@class="pages"]/*[contains(concat(" ",normalize-space(@class)," "), " active ")]/following-sibling::a[1]',
      autopager: {
        pageElement: 'id("threadlist")/tr[@class="tr3"] | id("pw_content")//form[@method="post" and @name="delatc"]',
        replaceE: '//div[@class="pages"]'
      }
    },
    {
      name: 'gelbooru, safebooru etc',
      url: '^https?://(?:www\\.)?\\w{3,4}booru\\.(?:com|org)',
      nextLink: 'id("paginator")//b/following-sibling::a[1]',
      pageElement: 'id("post-list")/div[@class="content"]//span[contains(@class,"thumb")]|id("content")/table',
      exampleUrl: 'http://gelbooru.com/index.php?page=post&s=list http://safebooru.org/index.php?page=post&s=list&tags=all http://safebooru.org/index.php?page=tags&s=list'
    },
    {
      name: '耳机大家坛 全球最大中文耳机论坛',
      url: /^https?:\/\/www\.erji\.net\//i,
      exampleUrl: 'http://www.erji.net/thread.php?fid=138',
      nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)]',
      autopager: {
        pageElement: '//table[@id="ajaxtable"] | //div[@id="main"]/form[@method="post"]',
        replaceE: '//div[@class="pages"]'
      }
    },
    {
      name: '艾泽拉斯国家地理论坛',
      url: /^https?:\/\/(?:bbs\.nga\.cn|nga\.178\.com)\//i,
      exampleUrl: 'http://bbs.ngacn.cc/thread.php?fid=390&rand=183',
      nextLink: '//a[@title="下一页"][@href]',
      autopager: {
        pageElement: 'id("topicrows") | id("m_posts_c")',
        useiframe: true,
        separatorReal: false
      }
    },
    {
      name: 'Final Fantasy Shrine Forums',
      url: /^https?:\/\/forums\.ffshrine\.org\//i,
      exampleUrl: 'http://forums.ffshrine.org/general-discussion/',
      nextLink: '//a[@rel="next"][@href]',
      autopager: {
        pageElement: 'id("thread_inlinemod_form") | id("postlist")'
      }
    },
    {
      name: '天猫魔盒论坛',
      url: '^https?://www\\.znds\\.com/*',
      nextLink: '//a[contains(text(), "下一页")]',
      pageElement: 'id("threadlist")/div[@class="bm_c"]',
      exampleUrl: 'http://www.znds.com/bbs-172-3.html'
    },
    {
      name: 'Mobile01',
      url: /^https?:\/\/www\.mobile01\.com\/topicdetail\.php.*$/i,
      exampleUrl: 'http://www.mobile01.com/topicdetail.php?f=254&t=3966939',
      nextLink: '//a[contains(text(), "下一頁")]',
      autopager: {
        pageElement: 'id("section")/div[@class="main"]/div[@class="forum-content"]'
      }
    },
    {
      name: '昆侖 - 资源/连载',
      url: '^https?://bbs\\.ikunlun\\.net/forum\\.php.*$',
      nextLink: '//a[@class="now"]/following-sibling::a[1][not(@class="last") ]',
      pageElement: '//tr[@class="topic_list_row"]'
    },
    {
      name: "koolshare扩展页面",
      url: "^https?://koolshare\\.cn/home\\.php",
      exampleUrl: "http://koolshare.cn/home.php",
      nextLink: "//a[contains(text(),'下一页')]",
      pageElement: "id('ct')//tbody",
      autopager: {
        // 只执行一次，删除多余的表头
        documentFilter: function (doc) {
          const firstDiv = doc.querySelector(".th");
          if (firstDiv) {
            firstDiv.parentNode.removeChild(firstDiv);
          }
        }
      }
    },
    // ========================= picture ================================================
    {
      name: 'Flickr photos',
      url: '^https?://www\\.flickr\\.com/photos/[^/]+/favorites(?:[/?#]|$)',
      exampleUrl: 'https://www.flickr.com/photos/129049306@N04/favorites/page2',
      nextLink: '//div[contains(@class,"pagination")]/a[@rel="next"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@role="main"]/div[contains(@class,"photo-list")]',
        lazyImgSrc: 'data-lazyload-src|data-ks-lazyload',
        iloaded: true,
        newIframe: true,
        itimeout: 1000
      }
      //  insertBefore: "//div[@class=\"Pages\"]"
    },
    // {name: 'pixiv search',
    // url: "^https?://www\\.pixiv\\.net/search\\.php",
    // nextLink: '//a[@rel="next"]',
    // pageElement: '//*[@id="js-react-search-mid"]',
    // },
    //     {name: 'pixiv',
    //         url: "^https?://(www\.)?pixiv\.net.+",
    //         siteExample:'https://www.pixiv.net/novel/search.php?s_mode=s_tag&word=%E5%86%86%E7%92%B0',
    //         nextLink:"//a[@rel='next' or contains(concat(' ',@class,' '),' next ')]|(//nav[@class='column-menu']/ul/li[contains(concat(' ',@class,' '),' after ')]|//span[@class='stacc_more_link']|//div[@class='spotlight-items']/p[@class='more'])/a|/ul[@class='page-list']/li[@class='current']/following-sibling::*[1]/a",
    //         autopager:{
    //             pageElement:"//*[not(@class='popular-introduction' or (contains(@class,'_unit') and //li/@class='bookmark-item'))]/ul[(contains(@class,'_image-items') and not(id('js-react-search-mid js-mount-point-latest-following'))) or contains(@class,'novel-items') or contains(@class,'tag-list inline-') or @class='bookmark-items' or @class='type_entrylist' or @class='member-items' or @class='thu' or @class='user-recommendation-items' or parent::node()[@class='members' or contains(@class,'search_a2_result')]]/li[not(//div/@class='_unit _work-detail-unit')]|//div[@class='event-information' or starts-with(@class,'stacc_status ') or contains(@class,'work-detail-unit') or ../@class='spotlight-items']|id('js-react-search-mid js-mount-point-latest-following')[not(//noscript/*)]/*",
    //             stylish: '@-moz-document url-prefix("http://www.pixiv.net/info.php?") { .autopagerize_page_info { display: inline !important; } .autopagerize_page_separator{ padding-top: 0px !important; margin-bottom: 0px !important; border-bottom:none !important; } }',
    //             useiframe: true,
    //             iloaded: true,
    //             itimeout: 0,
    //             newIframe: false,
    //         }
    //     },
    {
      name: '照片处理网',
      url: /^https?:\/\/www\.photops\.com\/Article\/.+/i,
      siteExample: 'http://www.photops.com/Article/xsjc/20100728172116.html',
      nextLink: '//a[text()="下一页"][@href]',
      autopager: {
        pageElement: '//body/table[last()-2]',
        useiframe: true
      }
    },
    {
      name: '扑家汉化平台',
      url: /^https?:\/\/www\.pujiahh\.com\/library/i,
      siteExample: 'http://www.pujiahh.com/library/',
      nextLink: '//div[@class="pagination"]/ul/li[@class="next-posts"]/a',
      autopager: {
        pageElement: '//div[@class="gametable"]/parent::div',
        replaceE: '//div[@class="pagination"]'
      }
    },
    // === art
    {
      name: 'deviantART Gallery',
      url: /^https?:\/\/\w+\.deviantart\.com\/gallery\//i,
      exampleUrl: 'https://razielmb.deviantart.com/gallery/',
      nextLink: '//li[@class="next"]/a',
      autopager: {
        pageElement: 'css;#gmi-ResourceStream',
        relatedObj: true
      }
    },
    // === mm ===
    {
      name: 'Beautyleg腿模写真图片网',
      url: /^https?:\/\/www\.beautylegmm\.com\/\w+\/beautyleg-\d+.html/i,
      siteExample: 'http://www.beautylegmm.com/x/beautyleg-x.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("contents_post")/div[@class="post"]'
      }
    },
    {
      name: 'sasaone.com',
      url: /^https?:\/\/(\w*\.)?sasaone\.com\/\w+\/\d+\/\d+(_\d+)?\.html/i,
      nextLink: function (doc, win, cplink) {
        const m = cplink.match(/\d+_(\d+)\.html/);
        if (!m) {
          return cplink.replace('.html', '_2.html');
        } else {
          const current = Number(m[1]);
          const next = current + 1;
          const url = cplink.replace(m[1] + '.html', next + '.html');
          return url;
        }
      },
      autopager: {
        enable: true,
        pageElement: '//div[@id="disappear"]',
        ipages: [true, 30]
      }
    },
    {
      name: 'sasaone.com',
      url: /^https?:\/\/(\w*\.)?sasaone\.com\/\w+(\/list.*\.html|\/index.*\.html)?/i,
      nextLink: '//a[text()="下一页"]',
      autopager: {
        enable: true,
        pageElement: '//ul[@id="need"]/li'
      }
    },
    {
      name: '24fa',
      url: /^https?:\/\/(\w*\.)?24fa\.top\/.*\.html/,
      nextLink: 'auto;',
      autopager: {
        enable: true,
        pageElement: '//div[@id="content"]',
        ipages: [true, 30]
      },
      exampleUrl: 'https://www.24fa.top/MeiNv/2017-10/50531p4.html'
    },
    {
      name: '美女86',
      url: '^https?://www\\.17786\\.com\\/\\d+_\\d+\\.html',
      nextLink: '(//div/div/div/a[@class="next-page-a"])[last()]',
      autopager: {
        pageElement: '//div[@class="img_box"]',
        ipages: [true, 30]
      },
      exampleUrl: 'http://www.17786.com/8104_2.html'
    },
    {
      name: '宅男女神',
      url: '^https?://www\\.nvshens\\.com\\/.\\/\\d+\\/',
      nextLink: '//div[@id="pages"]/span/following::a[not(@class) and not(@id)]',
      exampleUrl: 'http://www.nvshens.com/g/17951/',
      autopager: {
        enable: true,
        pageElement: '//ul[@id="hgallery"]',
        ipages: [true, 30]
      }
    },
    {
      name: '爱套图',
      url: '^https://www\\.aitaotu\\.com/[a-z]+/\\d+(_\\d)*\\.html',
      nextLink: '//a[text()="上一页"]',
      prevLink: '//a[text()="下一页"]',
      autopager: {
        enable: true,
        pageElement: 'id("big-pic")/p/a',
        ipages: [true, 30]
      },
      exampleUrl: 'https://www.aitaotu.com/guonei/1081_4.html'
    },
    {
      name: '秀美眉',
      url: '^https?://www\\.(xiumeim|xmeim)\\.com/photos/.*\\.html',
      nextLink: '//a[@id="nextPageHref"]',
      autopager: {
        enable: true,
        pageElement: '//div[@class="gallary_item"]',
        ipages: [true, 30]
      },
      exampleUrl: 'http://www.xiumeim.com/photos/YOUMI-189522.html'
    },
    {
      name: '秀美眉2',
      url: /^https?:\/\/www\.(xiumeim|xmeim)\.com(\/albums\/[^\/]+\.html)?/,
      nextLink: '//a[text()="后页>"]',
      autopager: {
        enable: true,
        pageElement: '//div[@class="gallary_wrap"]',
        ipages: [true, 2]
      },
      exampleUrl: 'http://www.xiumeim.com/'
    },
    {
      name: '美图录',
      url: '^https?://www\\.meitulu\\.com/item/\\d+(_\\d+)?\\.html',
      nextLink: '//a[text()="下一页"]',
      autopager: {
        ipages: [true, 30],
        pageElement: '//div[@class="content"]/center'
      },
      exampleUrl: 'https://www.meitulu.com/item/3225_2.html'
    },
    {
      name: 'meituri',
      url: '^https?://www\\.meituri\\.com',
      nextLink: '//a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="content"]',
        ipages: [true, 30]
      },
      exampleUrl: 'https://www.meitulu.com/item/3225_2.html'
    },
    {
      name: 'mimifuli',
      url: /^https?:\/\/(www\.)?(mimifuli|bbt01|yxpjw|yxpjwnet|tangniaobingyinshi|52zfl)\.(vip|info|club|net|com)/i,
      nextLink: '//li[@class="next-page"]/a | //div[@class="article-paging"]/span/following-sibling::a[1]',
      autopager: {
        enable: true,
        pageElement: '//article[@class="article-content"]|//article[@class="excerpt excerpt-one"]',
        ipages: [true, 30],
        replaceE: '//blockquote'
      },
      exampleUrl: 'http://zhaofuli.mobi/luyilu/2016/0224/1990.html'
    },
    {
      name: '192tt-gallery',
      url: /^https?:\/\/www\.192tt\.com\/\w+\/\w+\/[a-zA-Z]+\d+\.html?/i,
      preLink: {
        startAfter: '_',
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: '_',
        mFails: [/^https?:\/\/www\.192tt\.com\/\w+\/\w+\/[^\/]+(?=\.html)/, '_1\.html'],
        inc: 1
      },
      autopager: {
        enable: true,
        pageElement: '//div[@class="picsbox picsboxcenter"]/center',
        ipages: [true, 30]
      }
    },
    {
      name: '192tt',
      url: /^https?:\/\/www\.192tt\.com/i,
      nextLink: '//div[@class="page"]/a[@class="next"]',
      pageElement: '//ul[@class="clearfix"]',
      exampleUrl: 'https://www.192tt.com/gq/'
    },
    {
      name: '17see',
      url: /^https?:\/\/www\.17see\.net/i,
      nextLink: 'auto;',
      autopager: {
        enable: true,
        pageElement: '//div[@id="ad_content_main"]/following-sibling::img|//div[@id="ad_content_main"]/following-sibling::p/img|//div[@class="m-list-main"]/ul[not(//div[@id="ad_content_main"]/following-sibling::img)]',
        ipages: [true, 30]
      },
      exampleUrl: 'https://www.17see.net/qingchun/5542_44.html'
    },
    {
      name: '悠悠美图',
      url: /^https?:\/\/www\.youyourentiyishu\.com/i,
      nextLink: function (doc, win, cplink) {
        const m = cplink.match(/\d+-(\d+)\.html/);
        if (!m) {
          return cplink.replace('.html', '-2.html');
        } else {
          const current = Number(m[1]);
          const next = current + 1;
          const url = cplink.replace(m[1] + '.html', next + '.html');
          const url2 = doc.querySelector('a.next').getAttribute('href');
          if (url != url2) { return undefined; } else { return url; }
        }
      },
      autopager: {
        enable: true,
        pageElement: '//div[@class="showimg"]/a',
        ipages: [true, 30]
      },
      exampleUrl: 'http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html'
    },
    {
      name: 'ppzix',
      url: /^https?:\/\/www\.ppzix\.com/i,
      nextLink: '(//div[@class="neiye_page"]/span|//div[@class="neiye_page"]/strong)/following-sibling::a',
      autopager: {
        pageElement: '//div[@class="nr_cons"]/a|//ul[@class="tpboxul"]/li',
        ipages: [true, 30]
      },
      exampleUrl: 'http://www.ppzix.com/tyjr/1915.html'
    },
    {
      name: 'sytaotu',
      url: /^https?:\/\/www\.sytaotu\.com/,
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@id="picg"]', // 主体内容 xpath 或 CSS选择器 或函数返回值(~~必须~~)
        ipages: [true, 30] // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.(可选)
      },
      exampleUrl: 'http://www.sytaotu.com/seying/meinvmote/20200608/85252.html'
    },
    {
      name: '7160美女图片',
      url: '^https?://www\\.7160\\.com/*/*/',
      nextLink: '//a[text()="下一页"]',
      pageElement: 'id("arc")/div/div/div/a/img',
      exampleUrl: 'http://www.7160.com/meinv/11988/'
    },
    {
      name: '七丽丽图库|7lili.com',
      url: '^https?://www\\.7lili\\.com/.+/.+/.+/.+\\.html',
      nextLink: '//a[text()="下一页"]',
      pageElement: '//div/div/div/a/img',
      exampleUrl: 'http://www.7lili.com/p/xinggan/201403/30333.html'
    },
    {
      name: '明星网',
      url: /^https?:\/\/www\.mingxing\.com/,
      nextLink: '(//a[@title="下一页"])[last()]',
      pageElement: '//ul[@class="pbl "]',
      exampleUrl: 'http://www.mingxing.com/tuku/index.html'
    },
    // === 壁纸、素材、icon
    {
      name: '桌酷壁纸',
      url: /^https?:\/\/www\.zhuoku\.com\/.*\.htm/i,
      exampleUrl: 'http://www.zhuoku.com/zhuomianbizhi/computer-kuan/20140107052306.htm',
      nextLink: '//div[@class="turn"]/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("liebiao")'
      }
    },
    {
      name: '统一壁纸站',
      url: '^https?://www\\.3987\\.com/desk/wall/*',
      nextLink: '//a[@hidefocus="true" and @target="_self" and @title="下一页"]',
      pageElement: 'id("Article")/div[@class="big-pic"]',
      exampleUrl: 'http://www.3987.com/desk/wall/31420.html'
    },
    {
      name: '素材天下',
      url: /^https?:\/\/www\.sucaitianxia\.com\//i,
      exampleUrl: 'http://www.sucaitianxia.com/psd/Index.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="home_19"]/div[@class="left"]/div[@class="mid"]'
      }
    },
    {
      name: '昵图网',
      url: /^https?:\/\/[a-z]+\.nipic\.com\//i,
      exampleUrl: 'http://soso.nipic.com/search.aspx?t=tk&q=%B7%E2%C3%E6',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("bd") | //ul[@class="search-result-box clearfix"] | //center/table[@width="900" and @cellspacing="0" and @cellpadding="0" and @border="0"]',
        lazyImgSrc: 'data-original',
        stylish: '.lazy { display: block; }'
      }
    },
    {
      name: 'easyicon.net',
      url: '^https?://www\\.easyicon\\.net/iconsearch/',
      nextLink: '//div[@class="pages_all"]/a[text()="下一页>"]',
      pageElement: 'id("result_right_layout")',
      exampleUrl: 'http://www.easyicon.net/iconsearch/feed/&color=black'
    },
    {
      name: 'iconarchive',
      url: '^https?://www\\.iconarchive\\.com/search\\?q=*',
      nextLink: '//div[@class="pagination"]/a[@class="next"]',
      pageElement: 'id("layout-search-content")',
      exampleUrl: 'http://www.iconarchive.com/search?q=pin'
    },
    {
      name: 'Find Icons',
      url: '^https?://findicons\\.com/search/',
      nextLink: '//div[@class="pages"]/a[contains(text(), "Next") or contains(text(), "下一页")]',
      pageElement: 'id("search_con")/div[@class="icon_list icon_list_165"]',
      exampleUrl: 'http://findicons.com/search/earth'
    },

    // ========================= software ================================
    {
      name: '善用佳软',
      url: /^https?:\/\/xbeta\.info\/page\//i,
      exampleUrl: 'http://xbeta.info/page/2',
      nextLink: '//div[@class="wp-pagenavi"]/a[@class="nextpostslink"]',
      autopager: {
        pageElement: 'id("entries-in")/div[@class="post"]',
        replaceE: 'css;#entries-in > .wp-pagenavi'
      }
    },
    {
      name: '异次元软件世界',
      url: /^https?:\/\/www\.iplaysoft\.com\//i,
      exampleUrl: 'http://www.iplaysoft.com/tag/%E5%90%8C%E6%AD%A5',
      nextLink: '//span[@class="pagenavi_c"]/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("postlist")/div[@class="entry"]',
        replaceE: '//div[@class="pagenavi"]/span[@class="pagenavi_c"]'
      }
    },
    {
      name: 'PlayNext - 低调的异次元',
      url: '^https?://www\\.playnext\\.cn/',
      nextLink: '//div[@class="pagenavi"]/a[contains(text(), "下一页")]',
      pageElement: '//div[@id="container"]/div[@class="content"]/div[@class="post-list"]'
    },
    {
      name: 'iPc.me - 与你分享互联网的精彩！',
      url: '^https?://www\\.ipc\\.me/',
      nextLink: '//div[@class="pagenavi"]/a[contains(text(), "下一页")]',
      pageElement: 'id("posts-list")'
    },
    {
      name: '独木成林',
      url: '^https?://www\\.guofs\\.com/',
      nextLink: '//a[@class="nextpostslink"]',
      pageElement: 'id("content")',
      exampleUrl: 'http://www.guofs.com/'
    },
    {
      name: '软件淘',
      url: '^https?://www\\.65052424\\.com/',
      nextLink: '//a[@class="next"]',
      pageElement: '//div[@id="content"]',
      exampleUrl: 'http://www.65052424.com/page/7'
    },
    {
      name: 'portableapps',
      url: '^https?://portableapps\\.com/(?:forums|node)/',
      nextLink: '//li[@class="pager-next"]/a',
      pageElement: 'id("forum")/table|id("comments")/*[not(@class="item-list")]'
    },
    {
      name: 'PortableAppC - 有中国特色的便携软件',
      url: /^https?:\/\/www\.portableappc\.com\//i,
      exampleUrl: 'http://www.portableappc.com/',
      nextLink: '//a[@class="nextpostslink"]',
      autopager: {
        pageElement: 'id("main")/div[@class="box"]',
        replaceE: '//div[@class="wp-pagenavi"]'
      }
    },
    {
      name: '精品绿色便携软件',
      url: '^https?://www\\.portablesoft\\.org/',
      nextLink: '//div[@class="pagination"]/a[text()="下页 ?"]',
      pageElement: 'id("main")/div[@class="post-entry"]'
    },
    {
      name: 'zd423',
      url: /^https?:\/\/www\.zdfans\.com\//i,
      exampleUrl: 'http://www.zdfans.com/',
      nextLink: '//div[@class="paging"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="wrapper"]/div[@class="content-wrap"]/div[@class="content column2"]/ul[@class="excerpt"]'
      }
    },
    {
      name: '软件阁 - 原创绿色软件更新,精品软件共享',
      url: /^https?:\/\/www\.lite6\.com\//i,
      exampleUrl: 'http://www.lite6.com/',
      nextLink: '//li[@class="next"]/a',
      autopager: {
        pageElement: '//div[@class="main"]/div[@class="left"]'
      }
    },
    {
      name: 'Yanu | 分享优秀、纯净、绿色、实用的精品软件',
      url: '^https?://www\\.ccav1\\.com/*',
      nextLink: 'id("content-list")/div[@class="pagination"]/a[text()="下页"]',
      pageElement: '//div[@id="content-list"]',
      exampleUrl: 'http://www.ccav1.com/'
    },
    {
      name: '绿软家园(绿色下载站)',
      url: /^https?:\/\/www\.downg\.com\/.*\.html/i,
      exampleUrl: 'http://www.downg.com/list/r_1_1.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="cp top-list" or @class="cp software-list"]/div[@class="cp-main"]'
      }
    },
    {
      name: '绿色下载吧',
      url: /^https?:\/\/www\.xiazaiba\.com\//,
      exampleUrl: 'http://www.xiazaiba.com/newsoft.html',
      nextLink: '//div[@class="page-num" or @class="ylmf-page"]/a[@class="nextprev"]',
      autopager: {
        pageElement: 'id("j_soft_list") | //ul[@class="list-soft list-soft-title j-hover"]'
      }
    },
    {
      name: '下载银行',
      url: /^https?:\/\/www\.downbank\.cn\/.*\.htm/i,
      exampleUrl: 'http://www.downbank.cn/soft/html/newlist-1.htm',
      nextLink: '//p[@class="list_page"]/a[text()="下一页"] | id("NextPageText")//a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="topiclistzone"] | id("content")/div[@class="listitem"]/div[@class="cp-main"]'
      }
    },
    {
      name: '小路工作室',
      url: /^https?:\/\/www\.wzlu\.cc\/.*\.html/i,
      exampleUrl: 'http://www.wzlu.cc/soft/html/newlist-1.html',
      nextLink: '//p[@class="list_page"]/a[text()="下一页"] | id("NextPageText")//a[text()="下一页"]',
      autopager: {
        pageElement: 'id("topiclistzone") | id("listbox")'
      }
    },
    {
      name: '心海e站',
      url: /^https?:\/\/hrtsea\.com\//i,
      exampleUrl: 'http://hrtsea.com/',
      nextLink: 'id("pagenavi")/span[@class="older"]/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("main")'
      }
    },
    {
      name: '天天资源网',
      url: /^https?:\/\/www\.ttrar\.com\//i,
      exampleUrl: 'http://www.ttrar.com/',
      nextLink: '//div[@id="page"]/a[text()="..."] | //div[@class="page"]/a[text()="下一页"]',
      autopager: {
        pageElement: '//ul[@class="articlelist-ul"]',
        replaceE: 'css;#page, .page'
      }
    },
    {
      name: '重灌狂人',
      url: /^https?:\/\/briian\.com\//i,
      exampleUrl: 'http://briian.com/category/android/android-photos-draw',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("content")'
      }
    },
    {
      name: '天天软件',
      url: /^https?:\/\/www\.tt7z\.com\//i,
      nextLink: 'auto;',
      autopager: {
        pageElement: '//ul[@class="articlelist-ul"]',
        replaceE: '//div[@id="left_content_list"]/div[@class="page"]'
      }
    },
    {
      name: 'Sublime text - Packages',
      url: '^https://sublime\\.wbond\\.net/browse',
      nextLink: '//nav[@class="pagination"]/a[@class="selected"]/following::a[1]',
      pageElement: '//div[@id="content"]/div[@class="results"]/ul[@class="packages results"]'
    },
    {
      name: 'laomaoit - 老殁软件分享',
      url: '^https?://www\\.laomoit\\.com',
      exampleUrl: 'https://www.laomoit.com',
      nextLink: '//div[@id="pagenavi"]//a[text()="下一页"]',
      autopager:{
        pageElement:'id("post") | id("content")',
        replaceE: 'css;#pagenavi',
        // 删除页面上不需要的元素
        documentFilter: function(doc){
          const nodeBrowse = doc.querySelector(".browse");
          if (nodeBrowse) {
            nodeBrowse.parentNode.removeChild(nodeBrowse);
          }
          const nodeMap = doc.querySelector("#map");
          if (nodeMap) {
            nodeMap.parentNode.removeChild(nodeMap);
          }
        },
      },
    },
    // ========================= dev =================================
    {
      name: 'User Scripts',
      url: /^https?:\/\/userscripts-mirror\.org/i,
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("review-list") | //tr[starts-with(@id, "scripts-")] | //tr[starts-with(@id, "posts-")]',
        replaceE: '//div[@class="pagination"]'
      }
    },
    {
      name: 'UserStyles, GreasyFork',
      url: '^https?://(forum\.userstyles|greasyfork)\.org',
      nextLink: '//a[@rel="next" or div/@id="right-arrow"] | id("PagerMore")/a',
      siteExample: 'https://forum.userstyles.org;https://forum.userstyles.org/discussion/40694/;https://forum.userstyles.org/search?Page=p3&Search=xml;https://greasyfork.org/scripts?page=2;https://greasyfork.org/forum/categories/script-discussions/p2;https://greasyfork.org/forum/dashboard/log/edits;https://greasyfork.org/forum/profile/comments/1/JasonBarnabe',
      pageElement: '//div[@class="styles boxes"] | id("browse-script-list")/li | id("Content")//ul[contains(@class,"DataList")]/li | id("Log") | //div[@class="styles"]/div[@class="style_card overrideHref"] | id("search-results")/li | id("main-article")/article',
    },
    {
      name: '博客园',
      url: '^https?://www\\.cnblogs\\.com/.*$',
      nextLink: '//a[(text()="Next >")]',
      pageElement: '//div[@id="post_list"]',
      exampleUrl: 'http://www.cnblogs.com/cate/javascript/'
    },
    {
      name: '开源中国',
      url: '^https?://\\w+\\.oschina\\.net/',
      nextLink: '//li[@class="page next"]/a',
      pageElement: '//div[@class="code_list"]/ul | //div[@class="ProjectList"]/ul[@class="List"] | id("OSC_Content")/div[@class="SpaceList BlogList"]/ul | \
        id("OSC_Content")/div[@class="QuestionList"]/ul/li[@class="question"]'
    },
    {
      name: 'CSDN博客',
      url: /^https?:\/\/blog\.csdn\.net/i,
      siteExample: 'http://blog.csdn.net/wangjieest?viewmode=list',
      nextLink: function (doc, win, cplink) {
        for (var i = 0; i < doc.scripts.length; i++) {
          const scriptText = doc.scripts[i].text;
          if (typeof (scriptText) != "undefined" && scriptText.indexOf("currentPage") > 0) {
            const pageMatches = scriptText.match(/currentPage[ ]?=[ ]?(\d+)/);
            if (pageMatches.length != 2) {
              continue;
            }

            const baseUrlMatches = scriptText.match(/baseUrl[ ]?=[ ]?'([^']+)'/);
            if (baseUrlMatches.length != 2) {
              continue;
            }
            return baseUrlMatches[1] + '/' +(parseInt(pageMatches[1]) + 1);
          }
        }
        return null;
      },
      autopager: {
        pageElement: '//div[@id="article_list"] | // div[@class="article-list"]',
        documentFilter: function (doc) {
          // 文档底部的 marginBottom 重置
          const articleList = doc.querySelector(".article-list");
          if (articleList) {
            articleList.style.marginBottom = "0";
          }
        },
        startFilter: function (win, doc) {
          // 文档底部的 marginBottom 重置
          const articleList = doc.querySelector(".article-list");
          if (articleList) {
            articleList.style.marginBottom = "0";
          }
          // 移动分页位置
          const pageBox = document.querySelector("#pageBox");
          if (pageBox) {
            pageBox.parentNode.parentNode.appendChild(pageBox);
          }
          // 删除广告
          const adBox = document.querySelector(".box-box-large");
          if (adBox) {
            adBox.parentNode.removeChild(adBox);
          }
        }
      }
    },
    {
      name: 'CSDN论坛',
      url: /^https?:\/\/bbs\.csdn\.net\/forums\//i,
      siteExample: 'http://bbs.csdn.net/forums/Qt',
      nextLink: '//div[@class="page_nav"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//table[@class="forums_tab_table"]/tbody/tr',
        replaceE: '//div[@class="page_nav"]'
      }
    },
    {
      name: 'CSDN话题',
      url: /^https?:\/\/bbs\.csdn\.net\/topics\//i,
      siteExample: 'http://bbs.csdn.net/topics/390244325',
      nextLink: '(//div[@class="page_nav"])[1]/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("bbs_detail_wrap")',
        documentFilter: function (doc) {
          // 删除文档中的多余表头
          const titleH = doc.querySelector(".bbs_title_h");
          if (titleH) {
            titleH.parentNode.removeChild(titleH);
          }

          const titleBar = doc.querySelector(".bbs_title_bar");
          if (titleBar) {
            titleBar.parentNode.removeChild(titleBar);
          }

          const breadWrap = doc.querySelector(".bbs_bread_wrap");
          if (breadWrap) {
            breadWrap.parentNode.removeChild(breadWrap);
          }
          // 尾页的分页信息隐藏
          const pageNav = doc.querySelectorAll(".mod_fun_wrap");
          if (pageNav) {
            let index = 0;
            if (pageNav.length == 2) {
              index = 1;
            }
            pageNav[index].style.display = "none";
          }
        },
        startFilter: function (win, doc) {
          // 尾页的分页信息隐藏
          const pageNav = doc.querySelectorAll(".mod_fun_wrap");
          if (pageNav) {
            let index = 0;
            if (pageNav.length == 2) {
              index = 1;
            }
            pageNav[index].style.display = "none";
          }
          // 扩展的其他话题信息移除，长度太长，导致翻页信息有点问题
          const feedBox = doc.querySelector(".post_feed_box");
          if (feedBox) {
            feedBox.parentNode.removeChild(feedBox);
          }
        }
      }
    },
    {
      name: '51CTO',
      url: /^https?:\/\/\w+\.51cto\.com\/\w+\/\d+\/\w+\.htm/i,
      siteExample: 'http://developer.51cto.com/art/201007/214478.htm',
      nextLink: 'auto;',
      autopager: {
        useiframe: false,
        relatedObj: ['css;#content', 'bottom'],
        pageElement: 'css;#content>p'
      }
    },
    {
      name: '图灵社区 : 图书',
      url: '^https?://www\\.ituring\\.com\\.cn/article/',
      nextLink: 'auto;',
      pageElement: '//div[@id="question-header"]/h1 | //div[@class="post-text"]',
      separatorReal: false
    },
    {
      name: 'Stack Overflow, Super User, Server Fault, Stack Apps',
      url: '^https?://(?:meta\\.)?(?:s(?:erverfault|tackoverflow|uperuser|tackapps)|\\w+\\.stackexchange|askubuntu)\\.com/',
      nextLink: '//a[@rel="next"]',
      pageElement: 'id("mainbar questions")//div[contains(concat(" ",@class," ")," question-summary ")]|id("answers")/div[@class="pager-answers"][1]/following-sibling::*[./following-sibling::div[@class="pager-answers"]]'
    },
    // ========================= novel =============================
    {
      name: '起点文学',
      url: /^https?:\/\/(www|read)\.(qidian|qdmm|qdwenxue)\.com\/BookReader\/\d+,\d+/i,
      siteExample: 'http://www.qidian.com/BookReader/1545376,27301383.aspx',
      useiframe: true,
      nextLink: '//a[@id="NextLink"]',
      autopager: {
        enable: true,
        useiframe: true,
        pageElement: '//div[@id="maincontent"]/div[@class="booktitle"] | //div[@id="maincontent"]/div[@id="content"]'
      }
    },
    {
      name: "bl-novel",
      url: "^https?://bl-novel\\.in/novel",
      nextLink: "//a[@id='pb_next']",
      pageElement: "//div[@id='nr']",
      documentFilter: function (doc, nextLink) {
        var scripts = doc.getElementsByTagName('script');
        var re = /chapter\s*=\s*secret\(['"](.*)['"],\s*['"](.*)['"],\s*(\w+)\s*\)/g;
        var c;
        [].forEach.call(scripts, function(x) {
          if (x.innerText.indexOf('var chapter') >= 0) {
            var temp = re.exec(x.innerText);
            var content = temp[1];
            var salt = temp[2];
            // function secret is provided by the website
            if (temp[3].indexOf('true')>=0) {
              // eslint-disable-next-line no-undef
              c = secret(content, salt, true);
            }
            else {
              // eslint-disable-next-line no-undef
              c = secret(content, salt, false);
            }
            doc.getElementById('nr1').innerHTML=c;
          }
        });
      }
    },
    {
      name: '第一版主',
      url: "^https?://www\\.diyibanzhu9\\.com",
      pageElement: "//div[@id='content']",
      nextLink: function(doc, win, cplink) {
        var chapters = getAllElementsByXpath("//div[@class='chapterPages']/a",doc);
        var prefix = cplink.substr(0,cplink.lastIndexOf('/')) + '/';
        var i = 0;
        for (i=0; i<chapters.snapshotLength; i++){
          if (chapters.snapshotItem(i).className === 'curr') {
            if (i+1 < chapters.snapshotLength) {
              return prefix + chapters.snapshotItem(i+1).getAttribute('href');
            }
            else {
              return getDomain(cplink) + getElementByXpath("//span[@class='next']/a").getAttribute('href');
            }
          }
        }
      }
    },
    {
      name: '起点文学-排行榜',
      url: /^https?:\/\/www\.(qidian)\.com(\/mm)?\/rank\/.*/i,
      siteExample: 'https://www.qidian.com/rank/collect',
      nextLink: function (doc, win, cplink) {
        var res = getElementByXpath('//div[@id="page-container"]', doc);
        if (res === null) {
          return undefined;
        }

        const next = Number(res.dataset.page) + 1;

        if (next > res.dataset.pagemax) {
          return undefined;
        } else {
          if (cplink.indexOf("page=") != -1) {
            return cplink.replace(/page=\d+/, 'page=' + next);
          } else if (cplink.indexOf("?") != -1) {
            return cplink + "&page="+next;
          } else {
            return cplink + "?page="+next;
          }
        }
      },
      autopager: {
        pageElement: '//div[@class="rank-body"]'
      }
    },
    {
      name: '逐浪小说',
      url: /^https?:\/\/book\.zhulang\.com\/.+\.html/i,
      siteExample: 'http://book.zhulang.com/153319/62230.html',
      nextLink: '//div[@class="readpage_leftnfy"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@class="readpage_leftntxt"]'
      }
    },
    {
      name: '烟雨红尘',
      url: /^https?:\/\/www\.cc222\.com\/chapter\/.+\.html/i,
      siteExample: 'http://www.cc222.com/chapter/558139.html',
      nextLink: '//div[@id="paging"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="aContainer"]',
        remain: 1 / 5
      }
    },
    {
      name: '17k',
      url: /^https?:\/\/(mm.17k|www.17k)\.com\/chapter\/.+\.html/i,
      siteExample: 'http://www.17k.com/chapter/143095/3714822.html',
      nextLink: '//div[@class="read_bottom"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@class="readAreaBox"]'
      }
    },
    {
      name: '纵横书库',
      url: /^https?:\/\/book\.zongheng\.com\/chapter\/.+\.html/i,
      siteExample: 'http://book.zongheng.com/chapter/239553/4380340.html',
      nextLink: '//div[@class="tc quickkey"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@class="readcon"]'
      }
    },
    {
      name: '纵横女生',
      url: /^https?:\/\/www\.mmzh\.com\/chapter\/.+\.html/i,
      siteExample: 'http://www.mmzh.com/chapter/182074/3287355.html',
      nextLink: '//div[@class="tc key"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@class="book_con"]'
      }
    },
    {
      name: '新小说吧',
      url: /^https?:\/\/book\.xxs8\.com\/.+\.html/i,
      siteExample: 'http://book.xxs8.com/165779/859903.html',
      nextLink: '//div[@class="page"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="midbody"]',
        maxpage: 10
      }
    },
    {
      name: '书迷楼',
      url: /^https?:\/\/www\.shumilou\.com\/.+\.html/i,
      siteExample: 'http://www.shumilou.com/tiandilonghun/698520.html',
      nextLink: '//div[@class="content"]/div[@id="content"]/div[@class="title"]/a[text()="下一页(→)"]',
      autopager: {
        pageElement: '//div[@class="content"]/div[@id="content"]'
      }
    },
    {
      name: '玄幻小说网',
      url: /^https?:\/\/www\.xhxsw\.com\/books\/.+\.htm/i,
      siteExample: 'http://www.xhxsw.com/books/1063/1063066/10579171.htm',
      nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '新浪读书',
      url: /^https?:\/\/vip\.book\.sina\.com\.cn\/book\/.+\.html/i,
      siteExample: 'http://vip.book.sina.com.cn/book/chapter_212356_210018.html',
      nextLink: '//p[@class="pages"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@class="mainContent"]'
      }
    },
    {
      name: '搜狐原创',
      url: /^https?:\/\/vip\.book\.sohu\.com\/content/i,
      siteExample: 'http://vip.book.sohu.com/content/124852/3902398/',
      nextLink: '//div[@class="artical_btn"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="bgdiv"]'
      }
    },
    {
      name: '红袖添香',
      url: /^https?:\/\/novel\.hongxiu\.com\/a\/.+\.shtml/i,
      siteExample: 'http://novel.hongxiu.com/a/303084/3543064.shtml',
      nextLink: '//div[@class="papgbutton"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@class="wrapper_main"]'
      }
    },
    {
      name: '言情小说吧',
      url: /^https?:\/\/www\.xs8\.cn\/book\/.+\.html/i,
      siteExample: 'http://www.xs8.cn/book/132368/86157.html',
      nextLink: '//div[@class="chapter_Turnpage"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@class="chapter_content"]'
      }
    },
    {
      name: '来书小说网',
      url: /^https?:\/\/www\.laishu\.com\/book\/.+\.shtml/i,
      siteExample: 'http://www.laishu.com/book/8/8891/5488036.shtml',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//table[@class="tabkuan"]'
      }
    },
    {
      name: '小说阅读网',
      url: /^https?:\/\/www\.readnovel\.com\/novel\/.+/i,
      siteExample: 'http://www.readnovel.com/novel/142947.html',
      nextLink: '//div[@class="bottomTools1"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="newContentBody "]'
      }
    },
    {
      name: '凤鸣轩',
      url: /^https?:\/\/read\.fmx\.cn\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://read.fmx.cn/files/article/html/5/7/0/4/8/5/70485/1339404.html',
      nextLink: '//div[@class="newread_fy"]/descendant::a[text()="下一章>>"]',
      autopager: {
        pageElement: '//div[@class="newbodybox"]'
      }
    },
    {
      name: '红薯网',
      url: /^https?:\/\/www\.hongshu\.com\/content\/.+\.html/i,
      siteExample: 'http://www.hongshu.com/content/38591/49531-1193339.html',
      nextLink: '//div[@class="ann"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="readtext"]'
      }
    },
    {
      name: '百书斋',
      url: /^https?:\/\/baishuzhai\.com/i,
      siteExample: 'http://baishuzhai.com/shancunqirenchuan/683763.html',
      nextLink: '//div[@class="page"]/descendant::a[text()="下一章(快捷键:→)"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="booktext"]'
      }
    },
    {
      name: '百书库',
      url: /^https?:\/\/baishuku\.com\/html\/.+\.html/i,
      siteExample: 'http://baishuku.com/html/40/40514/8778339.html',
      nextLink: '//div[@id="footlink"]/a[text()="下一页(快捷键:→)"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '顶点小说',
      url: '^https?://www\\.23us\\.com/html/.+\\.html',
      siteExample: 'http://www.23us.com/html/26/26627/16952316.html',
      nextLink: ' //dd[@id="footlink"]/descendant::a[text()="下一页"]',
      pageElement: 'id("amain")/dl/dd/h1 | id("contents")'
    },
    {
      name: '快眼文学网',
      url: /^https?:\/\/www\.kywxw\.com\/.+\.html/i,
      siteExample: 'http://www.kywxw.com/0/12/3792643.html',
      nextLink: '//div[@id="thumb"]/descendant::a[text()="下一章"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '就爱文学',
      url: /^https?:\/\/www\.92wx\.org\/html\/.+\.html/i,
      siteExample: 'http://www.92wx.org/html/0/807/220709.html',
      nextLink: '//div[@id="page_bar"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="chapter_content"]'
      }
    },
    {
      name: '亲亲小说网',
      url: /^https?:\/\/www\.77shu\.com\/view\/.+\.html/i,
      siteExample: 'http://www.77shu.com/view/0/20/2062418.html',
      nextLink: 'auto;',
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="chapter_content"] | //div[@id="content"]'
      }
    },
    {
      name: '七味书屋',
      url: /^https?:\/\/www\.7wsw\.net\/html\/.+\.html/i,
      siteExample: 'http://www.7wsw.net/html/shifangtianshi/719412.html',
      nextLink: '//div[@id="chapter_pager"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@class="book_middle_article"]'
      }
    },
    {
      name: '天天中文',
      url: /^https?:\/\/www\.360118\.com\/html\/.+\.html/i,
      siteExample: 'http://www.360118.com/html/21/21951/5416831.html',
      nextLink: '//div[@id="FootLink"]/descendant::a[text()="下一页（快捷键→）"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '言情后花园',
      url: /^https?:\/\/www\.yqhhy\.org\/novel\/.+\.html/i,
      siteExample: 'http://www.yqhhy.org/novel/0/761/38769.html',
      nextLink: '//div[@id="link"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '平南文学',
      url: /^https?:\/\/www\.pnxs\.com\/book\/.+\.html/i,
      siteExample: 'http://www.pnxs.com/book/zhongshengyantaizidan/2164438.html',
      nextLink: '//div[@class="book_middle_text_next"]/descendant::a[text()="下一章"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@class="book_middle_text"]'
      }
    },
    {
      name: '一流小说',
      url: /^https?:\/\/www\.1lxs\.com\/novel\/.+\.html/i,
      siteExample: 'http://www.1lxs.com/novel/80341/9055036.html',
      nextLink: '//div[@id="chapter_nav"]/descendant::a[text()="下一章"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '一一小说',
      url: /^https?:\/\/www\.11xs\.com\/.+\.htm/i,
      siteExample: 'http://www.11xs.com/xs/213/119908.htm',
      nextLink: '//div[@id="LinkMenu"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="Content"]'
      }
    },
    {
      name: '六九中文',
      url: /^https?:\/\/www\.69zw\.com\/xiaoshuo\/.+\.html/i,
      siteExample: 'http://www.69zw.com/xiaoshuo/21/21943/4461482.html',
      nextLink: '//div[@class="chapter_Turnpage"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@class="novel_content"]'
      }
    },
    {
      name: '华夏书库',
      url: /^https?:\/\/www\.hxsk\.net\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.hxsk.net/files/article/html/67/67509/12704488.html',
      nextLink: '//td[@class="link_14"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//table[@class="border_l_r"]'
      }
    },
    {
      name: '书路/3K',
      url: /^https?:\/\/www\.(shuluxs|kkkxs)\.com\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.shuluxs.com/files/article/html/22/22306/8727879.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '书山路',
      url: /^https?:\/\/www\.shu36\.com\/book\/.+\.html/i,
      siteExample: 'http://www.shu36.com/book/0/1/3.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '落秋',
      url: /^https?:\/\/www\.luoqiu\.com\/html\/.+\.html/i,
      siteExample: 'http://www.luoqiu.com/html/18/18505/1385765.html',
      nextLink: '//div[@id="bgdiv"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//table[@class="border_l_r"]'
      }
    },
    {
      name: '君子网',
      url: /^https?:\/\/www\.junziwang\.com\/.+\.html/i,
      siteExample: 'http://www.junziwang.com/0/155/25137.html',
      nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '哈罗小说网',
      url: /^https?:\/\/www\.hellodba\.net\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.hellodba.net/files/article/html/0/46/21565.html',
      nextLink: '//div[@class="papgbutton"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="htmlContent"]'
      }
    },
    {
      name: '百书楼',
      url: /^https?:\/\/baishulou\.com\/read\/.+\.html/i,
      siteExample: 'http://baishulou.com/read/10/10647/2536085.html',
      nextLink: '//a[text()="下一页(快捷键:→)"][@href]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '万书楼',
      url: /^https?:\/\/www\.wanshulou\.com\/xiaoshuo\/.+\.shtml/i,
      siteExample: 'http://www.wanshulou.com/xiaoshuo/29/29091/2062593.shtml',
      nextLink: '//div[@id="LinkMenu"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="BookText"]'
      }
    },
    {
      name: '万卷书屋',
      url: /^https?:\/\/www\.wjsw\.com\/html\/.+\.shtml/i,
      siteExample: 'http://www.wjsw.com/html/35/35404/2887335.shtml',
      nextLink: '//div[@id="bookreadbottom"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="maincontent"]'
      }
    },
    {
      name: '书书网',
      url: /^https?:\/\/www\.shushuw\.cn\/shu\/.+\.html/i,
      siteExample: 'http://www.shushuw.cn/shu/28560/4509794.html',
      nextLink: '//div[@align="center"]/a[text()="下页"][@href]',
      autopager: {
        pageElement: '//div[@class="cendiv"]'
      }
    },
    {
      name: '飞卢小说',
      url: /^https?:\/\/b\.faloo\.com\/p\/.+\.html/i,
      siteExample: 'http://b.faloo.com/p/247559/1.html',
      nextLink: '//div[@id="pager"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="main0"]'
      }
    },
    {
      name: '青帝文学网',
      url: /^https?:\/\/www\.qingdi\.com\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.qingdi.com/files/article/html/0/27/13314.html',
      nextLink: '//div[@class="readerFooterPage"]/descendant::a[text()="下一页"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@class="readerTitle"]'
      }
    },
    {
      name: '笔下文学',
      url: /^https?:\/\/www\.bxwx\.org\/b\/.+\.html/i,
      siteExample: 'http://www.bxwx.org/b/56/56907/9020932.html',
      nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页[→]"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '笔趣阁',
      url: /^https?:\/\/www\.biquge\.com\/.+\.html/i,
      siteExample: 'http://www.biquge.com/0_67/471472.html',
      nextLink: '//div[@class="bottem2"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '小说客栈',
      url: /^https?:\/\/www\.xskz\.com\/xiaoshuo\/.+\.shtml/i,
      siteExample: 'http://www.xskz.com/xiaoshuo/29/29091/2062593.shtml',
      nextLink: '//div[@id="LinkMenu"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="BookText"]'
      }
    },
    {
      name: '翠微居',
      url: /^https?:\/\/www\.cuiweiju\.com\/html\/.+\.html/i,
      siteExample: 'http://www.cuiweiju.com/html/124/124362/6468025.html',
      nextLink: '//p[@class="cz_bar"]/descendant::a[text()="下一章 》"]',
      autopager: {
        pageElement: '//div[@class="book_wrap"]'
      }
    },
    {
      name: '在线书吧',
      url: /^https?:\/\/www\.bookba\.net\/Html\/Book\/.+\.html/i,
      siteExample: 'http://www.bookba.net/Html/Book/15/15995/2030251.html',
      nextLink: '//td[@id="thumb"]/descendant::a[text()="下一章"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '文学迷',
      url: /^https?:\/\/www\.wenxuemi\.net\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.wenxuemi.net/files/article/html/10/10884/4852125.html',
      nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '爱尚文学网',
      url: /^https?:\/\/www\.kenshu\.cc\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.kenshu.cc/files/article/html/5/5379/6389640.html',
      nextLink: '//dd[@id="footlink"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="bdsub"]'
      }
    },
    {
      name: 'E品中文网',
      url: /^https?:\/\/www\.epzw\.com\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.epzw.com/files/article/html/50/50244/3271485.html',
      nextLink: '//div[@id="link"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '大家读书院',
      url: /^https?:\/\/www\.dajiadu\.net\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.dajiadu.net/files/article/html/14/14436/3337407.html',
      nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="center"]'
      }
    },
    {
      name: '北京爱书',
      url: /^https?:\/\/www\.bj-ibook\.cn\/book\/.+\.htm/i,
      siteExample: 'http://www.bj-ibook.cn/book/17/t10409k/12.htm',
      nextLink: '//div[@class="zhtop"]/a[text()="下一页（快捷键→）"][@href]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="bmsy_content"]'
      }
    },
    {
      name: '小说570',
      url: /^https?:\/\/www\.xiaoshuo570\.com/i,
      siteExample: 'http://www.xiaoshuo570.com/11/11844/2678383.html',
      nextLink: '//div[@id="thumb"]/a[text()="下一页"][@href]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@class="fonts_big"]'
      }
    },
    {
      name: '看书',
      url: /^https?:\/\/www\.kanshu\.com\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.kanshu.com/files/article/html/30997/935806.html',
      nextLink: '//div[@class="yd_linebot"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//table[@class="yd_table"]'
      }
    },
    {
      name: '全本小说网',
      url: /^https?:\/\/www\.quanben\.com\/xiaoshuo\/.+\.html/i,
      siteExample: 'http://www.quanben.com/xiaoshuo/10/10412/2095098.html',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '晋江原创',
      url: /^https?:\/\/www\.jjwxc\.net\/onebook\.php\?novelid=/i,
      siteExample: 'http://www.jjwxc.net/onebook.php?novelid=862877&chapterid=6',
      nextLink: {
        startAfter: '&chapterid=',
        inc: 1
      },
      autopager: {
        pageElement: '//div[@class="noveltext"]'
      }
    },
    {
      name: '奇书屋',
      url: /^https?:\/\/www\.qishuwu\.com\/.+/i,
      siteExample: 'http://www.qishuwu.com/a_zhijian/314815/',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@id="bgdiv"]'
      }
    },
    {
      name: 'lu5小说网',
      url: /^https?:\/\/www\.lu5\.com\/.+\.html/i,
      siteExample: 'http://www.lu5.com/b/5/5442/9575830.html',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '飞库',
      url: /^https?:\/\/www\.feiku\.com\/\/html\/book\/.+\.shtm/i,
      siteExample: 'http://www.feiku.com//html/book/130/164016/4891625.shtm',
      nextLink: '//div[@class="prenext"]/descendant::a[text()="下一页→"]',
      autopager: {
        pageElement: '//div[@id="chcontent"]'
      }
    },
    {
      name: '幻侠小说网',
      url: /^https?:\/\/www\.huanxia\.com\/book\w+\.html/i,
      siteExample: 'http://www.huanxia.com/book548761_6041285.html',
      nextLink: '//a[@href][@id="htmlxiazhang"]',
      autopager: {
        pageElement: '//div[@class="h1title"] | //div[@id="htmlContent"][@class="contentbox"]',
        HT_insert: ['//div[@id="htmlContent"]', 2]
      }
    },
    {
      name: '潇湘书院',
      url: /^https?:\/\/www\.xxsy\.net\/books\/.*\.html/i,
      siteExample: 'http://www.xxsy.net/books/485034/5259176.html',
      nextLink: '//div[@id="detailsubsbox"]/span/a[@href][@title="阅读下一章节"]',
      autopager: {
        pageElement: '//div[@id="detail_title"] | //div[@id="zjcontentdiv"]',
        HT_insert: ['//div[@id="zjcontentdiv"]', 2]
      }
    },
    {
      name: '书海',
      url: /^https?:\/\/www\.shuhai\.com\/read\/.+\.html/i,
      siteExample: 'http://www.shuhai.com/read/4014/371553.html',
      nextLink: '//div[@class="page_operate font_blue"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="txt"]'
      }
    },
    {
      name: 'yi-see',
      url: /^https?:\/\/www\.yi-see\.com/i,
      siteExample: 'http://www.yi-see.com/read_266768_15501.html',
      nextLink: '//div[@class="B2"]/descendant::a[text()="下一节"]',
      autopager: {
        pageElement: '//table[@width="900px"][@align="CENTER"]'
      }
    },
    {
      name: '天下书盟',
      url: /^https?:\/\/www\.fbook\.net\/book\/.+\.htm/i,
      siteExample: 'http://www.fbook.net/book/35793/2656834.htm',
      nextLink: '//div[@id="pages"]/descendant::a[text()="下一章"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="bookbody"]'
      }
    },
    {
      name: '涂鸦小说网',
      url: /^https?:\/\/www\.tooya\.net\/.+\.html/i,
      siteExample: 'http://www.tooya.net/tooya/2/2094/820902.html',
      nextLink: '//div[@class="novel_bottom"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '百晓生/谷粒',
      url: /^https?:\/\/www\.(bxs|guli)\.cc\/.+/i,
      siteExample: 'http://www.bxs.cc/26758/7708992.html',
      enable: true,
      nextLink: '//div[@id="papgbutton"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="main"]/h1 | //div[@id="readbox"]/div[@id="content"] | //div[@id="readbox"]/div[@id="papgbutton"]',
        HT_insert: ['//div[@id="weekhot"]', 1]
      }
    },
    {
      name: '熬夜看书',
      url: /^https?:\/\/www\.aoye\.cc\/.+\.html/i,
      siteExample: 'http://www.aoye.cc/843/5.html',
      nextLink: '//div[@id="pagebottom"]/descendant::a[@id="nextpage"]',
      autopager: {
        pageElement: '//pre[@id="content"]'
      }
    },
    {
      name: '塔读文学',
      url: /^https?:\/\/www\.tadu\.com\/book\/\d+\/\d+/i,
      siteExample: 'http://www.tadu.com/book',
      nextLink: '//div[@class="container_center"]/div[@class="left"]/div[@class="jump"]/a[@href][text()="下一章>>"]',
      autopager: {
        useiframe: true,
        pageElement: '//div[@class="container_center"]/div[@class="left"]/div[@class="content"][@id="partContent"]'
      }
    },
    {
      name: '无错小说网',
      url: /^https?:\/\/www\.wcxiaoshuo\.com\/wcxs\-\d+\-\d+/i,
      siteExample: 'http://www.wcxiaoshuo.com/wcxs-*-*/',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="wrapper_main"][@id="jsreadbox"]/h1 | //div[@class="wrapper_main"][@id="jsreadbox"]/div[@id="htmlContent"][@class="contentbox"]'
      }
    },
    {
      name: '燃文',
      url: /^https?:\/\/www\.ranwen\.cc\/.+\.html/i,
      siteExample: 'http://www.ranwen.cc/A/9/9818/3505060.html',
      nextLink: '//div[@class="pageTools"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="oldtext"]'
      }
    },
    {
      name: '书河',
      url: /^https?:\/\/www\.shuhe\.cc\/.+/i,
      siteExample: 'http://www.shuhe.cc/30976/4401025/',
      nextLink: '//div[@class="bottem"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="TXT"]'
      }
    },
    {
      name: '89文学',
      url: /^https?:\/\/89wx\.com\/.+\.htm/i,
      siteExample: 'http://89wx.com/html/book/70/70732/6641331.htm',
      nextLink: '//dd[@id="footlink"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//dd[@id="contents"]'
      }
    },
    {
      name: '极速小说网',
      url: /^https?:\/\/www\.186s\.cn\/files\/article\/html\/.+\.html/i,
      siteExample: 'http://www.186s.cn/files/article/html/0/304/4528937.html',
      nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '手打8',
      url: /^https?:\/\/shouda8\.com\/.+\.html/i,
      siteExample: 'http://shouda8.com/zhangyuxingchen/85649.html',
      nextLink: '//div[@id="papgbutton"]/descendant::a[text()="下一章（快捷键 →）"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: '闪文书库',
      url: /^https?:\/\/read\.shanwen\.com\/.+\.html/i,
      siteExample: 'http://read.shanwen.com/14/14616/1011063.html',
      nextLink: '//td[@class="tb0"]/descendant::a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@id="content"]'
      }
    },
    {
      name: 'PaiTxt',
      url: /^https?:\/\/paitxt\.com\/.+\.html/i,
      siteExample: 'http://paitxt.com/24/24596/4507312.html',
      nextLink: '//div[@class="book_middle_text_next"]/descendant::a[text()="下一章(快捷键:→)"]',
      autopager: {
        pageElement: '//div[@id="booktext"]'
      }
    },
    {
      name: '好书楼',
      url: /^https?:\/\/www\.haoshulou\.com\/.+\.html/i,
      siteExample: 'http://www.haoshulou.com/Hao/6/60238.html',
      nextLink: '//div[@class="movenext"]/descendant::a[text()="下一章"]',
      autopager: {
        pageElement: '//div[@id="booktext"]'
      }
    },
    {
      name: 'BookLink.Me:最有爱的小说搜索引擎',
      url: '^https?://booklink\\.me/',
      nextLink: '//a[text()="下一页"] | //a[font[text()="下一页"]]',
      pageElement: '//table[@width="100%"][@cellspacing="0"][@cellpadding="2"]',
      scroll_only: true
    },
    {
      name: '优书-书单|评论',
      url: /^https?:\/\/www\.yousuu\.com\/(comments|booklist)/i,
      nextLink: function (doc, win, cplink) {
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
              nextNode = res.childNodes[i+1];
            }
          }
        }
        var findout = /jumpurl\('(\w+)','?(\d+)'?\)/.exec(nextNode.innerHTML);
        if (findout === null || findout.length != 3) {
          return undefined;
        }

        var pageInfo = findout[1]+"="+findout[2];

        if (cplink.indexOf(findout[1]+"=") != -1) {
          return cplink.replace(new RegExp(findout[1]+"=\\d+"), pageInfo);
        } else if (cplink.indexOf("?") != -1) {
          return cplink + "&"+pageInfo;
        } else {
          return cplink + "?"+pageInfo;
        }
      },
      autopager: {
        pageElement: '//table[contains(@class, "shudanlist")] | //ul[contains(@class, "ys-comments")] | //div[@class="ro"]',
      }
    },
    // =============================== manhua ========================
    {
      name: '天极动漫频道新闻',
      url: /^https?:\/\/comic\.yesky\.com\/\d+\/.+\.shtml/i,
      siteExample: 'http://comic.yesky.com/249/11335749_5.shtml',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//div[@class="article"]/p[1]',
        remain: 1.4,
        replaceE: '//div[@id="numpage"]'
      }
    },
    {
      name: '动漫之家漫画网',
      url: /^https?:\/\/(www|manhua)\.(dmzj|178)\.com\/\w+\/\d+\.shtml/,
      siteExample: 'https://manhua.dmzj.com/yuanlian/36944.shtml#@page=1',
      nextLink: function (doc, win, cplink) {
        const current = Number(getElementByXpath('//*[@id="page_select"]/option[@selected][1]', doc).text.match(/(\d+)/)[1]);
        const xpath_last = '//*[@id="page_select"]/option[last()]';
        const end_num = Number(getElementByXpath(xpath_last, doc).text.match(/(\d+)/)[1]);
        const next = current + 1;
        if (next > end_num) { return undefined; } else { return cplink.replace(/\.shtml(?:#@page=\d+)?/, '.shtml#@page=' + next); }
      },
      autopager: {
        useiframe: true,
        reload: true, // do not create new iframe but reload
        ipages: [true, 20],
        pageElement: '//div[@id="center_box"]/img'
      }
    },
    {
      name: '看漫画',
      url: /^https?:\/\/www\.manhuagui\.com\/comic\/.+/i,
      // this is a set which uses hash to change page
      // we need to manually add hash
      nextLink: function (doc, win, cplink) {
        const current = Number(getElementByXpath('//*[@id="page"]', doc).innerHTML);
        const xpath_last = '//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]';
        const end_num = Number(getElementByXpath(xpath_last, doc).text);
        const next = current + 1;
        if (next > end_num) { return undefined; } else { return cplink.replace(/\.html(?:#p=\d+)?/, '.html#p=' + next); }
      },
      autopager: {
        useiframe: true,
        newIframe: false,
        reload: true, // do not create new iframe but reload
        pageElement: '//div[@class="clearfix"]',
        ipages: [true, 20]
      },
      exampleUrl: 'https://www.manhuagui.com/comic/17332/372862.html'
    },
    {
      name: 'CC漫画网',
      url: '^https?://www\\.tuku\\.cc/comic/\\d+/\\d+/',
      siteExample: 'http://www.tuku.cc/comic/6123/1/',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//img[@id="cp_image"]',
        useiframe: true
      }
    },
    // 已失效
    //     {name: '爱漫画',
    //         url: /^http:\/\/www\.iimanhua\.com\/comic\/.+/i,
    //         siteExample:'http://www.iimanhua.com/comic/55/list_39448.html',
    //         useiframe:true,
    //         preLink:{
    //             startAfter:'?p=',
    //             inc:-1,
    //             min:1,
    //         },
    //         nextLink:{
    //             startAfter:'?p=',
    //             mFails:[/^http:\/\/www\.iimanhua\.com\/comic\/.+\.html/i,'?p=1'],
    //             inc:1,
    //             isLast:function(doc,win,lhref){
    //                 var pageSelect=doc.getElementById('pageSelect');
    //                 if(pageSelect){
    //                     var s2os=pageSelect.options;
    //                     var s2osl=s2os.length;
    //                     //alert(s2.selectedIndex);
    //                     if(pageSelect.selectedIndex==s2osl-1)return true;
    //                 }
    //             },
    //         },
    //         autopager:{
    //             useiframe:true,
    //             remain:1/2,
    //             pageElement:'//img[@id="comic"]',
    //         }
    //     },
    //     {name: '新动漫',
    //         url:/http:\/\/www\.xindm\.cn\/mh\/.+/i,
    //         siteExample:'http://www.xindm.cn/mh/shishangzuiqiangdizi/58784.html?p=2',
    //         preLink:{
    //             startAfter:'?p=',
    //             inc:-1,
    //             min:1,
    //         },
    //         nextLink:{
    //             startAfter:'?p=',
    //             mFails:[/http:\/\/www\.xindm\.cn\/mh\/.+\.html/i,'?p=1'],
    //             inc:1,
    //             isLast:function(doc,win,lhref){
    //                 var topSelect=doc.getElementById('topSelect');
    //                 if(topSelect){
    //                     var s2os=topSelect.options;
    //                     var s2osl=s2os.length;
    //                     if(topSelect.selectedIndex==s2osl-1)return true;
    //                 }
    //             },
    //         },
    //         autopager:{
    //             pageElement:'//div[@class="photo"]',
    //             useiframe:true,
    //         }
    //     },
    {
      name: 'SF在线漫画',
      url: "^https?://(manhua\\.sfacg\\.com/mh|www\\.acg456\\.com)/.+",
      siteExample: 'https://manhua.sfacg.com/mh/YULINGSHI/20087/#p=2',
      preLink: {
        startAfter: '#p=',
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: '#p=',
        mFails: [/^https?:\/\/(?:manhua\.sfacg\.com\/mh|www\.acg456\.com)\/.+/i, '#p=1'],
        inc: 1,
        isLast: function (doc, win, lhref) {
          const TotalPage = Number(doc.getElementById('TotalPage').innerText)-1;
          const CurrentPage = Number(doc.getElementById('CurrentPage').innerText);
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
    },
    {
      name: '哦漫画',
      url: /^https?:\/\/www\.omanhua\.com\/comic\//i,
      siteExample: 'http://www.omanhua.com/comic/2957/36463/index.html?p=2',
      nextLink: {
        startAfter: '?p=',
        mFails: [/^http:\/\/www\.omanhua\.com\/comic\/.+/i, '?p=1'],
        inc: 1,
        isLast: function (doc, win, lhref) {
          const select = doc.getElementById('pageSelect');
          if (select) {
            const s2os = select.options;
            const s2osl = s2os.length;
            if (select.selectedIndex == s2osl - 1) return true;
          }
        }
      },
      autopager: {
        useiframe: true,
        pageElement: '//img[@id="mangaFile"]'
      }
    },
    {
      name: '汗汗漫画',
      url: /^https?:\/\/\w+\.(?:vs20|3gmanhua|hhcomic|huhudm|huhumh|hhimm|hhmmoo)\.(?:com|net)\/\w+\/\d+\.html/i,
      siteExample: 'http://www.hhmmoo.com/page315224/1.html?s=1； http://www.hhmmoo.com/page315224/4.html?s=1&d=0',
      nextLink: function (doc, win, cplink) {
        // created based on http://www.hhmmoo.com/script/view.js
        const m = cplink.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/);
        const url_head = m[1];
        const current = Number(m[2]);
        var dID = m[4];
        if (!dID) dID = '&d=0';
        const next = current + 1;
        const xpath = '//div[@class="cH1"]/b[1]';
        var maxpage = document.getElementById('hdPageCount');
        if (maxpage) {
          maxpage = Number(maxpage.value);
        } else {
          maxpage = document.getElementById('spPageCount');
          if (maxpage) { maxpage = Number(maxpage.innerText); } else { return undefined; }
        }
        if (next == maxpage+1) { return undefined; } else { return m[1] + next + m[3] + dID; }
      },
      autopager: {
        useiframe: true,
        pageElement: '//div[@id="iBody"]',
        ipages: [true, 20]
      }
    },
    {
      name: '99漫画',
      url: /^https?:\/\/(cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(com|cc)/i,
      siteExample: 'http://dm.99manga.com/comic/35416/316645/?p=2&s=0',
      nextLink: {
        startAfter: '?p=',
        inc: 1,
        mFails: [/^https?:\/\/(?:cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(?:com|cc)\/.+/i, '?p=1&s=0'],
        isLast: function (doc, win, lhref) {
          const maxpage = Number(doc.getElementById('spPageCount').innerText);
          const current = Number(doc.getElementById('spPageIndex').innerText);
          debug(current, maxpage);
          if (current == maxpage) return true;
        }
      },
      autopager: {
        useiframe: true,
        pageElement: '//*[@id="iBody"]'
      }
    },
    {
      name: '动漫Fans',
      url: /^https?:\/\/www\.dm123\.cn\/bbs\/(thread\.php\?fid=|read\.php\?tid=)/i,
      siteExample: 'http://www.dm123.cn/bbs/read.php?tid=593645',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//tbody[@id="threadlist"]|//div[@id="pw_content"]'
      }
    },
    {
      name: 'KuKu动漫',
      url: /^https?:\/\/comic\.kukudm\.com\/comiclist\/\d+\/\d+.*\.htm/i,
      siteExample: 'http://comic.kukudm.com/comiclist/4/17099/3.htm',
      useiframe: true,
      nextLink: '//a[img[contains(@src,"images/d.gif")]]',
      autopager: {
        useiframe: true,
        pageElement: '//body/table[2]'
      }
    },
    {
      name: '52pk漫画',
      url: /^https?:\/\/(op|sishen|narutocn)\.52pk\.com\/manhua\/\d+\/\d+/i,
      siteExample: 'http://op.52pk.com/manhua/2010/921364.html',
      nextLink: '//li[@id="page__next"]/a[1]',
      autopager: {
        relatedObj: ['css;li#page__select', 'bottom'],
        pageElement: '//div[@id="pictureContent"]'
      }
    },
    {
      name: '动漫屋',
      url: /^https?:\/\/(www|tel)\.dm5\.com\/.+/i,
      nextLink: '(//span[@class="current"])[1]/following-sibling::a[1]',
      autopager: {
        pageElement: '//img[@id="cp_image"]',
        useiframe: true,
        remain: 1 / 2
      }
    },
    {
      name: '天使漫画网,TSDM漫画组',
      url: /^https?:\/\/mh\.tsdm\.net\/comic\/.+/i,
      siteExample: 'http://mh.tsdm.net/comic/4697/68059.html',
      useiframe: true,
      preLink: {
        startAfter: '?p=',
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: '?p=',
        mFails: [/^http:\/\/mh\.tsdm\.net\/comic\/.+\.html/i, '?p=1'],
        inc: 1,
        isLast: function (doc, win, lhref) {
          // console.log(lhref)
          const pageSelect = doc.getElementById('qTcms_select_i');
          if (pageSelect) {
            const s2os = pageSelect.options;
            const s2osl = s2os.length;
            // alert(s2.selectedIndex);
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
    },
    {
      name: '930mh',
      url: /^https?:\/\/www\.930mh\.com\/manhua\/.+/i,
      siteExample: 'http://www.930mh.com/manhua/13355/500671.html?p=2',
      preLink: {
        startAfter: '?p=',
        inc: -1,
        min: 1
      },
      nextLink: {
        startAfter: '?p=',
        mFails: [/^https?:\/\/www\.930mh\.com\/manhua\/.+\.html/i, '?p=1'],
        inc: 1,
        isLast: function (doc, win, lhref) {
          const index = doc.getElementById('images').children[1].innerText;
          const nums = index.match(/\d+/g);
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
    },
    {
      name: '死神中文网',
      url: /^https?:\/\/(?:\w+\.)?bleachcn\.net\/manhua\/.+/i,
      siteExample: 'http://naruto.bleachcn.net/manhua/6759.html',
      nextLink: '//div[@id="comic_pages"]/a[text()="下一页"][@href]',
      autopager: {
        pageElement: '//div[@id="comic_endtext"]'
      }
    },
    {
      name: 'iiikl论坛',
      url: '^https?://bbs\\.iiikl\\.net/forum\\.php\\?forum_id=.*',
      nextLink: '//a[@class="next"]',
      pageElement: '//tr[@class="topic_list_row"]',
      exampleUrl: 'http://bbs.iiikl.net/forum.php?forum_id=82&class_id=0&page=2'
    },
    {
      name: 'sosg论坛帖子',
      url: /^https?:\/\/www\.sosg\.net\/read/i,
      siteExample: 'http://www.sosg.net/read.php?tid=424833',
      nextLink: '//td[@align="left"]/b/following-sibling::a[@href]',
      autopager: {
        pageElement: '//div[@id="b5"]/form/a/table[1]'
      }
    },
    {
      name: '澄空贴子内容',
      url: /^https?:\/\/bbs\.sumisora\.org\/read\.php\?tid=/i,
      siteExample: 'http://bbs.sumisora.org/read.php?tid=11015694',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'css;.t.t2'
      }
    },
    {
      name: '9gal苍雪论坛',
      url: /^https?:\/\/bbs\.(9gal|9baka)\.com\/read\.php\?tid=/i,
      siteExample: 'http://bbs.9gal.com/read.php?tid=299016',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//form[@method="post"]/a[@name]/following-sibling::div',
        replaceE: '//ul[@class="pages"]'
      }
    },
    {
      name: '和邪社|你的ACG生活 文不在长.内涵则明 图不在色.意淫则灵',
      url: /^https?:\/\/www\.hexieshe\.com\//i,
      exampleUrl: 'http://www.hexieshe.com/',
      nextLink: '//div[@class="pagebar"]/a[text()="Next"]',
      autopager: {
        pageElement: 'id("centent")'
      }
    },
    {
      name: 'haruhichan',
      url: /^https?:\/\/haruhichan\.com\//i,
      nextLink: '//a[@rel="next"]',
      autopager: {
        pageElement: '//div[@id="postlist"]'
      }
    },
    {
      name: 'exhentai',
      url: '^https?://exhentai\\.org/s/.*$',
      nextLink: '//img[@src="http://st.exhentai.net/img/n.png"]/..',
      pageElement: '//body/div[@class="sni"]',
      exampleUrl: 'http://exhentai.org/s/0088446283/653117-4',
      useiframe: true
    },
    {
      name: 'exhentai gallery',
      url: /^https?:\/\/exhentai\.org\/g\//i,
      exampleUrl: 'http://exhentai.org/g/514954/d4fcb4973e/?p=1',
      nextLink: '//table[@class="ptt"]//a[text()=">"]',
      autopager: {
        pageElement: '//div[@id="gdt"]',
        relatedObj: true
      }
    },
    {
      name: 'exhentai frontpage',
      url: /^https?:\/\/exhentai\.org\/(\?[^\/]+)?$/i,
      exampleUrl: 'http://exhentai.org/?page=2',
      nextLink: '//table[@class="ptt"]//a[text()=">"]',
      autopager: {
        pageElement: '//table[@class="ptt"]/..',
        relatedObj: true
      }
    },
    {
      name: 'Hentai Manga|Read free hentai xxx manga online',
      url: /^https?:\/\/hentai4manga\.com\//i,
      exampleUrl: 'http://hentai4manga.com/',
      nextLink: '//div[@class="pages"]/a[contains(text(), ">")]',
      autopager: {
        pageElement: 'id("innerContent")'
      }
    },
    {
      name: '1024社区',
      url: '^https?://(www\\.)?t66y\\.com/|^http://cl\\.man\\.lv/',
      nextLink: '//div[@class="pages"]/b/following-sibling::a[1]',
      pageElement: 'id("ajaxtable") | id("main")',
      exampleUrl: 'http://t66y.com/thread0806.php?fid=15'
    },
    {
      name: 'DLsite 検索結果',
      url: /^https?:\/\/(?:[^.]+\.)?dlsite\.com\//i,
      exampleUrl: 'http://www.dlsite.com/home/fsr/=/language/jp/keyword/kon/age_category%5B0%5D/general/per_page/30/show_type/n/page/2',
      nextLink: '//td[@class="page_no"]/ul/li/a[text()="次へ" or text()="Next"]',
      autopager: {
        pageElement: 'id("search_result_list")'
      }
    },
    {
      name: 'Gyutto.com｜の検索結果',
      url: /^https?:\/\/gyutto\.com\/search\/search_list\.php/i,
      exampleUrl: 'http://gyutto.com/search/search_list.php?_adult_check=yes&action=perPage&search_keyword=lol&search_type=&mode=search&perPage=30&pageID=2&ref_path=%2Fsearch%2Fsearch_list.php',
      nextLink: '//a[text()="次の30件へ"]',
      autopager: {
        pageElement: 'id("struct_2ColRightIn")/div[@class="unit_ItemList"]/div[contains(@class, "parts_ItemBox")]',
        relatedObj: true
      }
    },
    {
      name: 'JAVLibrary',
      url: /^https?:\/\/www\.javlibrary\.com\/cn\//i,
      exampleUrl: 'http://www.javlibrary.com/cn/vl_bestrated.php',
      nextLink: '//div[@class="page_selector"]/a[@class="page next"]',
      autopager: {
        pageElement: 'id("rightcolumn")/div[@class="videothumblist"] | id("rightcolumn")/div[@class="starbox"]'
      }
    },
    {
      name: 'DesignCrowd',
      url: '^https://.+\.designcrowd\.com/.',
      nextLink: '//li[@class="active" or @class="current"]/following-sibling::li[1]/a',
      siteExample: 'https://jobs.designcrowd.com/graphic-design-jobs https://designers.designcrowd.com/3 https://www.designcrowd.com/community/',
      pageElement: '//table[@class="table table-striped"]//tr|//div[@class="row small-up-1 medium-up-2 large-up-4"]|id("communityContests")',
    },
    {
      name: 'Nyaa',
      url: '^https?://(?:sukebei\.)?nyaa\.si/',
      nextLink: "//li[@class='active']/following-sibling::li[1]/a",
      pageElement: "//div[@class='table-responsive']/table[contains(@class, torrent-list)]/tbody/tr",
      exampleUrl: 'http://www.nyaa.se/'
    },
    {
      name: '动漫花园',
      url: /^https?:\/\/share\.dmhy\.org/i,
      nextLink: 'auto;',
      pageElement: '//*[@id="topic_list"]',
      exampleUrl: 'https://share.dmhy.org/',
      useiframe: true
    },
    {
      name: 'ACGNX',
      url: /^https?:\/\/(?:ero|www).\acgnx.se/,
      nextLink: '//div[contains(@class,"page")]/a[@class="nextprev"]',
      pageElement: '//*[@id="listTable"]'
    },
    {
      name: 'BTDigg Search',
      url: '^https?://btdigg.org/search*',
      nextLink: '//a[contains(text(),"→")]',
      pageElement: '//body/div/div/center'
    },
    {
      name: 'btbit.cc',
      url: /^https?:\/\/btbit\.cc\/list/i,
      nextLink: 'auto;',
      pageElement: '//div[@class="pbox" and div[@class="rs"]]'
    },
    {
      name: 'btso.pw',
      url: /^https?:\/\/btso\.pw\/search/i,
      nextLink: 'auto;',
      pageElement: '//div[@class="data-list"]/div[@class="row"]'
    },
    {
      name: 'sis001.com',
      url: /^https?:\/\/(\w+\.)?sis001\.com\/forum\/(forum|thread)[0-9\-]+\.html/i,
      exampleUrl: 'https://www.sis001.com/forum/forum-230-1.html',
      nextLink: '//div[@class="pages_btns"]//a[@class="next"]',
      autopager: {
        pageElement: '//div[@class="mainbox"]//table[last()]',
        replaceE: '//div[@class="pages_btns"]',
        // 只执行一次，删除广告
        startFilter: function (win, doc) {
          const firstDiv = doc.querySelector("#ad_text");
          if (firstDiv) {
            firstDiv.parentNode.removeChild(firstDiv);
          }
        }
      }
    },
    // ==================== 国外站点 ===================
    {
      name: 'AnandTech',
      url: '^https?://anandtech\\.com/',
      nextLink: '//div[@class="pagination"]/ul/li[@class="arrow"]/a[text()="?"]',
      pageElement: '//section[@class="content"]/section[@class="main_cont"]/section[@class="main_cont"]',
      exampleUrl: 'http://anandtech.com/tag/mb'
    },
    {
      name: 'Android Police - Android News, Apps, Games, Phones, Tablets',
      url: '^https?://www\\.androidpolice\\.com/',
      nextLink: '//div[@class="wp-pagenavi"]/a[text()="Next?"]',
      pageElement: '//div[@id="content"]',
      exampleUrl: 'http://www.androidpolice.com/'
    },
    {
      name: 'Anonymous speaks: the inside story of the HBGary hack | Ars Technica',
      url: '^https?://arstechnica\\.com/',
      nextLink: '//a[span[contains(concat(" ", @class, " "), " next ")]]',
      pageElement: '//article[contains(concat(" ", @class, " "), " standalone ")]/section[@id="article-guts"]',
      exampleUrl: 'http://arstechnica.com/tech-policy/2011/02/anonymous-speaks-the-inside-story-of-the-hbgary-hack/'
    },
    {
      name: 'techPowerUp',
      url: '^https?://www\\.techpowerup\\.com/',
      nextLink: '//a[@class="nextpage-top"] | //a[contains(text(),"Next")]',
      pageElement: '//div[@class="text"] | //section[@id="list"] | //form[@class="DiscussionList InlineModForm" or @class="InlineModForm section"]',
      exampleUrl: 'http://www.techpowerup.com/reviews/GSkill/F3-1600C7Q-32GTX/'
    },
    {
      name: 'Digital Photography Review',
      url: '^https?://www\\.dpreview\\.com/',
      nextLink: '//a[@rel="nofollow"][contains(text(), "Next")]',
      pageElement: 'id("mainContent")/div[@class="news withDayIcons"]',
      exampleUrl: 'http://www.dpreview.com/previews/sony-cybershot-dsc-rx1r'
    },
    {
      name: 'Digital Photography Review 2',
      url: '^https?://www\\.dpreview\\.com/',
      nextLink: '//div[@class="reviewPagesDropdown"]/a/img[@alt="Next page"]/..',
      insertBefore: 'id("amazonBuyboxContainer")',
      autopager: {
        pageElement: 'id("mainContent")',
        filter: 'css;.reviewNavigatorTop, #amazonBuyboxContainer, .ad, #comments, .buyboxOld.amazon',
        relatedObj: ['css;div.reviewNavigatorBottom', 'bottom'],
        HT_insert: ['id("amazonBuyboxContainer")', 1]
      }
    },

    // -================ 手机网站 ========================
    {
      name: '手机百度百科',
      url: /^https?:\/\/wapbaike\.baidu\.com\//i,
      exampleUrl: 'http://wapbaike.baidu.com/goodlist?uid=F381CCCD6FD2F58151EFFB4A63BFA4FF&ssid=0&pu=sz%401321_1004&bd_page_type=1&from=844b&st=4&step=2&net=1&bk_fr=bk_more_glist',
      nextLink: '//div[@class="pages"]/a[text()="下一页"] | //div[@class="page"]/p[@class="next"]/a[text()="下页"] | //table[@class="table next"]//a[text()="下页"] | //a[@class="m-rm-5" and text()="余下全文"]',
      autopager: {
        pageElement: '//div[@class="bd"] | //div[@class="list"] | id("lemma-content")',
        separatorReal: false,
        replaceE: 'css;.page > .p-num'
      }
    },
    {
      name: '手机豆瓣',
      url: /^https?:\/\/m\.douban\.com\/.*/i,
      exampleUrl: 'http://m.douban.com/book/subject/1088065/reviews?session=c0ea1419',
      nextLink: '//div[@class="pg" or @class="paginator"]/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("bd")/div[@class="itm"] | //div[@class="bd"]/div[@class="list"]',
        separatorReal: false
      }
    },
    {
      name: '手机新浪新闻',
      url: /^https?:\/\/[a-z]+\.sina\.cn\/\?sa=/i,
      exampleUrl: 'http://news.sina.cn/?sa=t124d10608655v71&pos=108&vt=4&clicktime=1386267238910&userid=user138626723891024077253801575993',
      nextLink: 'id("j_loadingBtn")',
      autopager: {
        pageElement: 'id("j_articleContent")',
        relatedObj: true
      }
    },
    {
      name: '手机网易网',
      url: '^https?://3g\\.163\\.com/[a-z]+/.*\\.html',
      exampleUrl: 'http://3g.163.com/news/13/0914/04/98N4CSHI0001124J.html',
      nextLink: ['//a[text()="余下全文"]', '//a[text()="下页"]'],
      autopager: {
        pageElement: '//div[@class="content"]',
        // separator: false,
        replaceE: '//div[@class="reset marTop10 cBlue"][child::a[text()="下页"]] | //div[child::form[@class="reset"]]',
        relatedObj: true
      }
    },
    {
      name: '手机凤凰网',
      url: '^https?://3g\\.ifeng\\.com/[a-z]+/',
      exampleUrl: 'http://3g.163.com/news/13/0914/04/98N4CSHI0001124J.html',
      nextLink: ['//a[text()="余下全文"]', '//a[text()="下一页"]'],
      autopager: {
        pageElement: '//div[@class="zwword"]',
        // separator: false,
        relatedObj: true
      }
    },
    {
      name: '手机环球网',
      url: '^https?://wap\\.huanqiu\\.com/',
      nextLink: ['//a[text()="余下全文"]', '//a[text()="下一页"]'],
      autopager: {
        pageElement: '//div[@class="newscont"]',
        // separator: false,
        separatorReal: false,
        relatedObj: true
      }
    },
    {
      name: 'cnBeta.COM - 移动版',
      url: /^https?:\/\/m\.cnbeta\.com\//i,
      exampleUrl: 'http://m.cnbeta.com/',
      nextLink: 'id("yw0")/a[@class="page-next"]',
      autopager: {
        pageElement: '//div/div/div[@class="list"]'
      }
    },
    {
      name: '手机版M.BookLink.Me',
      url: /^https?:\/\/m\.booklink\.me\//i,
      exampleUrl: 'http://m.booklink.me/charpter.php?site_id=2&book_id=69507',
      nextLink: '//div[@class="sec nav"]/form/a[text()="下一页"]',
      autopager: {
        pageElement: 'id("m_main")/ul[@class="list sec"]'
      }
    },
    {
      name: '开源中国(OSChina.NET)',
      url: /^https?:\/\/m\.oschina\.net\//i,
      exampleUrl: 'http://m.oschina.net/',
      nextLink: 'auto;',
      autopager: {
        pageElement: '//ul[@class="ui-listview"]',
        useiframe: true
      }
    },
    {
      name: '博客园博客手机版',
      url: /^https?:\/\/m\.cnblogs\.com\/blog\//i,
      exampleUrl: 'http://m.cnblogs.com/blog/',
      nextLink: '//a[text()="下一页"]',
      autopager: {
        pageElement: '//div[@class="list_item"]'
      }
    },

    // ============== google 其它======================
    {
      name: 'Google Bookmarks',
      url: '^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/bookmarks/',
      nextLink: '//div[contains(concat(" ", @class, " "), " kd-buttonbar ")]//tr/td[last()-1 or last]/a[img[contains(@src,"right.png")]]',
      pageElement: 'id("search")'
    },
    {
      name: 'Google Code List',
      url: '^https?://code\\.google\\.com/[pr]/(?:[^/]+/){2}list',
      nextLink: 'id("colcontrol")//div[contains(concat(" ", @class, " "), " pagination ")]/a[contains(., "?")]',
      pageElement: 'id("resultstable")//tr'
    },
    {
      name: 'google_hosting',
      url: '^https?://code\\.google\\.com/hosting/search\\?',
      nextLink: 'id("serp")/following::a[contains(., "Next")][1]',
      pageElement: 'id("serp")/*'
    },
    {
      name: 'google_codesearch',
      url: '^https?://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/codesearch',
      nextLink: '(id("navbar")//td[@class="b"]/a)[last()]',
      pageElement: '//*[self::div[@class="h"] or self::pre[@class="j"] or self::div[@class="f"]]',
      insertBefore: 'id("navbar")'
    },
    {
      name: 'google_groupsearch',
      url: '^https?://groups\\.google(?:\\.[^./]{2,3}){1,2}/groups/search',
      nextLink: 'id("navbar")//td[last()][@class="b"]/a',
      pageElement: 'id("res")/*[self::div or self::br]'
    },
    {
      name: 'Google Scholar',
      url: '^https?://scholar\.google\.(?:[^.]{2,3}\.)?[^./]{2,3}/scholar',
      nextLink: '//a[./span[@class="gs_ico gs_ico_nav_next"]]',
      siteExample: 'https://scholar.google.com/scholar?q=wii&hl=ja',
      pageElement: '//div[@class="gs_r gs_or gs_scl"]',
    },
    {
      name: 'google_news',
      url: '^https?://(?:[^.]+\\.)?google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/news',
      nextLink: 'id("end-next")/..',
      pageElement: 'id("search-stories story-articles")'
    },
    {
      name: 'google_history',
      url: '^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/history/',
      nextLink: '//td[@class="bl"][last()-1]/a|//div[@class="nn"]/parent::a',
      pageElement: '//table[@class="res"]'
    },
    {
      name: 'google_logos',
      url: '^https?://www\\.google\\.[^./]{2,3}(?:\\.[^./]{2,3})?/logos/',
      nextLink: '//div[@class="base-nav"]//a[contains(., "?")]',
      pageElement: 'id("doodles")|//div[contains(concat(" ", @class, " "), " title ")]'
    },
    {
      name: 'google_books',
      url: '^https?://books\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/books',
      nextLink: 'id("navbar")//span[@class="navlink"]/parent::a',
      pageElement: 'id("main_content")/*'
    },
    {
      name: 'google_app',
      url: '^https?://appengine\\.google\\.com/datastore/explorer\\?.',
      nextLink: 'id("ae-datastore-explorer")//a[@class="ae-paginate-next"]',
      pageElement: 'id("ae-datastore-explorer-entities")'
    },
    {
      name: 'google_movie',
      url: '^https?://(?:[^/]+\\.)?google(?:\\.\\w{2,3}){1,2}/movies',
      nextLink: 'id("pnnext")|id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a|id("nn")/parent::a',
      pageElement: 'id("movie_results")/*'
    },
    {
      name: 'google_chrome',
      url: '^https://chrome\\.google\\.com/webstore/(?:list|search)',
      nextLink: '//table[@class="paginator"]//td[last()]/a',
      pageElement: '//div[@class="mod-fullpage"]/div[@class="mod-body"]'
    },
    {
      name: 'googlebooks/chrome',
      url: '^https?://www\\.google\\.com/intl/ja/googlebooks/chrome/',
      nextLink: 'id("info")/p[contains(concat(" ",@class," "),"nav")]/a[img[@src="images/arrowright.gif"]]',
      pageElement: 'id("page")/div[a[img] or img]'
    },
    {
      name: 'desktop\\.google',
      url: '^https?://desktop\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/',
      nextLink: 'id("content")/table[@class="header"]//a[contains(., "?")]',
      pageElement: 'id("content")/*[(self::table and @class="gadget") or (self::br and @style="clear: both;")]'
    },
    {
      name: 'sketchup',
      url: '^https?://sketchup\\.google\\.com/3dwarehouse/search\\?',
      nextLink: '//div[@class="pager_next"]/parent::a',
      pageElement: '//div[@class="searchresult"]/ancestor::tr[1]'
    },
    {
      name: 'google_cpanel',
      url: '^https://www\\.google\\.com/a/cpanel/[^/]+/',
      nextLink: '//tr//ul[@class="inlinelist"]//a[contains(text(),"?")]',
      pageElement: 'id("list")'
    },
    {
      name: 'google_forum',
      url: '^https?://www\\.google\\.com/support/forum/',
      nextLink: '//div[@class="wppkrootCSS"]/a[contains(text(), ">")]',
      pageElement: '//table[@class="lctCSS"]'
    },
    {
      name: 'google_product',
      url: '^https?://www\\.google\\.com/products\\?',
      nextLink: 'id("nn")/parent::a',
      pageElement: 'id("results")|id("results")/following-sibling::p[@class="clear"]'
    },
    {
      name: 'google_review',
      url: '^https?://www\\.google\\.com/reviews/t',
      nextLink: '//a[contains(text(), "Next")]',
      pageElement: 'id("allresults")/table',
      insertBefore: '//div[contains(concat(" ", normalize-space(@class), " "), " t_ftr ")]'
    },
    {
      name: 'google_cse',
      url: '^https?://www\\.google\\.com/cse\\?cx=',
      nextLink: "//div[@class='gsc-cursor-page gsc-cursor-current-page']/following-sibling::node()[1]",
      pageElement: "//div[@class='gsc-webResult gsc-result']",
      insertBefore: "//div[@class='gsc-cursor-box gs-bidi-start-align']"
    },
    {
      name: 'google_lab_follow',
      url: '^https?://followfinder\\.googlelabs\\.com/search',
      nextLink: '//td[@class="more"]//a[last()]',
      pageElement: '//table//tr[//div]'
    },
    {
      name: 'googlelabs',
      url: '^https?://www\\.googlelabs\\.com/',
      nextLink: 'id("nav")//td[@class="cur"]/following-sibling::td[1]/a',
      pageElement: 'id("nav")/preceding-sibling::ul'
    },

    // ========================= github ================================
    {
      name: 'github mix',
      url: '^https?://github\\.com/(?:dashboard|(?:timeline|[^/]+/[^/]+/(?:comments|network/feed)))',
      nextLink: '//a[@hotkey="l"]|//div[contains(concat(" ",@class," ")," pagination ")]/a',
      pageElement: '//div[@class="news"]/div[contains(@class, "alert")]'
    },
    {
      name: 'github 搜索',
      url: '^https?://github\\.com/search',
      nextLink: "//div[@class='pagination']/a[@rel='next']",
      autopager: {
        pageElement: "id('code_search_results issue_search_results')|//div[@class='sort-bar']/following-sibling::*[following-sibling::span[@class='search-foot-note']] | //ul[@class='repo-list']",
        insertBefore: "//div[@class='pagination']",
        stylish: 'li.repo-list-item { text-align: left; }'
      }
    },
    {
      name: 'github-gist',
      url: '^https?://gist\\.github\\.com/',
      nextLink: '//div[contains(concat(" ", @class, " "), " pagination ")]/a[contains(text(),"Older")]',
      pageElement: '//div[contains(concat(" ", @class, " "), " gist-item ")]'
    },
    // 有点小问题，需要刷新下才有用
    {
      name: 'github_changelog',
      url: '^https?://github\\.com/(?:changelog|[^/]+/[^/]+/commits)',
      nextLink: '//a[contains(text(), "Older")]',
      pageElement: '//*[starts-with(@class,"commit-group")]'
    },
    {
      name: 'github_watchers',
      url: '^https?://github\\.com/[^/]+/[^/]+/watchers',
      nextLink: '//div[@class="pagination"]/span[@class="current"]/following-sibling::a',
      pageElement: 'id("watchers")'
    },
    {
      name: 'github_following',
      url: '^https?://github\\.com/[^/]+/following',
      nextLink: "//a[hotkey='l']",
      pageElement: 'id("watchers")'
    },
    {
      name: 'github_learn',
      url: '^https?://learn\\.github\\.com/p/',
      nextLink: '//a[contains(text(), "next")]',
      pageElement: '//div[@class="container"]/div[@id="welcome" or @class="content"]'
    },
    {
      name: 'github_blog',
      url: '^https://github\\.com/blog',
      nextLink: '//div[contains(concat(" ",@class," ")," pagination ")]/a[contains(text(),"Next")]',
      pageElement: 'id("posts")/div[contains(concat(" ",@class," ")," list ")]/ul/li'
    },

    // ========= 很少用的 ================
    {
      name: 'bookcool-小说合集',
      url: '^https?://www\\.bookcool\\.com/.*\\.htm',
      nextLink: '//div[@id="object1"]/descendant::a[last()][@href]',
      pageElement: '//div[@align="center"]/table[@width !="100%"]'
    },
    {
      name: 'Hachiya Makoto',
      url: '^https?://g\\.e-hentai\\.org/s/.*$',
      nextLink: '//img[@src="http://ehgt.org/g/n.png"]/..',
      pageElement: '//body/div[@class="sni"]',
      exampleUrl: 'http://g.e-hentai.org/s/2221a78fe2/592744-3',
      useiframe: true
    },
    // === hentai image ====
    {
      name: 'ehentai',
      url: /^https:\/\/e[-x]hentai\.org\/s\/.*\/.*/,
      nextLink: '//a[@id="next"]',
      autopager: {
        enable: true,
        pageElement: '//div[@id="i3"]',
        ipages: [true, 30]
      },
      exampleUrl: 'https://e-hentai.org/s/f61cb59d07/1099124-3'
    },
    {
      name: 'ehentai gallary',
      url: /^https:\/\/e[x-]hentai\.org\/g\/[^\/]*\/[^\/]*(\/\?p=\d)?/,
      nextLink: '//table[@class="ptt"]/tbody/tr/td[last()]/a',
      pageElement: '//div[@id="gdt"]',
      exampleUrl: 'https://e-hentai.org/g/1109427/b827f866e1/?p=3'
    },
    {
      name: 'e-hentaidb',
      url: '^https://e-hentaidb\.com/',
      nextLink: '//div[@class="pageUnit"]/a[b]/following-sibling::a',
      siteExample: 'https://e-hentaidb.com/?female=%E5%87%A6%E5%A5%B3%E5%96%AA%E5%A4%B1',
      pageElement: '//div[@class="preview"]/div',
    },
    {
      name: 'ehentai gallary front',
      url: /^https:\/\/e[x-]hentai\.org(\/\?[fp].*)?/,
      nextLink: '//table[@class="ptt"]/tbody/tr/td[last()]/a',
      pageElement: '//div[@id="gdt"]',
      exampleUrl: 'https://e-hentai.org/g/1109427/b827f866e1/?p=3'
    },
    {
      name: 'nhentai',
      url: /^https:\/\/nhentai\.net/,
      nextLink: '//section[@class="pagination"]/a[@class="next"]',
      pageElement: '//div[@class="container index-container"]|//section[@id="image-container"]',
      exampleUrl: 'https://nhentai.net/tag/akigami-satoru/'
    },
    {
      name: '177pic',
      url: /^https?:\/\/(www\.)?177pic\.info\/html\/.*\.html/,
      nextLink: '//a[text()="下一页"]',
      autopager: {
        enable: true,
        useiframe: false,
        pageElement: '//div[@class="entry-content"]',
        ipages: [true, 30]
      },
      exampleUrl: 'http://www.177pic.info/html/2017/06/1409443.html'
    },
    {
      name: 'DL.Getchu.com',
      url: '^https?://dl\.getchu\.com/',
      nextLink: '//div[@class="pgr2"]/b/following-sibling::a[1]',
      siteExample: 'http://dl.getchu.com/search/dojin_circle_detail.php?id=1447&pageID=3',
      pageElement: '//td[@bgcolor="white" and @align="center" and not(@class)]/*',
    },
    // ==== NSFW ====
    {
      name: 'porn-image-xxx.com',
      url: /^https?:\/\/(\w*\.)?porn-image-xxx\.com\/image\/\.*/,
      nextLink: 'auto;',
      autopager: {
        enable: true,
        pageElement: '//div[@id="display_image_detail"]',
        ipages: [true, 30]
      },
      exampleUrl: 'https://zh.porn-image-xxx.com/image/g-cup-beauty-big-breasts-image-intertwined-konno-anzu-minami-and-shore-sayaka/page/1/'
    },
    {
      name: 'namethatpornstar',
      url: /^https?:\/\/namethatpornstar.com/i,
      siteExample: 'http://namethatpornstar.com/all-requests.php?page=2',
      nextLink: '//*[@id="pagination"]/a[./div[contains(@class,"selected")]]/following-sibling::a[1]',
      autopager: {
        useiframe: true,
        pageElement: '//*[@id="content"]'
      }
    },
    {
      name: 'AV百科',
      url: '^https?://www\\.avbaike\\.net/\\d+\\.html',
      nextLink: 'id("content")/div[@class="article_container row  box"]/div[@class="context"]/descendant::a[text()="下一页"]',
      autopager: {
        enable: true,
        pageElement: '//div[@id="post_content"]',
        ipages: [true, 30]
      },
      exampleUrl: 'http://www.avbaike.net/17237.html'
    },
    {
      name: 'avgle',
      url: /^https:\/\/avgle\.com\/.*/,
      nextLink: '//a[@class="prevnext"]',
      pageElement: '//div[@id="wrapper"]/div[1]/div[@class="row"]/div[1]',
      exampleUrl: 'https://avgle.com/search/videos?search_query=%E5%A5%B3%E6%95%99%E5%B8%AB&search_type=videos&o=tr'
    },
    {
      name: 'PornHub.com',
      url: '^https://[^.]+\.pornhub\.com/',
      nextLink: '//li[contains(concat(" ", @class, " "), " page_next ")]/a',
      siteExample: 'http://www.pornhub.com/video http://www.pornhub.com/album',
      pageElement: '//li[contains(concat(" ", @class, " "), " videoblock ")] | //li[contains(concat(" ", @class, " "), " photoAlbumListContainer ")] ',
    },
    {
      name: 'YouAV',
      url: '^https://www.youav\.com/search|videos',
      nextLink: '//div[@class="hidden-xs"]/ul/li/a[@class="prevnext"]',
      siteExample: '',
      pageElement: '//div[@class="container"]/div[@class="row"]/div/div[@class="row"]'
    },
    {
      name: 'Creema',
      url: '^https://(www\.)?creema\.jp/(listing|c)/',
      nextLink: '//link[@rel="next"]',
      siteExample: 'https://www.creema.jp/listing?sort=newer',
      pageElement: '//ul[@class="p-items-article-list"]'
    },
    {
      name: 'qyule',
      url: '^https?://[^.]+\.qyule\.tv/',
      preLink: "(//a[@class='prevnext'])[1]/@href",
      nextLink: "(//a[@class='prevnext'])[last()]",
      pageElement: "//li[div[@class='video']]"
    },
    {
      name: 'chaturbate',
      url: '^https?://([^.]+\.)?chaturbate\.com/',
      nextLink: 'auto;',
      pageElement: '//div[@class="c-1 endless_page_template"]'
    },
    // ==== English websites ====================
    {
      name: 'Gamefaqs',
      url: '^https://gamefaqs\.gamespot\.com/',
      nextLink: '//a[i/@class="fa fa-angle-right"]',
      siteExample: 'https://gamefaqs.gamespot.com/boards/631516-wii-u',
      pageElement: '//div[@class="ffaq ffaqbody"]//div[@class="section" and not(contains(h2,"(Continued)")) or @class="section_box"]|//table[starts-with(@class,"board topics tlist") or starts-with(@class,"board message") or @class="results"]/tbody/tr',
    },
    {
      name: 'Screen Rant',
      url: '^https?://screenrant\.com/.+',
      nextLink: '//*[@rel="next"]',
      siteExample: 'http://screenrant.com/most-powerful-dc-comic-superheroes http://screenrant.com/fantastic-four-movie-rights-fox-marvel-studios-2015/2/ https://screenrant.com/movies-didnt-know-had-post-credits-scenes/4/?view=lista',
      pageElement: '(//a[@class="next-btn icon i-arrow-2"]/preceding-sibling::*[preceding-sibling::h2/@class="item-title"]|//h2[@class="item-title"]|//h2[@style="text-align: center;"][a]/preceding-sibling::*[preceding-sibling::p])[not(//div/@class="wp-pagenavi")]|//div[@itemprop="articleBody"]/div[@class="wp-pagenavi"]/preceding-sibling::*[not(self::h3 or self::h2[@style="text-align: center;"]/a)]',
    },
    {
      name: 'rarbg',
      url: '^https?://(proxy)?rarbg(mirror|proxy|to|2018)?\.(to|net|org)/',
      nextLink: '//a[@title="next page"]',
      siteExample: 'https://rarbg.to/torrents.php?category=movies',
      pageElement: '//table[@class="lista2t"]/tbody/tr[td/@class="lista"]',
    },
    {
      name: 'models',
      url: '^https?://([^.]+\.)?models\.com/models/',
      nextLink: '(//ul[@id="tabnavB"]/li)[last()]/a',
      pageElement: '//div[@class="work-div"]'
    },
    {
      name: 'ghacks',
      url: /^https?:\/\/([^\.]+\.)?ghacks\.net(\/category\/.+)?/,
      nextLink: '//div[@class="nav-links"]/a[contains(text(),"Next Page")]',
      pageElement: '//div[@class="ghacks-content"]/div[contains(@class,"post-list")]'
    },
    {
      name: 'xkcd',
      url: '^https?://(?:www\.)?xkcd\.com',
      nextLink: function (doc, win, cplink) {
        const m = cplink.match(/\d+/);
        if (!m) {
          return cplink + '/2/';
        } else {
          var url = doc.querySelector('a[rel=next]').getAttribute('href');
          url = 'https://www.xkcd.com/' + url;
          return url;
        }
      },
      pageElement: 'id("middleContainer")'
    },
    {
      name: 'Zophars Domain Music',
      url: '^https://(www\.)?zophar\.net/music/',
      nextLink: '//a[@title="Next"]',
      siteExample: 'https://www.zophar.net/music/nintendo-nes-nsf',
      pageElement: 'id("gamelist")//tr[contains(@class,"regularrow")]'
    },
    {
      name: 'Headline Planet',
      url: '^https://headlineplanet\.com/home/',
      nextLink: '//link[@rel="next"]',
      siteExample: 'https://headlineplanet.com/home/ https://headlineplanet.com/home/category/music/music-news/ https://headlineplanet.com/home/category/music/reviews-music/',
      pageElement: '//div[@id="primary"]/div/div/ul[@class="g1-collection-items"]/li',
    },
  ];

  //  ///////// ----- End of Rules for specific sites -------///////////

  // 统配规则..用来灭掉一些DZ.或者phpwind论坛系统..此组规则..优先级自动降为最低..
  const SITEINFO_TP = [
    {
      name: 'Discuz 论坛 - 搜索',
      url: '^https?://bbs\\.[a-z]+\\.cn/search\\.php\\?mod=forum',
      preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
      nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
      autopager: {
        pageElement: '//div[@id="threadlist"]',
        replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
      }
    },
    {
      name: 'Discuz 论坛 - 导读',
      url: /^https?:\/\/(?:bbs|u)\.[^\/]+\/(?:forum\.php\?mod=guide|home\.php\?mod=space)/i,
      preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
      nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
      autopager: {
        pageElement: "//div[@id='postlist'] | //form[@method='post'][@name] | //div[@id='threadlist']/div[@class='bm_c'] | //div[@class='xld xlda']",
        replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
      }
    },
    {
      name: 'Discuz论坛列表',
      url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:forum)|(?:showforum)|(?:viewforum)|(?:forumdisplay))+/i,
      preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
      nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/a[@class="p_curpage"]/following-sibling::a[@class="p_num"]',
      autopager: {
        pageElement: '//form[@method="post"][@name] | //div[@id="postlist"] | //div[@id="threadlist"]',
        replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
        lazyImgSrc: 'file|pagespeed_lsc_url'
      }
    },
    {
      name: 'Discuz论坛帖子',
      url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:thread)|(?:viewthread)|(?:showtopic)|(?:viewtopic))+/i,
      preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
      nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/descendant::a[text()="??"]',
      autopager: {
        pageElement: '//div[@id="postlist"] | //form[@method="post"][@name]',
        replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
        lazyImgSrc: 'zoomfile',
        stylish: '.mbbs_code{font-family:Monaco,Consolas,"Lucida Console","Courier New",serif;font-size:12px;line-height:1.8em;list-style-type:decimal-leading-zero;padding-left:10px;background:none repeat scroll 0 0 #f7f7f7;color:#666;border:1px solid #ccc;overflow:hidden;padding:10px 0 5px 10px}',
        filter: function (pages) {
          // 回复后插入到最后一页
          const replays = document.querySelectorAll('#postlistreply');
          if (replays.length > 1) {
            const first = replays[0];
            first.parentNode.removeChild(first);
          }

          // 在卡饭论坛如果不存在，会提示，所以默认禁用
          // var SyntaxHighlighter = unsafeWindow.SyntaxHighlighter;
          // if (SyntaxHighlighter && SyntaxHighlighter.highlight) {
          //     SyntaxHighlighter.highlight();
          // }
        },
        documentFilter: function (doc) {
          // 卡饭论坛的下一页代码区域可能无法着色，所以手动修改并添加样式
          const pres = doc.querySelectorAll('pre[class^="brush:"]');
          [].forEach.call(pres, function (pre) {
            pre.classList.add('mbbs_code');
          });
        }
      }
    },
    {
      name: 'phpWind论坛列表',
      url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?thread/i,
      preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
      nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
      autopager: {
        pageElement: '//div[@class="t z"] | //div[@class="z"] | //div[@id="ajaxtable"]'
      }
    },
    {
      name: 'phpWind论坛帖子',
      url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?read/i,
      preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
      nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
      autopager: {
        pageElement: '//div[@class="t5"] | //div[@class="read_t"] | //div[@id="pw_content"]'
      }
    },
    {
      name: 'phpBB列表',
      url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewforum/i,
      siteExample: 'http://www.firefox.net.cn/forum/viewforum.php?f=4',
      nextLink: 'auto;',
      autopager: {
        pageElement: '(//div[@id="page-body"]/div[@class="forumbg"]|//table[@class="forumline"]|//table[@class="tablebg"])',
        // replaceE:'//fildset[@class="display-options")]',
        remain: 1 / 3
      }
    },
    {
      name: 'phpBB帖子',
      url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewtopic/i,
      siteExample: 'http://www.firefox.net.cn/forum/viewtopic.php?t=34339',
      nextLink: 'auto;',
      autopager: {
        // pageElement:'//div[@id="page-body"]',
        pageElement: '(//div[@id="page-body"]/div[contains(@class,"post")]|//table[@class="forumline"]|//table[@class="tablebg"])'
        // replaceE:"//fildset[@class='display-options']",
      }
    },
    {
      name: 'phpBB Search',
      url: /^https?:\/\/forum\.[^\/]+\/search\.php/i,
      exampleUrl: 'http://forum.everedit.net/search.php?keywords=%E5%A4%A7%E7%BA%B2',
      nextLink: 'auto;',
      autopager: {
        pageElement: 'id("page-body")/div[starts-with(@class, "search post")]',
        replaceE: 'id("page-body")/ul[@class="linklist"]'
      }
    }
  ];

  // 兼容 oautopager的规则放在这里,此规则组..优先级最低(比统配规则还低)..
  // 所以说尽量不要放规则在这个组里面.
  const SITEINFO_comp = [
    {
      name: 'discuz论坛通用搜索',
      url: '^https?://[^/]+/f/(?:discuz|search)',
      nextLink: 'auto;',
      pageElement: 'id("result-items")'
    },
    {
      name: 'View forum - 通用',
      url: '^https?://.+?/viewforum\\.php\\?',
      nextLink: '//span[@class="gensmall"]/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class="nav"])[last()]/b[last()]/following-sibling::a[1]  | //div[@class="pagination"]/span/strong/following-sibling::a[1] | //a[text()="Next"]',
      pageElement: '//ul[contains(concat(" ",@class," ")," topics ")]|//form[table/@class="forumline"]'
    },
    {
      name: 'wiki 通用',
      url: '.\\?(?:.+&)?search=',
      nextLink: '//a[@class="mw-nextlink"]',
      pageElement: '//ul[@class="mw-search-results"]'
    },
    {
      name: '通用 Forum 规则1',
      url: '^https?://.*((showthread\\.php\\?)|(forum|thread))',
      nextLink: '//a[@rel="next"]',
      pageElement: '//div[@id="posts"]|//ol[@id="posts"]/li',
      separatorReal: false
    },
    {
      name: '通用 Forum 规则2 vBulletin threads',
      url: '^https?://[^?#]+?/showthread\\.php\\?',
      nextLink: '//tr[@valign="top"]//div[@class="pagenav"]//a[contains(text(), ">")]',
      pageElement: '(//div[@class="pagenav"])[1]|//div[@id="posts"]/node()',
      separatorReal: false
    },
    {
      name: '通用 Forum 规则3 vBulletin thread_list',
      url: '^https?://.*((forumdisplay\\.php\\?)|forum)',
      nextLink: 'auto;',
      pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"]',
      separatorReal: false
    },
    {
      name: '通用 Forum 规则4',
      url: /^https?:\/\/forums\..*\/threads/i,
      nextLink: '(//div[@class="PageNav"])[1]//a[contains(text(),' > ')]',
      pageElement: '//ol[@id="messageList"]/li',
      separatorReal: false
    },
    {
      name: 'PHPWind 5.3.0 / 6.0.0 / 6.3.2 / 7.0.0 / 7.5.0 - View Thread',
      url: '^https?://.+/read\\.php\\?.*tid((=[0-9]+.*)|(-[0-9]+.*\\.html?))$',
      nextLink: 'auto;',
      pageElement: '//form[@name="delatc"]',
      exampleUrl: 'http://www.yydzh.com/read.php?tid=1584013'
    }
  ];

  //  ///////// ----- Rules obtained from online json files -------///////////
  // url: url of json file
  // ruleParser: a function parse responseText and return rule / null
  const jsonRuleProvider = [
    {
      name: 'machsix.github.io',
      url: 'https://machsix.github.io/Super-preloader/mydata.json',
      ruleParser: null
    },
    {
      name: 'wedata.net',
      url: 'http://wedata.net/databases/AutoPagerize/items.json',
      ruleParser: function(responseText){
        return JSON.parse(responseText).filter(function(i) {
          if (i.name === 'Generic Posts Rule')
            return false;
          else
            return true;
        }).map(function(i) {
          i.data.name = i.name;
          i.data.source = 'wedata.net';
          return i.data;
        });
      }
    }
  ];

  var SITEINFO_json = [];
  const jsonRule = {
    info: {
      expire: new Date(Date.now()-24*60*60*1000),
      updatePeriodInDay: 1, // json rules are update everyday
    },
    updateRule: function(jsonFinish){
      // jsonFinish: a callback after jsonRules are updated
      // create promises
      const jsonRulePromises = [];
      for (var i = 0; i < jsonRuleProvider.length; i++ ){
        (function(iurl) {
          jsonRulePromises.push(new Promise(function(resolve, reject){
            const req = {
              method: "GET",
              url: jsonRuleProvider[iurl].url,
              onload: function(res) {
                var rule;
                if (_.isFunction(jsonRuleProvider[iurl].ruleParser)) {
                  rule = jsonRuleProvider[iurl].ruleParser(res.responseText);
                } else {
                  rule = JSON.parse(res.responseText);
                }
                debug('Rules from' + jsonRuleProvider[iurl].name + ' is updated');
                resolve(rule);
              },
              onerror: function(res) {console.log(jsonRuleProvider[iurl].url, 'error');}
            };
            GM.xmlHttpRequest(req);
          }));
        })(i);
      }
      Promise.all(jsonRulePromises).then(
        function(jsons){
          SITEINFO_json = _.flat(jsons);
          // debug(SITEINFO_json);
          jsonFinish(); // a callback after rules are updated
        },
        function(rejreason){
          console.log('Fail to update json rule because:');
          console.log(rejreason);
          SITEINFO_json = [];
          jsonFinish();
        }
      );
    },
    updateJsonRule: function(jsonUpdateFinish, reject, force){
      // a function used to create promise to update json rule
      // jsonUpdateFinish: Callback after both jsonInfo and SITEINFO_json are updated
      force = force || false;
      const currentDate = new Date();
      const jsonFinish = function(){
        this.info.expire = new Date(currentDate.getTime() + this.info.updatePeriodInDay*24*60*60*1000);
        GM.setValue('jsonRuleInfo', JSON.stringify(this.info));
        GM.setValue('SITEINFO_json', JSON.stringify(SITEINFO_json));
        jsonUpdateFinish();
      }.bind(this);
      if ( this.info.expire < currentDate || SITEINFO_json.length == 0 || force){
        debug('Json rule is being updated');
        this.updateRule(jsonFinish);
      } else {
        // debug('Json rule will be updated at '+this.info.expire.toString());
        jsonUpdateFinish();
      }
    },
    parseJsonInfo: function(x) {
      // Parse the json saved for this.info
      this.info = JSON.parse(x);
      this.info.expire = new Date(this.info.expire);
    }
  };


  //  ///////// ----- End of Rules obtained from online json files -------///////////

  // 分页导航的6个图标:
  const sep_icons = {
    top: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ  bWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp  bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6  eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz  NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo  dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw  dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv  IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS  ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD  cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlE  PSJ4bXAuaWlkOjM3NkQ2MTFFOTUyNjExREZBNkRGOEVGQ0JDNkM0RDU3IiB4bXBNTTpEb2N1bWVu  dElEPSJ4bXAuZGlkOjM3NkQ2MTFGOTUyNjExREZBNkRGOEVGQ0JDNkM0RDU3Ij4gPHhtcE1NOkRl  cml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mzc2RDYxMUM5NTI2MTFERkE2REY4  RUZDQkM2QzRENTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc2RDYxMUQ5NTI2MTFERkE2  REY4RUZDQkM2QzRENTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1l  dGE+IDw/eHBhY2tldCBlbmQ9InIiPz7bso/VAAACxElEQVR42rSUS0iUURTH//d+j9EppSRtCjEi  w0EhjR6kIyUpWilFpbUTei1auMoellAQZFSbVrkQilplhZC9IKyNQg8CXVQKZigaOgojNdg3j++7  nTtjAzPqTI50Zu7ce+ec87vnnPtgQghIcZ3VxiGwGksRhomemwGHHKqRPwl6+ujFJXHvPLwWCUyN  VT7qvZ4UtK7oQtQ8CizLUlt4fr4U6ctmExPyZ478LelcMMNIa3vL2nkrR7KnvEaR/auuZ2akeHMt  f0SGsSvFSuk5rWOzs2RvXm6+zRJBDAx+8fUNfHjZfSNwMJ4fj6ekk9KU49hYuaXAZfs4/BzvhztR  6Nxmy85aXyl1SYFdjVrViuWrmqtLj9h7R18jKPwImD6CP0V5cY09fdnKZmmzKDA55Kqqrb2u4oR9  yNOHXz4PVEWDbtPhNSfR7+lGze46u6bp7dL2n8BkmMY4umrLj6XNCA8mfn4PQ3UdNgJzGzA28xnT  1giqdh4I2UqfuGAyYGTYUbH90JrMDAcbmuqFwlWCaiGoxQwomoCmc3z1vEV6RgrbUVTmkD7Sd+GI  GVo25Ra7tjp3af3ud1C5Dk3VQ9FazI+gYkAlqKqzUP/J3Yn8vAI9N8dZIn2jUJG3olE7nJ214cGp  /U2pMnVTmLCsIN4M3UMAXrj9g1B0AUXloAixb90Z0gtYpoBh+PD4xf2ZqemJ+p5bgSdRF4SMG0bd  31Ivt50MzxUYV463pchF3L/HaE5QjVNj4JzuocJw++5Vw/SLlFmEXTKojwbTgS+LqbfgZGmKAAzL  S+Xg4ARTCc5VFhpLKEXIFn1B5E5OG+PUy4wkDCGorDHj8R+lBGAGI+iN2t3QIowlfO3ig+kjb1v4  9aI2u1lBv0Xj+GA1nlKel+q8BnANdBrCdZVNBiwXSRY8eam1PjNBxlMLZpvo2UxWOP6T/BFgAOBe  8h+hfm64AAAAAElFTkSuQmCC',
    bottom: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ  bWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp  bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6  eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz  NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo  dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw  dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv  IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS  ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD  cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlE  PSJ4bXAuaWlkOjg2RjU3NUQzOTUyNjExREY4M0U4RDZGQThBMjcwMEIzIiB4bXBNTTpEb2N1bWVu  dElEPSJ4bXAuZGlkOjg2RjU3NUQ0OTUyNjExREY4M0U4RDZGQThBMjcwMEIzIj4gPHhtcE1NOkRl  cml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODZGNTc1RDE5NTI2MTFERjgzRThE  NkZBOEEyNzAwQjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODZGNTc1RDI5NTI2MTFERjgz  RThENkZBOEEyNzAwQjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1l  dGE+IDw/eHBhY2tldCBlbmQ9InIiPz6bp+ZPAAAC0UlEQVR42rRVXUhUQRT+5t67uzdZwwX/0FKS  CCMiwcwi6QfpwcAgKHvzpR6EoKeQpIcIJCOCIB8SooIgKK2gssBwQ0PXsB8s8KdSIhFzXbHS2vbe  ufdOM3fd1mx3zRUPezgzzDnfnP3mm7mEMYaVMAkrZEq8hZ0nHQEe0hepD3RfpJlLAhagtcfPgBBA  sGWZzHbT4JEC2e4NON1UnbHkjoURiaDdf8kGpCELOncaMkF0FceKG5PnmPBVxSlBkom9iehemEN2  gYEt7/CEasLCiQKpihuLqSkhMLMAQ+ecCl5NMQ9vkqZm82glVkVZrSMy7uC5uyMT2UlCnFvV0CxY  Fps7PN6t5IZMHLB4MpER4uph86jr5GFP1wUKZd7GjelpWSWH9lenqKpL8KoyDmbolt25afBoEnic  uTBMand89uh1VeboYn71YcOvscmRxliquDf13V/i9T06sWtH+aqu8VuwJO2P3ITMUuUMPiagBoX3  w02oDje2rq3AE9/t0Fhg5LLAiM0xQ93w6JBv4H2/XpxZaXcrOBZRMVVIzAld1zmwDsPSUZi5Ha+G  Oum74Z5uUZvo8MQ/PPiir2NiZjrENnr2gnJQkxIOqkLTdA5MYVoGCtKLEJieYO2997+Imr9kE0cV  szyxvO35g9k0KQ+5KZtgaZgD1W0+s1avQwrx4K73hp0rav6VmxB9xKM2TKle1fqsJVjoKYObc6tr  YdBUlwcFni1oab8WNAytSuRGb1QUJ5GO22Z+fq339rQGS/MP2LdNIU4UrdmHx13NwW8/pupFTlJv  BbeGsclP294OvawoXV/pkoiC1/3d2ujEx6di7X+fzc/ccxaoREiN9A32Ijsn/Dq+GfCJmkruNAbe  OPf8MHD0LPNqqurivEbiFyav5shmOd7709TckBeTCsJvQ0vf+aS+GIeLTiXmeGFC8p+mqMz8V+6c  y1oWGoE/MvwtwABuklC1izbNcAAAAABJRU5ErkJggg==',
    pre: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ  bWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp  bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6  eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz  NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo  dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw  dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv  IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS  ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD  cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlE  PSJ4bXAuaWlkOkUzRDUyNEQ5OTBFMjExREZCMjNFRjQzNkMwMjdFNUMwIiB4bXBNTTpEb2N1bWVu  dElEPSJ4bXAuZGlkOkUzRDUyNERBOTBFMjExREZCMjNFRjQzNkMwMjdFNUMwIj4gPHhtcE1NOkRl  cml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTNENTI0RDc5MEUyMTFERkIyM0VG  NDM2QzAyN0U1QzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTNENTI0RDg5MEUyMTFERkIy  M0VGNDM2QzAyN0U1QzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1l  dGE+IDw/eHBhY2tldCBlbmQ9InIiPz6I8cyJAAAC20lEQVR42tRVW0hUURTd+5xz550PVMwcUksJ  JY2wrMHpoxQzQrFRxF5iGn1EERGEZCBI9OFPUR9ZkNRX0a9fkeBPEhFBP1mDFj0xdVTSqXnce8/p  3Gtjvh+IH53LZu6Bc9dZe+2196AQAtZjEVinxWIv3stsqXM3ATG+16E1iVbBVwUsOC525pI7dfNp  gRApDnxulvvrq5KCoFgoKhLjktsOeWud5d7qhHhX0lnPBaVqVcA6J3Njp9224ZGvtMHhD7yE/vFe  UlN+PM0V52jPr6WFKwbmTJ0ZbsZYt6+k0RkIfYLByX74HvTDYLSP1FQe25KYpTzYtJel25LQ1A+T  ERcFtgenw8U47anaX5+AFh0+BN6AwizAKAX/2HPQ7OPEV+HLzSyGu1YH2JOyFSICQmi6RhYEThkx  g6oO1lXuqctIS0kn74deACOKGZwIQCn62/GnkJaZggdLDpdlVyo3RgdU0yU4x7nTu8EsasQdT36Z  Jz9nt9L3oxcoMqASFOQvF5p0HKDOBbwaeUJ2FBTQosI9ddtPWq4Z30vGuCCwEORiXkbRiZJdR6zv  JFMBXILSKXAkQlWjgmuyFrqA4K/f0PO1E0u9B5w52zaecleQRkZm9wHGWvpoe17oTFWLjVKZtkTQ  JcNu/0NQ9bAIa5M4HBkAq5MKi41gdW6L5A1E6MgnJkbVjse3hz6+Dp379ox3zWuQL8P9tqv3GqbS  YBhua+qUEER6maIajchUZQZRQwyZi4bYeqs59DMobPKI1UrRHZcB5+Wn84FN/WPW04RsNDSl0KSn  VflwWSNNFo8LRF0Thoa2gfucLNvScxdKKkalDdbGnbLluRrhhArCNVUnBNcw3fCv7xVqMc8a40eL  cIxGVHkhrn1s2hWXwdkQybAP6sYNywAvOSv3ba2VM0OTOqswGR4DlUdiXjL4rxB4NvehKx31qf+2  YmZtwXQo4siSMv53f03rBvxHgAEAqLoqsgGSMo4AAAAASUVORK5CYII=',
    next: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ  bWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp  bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6  eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz  NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo  dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw  dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv  IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS  ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD  cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlE  PSJ4bXAuaWlkOkY3M0ZDRTgzOTBFMjExREZCNjlFQUY1QUIyNjQ1NzE3IiB4bXBNTTpEb2N1bWVu  dElEPSJ4bXAuZGlkOkY3M0ZDRTg0OTBFMjExREZCNjlFQUY1QUIyNjQ1NzE3Ij4gPHhtcE1NOkRl  cml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjczRkNFODE5MEUyMTFERkI2OUVB  RjVBQjI2NDU3MTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjczRkNFODI5MEUyMTFERkI2  OUVBRjVBQjI2NDU3MTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1l  dGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Q0swTAAAC50lEQVR42tRVXUhUQRQ+M/dnd0sN/1gtAimW  LXsoiAixFyGIHnqNioioh36ghyh6sCAijAgiIoLowSRMBG1b1n5s0XxRtiyRlIpQ1M1sKxV1XffH  e2emM+u6qG11EXzoXM6de2fOfPeb8x3OJUIIWAmjsEKmzj+UndeWrv0kAgoJWTglT0cW0vqB96L5  144bxu/Ac5sWWeHpQxfT0xq1QbY9D1SqgUJVHHWovHfE+U/GU5Mc1uQoi1cFgYbua8mPErxK8reC  Q8sGm+qACtdh6zmejnLEEGlXCC4TTAiGSeiYEVm+eGMRDhxBpes2DVQbFWQuihtsdu4gFiopY1WM  T0tgEKqmCFUnVEuCCypTwgWXdwTnloH96CylIsdtcUUloNspqDpFdAoaXhKQcYZBAqhK4ql4sVT9  tHjhINzZsN3uPnngjDMnJ18jinAQEFy3KXIQzBBE023ImOEbJ5L51eM1dooVwpgB971V8YyMgy/M  5wMfYlcantaNJ8yI8H+7LXzDVRSrSlAFiKJRITVk3ERQA9r6auF10AfRRBjqW+7Ghsf6KzMCm9yU  Q3Xf5+8PWtpfzVSsPyayVq8CioSRFGiaTpAruplMBc7CZmcZtL57kvgY7KzFvbcyAquKKoLeJPil  zq439e97etiOwv1coURWnqAE0ZOgBkjw0qJy6O17awR6/YHiQXZq7ZCRWTyptOpUIBQQtN9nnH3Z  +swfGhoVW3L3yBQTygmeykj6JmQaGh3hzYH6oBY196VE/2NV8FQj4IkoxIY64ISnyfNJjeVyd94u  MBkDw5yFjQXbQMwq4G17OGlSVoHxESt1LBaMIxODxtFGX91AsV7K12W5oTjbBQWOEvC0Vs+Yprkb  Y74ut212RcLRC43Nj0Ku3HLuLtgJnpaaaCw+fRDXui21zb+YdyoyXtrc/vgcdg3bRHjsMurZZLkf  L7XQXgahdOrhevnoFxeWxxTKcNNKEyL/3a9pxYB/CTAALMFZuEnI1jsAAAAASUVORK5CYII=',
    next_gray: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ  bWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp  bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6  eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz  NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo  dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw  dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv  IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS  ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD  cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlE  PSJ4bXAuaWlkOjg1RDA5RjFGOTUyMjExREZCMkM4QUZEOEY4Qzg2MDREIiB4bXBNTTpEb2N1bWVu  dElEPSJ4bXAuZGlkOjg1RDA5RjIwOTUyMjExREZCMkM4QUZEOEY4Qzg2MDREIj4gPHhtcE1NOkRl  cml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODVEMDlGMUQ5NTIyMTFERkIyQzhB  RkQ4RjhDODYwNEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODVEMDlGMUU5NTIyMTFERkIy  QzhBRkQ4RjhDODYwNEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1l  dGE+IDw/eHBhY2tldCBlbmQ9InIiPz62tt8rAAACiUlEQVR42tRVS6tSURTe5/hWFAderhoIKqmI  U2eCBg2a9AOaBQ4iZxE0yCCcNYkGDYWaNEh8ICQpoYg4CJQIFA0chKGpBb7A9+Oc1jp4LnK12+GC  gxYs1j7stb79rcfeh2JZlpxCaHIiEfMLj8dzee836NlVwRRF/QKj57+LxeIh8BE5CwQChC+VRCIh  arWaiEQiTsViMQkGg+f/ZDyfz4lcLj9wiEajF2uz2UwUCgWRyWTE5/MJr/FqteIY8gqporI7SxaL  xfWbt1wuL4ClUimWgAMGYdbrNecjZJKOTgWCYzzUkYV60mh53/2MhAJ/At1iLLIDXWCTsGkATGGz  aJomDMOQ7XbLAcP+YufP62HzRqPRa5PJZPf7/edarVYC6SvwAADGOrAARmHTABgwWQqBQ6GQHA/f  bDYkHA4vjjJuNBofO51OKB6P96FJbDabZVOpFA2BLDBFxlhr7gBknM/nSalUIrPZjEQikXm73X56  FBhPBXnTbDbfFgqFqdfrZVUqFZc+KjIHthRfCmyow+EguVxuWavV3kHsq6PAyKher+PyWblcfl+p  VLZut5tBUMwdU0ZQJIDW6XSSarW6/gwyGAwe9vv94xcEa6bRaIhSqaRhrB4B0A24aXdcLhcFKXM1  RVA8AJn2ej0mnU7/gNm/u2v6X6cCJ4Hazeu81Wo9SCaT3yATxm63c+njHFssFo4x7I3A9xboRMgc  s3v2J6R3PxaLfdfr9YzRaCQGg4HodDqSSCSmwP42+LSv+2x+mUwmTwCoa7PZGFAEnU2n03uw91XQ  s3mFJMfjsTOTyTyGtWw4HD4H+0Hwe3xZrFbr/ueLbrd7Exo4hvVLIY8Q9d/9mk4G/EeAAQCBEkva  rHrRPgAAAABJRU5ErkJggg==',
    pre_gray: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ  bWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp  bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6  eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz  NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo  dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw  dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv  IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS  ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD  cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlE  PSJ4bXAuaWlkOjc0MTI5MDY4OTUyMjExREZCODVDREYyM0U0QjMzQkQzIiB4bXBNTTpEb2N1bWVu  dElEPSJ4bXAuZGlkOjc0MTI5MDY5OTUyMjExREZCODVDREYyM0U0QjMzQkQzIj4gPHhtcE1NOkRl  cml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzQxMjkwNjY5NTIyMTFERkI4NUNE  RjIzRTRCMzNCRDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzQxMjkwNjc5NTIyMTFERkI4  NUNERjIzRTRCMzNCRDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1l  dGE+IDw/eHBhY2tldCBlbmQ9InIiPz5D2F5XAAACZklEQVR42tSVz6sSURTH7x0VJxX8CampSQtF  /AESConiQkhdlKKCLdr0YxW0iDaBSBLZok3tol27/oC3TcS14EpEBV24UOO5EETLn9M5g4KoPXu9  XHTgMNc7537me7/3zEg5jiOnCIacKISbQSAQuKjuI6VULhAInhSLxdWlFKMlv8mXer3+qU6nu79c  Ll/9KyvuKZXKN9FoVBqJRBRyufyZz+eLXxXslkqlXxOJhKTZbBJIBsY6mUz23uFw3P5bsEEoFH4D  kHQwGJBer0e63S7p9/tMKpW6pVarv5hMphsSiYRi8eZ6EDybzTYpg5/FeDyuYBiGtNttIhKJCBwc  aTQaZLFYMHDPZjQaP8P8NY1Gw0wmEw7nD4LH4zGmQCwWn4GnN7VaLVOv13kgqCfQFZhctVolcJg0  HA7ftdlsH2BHfJfg/YNglUqF+ekOhNPpFNVqNYKKEYpX6AhcTFerFSmXy4zL5RJ4PJ4Hbrf7La4H  xfQgGNa8sNvtD0OhkBiVYquhWoRCcvP5nEMoJu6uVCrRYDAoNZvNj6xW62MUcPAFMRgM79LpNIsF  Xq+XBxQKBYQjlIIifgzKaSwWw+0z8HCaTCbVw+HwtcViOW+1Wmd74E6nw2azWX4MgJ+5XI5F30At  nU6n/IM220VgPp//AfNYI4Yag0KheA639sHoxmYAqjiEohXo7RrKHx5CcQ6CrVQqzNFvxW6su2D7  tFfrllrtttalX+kNFPt47SlBv7Hfd9vrjxVvB8uyZOu7jX5cDez3+3mPMUejEard281R8E7h90wm  c/3IRs4vtPG/+2s6GfiXAAMAq3cXTADTBMIAAAAASUVORK5CYII='
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

  // 当没有找到规则的时候,进入自动搜索模式.
  // 在没有高级规则的网站上.的一些设置..
  // (Default settings)
  var autoMatch = {
    keyMatch: true, // 是否启用关键字匹配
    cases: false, // 关键字区分大小写....
    digitalCheck: true, // 对数字连接进行检测,从中找出下一页的链接
    pfwordl: { // 关键字前面的字符限定.
      previous: { // 上一页关键字前面的字符,例如 "上一页" 要匹配 "[上一页" ,那么prefix要的设置要不小于1,并且character要包含字符 "["
        enable: true,
        maxPrefix: 3,
        character: [' ', '　', '[', '［', '<', '＜', '?', '?', '<<', '『', '「', '【', '(', '←']
      },
      next: { // 下一页关键字前面的字符
        enable: true,
        maxPrefix: 2,
        character: [' ', '　', '[', '［', '『', '「', '【', '(']
      }
    },
    sfwordl: { // 关键字后面的字符限定.
      previous: { // 上一页关键字后面的字符
        enable: true,
        maxSubfix: 2,
        character: [' ', '　', ']', '］', '』', '」', '】', ')']
      },
      next: { // 下一页关键字后面的字符
        enable: true,
        maxSubfix: 3,
        character: [' ', '　', ']', '］', '>', '﹥', '?', '?', '>>', '』', '」', '】', ')', '→']
      }
    },
    useiframe: SITEINFO_D.useiframe || false, // (预读)是否使用iframe..
    viewcontent: false, // 查看预读的内容,显示在页面的最下方.
    FA: { // 强制拼接 选项 功能设置.
      enable: false, // 默认启用 强制拼接
      manualA: false, // 手动翻页.
      useiframe: false, // (翻页)是否使用iframe..
      iloaded: false, // (只在opera有效)如果使用iframe翻页..是否在iframe完全load后操作..否则在DOM完成后操作
      itimeout: 0, // 当使用iframe翻页时在完成后继续等待多少毫秒后,在操作..
      remain: 1, // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
      maxpage: 99, // 最多翻多少页..
      ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
      separator: true // 显示翻页导航..(推荐显示.)..
    }
  };

  // 上一页关键字
  var prePageKey = [
    '上一页', '上一頁', '上1页', '上1頁', '上页', '上頁',
    '翻上頁', '翻上页',
    '上一张', '上一張', '上一幅', '上一章', '上一节', '上一節', '上一篇',
    '前一页', '前一頁',
    '后退', '後退', '上篇',
    'previous', 'previous Page', '前へ', '前のページ'
  ];

  // 下一页关键字
  var nextPageKey = [
    '下一页', '下一頁', '下1页', '下1頁', '下页', '下頁', '翻页', '翻頁', '翻下頁', '翻下页', '下一张', '下一張', '下一幅', '下一章', '下一节', '下一節', '下一篇', '前进', '下篇', '后页', '往后', 'Next', 'Next Page', '次へ', '次のページ',
    '下一页 →', '下一頁 →', '下1页 →', '下1頁 →', '下页 →', '下頁 →', '翻页 →', '翻頁 →', '翻下頁 →', '翻下页 →', '下一张 →', '下一張 →', '下一幅 →', '下一章 →', '下一节 →', '下一節 →', '下一篇 →', '前进 →', '下篇 →', '后页 →', '往后 →', 'Next →', 'Next Page →', '次へ →', '次のページ →',
    '下一页 »', '下一頁 »', '下1页 »', '下1頁 »', '下页 »', '下頁 »', '翻页 »', '翻頁 »', '翻下頁 »', '翻下页 »', '下一张 »', '下一張 »', '下一幅 »', '下一章 »', '下一节 »', '下一節 »', '下一篇 »', '前进 »', '下篇 »', '后页 »', '往后 »', 'Next »', 'Next Page »', '次へ »', '次のページ »', '后一页', '後一頁',
    '下一页 ›', '下一頁 ›', '下1页 ›', '下1頁 ›', '下页 ›', '下頁 ›', '翻页 ›', '翻頁 ›', '翻下頁 ›', '翻下页 ›', '下一张 ›', '下一張 ›', '下一幅 ›', '下一章 ›', '下一节 ›', '下一節 ›', '下一篇 ›', '前进 ›', '下篇 ›', '后页 ›', '往后 ›', 'Next ›', 'Next >', 'Next Page ›', '次へ ›', '次のページ ›',
    '»', '→', 'Next >'
  ];
  // THX to https://greasyfork.org/en/forum/discussion/39361/x
  // 出在自动翻页信息附加显示真实相对页面信息，一般能智能识别出来。如果还有站点不能识别，可以把地址的特征字符串加到下面
  // 最好不要乱加，一些不规律的站点显示出来的数字也没有意义
  const REALPAGE_SITE_PATTERN = ['search?', 'search_', 'forum', 'thread'];

  // ------------------------下面的不要管他-----------------
  /// ////////////////////////////////////////////////////////////////
  Promise.all([
    GM.getValue('prefs', JSON.stringify(prefsFactory)),
    GM.getValue('SITEINFO_D', JSON.stringify(SITEINFO_D)),
    GM.getValue('autoMatch', JSON.stringify(autoMatch)),
    GM.getValue('jsonRuleInfo', JSON.stringify(jsonRule.info)),
    GM.getValue('SITEINFO_json', JSON.stringify(SITEINFO_json)),
    GM.getValue('version', '1.0.00')
  ]).then(
    function (values) {
      // retrieve settings
      prefs = JSON.parse(values[0]);
      SITEINFO_D = JSON.parse(values[1]);
      autoMatch = JSON.parse(values[2]);
      jsonRule.parseJsonInfo(values[3]);
      SITEINFO_json = JSON.parse(values[4]);

      const myVersion = values[5];
      if (versionCompare(myVersion, scriptInfo.version)<0) {
        jsonRule.info.expire = new Date(Date.now()-24*60*60*1000);
        GM.setValue("version",scriptInfo.version);
        prefs.factoryCheck = true;
      }

      if (prefs.factoryCheck === true || prefs.factoryCheck === undefined ){
        var hasMissing = assignMissingProperty(prefsFactory,prefs);
        if (hasMissing) {
          debug("Old prefs:",prefs);
        }
        prefs.factoryCheck = false;
        GM.setValue('prefs', JSON.stringify(prefs));
      }

      var xbug = prefs.debug || false;
      debug = xbug ? console.log.bind(console) : function () {};
      // 黑名单,网站正则..
      var blackList = [
        // 例子
        // 'http://*.douban.com/*',
      ];
      blackList = blackList.concat(prefs.excludes.split(/[\n\r]+/).map(function (line) {
        return line.trim();
      }));
      const setup = function () {
        const d = document;
        const on = function (node, e, f) {
          node.addEventListener(e, f, false);
        };

        const $ = function (s) {
          return d.getElementById('sp-prefs-' + s);
        };
        if ($('setup')) return;

        const styleNode = GM.addStyle('\
                      #sp-prefs-setup { position:fixed;z-index:2147483647;top:30px;right:60px;padding:20px 30px;background:#eee;box-sizing:content-box;border:1px solid black;\
                                        font-family:"Arial","sans-serif" !important; color:transparent;max-height:80%;overflow:auto; }\
                      #sp-prefs-setup * { color:black;text-align:left;line-height:normal;font-size:12px; min-height: 12px}\
                      #sp-prefs-setup a { color:black;text-decoration:underline; }\
                      #sp-prefs-setup div { text-align:center;font-weight:bold;font-size:15px; }\
                      #sp-prefs-setup ul { margin:15px 0 15px 0;padding:0;list-style:none;background:#eee;border:0;}\
                      #sp-prefs-setup input, #sp-prefs-setup select { border:1px solid gray;padding:2px;background:white;margin:0px; }\
                      #sp-prefs-setup li { margin:0;padding:5px 0;vertical-align:middle;background:#eee;border:0; font-size:12px; }\
                      #sp-prefs-setup button { margin:0 10px;text-align:center;white-space: nowrap; background-color: rgb(221,221,221); \
                                               padding-top: 1px; padding-bottom: 1px; padding-left: 6px; padding-right:6px; \
                                               border-color: rgb(221,221,221);}\
                      #sp-prefs-setup textarea { width:98%; height:60px; margin:3px 0; }\
                      #sp-prefs-setup b { font-weight: bold; font-family: "微软雅黑", sans-serif; }\
                      #sp-prefs-setup button:disabled { color: graytext; }\
                  ');

        var div = d.createElement('div');
        div.id = 'sp-prefs-setup';
        d.body.appendChild(div);
        if ((userLang.indexOf('zh') !== -1) || prefs.ChineseUI) {
          /* Deleted options
                                   <li title="下一页的链接设置成在新标签页打开"><input type="checkbox" id="sp-prefs-forceTargetWindow" checked/> 新标签打开链接</li>\
                                   <li><input type="checkbox" id="sp-prefs-enableHistory" /> 添加下一页到历史记录</li>\
          */
          div.innerHTML = '\
                           <div>Super_preloaderPlus_one_New设置</div>\
                               <ul>\
                                   <li>脚本版本: <b>' + scriptInfo.version + ' </b>   更新时间: <b>' + scriptInfo.updateTime + '</b>\
                                       <a id="sp-prefs-homepageURL" target="_blank" href="' + scriptInfo.homepageURL + '"/>脚本主页</a>\
                                       <a id="sp-prefs-homepageURL-feedback" target="_blank" href="' + scriptInfo.homepageURL + '/feedback' + '"/> 反馈规则 </a>\
                                   </li>\
                                   <li>维护者: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b>   更新日志: <b>' + scriptInfo.changelog + '</b></li>\
                                   <li>规则数目: <b>' + SITEINFO_D.numOfRule + '</b> 下次更新时间: <b>' + jsonRule.info.expire.toDateString() + '</b> <button id="sp-prefs-updaterule">更新规则</button></li>\
                                   <li><input type="checkbox" id="sp-prefs-debug" /> 调试模式</li>\
                                   <li><input title="强制开启中文界面" type="checkbox" id="sp-prefs-ChineseUI" /> 中文界面</li>\
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
                           <div><button id="sp-prefs-ok" style="width:150px;">确定</button><button id="sp-prefs-cancel" style="width:150px;">取消</button></div>';
        } else {
          div.innerHTML = '\
                           <div>Super_preloaderPlus_one_New Settings</div>\
                               <ul>\
                                   <li>Version: <b>' + scriptInfo.version + ' </b>  Update time: <b> ' + scriptInfo.updateTime + '</b>\
                                       <a id="sp-prefs-homepageURL" target="_blank" href="' + scriptInfo.homepageURL + '"/>Homepage</a>\
                                       <a id="sp-prefs-homepageURL-feedback" target="_blank" href="' + scriptInfo.homepageURL + '/feedback' + '"/> Feedback </a>\
                                   </li>\
                                   <li>Maintainer: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b>  Changelog: <b>' + scriptInfo.changelog + '</b></li>\
                                   <li>Number of Rules: <b>' + SITEINFO_D.numOfRule + '</b> Next update: <b>' + jsonRule.info.expire.toDateString() + '</b> <button id="sp-prefs-updaterule">Update rules</button></li>\
                                   <li><input type="checkbox" id="sp-prefs-debug" /> Debug mode</li>\
                                   <li><input type="checkbox"  tile="English/Chinese UI" id="sp-prefs-ChineseUI" /> Chinese UI</li>\
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
                           <div><button id="sp-prefs-ok" style="width:150px;">OK</button><button id="sp-prefs-cancel" style="width:150px;">Cancel</button></div>';
        }
        div = null;

        const close = function () {
          if (styleNode) {
            styleNode.parentNode.removeChild(styleNode);
          }
          const div = $('setup');
          div.parentNode.removeChild(div);
        };

        on($('ok'), 'click', function () {
          prefs.ChineseUI = !!$('ChineseUI').checked;
          // document.getElementById('sp-fw-container').innerHTML = floatWindowUI();
          prefs.custom_siteinfo = $('custom_siteinfo').value;
          prefs.debug = xbug = !!$('debug').checked;
          prefs.dblclick_pause = !!$('dblclick_pause').checked;
          prefs.excludes = $('excludes').value;
          prefs.arrowKeyPage = !!$('arrowKeyPage').checked;

          SITEINFO_D.useiframe = !!$('SITEINFO_D-useiframe').checked;
          SITEINFO_D.autopager.enable = !!$('SITEINFO_D-a_enable').checked;
          SITEINFO_D.autopager.force_enable = !!$('SITEINFO_D-a_force_enable').checked;

          autoMatch.useiframe = SITEINFO_D.useiframe;

          Promise.all([
            GM.setValue('prefs', JSON.stringify(prefs)),
            GM.setValue('SITEINFO_D', JSON.stringify(SITEINFO_D)),
            GM.setValue('autoMatch', JSON.stringify(autoMatch))
          ]).then(function (values) {
            debug = xbug ? console.log.bind(console) : function () {};
            SP.loadSetting();
            close();
            location.reload();
          });
        });

        on($('updaterule'), 'click', function(){
          $('updaterule').innerHTML = "Updating...";
          const p = new Promise(function(resolve, reject) {
            jsonRule.updateJsonRule(resolve, reject, true);});
          p.then(function(values){
            SP.loadSetting();
            close();
            location.reload();
          });
        });

        on($('cancel'), 'click', close);

        $('debug').checked = xbug;
        $('ChineseUI').checked = prefs.ChineseUI;
        // $('enableHistory').checked = prefs.enableHistory;
        // $('forceTargetWindow').checked = prefs.forceTargetWindow;
        $('dblclick_pause').checked = prefs.dblclick_pause;
        $('SITEINFO_D-useiframe').checked = SITEINFO_D.useiframe;
        $('SITEINFO_D-a_enable').checked = SITEINFO_D.autopager.enable;
        $('arrowKeyPage').checked = prefs.arrowKeyPage;
        // $('SITEINFO_D-a_force_enable').checked = SITEINFO_D.autopager.force_enable;
        $('excludes').value = prefs.excludes;
        $('custom_siteinfo').value = prefs.custom_siteinfo;
      };

      // main functions
      const SP = {
        spinit: function () {
          if (document.body.getAttribute('name') === 'MyNovelReader') {
            return;
          }

          this.loadSetting();

          if ((userLang.indexOf('zh') !== -1) || prefs.ChineseUI) {
            GM.registerMenuCommand('Super_preloaderPlus_one_New 设置', setup);
          } else {
            GM.registerMenuCommand('Super_preloaderPlus_one_New Settings', setup);
          }

          // 查找是否是页面不刷新的站点
          const locationHref = location.href;
          const hashSite = _.find(HashchangeSites, function (x) {
            return toRE(x.url).test(locationHref);
          });

          const p2 = new Promise(function(resolve, reject) {
            jsonRule.updateJsonRule(resolve, reject);});
          if (hashSite) {
            isHashchangeSite = true;
            hashchangeTimer = hashSite.timer;
            debug('当前是页面不刷新的站点', hashSite);
            const p1 = new Promise(function(resolve, reject){
              setTimeout(resolve, hashchangeTimer);});
            Promise.all([p1, p2]).then(function(values){
              init(window, document);
            });
          } else {
            p2.then(function(values) {
              init(window, document);
            });
          }

          // 分辨率 高度 > 宽度 的是手机
          if (window.screen.height > window.screen.width) {
            GM.addStyle('div.sp-separator { min-width:auto !important; }');
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
            var infos;
            try {
              infos = new Function('', 'return ' + prefs.custom_siteinfo)();
            } catch (e) {
              console.error('自定义站点规则错误', prefs.custom_siteinfo);
              // alert('自定义站点规则错误');
            }

            if (_.isArray(infos)) {
              SITEINFO = infos.concat(SITEINFO);
            }
          };

          loadDblclickPause();

          loadCustomSiteInfo();
        }
      };

      debug('----------------------------------------------------');
      SP.spinit();

      function init (window, document) {
        const startTime = new Date();

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

        function floatWindow (SSS) {
          GM.addStyle('\
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
                          min-height:20px!important;\
                         }\
                         #sp-fw-savebutton{\
                             position:absolute!important;\
                             top:0!important;\
                             right:2px!important;\
                         }\
                         #sp-fw-container .sp-fw-spanbutton{\
                             border:1px solid #ccc!important;\
                             -moz-border-radius:3px!important;\
                             border-radius:3px!important;\
                             padding:2px 3px!important;\
                             cursor:pointer!important;\
                             background-color:#F9F9F9!important;\
                             -webkit-box-shadow:inset 0 10px 5px white!important;\
                             -moz-box-shadow:inset 0 10px 5px white!important;\
                             box-shadow:inset 0 10px 5px white!important;\
                         }\
                     ');

          const div = document.createElement('div');
          div.id = 'sp-fw-container';
          div.innerHTML = floatWindowUI();
          document.body.appendChild(div);

          function $ (id) {
            return document.getElementById(id);
          }

          const rect = $('sp-fw-rect'); // 悬浮窗的小正方形,用颜色描述当前的状态.
          const spanel = $('sp-fw-content'); // 设置面板.

          const spanelc = {
            show: function () {
              spanel.style.display = 'block';
            },
            hide: function () {
              spanel.style.display = 'none';
            }
          };
          var rectt1, rectt2;
          // 设置面板显隐
          rect.addEventListener('mouseover', function (e) {
            rectt1 = setTimeout(spanelc.show, 100);
          }, false);
          rect.addEventListener('mouseout', function (e) {
            clearTimeout(rectt1);
          }, false);

          div.addEventListener('mouseover', function (e) {
            clearTimeout(rectt2);
          }, false);

          div.addEventListener('mouseout', function (e) {
            if (e.relatedTarget && e.relatedTarget.disabled) return; // for firefox and chrome
            rectt2 = setTimeout(spanelc.hide, 288);
          }, false);

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
          a_newIframe.addEventListener('click', function () {
            a_useiframe.checked = a_newIframe.checked;
          }, false);

          const a_starti = $('sp-fw-a_starti'); // 开始立即翻页
          a_starti.addEventListener('click', function () {
            if (this.disabled) return;
            var value = Number(a_ipages_1.value);
            if (isNaN(value) || value <= 0) {
              value = SSS.a_ipages[1];
              a_ipages_1.value = value;
            }
            autoPO.startipages(value);
          }, false);

          // 总开关
          const enable = $('sp-fw-enable');
          $('sp-fw-setup').addEventListener('click', setup, false);

          // 保存设置按钮.
          const savebutton = $('sp-fw-savebutton');
          savebutton.addEventListener('click', function (e) {
            const value = {
              Rurl: SSS.Rurl,
              useiframe: gl(useiframe),
              viewcontent: gl(viewcontent),
              enable: gl(enable)
            };

            function gl (obj) {
              return (obj.type == 'checkbox' ? obj.checked : obj.value);
            }
            if (SSS.a_enable !== undefined) {
              value.a_enable = gl(a_enable);
              value.a_useiframe = gl(a_useiframe);
              value.a_newIframe = gl(a_newIframe);
              value.a_iloaded = gl(a_iloaded);
              value.a_manualA = gl(a_manualA);
              value.a_force = gl(a_force);
              const t_a_itimeout = Number(gl(a_itimeout));
              value.a_itimeout = isNaN(t_a_itimeout) ? SSS.a_itimeout : (t_a_itimeout >= 0 ? t_a_itimeout : 0);
              const t_a_remain = Number(gl(a_remain));
              value.a_remain = isNaN(t_a_remain) ? SSS.a_remain : Number(t_a_remain.toFixed(2));
              const t_a_maxpage = Number(gl(a_maxpage));
              value.a_maxpage = isNaN(t_a_maxpage) ? SSS.a_maxpage : (t_a_maxpage >= 1 ? t_a_maxpage : 1);
              const t_a_ipages_1 = Number(gl(a_ipages_1));
              value.a_ipages = [gl(a_ipages_0), (isNaN(t_a_ipages_1) ? SSS.a_ipages[1] : (t_a_ipages_1 >= 1 ? t_a_ipages_1 : 1))];
              value.a_separator = gl(a_separator);
            }
            // alert(xToString(value));
            SSS.savedValue[SSS.sedValueIndex] = value;
            // alert(xToString(SSS.savedValue));
            saveValue('spfwset', xToString(SSS.savedValue));
            if ((e.shiftKey ? !prefs.FW_RAS : prefs.FW_RAS)) { // 按住shift键,执行反向操作.
              setTimeout(function () {
                location.reload();
              }, 1);
            }
          }, false);

          function ll (obj, value) {
            if (obj.type == 'checkbox') {
              obj.checked = value;
            } else {
              obj.value = value;
            }
          }

          // 载入翻页设置.
          if (SSS.a_enable === undefined) { // 未定义翻页功能.
            a_enable.disabled = true;
            autopager_field.style.display = 'none';
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

          if (!SSS.a_enable) { // 当前不是翻页模式,禁用立即翻页按钮.
            a_starti.disabled = true;
          }

          if (!SSS.hasRule) { // 如果没有高级规则,那么此项不允许操作.
            a_force.disabled = true;
          }

          // 载入预读设置.
          ll(useiframe, SSS.useiframe);
          ll(viewcontent, SSS.viewcontent);

          // 总开关
          ll(enable, SSS.enable);

          const FWKG_state = {
            loading: '读取中状态',
            prefetcher: '预读状态',
            autopager: '翻页状态',
            Apause: '翻页状态(暂停)',
            Astop: '翻页状态(停止)(翻页完成,或者被异常停止)(无法再开启)',
            dot: '读取完后'
          };

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

          const vertical = parseInt(prefs.FW_offset[0], 10);
          const horiz = parseInt(prefs.FW_offset[1], 10);
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

        function floatWindowUI () {
          var innerHTML = '';
          if ((userLang.indexOf('zh') !== -1) || prefs.ChineseUI) {
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
                                                            <input type="number"  min="0" title="在可以从iframe取数据的时候,继续等待设定的毫秒才开始取出数据(此项为特殊网页准备,如果正常,请设置为0)" id="sp-fw-a_itimeout" name="sp-fw-a_itimeout"/>ms延时取出\
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
                                                    <input type="button" value="开始" title="现在立即开始连续翻页" id="sp-fw-a_starti" />\
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
                                                    <input type="button" value="Start!" title="Start" id="sp-fw-a_starti" />\
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

        function sp_transition (start, end) {
          var TweenF = sp_transition.TweenF;
          if (!TweenF) {
            TweenF = Tween[TweenM[prefs.s_method]];
            TweenF = TweenF[TweenEase[prefs.s_ease]] || TweenF;
            sp_transition.TweenF = TweenF;
          }
          const frameSpeed = 1000 / prefs.s_FPS;
          var t = 0; // 次数,开始
          const b = start; // 开始
          const c = end - start; // 结束
          const d = Math.ceil(prefs.s_duration / frameSpeed); // 次数,结束

          const x = window.scrollX;

          function transition () {
            const y = Math.ceil(TweenF(t, b, c, d));
            // alert(y);
            window.scroll(x, y);
            if (t < d) {
              t++;
              setTimeout(transition, frameSpeed);
            }
          }
          transition();
        }

        function sepHandler (e) {
          e.stopPropagation();
          const div = this;
          // alert(div);
          const target = e.target;
          // alert(target);

          function getRelativeDiv (which) {
            var id = div.id;
            id = id.replace(/(sp-separator-)(.+)/, function (a, b, c) {
              return b + String((Number(c) + (which == 'pre' ? -1 : 1)));
            });
            // alert(id);
            return (id ? document.getElementById(id) : null);
          }

          function scrollIt (a, b) {
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
          startipages: nullFn
        };
        var hashchangeAdded = false;

        function autopager (SSS, floatWO) {
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
            pageElement = getAllElements(SSS.a_pageElement);
            if (pageElement.length > 0) {
              const pELast = pageElement[pageElement.length - 1];
              insertPoint = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(' '));
            }
          }

          if (insertPoint) {
            debug('验证是否能找到插入位置节点:成功,', insertPoint);
          } else {
            C.error('验证是否能找到插入位置节点:失败', (SSS.a_HT_insert ? SSS.a_HT_insert[0] : ''), 'JS执行终止');
            floatWO.updateColor('Astop');
            return;
          }
          if (window.navigator.language != 'en') {
            debug(window.navigator.language);
          }

          if (pageElement === undefined) {
            pageElement = getAllElements(SSS.a_pageElement);
          }
          if (pageElement.length > 0) {
            debug('验证是否能找到主要元素:成功,', pageElement);
          } else {
            C.error('验证是否能找到主要元素:失败,', SSS.a_pageElement, 'JS执行终止');
            floatWO.updateColor('Astop');
            return;
          }

          if (SSS.a_stylish) { // 插入自定义样式
            GM.addStyle(SSS.a_stylish, 'Super_preloader-style');
          }

          var insertPointP;
          if (insertMode != 2) {
            insertPointP = insertPoint.parentNode;
          }

          var addIntoDoc;
          if (insertMode == 2) {
            addIntoDoc = function (obj) {
              return insertPoint.appendChild(obj);
            };
          } else {
            addIntoDoc = function (obj) {
              return insertPointP.insertBefore(obj, insertPoint);
            };
          }

          var doc, win;

          function XHRLoaded (req) {
            const str = req.responseText;
            doc = win = createDocumentByString(str);

            if (!doc) {
              C.error('文档对象创建失败');
              removeL();
              return;
            }
            floatWO.updateColor('autopager');
            floatWO.CmodeIcon('hide');
            floatWO.loadedIcon('show');
            working = false;
            scroll();
          }

          function removeL (isRemoveAddPage) {
            debug('移除各种事件监听');
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

                if (insertMode == 2) { // 还需要额外移除？
                  insertPoint.removeChild(insertBefore);
                }
              }
              const style = document.getElementById('Super_preloader-style');
              if (style) { style.parentNode.removeChild(style); }
            }
          }
          if (isHashchangeSite && !hashchangeAdded) {
            window.addEventListener('hashchange', onhashChange, false);
            hashchangeAdded = true;
            debug('成功添加 hashchange 事件');
          }

          function onhashChange (event) {
            debug('触发 Hashchang 事件');
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

          function iframeLoaded () {
            const iframe = this;
            // alert(this.contentDocument.body)
            const body = iframe.contentDocument.body;
            if (body && body.firstChild) {
              setTimeout(function () {
                doc = iframe.contentDocument;
                removeScripts(doc);
                win = iframe.contentWindow || doc;
                floatWO.updateColor('autopager');
                floatWO.CmodeIcon('hide');
                floatWO.loadedIcon('show');
                working = false;

                scroll();
              }, SSS.a_itimeout);
            }
          }

          function iframeRequest (link) {
            messageR = false;
            if (SSS.a_newIframe || !iframe) {
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
                i.sandbox = SSS.a_sandbox;
              }
              i.src = link;
              if (SSS.a_iloaded) {
                i.addEventListener('load', iframeLoaded, false);
                remove.push(function () {
                  i.removeEventListener('load', iframeLoaded, false);
                });
              } else {
                const messagehandler = function (e) {
                  if (!messageR && e.data == 'superpreloader-iframe:DOMLoaded') {
                    messageR = true;
                    iframeLoaded.call(i);
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

          function doRequest () {
            working = true;
            floatWO.updateColor('loading');
            floatWO.CmodeIcon('show');

            debug('获取下一页' + (SSS.a_useiframe ? '(iframe方式)' : ''), nextlink);
            if (SSS.a_useiframe) {
              iframeRequest(nextlink);
            } else {
              if (typeof (SSS.a_header) === 'string') {
                GM.xmlHttpRequest({
                  method: 'GET',
                  url: nextlink,
                  overrideMimeType: 'text/html; charset=' + document.characterSet,
                  onload: XHRLoaded,
                  header: SSS.a_header
                });
              } else {
                if (SSS.a_header) {
                  GM.xmlHttpRequest({
                    method: 'GET',
                    url: nextlink,
                    overrideMimeType: 'text/html; charset=' + document.characterSet,
                    onload: XHRLoaded,
                    header: cplink
                  });
                } else {
                  GM.xmlHttpRequest({
                    method: 'GET',
                    url: nextlink,
                    overrideMimeType: 'text/html; charset=' + document.characterSet,
                    onload: XHRLoaded
                  });
                }
              }
              debug('读取完成');
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

          function manualAdiv () {
            if (!manualDiv) {
              GM.addStyle('\
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
                ');

              const div = $C('div', {
                id: 'sp-sp-manualdiv'
              });
              manualDiv = div;
              var nextStr = 'Next';
              if ((userLang.indexOf('zh') !== -1) || prefs.ChineseUI) {
                nextStr = '下';
              }
              const span = $C('span', {
                class: 'sp-sp-md-span'
              }, nextStr);
              div.appendChild(span);

              const input = $C('input', {
                type: 'number',
                value: 1,
                min: 1,
                title: '输入你想要拼接的页数(必须>=1),然后按回车.',
                id: 'sp-sp-md-number'
              });

              const getInputValue = function () {
                var value = Number(input.value);
                if (isNaN(value) || value < 1) {
                  value = 1;
                  input.value = 1;
                }
                return value;
              };

              const spage = function () {
                if (doc) {
                  const value = getInputValue();
                  // alert(value);
                  ipagesmode = true;
                  ipagesnumber = value + paged;
                  insertedIntoDoc();
                }
              };
              input.addEventListener('keyup', function (e) {
                // alert(e.keyCode);
                if (e.keyCode == 13) { // 回车
                  spage();
                }
              }, false);
              div.appendChild(input);
              if ((userLang.indexOf('zh') !== -1) || prefs.ChineseUI) {
                div.appendChild($C('span', {
                  className: 'sp-sp-md-span'
                }, '页'));
              } else {
                div.appendChild($C('span', {
                  className: 'sp-sp-md-span'
                }, 'page'));
              }
              div.appendChild($C('img', {
                id: 'sp-sp-md-imgnext',
                src: _sep_icons.next
              }));
              div.appendChild($C('span', {
                id: 'sp-sp-md-someinfo'
              }, prefs.someValue));
              document.body.appendChild(div);
              div.addEventListener('click', function (e) {
                if (e.target.id == 'sp-sp-md-number') return;
                spage();
              }, false);
            }
            addIntoDoc(manualDiv);
            manualDiv.style.display = 'block';
          }

          function beforeInsertIntoDoc () {
            working = true;
            if (SSS.a_manualA && !ipagesmode) { // 显示手动翻页触发条.
              debug('手动拼接');
              manualAdiv();
            } else { // 直接拼接.
              debug('直接拼接');
              insertedIntoDoc();
            }
          }

          var sepStyle;
          const goNextImg = [false];
          const sNumber = prefs.sepStartN;
          const _sep_icons = sep_icons;
          var curNumber = sNumber;

          function createSep (lastUrl, currentUrl, nextUrl) {
            const div = document.createElement('div');
            if (SSS.a_separator) {
              if (!sepStyle) {
                sepStyle = GM.addStyle('\
                        div.sp-separator{\
                            line-height:1.6!important;\
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
                            border-top:1px solid #ccc!important;\
                            border-bottom:1px solid #ccc!important;\
                            -moz-border-radius:30px!important;\
                            border-radius:30px!important;\
                            background-color:#F5F5F5!important;\
                            -moz-box-shadow:inset 0 16px 20px #fff,0 2px 3px rgba(0,0,0,0.1);\
                            -webkit-box-shadow:inset 0 16px 20px #fff,0 2px 3px rgba(0,0,0,0.1);\
                            box-shadow:inset 0 16px 20px #fff,0 2px 3px rgba(0,0,0,0.1);\
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
                    ');
              }

              div.className = 'sp-separator';
              div.id = 'sp-separator-' + curNumber;
              div.addEventListener('click', sepHandler, false);
              var pageStr = '';
              if ((userLang.indexOf('zh') !== -1) || prefs.ChineseUI) {
                pageStr = '第 <span style="color:red!important;">' + curNumber + '</span> 页' +
                                    (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : '');
              } else {
                pageStr = 'Page <span style="color:red!important;">' + curNumber + '</span>' +
                                    (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : '');
              }
              div.appendChild($C('a', {
                class: 'sp-sp-nextlink',
                target: '_blank',
                href: currentUrl,
                title: currentUrl
              }, pageStr));

              div.appendChild($C('img', {
                src: _sep_icons.top,
                class: 'sp-sp-gotop',
                alt: '去到顶部',
                title: '去到顶部'
              }));

              div.appendChild($C('img', {
                src: curNumber == sNumber ? _sep_icons.pre_gray : _sep_icons.pre,
                class: 'sp-sp-gopre',
                title: '上滚一页'
              }));

              const i_next = $C('img', {
                src: _sep_icons.next_gray,
                class: 'sp-sp-gonext',
                title: '下滚一页'
              });

              if (goNextImg.length == 2) {
                goNextImg.shift();
              }
              goNextImg.push(i_next);
              div.appendChild(i_next);

              div.appendChild($C('img', {
                src: _sep_icons.bottom,
                class: 'sp-sp-gobottom',
                alt: '去到底部',
                title: '去到底部'
              }));

              div.appendChild($C('span', {
                class: 'sp-span-someinfo'
              }, prefs.someValue));
              curNumber += 1;
            } else {
              div.style.cssText = '\
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

          function insertedIntoDoc () {
            if (!doc) {
              debug('没有找到doc');
              return;
            }

            if (SSS.a_documentFilter) {
              try {
                SSS.a_documentFilter(doc, nextlink);
              } catch (e) {
                C.error('执行 documentFilter 错误', e, SSS.a_documentFilter.toString());
              }
            }

            const docTitle = getElementByCSS('title', doc).textContent;

            const fragment = document.createDocumentFragment();
            const pageElements = getAllElements(SSS.a_pageElement, false, doc, win);
            const ii = pageElements.length;
            if (ii <= 0) {
              debug('获取下一页的主要内容失败', SSS.a_pageElement);
              removeL();
              return;
            } else {
              debug('获取下一页的主要内容成功');
            }

            // 提前查找下一页链接，后面再赋值
            const lastUrl = cplink;
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
            }
            // 有部分下一页的信息是在script中（比如新加的csdn的规则），因此先查找下一页信息，再执行 removeScripts
            removeScripts(doc);

            var i, pe_x, pe_x_nn;
            for (i = 0; i < ii; i++) {
              pe_x = pageElements[i];
              pe_x_nn = pe_x.nodeName;
              if (pe_x_nn == 'BODY' || pe_x_nn == 'HTML' || pe_x_nn == 'SCRIPT') continue;
              fragment.appendChild(pe_x);
            }

            if (SSS.filter && typeof (SSS.filter) === 'string') { // 功能未完善.
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
            }

            // lazyImgSrc
            if (SSS.lazyImgSrc) {
              handleLazyImgSrc(SSS.lazyImgSrc, fragment);
            }

            var imgs;
            if (!window.opera && SSS.a_useiframe && !SSS.a_iloaded) {
              imgs = getAllElements('css;img[src]', fragment); // 收集所有图片
            }

            // 处理下一页内容部分链接是否新标签页打开
            if (prefs.forceTargetWindow) {
              const arr = Array.prototype.slice.call(fragment.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])'));
              arr.forEach(function (elem) {
                elem.setAttribute('target', '_blank');
                if (elem.getAttribute('onclick') == 'atarget(this)') { // 卡饭论坛的控制是否在新标签页打开
                  elem.removeAttribute('onclick');
                }
              });
            }

            const sepdiv = createSep(lastUrl, cplink, nextlink);
            if (pageElements[0] && pageElements[0].tagName == 'TR') {
              const insertParent = insertPoint.parentNode;
              var colNodes = getAllElements('child::tr[1]/child::*[self::td or self::th]', insertParent);
              if (colNodes.length == 0) {
                colNodes = getAllElements('child::*[self::td or self::th]', pageElements[0]);
              }
              var colums = 0;
              for (var x = 0, l = colNodes.length; x < l; x++) {
                const col = colNodes[x].getAttribute('colspan');
                colums += parseInt(col, 10) || 1;
              }
              const td = doc.createElement('td');
              td.appendChild(sepdiv);
              const tr = doc.createElement('tr');
              td.setAttribute('colspan', colums);
              tr.appendChild(td);
              fragment.insertBefore(tr, fragment.firstChild);
            } else {
              fragment.insertBefore(sepdiv, fragment.firstChild);
            }

            addIntoDoc(fragment);

            // filter
            if (SSS.filter && typeof (SSS.filter) === 'function') {
              try {
                SSS.filter(pageElements);
                debug('执行 filter(pages) 成功');
              } catch (e) {
                C.error('执行 filter(pages) 错误', e, SSS.filter.toString());
              }
            }

            if (imgs) { // 非opera,在iframeDOM取出数据时需要重载图片.
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
              // alert(oldE_lt);
              if (oldE_lt > 0) {
                const newE = getAllElements(SSS.a_replaceE, false, doc, win);
                const newE_lt = newE.length;
                // alert(newE_lt);
                if (newE_lt == oldE_lt) { // 替换
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
            if (goNextImg[0]) goNextImg[0].src = _sep_icons.next;

            const ev = document.createEvent('Event');
            ev.initEvent('Super_preloaderPageLoaded', true, false);
            document.dispatchEvent(ev);

            if (prefs.enableHistory) {
              try {
                window.history.pushState(null, docTitle, cplink);
              } catch (e) {}
            }

            if (paged >= SSS.a_maxpage) {
              debug('到达所设定的最大翻页数', SSS.a_maxpage);
              notice('<b>状态</b>:' + '到达所设定的最大翻页数:<b style="color:red">' + SSS.a_maxpage + '</b>');
              removeL();
              return;
            }
            const delayiframe = function (fn) {
              setTimeout(fn, 199);
            };
            if (nextlink) {
              // debug('找到下一页链接:', nextlink);
              doc = win = null;
              if (ipagesmode) {
                if (SSS.a_useiframe) { // 延时点,firefox,太急会卡-_-!
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
              debug('没有找到下一页链接', SSS.nextLink);
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

          function getRemain () {
            const scrolly = window.scrollY;
            const WI = window.innerHeight;
            const obj = getLastElement(relatedObj_0);
            const scrollH = (obj && obj.nodeType == 1) ? (obj.getBoundingClientRect()[relatedObj_1] + scrolly) : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            return (scrollH - scrolly - WI) / WI; // 剩余高度于页面总高度的比例.
          }

          var pause = false;
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
                notice('<b>状态</b>:' + '自动翻页<span style="color:red!important;"><b>暂停</b></span>.');
              } else {
                floatWO.updateColor('autopager');
                floatWO.CmodeIcon('hide');
                notice('<b>状态</b>:' + '自动翻页<span style="color:red!important;"><b>启用</b></span>.');
              }
              scroll();
            };
            var Sctimeout;

            const clearPause = function () {
              clearTimeout(Sctimeout);
              document.removeEventListener('mouseup', arguments.callee, false);
            };

            const pausehandler = function (e) {
              if (!SSS.a_manualA || ipagesmode || pause) {
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

          function scroll () {
            if (!pause && !working && (getRemain() <= SSS.a_remain || ipagesmode)) {
              if (doc) { // 有的话,就插入到文档.
                beforeInsertIntoDoc();
              } else { // 否则就请求文档.
                scrollDo();
              }
            } else {
              // debug('Scroll fails');
              // debug('Likely caused by firefox');
            }
          }

          var timeout;

          function timeoutfn () {
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
                notice('<b>状态</b>:' + '当前已翻页数量:<b>' + paged + '</b>,' + '连续翻页到第<b style="color:red!important;">' + ipagesnumber + '</b>页.');
                if (SSS.a_manualA) insertedIntoDoc();
                scroll();
              }
            }
          };
        }

        // prefetcher
        function prefetcher (SSS, floatWO) {
          function cContainer () {
            const div = document.createElement('div');
            const div2 = div.cloneNode(false);
            const hr = document.createElement('hr');
            div.style.cssText = '\
                margin:3px!important;\
                padding:5px!important;\
                border-radius:8px!important;\
                -moz-border-radius:8px!important;\
                border-bottom:1px solid #E30005!important;\
                border-top:1px solid #E30005!important;\
                background-color:#F5F5F5!important;\
                float:none!important;\
            ';
            div.title = '预读的内容';
            div2.style.cssText = '\
                text-align:left!important;\
                color:red!important;\
                font-size:13px!important;\
                display:block!important;\
                float:none!important;\
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
            iframe.src = nextlink;
            iframe.width = '100%';
            iframe.height = '0';
            iframe.frameBorder = '0';
            iframe.style.cssText = '\
                margin:0!important;\
                padding:0!important;\
            ';
            iframe.addEventListener('load', function () {
              const body = this.contentDocument.body;
              if (body && body.firstChild) {
                floatWO.updateColor('prefetcher');
                floatWO.CmodeIcon('hide');
                floatWO.loadedIcon('show');
                this.removeEventListener('load', arguments.callee, false);

                if (SSS.lazyImgSrc) {
                  handleLazyImgSrc(SSS.lazyImgSrc, body);
                }
              }
            }, false);
            if (SSS.viewcontent) {
              const container = cContainer();
              container.div2.innerHTML = 'iframe全预读: ' + '<br />' + '预读网址: ' + '<b>' + nextlink + '</b>';
              iframe.height = '300px';
              container.div.appendChild(iframe);
            } else {
              document.body.appendChild(iframe);
            }
          } else {
            GM.xmlHttpRequest({
              method: 'GET',
              url: nextlink,
              overrideMimeType: 'text/html; charset=' + document.characterSet,
              onload: function (req) {
                const str = req.responseText;
                const doc = createDocumentByString(str);
                if (!doc) {
                  C.error('文档对象创建失败!');
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
                if (SSS.viewcontent) {
                  const containter = cContainer();
                  const div = containter.div;
                  i = iarray.length;
                  containter.div2.innerHTML = '预读取图片张数: ' + '<b>' + i + '</b>' + '<br />' + '预读网址: ' + '<b>' + nextlink + '</b>';
                  for (i -= 1; i >= 0; i--) {
                    div.appendChild(iarray[i]);
                  }
                }
                floatWO.updateColor('prefetcher');
                floatWO.loadedIcon('show');
                floatWO.CmodeIcon('hide');
              }
            });
          }
        }

        // 执行开始..///////////////////

        // 分析黑名单
        const blackList_re = new RegExp(blackList.map(wildcardToRegExpStr).join('|'));
        if (blackList_re.test(url)) {
          debug('匹配黑名单，js执行终止');
          return;
        }

        // 是否在frame上加载..
        if (prefs.DisableI && window.self != window.parent) {
          const isReturn = !_.find(DIExclude, function (x) {
            return x[1] && x[2].test(url);
          });
          if (isReturn) {
            debug('url为:', url, '的页面为非顶层窗口,JS执行终止.');
            return;
          }
        }
        debug('url为:', url, 'JS加载成功');

        // 第一阶段..分析高级模式..
        SITEINFO = SITEINFO.concat(SITEINFO_TP, SITEINFO_comp, SITEINFO_json);
        if (!SITEINFO_D.numOfRule  || SITEINFO_D.numOfRule != SITEINFO.length) {
          SITEINFO_D.numOfRule = SITEINFO.length;
          GM.setValue('SITEINFO_D', JSON.stringify(SITEINFO_D));
        }

        // 重要的变量两枚.
        var nextlink;
        var prelink;
        //= ==============

        let SSS = {};

        const findCurSiteInfo = function () {
          const SIIAD = SITEINFO_D.autopager;
          var Rurl;
          const ii = SITEINFO.length;

          if ((userLang.indexOf('zh') !== -1) || prefs.ChineseUI) {
            debug('高级规则数目:',ii);
            debug('规则数 > ', ii - SITEINFO_json.length, '来自其他来源, 比如: wedata.net');
          } else {
            debug('Number of advanced rules:', ii);
            debug('Rules with ID > ', ii - SITEINFO_json.length, ' come from other source, ex: wedata.net');
          }

          for (var i = 0; i < ii; i++) {
            const SII = SITEINFO[i];
            Rurl = toRE(SII.url);
            if (Rurl.test(url)) {
              if ((userLang.indexOf('zh') !== -1) || prefs.ChineseUI) {
                debug('找到当前站点规则:', SII);
                debug('规则ID: ', i + 1);
              } else {
                debug('Find rule for this website: ', SII, '是第', i + 1, '规则');
                debug('Rule ID: ', i + 1);
              }


              // 运行规则的 startFilter
              if (SII.autopager && SII.autopager.startFilter) {
                SII.autopager.startFilter(window, document);
                debug('成功运行 startFilter');
              }

              nextlink = getElement(SII.nextLink || 'auto;');
              if (!nextlink) {
                debug('无法找到下一页链接,跳过规则:', SII, '继续查找其他规则');
                continue;
              }

              if (SII.preLink && SII.preLink != 'auto;') { // 如果设定了具体的preLink
                prelink = getElement(SII.preLink);
              } else {
                if (prefs.autoGetPreLink) {
                  getElement('auto;');
                }
              }

              // alert(prelink);
              SSS = {};
              SSS.Rurl = String(Rurl);
              // alert(SSS.Rurl);
              SSS.nextLink = SII.nextLink || 'auto;';
              SSS.viewcontent = SII.viewcontent;
              SSS.enable = (SII.enable === undefined) ? SITEINFO_D.enable : SII.enable;
              SSS.useiframe = (SII.useiframe === undefined) ? SITEINFO_D.useiframe : SII.useiframe;
              if (SII.pageElement) { // 如果是Oautopager的规则..
                if (!(SII.autopager instanceof Object)) SII.autopager = {};
                SII.autopager.pageElement = SII.pageElement;
                if (SII.useiframe) SII.autopager.useiframe = SII.useiframe;
                if (SII.preLink)   SII.autopager.preLink   = SII.preLink;
                if (SII.insertBefore) SII.autopager.HT_insert = [SII.insertBefore, 1];
              }
              SSS.a_header = (SII.header === undefined) ? false : SII.header;

              // 自动翻页设置.
              const SIIA = SII.autopager;
              if (SIIA) {
                SSS.a_pageElement = SIIA.pageElement;
                if (!SSS.a_pageElement) break;
                SSS.a_manualA = (SIIA.manualA === undefined) ? SIIAD.manualA : SIIA.manualA;
                SSS.a_enable = (SIIA.enable === undefined) ? SIIAD.enable : SIIA.enable;
                SSS.a_useiframe = (SIIA.useiframe === undefined) ? SIIAD.useiframe : SIIA.useiframe;
                SSS.a_newIframe = (SIIA.newIframe === undefined) ? SIIAD.newIframe : SIIA.newIframe;
                SSS.a_iloaded = (SIIA.iloaded === undefined) ? SIIAD.iloaded : SIIA.iloaded;
                SSS.a_itimeout = (SIIA.itimeout === undefined) ? SIIAD.itimeout : SIIA.itimeout;
                // alert(SSS.a_itimeout);
                SSS.a_remain = (SIIA.remain === undefined) ? SIIAD.remain : SIIA.remain;
                SSS.a_maxpage = (SIIA.maxpage === undefined) ? SIIAD.maxpage : SIIA.maxpage;
                SSS.a_separator = (SIIA.separator === undefined) ? SIIAD.separator : SIIA.separator;
                SSS.a_separatorReal = (SIIA.separatorReal === undefined) ? SIIAD.separatorReal : SIIA.separatorReal;
                SSS.a_replaceE = SIIA.replaceE;
                SSS.a_HT_insert = SIIA.HT_insert;
                SSS.a_relatedObj = SIIA.relatedObj;
                SSS.a_ipages = (SIIA.ipages === undefined) ? SIIAD.ipages : SIIA.ipages;

                // new
                SSS.filter = SII.filter || SIIA.filter; // 新增了函数的形式，原来的功能是移除 pageElement
                SSS.a_documentFilter = SII.documentFilter || SIIA.documentFilter;
                SSS.a_stylish = SII.stylish || SIIA.stylish;
                SSS.lazyImgSrc = SIIA.lazyImgSrc;
                SSS.a_header = (SIIA.header === undefined) ? SSS.a_header : SIIA.header; // custom header for XHRLoaded
                SSS.a_reload = (SIIA.reload === undefined) ? SIIAD.reload : SIIA.reload; // force reload iframe
                SSS.a_sandbox = (SIIA.sandbox === undefined) ? SIIAD.sandbox : SIIA.sandbox;
              }

              // 检验是否存在内容
              const pageElement = getElement(SSS.a_pageElement);
              if (!pageElement) {
                debug('无法找到内容,跳过规则:', SII, '继续查找其他规则');
                continue;
              }

              SSS.hasRule = true;
              break;
            }
          }

          if (!SSS.hasRule) {
            debug('未找到合适的高级规则,开始自动匹配.');
            // 自动搜索.
            if (!autoMatch.keyMatch) {
              debug('自动匹配功能被禁用了.');
            } else {
              nextlink = autoGetLink();
              // alert(nextlink);
              if (nextlink) { // 强制模式.
                const FA = autoMatch.FA;
                SSS.Rurl = window.localStorage ? ('am:' + (url.match(/^https?:\/\/[^:]*\//i) || [])[0]) : 'am:automatch';
                // alert(SSS.Rurl);
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

          debug('搜索高级规则和自动匹配过程总耗时:', new Date() - startTime, '毫秒');
        };

        findCurSiteInfo();

        // 上下页都没有找到啊
        if (!nextlink && !prelink) {
          debug('未找到相关链接, JS执行停止. 共耗时' + (new Date() - startTime) + '毫秒');
          return;
        } else {
          debug('上一页链接:', prelink);
          debug('下一页链接:', nextlink);
          nextlink = nextlink ? (nextlink.href || nextlink) : undefined;
          prelink = prelink ? (prelink.href || prelink) : undefined;
        }

        const superPreloader = {
          go: function () {
            if (nextlink) window.location.href = nextlink;
          },
          back: function () {
            if (!prelink) getElement('auto;');
            if (prelink) window.location.href = prelink;
          }
        };

        if (prefs.arrowKeyPage) {
          debug('添加键盘左右方向键翻页监听.');
          document.addEventListener('keyup', function (e) {
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
          }, false);
        }

        // 监听下一页事件.
        debug('添加鼠标手势翻页监听.');
        document.addEventListener('superPreloader.go', function () {
          superPreloader.go();
        }, false);

        // 监听下一页事件.
        document.addEventListener('superPreloader.back', function () {
          superPreloader.back();
        }, false);

        // 没找到下一页的链接
        if (!nextlink) {
          debug('下一页链接不存在,JS无法继续.');
          debug('全部过程耗时:', new Date() - startTime, '毫秒');
          return;
        }

        // 载入设置..
        const loadLocalSetting = function () {
          debug('加载设置');
          var savedValue = getValue('spfwset');
          if (savedValue) {
            try {
              savedValue = eval(savedValue);
            } catch (e) {
              saveValue('spfwset', ''); // 有问题的设置,被手动修改过?,清除掉,不然下次还是要出错.
            }
          }
          if (savedValue) {
            SSS.savedValue = savedValue;
            var i, ii;
            for (i = 0, ii = savedValue.length; i < ii; i++) {
              const savedValue_x = savedValue[i];
              if (savedValue_x.Rurl == SSS.Rurl) {
                for (var ix in savedValue_x) {
                  if (savedValue_x.hasOwnProperty(ix)) {
                    SSS[ix] = savedValue_x[ix]; // 加载键值.
                  }
                }
                break;
              }
            }
            // alert(i);
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
          SSS.a_pageElement = '//body/*';
          SSS.a_HT_insert = undefined;
          SSS.a_relatedObj = undefined;
        }

        if (prefs.floatWindow) {
          debug('创建悬浮窗');
          floatWindow(SSS);
        }

        if (!SSS.enable) {
          debug('本规则被关闭,脚本执行停止');
          debug('全部过程耗时:', new Date() - startTime, '毫秒');
          return;
        }
        debug('全部过程耗时:', new Date() - startTime, '毫秒');

        // 预读或者翻页.
        if (SSS.a_enable) {
          debug('初始化,翻页模式.');
          autopager(SSS, floatWO);
        } else {
          debug('初始化,预读模式.');
          prefetcher(SSS, floatWO);
        }

        var docChecked;

        // 获取单个元素,混合
        function getElement (selector, contextNode, doc, win) {
          const _cplink = cplink;
          var ret;
          if (!selector) return ret;
          doc = doc || document;
          win = win || window;
          contextNode = contextNode || doc;
          const type = typeof selector;
          if (type == 'string') {
            if (selector.search(/^css;/i) === 0) {
              ret = getElementByCSS(selector.slice(4), contextNode);
            } else if (selector.toLowerCase() == 'auto;') {
              ret = autoGetLink(doc, win);
            } else {
              ret = getElementByXpath(selector, contextNode, doc);
            }
          } else if (type == 'function') {
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

        function autoGetLink (doc, win) {
          if (!autoMatch.keyMatch) return;
          if (!parseKWRE.done) {
            parseKWRE();
            parseKWRE.done = true;
          }

          const startTime = new Date();
          doc = doc || document;
          win = win || window;

          if (doc == document) { // 当前文档,只检查一次.
            // alert(nextlink);
            if (docChecked) return nextlink;
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
          if (!autoGetLink.checked) { // 第一次检查
            _nextlink = nextlink;
            _prelink = prelink;
          } else {
            _prelink = true;
          }

          const DCEnable = autoMatch.digitalCheck;
          const DCRE = /^\s*\D{0,1}(\d+)\D{0,1}\s*$/;

          var i, a, ahref, atext, numtext;
          var aP; var initSD; var searchD = 1;

          var preS1; var preS2; var searchedD; var pSNText; var preSS; var nodeType;
          var nextS1, nextS2, nSNText, nextSS;
          var aimgs, j, jj, aimg_x, xbreak, k, keytext;

          function finalCheck (a, type) {
            var ahref = a.getAttribute('href'); // 在chrome上当是非当前页面文档对象的时候直接用a.href访问,不返回href
            if (ahref == '#') {
              return null;
            }
            ahref = _getFullHref(ahref); // 从相对路径获取完全的href;

            // 3个条件:http协议链接,非跳到当前页面的链接,非跨域
            if (/^https?:/i.test(ahref) && ahref.replace(/#.*$/, '') != curLHref && ahref.match(/https?:\/\/([^\/]+)/)[1] == _domain_port) {
              if (xbug) {
                debug((type == 'pre' ? '上一页' : '下一页') + '匹配到的关键字为:', atext);
              }
              return a; // 返回对象A
              // return ahref;
            }
          }

          if (xbug) {
            debug('全文档链接数量:', alllinksl);
          }

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
                if (numtext) { // 是不是纯数字
                  // debug(numtext);
                  numtext = numtext[1];
                  // alert(numtext);
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
                      initSD++;
                      // alert('initSD: '+initSD);
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
                      // alert(previousS);
                      if (pSNText) {
                        pSNText = pSNText[1];
                        // debug(pSNText)
                        // alert(pSNText)
                        if (_Number(pSNText) == _Number(numtext) - 1) {
                          // alert(searchedD);
                          nodeType = preSS.nodeType;
                          // alert(nodeType);
                          if (nodeType == 3 || (nodeType == 1 && (searchedD ? _getAllElementsByXpath('./descendant-or-self::a[@href]', preSS, doc).snapshotLength === 0 : (!preSS.hasAttribute('href') || _getFullHref(preSS.getAttribute('href')) == curLHref)))) {
                            _nextlink = finalCheck(a, 'next');
                            // alert(_nextlink);
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
                      // alert('initSD: '+initSD);
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
                      // alert(nextS);
                      if (nSNText) {
                        nSNText = nSNText[1];
                        // alert(pSNText)
                        if (_Number(nSNText) == _Number(numtext) + 1) {
                          // alert(searchedD);
                          nodeType = nextSS.nodeType;
                          // alert(nodeType);
                          if (nodeType == 3 || (nodeType == 1 && (searchedD ? _getAllElementsByXpath('./descendant-or-self::a[@href]', nextSS, doc).snapshotLength === 0 : (!nextSS.hasAttribute('href') || _getFullHref(nextSS.getAttribute('href')) == curLHref)))) {
                            _prelink = finalCheck(a, 'pre');
                            // alert(_prelink);
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
                if (!(keytext.test(atext))) continue;
                _nextlink = finalCheck(a, 'next');
                xbreak = true;
                break;
              }
              if (xbreak || _nextlink) continue;
            }
            if (!_prelink) {
              for (k = 0; k < _pPKL; k++) {
                keytext = _prePageKey[k];
                if (!(keytext.test(atext))) continue;
                _prelink = finalCheck(a, 'pre');
                break;
              }
            }
          }

          debug('搜索链接数量:', i, '耗时:', new Date() - startTime, '毫秒');

          if (!autoGetLink.checked) { // 只在第一次检测的时候,抛出上一页链接.
            prelink = _prelink;
            autoGetLink.checked = true;
          }

          // alert(_nextlink);
          return _nextlink;
        }

        function parseKWRE () {
          function modifyPageKey (name, pageKey, pageKeyLength) {
            function strMTE (str) {
              return (str.replace(/\\/g, '\\\\')
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
                .replace(/\//g, '\\/'));
            }

            const pfwordl = autoMatch.pfwordl;

            const sfwordl = autoMatch.sfwordl;

            const RE_enable_a = pfwordl[name].enable;

            const RE_maxPrefix = pfwordl[name].maxPrefix;

            const RE_character_a = pfwordl[name].character;

            const RE_enable_b = sfwordl[name].enable;

            const RE_maxSubfix = sfwordl[name].maxSubfix;

            const RE_character_b = sfwordl[name].character;
            var plwords,
              slwords,
              rep;

            plwords = RE_maxPrefix > 0 ? ('[' + (RE_enable_a ? strMTE(RE_character_a.join('')) : '.') + ']{0,' + RE_maxPrefix + '}') : '';
            plwords = '^\\s*' + plwords;
            // alert(plwords);
            slwords = RE_maxSubfix > 0 ? ('[' + (RE_enable_b ? strMTE(RE_character_b.join('')) : '.') + ']{0,' + RE_maxSubfix + '}') : '';
            slwords = slwords + '\\s*$';
            // alert(slwords);
            rep = prefs.cases ? '' : 'i';

            for (var i = 0; i < pageKeyLength; i++) {
              pageKey[i] = new RegExp(plwords + strMTE(pageKey[i]) + slwords, rep);
              // alert(pageKey[i]);
            }
            return pageKey;
          }

          // 转成正则.
          prePageKey = modifyPageKey('previous', prePageKey, prePageKey.length);
          nextPageKey = modifyPageKey('next', nextPageKey, nextPageKey.length);
        }
      }

      // By lastDream2013 略加修改，原版只能用于 Firefox
      function getRalativePageStr (lastUrl, currentUrl, nextUrl) {
        function getDigital (str) {
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
                return [(parseInt(lasturl_info) || 1), parseInt(url_info)];
              }
            }
          }
          return [0, 0];
        };

        var ralativeOff;

        // 论坛和搜索引擎网页显示实际页面信息
        var ralativePageNumarray = [];
        if (nextUrl) {
          ralativePageNumarray = getRalativePageNumArray(currentUrl, nextUrl);
        } else {
          ralativePageNumarray = getRalativePageNumArray(lastUrl, currentUrl);
          ralativeOff = ralativePageNumarray[1] - ralativePageNumarray[0]; // 用的上一页的相对信息比较的，要补充差值……
          ralativePageNumarray[1] = ralativePageNumarray[1] + ralativeOff;
          ralativePageNumarray[0] = ralativePageNumarray[0] + ralativeOff;
        }

        // console.log('[获取实际页数] ', '要比较的3个页数：',arguments, '，得到的差值:', ralativePageNumarray);
        if (isNaN(ralativePageNumarray[0]) || isNaN(ralativePageNumarray[1])) {
          return '';
        }

        var realPageSiteMatch = false;
        ralativeOff = ralativePageNumarray[1] - ralativePageNumarray[0];
        // 上一页与下一页差值为1，并最大数值不超过10000(一般论坛也不会超过这么多页……)
        if (ralativeOff === 1 && ralativePageNumarray[1] < 10000) {
          realPageSiteMatch = true;
        }

        // 上一页与下一页差值不为1，但上一页与下一页差值能被上一页与下一面所整除的，有规律的页面
        if (!realPageSiteMatch && ralativeOff !== 1) {
          if ((ralativePageNumarray[1] % ralativeOff) === 0 && (ralativePageNumarray[0] % ralativeOff) === 0) {
            realPageSiteMatch = true;
          }
        }

        if (!realPageSiteMatch) { // 不满足以上条件，再根据地址特征来匹配
          var sitePattern;
          for (var i = 0, length = REALPAGE_SITE_PATTERN.length; i < length; i++) {
            sitePattern = REALPAGE_SITE_PATTERN[i];
            if (currentUrl.toLocaleLowerCase().indexOf(sitePattern) >= 0) {
              realPageSiteMatch = true;
              break;
            }
          }
        }

        var ralativePageStr;
        if (realPageSiteMatch) { // 如果匹配就显示实际网页信息
          if ((userLang.indexOf('zh') !== -1) || prefs.ChineseUI) {
            if (ralativePageNumarray[1] - ralativePageNumarray[0] > 1) { // 一般是搜索引擎的第xx - xx项……
              ralativePageStr = ' [ 实际：第 <font color="red">' + ralativePageNumarray[0] + ' - ' + ralativePageNumarray[1] + '</font> 项 ]';
            } else if ((ralativePageNumarray[1] - ralativePageNumarray[0]) === 1) { // 一般的翻页数，差值应该是1
              ralativePageStr = ' [ 实际：第 <font color="red">' + ralativePageNumarray[0] + '</font> 页 ]';
            } else if ((ralativePageNumarray[0] === 0 && ralativePageNumarray[1]) === 0) { // 找不到的话……
              ralativePageStr = ' [ <font color="red">实际网页结束</font> ]';
            }
          } else {
            if (ralativePageNumarray[1] - ralativePageNumarray[0] > 1) { // 一般是搜索引擎的第xx - xx项……
              ralativePageStr = ' [ Actual elements/pages: <font color="red">' + ralativePageNumarray[0] + ' - ' + ralativePageNumarray[1] + '</font> ]';
            } else if ((ralativePageNumarray[1] - ralativePageNumarray[0]) === 1) { // 一般的翻页数，差值应该是1
              ralativePageStr = ' [ Actual elements/pages: <font color="red">' + ralativePageNumarray[0] + '</font> ]';
            } else if ((ralativePageNumarray[0] === 0 && ralativePageNumarray[1]) === 0) { // 找不到的话……
              ralativePageStr = ' [ <font color="red">Actual elements ends</font> ]';
            }
          }
        } else {
          ralativePageStr = '';
        }
        return ralativePageStr || '';
      }
    }
  );

  // ----------------------------------

  var isUpdating = true;

  function checkUpdate (button) {
    if (isUpdating) {
      return;
    }

    button.innerHTML = '正在更新中...';
    button.disabled = 'disabled';

    const reset = function () {
      isUpdating = false;
      button.innerHTML = '马上更新';
      button.disabled = '';
    };

    GM.xmlHttpRequest({
      method: 'GET',
      url: scriptInfo.metaUrl,
      onload: function (response) {
        const txt = response.responseText;
        const curVersion = scriptInfo.version;
        var latestVersion = txt.match(/@\s*version\s*([\d\.]+)\s*/i);
        if (latestVersion) {
          latestVersion = latestVersion[1];
        } else {
          alert('解析版本号错误');
          return;
        }

        // 对比版本号
        var needUpdate;
        const latestVersions = latestVersion.split('.');
        const lVLength = latestVersions.length;
        const currentVersion = curVersion.split('.');
        const cVLength = currentVersion.length;
        var lV_x;
        var cV_x;
        for (var i = 0; i < lVLength; i++) {
          lV_x = Number(latestVersions[i]);
          cV_x = (i >= cVLength) ? 0 : Number(currentVersion[i]);
          if (lV_x > cV_x) {
            needUpdate = true;
            break;
          } else if (lV_x < cV_x) {
            break;
          }
        }

        if (needUpdate) {
          alert('本脚本从版本 ' + scriptInfo.version + '  更新到了版本 ' + latestVersion + '.\n请点击脚本主页进行安装');
          document.getElementById('sp-prefs-homepageURL').boxShadow = '0 0 2px 2px #FF5555';
        }

        reset();
      }
    });

    setTimeout(reset, 30 * 1000);
  }

  // ----------------------------------
  // main.js

  // ------------------------下面的不要管他-----------------
  /// ////////////////////////////////////////////////////////////////

  const C = console;
  var debug = function () {};
  // 变量
  var isHashchangeSite = false;

  var hashchangeTimer = 0;

  // ====================  libs  ==============================
  // 地址栏递增处理函数.
  function hrefInc (obj, doc, win, cplink) {
    var _cplink = cplink;

    function getHref (href) {
      const mFails = obj.mFails;
      if (!mFails) return href;
      var str;
      if (typeof mFails === 'string') {
        str = mFails;
      } else {
        var fx;
        const array = [];
        var i, ii;
        var mValue;
        for (i = 0, ii = mFails.length; i < ii; i++) {
          fx = mFails[i];
          if (!fx) continue;
          if (typeof fx === 'string') {
            array.push(fx);
          } else {
            mValue = href.match(fx);
            if (!mValue) return href;
            array.push(mValue);
          }
        }
        str = array.join('');
      }
      return str;
    }
    // alert(getHref(_cplink))

    var sa = obj.startAfter;
    const saType = typeof sa;
    var index;

    if (saType == 'string') {
      if (sa[0] == '#') {
        _cplink = doc.location.href;
      }
      index = _cplink.indexOf(sa);
      if (index == -1) {
        _cplink = getHref(_cplink);
        index = _cplink.indexOf(sa);
        if (index == -1) return;
        // alert(index);
      }
    } else {
      const tsa = _cplink.match(sa);
      // alert(sa);
      if (!tsa) {
        _cplink = getHref(_cplink);
        sa = (_cplink.match(sa) || [])[0];
        if (!sa) return;
        index = _cplink.indexOf(sa);
        if (index == -1) return;
      } else {
        sa = tsa[0];
        index = _cplink.indexOf(sa);
        // alert(index)
        // alert(tsa.index)
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
    // alert(aStr+nbStr);
    if (nbStr !== bStr) {
      var ilresult;
      try {
        ilresult = obj.isLast(doc, unsafeWindow, _cplink);
      } catch (e) {}
      if (ilresult) return;
      return aStr + nbStr;
    }
  }

  // underscore library, requires ECMAScript 5
  const _ = (function () {
    const nativeIsArray = Array.isArray;
    const _ = function (obj) {
      if (obj instanceof _) return obj;
      if (!(this instanceof _)) return new _(obj);
      this._wrapped = obj;
    };

    const toString = Object.prototype.toString;

    _.isArray = nativeIsArray || function (obj) {
      return toString.call(obj) == '[object Array]';
    };

    _.isFunction = function(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    };

    ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'].forEach(function (name) {
      _['is' + name] = function (obj) {
        return toString.call(obj) == '[object ' + name + ']';
      };
    });

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = function (obj, iterator, context) {
      var result;
      obj.some(function (value, index, array) {
        if (iterator.call(context, value, index, array)) {
          result = value;
          return true;
        }
      });
      return result;
    };

    _.flat = function (obj) {
      return [].concat.apply([], obj);
    };

    return _;
  })();

  /* jshint ignore:start */
  // 动画库
  const Tween = {
    Linear: function (t, b, c, d) {
      return c * t / d + b;
    },
    Quad: {
      easeIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
      }
    },
    Cubic: {
      easeIn: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    },
    Quart: {
      easeIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOut: function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      }
    },
    Quint: {
      easeIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }
    },
    Sine: {
      easeIn: function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOut: function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOut: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      }
    },
    Expo: {
      easeIn: function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOut: function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      },
      easeInOut: function (t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    },
    Circ: {
      easeIn: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOut: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    },
    Elastic: {
      easeIn: function (t, b, c, d, a, p) {
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
      easeOut: function (t, b, c, d, a, p) {
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
        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
      },
      easeInOut: function (t, b, c, d, a, p) {
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
      easeIn: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOut: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOut: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
      }
    },
    Bounce: {
      easeIn: function (t, b, c, d) {
        return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
      },
      easeOut: function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
          return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
          return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        } else if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        } else {
          return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
        }
      },
      easeInOut: function (t, b, c, d) {
        if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;
        else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
      }
    }
  };

  const TweenM = [
    'Linear',
    'Quad',
    'Cubic',
    'Quart',
    'Quint',
    'Sine',
    'Expo',
    'Circ',
    'Elastic',
    'Back',
    'Bounce'
  ];

  const TweenEase = [
    'easeIn',
    'easeOut',
    'easeInOut'
  ];
  /* jshint ignore:end */

  // ====================  functions  ==============================
  function handleLazyImgSrc (rule, doc) {
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

  function removeScripts (node) { // 移除元素的 script
    const scripts = getAllElements('css;script', node);
    var scripts_x;
    for (var i = scripts.length - 1; i >= 0; i--) {
      scripts_x = scripts[i];
      scripts_x.parentNode.removeChild(scripts_x);
    }
  }

  var noticeDiv;
  var noticeDivto;
  var noticeDivto2;

  function notice (html_txt) {
    if (!noticeDiv) {
      const div = document.createElement('div');
      noticeDiv = div;
      div.style.cssText = '\
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
        ';
      document.body.appendChild(div);
    }
    clearTimeout(noticeDivto);
    clearTimeout(noticeDivto2);
    noticeDiv.innerHTML = html_txt;
    noticeDiv.style.display = 'block';
    noticeDiv.style.opacity = '0.96';
    noticeDivto2 = setTimeout(function () {
      noticeDiv.style.opacity = '0';
    }, 1666);
    noticeDivto = setTimeout(function () {
      noticeDiv.style.display = 'none';
    }, 2000);
  }

  function $C (type, atArr, inner, action, listen) {
    const e = document.createElement(type);
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
  }

  // css 获取单个元素
  function getElementByCSS (css, contextNode) {
    return (contextNode || document).querySelector(css);
  }

  // css 获取所有元素
  function getAllElementsByCSS (css, contextNode) {
    return (contextNode || document).querySelectorAll(css);
  }

  // xpath 获取单个元素
  function getElementByXpath (xpath, contextNode, doc) {
    doc = doc || document;
    contextNode = contextNode || doc;
    try {
      const result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return result.singleNodeValue;
    } catch (err) {
      console.log('Invalid xpath: ',xpath);
      return undefined;
    }
  }

  // xpath 获取多个元素.
  function getAllElementsByXpath (xpath, contextNode, doc) {
    doc = doc || document;
    contextNode = contextNode || doc;
    return doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  }

  // 获取多个元素
  function getAllElements (selector, contextNode, doc, win) {
    const ret = [];
    if (!selector) return ret;
    var Eles;
    doc = doc || document;
    win = win || window;
    contextNode = contextNode || doc;
    if (typeof selector === 'string') {
      if (selector.search(/^css;/i) === 0) {
        Eles = getAllElementsByCSS(selector.slice(4), contextNode);
      } else {
        Eles = getAllElementsByXpath(selector, contextNode, doc);
      }
    } else {
      Eles = selector(doc, win);
      if (!Eles) return ret;
      if (Eles.nodeType) { // 单个元素.
        ret[0] = Eles;
        return ret;
      }
    }

    function unique (array) { // 数组去重并且保持数组顺序.
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

    function makeArray (x) {
      var ret = [];
      var i, ii;
      var x_x;
      if (x.pop) { // 普通的 array
        for (i = 0, ii = x.length; i < ii; i++) {
          x_x = x[i];
          if (x_x) {
            if (x_x.nodeType) { // 普通类型,直接放进去.
              ret.push(x_x);
            } else {
              ret = ret.concat(makeArray(x_x)); // 嵌套的.
            }
          }
        }
        // alert(ret)
        return unique(ret);
      } else if (x.item) { // nodelist or HTMLcollection
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
      } else if (x.iterateNext) { // XPathResult
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
  }

  // 获取最后一个元素.
  function getLastElement (selector, contextNode, doc, win) {
    const eles = getAllElements(selector, contextNode, doc, win);
    const l = eles.length;
    if (l > 0) {
      return eles[l - 1];
    }
  }

  function saveValue (key, value) {
    localStorage.setItem(key, encodeURIComponent(value));
  }

  function getValue (key) {
    const value = localStorage.getItem(key);
    return value ? decodeURIComponent(value) : undefined;
  }

  function createDocumentByString (str) { // string转为DOM
    if (!str) {
      C.error('没有找到要转成DOM的字符串');
      return;
    }
    if (document.documentElement.nodeName != 'HTML') {
      return new DOMParser().parseFromString(str, 'application/xhtml+xml');
    }

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
    for (var i = bchilds.length - 1; i >= 0; i--) { // 移除head的子元素
      child = bchilds[i];
      if (headChildNames[child.nodeName]) body.removeChild(child);
    }
    // alert(doc.documentElement.innerHTML);
    // debug(doc);
    // debug(doc.documentElement.innerHTML);
    return doc;
  }

  // 从相对路径的a.href获取完全的href值.
  function getFullHref (href) {
    if (typeof href !== 'string') href = href.getAttribute('href');
    // alert(href);
    // if(href.search(/^https?:/)==0)return href;//http打头,不一定就是完整的href;
    var a = getFullHref.a;
    if (!a) {
      getFullHref.a = a = document.createElement('a');
    }
    a.href = href;
    // alert(a.href);
    return a.href;
  }

  // 任何转成字符串，存储，修改过
  function xToString (x) {
    function toStr (x) {
      switch (typeof x) {
      case 'undefined':
        return Str(x);
      case 'boolean':
        return Str(x);
      case 'number':
        return Str(x);
      case 'string':
        return ('"' +
                        (x.replace(/(?:\r\n|\n|\r|\t|\\|\")/g, function (a) {
                          var ret;
                          switch (a) { // 转成字面量
                          case '\r\n':
                            ret = '\\r\\n';
                            break;
                          case '\n':
                            ret = '\\n';
                            break;
                          case '\r':
                            ret = '\\r';
                            break;
                          case '\t':
                            ret = '\\t';
                            break;
                          case '\\':
                            ret = '\\\\';
                            break;
                          case '"':
                            ret = '\\"';
                            break;
                          default:
                            break;
                          }
                          return ret;
                        })) + '"');
      case 'function': {
        const fnStr = Str(x);
        return fnStr.indexOf('native code') == -1 ? fnStr : 'function(){}';
      }
      case 'object':
        // 注,object的除了单纯{},其他的对象的属性会造成丢失..
        if (x === null) {
          return Str(x);
        }
        var rStr = '';
        var i;
        switch (x.constructor.name) {
        case 'Object':
          for (i in x) {
            if (!x.hasOwnProperty(i)) { // 去掉原型链上的属性.
              continue;
            }
            rStr += toStr(i) + ':' + toStr(x[i]) + ',';
          }
          return ('{' + rStr.replace(/,$/i, '') + '}');
        case 'Array':
          for (i in x) {
            if (!x.hasOwnProperty(i)) { // 去掉原型链上的属性.
              continue;
            }
            rStr += toStr(x[i]) + ',';
          }
          return '[' + rStr.replace(/,$/i, '') + ']';
        case 'String':
          return toStr(Str(x));
        case 'RegExp':
          return Str(x);
        case 'Number':
          return Str(x);
        case 'Boolean':
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
    const Str = String;
    return toStr(x);
  }

  function toRE (obj) {
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

  function wildcardToRegExpStr (urlstr) {
    if (urlstr.source) return urlstr.source;
    const reg = urlstr.replace(/[()\[\]{}|+.,^$?\\]/g, '\\$&').replace(/\*+/g, function (str) {
      return str === '*' ? '.*' : '[^/]*';
    });
    return '^' + reg + '$';
  }

  function getAllIndexes(arr, val) {
    var indexes = [];
    var i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
      indexes.push(i);
    }
    return indexes;
  }

  function getDomain(cplink) {
    // Get [PROTOCOL]://[DOMAIN]
    var a = getAllIndexes(cplink, '/');
    if (a.length > 2) {
      return cplink.substr(0, a[2]);
    }
    else {
      return cplink;
    }
  }

  function assignMissingProperty(a, b) {
    var hasMissing = false;
    for (var prop in a){
      if (!b.hasOwnProperty(prop)) {
        hasMissing = true;
        b[prop] = a[prop];
      }
    }
    return hasMissing;
  }

  //Function to compare two version strings https://gist.github.com/TheDistantSea/8021359
  function versionCompare(v1, v2, options) {
    var lexicographical = options && options.lexicographical,
      zeroExtend = options && options.zeroExtend,
      v1parts = v1.split('.'),
      v2parts = v2.split('.');

    function isValidPart(x) {
      return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
      return NaN;
    }

    if (zeroExtend) {
      while (v1parts.length < v2parts.length) v1parts.push("0");
      while (v2parts.length < v1parts.length) v2parts.push("0");
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
      }
      else if (v1parts[i] > v2parts[i]) {
        return 1;
      }
      else {
        return -1;
      }
    }

    if (v1parts.length != v2parts.length) {
      return -1;
    }

    return 0;
  }
})();
