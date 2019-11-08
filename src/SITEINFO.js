const pkg = require("../package.json");

//  ///////// ----- Rules for specific sites -------///////////
//  Highest priority
const SITEINFO_BUILDIN = [
  // todo: get and new var in main
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
      enable: true, // 启用(自动翻页)(可选)
      useiframe: false, // 是否使用iframe翻页(可选)
      iloaded: false, // 是否在iframe完全load之后操作..否则在DOM完成后操作.
      itimeout: 0, // 延时多少ms后,在操作..
      // reload: true,      // Force reload iframe when the src is changed
      newIframe: false, // 下一页使用新的 iframe，能解决按钮无法点击的问题
      pageElement: '//div[@id="res"]|//div[@id="extrares"]', // 主体内容 xpath 或 CSS选择器 或函数返回值(~~必须~~)
      // pageElement:'css;div#ires',
      // pageElement:function(doc,win){return doc.getElementById('ires')},
      // filter:'//li[@class="g"]',                                                                        //(此项功能未完成)xpath 或 CSS选择器从匹配到的节点里面过滤掉符合的节点.
      remain: 1 / 3, // 剩余页面的高度..是显示高度的 remain 倍开始翻页(可选)
      relatedObj: ["css;div#navcnt", "bottom"], // 以这个元素当做最底的元素,计算页面总高度的计算.(可选)
      replaceE: '//div[@id="navcnt"]', // 需要替换的部分 xpath或 CSS选择器 一般是页面的本来的翻页导航(可选);
      // replaceE:'css;div#navcnt',
      ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.(可选)
      separator: true, // 是否显示翻页导航(可选)
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
      maxpage: 66, // 最多翻页数量(可选)
      manualA: false, // 是否使用手动翻页.
      // HT_insert: ['//div[@id="res"]', 0], // 插入方式此项为一个数组: [节点xpath或CSS选择器,插入方式(0: 插入到给定节点之后 1：插入到给定节点之前;2：附加到给定节点的里面;)](可选);
      // HT_insert:['css;div#res',2],
      lazyImgSrc: "imgsrc",
      documentFilter: function(doc, nextLink) {
        // 作用于xhr或iframe加载的下一页
        // 可以是一个函数 接收doc, nextLink 两个参数，也可以是字符串'startFilter'
        const x = doc.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', doc, null, 9, null).singleNodeValue;
        if (x) {
          try {
            new Function("document", "window", "google", x.nodeValue)(doc, unsafeWindow, unsafeWindow.google);
          } catch (e) {}
        }
        // Fix images
        // add horizontal flexity first
        const imgPs = getAllElementsByXpath("//g-scrolling-carousel/div/div/div", doc, doc);
        if (imgPs.snapshotLength > 0) {
          for (let i = 0; i < imgPs.snapshotLength; i++) {
            const d = imgPs.snapshotItem(i);
            d.style.cssText += "display: flex;flex-wrap: nowrap;width: 600px;white-space: nowrap;overflow-x: auto;";
          }
        }

        const hiddenImgs = getAllElementsByXpath("//g-scrolling-carousel/div/div/div/div[not(@data-vis)]//g-img/img", doc, doc);
        if (hiddenImgs.snapshotLength > 0) {
          for (let i = 0; i < hiddenImgs.snapshotLength; i++) {
            const d = hiddenImgs.snapshotItem(i);
            d.setAttribute("src", d.getAttribute("data-src"));
            d.style.opacity = 1;
          }
        }

        const brs = doc.getElementById("brs");
        if (brs) {
          brs.remove();
        }
      },
      // filter: function() {
      // 在添加内容到页面后运行
      //},
      startFilter: function(doc, win) {
        // 只作用一次, 用于打开的页面
        // 函数： 接收doc, win 两个参数
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

        // change id of related search
        const brs = doc.getElementById("brs");
        if (brs) {
          brs.id = "ibrs";
        }
        console.log("%cGoogle    is %s", "font-weight:bold;color:red", emoji("1F4A9"));

        const keyword = getElementByXpath("//input[@title='Search']", doc, doc);
        if (keyword) {
          console.log("%cMicrosoft is %s %csearch with Bing %s", "font-weight:bold;color:00bbee", emoji("1F60E"), "font-weight:bold;color:00bbee", encodeURI("https://www.bing.com/search?q=" + keyword.value));
        } else {
          console.log("%cMicrosoft is %s", "font-weight:bold;color:00bbee", emoji("1F60E"));
        }
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
      startFilter: function(doc, win) {
        // 设置百度搜索类型为 s?wd=
        try {
          win.document.cookie = "ISSW=1";
        } catch (ex) {}
      }
    }
  },
  {
    name: "kongregate",
    url: "^https?://www\\.kongregate\\.com",
    nextLink: "(//li[@class='next_link']/a)[1]",
    autopager: {
      scriptFilter: "renderPosts",
      pageElement: "//table[@class='posts']/tbody",
      filter: function(pageElements) {
        const scripts = getAllElementsByXpath(".//script[contains(text(), 'renderPosts')]", pageElements[0], document);
        if (scripts.snapshotLength > 0) {
          for (let i = 0; i < scripts.snapshotLength; i++) {
            const s = scripts.snapshotItem(i);
            try {
              eval(s.innerText);
            } catch (e) {}
          }
        }
      }
    }
  },
  {
    name: "kongregate_list",
    url: "^https?://www\\.kongregate\\.com",
    nextLink: "(//li[@class='next_link']/a)[1]",
    pageElement: "//div[@id='featurewide']/table/tbody"
  },
  {
    name: "小木虫-帖子",
    url: "^https?://(www\\.)?muchong\\.com/t-.*$",
    nextLink: "auto;",
    pageElement: "//div[@id='maincontent']/table/tbody[@id]",
    autopager: {
      relatedObj: true,
      sepdivDom: function(doc, sepdiv) {
        const td = doc.createElement("td");
        td.appendChild(sepdiv);
        const tr = doc.createElement("tr");
        td.setAttribute("colspan", 2);
        tr.appendChild(td);
        const tbody = doc.createElement("tbody");
        tbody.appendChild(td);
        return tbody;
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
      excludeElement: '//div[@class="article-card J_trigger_ani"]',
      replaceE: '(//ul[@class="pagination"])[1]',
      startFilter: function(doc) {
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
    name: "m-team artist detail",
    url: "^https?://pt\\.m-team\\.cc/artist\\.php?",
    nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
    autopager: {
      pageElement: '//form[@id="form2"]/table',
      relatedObj: true,
      documentFilter: "startFilter",
      startFilter: function(doc) {
        const trs = getAllElementsByXpath("//div[@class='artist']/div[@class='atl']/form/table/tbody/tr/td[@colspan='5']/parent::tr", doc, doc);
        if (trs.snapshotLength > 0) {
          for (var i = 0; i < trs.snapshotLength; i++) {
            var img = trs.snapshotItem(i).getElementsByTagName("img");
            if (img) {
              img = img[0];
              var imgSrc = img.getAttribute("src");
              const newImg = $C("img", {
                src: imgSrc,
                style: "display:block; width:100%; height:auto;"
              });

              const newtd = $C("td", {
                colspan: 5,
                style: "border-bottom:1px dashed black;"
              });

              const newtr = $C("tr", {
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
  },
  {
    name: "m-team adults",
    url: "^https?://pt\\.m-team\\.cc/adult\\.php",
    nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
    autopager: {
      pageElement: '//table[@class="torrents"]',
      startFilter: function(doc) {
        const tds = doc.getElementsByClassName("torrentimg");
        [].forEach.call(tds, function(td) {
          const imgSrc = td.getElementsByTagName("img");
          if (imgSrc) {
            const newImg = $C("img", {
              src: imgSrc[0].getAttribute("src"),
              style: "display:block; width:100%; height:auto;"
            });

            const newtd = $C("td", {
              colspan: 2,
              style: "border-bottom:1px solid black;"
            });

            const newtr = $C("tr", {
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
    name: "游民星空",
    url: /^https?:\/\/www\.gamersky\.com\/\w+\/\d{6}\/.*.shtml/i,
    exampleUrl: "https://www.gamersky.com/ent/201510/671493.shtml | https://www.gamersky.com/handbook/201707/922480.shtml",
    nextLink: function(doc, win, cplink) {
      const node = getElementByXpath('//div[@class="page_css"]//a[(text()="下一页")]', doc, doc);
      if (!node) {
        return null;
      }
      // 请求协议保持一致
      const a = /^(https)?:\/\/.*$/.exec(cplink);
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
    }
    // credit : https://greasyfork.org/en/forum/discussion/42040/x
  },
  {
    name: "ali213 - 攻略",
    url: /^http:\/\/gl\.ali213\.net\/html/,
    exampleUrl: "http://gl.ali213.net/html/2011/25399_2.html",
    nextLink: "id('after_this_page')",
    autopager: {
      useiframe: true,
      pageElement: "//div[@class='glzjshow_con']",
      replaceE: "id('after_this_page')",
      startFilter: function(doc) {
        const comments = getElementByXpath('//div[@class="glzjshow_plun"]', doc, doc);
        if (comments) {
          comments.style.display = "none";
        }
      }
    }
  },
  {
    name: "多玩 - 攻略",
    url: /^https?:\/\/tv\.duowan\.com\/\d+\/\d+\.html/,
    exampleUrl: "http://tv.duowan.com/1801/380717306538.html",
    nextLink: "id('pageNum')//a[text()='下一页']",
    autopager: {
      useiframe: true,
      replaceE: "id('pageNum')",
      pageElement: "//div[@class='box-bd'][last()]",
      startFilter: function(doc) {
        const pager = doc.querySelector("#pageNum");
        if (pager) {
          getElementByXpath("//div[@class='box-bd'][last()]", doc, doc).after(pager);
        }
        //删除侧边栏
        const ad = doc.querySelector(".aside-wrap");
        if (ad) {
          ad.style.display = "none";
        }
      },
      documentFilter: function(doc) {
        const pager = doc.querySelector("#pageNum");
        if (pager) {
          pager.style.display = "none";
        }
      }
    }
  },
  {
    name: "电玩巴士 - 图文",
    url: "^https?://pc\\.tgbus\\.com/.*\\d+/$",
    exampleUrl: "http://pc.tgbus.com/tuwen_180/88983/",
    nextLink: "//div[contains(@class, 'art-page')]/a[text()='下一页']",
    autopager: {
      pageElement: "//div[@class='art-body']",
      documentFilter: function(doc) {
        // 删除导航
        const navigator = doc.querySelector(".art-pagination");
        if (navigator) {
          navigator.parentNode.removeChild(navigator);
        }
        // 隐藏分页
        doc.querySelector(".art-page").style.display = "none";
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
    name: "Jable",
    url: /^https?:\/\/jable\.tv/i,
    nextLink: function(doc, win, cplink) {
      const a = getElementByXpath("//ul[@class='pagination']/li[span[contains(@class,'active')]]/following-sibling::li[1]/a", doc, doc);
      const blockID = a.getAttribute("data-block-id");
      const parms = a
        .getAttribute("data-parameters")
        .replace(/:/g, "=")
        .replace(/;/g, "&");
      const containerID = a.getAttribute("data-container-id");
      const nextLink = cplink + "?mode=async&function=get_block&block_id=" + blockID + "&" + parms + "&_=" + Date.now();
      return nextLink;
    },
    autopager: {
      enable: false,
      useiframe: true,
      pageElement: "//ul[@class='pagination']/preceding-sibling::div/div"
    },
    exampleUrl: "http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html"
  },
  {
    name: "Netflav",
    url: "^https?://netflav\\.com",
    nextLink: {
      startAfter: "?page=",
      mFails: [/^https?:\/\/(?:netflav\.com)\/.+/i, "?page=1"],
      inc: 1,
      isLast: function(doc, win, lhref) {
        const CurrentPage = Number(getElementByXpath("//div[@id='general-pagination']/div/a[@aria-current='true']", doc, doc).innerText);
        const TotalPage = Number(getElementByXpath("(//div[@id='general-pagination']/div/a[@type='nextItem']/preceding-sibling::a)[last()]", doc, doc).innerText);
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
  },
  {
    name: "悠悠美图",
    url: /^https?:\/\/www\.youyourentiyishu\.com/i,
    nextLink: function(doc, win, cplink) {
      const m = cplink.match(/\d+-(\d+)\.html/);
      if (!m) {
        return cplink.replace(".html", "-2.html");
      } else {
        const current = Number(m[1]);
        const next = current + 1;
        const url = cplink.replace(m[1] + ".html", next + ".html");
        const url2 = doc.querySelector("a.next").getAttribute("href");
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
  },
  {
    name: "laomaoit - 老殁软件分享",
    url: "^https?://www\\.(laomoit|mpyit)\\.com",
    exampleUrl: "https://www.laomoit.com",
    nextLink: '//div[@id="pagenavi"]//a[text()="下一页"]',
    autopager: {
      pageElement: 'id("post") | id("content")',
      replaceE: "css;#pagenavi",
      // 删除页面上不需要的元素
      documentFilter: function(doc) {
        const nodeBrowse = doc.querySelector(".browse");
        if (nodeBrowse) {
          nodeBrowse.parentNode.removeChild(nodeBrowse);
        }
        const nodeMap = doc.querySelector("#map");
        if (nodeMap) {
          nodeMap.parentNode.removeChild(nodeMap);
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
      startFilter: function(doc, win) {
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
      startFilter: function(doc) {
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
      },
      sepdivDom: function(doc, sepdiv) {
        sepdiv.className += " bbs_detail_wrap";
        return sepdiv;
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
    url: "^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",
    nextLink: "auto;",
    pageElement: "//div[@id='content']"
  },
  {
    name: "第一版主",
    url: "^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",
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
    name: "rushi.net",
    url: "^https?://www.rushi.net/Home/Works",
    nextLink: "css;.gopage .next-btn",
    // 或者//div[@class='gopage']//a[contains(@class,'next-btn')]
    autopager: {
      pageElement: "css;.work_list_line",
      startFilter: (doc) => {
        const firstDiv = document.querySelector(".hot-company-job");
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      },
      documentFilter: "startFilter"
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
      startFilter: function(doc, win) {
        const firstDiv = doc.querySelector("#ad_text");
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  },
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
//  ///////// ----- End of Rules for specific sites -------///////////

// 统配规则..用来灭掉一些DZ.或者phpwind论坛系统..此组规则..优先级自动降为最低..
const SITEINFO_TP = [
  {
    name: "Discuz 论坛 - 搜索",
    url: "^https?://bbs\\.[a-z]+\\.cn/search\\.php\\?mod=forum",
    preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
    nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
    autopager: {
      pageElement: '//div[@id="threadlist"]',
      replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
    }
  },
  {
    name: "Discuz 论坛 - 导读",
    url: /^https?:\/\/(?:bbs|u)\.[^\/]+\/(?:forum\.php\?mod=guide|home\.php\?mod=space)/i,
    preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
    nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
    autopager: {
      pageElement: "//div[@id='postlist'] | //form[@method='post'][@name] | //div[@id='threadlist']/div[@class='bm_c'] | //div[@class='xld xlda']",
      replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
    }
  },
  {
    name: "Discuz论坛列表",
    url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:forum)|(?:showforum)|(?:viewforum)|(?:forumdisplay))+/i,
    preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
    nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/a[@class="p_curpage"]/following-sibling::a[@class="p_num"]',
    autopager: {
      pageElement: '//form[@method="post"][@name] | //div[@id="postlist"] | //div[@id="threadlist"]',
      replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
      lazyImgSrc: "file|pagespeed_lsc_url"
    }
  },
  {
    name: "Discuz论坛帖子",
    url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:thread)|(?:viewthread)|(?:showtopic)|(?:viewtopic))+/i,
    preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
    nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/descendant::a[text()="??"]',
    autopager: {
      pageElement: '//div[@id="postlist"] | //form[@method="post"][@name]',
      replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
      lazyImgSrc: "zoomfile",
      stylish:
        '.mbbs_code{font-family:Monaco,Consolas,"Lucida Console","Courier New",serif;font-size:12px;line-height:1.8em;list-style-type:decimal-leading-zero;padding-left:10px;background:none repeat scroll 0 0 #f7f7f7;color:#666;border:1px solid #ccc;overflow:hidden;padding:10px 0 5px 10px}',
      filter: function(pages) {
        // 回复后插入到最后一页
        const replays = document.querySelectorAll("#postlistreply");
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
      documentFilter: function(doc) {
        // 卡饭论坛的下一页代码区域可能无法着色，所以手动修改并添加样式
        const pres = doc.querySelectorAll('pre[class^="brush:"]');
        [].forEach.call(pres, function(pre) {
          pre.classList.add("mbbs_code");
        });
      }
    }
  },
  {
    name: "phpWind论坛列表",
    url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?thread/i,
    preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
    nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
    autopager: {
      pageElement: '//div[@class="t z"] | //div[@class="z"] | //div[@id="ajaxtable"]'
    }
  },
  {
    name: "phpWind论坛帖子",
    url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?read/i,
    preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
    nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
    autopager: {
      pageElement: '//div[@class="t5"] | //div[@class="read_t"] | //div[@id="pw_content"]'
    }
  },
  {
    name: "phpBB列表",
    url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewforum/i,
    exampleUrl: "http://www.firefox.net.cn/forum/viewforum.php?f=4",
    nextLink: "auto;",
    autopager: {
      pageElement: '(//div[@id="page-body"]/div[@class="forumbg"]|//table[@class="forumline"]|//table[@class="tablebg"])',
      // replaceE:'//fildset[@class="display-options")]',
      remain: 1 / 3
    }
  },
  {
    name: "phpBB帖子",
    url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewtopic/i,
    exampleUrl: "http://www.firefox.net.cn/forum/viewtopic.php?t=34339",
    nextLink: "auto;",
    autopager: {
      // pageElement:'//div[@id="page-body"]',
      pageElement: '(//div[@id="page-body"]/div[contains(@class,"post")]|//table[@class="forumline"]|//table[@class="tablebg"])'
      // replaceE:"//fildset[@class='display-options']",
    }
  },
  {
    name: "phpBB Search",
    url: /^https?:\/\/forum\.[^\/]+\/search\.php/i,
    exampleUrl: "http://forum.everedit.net/search.php?keywords=%E5%A4%A7%E7%BA%B2",
    nextLink: "auto;",
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
    name: "discuz论坛通用搜索",
    url: "^https?://[^/]+/f/(?:discuz|search)",
    nextLink: "auto;",
    pageElement: 'id("result-items")'
  },
  {
    name: "View forum - 通用",
    url: "^https?://.+?/viewforum\\.php\\?",
    nextLink:
      '//span[@class="gensmall"]/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class="nav"])[last()]/b[last()]/following-sibling::a[1]  | //div[@class="pagination"]/span/strong/following-sibling::a[1] | //a[text()="Next"]',
    pageElement: '//ul[contains(concat(" ",@class," ")," topics ")]|//form[table/@class="forumline"]'
  },
  {
    name: "wiki 通用",
    url: ".\\?(?:.+&)?search=",
    nextLink: '//a[@class="mw-nextlink"]',
    pageElement: '//ul[@class="mw-search-results"]'
  },
  {
    name: "通用 Forum 规则1",
    url: "^https?://.*((showthread\\.php\\?)|(forum|thread))",
    nextLink: '//a[@rel="next"]',
    pageElement: '//div[@id="posts"]|//ol[@id="posts"]/li',
    separatorReal: false
  },
  {
    name: "通用 Forum 规则2 vBulletin threads",
    url: "^https?://[^?#]+?/showthread\\.php\\?",
    nextLink: '//tr[@valign="top"]//div[@class="pagenav"]//a[contains(text(), ">")]',
    pageElement: '(//div[@class="pagenav"])[1]|//div[@id="posts"]/node()',
    separatorReal: false
  },
  {
    name: "通用 Forum 规则3 vBulletin thread_list",
    url: "^https?://.*((forumdisplay\\.php\\?)|forum)",
    nextLink: "auto;",
    pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"]',
    separatorReal: false
  },
  {
    name: "通用 Forum 规则4",
    url: /^https?:\/\/forums\..*\/threads/i,
    nextLink: '(//div[@class="PageNav"])[1]//a[contains(text(),' > ")]",
    pageElement: '//ol[@id="messageList"]/li',
    separatorReal: false
  },
  {
    name: "PHPWind 5.3.0 / 6.0.0 / 6.3.2 / 7.0.0 / 7.5.0 - View Thread",
    url: "^https?://.+/read\\.php\\?.*tid((=[0-9]+.*)|(-[0-9]+.*\\.html?))$",
    nextLink: "auto;",
    pageElement: '//form[@name="delatc"]',
    exampleUrl: "http://www.yydzh.com/read.php?tid=1584013"
  },
  {
    name: "Typecho",
    url: "^https?://",
    nextLink: "//ol[@class='page-navigator']/li[@class='next']/a",
    autopager: {
      pageElement: function(doc, win, _cplink) {
        const gen = getElementByXpath("//head/meta[@name='generator']", doc, doc);
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
  },
  {
    name: "WordPress",
    url: "^https?://[^/]+(/page/\\d+)?",
    nextLink: function(doc, win, _cplink) {
      const cplink = _cplink.replace(/^(.*)(#[^\/]*)?$/, "$1");
      if (cplink.slice(cplink.length - 5, cplink.length) === ".html") {
        return undefined;
      }
      if (cplink.slice(cplink.length - 4, cplink.length) === ".htm") {
        return undefined;
      }
      const a = /^(https?:\/\/.*?)(\/page\/\d+\/?)?$/.exec(cplink);
      if (a[2]) {
        const b = Number(/\/page\/(\d+)/.exec(a[2])[1]) + 1;
        return cplink.replace(/^(https?:\/\/.*?\/page\/)\d+(.*)$/, "$1" + String(b) + "$2");
      } else {
        return cplink.replace(/^(.*?)\/?$/, "$1") + "/page/2";
      }
    },
    autopager: {
      pageElement: function(doc, win, _cplink) {
        const blackList = [/^https?:\/\/bwg\.net\/?$/, /^https?:\/\/sunbox\.cc\/?$/, /^https?:\/\/anime1\.me/, /^https?:\/\/github\.com/];
        for (var i = 0; i < blackList.length; i++) {
          if (blackList[i].test(_cplink)) {
            return null;
          }
        }
        // detect if this is wordpress
        const wpText = ["wp-content", "wp-plugin", "wp-comment"];
        var isWP = false;
        for (i = 0; i < wpText.length; i++) {
          if (doc.documentElement.outerHTML.indexOf(wpText[i]) > -1) {
            isWP = true;
            break;
          }
        }
        if (!isWP) {
          return null;
        }

        // if this is the page of an article, return null
        const submitComment = ["发表评论", "提交评论", "添加留言", "提交留言", "コメントを送信", "SUBMIT COMMENT", "POST COMMENT", "Submit Comment", "Post comment", "Post Comment"];
        for (i = 0; i < submitComment.length; i++) {
          if (getElementByXpath("//input[@value='" + submitComment[i] + "']", doc, doc)) {
            return null;
          }
          if (getElementByXpath("//a[text()='" + submitComment[i] + "']", doc, doc)) {
            return null;
          }
        }

        const postXpath = ["//button[@id='submit']", "//div[@class='single-post-box']", "//div[@class='single_post']"];
        for (i = 0; i < postXpath.length; i++) {
          if (getElementByXpath(postXpath[i], doc, doc)) {
            return null;
          }
        }

        // get from latest post
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
        }
        //https://www.portablesoft.org/
        posts = getAllElements("//div[@id='main']/div[@class='post-entry']", doc, doc, win);
        if (posts.length > 0) {
          return posts;
        }
        posts = getAllElements("//*[contains(@class,'container')]//div[substring(@class,string-length(@class) -string-length('post')+1)='post']", doc, doc, win);
        return posts;
      },
      relatedObj: true
    }
  },
  {
    name: "Generic Posts Rule created by swdyh",
    exampleUrl: "http://wedata.net/items/400.json",
    url: "^https?://.+",
    pageElement:
      "(//article[not(contains(../@class,'widget'))][not(contains(@class,'columns four'))][not(ancestor::*[starts-with(@class,'sidebar')])]|//*[starts-with(@id,'post-')][not(contains(@id,'post-rating'))])[not(.//*[contains(@class,'admz')])][not(id('load-more-posts') or @id='fpost' or contains(@class,'carousel'))][parent::node()[not(self::h2)][not(@id='side')][not(contains(@class,'thumbnail'))][not(following-sibling::*[not(@id='side')][article or *[starts-with(@id,'post-')]])]/*[self::article or starts-with(@id,'post-')]/following-sibling::*[self::article or starts-with(@id,'post-')][not(contains(@id,'nav'))]]|id('content')[count(div)>1]/div[contains(@class,'post')][not(contains(div/@class,'breadcrumb'))][not(contains(div/@class,'nav'))]",
    nextLink:
      "(//*[not(contains(@class,'_inactive'))]/a[starts-with(@class,'nextpostslink') or contains(@class,'next page-numbers') or (.|..)[normalize-space(@rel)='next' or normalize-space(@class)='next' or contains(@class,'pagination-next')]][not(span/@class='link-text')]|//*[contains(@class,'nav-previous')][not(contains(@class,'pull'))]/a|(//*[contains(@class,'current')][number()>0]/following-sibling::a[1]|(//li|//span|//div)[(.//*|.)[contains(@class,'current')]][number()>0]/following-sibling::*[self::li or self::span or self::div][1]/a))[not(starts-with(@href, '#'))]",
    autopager: {
      stylish: '@-moz-document domain("wotopi.jp") { .figure-list{display:flex; flex-wrap:wrap;} }'
    }
  }
];

module.exports = {
  SITEINFO_BUILDIN,
  SITEINFO_TP,
  SITEINFO_comp
  //SITEINFO_json, // todo: appropriate?
  //jsonRule // todo: appropriate? ; not work, get readonly, how to fix?
};
