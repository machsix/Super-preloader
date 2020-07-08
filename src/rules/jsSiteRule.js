//@ts-check
///<reference path="../index.d.ts"/>
import {getAllElementsByXpath, getElementByXpath} from '../utils/domSelector';
import {createDOM} from '../utils/domTools';
import emoji from '../utils/emoji';
/**@type {Array<IRule>} */
export const jsSiteRule = [
  {
    // 站点名字...(可选)             // 站点正则...(~~必须~~)
    name: 'Google搜索',
    url: '^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp|search|#|$|\\?)',
    // url:'wildc;http://www.google.com.hk/search*',
    exampleUrl: 'http://www.google.com', // 站点实例...(可选)
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
      relatedObj: ['css;div#navcnt', 'bottom'], // 以这个元素当做最底的元素,计算页面总高度的计算.(可选)
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
      lazyImgSrc: 'imgsrc',
      documentFilter: function (doc, _nextLink) {
        // 作用于xhr或iframe加载的下一页
        // 可以是一个函数 接收doc, nextLink 两个参数，也可以是字符串'startFilter'
        const x = doc.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', doc, null, 9, null).singleNodeValue;
        if (x) {
          try {
            //@ts-ignore
            new Function('document', 'window', 'google', x.nodeValue)(doc, unsafeWindow, unsafeWindow.google);
          } catch (e) {}
        }
        // Fix images
        // add horizontal flexibly first
        const imgPs = getAllElementsByXpath('//g-scrolling-carousel/div/div/div', doc, doc);
        if (imgPs.length > 0) {
          for (const d of imgPs) {
            d.style.cssText += 'display: flex;flex-wrap: nowrap;width: 600px;white-space: nowrap;overflow-x: auto;';
          }
        }

        // Fix image of Youtube Video
        const hiddenImgs = getAllElementsByXpath('//g-scrolling-carousel/div/div/div/div[not(@data-vis)]//g-img/img', doc, doc);
        if (hiddenImgs.length > 0) {
          for (const d of hiddenImgs) {
            d.setAttribute('src', d.getAttribute('data-src'));
            d.style.opacity = '1';
          }
        }

        // Fix g-img
        const w = getAllElementsByXpath("//script[contains(text(), '_setImagesSrc') and contains(text(), 'data:image')]", doc, doc);
        w.forEach((x) => {
          const script = x.innerHTML.replace(/^\(function\(\){(.*)}\)\(\);?$/, '$1').replace(/_setImagesSrc.*/, '');
          const lzLoad = new Function(script + 'return {ii, s}')();
          lzLoad.ii.forEach((i) => {
            doc.getElementById(i).setAttribute('src', lzLoad.s);
          });
        });

        const brs = doc.getElementById('brs');
        if (brs) {
          brs.remove();
        }
      },
      // filter: function() {
      // 在添加内容到页面后运行
      //},
      startFilter: function (doc, _win) {
        // 只作用一次, 用于打开的页面
        // 函数： 接收doc, win 两个参数
        // 移除 Google 重定向
        const script = doc.createElement('script');
        script.type = 'text/javascript';
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
        const brs = doc.getElementById('brs');
        if (brs) {
          brs.id = 'ibrs';
        }
        console.log('%cGoogle    is %s', 'font-weight:bold;color:red', emoji('1F4A9'));

        const keyword = getElementByXpath("//input[@title='Search']", doc, doc);
        if (keyword) {
          //@ts-ignore
          console.log('%cMicrosoft is %s %csearch with Bing %s', 'font-weight:bold;color:00bbee', emoji('1F451'), 'font-weight:bold;color:00bbee', encodeURI('https://www.bing.com/search?q=' + keyword.value));
        } else {
          console.log('%cMicrosoft is %s', 'font-weight:bold;color:00bbee', emoji('1F451'));
        }
      }
    }
  },
  {
    name: '百度搜索',
    url: '^https?://www\\.baidu\\.com/',
    // 由于 Super_preloader 默认去掉了 # 后面部分
    // url: "^https?://www\\.baidu\\.com/(s|baidu|#wd=)",
    enable: true,
    nextLink: '//div[@id="page"]//a[contains(text(),"下一页")][@href]',
    preLink: '//div[@id="page"]//a[contains(text(),"上一页")][@href]',
    autopager: {
      pageElement: 'css;div#content_left > *',
      HT_insert: ['css;div#content_left', 2],
      replaceE: 'css;#page',
      stylish: '.autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}',
      startFilter: function (_doc, win) {
        // 设置百度搜索类型为 s?wd=
        try {
          win.document.cookie = 'ISSW=1';
        } catch (ex) {}
      }
    }
  },
  {
    name: 'kongregate',
    url: '^https?://www\\.kongregate\\.com',
    nextLink: "(//li[@class='next_link']/a)[1]",
    autopager: {
      scriptFilter: 'renderPosts',
      pageElement: "//table[@class='posts']/tbody",
      filter: function (pageElements) {
        const scripts = getAllElementsByXpath(".//script[contains(text(), 'renderPosts')]", pageElements[0], document);
        if (scripts.length > 0) {
          for (const s of scripts) {
            try {
              new Function(s.innerText)();
            } catch (e) {}
          }
        }
      }
    }
  },
  {
    name: 'kongregate_list',
    url: '^https?://www\\.kongregate\\.com',
    nextLink: "(//li[@class='next_link']/a)[1]",
    pageElement: "//div[@id='featurewide']/table/tbody"
  },
  {
    name: '小木虫-帖子',
    url: '^https?://(www\\.)?muchong\\.com/t-.*$',
    nextLink: 'auto;',
    pageElement: "//div[@id='maincontent']/table/tbody[@id]",
    autopager: {
      relatedObj: true,
      sepdivDom: function (doc, sepdiv) {
        const td = doc.createElement('td');
        td.appendChild(sepdiv);
        const tr = doc.createElement('tr');
        td.setAttribute('colspan', '2');
        tr.appendChild(td);
        const tbody = doc.createElement('tbody');
        tbody.appendChild(td);
        return tbody;
      }
    }
  },
  {
    name: 'gelbooru.com',
    url: 'https?://gelbooru\\.com',
    nextLink: "css;.pagination > a[alt='next']",
    autopager: {
      pageElement: "//div[contains(@class,'thumbnail-preview')]",
      filter: function (pageElements) {
        // 头像载入出错的修正
        [].forEach.call(pageElements, function (div) {
          div.querySelector('a').removeAttribute('target');
        });
      }
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
      excludeElement: '//div[@class="article-card J_trigger_ani"]',
      replaceE: '(//ul[@class="pagination"])[1]',
      startFilter: function (doc) {
        const firstDiv = doc.querySelector('.pagination');
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
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
    name: 'm-team artist detail',
    url: '^https?://pt\\.m-team\\.cc/artist\\.php?',
    nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
    autopager: {
      pageElement: '//form[@id="form2"]/table',
      relatedObj: true,
      documentFilter: 'startFilter',
      startFilter: function (doc) {
        const trs = getAllElementsByXpath("//div[@class='artist']/div[@class='atl']/form/table/tbody/tr/td[@colspan='5']/parent::tr", doc, doc);
        if (trs.length > 0) {
          for (var i = 0; i < trs.length; i++) {
            var imgs = trs[i].getElementsByTagName('img');
            if (imgs) {
              const img = imgs[0];
              const imgSrc = img.getAttribute('src');
              const newtr = createDOM('tr', {
                attr: {
                  align: 'center'
                },
                children: [
                  createDOM('td', {
                    attr: {
                      colspan: 5,
                      style: 'border-bottom:1px dashed black;'
                    },
                    children: [
                      createDOM('img', {
                        attr: {
                          src: imgSrc,
                          style: 'display:block; width:100%; height:auto;'
                        }
                      })
                    ]
                  })
                ]
              });

              trs[i].parentNode.insertBefore(newtr, trs[i]);
            }
          }
        }
      }
    }
  },
  {
    name: 'm-team adults',
    url: '^https?://pt\\.m-team\\.cc/adult\\.php',
    nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
    autopager: {
      pageElement: '//table[@class="torrents"]',
      startFilter: function (doc) {
        const tds = doc.getElementsByClassName('torrentimg');
        [].forEach.call(tds, function (td) {
          const imgSrc = td.getElementsByTagName('img');
          if (imgSrc) {
            const newImg = createDOM('img', {
              attr: {
                src: imgSrc[0].getAttribute('src'),
                style: 'display:block; width:100%; height:auto;'
              }
            });

            const newtd = createDOM('td', {
              attr: {
                colspan: 2,
                style: 'border-bottom:1px solid black;'
              }
            });

            const newtr = createDOM('tr', {
              attr: {
                align: 'center'
              }
            });

            newtd.appendChild(newImg);
            newtr.appendChild(newtd);
            td.parentNode.parentNode.insertBefore(newtr, td.parentNode);
          }
        });
      },
      documentFilter: 'startFilter'
    }
  },
  {
    name: 'idope.se',
    url: /^https?:\/\/idope\.se\/torrent-list\/.+/i,
    exampleUrl: 'https://idope.se/torrent-list/transformer/?p=3',
    preLink: {
      startAfter: '?p=',
      inc: -1,
      min: 1
    },
    nextLink: {
      startAfter: '?p=',
      mFails: [/^https?:\/\/idope\.se\/torrent-list\/.+/i, '/?p=1'],
      inc: 1,
      isLast: function (doc, _win, _lhref) {
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
  {
    name: '天涯论坛帖子',
    url: /^https?:\/\/bbs\.tianya\.cn\/.+\.shtml/i,
    exampleUrl: 'http://bbs.tianya.cn/post-feeling-2792523-1.shtml',
    nextLink: '//div[@class="atl-pages"]/descendant::a[text()="下页"][@href]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="atl-main"]',
      lazyImgSrc: 'original',
      filter: function (_pages) {
        //@ts-ignore
        const see_only_uname = unsafeWindow.see_only_uname;
        //@ts-ignore
        const setOnlyUser = unsafeWindow.setOnlyUser;
        if (see_only_uname) {
          setOnlyUser(see_only_uname);
        }
      }
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
    name: '游民星空',
    url: /^https?:\/\/www\.gamersky\.com\/\w+\/\d{6}\/.*.shtml/i,
    exampleUrl: 'https://www.gamersky.com/ent/201510/671493.shtml | https://www.gamersky.com/handbook/201707/922480.shtml',
    nextLink: function (doc, _win, cplink) {
      const node = getElementByXpath('//div[@class="page_css"]//a[(text()="下一页")]', doc, doc);
      if (!node) {
        return null;
      }
      // 请求协议保持一致
      const a = /^(https)?:\/\/.*$/.exec(cplink);
      if (a) {
        var b = /^https?:\/\/(.*)$/.exec(node.getAttribute('href'));
        return a[1] + '://' + b[1];
      }
      return node.getAttribute('href');
    },
    autopager: {
      relatedObj: true,
      pageElement: '//div[@class="Mid2L_con"]',
      replaceE: '//div[@class="page_css"]'
    }
    // credit : https://greasyfork.org/en/forum/discussion/42040/x
  },
  {
    name: 'ali213 - 攻略',
    url: /^http:\/\/gl\.ali213\.net\/html/,
    exampleUrl: 'http://gl.ali213.net/html/2011/25399_2.html',
    nextLink: "id('after_this_page')",
    autopager: {
      useiframe: true,
      pageElement: "//div[@class='glzjshow_con']",
      replaceE: "id('after_this_page')",
      startFilter: function (doc) {
        const comments = getElementByXpath('//div[@class="glzjshow_plun"]', doc, doc);
        if (comments) {
          comments.style.display = 'none';
        }
      }
    }
  },
  {
    name: '多玩 - 攻略',
    url: /^https?:\/\/tv\.duowan\.com\/\d+\/\d+\.html/,
    exampleUrl: 'http://tv.duowan.com/1801/380717306538.html',
    nextLink: "id('pageNum')//a[text()='下一页']",
    autopager: {
      useiframe: true,
      replaceE: "id('pageNum')",
      pageElement: "//div[@class='box-bd'][last()]",
      startFilter: function (doc) {
        const pager = doc.querySelector('#pageNum');
        if (pager) {
          getElementByXpath("//div[@class='box-bd'][last()]", doc, doc).after(pager);
        }
        //删除侧边栏
        const ad = doc.querySelector('.aside-wrap');
        if (ad) {
          //@ts-ignore
          ad.style.display = 'none';
        }
      },
      documentFilter: function (doc) {
        const pager = doc.querySelector('#pageNum');
        if (pager) {
          //@ts-ignore
          pager.style.display = 'none';
        }
      }
    }
  },
  {
    name: 'yuyouge.com',
    url: '^https?://www\\.yuyouge\\.com',
    nextLink: 'auto;',
    pageElement: "//article/div[@id='h1']|//article/div[@id='txtContent']",
    documentFilter: function documentFilter(doc) {
      const style = document.querySelector('#txtContent').getAttribute('style');
      const cls = document.querySelector('#txtContent').getAttribute('class');
      [].forEach.call(doc.querySelectorAll('#txtContent'), function (div) {
        div.setAttribute('style', style);
        div.setAttribute('class', cls);
      });
    }
  },
  // {
  //   name: "bilibili",
  //   url: "^https?://(search\\.bilibili\\.com|space\\.bilibili\\.com/)",
  //   nextLink: {
  //     startAfter: "&page=",
  //     mFails: ["re;^https?://.*", "&page=1"],
  //     inc: 1
  //   },
  //   autopager: {
  //     enable: false,
  //     remain: 0.001,
  //     useiframe: true,
  //     pageElement: "//li[contains(@class,'video-item')]/parent::*",
  //     mutationObserver: {
  //       relatedObj: "css;.page-wrap",
  //       observers: {
  //         attributes: "css;li.video-item  .lazy-img img" // the node to monitor change of attributes
  //       }
  //     }
  //   }
  // },
  {
    name: '电玩巴士 - 图文',
    url: '^https?://pc\\.tgbus\\.com/.*\\d+/$',
    exampleUrl: 'http://pc.tgbus.com/tuwen_180/88983/',
    nextLink: "//div[contains(@class, 'art-page')]/a[text()='下一页']",
    autopager: {
      pageElement: "//div[@class='art-body']",
      documentFilter: function (doc) {
        // 删除导航
        const navigator = doc.querySelector('.art-pagination');
        if (navigator) {
          navigator.parentNode.removeChild(navigator);
        }
        // 隐藏分页
        //@ts-ignore
        doc.querySelector('.art-page').style.display = 'none';
      }
    }
  },
  {
    name: 'koolshare扩展页面',
    url: '^https?://koolshare\\.cn/home\\.php',
    exampleUrl: 'http://koolshare.cn/home.php',
    nextLink: "//a[contains(text(),'下一页')]",
    pageElement: "id('ct')//tbody",
    autopager: {
      // 只执行一次，删除多余的表头
      documentFilter: function (doc) {
        const firstDiv = doc.querySelector('.th');
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  },
  {
    name: 'Jable',
    url: /^https?:\/\/jable\.tv/i,
    nextLink: function (doc, _win, cplink) {
      const a = getElementByXpath("//ul[@class='pagination']/li[span[contains(@class,'active')]]/following-sibling::li[1]/a", doc, doc);
      const blockID = a.getAttribute('data-block-id');
      const parms = a.getAttribute('data-parameters').replace(/:/g, '=').replace(/;/g, '&');
      // const containerID = a.getAttribute("data-container-id");
      const nextLink = cplink + '?mode=async&function=get_block&block_id=' + blockID + '&' + parms + '&_=' + Date.now();
      return nextLink;
    },
    autopager: {
      enable: false,
      useiframe: true,
      pageElement: "//ul[@class='pagination']/preceding-sibling::div/div"
    },
    exampleUrl: 'http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html'
  },
  {
    name: 'Netflav',
    url: '^https?://netflav\\.com',
    nextLink: {
      startAfter: '?page=',
      mFails: [/^https?:\/\/(?:netflav\.com)\/.+/i, '?page=1'],
      inc: 1,
      isLast: function (doc, _win, _lhref) {
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
    exampleUrl: 'https://netflav.com/chinese-sub?page=1'
  },
  {
    name: '悠悠美图',
    url: /^https?:\/\/www\.youyourentiyishu\.com/i,
    nextLink: function (doc, _win, cplink) {
      const m = cplink.match(/\d+-(\d+)\.html/);
      if (!m) {
        return cplink.replace('.html', '-2.html');
      } else {
        const current = Number(m[1]);
        const next = current + 1;
        const url = cplink.replace(m[1] + '.html', next + '.html');
        const url2 = doc.querySelector('a.next').getAttribute('href');
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
    exampleUrl: 'http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html'
  },
  {
    name: 'laomaoit - 老殁软件分享',
    url: '^https?://www\\.(laomoit|mpyit)\\.com',
    exampleUrl: 'https://www.laomoit.com',
    nextLink: '//div[@id="pagenavi"]//a[text()="下一页"]',
    autopager: {
      pageElement: 'id("post") | id("content")',
      replaceE: 'css;#pagenavi',
      // 删除页面上不需要的元素
      documentFilter: function (doc) {
        const nodeBrowse = doc.querySelector('.browse');
        if (nodeBrowse) {
          nodeBrowse.parentNode.removeChild(nodeBrowse);
        }
        const nodeMap = doc.querySelector('#map');
        if (nodeMap) {
          nodeMap.parentNode.removeChild(nodeMap);
        }
      }
    }
  },
  {
    name: 'CSDN博客',
    url: /^https?:\/\/blog\.csdn\.net/i,
    exampleUrl: 'http://blog.csdn.net/wangjieest?viewmode=list',
    nextLink: function (doc, _win, _cplink) {
      for (var i = 0; i < doc.scripts.length; i++) {
        const scriptText = doc.scripts[i].text;
        if (typeof scriptText != 'undefined' && scriptText.indexOf('currentPage') > 0) {
          const pageMatches = scriptText.match(/currentPage[ ]?=[ ]?(\d+)/);
          if (pageMatches.length != 2) {
            continue;
          }

          const baseUrlMatches = scriptText.match(/baseUrl[ ]?=[ ]?'([^']+)'/);
          if (baseUrlMatches.length != 2) {
            continue;
          }
          return baseUrlMatches[1] + '/' + (parseInt(pageMatches[1]) + 1);
        }
      }
      return null;
    },
    autopager: {
      pageElement: '//div[@id="article_list"] | // div[@class="article-list"]',
      documentFilter: function (doc) {
        // 文档底部的 marginBottom 重置
        const articleList = doc.querySelector('.article-list');
        if (articleList) {
          //@ts-ignore
          articleList.style.marginBottom = '0';
        }
      },
      startFilter: function (doc, _win) {
        // 文档底部的 marginBottom 重置
        const articleList = doc.querySelector('.article-list');
        if (articleList) {
          //@ts-ignore
          articleList.style.marginBottom = '0';
        }
        // 移动分页位置
        const pageBox = document.querySelector('#pageBox');
        if (pageBox) {
          pageBox.parentNode.parentNode.appendChild(pageBox);
        }
        // 删除广告
        const adBox = document.querySelector('.box-box-large');
        if (adBox) {
          adBox.parentNode.removeChild(adBox);
        }
      }
    }
  },
  {
    name: 'CSDN话题',
    url: /^https?:\/\/bbs\.csdn\.net\/topics\//i,
    exampleUrl: 'http://bbs.csdn.net/topics/390244325',
    nextLink: '(//div[@class="page_nav"])[1]/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("bbs_detail_wrap")',
      documentFilter: function (doc) {
        // 删除文档中的多余表头
        const titleH = doc.querySelector('.bbs_title_h');
        if (titleH) {
          titleH.parentNode.removeChild(titleH);
        }

        const titleBar = doc.querySelector('.bbs_title_bar');
        if (titleBar) {
          titleBar.parentNode.removeChild(titleBar);
        }

        const breadWrap = doc.querySelector('.bbs_bread_wrap');
        if (breadWrap) {
          breadWrap.parentNode.removeChild(breadWrap);
        }
        // 尾页的分页信息隐藏
        const pageNav = doc.querySelectorAll('.mod_fun_wrap');
        if (pageNav) {
          let index = 0;
          if (pageNav.length == 2) {
            index = 1;
          }
          //@ts-ignore
          pageNav[index].style.display = 'none';
        }
      },
      startFilter: function (doc) {
        // 尾页的分页信息隐藏
        const pageNav = doc.querySelectorAll('.mod_fun_wrap');
        if (pageNav) {
          let index = 0;
          if (pageNav.length == 2) {
            index = 1;
          }
          //@ts-ignore
          pageNav[index].style.display = 'none';
        }
        // 扩展的其他话题信息移除，长度太长，导致翻页信息有点问题
        const feedBox = doc.querySelector('.post_feed_box');
        if (feedBox) {
          feedBox.parentNode.removeChild(feedBox);
        }
      },
      sepdivDom: function (_doc, sepdiv) {
        sepdiv.className += ' bbs_detail_wrap';
        return sepdiv;
      }
    }
  },
  {
    name: 'bl-novel',
    url: '^https?://bl-novel\\.in/novel',
    nextLink: "//a[@id='pb_next']",
    pageElement: "//div[@id='nr']",
    documentFilter: function (doc, _nextLink) {
      var scripts = doc.getElementsByTagName('script');
      var re = /chapter\s*=\s*secret\(['"](.*)['"],\s*['"](.*)['"],\s*(\w+)\s*\)/g;
      var c;
      [].forEach.call(scripts, function (x) {
        if (x.innerText.indexOf('var chapter') >= 0) {
          var temp = re.exec(x.innerText);
          var content = temp[1];
          var salt = temp[2];
          // function secret is provided by the website
          if (temp[3].indexOf('true') >= 0) {
            //@ts-ignore
            // eslint-disable-next-line no-undef
            c = secret(content, salt, true);
          } else {
            //@ts-ignore
            // eslint-disable-next-line no-undef
            c = secret(content, salt, false);
          }
          doc.getElementById('nr1').innerHTML = c;
        }
      });
    }
  },
  {
    name: '第一版主',
    url: '^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)',
    nextLink: 'auto;',
    pageElement: "//div[@id='content']"
  },
  {
    name: '第一版主',
    url: '^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)',
    pageElement: "//div[@id='content']",
    nextLink: function (doc, _win, cplink) {
      var chapters = getAllElementsByXpath("//div[@class='chapterPages']/a", doc);
      var prefix = cplink.substr(0, cplink.lastIndexOf('/')) + '/';
      var i = 0;
      for (i = 0; i < chapters.length; i++) {
        if (chapters[i].className === 'curr') {
          if (i + 1 < chapters.length) {
            return prefix + chapters[i + 1].getAttribute('href');
          } else {
            return getDomain(cplink) + getElementByXpath("//span[@class='next']/a").getAttribute('href');
          }
        }
      }
    }
  },
  {
    name: '起点文学-排行榜',
    url: /^https?:\/\/www\.(qidian)\.com(\/mm)?\/rank\/.*/i,
    exampleUrl: 'https://www.qidian.com/rank/collect',
    nextLink: function (doc, _win, cplink) {
      var res = getElementByXpath('//div[@id="page-container"]', doc);
      if (res === null) {
        return undefined;
      }

      const next = Number(res.dataset.page) + 1;
      //@ts-ignore
      if (next > res.dataset.pagemax) {
        return undefined;
      } else {
        if (cplink.indexOf('page=') != -1) {
          return cplink.replace(/page=\d+/, 'page=' + next);
        } else if (cplink.indexOf('?') != -1) {
          return cplink + '&page=' + next;
        } else {
          return cplink + '?page=' + next;
        }
      }
    },
    autopager: {
      pageElement: '//div[@class="rank-body"]'
    }
  },
  {
    name: 'rushi.net',
    url: '^https?://www.rushi.net/Home/Works',
    nextLink: 'css;.gopage .next-btn',
    // 或者//div[@class='gopage']//a[contains(@class,'next-btn')]
    autopager: {
      pageElement: 'css;.work_list_line',
      startFilter: (_doc) => {
        const firstDiv = document.querySelector('.hot-company-job');
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      },
      documentFilter: 'startFilter'
    }
  },
  {
    name: '优书-书单|评论',
    url: /^https?:\/\/www\.yousuu\.com\/(comments|booklist)/i,
    nextLink: function (doc, _win, cplink) {
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
          if (res.children[i].className == 'active') {
            // 如果当前页是最后第二项，就不翻页
            if (i == res.childNodes.length - 2) {
              return undefined;
            }
            nextNode = res.childNodes[i + 1];
          }
        }
      }
      //@ts-ignore
      var findout = /jumpurl\('(\w+)','?(\d+)'?\)/.exec(nextNode.innerHTML);
      if (findout === null || findout.length != 3) {
        return undefined;
      }

      var pageInfo = findout[1] + '=' + findout[2];

      if (cplink.indexOf(findout[1] + '=') != -1) {
        return cplink.replace(new RegExp(findout[1] + '=\\d+'), pageInfo);
      } else if (cplink.indexOf('?') != -1) {
        return cplink + '&' + pageInfo;
      } else {
        return cplink + '?' + pageInfo;
      }
    },
    autopager: {
      pageElement: '//table[contains(@class, "shudanlist")] | //ul[contains(@class, "ys-comments")] | //div[@class="ro"]'
    }
  },
  {
    name: '动漫之家漫画网',
    url: /^https?:\/\/(www|manhua)\.(dmzj|178)\.com\/\w+\/\d+\.shtml/,
    exampleUrl: 'https://manhua.dmzj.com/yuanlian/36944.shtml#@page=1',
    nextLink: function (doc, _win, cplink) {
      //@ts-ignore
      const current = Number(getElementByXpath('//*[@id="page_select"]/option[@selected][1]', doc).text.match(/(\d+)/)[1]);
      const xpath_last = '//*[@id="page_select"]/option[last()]';
      //@ts-ignore
      const end_num = Number(getElementByXpath(xpath_last, doc).text.match(/(\d+)/)[1]);
      const next = current + 1;
      if (next > end_num) {
        return undefined;
      } else {
        return cplink.replace(/\.shtml(?:#@page=\d+)?/, '.shtml#@page=' + next);
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
    name: '看漫画',
    url: /^https?:\/\/www\.manhuagui\.com\/comic\/.+/i,
    // this is a set which uses hash to change page
    // we need to manually add hash
    nextLink: function (doc, _win, cplink) {
      const current = Number(getElementByXpath('//*[@id="page"]', doc).innerHTML);
      const xpath_last = '//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]';
      //@ts-ignore
      const end_num = Number(getElementByXpath(xpath_last, doc).text);
      const next = current + 1;
      if (next > end_num) {
        return undefined;
      } else {
        return cplink.replace(/\.html(?:#p=\d+)?/, '.html#p=' + next);
      }
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
    name: 'SF在线漫画',
    url: '^https?://(manhua\\.sfacg\\.com/mh|www\\.acg456\\.com)/.+',
    exampleUrl: 'https://manhua.sfacg.com/mh/YULINGSHI/20087/#p=2',
    preLink: {
      startAfter: '#p=',
      inc: -1,
      min: 1
    },
    nextLink: {
      startAfter: '#p=',
      mFails: [/^https?:\/\/(?:manhua\.sfacg\.com\/mh|www\.acg456\.com)\/.+/i, '#p=1'],
      inc: 1,
      isLast: function (doc, _win, _lhref) {
        const TotalPage = Number(doc.getElementById('TotalPage').innerText) - 1;
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
    exampleUrl: 'http://www.omanhua.com/comic/2957/36463/index.html?p=2',
    nextLink: {
      startAfter: '?p=',
      mFails: [/^http:\/\/www\.omanhua\.com\/comic\/.+/i, '?p=1'],
      inc: 1,
      isLast: function (doc, _win, _lhref) {
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
    exampleUrl: 'http://www.hhmmoo.com/page315224/1.html?s=1； http://www.hhmmoo.com/page315224/4.html?s=1&d=0',
    nextLink: function (_doc, _win, cplink) {
      // created based on http://www.hhmmoo.com/script/view.js
      const m = cplink.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/);
      // const url_head = m[1];
      const current = Number(m[2]);
      var dID = m[4];
      if (!dID) dID = '&d=0';
      const next = current + 1;
      // const xpath = '//div[@class="cH1"]/b[1]';
      var maxpage = document.getElementById('hdPageCount');
      if (maxpage) {
        //@ts-ignore
        maxpage = Number(maxpage.value);
      } else {
        maxpage = document.getElementById('spPageCount');
        if (maxpage) {
          //@ts-ignore
          maxpage = Number(maxpage.innerText);
        } else {
          return undefined;
        }
      }
      //@ts-ignore
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
    name: '99漫画',
    url: /^https?:\/\/(cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(com|cc)/i,
    exampleUrl: 'http://dm.99manga.com/comic/35416/316645/?p=2&s=0',
    nextLink: {
      startAfter: '?p=',
      inc: 1,
      mFails: [/^https?:\/\/(?:cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(?:com|cc)\/.+/i, '?p=1&s=0'],
      isLast: function (doc, _win, _lhref) {
        const maxpage = Number(doc.getElementById('spPageCount').innerText);
        const current = Number(doc.getElementById('spPageIndex').innerText);
        if (current == maxpage) return true;
      }
    },
    autopager: {
      useiframe: true,
      pageElement: '//*[@id="iBody"]'
    }
  },
  {
    name: '天使漫画网,TSDM漫画组',
    url: /^https?:\/\/mh\.tsdm\.net\/comic\/.+/i,
    exampleUrl: 'http://mh.tsdm.net/comic/4697/68059.html',
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
      isLast: function (doc, _win, _lhref) {
        const pageSelect = doc.getElementById('qTcms_select_i');
        if (pageSelect) {
          const s2os = pageSelect.options;
          const s2osl = s2os.length;
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
    exampleUrl: 'http://www.930mh.com/manhua/13355/500671.html?p=2',
    preLink: {
      startAfter: '?p=',
      inc: -1,
      min: 1
    },
    nextLink: {
      startAfter: '?p=',
      mFails: [/^https?:\/\/www\.930mh\.com\/manhua\/.+\.html/i, '?p=1'],
      inc: 1,
      isLast: function (doc, _win, _lhref) {
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
    name: 'sis001.com',
    url: /^https?:\/\/(\w+\.)?sis001\.com\/forum\/(forum|thread)[0-9\-]+\.html/i,
    exampleUrl: 'https://www.sis001.com/forum/forum-230-1.html',
    nextLink: '//div[@class="pages_btns"]//a[@class="next"]',
    autopager: {
      pageElement: '//div[@class="mainbox"]//table[last()]',
      replaceE: '//div[@class="pages_btns"]',
      startFilter: function (doc, _win) {
        const firstDiv = doc.querySelector('#ad_text');
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  },
  {
    name: '腐漫画',
    url: '^https?://www\\.fmhuaaa\\.net/manhua/\\d+/.+',
    enable: true,
    pageElement: '//div[@class="bi"] //a',
    exampleUrl: 'http://www.fmhuaaa.net/manhua/6265/832101.html',
    nextLink: '//div[@class="bp"]/a[text()="下一页"][@href]',
    autopager: {
      startFilter: (d, _win) => {
        //@ts-ignore
        d.getElementById('bigpic').src = d.getElementById('bigpic').src.replace('fmvip.xzglasses.com', 'fmvip.xzglasses.com');
        Array.from(d.querySelectorAll('iframe')).forEach((frame) => frame.remove());
      },
      documentFilter: (d, _nextLink) => {
        var link = d.body.innerHTML.match(/imgurl = '(.+)';/);
        if (link) link = '//fmvip.xzglasses.com' + link[1];
        d.getElementById('bigpic').src = link;
        d.getElementById('bigpic').dataset.link = link;
      }
    }
  },
  {
    name: 'xkcd',
    url: '^https?://(?:www.)?xkcd.com',
    nextLink: function (doc, _win, cplink) {
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
    name: 'javdb.com',
    url: 'https?://javdb.com',
    nextLink: "//li[a[contains(@class,'is-current')]]/following-sibling::li[1]/a",
    pageElement: "//div[@class='grid columns']",
    documentFilter: function (doc, _nextLink) {
      const item = document.querySelector('.grid-item.column:nth-of-type(2)');
      //@ts-ignore
      const width = item.offsetLeft || 168;
      const grid = doc.querySelector('.grid.columns');
      grid.setAttribute('style', `display: grid; grid-template-columns: repeat( auto-fit, ${width}px);justify-content: center;`);
    }
  }
];

function getDomain(cplink) {
  // Get [PROTOCOL]://[DOMAIN]
  var a = getAllIndexes(cplink, '/');
  if (a.length > 2) {
    return cplink.substr(0, a[2]);
  } else {
    return cplink;
  }
}

function getAllIndexes(arr, val) {
  var indexes = [];
  var i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}
