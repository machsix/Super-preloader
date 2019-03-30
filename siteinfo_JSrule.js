const SITEINFO = [
  {
    // 站点名字...(可选)             // 站点正则...(~~必须~~)
    name: "Google搜索",
    url: "^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp|search|#|$|\\?)",
    // url:'wildc;http://www.google.com.hk/search*',
    exampleUrl: "http://www.google.com", // 站点实例...(可选)
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
      relatedObj: ["css;div#navcnt", "bottom"], // 以这个元素当做最底的元素,计算页面总高度的计算.(可选)
      replaceE: '//div[@id="navcnt"]', // 需要替换的部分 xpath或 CSS选择器 一般是页面的本来的翻页导航(可选);
      // replaceE:'css;div#navcnt',
      ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.(可选)
      separator: true, // 是否显示翻页导航(可选)
      separatorReal: true,
      maxpage: 66, // 最多翻页数量(可选)
      manualA: false, // 是否使用手动翻页.
      HT_insert: ['//div[@id="res"]', 2], // 插入方式此项为一个数组: [节点xpath或CSS选择器,插入方式(1：插入到给定节点之前;2：附加到给定节点的里面;)](可选);
      // HT_insert:['css;div#res',2],
      lazyImgSrc: "imgsrc",
      // 新增的自定义样式。下面这个是调整 Google 下一页可能出现的图片排列问题。
      stylish: "hr.rgsep{display:none;}" + ".rg_meta{display:none}.bili{display:inline-block;margin:0 6px 6px 0;overflow:hidden;position:relative;vertical-align:top}._HG{margin-bottom:2px;margin-right:2px}",
      documentFilter: function(doc) {
        // 修正下一页的图片
        const x = doc.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', doc, null, 9, null).singleNodeValue;
        if (x) {
          try {
            new Function("document", "window", "google", x.nodeValue)(doc, unsafeWindow, unsafeWindow.google);
          } catch (e) {}
        }

        // 修正可能出现的 小箭头更多按钮 排版不正确的情况（2014-7-29）
        //                     var oClarelssName = window.document.querySelector('#ires .ab_button').className;
        //                     [].forEach.call(doc.querySelectorAll('#ires .ab_button'), function (elem) {
        //                         if (elem.className != oClassName)
        //                             elem.className = oClassName;
        //                     });
      },
      filter: function() {
        // 在添加内容到页面后运行
      },
      startFilter: function(win, doc) {
        // 只作用一次
        // 移除 Google 重定向
        const script = doc.createElement("script");
        script.type = "text/javascript";
        script.textContent =
          '\
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
        const ins = doc.getElementById("ires");
        const bres = doc.getElementById("bres");
        const brs = doc.getElementById("brs");
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
      startFilter: function(win) {
        // 设置百度搜索类型为 s?wd=
        try {
          win.document.cookie = "ISSW=1";
        } catch (ex) {}
      }
    }
  },
  {
    name: "smzdm-comment",
    url: /^https?:\/\/\w+\.smzdm\.com(\/\w+)?\/p\/[\d\w\W]+/i,
    exampleUrl: "https://post.smzdm.com/p/559992/",
    // 还有另外一种评论
    // exampleUrl: 'https://www.smzdm.com/p/11496450/ | https://test.smzdm.com/pingce/p/70095121/',
    nextLink: '//ul[@class="pagination"]/li[@class="pagedown"]/a',
    autopager: {
      pageElement: 'id("commentTabBlockNew")/ul[@class="comment_listBox"]',
      replaceE: '(//ul[@class="pagination"])[1]',
      // 好好的一个页面非要弄出2个翻页器，干掉一个
      // 只执行一次
      startFilter: function(win, doc) {
        const firstDiv = doc.querySelector(".pagination");
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  },
  {
    name: "和讯博客",
    url: /^https?:\/\/\w+\.blog\.hexun\.com\//i,
    exampleUrl: "http://23802543.blog.hexun.com/",
    nextLink: function(doc) {
      var url = doc.querySelector('.PageSkip_1 a[title="下一页"]').getAttribute("href");
      url = url.replace(/(\/p\d+\/).*/, "$1default.html");
      return url;
    },
    autopager: {
      pageElement: 'id("DefaultContainer1_ArticleList_Panel1")'
    }
  },
  {
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
      isLast: function(doc, win, lhref) {
        const pageSel = doc.getElementById("next");
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
  {
    name: "天涯论坛帖子",
    url: /^https?:\/\/bbs\.tianya\.cn\/.+\.shtml/i,
    exampleUrl: "http://bbs.tianya.cn/post-feeling-2792523-1.shtml",
    nextLink: '//div[@class="atl-pages"]/descendant::a[text()="下页"][@href]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="atl-main"]',
      lazyImgSrc: "original",
      filter: function(pages) {
        const see_only_uname = unsafeWindow.see_only_uname;
        const setOnlyUser = unsafeWindow.setOnlyUser;
        if (see_only_uname) {
          setOnlyUser(see_only_uname);
        }
      }
    }
  },
  {
    name: "Firefox中文社区 - 列表",
    url: "^https?://www\\.firefox\\.net\\.cn/thread",
    nextLink: '//div[@class="pages"]/a[contains(text(), "下一页")]',
    autopager: {
      pageElement: 'id("J_posts_list")',
      replaceE: "css;.pages",
      documentFilter: function(doc) {
        // 头像载入出错的修正
        [].forEach.call(doc.querySelectorAll("img.J_avatar"), function(img) {
          img.setAttribute("onerror", 'this.src="http://www.firefox.net.cn/res/images/face/face_small.jpg";');
        });
      }
    }
  },
  {
    name: "小米手机官方论坛",
    url: "^https?://bbs\\.xiaomi\\.cn/",
    nextLink: "//a[@class='nxt' and (text()='下一页')]",
    autopager: {
      pageElement: "id('postlist') | id('threadlist')",
      replaceE: '//div[@class="pg"][child::a[@class="nxt"]]',
      documentFilter: function(doc) {
        const firstDiv = doc.querySelector("div[id^='post_']");
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  },
  {
    name: "抽屉新热榜",
    url: /^https?:\/\/dig\.chouti\.com\//i,
    nextLink: '//a[@class="ct_page_edge" and (text()="下一页")]',
    autopager: {
      pageElement: '//div[@id="content-list"]',
      lazyImgSrc: "original",
      filter: function(pages) {
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
    name: "koolshare扩展页面",
    url: "^https?://koolshare\\.cn/home\\.php",
    exampleUrl: "http://koolshare.cn/home.php",
    nextLink: "//a[contains(text(),'下一页')]",
    pageElement: "id('ct')//tbody",
    autopager: {
      // 只执行一次，删除多余的表头
      documentFilter: function(doc) {
        const firstDiv = doc.querySelector(".th");
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  },
  {
    name: "CSDN博客",
    url: /^https?:\/\/blog\.csdn\.net/i,
    exampleUrl: "http://blog.csdn.net/wangjieest?viewmode=list",
    nextLink: function(doc, win, cplink) {
      for (var i = 0; i < doc.scripts.length; i++) {
        const scriptText = doc.scripts[i].text;
        if (typeof scriptText != "undefined" && scriptText.indexOf("currentPage") > 0) {
          const pageMatches = scriptText.match(/currentPage[ ]?=[ ]?(\d+)/);
          if (pageMatches.length != 2) {
            continue;
          }

          const baseUrlMatches = scriptText.match(/baseUrl[ ]?=[ ]?'([^']+)'/);
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
      documentFilter: function(doc) {
        // 文档底部的 marginBottom 重置
        const articleList = doc.querySelector(".article-list");
        if (articleList) {
          articleList.style.marginBottom = "0";
        }
      },
      startFilter: function(win, doc) {
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
    name: "CSDN话题",
    url: /^https?:\/\/bbs\.csdn\.net\/topics\//i,
    exampleUrl: "http://bbs.csdn.net/topics/390244325",
    nextLink: '(//div[@class="page_nav"])[1]/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("bbs_detail_wrap")',
      documentFilter: function(doc) {
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
      startFilter: function(win, doc) {
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
    name: "bl-novel",
    url: "^https?://bl-novel\\.in/novel",
    nextLink: "//a[@id='pb_next']",
    pageElement: "//div[@id='nr']",
    documentFilter: function(doc, nextLink) {
      var scripts = doc.getElementsByTagName("script");
      var re = /chapter\s*=\s*secret\(['"](.*)['"],\s*['"](.*)['"],\s*(\w+)\s*\)/g;
      var c;
      [].forEach.call(scripts, function(x) {
        if (x.innerText.indexOf("var chapter") >= 0) {
          var temp = re.exec(x.innerText);
          var content = temp[1];
          var salt = temp[2];
          // function secret is provided by the website
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
  },
  {
    name: "第一版主",
    url: "^https?://www\\.diyibanzhu9\\.com",
    pageElement: "//div[@id='content']",
    nextLink: function(doc, win, cplink) {
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
  },
  {
    name: "起点文学-排行榜",
    url: /^https?:\/\/www\.(qidian)\.com(\/mm)?\/rank\/.*/i,
    exampleUrl: "https://www.qidian.com/rank/collect",
    nextLink: function(doc, win, cplink) {
      var res = getElementByXpath('//div[@id="page-container"]', doc);
      if (res === null) {
        return undefined;
      }

      const next = Number(res.dataset.page) + 1;

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
  },
  {
    name: "优书-书单|评论",
    url: /^https?:\/\/www\.yousuu\.com\/(comments|booklist)/i,
    nextLink: function(doc, win, cplink) {
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
  },
  // =============================== manhua ========================
  {
    name: "动漫之家漫画网",
    url: /^https?:\/\/(www|manhua)\.(dmzj|178)\.com\/\w+\/\d+\.shtml/,
    exampleUrl: "https://manhua.dmzj.com/yuanlian/36944.shtml#@page=1",
    nextLink: function(doc, win, cplink) {
      const current = Number(getElementByXpath('//*[@id="page_select"]/option[@selected][1]', doc).text.match(/(\d+)/)[1]);
      const xpath_last = '//*[@id="page_select"]/option[last()]';
      const end_num = Number(getElementByXpath(xpath_last, doc).text.match(/(\d+)/)[1]);
      const next = current + 1;
      if (next > end_num) {
        return undefined;
      } else {
        return cplink.replace(/\.shtml(?:#@page=\d+)?/, ".shtml#@page=" + next);
      }
    },
    autopager: {
      useiframe: true,
      reload: true, // do not create new iframe but reload
      ipages: [true, 20],
      pageElement: '//div[@id="center_box"]/img'
    }
  },
  {
    name: "看漫画",
    url: /^https?:\/\/www\.manhuagui\.com\/comic\/.+/i,
    // this is a set which uses hash to change page
    // we need to manually add hash
    nextLink: function(doc, win, cplink) {
      const current = Number(getElementByXpath('//*[@id="page"]', doc).innerHTML);
      const xpath_last = '//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]';
      const end_num = Number(getElementByXpath(xpath_last, doc).text);
      const next = current + 1;
      if (next > end_num) {
        return undefined;
      } else {
        return cplink.replace(/\.html(?:#p=\d+)?/, ".html#p=" + next);
      }
    },
    autopager: {
      useiframe: true,
      newIframe: false,
      reload: true, // do not create new iframe but reload
      pageElement: '//div[@class="clearfix"]',
      ipages: [true, 20]
    },
    exampleUrl: "https://www.manhuagui.com/comic/17332/372862.html"
  },
  {
    name: "CC漫画网",
    url: "^https?://www\\.tuku\\.cc/comic/\\d+/\\d+/",
    exampleUrl: "http://www.tuku.cc/comic/6123/1/",
    nextLink: "auto;",
    autopager: {
      pageElement: '//img[@id="cp_image"]',
      useiframe: true
    }
  },
  // 已失效
  //     {name: '爱漫画',
  //         url: /^http:\/\/www\.iimanhua\.com\/comic\/.+/i,
  //         exampleUrl:'http://www.iimanhua.com/comic/55/list_39448.html',
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
  //         exampleUrl:'http://www.xindm.cn/mh/shishangzuiqiangdizi/58784.html?p=2',
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
      isLast: function(doc, win, lhref) {
        const TotalPage = Number(doc.getElementById("TotalPage").innerText) - 1;
        const CurrentPage = Number(doc.getElementById("CurrentPage").innerText);
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
    name: "哦漫画",
    url: /^https?:\/\/www\.omanhua\.com\/comic\//i,
    exampleUrl: "http://www.omanhua.com/comic/2957/36463/index.html?p=2",
    nextLink: {
      startAfter: "?p=",
      mFails: [/^http:\/\/www\.omanhua\.com\/comic\/.+/i, "?p=1"],
      inc: 1,
      isLast: function(doc, win, lhref) {
        const select = doc.getElementById("pageSelect");
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
    name: "汗汗漫画",
    url: /^https?:\/\/\w+\.(?:vs20|3gmanhua|hhcomic|huhudm|huhumh|hhimm|hhmmoo)\.(?:com|net)\/\w+\/\d+\.html/i,
    exampleUrl: "http://www.hhmmoo.com/page315224/1.html?s=1； http://www.hhmmoo.com/page315224/4.html?s=1&d=0",
    nextLink: function(doc, win, cplink) {
      // created based on http://www.hhmmoo.com/script/view.js
      const m = cplink.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/);
      const url_head = m[1];
      const current = Number(m[2]);
      var dID = m[4];
      if (!dID) dID = "&d=0";
      const next = current + 1;
      const xpath = '//div[@class="cH1"]/b[1]';
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
  },
  {
    name: "99漫画",
    url: /^https?:\/\/(cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(com|cc)/i,
    exampleUrl: "http://dm.99manga.com/comic/35416/316645/?p=2&s=0",
    nextLink: {
      startAfter: "?p=",
      inc: 1,
      mFails: [/^https?:\/\/(?:cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(?:com|cc)\/.+/i, "?p=1&s=0"],
      isLast: function(doc, win, lhref) {
        const maxpage = Number(doc.getElementById("spPageCount").innerText);
        const current = Number(doc.getElementById("spPageIndex").innerText);
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
      isLast: function(doc, win, lhref) {
        // console.log(lhref)
        const pageSelect = doc.getElementById("qTcms_select_i");
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
      isLast: function(doc, win, lhref) {
        const index = doc.getElementById("images").children[1].innerText;
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
    name: "sis001.com",
    url: /^https?:\/\/(\w+\.)?sis001\.com\/forum\/(forum|thread)[0-9\-]+\.html/i,
    exampleUrl: "https://www.sis001.com/forum/forum-230-1.html",
    nextLink: '//div[@class="pages_btns"]//a[@class="next"]',
    autopager: {
      pageElement: '//div[@class="mainbox"]//table[last()]',
      replaceE: '//div[@class="pages_btns"]',
      // 只执行一次，删除广告
      startFilter: function(win, doc) {
        const firstDiv = doc.querySelector("#ad_text");
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  },
  // ==================== 国外站点 ===================
  {
    name: "xkcd",
    url: "^https?://(?:www.)?xkcd.com",
    nextLink: function(doc, win, cplink) {
      const m = cplink.match(/\d+/);
      if (!m) {
        return cplink + "/2/";
      } else {
        var url = doc.querySelector("a[rel=next]").getAttribute("href");
        url = "https://www.xkcd.com/" + url;
        return url;
      }
    },
    pageElement: 'id("middleContainer")'
  }
];

module.exports = SITEINFO;
