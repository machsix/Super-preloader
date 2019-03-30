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
    name: "百度搜索-手机",
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
    name: "百度搜索 - baidulocal",
    url: "^https?://www\\.baidu\\.com/s.*&tn=baidulocal",
    nextLink: '//a[font[text()="下一页"]]',
    pageElement: '//table[@width="100%" and @border="0"]/tbody/tr/td/ol',
    exampleUrl: "http://www.baidu.com/s?wd=firefox&rsv_spt=1&issp=1&rsv_bp=0&ie=utf-8&tn=baidulocal&inputT=1364"
  },
  {
    name: "360搜索",
    url: "^https?://www\\.so\\.com/s",
    nextLink: '//div[@id="page"]/a[text()="下一页>"] | id("snext")',
    autopager: {
      pageElement: '//div[@id="container"]',
      stylish: ".autopagerize_page_info, div.sp-separator { margin-bottom: 20px !important; }"
    }
  },
  {
    name: "搜狗搜索",
    url: /^https?:\/\/www\.sogou\.com\/(?:web|sogou)/i,
    exampleUrl: "http://www.sogou.com",
    enable: true,
    nextLink: '//div[@id="pagebar_container"]/a[@id="sogou_next"]',
    autopager: {
      pageElement: '//div[@class="results"]',
      replaceE: 'id("pagebar_container")'
    }
  },
  {
    name: "Bing网页搜索",
    url: "^https?://(?:www|cnweb|cn).bing.com/(?:[^/]+/)*?(?:results.aspx|search)",
    exampleUrl: "bing.com/search?q=",
    nextLink: '//a[contains(@class,"sb_pagN")]',
    autopager: {
      pageElement: 'id("b_results")/li[not(contains(@class,"b_pag") or contains(@class,"b_ans b_top"))]',
      //pageElement: 'id("b_results")/li[@class="b_algo"]',
      replaceE: '//nav[@role="navigation"]',
      HT_insert: ['id("b_results")/li[@class="b_pag"]', 1]
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
    name: "AOL 搜索",
    url: /^https?:\/\/(www\.)?aolsearch.com\/search\?q=/i,
    exampleUrl: "https://www.aolsearch.com/search?q=test",
    nextLink: '//div[@class="compPagination"]/a[@class="next"]',
    autopager: {
      pageElement: '//ol[contains(@class,"searchCenterMiddle")]'
    }
  },
  {
    name: "Yahoo.com Search",
    url: "^https?://(.+.)?(news.)?(search|chiebukuro)?.yahoo.co(m|.jp)/(yhs/)?search",
    nextLink: '//div[contains(@class,"Pagination")]/a[contains(@class,"next")]|//a[contains(span[2],">")]|//li[@class="nex"]/a',
    autopager: {
      pageElement: 'id("web resultsWrapper")/ol|//div[@class="searchCenterMiddle"]/div|id("WS2m NSm")/*|//ol[@class="cl"]/*|//div[contains(concat(" ", normalize-space(@class), " "), " cmm ") and @data-pos]',
      stylish: ' @-moz-document domain("yahoo.com") {     img.s-img {         display: inline-block !important;     };     .layoutleft a{padding:0;} ; }'
    },
    created_by: "tokumeisan",
    resource_url: "http://wedata.net/items/62707"
  },
  // ====== 目前 Super_preloaderPlus_one 还有问题的 ========
  {
    name: "水木社区",
    url: "^https?://www\\.newsmth\\.net/nForum",
    nextLink: '//a[@title="下一页"]',
    pageElement: '//div[@class="b-content"] | //div[@class="b-content corner"]',
    exampleUrl: "http://www.newsmth.net/nForum/#!board/TouHou"
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
    name: "百度贴吧帖子",
    url: /^https?:\/\/tieba\.baidu\.com\/p/i,
    exampleUrl: "https://tieba.baidu.com/p/918674650",
    nextLink: '(//ul[@class="l_posts_num"])[2]/li/a[text()="下一页"]',
    preLink: '(//ul[@class="l_posts_num"])[2]/li/a[text()="上一页"]',
    autopager: {
      enable: true,
      pageElement: "id('j_p_postlist')", // "css;.l_post"
      replaceE: "css;.l_posts_num > .l_pager"
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
    name: "百度吧内搜索",
    url: /^https?:\/\/tieba\.baidu\.com\/f\/search/i,
    exampleUrl: "http://tieba.baidu.com/f/search/",
    nextLink: "auto;",
    pageElement: "css;.s_post"
  },
  {
    name: "百度新闻搜索",
    url: "^https?://news\\.baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/ns",
    nextLink: 'id("page")/a[text()="下一页>"]',
    pageElement: 'id("content_left")'
  },
  {
    name: "百度知道",
    url: /^https?:\/\/zhidao\.baidu\.com\/search\?/i,
    exampleUrl: "http://zhidao.baidu.com/search?pn=0&&rn=10&word=%BD%AD%C4%CFstyle",
    nextLink: "auto;",
    pageElement: "css;#wgt-list"
  },
  {
    name: "百度空间",
    url: "^https?://hi\\.baidu\\.com",
    nextLink: 'id("pagerBar")/div/a[@class="next"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="mod-realcontent mod-cs-contentblock"]'
    },
    exampleUrl: "http://hi.baidu.com/gelida"
  },
  {
    name: "百度文库搜索",
    url: /^https?:\/\/wenku\.baidu\.com\/search\?/i,
    exampleUrl: "http://wenku.baidu.com/search?word=firefox&lm=0&od=0&fr=top_home",
    nextLink: '//div[@class="page-content"]/a[@class="next"]',
    autopager: {
      pageElement: '//div[@class="search-result"]/dl'
    }
  },
  {
    name: "smzdm-search",
    url: "^https?://search\\.smzdm\\.com/\\?c=",
    exampleUrl: "http://search.smzdm.com/?c=post&s=%E7%A9%BA%E8%B0%83&v=b",
    // 添加了如下页面的匹配
    // exampleUrl: 'https://search.smzdm.com/?c=youhui&s=%E7%A9%BA%E8%B0%83',
    // exampleUrl: 'https://search.smzdm.com/?c=haitao&s=%E7%A9%BA%E8%B0%83',
    enable: true,
    nextLink: '//a[contains(text(),"下一页")][@href]',
    preLink: '//a[contains(text(),"上一页")][@href]',
    autopager: {
      pageElement: "css;ul#feed-main-list >*",
      replaceE: "css;#J_feed_pagenation"
    }
  },
  {
    name: "smzdm-fenlei",
    url: /^https?:\/\/www\.smzdm\.com\/fenlei\//i,
    exampleUrl: "https://www.smzdm.com/fenlei/shuiguo/",
    nextLink: '//li/a[text()="下一页"]',
    preLink: '//li/a[text()="上一页"]',
    autopager: {
      pageElement: '//li[@class="feed-row-wide"]'
    }
  },
  {
    name: "smzdm-tag",
    url: /^https?:\/\/www\.smzdm\.com\/tag\//i,
    exampleUrl: "https://www.smzdm.com/tag/%E5%8D%8A%E4%BB%B7%E7%89%B9%E6%83%A0/youhui/",
    nextLink: '//li/a[text()="下一页"]',
    preLink: '//li/a[text()="上一页"]',
    autopager: {
      pageElement: '//div[contains(@class,"list list_preferential")]'
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
    name: "smzdm-值友评论",
    url: /^https?:\/\/zhiyou\.smzdm\.com\/member\/\d+\/pinglun/i,
    exampleUrl: "https://zhiyou.smzdm.com/member/1823681945/pinglun/",
    nextLink: '//ul[@class="pagination"]/li[@class="pagedown"]/a',
    autopager: {
      pageElement: '//div[@class="infoPerBlock infoCommentBlock"]',
      replaceE: '(//ul[@class="pagination"])[1]'
    }
  },
  // ================ news、Reading ===========================
  {
    name: "新浪新闻",
    url: /^https?:\/\/[a-z]+\.sina\.com\.cn\//i,
    exampleUrl: "http://news.sina.com.cn/c/sd/2013-11-08/165728658916.shtml",
    nextLink: '//p[@class="page"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="artibody"]',
      relatedObj: true
    }
  },
  {
    name: "搜狐新闻",
    url: /^https?:\/\/news\.sohu\.com\/.*\.shtml/i,
    exampleUrl: "http://news.sohu.com/20120901/n352071543.shtml",
    nextLink: '//a[text()="下一页"]',
    autopager: {
      useiframe: true,
      pageElement: 'id("contentText")'
    }
  },
  {
    name: "新华网新闻页面",
    url: /^https?:\/\/www\.xinhuanet\.com\/(\w+\/)?\d{4}-\d{2}\/\d{2}\/.+\.html?/i,
    exampleUrl: "http://www.xinhuanet.com/2018-04/07/c_1122646152.htm",
    nextLink: "auto;",
    autopager: {
      remain: 2,
      pageElement: '//div[@id="p-detail"]/p'
    }
  },
  {
    name: "中国新闻网",
    url: /^https?:\/\/www\.chinanews\.com\/[a-z]+\/.+\.shtml/i,
    exampleUrl: "http://www.chinanews.com/英文/年/日期/编号.shtml",
    nextLink: '//div[@id="function_code_page"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="left_zw"] | //div[@class="hd_photo"]',
      relatedObj: true,
      HT_insert: ['//div[@id="function_code_page"]', 1],
      filter: '//div[@id="function_code_page"]'
    }
  },
  {
    name: "人民网新闻",
    url: /^https?:\/\/[a-z]+\.people\.com\.cn\/.*\.html/i,
    exampleUrl: "http://cpc.people.com.cn/xuexi/n/2015/0527/c387492-27065648-25.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="text_img"] | //div[@id="p_content"]|//dl[@class="clearfix"]',
      relatedObj: true
    }
  },
  {
    name: "中关村在线新闻页面",
    url: /^https?:\/\/(?:[^\.]+\.)?zol\.com\.cn\/\d+\/\d+/i,
    exampleUrl: "http://lcd.zol.com.cn/187/1875145.html",
    nextLink: '//div[@class="page"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="cotent_idd" or @id="article-content"]',
      relatedObj: true,
      replaceE: "css;.page"
    }
  },
  {
    name: "FT中文网",
    url: /^https?:\/\/www\.ftchinese\.com\/story\//i,
    exampleUrl: "http://www.ftchinese.com/story/001053472",
    nextLink: '//div[@class="pagination"]/a[text()="余下全文"]',
    autopager: {
      pageElement: '//div[@id="bodytext"]',
      relatedObj: true,
      replaceE: '//div[@class="pagination"]'
    }
  },
  {
    name: "Solidot: 奇客的资讯，重要的东西",
    url: /^https?:\/\/www\.solidot\.org\//i,
    exampleUrl: "http://www.solidot.org/?issue=20131205",
    nextLink: 'id("center")/div[@class="page"]/a[last()]',
    autopager: {
      pageElement: 'id("center")/div[@class="block_m"]',
      separatorReal: false
    }
  },
  // Fix till here
  {
    name: "IT 之家",
    url: /^https?:\/\/\w+\.ithome\.com\//i,
    nextLink: 'id("Pager")/div[@class="pagenew"]/a[text()=">"]',
    autopager: {
      pageElement: 'id("wrapper")/div[@class="content fl"]/div[@class="cate_list" or @class="post_list"]/ul[@class="ulcl"]',
      replaceE: 'id("Pager")/div[@class="pagenew"]'
    }
  },
  {
    name: "虎嗅网",
    url: "^https?://www\\.huxiu\\.com/",
    nextLink: '//span[@class="next"]/a[text()=">"]',
    pageElement: '//div[@class="center-ctr-box"]'
  },
  {
    name: "36氪",
    url: "^https?://www\\.36kr\\.com/.+",
    nextLink: '//a[@rel="next"]',
    pageElement: 'id("mainContainer")/descendant::div[contains(concat(" ", @class, ""),"krContent")]'
  },
  {
    name: "爱范儿 · Beats of Bits - 发现创新价值的科技媒体",
    url: "^https?://www\\.ifanr\\.com/",
    nextLink: '//div[@class="content-nav"]/a[text()="下一页"]',
    pageElement: 'id("content")/div[contains(concat(" ", @class, ""), "main")]'
  },
  {
    name: "创业帮",
    url: /^https?:\/\/www\.cyzone\.cn\//i,
    exampleUrl: "http://www.cyzone.cn/",
    nextLink: 'id("pages")/*[@class="current"]/following-sibling::a[1]',
    autopager: {
      pageElement: '//div[@class="left"]/div[starts-with(@class, "intere")]/ul[@class="list clearfix"]'
    }
  },
  {
    name: "萝卜网",
    url: /^https?:\/\/luo\.bo\//i,
    exampleUrl: "http://luo.bo/",
    nextLink: '//div[@class="pagenavi"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="homeposts"]/ul[contains(@class, "explist homelist")] | //div[@class="container"]/div[@class="content"]',
      replaceE: '//div[@class="pagenavi"]'
    }
  },
  {
    name: "爱活网 Evolife.cn_科技进化生活",
    url: /^https?:\/\/[a-z]+\.evolife\.cn\//i,
    exampleUrl: "http://go.evolife.cn/category/focus_121_1.html",
    nextLink: '//div[contains(@class, "pages")]/a[text()="下一页" or contains(text(), ">")]',
    autopager: {
      pageElement: '//div[@class="zuijingengxin"]/div[@class="zuijingengxin_box"] | //div[@class="zuijingengxin"]/div[@class="text"]',
      replaceE: "css;.pages",
      relatedObj: true
    }
  },
  {
    name: "凤凰网 - 凤凰汽车",
    url: /^https?:\/\/auto\.ifeng\.com\/.*\.shtml/i,
    exampleUrl: "http://auto.ifeng.com/youji/20131115/1003513.shtml",
    nextLink: '//div[@class="arl-pages"]/a[@class="next"]',
    autopager: {
      pageElement: '//div[starts-with(@class,"arl-mian")]/div/div[@class="arl-cont"]',
      relatedObj: true,
      replaceE: '//div[@class="arl-pages"]'
    }
  },
  {
    name: "凤凰网 - 新闻、财经",
    url: /^https?:\/\/\w+\.ifeng\.com\//i,
    exampleUrl: "http://finance.ifeng.com/a/20131115/11089994_1.shtml",
    nextLink: '//a[@id="pagenext"] | //div[@class="next" or @class="fy"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="artical_real"] | //div[@class="content"]/div[@class="contentL"] | //div[@class="yib_left"]/div[@class="box_list"]',
      relatedObj: true,
      replaceE: 'id("artical")/div[@class="an"]/div[@class="next"] | //div[@class="yib_left"]/div[@class="fy"]'
    }
  },
  {
    name: "和讯财经微博",
    url: /^https?:\/\/t\.hexun\.com\/.*\.html/i,
    exampleUrl: "http://t.hexun.com/21210301/default.html",
    nextLink: '//li[contains(@class, "nextbtn2")]/a[text()="下一页 >"]',
    autopager: {
      pageElement: '//div[@id="listWeibo"]',
      replaceE: '//div[@id="page2"]'
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
    name: "汽车之家",
    url: /^https?:\/\/www\.autohome\.com\.cn\/.*\.html/i,
    exampleUrl: "http://www.autohome.com.cn/culture/201310/643479-7.html",
    nextLink: 'id("articlewrap")/div[@class="page"]/a[@class="page-item-next"]',
    autopager: {
      pageElement: 'id("articleContent")',
      relatedObj: true,
      replaceE: 'id("articlewrap")/div[@class="page"]'
    }
  },
  {
    name: "汽车之家论坛帖子和列表",
    url: /^https?:\/\/club\.autohome\.com\.cn\/bbs/i,
    exampleUrl: "http://club.autohome.com.cn/bbs/forum-c-2313-1.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//dl[@class="list_dl "][@lang] | //div[@class="conmain"]'
    }
  },
  {
    name: "爱卡汽车",
    url: /^https?:\/\/yp\.xcar\.com\.cn\/.*\.html/i,
    exampleUrl: "http://yp.xcar.com.cn/201311/news_1351064_1.html",
    nextLink: '//div[@class="article_page_bottom"]/a[@class="page_down"]',
    autopager: {
      pageElement: 'id("newsbody")',
      relatedObj: true,
      replaceE: '//div[@class="article_page_bottom"]'
    }
  },
  {
    name: "爱卡汽车论坛帖子",
    url: /^https?:\/\/www\.xcar\.com\.cn\/bbs\/viewthread/i,
    exampleUrl: "http://www.xcar.com.cn/bbs/viewthread.php?tid=12474760",
    nextLink: '//a[text()="下一页＞"][@href]',
    autopager: {
      pageElement: '//form[@id="delpost"] | //div[@class="maintable"][@id="_img"]'
    }
  },
  {
    name: "新闻 - 加拿大华人网",
    url: /^https?:\/\/www\.sinonet\.org\/.*\.html/i,
    exampleUrl: "http://www.sinonet.org/news/society/2013-11-15/301940.html",
    nextLink: '//p[@class="pageLink"]/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("zoom")',
      relatedObj: true
    }
  },
  {
    name: "美国中文网",
    url: /^https?:\/\/news\.sinovision\.net\/.*\.htm/i,
    exampleUrl: "http://news.sinovision.net/politics/201401/00279206.htm",
    nextLink: '//div[@class="pg"]/a[@class="nxt"]',
    autopager: {
      pageElement: '//div[@class="d"]/table[@class="vwtb"]',
      replaceE: '//div[@class="pg"]',
      relatedObj: true
    }
  },
  {
    name: "火星网－中国领先的数字艺术门户",
    url: /^https?:\/\/news\.hxsd\.com\/.*\.html/i,
    exampleUrl: "http://news.hxsd.com/CG-dynamic/201401/684528.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="news_content_left"]/div[@class="content"]'
    }
  },
  {
    name: "铁血网",
    url: /^https?:\/\/bbs\.tiexue\.net\/post.*\.html/i,
    exampleUrl: "http://bbs.tiexue.net/post2_7969883_3.html",
    nextLink: '//div[@class="page"]/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("postContent")/div[@class="newconli2"]',
      relatedObj: true
    }
  },
  {
    name: "看天下",
    url: /^https?:\/\/www\.vistastory\.com\/.*\.html/i,
    exampleUrl: "http://www.vistastory.com/a/201408/5395.html",
    nextLink: '//a[@class="cpnext"]',
    autopager: {
      pageElement: "css;.arc_body"
    }
  },
  {
    name: "参政消息",
    url: "^https?://china\\.cankaoxiaoxi\\.com/.*\\.shtml",
    nextLink: 'id("next_page")',
    pageElement: 'id("ctrlfscont")',
    exampleUrl: "http://china.cankaoxiaoxi.com/roll10/2014/0817/464381.shtml"
  },
  {
    name: "中国网山东频道",
    url: "^https?://sd\\.china\\.com\\.cn/.*\\.html",
    autopager: {
      pageElement: "css;.content",
      relatedObj: true
    }
  },
  {
    name: "凯迪社区",
    url: "^https?://club\\.kdnet\\.net/list\\.asp",
    nextLink: "auto;",
    pageElement: '//div[@class="lf w840px"]/div[@class="list-table"]/table',
    exampleUrl: "http://club.kdnet.net/list.asp?t=0&boardid=1&selTimeLimit=0&action=&topicmode=0&s=&page=1"
  },
  {
    name: "木木文摘",
    url: "^https?://www\\.85nian\\.net/",
    nextLink: "auto;",
    pageElement: "css;.entry-content"
  },

  // --- 国外新闻
  {
    name: "TouringCarTimes",
    url: /^https?:\/\/www\.touringcartimes\.com\/category\//i,
    nextLink: '//li[@class="bpn-next-link"]/a',
    autopager: {
      pageElement: '//div[@id="archive_page_wrapper"]'
    }
  },
  {
    name: "tomshardware",
    url: /^https?:\/\/www\.tomshardware\.com\//i,
    exampleUrl: "http://www.tomshardware.com/reviews/chrome-27-firefox-21-opera-next,3534-2.html",
    nextLink: '//li[@class="item icon active"]/following::a[1]',
    autopager: {
      pageElement: '//article[@id="news-content"]'
    }
  },

  // ========================= video =====================
  {
    name: "优酷视频",
    url: /^https?:\/\/(?:www|u|i|tv)\.youku\.com\//i,
    nextLink: '//a[@title="下一页"] | //li[@class="next"]/a[text()="下一页"] | //a[em/@class="ico_next"] | //a[span/@class="ico__pagenext"]',
    autopager: {
      pageElement: '//div[@id="list" or @id="listofficial"] | id("getVideoList") | id("imgType") | //div[@class="YK_main" or @class="mainCol"]/descendant::div[@class="items"] | div[@class="videos-list"]/div[@class="items"]'
    }
  },
  {
    name: "搜库-专找视频",
    url: /^https?:\/\/(so\.youku|www\.soku)\.com/i,
    nextLink: '//li[@class="next"]/a[@title="下一页"]',
    exampleUrl: "http://www.soku.com/nt/search/q_55?f=1&kb=040200000000000__55",
    autopager: {
      pageElement: '//div[@class="sk-result-list"]|//div[@class="sk_result"]/div[@class="sk-vlist clearfix"]',
      useiframe: true,
      separatorReal: false
    }
  },
  {
    name: "爱奇艺",
    url: /^https?:\/\/(list|so)\.iqiyi\.com\//i,
    exampleUrl: "http://list.iqiyi.com/, http://so.iqiyi.com/so/q_iqi?source=input&sr=70685231574",
    nextLink: '//div[@class="mod-page"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="wrapper-piclist"]/ul/li | //ul[@class="mod_result_list"]'
    }
  },
  {
    name: "搜狐视频 搜索",
    url: /^https?:\/\/so\.tv\.sohu\.com\/mts\?(box=1)?&wd=/i,
    exampleUrl: "http://so.tv.sohu.com/mts?&wd=%u6211%u662F%u7279%u79CD%u5175%u4E4B%u706B%u51E4%u51F0",
    nextLink: '//div[contains(@class, "ssPages")]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[contains(@class,"ssList")]/ul'
    }
  },
  {
    name: "搜狐视频",
    url: /^https?:\/\/so\.tv\.sohu\.com\/list/i,
    exampleUrl: "http://so.tv.sohu.com/list_p1169_p2_u4E16_u754C_u676F_p3_p4_p5_p6_p7_p8_p9_p10_p11.html",
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
    name: "imdb",
    url: /^https?:\/\/www\.imdb\.com\/search/i,
    exampleUrl: "http://www.imdb.com/search/title?count=100&title_type=feature,tv_series&ref_=nv_ch_mm_1",
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
    name: "亚马逊",
    url: /^https?:\/\/www\.amazon\.cn/i,
    nextLink: "auto;",
    autopager: {
      pageElement: '//ul[@id="s-results-list-atf"] | id("btfResults")'
    }
  },
  {
    name: "Amazon.com",
    url: "https?://(w+).amazon.com/.+",
    nextLink: "/html/body/div[2]/div[4]/div[2]/div[5]/div/span/div[1]/ul/li[7]/a",
    exampleUrl: "https://smile.amazon.com/toys/b/ref=sd_allcat_tg?ie=UTF8&node=165793011",
    pageElement: '//*[@id="widgetContent"]'
  },
  {
    name: "易迅网",
    url: /^https?:\/\/searchex\.yixun\.com\//i,
    exampleUrl: "http://searchex.yixun.com/705798t706810-1001-/?YTAG=3.706810246020",
    nextLink: '//div[@class="sort_page_num"]/a[@title="下一页"]',
    autopager: {
      pageElement: '//UL[@id="itemList"]',
      lazyImgSrc: "init_src"
    }
  },
  {
    name: "前程无忧 - 搜索",
    url: /^https?:\/\/search\.51job\.com\/jobsearch\/search_result/i,
    nextLink: '//table[@class="searchPageNav"]//td[@class="currPage"]/following-sibling::td[1]/a',
    autopager: {
      pageElement: 'id("resultList")'
    }
  },
  {
    name: "抢了个便宜 | 高性价比正品低价商品推荐网",
    url: /^https?:\/\/www\.qlgpy\.com\//i,
    nextLink: '//div[@class="wpagenavi"]/a[text()="下页"]',
    autopager: {
      pageElement: 'id("wrapmain")//ul[starts-with(@id, "post-")]'
    }
  },
  {
    name: "秒便宜论坛",
    url: /^https?:\/\/bbs\.miaopy\.com\//i,
    exampleUrl: "http://bbs.miaopy.com/activity/list-3.aspx",
    nextLink: "auto;",
    autopager: {
      pageElement: "css;.forumtopics-list",
      stylish: "div.sp-separator { width: 800px !important;}"
    }
  },
  {
    name: "露天拍賣",
    url: /^https?:\/\/[a-z]+\.ruten\.com\.tw\//i,
    exampleUrl: "http://class.ruten.com.tw/category/sub00.php?c=0019000800010001",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="searchResult"]'
    }
  },
  {
    name: "Yahoo!奇摩拍賣",
    url: /^https:\/\/tw\.bid\.yahoo\.com\//i,
    exampleUrl: "https://tw.bid.yahoo.com/tw/2092076277-category-leaf.html?.r=1408853888",
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("srp_sl_result")'
    }
  },
  // 手机评测等
  {
    name: "杀价帮3C导购网—真实 客观 独立 自由",
    url: /^https?:\/\/www\.shajia\.cn\/article/i,
    exampleUrl: "http://www.shajia.cn/article_list.php",
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("agreement")'
    }
  },
  {
    name: "机锋网",
    url: /^https?:\/\/www\.gfan\.com\/review\/\w+\.html/,
    exampleUrl: "http://www.gfan.com/review/2014091557751.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="news-content"]',
      relatedObj: true
    }
  },

  // ========================= 知识、阅读 ============================
  {
    name: "知乎收藏夹",
    url: /^https?:\/\/www\.zhihu\.com\/collection/i,
    exampleUrl: "https?://www.zhihu.com/collection/19561986",
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("zh-list-collection-wrap")/div[@class="zm-item"]'
    }
  },
  {
    name: "译言网 | 译文库和原文库",
    url: /^https?:\/\/(?:article|source)\.yeeyan\.org\//i,
    nextLink: '//ul[contains(concat(" ",normalize-space(@class)," "), " y_page") ]/li/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[contains(concat(" ",normalize-space(@class)," "), "content_box")] | //div[@class="y_l"]/div[@class="y_s_list"]',
      replaceE: '//ul[contains(concat(" ",normalize-space(@class)," "), " y_page") ]'
    }
  },
  {
    name: "译言精选",
    url: /^https?:\/\/select\.yeeyan\.org\//i,
    nextLink: '//ul[contains(@class, "s_page_n")]/li/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("article_list")',
      replaceE: '//ul[contains(@class, "s_page_n")]'
    }
  },
  {
    name: " 译言小组",
    url: /^https?:\/\/group\.yeeyan\.org\//i,
    nextLink: '//div[@class="paginator"]/a[@class="next"]',
    autopager: {
      pageElement: '//div[contains(@class, "column-main")]/div[contains(@class, "stream")]',
      replaceE: '//div[@class="paginator"]'
    }
  },
  {
    name: "主题站 | 果壳网 ",
    url: "^https?://www\\.guokr\\.com/(?:site|group|ask|event)/",
    nextLink: '//ul[@class="gpages"]/li/a[contains(.,"下一页")]',
    pageElement: '//div[@class="article-list"] | //ul[@class="titles"] | //ul[@class="ask-list"] | //ul[@class="event_list gclear"]'
  },
  {
    name: "大众点评网",
    url: "^https?://www\\.dianping\\.com/.*",
    nextLink: '//a[@class="NextPage"]',
    pageElement: '//div[@id="searchList"] | //div[@class="reviews-items"]'
  },
  {
    name: "家在深圳",
    url: /^https?:\/\/bbs\.szhome\.com\/.*\.html/i,
    exampleUrl: "http://bbs.szhome.com/330010-8-0-0-2.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[contains(@class,"mainList")]'
    }
  },

  // ========================= download ===========================
  {
    name: "VeryCD搜索页面",
    url: /^https?:\/\/www\.verycd\.com\/search\/folders.+/i,
    exampleUrl: "http://www.verycd.com/search/folders/",
    nextLink: '//ul[@class="page"]//a[contains(text(),"下一页")][@href]',
    autopager: {
      pageElement: '//ul[@id="resultsContainer"]',
      replaceE: 'id("page_html")/ul[@class="page"]',
      lazyImgSrc: "_src"
    }
  },
  {
    name: "VeryCD分类资源页",
    url: /^https?:\/\/www\.verycd\.com\/sto\/.+/i,
    exampleUrl: "http://www.verycd.com/sto/music/page1",
    nextLink: '//div[@class="pages-nav"]/a[text()="下一页 ?"]',
    autopager: {
      pageElement: '//div[@id="content"]/ul',
      lazyImgSrc: "load-src",
      replaceE: '//div[@class="pages-nav"]'
    }
  },
  {
    name: "SimpleCD | 让被墙变得简单",
    url: /^https?:\/\/www\.simplecd\.me\//i,
    exampleUrl: "http://www.simplecd.me/search/entry/?query=%E7%81%8C%E7%AF%AE%E9%AB%98%E6%89%8B",
    nextLink: '//td[@class="next"]/a[@class="enabled"]',
    autopager: {
      pageElement: '//div[@class="result-list" or @class="sub-recommend"]/div[@class="content"]'
    }
  },
  {
    name: "电驴站 爱磁力 iCiLi - 电驴下载站",
    url: /^https?:\/\/www\.icili\.com\/emule/i,
    exampleUrl: "http://www.icili.com/emule",
    nextLink: 'id("main")/div[@class="pager"]/descendant::a[text()=" > "]',
    autopager: {
      pageElement: 'id("main")/ul',
      replaceE: 'id("main")/div[@class="pager"]'
    }
  },
  {
    name: "伪射手网",
    url: /^https?:\/\/(?:www\.)?assrt\.net\/sub\/\?searchword/i,
    exampleUrl: "http://assrt.net/sub/?searchword=fight+club",
    preLink: {
      startAfter: "&page=",
      inc: -1,
      min: 1
    },
    nextLink: {
      startAfter: "&page=",
      mFails: [/^https?:\/\/(?:www\.)?assrt\.net\/sub\/\?searchword=[^\/]+/i, "&page=1"],
      // mFails: if we don't get a match of startAfter in url, use the combination of mFails
      inc: 1
    },
    autopager: {
      pageElement: '//div[@id="resultsdiv"]/div[@class="subitem"]'
    }
  },
  {
    name: "多看阅读",
    url: "^https?://www.duokan.com/",
    pageElement: "css;ul.u-list, ul.j-list"
  },
  {
    name: "kindle114",
    url: /^https?:\/\/www\.kindle114\.com\/thread-.*?\.html/i,
    autopager: {
      pageElement: "css;#postlist",
      filter: "css;#sidebar"
    }
  },
  {
    name: "传送门 -- 微信公众账号和文章的导航及推荐",
    url: "^https?://chuansong\\.me/account/",
    nextLink: "auto;",
    pageElement: "css;.pagedlist_item",
    ntimeout: 1 * 1000
  },
  {
    name: "TTmeiju.Com 您的高清美剧片源下载中心",
    url: /^https?:\/\/www\.ttmeiju\.com\//i,
    exampleUrl: "http://www.ttmeiju.com/meiju/Person.of.Interest.html?page=1",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="seedlistdiv" or @class="contentbox"]/table[@class="seedtable"]'
    }
  },
  {
    name: "电影天堂",
    url: /^https?:\/\/www\.dy2018\.com\//i,
    exampleUrl: "http://www.dy2018.com/html/gndy/dyzz/index.html",
    nextLink: '//div[@class="x"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="co_area2"]/div[@class="co_content8"]'
    }
  },
  {
    name: "最新电影 | 龙部落",
    url: /^https?:\/\/www\.longbuluo\.com\//i,
    exampleUrl: "http://www.longbuluo.com/category/movie",
    nextLink: '//div[@class="pagebar"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="postlist"]',
      replaceE: "css;.pagebar"
    }
  },
  {
    name: "高清连续剧 | 一起下载吧",
    url: /^https?:\/\/17down\.net\/category/i,
    exampleUrl: "http://17down.net/category/tv",
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("content")/div[starts-with(@class, "entry_box")]',
      replaceE: '//div[@class="pagination"]'
    }
  },
  {
    name: "Go下载",
    url: /^https?:\/\/goxiazai\.cc\//i,
    exampleUrl: "http://goxiazai.cc/",
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("main")/div[@class="post"]',
      replaceE: 'id("pagenavi")'
    }
  },
  {
    name: "720P电影下载,1080P电影下载,bt蓝光电影下载,BT原盘电影下载：BT之家老牌电影下载网站，百万用户选择了这里",
    url: /^https?:\/\/bbs\.1lou\.com\//i,
    exampleUrl: "http://bbs.1lou.com/forum-index-fid-1183.htm",
    nextLink: '//div[@class="page"]/a[text()="?"]',
    autopager: {
      pageElement: 'id("threadlist") | id("body")/div/table[@class="post_table"]'
    }
  },
  {
    name: "很BT电影联盟",
    url: /^https?:\/\/henbt\.com\//i,
    exampleUrl: "http://henbt.com/",
    nextLink: '//div[@class="pages clear"]/a[@class="nextprev"]',
    autopager: {
      pageElement: 'id("btm")/div[@class="main"]/div[@class="box clear"]',
      separatorReal: false
    }
  },
  // ================== PT ==============================
  {
    name: "光华，cmct，chd，皇后，hd86，khdbits，hdsky，hdvnbits，hd-sportbits，tccf，皇后mv，mt，hd4fans，hdhc，发烧友，tlfbits，joyhd，蚂蚁pt，清影pt，北邮人，u2",
    url: /^https?:\/\/(?:bt\.upc\.edu|hdcmct|chdbits|open|hd86|khdbits|hdsky|hdvnbits|hd-sportbits|et8|mv\.open|tp\.m-team|www\.hd4fans|www\.hdhc|www\.pt|pt\.eastgame|www\.joyhd|ipv6\.antsoul|ipv4\.antsoul|pt\.hit\.edu|bt\.byr|u2\.dmhy)\.(net|cn|org|com|cd|cc|me|cm)\//i,
    exampleUrl: "http://hdcmct.org/torrents.php",
    nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
    autopager: {
      pageElement: '//table[@class="torrents"]'
    }
  },
  {
    name: "葡萄 :: 种子",
    url: /^https:\/\/pt\.sjtu\.edu\.cn\/torrents\.php/i,
    exampleUrl: "https://pt.sjtu.edu.cn/torrents.php",
    nextLink: '//b[contains(text(), "下一页")]/parent::a',
    autopager: {
      pageElement: '//table[@class="torrents"]'
    }
  },
  {
    name: "- hdchina 高清影音人士的分享乐园",
    url: /^https?:\/\/hdchina\.org/i,
    exampleUrl: "http://hdchina.org",
    nextLink: '//b[contains(text(), "下一页")]/parent::a',
    autopager: {
      pageElement: '//table[@class="torrent_list"]'
    }
  },
  {
    name: "TTG",
    url: /^https?:\/\/ttg\.im\/browse\.php/i,
    exampleUrl: "http://ttg.im/browse.php",
    nextLink: '//b[contains(text(), "下页")]/parent::a',
    autopager: {
      pageElement: 'id("torrent_table")'
    }
  },
  {
    name: "https://exoticaz.to/torrents",
    url: "^https?://exoticaz.to/torrents",
    nextLink: '//a[@rel="next"]',
    pageElement: "//table"
  },
  {
    name: "麦田",
    url: /^https?:\/\/pt\.nwsuaf6\.edu\.cn\/torrents\.php/i,
    exampleUrl: "http://hdcmct.org/torrents.php",
    nextLink: '//b[contains(text(), "下一页")]/parent::a[@class="next"]',
    autopager: {
      pageElement: '//table[@class="torrents"]'
    }
  },
  {
    name: "乐乎网-有乐乎！",
    url: "^https?://www\\.ulehu\\.com/",
    nextLink: '//a[@class="a1" and (text()="下一页")]',
    pageElement: '//body/div[@class="container mt20"]/div[@class="content"]/div[@class="colMain"]/div',
    exampleUrl: "http://www.ulehu.com/"
  },
  {
    name: "HDRoad - 资源区",
    url: /^https?:\/\/hdroad\.org\/browse\.php/i,
    exampleUrl: "http://hdroad.org/browse.php",
    nextLink: '//a[contains(text(), "下一页")]',
    autopager: {
      pageElement: '//div[@id="torrent-list"]'
    }
  },
  {
    name: "种子列表-北京交通大学知行PT",
    url: "^https?://pt\\.zhixing\\.bjtu\\.edu\\.cn/search/",
    nextLink: '//a[@class="next"]',
    pageElement: '//table[@class="torrenttable"]',
    exampleUrl: "http://pt.zhixing.bjtu.edu.cn/search/"
  },
  {
    name: "紫荆站 | ZiJingBT v2 | 种子页",
    url: /^https?:\/\/zijingbt\.njuftp\.org\//i,
    exampleUrl: "http://zijingbt.njuftp.org/index.html",
    nextLink: '//a[contains(text(), "下一页")]',
    autopager: {
      pageElement: '//table[@class="torrent_table"]'
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
  // ========================= bbs、blog ======================
  {
    name: "天涯论坛_帖子列表",
    url: "^https?://bbs\\.tianya\\.cn/list",
    nextLink: '//a[text()="下一页"]',
    pageElement: '//div[@class="mt5"]'
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
    name: "mozest社区",
    url: /^https?:\/\/g\.mozest\.com/i,
    nextLink: '//div[@class="pages"]//a[@class="next"]',
    autopager: {
      pageElement: '//div[@id="threadlist"] | //div[@id="postlist"]',
      useiframe: true,
      replaceE: "css;.pages_btns > .pages"
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
    name: "Firefox中文社区 - 帖子",
    url: "^https?://www\\.firefox\\.net\\.cn/read",
    nextLink: '//div[@class="pages"]/a[contains(text(), "下一页")]',
    autopager: {
      pageElement: 'id("J_posts_list")/*',
      useiframe: true,
      newIframe: true
    }
  },
  {
    name: "Mozilla Addons - 用户信息",
    url: /^https:\/\/addons\.mozilla\.org\/zh-CN\/[^\/]+\/user\//i,
    exampleUrl: "https://addons.mozilla.org/zh-CN/firefox/user/Vasiliy_Temnikov/",
    nextLink: '//p[@class="rel"]/a[@class="button next"]',
    autopager: {
      pageElement: 'id("my-addons")',
      relatedObj: true
    }
  },
  {
    name: "Mozilla Addons",
    url: /^https?:\/\/addons\.mozilla\.org\/[^\/]+\/firefox/i,
    exampleUrl: "https://addons.mozilla.org/zh-CN/firefox/",
    nextLink: '//p[@class="rel"]/a[@class="button next"][@href] | //ol[@class="pagination"]/li/a[@rel="next"][@href]',
    autopager: {
      pageElement: '//div[@id="pjax-results" or @class="separated-listing"]/div[@class="items"] | //section[@class="primary"]/div/div[@class="items"] | //ul[@class="personas-grid"] | //div[@id="my-addons"] | //div[@id="reviews"]',
      relatedObj: true,
      replaceE: "css;.paginator"
    }
  },
  {
    name: "搜索 | Mozilla 技术支持",
    url: "^https://support\\.mozilla\\.org/zh-CN/search\\?",
    exampleUrl: "https://support.mozilla.org/zh-CN/search?esab=a&product=firefox&q=%E7%BE%A4%E7%BB%84",
    nextLink: '//a[@class="btn-page btn-page-next" and contains(text(),"下一个")]',
    autopager: {
      pageElement: '//div[@id="search-results"]/div[@class="grid_9"]/div[@class="content-box"]'
    }
  },
  {
    name: "傲游浏览器-插件中心",
    url: "^https?://extension\\.maxthon\\.cn/",
    nextLink: '//div[@class="pages page-right"]/a[text()=">"]',
    pageElement: '//ul[@id="delegate-all"]'
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
    name: "棋友家园",
    url: /^https?:\/\/www\.weiqitv\.com\/home\/forum/i,
    exampleUrl: "http://www.weiqitv.com/home/forum.php?mod=viewthread&tid=1623&extra=&page=1",
    nextLink: '//div[@class="pg"]/a[@class="nxt"]',
    autopager: {
      pageElement: 'id("threadlisttableid") | id("postlist")',
      useiframe: true
    }
  },
  {
    name: "Discuz X2.5修复",
    url: /^https?:\/\/(bbs.gfan|bbs.xda|bbs.weiphone|bbs.feng|www.weiqitv|www.diypda|f.ppxclub|bbs.sd001|bbs.itiankong)\.(com|cn)/i,
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@id="threadlist"] | //div[@id="postlist"]',
      replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
    }
  },
  {
    name: "威锋论坛搜索",
    url: /^https?:\/\/s\.feng\.com\/f\?srchtxt=/i,
    nextLink: '//div[@class="pages"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="searchresult"]',
      replaceE: '//div[@class="pages"]'
    }
  },
  {
    name: "Discuz 页面跳转修复",
    url: /^https?:\/\/(bbs.pcbeta|bbs.besgold|www.pt80)\.(com|net)/i,
    nextLink: '//div[@class="pg"]/descendant::a[@class="nxt"]',
    autopager: {
      pageElement: '//div[@id="postlist"] | //form[@id="moderate"]',
      replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
    }
  },
  {
    name: "vBulletin论坛 加加/看雪/XDA",
    url: /^https?:\/\/(bbs|forum)\.(jjol|pediy|xda-developers)\.(cn|com)\/(forumdisplay|showthread)/i,
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"]'
    }
  },
  {
    name: "xda-developers",
    url: "^https?://forum\\.xda-developers\\.com/",
    nextLink: "//div[@class='pagenav']/a[@rel='next']",
    autopager: {
      pageElement: "//div[@class='thread-listing'] | //div[@id='posts']",
      replaceE: "//div[@class='forum-display-controls']",
      separatorReal: false,
      relatedObj: true
    }
  },
  {
    name: "玩机圈",
    url: /^https?:\/\/www\.wanjiquan\.com\//i,
    exampleUrl: "http://www.wanjiquan.com/forum-169-1.html",
    nextLink: "css;.ma_tiezi_list_page > .next",
    autopager: {
      pageElement: '//form[@id="moderate"] | id("postlist")'
    }
  },
  {
    name: "极限社区",
    url: "^https?://bbs\\.themex\\.net/",
    nextLink: '//a[@rel="next"]',
    pageElement: 'id("threadslist posts")'
  },
  {
    name: "天坛",
    url: /^https?:\/\/bbs\.waptw\.com/i,
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "铁血社区",
    url: /^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i,
    nextLink: '//div[@class="pages"]/span/a[text()=">>"]',
    autopager: {
      pageElement: '//div[@class="posts_list"]'
    }
  },
  {
    name: "铁血网",
    url: /^https?:\/\/[a-z]+\.tiexue\.net/i,
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="fontListBox"]'
    }
  },
  {
    name: "霏凡论坛 - 帖子列表",
    url: /^https?:\/\/bbs\.crsky\.com\/read\.php/i,
    nextLink: '//div[@class="pages"]//a[text()=">"]',
    autopager: {
      // useiframe:true,
      pageElement: '//div[@class="t5 t2"]'
    }
  },
  {
    name: "虎扑篮球论坛",
    url: /^https?:\/\/bbs\.hupu\.com\/.*\.html/i,
    exampleUrl: "https://bbs.hupu.com/22125719.html",
    nextLink: "//a[@class='nextPage']",
    autopager: {
      pageElement: '//div[div[@class="floor-show  "]]',
      //  useiframe:f,
      //  iloaded: true,
      replaceE: "css;.page"
    }
  },
  {
    name: "虎扑篮球论坛",
    url: /^https?:\/\/bbs\.hupu\.com\/\w+/i,
    exampleUrl: "https://bbs.hupu.com/bxj",
    nextLink: "//a[@class='nextPage']",
    autopager: {
      pageElement: '//li[div[@class="titlelink box"]]',
      useiframe: true,
      //  iloaded: true,
      replaceE: "css;.page"
    }
  },
  {
    name: "人大经济论坛",
    url: /^https?:\/\/bbs\.pinggu\.org\/thread/i,
    exampleUrl: "http://bbs.pinggu.org/thread-1562552-3-1.html",
    nextLink: '//div[@id="pgt"]/descendant::a[@class="nxt"]',
    autopager: {
      pageElement: '//div[@class="floor"]'
    }
  },
  {
    name: "九尾网",
    url: /joowii\.com\/arc/i,
    exampleUrl: "http://www.joowii.com/arc/ysyl/ssgx/2012/0905/125571.html",
    nextLink: "auto;",
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="article"]'
    }
  },
  {
    name: "17173.com中国游戏第一门户站",
    url: "^https?://news\\.17173\\.com/content/.*\\.shtml",
    nextLink: '//a[@class="page-next"]',
    pageElement: '//div[@id="matterc"]'
  },
  {
    name: "游侠网",
    url: /^https?:\/\/(?:www|down)\.ali213\.net\//i,
    exampleUrl: "http://www.ali213.net/news/html/2013-12/91377.html",
    nextLink: "auto;",
    // nextLink: '//a[@id="after_this_page"][@href] | //div[@class="p_bar"]/a[text()="下页"] | //div[@class="list_body_page"]/a[@title="下一页"]',
    autopager: {
      pageElement: '//div[@id="Content" or @id="game_content" or @id="rqjxhb"]',
      relatedObj: true,
      lazyImgSrc: "data-original"
    }
  },
  {
    name: "游民星空",
    url: /^https?:\/\/www\.gamersky\.com/i,
    exampleUrl: "http://www.gamersky.com/news/201207/206490.shtml",
    nextLink: "auto;",
    autopager: {
      remain: 1 / 2,
      pageElement: '//div[@class="Mid2L_con"]/*[not(contains(@class, "page_css"))] | //div[span/@id="pe100_page_contentpage"]'
    }
    // credit : https://greasyfork.org/en/forum/discussion/42040/x
  },
  {
    name: "3DMGAME",
    url: "^https://.*.3dmgame.com/*",
    exampleUrl: "https://www.3dmgame.com/news/201312/2310792.html|https://www.3dmgame.com/news/",
    nextLink: '//li[(@class="next")]//a',
    autopager: {
      remain: 1 / 2,
      pageElement: '//div[@class="news_warp_center"] | //ul[@class="list"]'
    }
    // credit : https://greasyfork.org/en/forum/discussion/42040/x
  },
  {
    name: "猴岛论坛",
    url: /^https?:\/\/bbs\.houdao\.com/i,
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="z threadCommon"] | //div[@class="mb10 bodd"]'
    }
  },
  {
    name: "巴哈姆特",
    url: /^https?:\/\/(?:acg|forum|webbbs|mbox)\.gamer\.com\.tw\/(?:B|C|board|index)\.php\?\w+=[^&]+(?:&\w+=[^&]+)*/i,
    nextLink: "auto;",
    autopager: {
      pageElement: "//div[@id='BH-master']/form/div/table//tr[td/@class='b-list__summary']",
      useiframe: true,
      newIframe: true
    }
  },
  {
    name: "178 魔兽世界、178动漫频道",
    url: /^https?:\/\/[a-z]+\.178\.com\/.*\.html/i,
    exampleUrl: "http://wow.178.com/201308/170546277543.html",
    nextLink: 'id("cms_page_next")',
    autopager: {
      pageElement: '//div[@id="text"]',
      replaceE: '//div[@class="page"] | id("m_pbtnbtm")',
      relatedObj: true
    }
  },
  {
    name: "阡陌居",
    url: /^https?:\/\/www\.1000qm\.com\/(?:thread\.php\?fid\-\d+|read\.php\?tid\-\d+)\.html/i,
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="z threadCommon"] | //div[@id="pw_content"][@class="mb10"]'
    }
  },
  {
    name: "煎蛋首页",
    url: /^https?:\/\/jandan\.net\/(?:page)?/i,
    exampleUrl: "http://jandan.net/",
    useiframe: true,
    prevLink: '//a[contains(text(),"上一页")]',
    nextLink: '//a[contains(text(),"下一页")]|//a[contains(text(),"更多文章")]',
    autopager: {
      pageElement: '//div[@class="post f list-post"] | //ol[@class="commentlist"]/li'
    }
  },
  {
    name: "蜂鸟网",
    url: /^https?:\/\/qicai\.fengniao\.com\/\d+\/\d+.html/i,
    exampleUrl: "http://qicai.fengniao.com/370/3705137.html",
    useiframe: true,
    nextLink: "auto;",
    autopager: {
      remain: 1 / 3,
      relatedObj: ["css;div.page_num", "bottom"],
      pageElement: '//div[@class="article"]'
    }
  },
  {
    name: "55188论坛",
    url: /^https?:\/\/www\.55188\.com/i,
    exampleUrl: "http://www.55188.com/forum-8-1.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="mainbox threadlist"] | //div[@class="mainbox viewthread"]'
    }
  },
  {
    name: "pcdvd论坛",
    url: /^https?:\/\/(?:www|forum)\.pcdvd\.com\.tw\/showthread\.php\?/i,
    exampleUrl: "https://www.pcdvd.com.tw/showthread.php?t=1144412",
    nextLink: '(//div[@class="pagenav"]//a[text()="下一頁"])[1]',
    autopager: {
      pageElement: 'id("posts") | id("posts")/following-sibling::div[@align="center"][position() < last()]'
    }
  },
  {
    name: "pcdvd论坛_thread_list",
    url: /^https?:\/\/(?:www|forum)\.pcdvd\.com\.tw\/forumdisplay\.php\?/i,
    exampleUrl: "https://www.pcdvd.com.tw/forumdisplay.php?f=34&page=4&sort=lastpost&order=&pp=18&daysprune=-1",
    nextLink: '//div[@class="pagenav"]//a[text()="下一頁"]',
    autopager: {
      pageElement: '//td[@width="100%"][@valign="top"]/table[@class="tborder"]/tbody/tr[td[@class="alt1Active"]]'
    }
  },
  {
    name: "PCHOME 社区",
    url: /^https?:\/\/club\.pchome\.net/i,
    exampleUrl: "http://club.pchome.net/forum_1_15.html#",
    nextLink: "auto;",
    autopager: {
      pageElement: '//form[@id="mytopics"] | //div[@id="weibo_app"]'
    }
  },
  {
    name: "pconline",
    url: "^https?://[a-z]+\\.pconline\\.com\\.cn/",
    nextLink: '//div[contains(@class, "pconline_page") or contains(@class, "pager")]/a[@class="next"]',
    autopager: {
      pageElement: '//div[@id="article"]//div[@class="content"] | //ul[@id="ulHoverPic"] | //table[@class="posts"] | id("post_list") | id("topicList")',
      relatedObj: true,
      replaceE: "css;.pconline_page"
    },
    exampleUrl: "http://diy.pconline.com.cn/377/3774616.html"
  },
  {
    name: "Chiphell",
    url: /^https?:\/\/www\.chiphell\.com\/(?!forum)/i,
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("ct")/div[@class="mn"]/div[@id="threadlist"] | id("article_content")/../..',
      replaceE: '//div[@class="pg"]'
    }
  },
  {
    name: "糗事百科",
    url: "^https?://www\\.qiushibaike\\.com/",
    nextLink: '//span[contains(text(),"下一页")]//parent::a',
    autopager: {
      useiframe: true,
      pageElement: 'id("content-left")/div[contains(@class,"article")]'
      //  stylish: '.sp-separator { width: 620px !important; }'
    }
  },
  {
    name: "haha.mx",
    url: "^https?://www\\.haha\\.mx/",
    nextLink: "auto;",
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="joke-list"]'
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
    name: "猫扑大杂烩帖子",
    url: /^https?:\/\/dzh\.mop\.com\/topic\/readSub/i,
    nextLink: '//a[contains(text(),"下一页")][@href]',
    autopager: {
      pageElement: '//div[@class="huitie"]'
    }
  },
  {
    name: "猫扑数码、猫扑汽车等",
    url: /^https?:\/\/(?!dzh).*\.mop\.com\/.*\.shtml/i,
    exampleUrl: "http://digi.mop.com/sjsj/140522002176016.shtml",
    nextLink: 'id("nextp") | id("page_use")/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="article"] | //div[@class="content"]/div[@class="inner"]/div[@class="nr_con"]',
      replaceE: '//div[@class="page"]',
      relatedObj: true
    }
  },
  {
    name: "色影无忌帖子",
    url: /^https?:\/\/forum\.xitek\.com\/showthread/i,
    exampleUrl: "http://forum.xitek.com/showthread.php?threadid=571986",
    nextLink: '//font[@size="2"]/font[@class="thtcolor"]/following-sibling::a[@href]',
    autopager: {
      pageElement: "//body/table[position()>2 and position()<(last()-2)]"
    }
  },
  {
    name: "19楼帖子",
    url: /^https?:\/\/www\.19lou\.com/i,
    exampleUrl: "http://www.19lou.com/forum-1502-thread-29762777-1-1.html",
    nextLink: "auto;",
    useiframe: true,
    autopager: {
      useiframe: true,
      pageElement: '//form[@name="postForm"] | //form[@name="manageForm"]'
    }
  },
  {
    name: "blogspot",
    url: "^https?://[^./]+\\.(blogspot|playpcesor)(?:\\.[^./]{2,3}){1,2}/(?!\\d{4}/)",
    exampleUrl: "http://program-think.blogspot.com/  http://www.playpcesor.com/",
    nextLink: '//a[contains(concat(" ", @class, " "), " blog-pager-older-link ")]',
    autopager: {
      pageElement: '//div[contains(concat(" ", @class, " "), " hfeed ") or contains(concat(" ", @class, " "), " blog-posts ")] | id("Blog1")/div[contains(concat(" ", @class, " "), " entry ")]',
      relatedObj: true,
      replaceE: "css;#blog-pager"
    }
  },
  {
    name: "北海365网",
    url: /^https?:\/\/[a-z]+\.beihai365\.com\//i,
    exampleUrl: "http://kj.beihai365.com/",
    nextLink: '//div[@class="pages"]/*[contains(concat(" ",normalize-space(@class)," "), " active ")]/following-sibling::a[1]',
    autopager: {
      pageElement: 'id("threadlist")/tr[@class="tr3"] | id("pw_content")//form[@method="post" and @name="delatc"]',
      replaceE: '//div[@class="pages"]'
    }
  },
  {
    name: "gelbooru, safebooru etc",
    url: "^https?://(?:www\\.)?\\w{3,4}booru\\.(?:com|org)",
    nextLink: 'id("paginator")//b/following-sibling::a[1]',
    pageElement: 'id("post-list")/div[@class="content"]//span[contains(@class,"thumb")]|id("content")/table',
    exampleUrl: "http://gelbooru.com/index.php?page=post&s=list http://safebooru.org/index.php?page=post&s=list&tags=all http://safebooru.org/index.php?page=tags&s=list"
  },
  {
    name: "耳机大家坛 全球最大中文耳机论坛",
    url: /^https?:\/\/www\.erji\.net\//i,
    exampleUrl: "http://www.erji.net/thread.php?fid=138",
    nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)]',
    autopager: {
      pageElement: '//table[@id="ajaxtable"] | //div[@id="main"]/form[@method="post"]',
      replaceE: '//div[@class="pages"]'
    }
  },
  {
    name: "艾泽拉斯国家地理论坛",
    url: /^https?:\/\/(?:bbs\.nga\.cn|nga\.178\.com)\//i,
    exampleUrl: "http://bbs.ngacn.cc/thread.php?fid=390&rand=183",
    nextLink: '//a[@title="下一页"][@href]',
    autopager: {
      pageElement: 'id("topicrows") | id("m_posts_c")',
      useiframe: true,
      separatorReal: false
    }
  },
  {
    name: "Final Fantasy Shrine Forums",
    url: /^https?:\/\/forums\.ffshrine\.org\//i,
    exampleUrl: "http://forums.ffshrine.org/general-discussion/",
    nextLink: '//a[@rel="next"][@href]',
    autopager: {
      pageElement: 'id("thread_inlinemod_form") | id("postlist")'
    }
  },
  {
    name: "天猫魔盒论坛",
    url: "^https?://www\\.znds\\.com/*",
    nextLink: '//a[contains(text(), "下一页")]',
    pageElement: 'id("threadlist")/div[@class="bm_c"]',
    exampleUrl: "http://www.znds.com/bbs-172-3.html"
  },
  {
    name: "Mobile01",
    url: /^https?:\/\/www\.mobile01\.com\/topicdetail\.php.*$/i,
    exampleUrl: "http://www.mobile01.com/topicdetail.php?f=254&t=3966939",
    nextLink: '//a[contains(text(), "下一頁")]',
    autopager: {
      pageElement: 'id("section")/div[@class="main"]/div[@class="forum-content"]'
    }
  },
  {
    name: "昆侖 - 资源/连载",
    url: "^https?://bbs\\.ikunlun\\.net/forum\\.php.*$",
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
      documentFilter: function(doc) {
        const firstDiv = doc.querySelector(".th");
        if (firstDiv) {
          firstDiv.parentNode.removeChild(firstDiv);
        }
      }
    }
  },
  // ========================= picture ================================================
  {
    name: "Flickr photos",
    url: "^https?://www\\.flickr\\.com/photos/[^/]+/favorites(?:[/?#]|$)",
    exampleUrl: "https://www.flickr.com/photos/129049306@N04/favorites/page2",
    nextLink: '//div[contains(@class,"pagination")]/a[@rel="next"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@role="main"]/div[contains(@class,"photo-list")]',
      lazyImgSrc: "data-lazyload-src|data-ks-lazyload",
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
  //         exampleUrl:'https://www.pixiv.net/novel/search.php?s_mode=s_tag&word=%E5%86%86%E7%92%B0',
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
    name: "照片处理网",
    url: /^https?:\/\/www\.photops\.com\/Article\/.+/i,
    exampleUrl: "http://www.photops.com/Article/xsjc/20100728172116.html",
    nextLink: '//a[text()="下一页"][@href]',
    autopager: {
      pageElement: "//body/table[last()-2]",
      useiframe: true
    }
  },
  {
    name: "扑家汉化平台",
    url: /^https?:\/\/www\.pujiahh\.com\/library/i,
    exampleUrl: "http://www.pujiahh.com/library/",
    nextLink: '//div[@class="pagination"]/ul/li[@class="next-posts"]/a',
    autopager: {
      pageElement: '//div[@class="gametable"]/parent::div',
      replaceE: '//div[@class="pagination"]'
    }
  },
  // === art
  {
    name: "deviantART Gallery",
    url: /^https?:\/\/\w+\.deviantart\.com\/gallery\//i,
    exampleUrl: "https://razielmb.deviantart.com/gallery/",
    nextLink: '//li[@class="next"]/a',
    autopager: {
      pageElement: "css;#gmi-ResourceStream",
      relatedObj: true
    }
  },
  // === mm ===
  {
    name: "Beautyleg腿模写真图片网",
    url: /^https?:\/\/www\.beautylegmm\.com\/\w+\/beautyleg-\d+.html/i,
    exampleUrl: "http://www.beautylegmm.com/x/beautyleg-x.html",
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("contents_post")/div[@class="post"]'
    }
  },
  {
    name: "sasaone.com",
    url: /^https?:\/\/(\w*\.)?sasaone\.com\/\w+\/\d+\/\d+(_\d+)?\.html/i,
    nextLink: function(doc, win, cplink) {
      const m = cplink.match(/\d+_(\d+)\.html/);
      if (!m) {
        return cplink.replace(".html", "_2.html");
      } else {
        const current = Number(m[1]);
        const next = current + 1;
        const url = cplink.replace(m[1] + ".html", next + ".html");
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
    name: "sasaone.com",
    url: /^https?:\/\/(\w*\.)?sasaone\.com\/\w+(\/list.*\.html|\/index.*\.html)?/i,
    nextLink: '//a[text()="下一页"]',
    autopager: {
      enable: true,
      pageElement: '//ul[@id="need"]/li'
    }
  },
  {
    name: "24fa",
    url: /^https?:\/\/(\w*\.)?24fa\.top\/.*\.html/,
    nextLink: "auto;",
    autopager: {
      enable: true,
      pageElement: '//div[@id="content"]',
      ipages: [true, 30]
    },
    exampleUrl: "https://www.24fa.top/MeiNv/2017-10/50531p4.html"
  },
  {
    name: "美女86",
    url: "^https?://www\\.17786\\.com\\/\\d+_\\d+\\.html",
    nextLink: '(//div/div/div/a[@class="next-page-a"])[last()]',
    autopager: {
      pageElement: '//div[@class="img_box"]',
      ipages: [true, 30]
    },
    exampleUrl: "http://www.17786.com/8104_2.html"
  },
  {
    name: "宅男女神",
    url: "^https?://www\\.nvshens\\.com\\/.\\/\\d+\\/",
    nextLink: '//div[@id="pages"]/span/following::a[not(@class) and not(@id)]',
    exampleUrl: "http://www.nvshens.com/g/17951/",
    autopager: {
      enable: true,
      pageElement: '//ul[@id="hgallery"]',
      ipages: [true, 30]
    }
  },
  {
    name: "爱套图",
    url: "^https://www\\.aitaotu\\.com/[a-z]+/\\d+(_\\d)*\\.html",
    nextLink: '//a[text()="上一页"]',
    prevLink: '//a[text()="下一页"]',
    autopager: {
      enable: true,
      pageElement: 'id("big-pic")/p/a',
      ipages: [true, 30]
    },
    exampleUrl: "https://www.aitaotu.com/guonei/1081_4.html"
  },
  {
    name: "秀美眉",
    url: "^https?://www\\.(xiumeim|xmeim)\\.com/photos/.*\\.html",
    nextLink: '//a[@id="nextPageHref"]',
    autopager: {
      enable: true,
      pageElement: '//div[@class="gallary_item"]',
      ipages: [true, 30]
    },
    exampleUrl: "http://www.xiumeim.com/photos/YOUMI-189522.html"
  },
  {
    name: "秀美眉2",
    url: /^https?:\/\/www\.(xiumeim|xmeim)\.com(\/albums\/[^\/]+\.html)?/,
    nextLink: '//a[text()="后页>"]',
    autopager: {
      enable: true,
      pageElement: '//div[@class="gallary_wrap"]',
      ipages: [true, 2]
    },
    exampleUrl: "http://www.xiumeim.com/"
  },
  {
    name: "美图录",
    url: "^https?://www\\.meitulu\\.com/item/\\d+(_\\d+)?\\.html",
    nextLink: '//a[text()="下一页"]',
    autopager: {
      ipages: [true, 30],
      pageElement: '//div[@class="content"]/center'
    },
    exampleUrl: "https://www.meitulu.com/item/3225_2.html"
  },
  {
    name: "meituri",
    url: "^https?://www\\.meituri\\.com",
    nextLink: '//a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="content"]',
      ipages: [true, 30]
    },
    exampleUrl: "https://www.meitulu.com/item/3225_2.html"
  },
  {
    name: "mimifuli",
    url: /^https?:\/\/(www\.)?(mimifuli|bbt01|yxpjw|yxpjwnet|tangniaobingyinshi|52zfl)\.(vip|info|club|net|com)/i,
    nextLink: '//li[@class="next-page"]/a | //div[@class="article-paging"]/span/following-sibling::a[1]',
    autopager: {
      enable: true,
      pageElement: '//article[@class="article-content"]|//article[@class="excerpt excerpt-one"]',
      ipages: [true, 30],
      replaceE: "//blockquote"
    },
    exampleUrl: "http://zhaofuli.mobi/luyilu/2016/0224/1990.html"
  },
  {
    name: "192tt-gallery",
    url: /^https?:\/\/www\.192tt\.com\/\w+\/\w+\/[a-zA-Z]+\d+\.html?/i,
    preLink: {
      startAfter: "_",
      inc: -1,
      min: 1
    },
    nextLink: {
      startAfter: "_",
      mFails: [/^https?:\/\/www\.192tt\.com\/\w+\/\w+\/[^\/]+(?=\.html)/, "_1.html"],
      inc: 1
    },
    autopager: {
      enable: true,
      pageElement: '//div[@class="picsbox picsboxcenter"]/center',
      ipages: [true, 30]
    }
  },
  {
    name: "192tt",
    url: /^https?:\/\/www\.192tt\.com/i,
    nextLink: '//div[@class="page"]/a[@class="next"]',
    pageElement: '//ul[@class="clearfix"]',
    exampleUrl: "https://www.192tt.com/gq/"
  },
  {
    name: "17see",
    url: /^https?:\/\/www\.17see\.net/i,
    nextLink: "auto;",
    autopager: {
      enable: true,
      pageElement: '//div[@id="ad_content_main"]/following-sibling::img|//div[@id="ad_content_main"]/following-sibling::p/img|//div[@class="m-list-main"]/ul[not(//div[@id="ad_content_main"]/following-sibling::img)]',
      ipages: [true, 30]
    },
    exampleUrl: "https://www.17see.net/qingchun/5542_44.html"
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
    name: "ppzix",
    url: /^https?:\/\/www\.ppzix\.com/i,
    nextLink: '(//div[@class="neiye_page"]/span|//div[@class="neiye_page"]/strong)/following-sibling::a',
    autopager: {
      pageElement: '//div[@class="nr_cons"]/a|//ul[@class="tpboxul"]/li',
      ipages: [true, 30]
    },
    exampleUrl: "http://www.ppzix.com/tyjr/1915.html"
  },
  {
    name: "sytaotu",
    url: /^https?:\/\/www\.sytaotu\.com/,
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@id="picg"]', // 主体内容 xpath 或 CSS选择器 或函数返回值(~~必须~~)
      ipages: [true, 30] // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.(可选)
    },
    exampleUrl: "http://www.sytaotu.com/seying/meinvmote/20200608/85252.html"
  },
  {
    name: "7160美女图片",
    url: "^https?://www\\.7160\\.com/*/*/",
    nextLink: '//a[text()="下一页"]',
    pageElement: 'id("arc")/div/div/div/a/img',
    exampleUrl: "http://www.7160.com/meinv/11988/"
  },
  {
    name: "七丽丽图库|7lili.com",
    url: "^https?://www\\.7lili\\.com/.+/.+/.+/.+\\.html",
    nextLink: '//a[text()="下一页"]',
    pageElement: "//div/div/div/a/img",
    exampleUrl: "http://www.7lili.com/p/xinggan/201403/30333.html"
  },
  {
    name: "明星网",
    url: /^https?:\/\/www\.mingxing\.com/,
    nextLink: '(//a[@title="下一页"])[last()]',
    pageElement: '//ul[@class="pbl "]',
    exampleUrl: "http://www.mingxing.com/tuku/index.html"
  },
  // === 壁纸、素材、icon
  {
    name: "桌酷壁纸",
    url: /^https?:\/\/www\.zhuoku\.com\/.*\.htm/i,
    exampleUrl: "http://www.zhuoku.com/zhuomianbizhi/computer-kuan/20140107052306.htm",
    nextLink: '//div[@class="turn"]/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("liebiao")'
    }
  },
  {
    name: "统一壁纸站",
    url: "^https?://www\\.3987\\.com/desk/wall/*",
    nextLink: '//a[@hidefocus="true" and @target="_self" and @title="下一页"]',
    pageElement: 'id("Article")/div[@class="big-pic"]',
    exampleUrl: "http://www.3987.com/desk/wall/31420.html"
  },
  {
    name: "素材天下",
    url: /^https?:\/\/www\.sucaitianxia\.com\//i,
    exampleUrl: "http://www.sucaitianxia.com/psd/Index.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="home_19"]/div[@class="left"]/div[@class="mid"]'
    }
  },
  {
    name: "昵图网",
    url: /^https?:\/\/[a-z]+\.nipic\.com\//i,
    exampleUrl: "http://soso.nipic.com/search.aspx?t=tk&q=%B7%E2%C3%E6",
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("bd") | //ul[@class="search-result-box clearfix"] | //center/table[@width="900" and @cellspacing="0" and @cellpadding="0" and @border="0"]',
      lazyImgSrc: "data-original",
      stylish: ".lazy { display: block; }"
    }
  },
  {
    name: "easyicon.net",
    url: "^https?://www\\.easyicon\\.net/iconsearch/",
    nextLink: '//div[@class="pages_all"]/a[text()="下一页>"]',
    pageElement: 'id("result_right_layout")',
    exampleUrl: "http://www.easyicon.net/iconsearch/feed/&color=black"
  },
  {
    name: "iconarchive",
    url: "^https?://www\\.iconarchive\\.com/search\\?q=*",
    nextLink: '//div[@class="pagination"]/a[@class="next"]',
    pageElement: 'id("layout-search-content")',
    exampleUrl: "http://www.iconarchive.com/search?q=pin"
  },
  {
    name: "Find Icons",
    url: "^https?://findicons\\.com/search/",
    nextLink: '//div[@class="pages"]/a[contains(text(), "Next") or contains(text(), "下一页")]',
    pageElement: 'id("search_con")/div[@class="icon_list icon_list_165"]',
    exampleUrl: "http://findicons.com/search/earth"
  },

  // ========================= software ================================
  {
    name: "善用佳软",
    url: /^https?:\/\/xbeta\.info\/page\//i,
    exampleUrl: "http://xbeta.info/page/2",
    nextLink: '//div[@class="wp-pagenavi"]/a[@class="nextpostslink"]',
    autopager: {
      pageElement: 'id("entries-in")/div[@class="post"]',
      replaceE: "css;#entries-in > .wp-pagenavi"
    }
  },
  {
    name: "异次元软件世界",
    url: /^https?:\/\/www\.iplaysoft\.com\//i,
    exampleUrl: "http://www.iplaysoft.com/tag/%E5%90%8C%E6%AD%A5",
    nextLink: '//span[@class="pagenavi_c"]/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("postlist")/div[@class="entry"]',
      replaceE: '//div[@class="pagenavi"]/span[@class="pagenavi_c"]'
    }
  },
  {
    name: "PlayNext - 低调的异次元",
    url: "^https?://www\\.playnext\\.cn/",
    nextLink: '//div[@class="pagenavi"]/a[contains(text(), "下一页")]',
    pageElement: '//div[@id="container"]/div[@class="content"]/div[@class="post-list"]'
  },
  {
    name: "iPc.me - 与你分享互联网的精彩！",
    url: "^https?://www\\.ipc\\.me/",
    nextLink: '//div[@class="pagenavi"]/a[contains(text(), "下一页")]',
    pageElement: 'id("posts-list")'
  },
  {
    name: "独木成林",
    url: "^https?://www\\.guofs\\.com/",
    nextLink: '//a[@class="nextpostslink"]',
    pageElement: 'id("content")',
    exampleUrl: "http://www.guofs.com/"
  },
  {
    name: "软件淘",
    url: "^https?://www\\.65052424\\.com/",
    nextLink: '//a[@class="next"]',
    pageElement: '//div[@id="content"]',
    exampleUrl: "http://www.65052424.com/page/7"
  },
  {
    name: "portableapps",
    url: "^https?://portableapps\\.com/(?:forums|node)/",
    nextLink: '//li[@class="pager-next"]/a',
    pageElement: 'id("forum")/table|id("comments")/*[not(@class="item-list")]'
  },
  {
    name: "PortableAppC - 有中国特色的便携软件",
    url: /^https?:\/\/www\.portableappc\.com\//i,
    exampleUrl: "http://www.portableappc.com/",
    nextLink: '//a[@class="nextpostslink"]',
    autopager: {
      pageElement: 'id("main")/div[@class="box"]',
      replaceE: '//div[@class="wp-pagenavi"]'
    }
  },
  {
    name: "精品绿色便携软件",
    url: "^https?://www\\.portablesoft\\.org/",
    nextLink: '//div[@class="pagination"]/a[text()="下页 ?"]',
    pageElement: 'id("main")/div[@class="post-entry"]'
  },
  {
    name: "zd423",
    url: /^https?:\/\/www\.zdfans\.com\//i,
    exampleUrl: "http://www.zdfans.com/",
    nextLink: '//div[@class="paging"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="wrapper"]/div[@class="content-wrap"]/div[@class="content column2"]/ul[@class="excerpt"]'
    }
  },
  {
    name: "软件阁 - 原创绿色软件更新,精品软件共享",
    url: /^https?:\/\/www\.lite6\.com\//i,
    exampleUrl: "http://www.lite6.com/",
    nextLink: '//li[@class="next"]/a',
    autopager: {
      pageElement: '//div[@class="main"]/div[@class="left"]'
    }
  },
  {
    name: "Yanu | 分享优秀、纯净、绿色、实用的精品软件",
    url: "^https?://www\\.ccav1\\.com/*",
    nextLink: 'id("content-list")/div[@class="pagination"]/a[text()="下页"]',
    pageElement: '//div[@id="content-list"]',
    exampleUrl: "http://www.ccav1.com/"
  },
  {
    name: "绿软家园(绿色下载站)",
    url: /^https?:\/\/www\.downg\.com\/.*\.html/i,
    exampleUrl: "http://www.downg.com/list/r_1_1.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="cp top-list" or @class="cp software-list"]/div[@class="cp-main"]'
    }
  },
  {
    name: "绿色下载吧",
    url: /^https?:\/\/www\.xiazaiba\.com\//,
    exampleUrl: "http://www.xiazaiba.com/newsoft.html",
    nextLink: '//div[@class="page-num" or @class="ylmf-page"]/a[@class="nextprev"]',
    autopager: {
      pageElement: 'id("j_soft_list") | //ul[@class="list-soft list-soft-title j-hover"]'
    }
  },
  {
    name: "下载银行",
    url: /^https?:\/\/www\.downbank\.cn\/.*\.htm/i,
    exampleUrl: "http://www.downbank.cn/soft/html/newlist-1.htm",
    nextLink: '//p[@class="list_page"]/a[text()="下一页"] | id("NextPageText")//a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="topiclistzone"] | id("content")/div[@class="listitem"]/div[@class="cp-main"]'
    }
  },
  {
    name: "小路工作室",
    url: /^https?:\/\/www\.wzlu\.cc\/.*\.html/i,
    exampleUrl: "http://www.wzlu.cc/soft/html/newlist-1.html",
    nextLink: '//p[@class="list_page"]/a[text()="下一页"] | id("NextPageText")//a[text()="下一页"]',
    autopager: {
      pageElement: 'id("topiclistzone") | id("listbox")'
    }
  },
  {
    name: "心海e站",
    url: /^https?:\/\/hrtsea\.com\//i,
    exampleUrl: "http://hrtsea.com/",
    nextLink: 'id("pagenavi")/span[@class="older"]/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("main")'
    }
  },
  {
    name: "天天资源网",
    url: /^https?:\/\/www\.ttrar\.com\//i,
    exampleUrl: "http://www.ttrar.com/",
    nextLink: '//div[@id="page"]/a[text()="..."] | //div[@class="page"]/a[text()="下一页"]',
    autopager: {
      pageElement: '//ul[@class="articlelist-ul"]',
      replaceE: "css;#page, .page"
    }
  },
  {
    name: "重灌狂人",
    url: /^https?:\/\/briian\.com\//i,
    exampleUrl: "http://briian.com/category/android/android-photos-draw",
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("content")'
    }
  },
  {
    name: "天天软件",
    url: /^https?:\/\/www\.tt7z\.com\//i,
    nextLink: "auto;",
    autopager: {
      pageElement: '//ul[@class="articlelist-ul"]',
      replaceE: '//div[@id="left_content_list"]/div[@class="page"]'
    }
  },
  {
    name: "Sublime text - Packages",
    url: "^https://sublime\\.wbond\\.net/browse",
    nextLink: '//nav[@class="pagination"]/a[@class="selected"]/following::a[1]',
    pageElement: '//div[@id="content"]/div[@class="results"]/ul[@class="packages results"]'
  },
  {
    name: "laomaoit - 老殁软件分享",
    url: "^https?://www\\.laomoit\\.com",
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
  // ========================= dev =================================
  {
    name: "User Scripts",
    url: /^https?:\/\/userscripts-mirror\.org/i,
    nextLink: "auto;",
    autopager: {
      pageElement: 'id("review-list") | //tr[starts-with(@id, "scripts-")] | //tr[starts-with(@id, "posts-")]',
      replaceE: '//div[@class="pagination"]'
    }
  },
  {
    name: "UserStyles, GreasyFork",
    url: "^https?://(forum.userstyles|greasyfork).org",
    nextLink: '//a[@rel="next" or div/@id="right-arrow"] | id("PagerMore")/a',
    exampleUrl:
      "https://forum.userstyles.org;https://forum.userstyles.org/discussion/40694/;https://forum.userstyles.org/search?Page=p3&Search=xml;https://greasyfork.org/scripts?page=2;https://greasyfork.org/forum/categories/script-discussions/p2;https://greasyfork.org/forum/dashboard/log/edits;https://greasyfork.org/forum/profile/comments/1/JasonBarnabe",
    pageElement:
      '//div[@class="styles boxes"] | id("browse-script-list")/li | id("Content")//ul[contains(@class,"DataList")]/li | id("Log") | //div[@class="styles"]/div[@class="style_card overrideHref"] | id("search-results")/li | id("main-article")/article'
  },
  {
    name: "博客园",
    url: "^https?://www\\.cnblogs\\.com/.*$",
    nextLink: '//a[(text()="Next >")]',
    pageElement: '//div[@id="post_list"]',
    exampleUrl: "http://www.cnblogs.com/cate/javascript/"
  },
  {
    name: "开源中国",
    url: "^https?://\\w+\\.oschina\\.net/",
    nextLink: '//li[@class="page next"]/a',
    pageElement:
      '//div[@class="code_list"]/ul | //div[@class="ProjectList"]/ul[@class="List"] | id("OSC_Content")/div[@class="SpaceList BlogList"]/ul | \
      id("OSC_Content")/div[@class="QuestionList"]/ul/li[@class="question"]'
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
    name: "CSDN论坛",
    url: /^https?:\/\/bbs\.csdn\.net\/forums\//i,
    exampleUrl: "http://bbs.csdn.net/forums/Qt",
    nextLink: '//div[@class="page_nav"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//table[@class="forums_tab_table"]/tbody/tr',
      replaceE: '//div[@class="page_nav"]'
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
    name: "51CTO",
    url: /^https?:\/\/\w+\.51cto\.com\/\w+\/\d+\/\w+\.htm/i,
    exampleUrl: "http://developer.51cto.com/art/201007/214478.htm",
    nextLink: "auto;",
    autopager: {
      useiframe: false,
      relatedObj: ["css;#content", "bottom"],
      pageElement: "css;#content>p"
    }
  },
  {
    name: "图灵社区 : 图书",
    url: "^https?://www\\.ituring\\.com\\.cn/article/",
    nextLink: "auto;",
    pageElement: '//div[@id="question-header"]/h1 | //div[@class="post-text"]',
    separatorReal: false
  },
  {
    name: "Stack Overflow, Super User, Server Fault, Stack Apps",
    url: "^https?://(?:meta\\.)?(?:s(?:erverfault|tackoverflow|uperuser|tackapps)|\\w+\\.stackexchange|askubuntu)\\.com/",
    nextLink: '//a[@rel="next"]',
    pageElement: 'id("mainbar questions")//div[contains(concat(" ",@class," ")," question-summary ")]|id("answers")/div[@class="pager-answers"][1]/following-sibling::*[./following-sibling::div[@class="pager-answers"]]'
  },
  // ========================= novel =============================
  {
    name: "起点文学",
    url: /^https?:\/\/(www|read)\.(qidian|qdmm|qdwenxue)\.com\/BookReader\/\d+,\d+/i,
    exampleUrl: "http://www.qidian.com/BookReader/1545376,27301383.aspx",
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
    name: "逐浪小说",
    url: /^https?:\/\/book\.zhulang\.com\/.+\.html/i,
    exampleUrl: "http://book.zhulang.com/153319/62230.html",
    nextLink: '//div[@class="readpage_leftnfy"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@class="readpage_leftntxt"]'
    }
  },
  {
    name: "烟雨红尘",
    url: /^https?:\/\/www\.cc222\.com\/chapter\/.+\.html/i,
    exampleUrl: "http://www.cc222.com/chapter/558139.html",
    nextLink: '//div[@id="paging"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="aContainer"]',
      remain: 1 / 5
    }
  },
  {
    name: "17k",
    url: /^https?:\/\/(mm.17k|www.17k)\.com\/chapter\/.+\.html/i,
    exampleUrl: "http://www.17k.com/chapter/143095/3714822.html",
    nextLink: '//div[@class="read_bottom"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@class="readAreaBox"]'
    }
  },
  {
    name: "纵横书库",
    url: /^https?:\/\/book\.zongheng\.com\/chapter\/.+\.html/i,
    exampleUrl: "http://book.zongheng.com/chapter/239553/4380340.html",
    nextLink: '//div[@class="tc quickkey"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@class="readcon"]'
    }
  },
  {
    name: "纵横女生",
    url: /^https?:\/\/www\.mmzh\.com\/chapter\/.+\.html/i,
    exampleUrl: "http://www.mmzh.com/chapter/182074/3287355.html",
    nextLink: '//div[@class="tc key"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@class="book_con"]'
    }
  },
  {
    name: "新小说吧",
    url: /^https?:\/\/book\.xxs8\.com\/.+\.html/i,
    exampleUrl: "http://book.xxs8.com/165779/859903.html",
    nextLink: '//div[@class="page"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="midbody"]',
      maxpage: 10
    }
  },
  {
    name: "书迷楼",
    url: /^https?:\/\/www\.shumilou\.com\/.+\.html/i,
    exampleUrl: "http://www.shumilou.com/tiandilonghun/698520.html",
    nextLink: '//div[@class="content"]/div[@id="content"]/div[@class="title"]/a[text()="下一页(→)"]',
    autopager: {
      pageElement: '//div[@class="content"]/div[@id="content"]'
    }
  },
  {
    name: "玄幻小说网",
    url: /^https?:\/\/www\.xhxsw\.com\/books\/.+\.htm/i,
    exampleUrl: "http://www.xhxsw.com/books/1063/1063066/10579171.htm",
    nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "新浪读书",
    url: /^https?:\/\/vip\.book\.sina\.com\.cn\/book\/.+\.html/i,
    exampleUrl: "http://vip.book.sina.com.cn/book/chapter_212356_210018.html",
    nextLink: '//p[@class="pages"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@class="mainContent"]'
    }
  },
  {
    name: "搜狐原创",
    url: /^https?:\/\/vip\.book\.sohu\.com\/content/i,
    exampleUrl: "http://vip.book.sohu.com/content/124852/3902398/",
    nextLink: '//div[@class="artical_btn"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="bgdiv"]'
    }
  },
  {
    name: "红袖添香",
    url: /^https?:\/\/novel\.hongxiu\.com\/a\/.+\.shtml/i,
    exampleUrl: "http://novel.hongxiu.com/a/303084/3543064.shtml",
    nextLink: '//div[@class="papgbutton"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@class="wrapper_main"]'
    }
  },
  {
    name: "言情小说吧",
    url: /^https?:\/\/www\.xs8\.cn\/book\/.+\.html/i,
    exampleUrl: "http://www.xs8.cn/book/132368/86157.html",
    nextLink: '//div[@class="chapter_Turnpage"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@class="chapter_content"]'
    }
  },
  {
    name: "来书小说网",
    url: /^https?:\/\/www\.laishu\.com\/book\/.+\.shtml/i,
    exampleUrl: "http://www.laishu.com/book/8/8891/5488036.shtml",
    nextLink: "auto;",
    autopager: {
      pageElement: '//table[@class="tabkuan"]'
    }
  },
  {
    name: "小说阅读网",
    url: /^https?:\/\/www\.readnovel\.com\/novel\/.+/i,
    exampleUrl: "http://www.readnovel.com/novel/142947.html",
    nextLink: '//div[@class="bottomTools1"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="newContentBody "]'
    }
  },
  {
    name: "凤鸣轩",
    url: /^https?:\/\/read\.fmx\.cn\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://read.fmx.cn/files/article/html/5/7/0/4/8/5/70485/1339404.html",
    nextLink: '//div[@class="newread_fy"]/descendant::a[text()="下一章>>"]',
    autopager: {
      pageElement: '//div[@class="newbodybox"]'
    }
  },
  {
    name: "红薯网",
    url: /^https?:\/\/www\.hongshu\.com\/content\/.+\.html/i,
    exampleUrl: "http://www.hongshu.com/content/38591/49531-1193339.html",
    nextLink: '//div[@class="ann"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="readtext"]'
    }
  },
  {
    name: "百书斋",
    url: /^https?:\/\/baishuzhai\.com/i,
    exampleUrl: "http://baishuzhai.com/shancunqirenchuan/683763.html",
    nextLink: '//div[@class="page"]/descendant::a[text()="下一章(快捷键:→)"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@id="booktext"]'
    }
  },
  {
    name: "百书库",
    url: /^https?:\/\/baishuku\.com\/html\/.+\.html/i,
    exampleUrl: "http://baishuku.com/html/40/40514/8778339.html",
    nextLink: '//div[@id="footlink"]/a[text()="下一页(快捷键:→)"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "顶点小说",
    url: "^https?://www\\.23us\\.com/html/.+\\.html",
    exampleUrl: "http://www.23us.com/html/26/26627/16952316.html",
    nextLink: ' //dd[@id="footlink"]/descendant::a[text()="下一页"]',
    pageElement: 'id("amain")/dl/dd/h1 | id("contents")'
  },
  {
    name: "快眼文学网",
    url: /^https?:\/\/www\.kywxw\.com\/.+\.html/i,
    exampleUrl: "http://www.kywxw.com/0/12/3792643.html",
    nextLink: '//div[@id="thumb"]/descendant::a[text()="下一章"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "就爱文学",
    url: /^https?:\/\/www\.92wx\.org\/html\/.+\.html/i,
    exampleUrl: "http://www.92wx.org/html/0/807/220709.html",
    nextLink: '//div[@id="page_bar"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="chapter_content"]'
    }
  },
  {
    name: "亲亲小说网",
    url: /^https?:\/\/www\.77shu\.com\/view\/.+\.html/i,
    exampleUrl: "http://www.77shu.com/view/0/20/2062418.html",
    nextLink: "auto;",
    autopager: {
      useiframe: true,
      pageElement: '//div[@id="chapter_content"] | //div[@id="content"]'
    }
  },
  {
    name: "七味书屋",
    url: /^https?:\/\/www\.7wsw\.net\/html\/.+\.html/i,
    exampleUrl: "http://www.7wsw.net/html/shifangtianshi/719412.html",
    nextLink: '//div[@id="chapter_pager"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@class="book_middle_article"]'
    }
  },
  {
    name: "天天中文",
    url: /^https?:\/\/www\.360118\.com\/html\/.+\.html/i,
    exampleUrl: "http://www.360118.com/html/21/21951/5416831.html",
    nextLink: '//div[@id="FootLink"]/descendant::a[text()="下一页（快捷键→）"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "言情后花园",
    url: /^https?:\/\/www\.yqhhy\.org\/novel\/.+\.html/i,
    exampleUrl: "http://www.yqhhy.org/novel/0/761/38769.html",
    nextLink: '//div[@id="link"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "平南文学",
    url: /^https?:\/\/www\.pnxs\.com\/book\/.+\.html/i,
    exampleUrl: "http://www.pnxs.com/book/zhongshengyantaizidan/2164438.html",
    nextLink: '//div[@class="book_middle_text_next"]/descendant::a[text()="下一章"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="book_middle_text"]'
    }
  },
  {
    name: "一流小说",
    url: /^https?:\/\/www\.1lxs\.com\/novel\/.+\.html/i,
    exampleUrl: "http://www.1lxs.com/novel/80341/9055036.html",
    nextLink: '//div[@id="chapter_nav"]/descendant::a[text()="下一章"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "一一小说",
    url: /^https?:\/\/www\.11xs\.com\/.+\.htm/i,
    exampleUrl: "http://www.11xs.com/xs/213/119908.htm",
    nextLink: '//div[@id="LinkMenu"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="Content"]'
    }
  },
  {
    name: "六九中文",
    url: /^https?:\/\/www\.69zw\.com\/xiaoshuo\/.+\.html/i,
    exampleUrl: "http://www.69zw.com/xiaoshuo/21/21943/4461482.html",
    nextLink: '//div[@class="chapter_Turnpage"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@class="novel_content"]'
    }
  },
  {
    name: "华夏书库",
    url: /^https?:\/\/www\.hxsk\.net\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.hxsk.net/files/article/html/67/67509/12704488.html",
    nextLink: '//td[@class="link_14"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//table[@class="border_l_r"]'
    }
  },
  {
    name: "书路/3K",
    url: /^https?:\/\/www\.(shuluxs|kkkxs)\.com\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.shuluxs.com/files/article/html/22/22306/8727879.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "书山路",
    url: /^https?:\/\/www\.shu36\.com\/book\/.+\.html/i,
    exampleUrl: "http://www.shu36.com/book/0/1/3.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "落秋",
    url: /^https?:\/\/www\.luoqiu\.com\/html\/.+\.html/i,
    exampleUrl: "http://www.luoqiu.com/html/18/18505/1385765.html",
    nextLink: '//div[@id="bgdiv"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//table[@class="border_l_r"]'
    }
  },
  {
    name: "君子网",
    url: /^https?:\/\/www\.junziwang\.com\/.+\.html/i,
    exampleUrl: "http://www.junziwang.com/0/155/25137.html",
    nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "哈罗小说网",
    url: /^https?:\/\/www\.hellodba\.net\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.hellodba.net/files/article/html/0/46/21565.html",
    nextLink: '//div[@class="papgbutton"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="htmlContent"]'
    }
  },
  {
    name: "百书楼",
    url: /^https?:\/\/baishulou\.com\/read\/.+\.html/i,
    exampleUrl: "http://baishulou.com/read/10/10647/2536085.html",
    nextLink: '//a[text()="下一页(快捷键:→)"][@href]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "万书楼",
    url: /^https?:\/\/www\.wanshulou\.com\/xiaoshuo\/.+\.shtml/i,
    exampleUrl: "http://www.wanshulou.com/xiaoshuo/29/29091/2062593.shtml",
    nextLink: '//div[@id="LinkMenu"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="BookText"]'
    }
  },
  {
    name: "万卷书屋",
    url: /^https?:\/\/www\.wjsw\.com\/html\/.+\.shtml/i,
    exampleUrl: "http://www.wjsw.com/html/35/35404/2887335.shtml",
    nextLink: '//div[@id="bookreadbottom"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="maincontent"]'
    }
  },
  {
    name: "书书网",
    url: /^https?:\/\/www\.shushuw\.cn\/shu\/.+\.html/i,
    exampleUrl: "http://www.shushuw.cn/shu/28560/4509794.html",
    nextLink: '//div[@align="center"]/a[text()="下页"][@href]',
    autopager: {
      pageElement: '//div[@class="cendiv"]'
    }
  },
  {
    name: "飞卢小说",
    url: /^https?:\/\/b\.faloo\.com\/p\/.+\.html/i,
    exampleUrl: "http://b.faloo.com/p/247559/1.html",
    nextLink: '//div[@id="pager"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="main0"]'
    }
  },
  {
    name: "青帝文学网",
    url: /^https?:\/\/www\.qingdi\.com\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.qingdi.com/files/article/html/0/27/13314.html",
    nextLink: '//div[@class="readerFooterPage"]/descendant::a[text()="下一页"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="readerTitle"]'
    }
  },
  {
    name: "笔下文学",
    url: /^https?:\/\/www\.bxwx\.org\/b\/.+\.html/i,
    exampleUrl: "http://www.bxwx.org/b/56/56907/9020932.html",
    nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页[→]"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "笔趣阁",
    url: /^https?:\/\/www\.biquge\.com\/.+\.html/i,
    exampleUrl: "http://www.biquge.com/0_67/471472.html",
    nextLink: '//div[@class="bottem2"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "小说客栈",
    url: /^https?:\/\/www\.xskz\.com\/xiaoshuo\/.+\.shtml/i,
    exampleUrl: "http://www.xskz.com/xiaoshuo/29/29091/2062593.shtml",
    nextLink: '//div[@id="LinkMenu"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="BookText"]'
    }
  },
  {
    name: "翠微居",
    url: /^https?:\/\/www\.cuiweiju\.com\/html\/.+\.html/i,
    exampleUrl: "http://www.cuiweiju.com/html/124/124362/6468025.html",
    nextLink: '//p[@class="cz_bar"]/descendant::a[text()="下一章 》"]',
    autopager: {
      pageElement: '//div[@class="book_wrap"]'
    }
  },
  {
    name: "在线书吧",
    url: /^https?:\/\/www\.bookba\.net\/Html\/Book\/.+\.html/i,
    exampleUrl: "http://www.bookba.net/Html/Book/15/15995/2030251.html",
    nextLink: '//td[@id="thumb"]/descendant::a[text()="下一章"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "文学迷",
    url: /^https?:\/\/www\.wenxuemi\.net\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.wenxuemi.net/files/article/html/10/10884/4852125.html",
    nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "爱尚文学网",
    url: /^https?:\/\/www\.kenshu\.cc\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.kenshu.cc/files/article/html/5/5379/6389640.html",
    nextLink: '//dd[@id="footlink"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="bdsub"]'
    }
  },
  {
    name: "E品中文网",
    url: /^https?:\/\/www\.epzw\.com\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.epzw.com/files/article/html/50/50244/3271485.html",
    nextLink: '//div[@id="link"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "大家读书院",
    url: /^https?:\/\/www\.dajiadu\.net\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.dajiadu.net/files/article/html/14/14436/3337407.html",
    nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="center"]'
    }
  },
  {
    name: "北京爱书",
    url: /^https?:\/\/www\.bj-ibook\.cn\/book\/.+\.htm/i,
    exampleUrl: "http://www.bj-ibook.cn/book/17/t10409k/12.htm",
    nextLink: '//div[@class="zhtop"]/a[text()="下一页（快捷键→）"][@href]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@id="bmsy_content"]'
    }
  },
  {
    name: "小说570",
    url: /^https?:\/\/www\.xiaoshuo570\.com/i,
    exampleUrl: "http://www.xiaoshuo570.com/11/11844/2678383.html",
    nextLink: '//div[@id="thumb"]/a[text()="下一页"][@href]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="fonts_big"]'
    }
  },
  {
    name: "看书",
    url: /^https?:\/\/www\.kanshu\.com\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.kanshu.com/files/article/html/30997/935806.html",
    nextLink: '//div[@class="yd_linebot"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//table[@class="yd_table"]'
    }
  },
  {
    name: "全本小说网",
    url: /^https?:\/\/www\.quanben\.com\/xiaoshuo\/.+\.html/i,
    exampleUrl: "http://www.quanben.com/xiaoshuo/10/10412/2095098.html",
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "晋江原创",
    url: /^https?:\/\/www\.jjwxc\.net\/onebook\.php\?novelid=/i,
    exampleUrl: "http://www.jjwxc.net/onebook.php?novelid=862877&chapterid=6",
    nextLink: {
      startAfter: "&chapterid=",
      inc: 1
    },
    autopager: {
      pageElement: '//div[@class="noveltext"]'
    }
  },
  {
    name: "奇书屋",
    url: /^https?:\/\/www\.qishuwu\.com\/.+/i,
    exampleUrl: "http://www.qishuwu.com/a_zhijian/314815/",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@id="bgdiv"]'
    }
  },
  {
    name: "lu5小说网",
    url: /^https?:\/\/www\.lu5\.com\/.+\.html/i,
    exampleUrl: "http://www.lu5.com/b/5/5442/9575830.html",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "飞库",
    url: /^https?:\/\/www\.feiku\.com\/\/html\/book\/.+\.shtm/i,
    exampleUrl: "http://www.feiku.com//html/book/130/164016/4891625.shtm",
    nextLink: '//div[@class="prenext"]/descendant::a[text()="下一页→"]',
    autopager: {
      pageElement: '//div[@id="chcontent"]'
    }
  },
  {
    name: "幻侠小说网",
    url: /^https?:\/\/www\.huanxia\.com\/book\w+\.html/i,
    exampleUrl: "http://www.huanxia.com/book548761_6041285.html",
    nextLink: '//a[@href][@id="htmlxiazhang"]',
    autopager: {
      pageElement: '//div[@class="h1title"] | //div[@id="htmlContent"][@class="contentbox"]',
      HT_insert: ['//div[@id="htmlContent"]', 2]
    }
  },
  {
    name: "潇湘书院",
    url: /^https?:\/\/www\.xxsy\.net\/books\/.*\.html/i,
    exampleUrl: "http://www.xxsy.net/books/485034/5259176.html",
    nextLink: '//div[@id="detailsubsbox"]/span/a[@href][@title="阅读下一章节"]',
    autopager: {
      pageElement: '//div[@id="detail_title"] | //div[@id="zjcontentdiv"]',
      HT_insert: ['//div[@id="zjcontentdiv"]', 2]
    }
  },
  {
    name: "书海",
    url: /^https?:\/\/www\.shuhai\.com\/read\/.+\.html/i,
    exampleUrl: "http://www.shuhai.com/read/4014/371553.html",
    nextLink: '//div[@class="page_operate font_blue"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="txt"]'
    }
  },
  {
    name: "yi-see",
    url: /^https?:\/\/www\.yi-see\.com/i,
    exampleUrl: "http://www.yi-see.com/read_266768_15501.html",
    nextLink: '//div[@class="B2"]/descendant::a[text()="下一节"]',
    autopager: {
      pageElement: '//table[@width="900px"][@align="CENTER"]'
    }
  },
  {
    name: "天下书盟",
    url: /^https?:\/\/www\.fbook\.net\/book\/.+\.htm/i,
    exampleUrl: "http://www.fbook.net/book/35793/2656834.htm",
    nextLink: '//div[@id="pages"]/descendant::a[text()="下一章"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@id="bookbody"]'
    }
  },
  {
    name: "涂鸦小说网",
    url: /^https?:\/\/www\.tooya\.net\/.+\.html/i,
    exampleUrl: "http://www.tooya.net/tooya/2/2094/820902.html",
    nextLink: '//div[@class="novel_bottom"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "百晓生/谷粒",
    url: /^https?:\/\/www\.(bxs|guli)\.cc\/.+/i,
    exampleUrl: "http://www.bxs.cc/26758/7708992.html",
    enable: true,
    nextLink: '//div[@id="papgbutton"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="main"]/h1 | //div[@id="readbox"]/div[@id="content"] | //div[@id="readbox"]/div[@id="papgbutton"]',
      HT_insert: ['//div[@id="weekhot"]', 1]
    }
  },
  {
    name: "熬夜看书",
    url: /^https?:\/\/www\.aoye\.cc\/.+\.html/i,
    exampleUrl: "http://www.aoye.cc/843/5.html",
    nextLink: '//div[@id="pagebottom"]/descendant::a[@id="nextpage"]',
    autopager: {
      pageElement: '//pre[@id="content"]'
    }
  },
  {
    name: "塔读文学",
    url: /^https?:\/\/www\.tadu\.com\/book\/\d+\/\d+/i,
    exampleUrl: "http://www.tadu.com/book",
    nextLink: '//div[@class="container_center"]/div[@class="left"]/div[@class="jump"]/a[@href][text()="下一章>>"]',
    autopager: {
      useiframe: true,
      pageElement: '//div[@class="container_center"]/div[@class="left"]/div[@class="content"][@id="partContent"]'
    }
  },
  {
    name: "无错小说网",
    url: /^https?:\/\/www\.wcxiaoshuo\.com\/wcxs\-\d+\-\d+/i,
    exampleUrl: "http://www.wcxiaoshuo.com/wcxs-*-*/",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="wrapper_main"][@id="jsreadbox"]/h1 | //div[@class="wrapper_main"][@id="jsreadbox"]/div[@id="htmlContent"][@class="contentbox"]'
    }
  },
  {
    name: "燃文",
    url: /^https?:\/\/www\.ranwen\.cc\/.+\.html/i,
    exampleUrl: "http://www.ranwen.cc/A/9/9818/3505060.html",
    nextLink: '//div[@class="pageTools"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="oldtext"]'
    }
  },
  {
    name: "书河",
    url: /^https?:\/\/www\.shuhe\.cc\/.+/i,
    exampleUrl: "http://www.shuhe.cc/30976/4401025/",
    nextLink: '//div[@class="bottem"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="TXT"]'
    }
  },
  {
    name: "89文学",
    url: /^https?:\/\/89wx\.com\/.+\.htm/i,
    exampleUrl: "http://89wx.com/html/book/70/70732/6641331.htm",
    nextLink: '//dd[@id="footlink"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//dd[@id="contents"]'
    }
  },
  {
    name: "极速小说网",
    url: /^https?:\/\/www\.186s\.cn\/files\/article\/html\/.+\.html/i,
    exampleUrl: "http://www.186s.cn/files/article/html/0/304/4528937.html",
    nextLink: '//div[@id="footlink"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "手打8",
    url: /^https?:\/\/shouda8\.com\/.+\.html/i,
    exampleUrl: "http://shouda8.com/zhangyuxingchen/85649.html",
    nextLink: '//div[@id="papgbutton"]/descendant::a[text()="下一章（快捷键 →）"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "闪文书库",
    url: /^https?:\/\/read\.shanwen\.com\/.+\.html/i,
    exampleUrl: "http://read.shanwen.com/14/14616/1011063.html",
    nextLink: '//td[@class="tb0"]/descendant::a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@id="content"]'
    }
  },
  {
    name: "PaiTxt",
    url: /^https?:\/\/paitxt\.com\/.+\.html/i,
    exampleUrl: "http://paitxt.com/24/24596/4507312.html",
    nextLink: '//div[@class="book_middle_text_next"]/descendant::a[text()="下一章(快捷键:→)"]',
    autopager: {
      pageElement: '//div[@id="booktext"]'
    }
  },
  {
    name: "好书楼",
    url: /^https?:\/\/www\.haoshulou\.com\/.+\.html/i,
    exampleUrl: "http://www.haoshulou.com/Hao/6/60238.html",
    nextLink: '//div[@class="movenext"]/descendant::a[text()="下一章"]',
    autopager: {
      pageElement: '//div[@id="booktext"]'
    }
  },
  {
    name: "BookLink.Me:最有爱的小说搜索引擎",
    url: "^https?://booklink\\.me/",
    nextLink: '//a[text()="下一页"] | //a[font[text()="下一页"]]',
    pageElement: '//table[@width="100%"][@cellspacing="0"][@cellpadding="2"]',
    scroll_only: true
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
    name: "天极动漫频道新闻",
    url: /^https?:\/\/comic\.yesky\.com\/\d+\/.+\.shtml/i,
    exampleUrl: "http://comic.yesky.com/249/11335749_5.shtml",
    nextLink: "auto;",
    autopager: {
      pageElement: '//div[@class="article"]/p[1]',
      remain: 1.4,
      replaceE: '//div[@id="numpage"]'
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
    name: "动漫Fans",
    url: /^https?:\/\/www\.dm123\.cn\/bbs\/(thread\.php\?fid=|read\.php\?tid=)/i,
    exampleUrl: "http://www.dm123.cn/bbs/read.php?tid=593645",
    nextLink: "auto;",
    autopager: {
      pageElement: '//tbody[@id="threadlist"]|//div[@id="pw_content"]'
    }
  },
  {
    name: "KuKu动漫",
    url: /^https?:\/\/comic\.kukudm\.com\/comiclist\/\d+\/\d+.*\.htm/i,
    exampleUrl: "http://comic.kukudm.com/comiclist/4/17099/3.htm",
    useiframe: true,
    nextLink: '//a[img[contains(@src,"images/d.gif")]]',
    autopager: {
      useiframe: true,
      pageElement: "//body/table[2]"
    }
  },
  {
    name: "52pk漫画",
    url: /^https?:\/\/(op|sishen|narutocn)\.52pk\.com\/manhua\/\d+\/\d+/i,
    exampleUrl: "http://op.52pk.com/manhua/2010/921364.html",
    nextLink: '//li[@id="page__next"]/a[1]',
    autopager: {
      relatedObj: ["css;li#page__select", "bottom"],
      pageElement: '//div[@id="pictureContent"]'
    }
  },
  {
    name: "动漫屋",
    url: /^https?:\/\/(www|tel)\.dm5\.com\/.+/i,
    nextLink: '(//span[@class="current"])[1]/following-sibling::a[1]',
    autopager: {
      pageElement: '//img[@id="cp_image"]',
      useiframe: true,
      remain: 1 / 2
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
    name: "死神中文网",
    url: /^https?:\/\/(?:\w+\.)?bleachcn\.net\/manhua\/.+/i,
    exampleUrl: "http://naruto.bleachcn.net/manhua/6759.html",
    nextLink: '//div[@id="comic_pages"]/a[text()="下一页"][@href]',
    autopager: {
      pageElement: '//div[@id="comic_endtext"]'
    }
  },
  {
    name: "iiikl论坛",
    url: "^https?://bbs\\.iiikl\\.net/forum\\.php\\?forum_id=.*",
    nextLink: '//a[@class="next"]',
    pageElement: '//tr[@class="topic_list_row"]',
    exampleUrl: "http://bbs.iiikl.net/forum.php?forum_id=82&class_id=0&page=2"
  },
  {
    name: "sosg论坛帖子",
    url: /^https?:\/\/www\.sosg\.net\/read/i,
    exampleUrl: "http://www.sosg.net/read.php?tid=424833",
    nextLink: '//td[@align="left"]/b/following-sibling::a[@href]',
    autopager: {
      pageElement: '//div[@id="b5"]/form/a/table[1]'
    }
  },
  {
    name: "澄空贴子内容",
    url: /^https?:\/\/bbs\.sumisora\.org\/read\.php\?tid=/i,
    exampleUrl: "http://bbs.sumisora.org/read.php?tid=11015694",
    nextLink: "auto;",
    autopager: {
      pageElement: "css;.t.t2"
    }
  },
  {
    name: "9gal苍雪论坛",
    url: /^https?:\/\/bbs\.(9gal|9baka)\.com\/read\.php\?tid=/i,
    exampleUrl: "http://bbs.9gal.com/read.php?tid=299016",
    nextLink: "auto;",
    autopager: {
      pageElement: '//form[@method="post"]/a[@name]/following-sibling::div',
      replaceE: '//ul[@class="pages"]'
    }
  },
  {
    name: "和邪社|你的ACG生活 文不在长.内涵则明 图不在色.意淫则灵",
    url: /^https?:\/\/www\.hexieshe\.com\//i,
    exampleUrl: "http://www.hexieshe.com/",
    nextLink: '//div[@class="pagebar"]/a[text()="Next"]',
    autopager: {
      pageElement: 'id("centent")'
    }
  },
  {
    name: "haruhichan",
    url: /^https?:\/\/haruhichan\.com\//i,
    nextLink: '//a[@rel="next"]',
    autopager: {
      pageElement: '//div[@id="postlist"]'
    }
  },
  {
    name: "exhentai",
    url: "^https?://exhentai\\.org/s/.*$",
    nextLink: '//img[@src="http://st.exhentai.net/img/n.png"]/..',
    pageElement: '//body/div[@class="sni"]',
    exampleUrl: "http://exhentai.org/s/0088446283/653117-4",
    useiframe: true
  },
  {
    name: "exhentai gallery",
    url: /^https?:\/\/exhentai\.org\/g\//i,
    exampleUrl: "http://exhentai.org/g/514954/d4fcb4973e/?p=1",
    nextLink: '//table[@class="ptt"]//a[text()=">"]',
    autopager: {
      pageElement: '//div[@id="gdt"]',
      relatedObj: true
    }
  },
  {
    name: "exhentai frontpage",
    url: /^https?:\/\/exhentai\.org\/(\?[^\/]+)?$/i,
    exampleUrl: "http://exhentai.org/?page=2",
    nextLink: '//table[@class="ptt"]//a[text()=">"]',
    autopager: {
      pageElement: '//table[@class="ptt"]/..',
      relatedObj: true
    }
  },
  {
    name: "Hentai Manga|Read free hentai xxx manga online",
    url: /^https?:\/\/hentai4manga\.com\//i,
    exampleUrl: "http://hentai4manga.com/",
    nextLink: '//div[@class="pages"]/a[contains(text(), ">")]',
    autopager: {
      pageElement: 'id("innerContent")'
    }
  },
  {
    name: "1024社区",
    url: "^https?://(www\\.)?t66y\\.com/|^http://cl\\.man\\.lv/",
    nextLink: '//div[@class="pages"]/b/following-sibling::a[1]',
    pageElement: 'id("ajaxtable") | id("main")',
    exampleUrl: "http://t66y.com/thread0806.php?fid=15"
  },
  {
    name: "DLsite 検索結果",
    url: /^https?:\/\/(?:[^.]+\.)?dlsite\.com\//i,
    exampleUrl: "http://www.dlsite.com/home/fsr/=/language/jp/keyword/kon/age_category%5B0%5D/general/per_page/30/show_type/n/page/2",
    nextLink: '//td[@class="page_no"]/ul/li/a[text()="次へ" or text()="Next"]',
    autopager: {
      pageElement: 'id("search_result_list")'
    }
  },
  {
    name: "Gyutto.com｜の検索結果",
    url: /^https?:\/\/gyutto\.com\/search\/search_list\.php/i,
    exampleUrl: "http://gyutto.com/search/search_list.php?_adult_check=yes&action=perPage&search_keyword=lol&search_type=&mode=search&perPage=30&pageID=2&ref_path=%2Fsearch%2Fsearch_list.php",
    nextLink: '//a[text()="次の30件へ"]',
    autopager: {
      pageElement: 'id("struct_2ColRightIn")/div[@class="unit_ItemList"]/div[contains(@class, "parts_ItemBox")]',
      relatedObj: true
    }
  },
  {
    name: "JAVLibrary",
    url: /^https?:\/\/www\.javlibrary\.com\/cn\//i,
    exampleUrl: "http://www.javlibrary.com/cn/vl_bestrated.php",
    nextLink: '//div[@class="page_selector"]/a[@class="page next"]',
    autopager: {
      pageElement: 'id("rightcolumn")/div[@class="videothumblist"] | id("rightcolumn")/div[@class="starbox"]'
    }
  },
  {
    name: "DesignCrowd",
    url: "^https://.+.designcrowd.com/.",
    nextLink: '//li[@class="active" or @class="current"]/following-sibling::li[1]/a',
    exampleUrl: "https://jobs.designcrowd.com/graphic-design-jobs https://designers.designcrowd.com/3 https://www.designcrowd.com/community/",
    pageElement: '//table[@class="table table-striped"]//tr|//div[@class="row small-up-1 medium-up-2 large-up-4"]|id("communityContests")'
  },
  {
    name: "Nyaa",
    url: "^https?://(?:sukebei.)?nyaa.si/",
    nextLink: "//li[@class='active']/following-sibling::li[1]/a",
    pageElement: "//div[@class='table-responsive']/table[contains(@class, torrent-list)]/tbody/tr",
    exampleUrl: "http://www.nyaa.se/"
  },
  {
    name: "动漫花园",
    url: /^https?:\/\/share\.dmhy\.org/i,
    nextLink: "auto;",
    pageElement: '//*[@id="topic_list"]',
    exampleUrl: "https://share.dmhy.org/",
    useiframe: true
  },
  {
    name: "ACGNX",
    url: /^https?:\/\/(?:ero|www).\acgnx.se/,
    nextLink: '//div[contains(@class,"page")]/a[@class="nextprev"]',
    pageElement: '//*[@id="listTable"]'
  },
  {
    name: "BTDigg Search",
    url: "^https?://btdigg.org/search*",
    nextLink: '//a[contains(text(),"→")]',
    pageElement: "//body/div/div/center"
  },
  {
    name: "btbit.cc",
    url: /^https?:\/\/btbit\.cc\/list/i,
    nextLink: "auto;",
    pageElement: '//div[@class="pbox" and div[@class="rs"]]'
  },
  {
    name: "btso.pw",
    url: /^https?:\/\/btso\.pw\/search/i,
    nextLink: "auto;",
    pageElement: '//div[@class="data-list"]/div[@class="row"]'
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
    name: "AnandTech",
    url: "^https?://anandtech\\.com/",
    nextLink: '//div[@class="pagination"]/ul/li[@class="arrow"]/a[text()="?"]',
    pageElement: '//section[@class="content"]/section[@class="main_cont"]/section[@class="main_cont"]',
    exampleUrl: "http://anandtech.com/tag/mb"
  },
  {
    name: "Android Police - Android News, Apps, Games, Phones, Tablets",
    url: "^https?://www\\.androidpolice\\.com/",
    nextLink: '//div[@class="wp-pagenavi"]/a[text()="Next?"]',
    pageElement: '//div[@id="content"]',
    exampleUrl: "http://www.androidpolice.com/"
  },
  {
    name: "Anonymous speaks: the inside story of the HBGary hack | Ars Technica",
    url: "^https?://arstechnica\\.com/",
    nextLink: '//a[span[contains(concat(" ", @class, " "), " next ")]]',
    pageElement: '//article[contains(concat(" ", @class, " "), " standalone ")]/section[@id="article-guts"]',
    exampleUrl: "http://arstechnica.com/tech-policy/2011/02/anonymous-speaks-the-inside-story-of-the-hbgary-hack/"
  },
  {
    name: "techPowerUp",
    url: "^https?://www\\.techpowerup\\.com/",
    nextLink: '//a[@class="nextpage-top"] | //a[contains(text(),"Next")]',
    pageElement: '//div[@class="text"] | //section[@id="list"] | //form[@class="DiscussionList InlineModForm" or @class="InlineModForm section"]',
    exampleUrl: "http://www.techpowerup.com/reviews/GSkill/F3-1600C7Q-32GTX/"
  },
  {
    name: "Digital Photography Review",
    url: "^https?://www\\.dpreview\\.com/",
    nextLink: '//a[@rel="nofollow"][contains(text(), "Next")]',
    pageElement: 'id("mainContent")/div[@class="news withDayIcons"]',
    exampleUrl: "http://www.dpreview.com/previews/sony-cybershot-dsc-rx1r"
  },
  {
    name: "Digital Photography Review 2",
    url: "^https?://www\\.dpreview\\.com/",
    nextLink: '//div[@class="reviewPagesDropdown"]/a/img[@alt="Next page"]/..',
    insertBefore: 'id("amazonBuyboxContainer")',
    autopager: {
      pageElement: 'id("mainContent")',
      filter: "css;.reviewNavigatorTop, #amazonBuyboxContainer, .ad, #comments, .buyboxOld.amazon",
      relatedObj: ["css;div.reviewNavigatorBottom", "bottom"],
      HT_insert: ['id("amazonBuyboxContainer")', 1]
    }
  },

  // -================ 手机网站 ========================
  {
    name: "手机百度百科",
    url: /^https?:\/\/wapbaike\.baidu\.com\//i,
    exampleUrl: "http://wapbaike.baidu.com/goodlist?uid=F381CCCD6FD2F58151EFFB4A63BFA4FF&ssid=0&pu=sz%401321_1004&bd_page_type=1&from=844b&st=4&step=2&net=1&bk_fr=bk_more_glist",
    nextLink: '//div[@class="pages"]/a[text()="下一页"] | //div[@class="page"]/p[@class="next"]/a[text()="下页"] | //table[@class="table next"]//a[text()="下页"] | //a[@class="m-rm-5" and text()="余下全文"]',
    autopager: {
      pageElement: '//div[@class="bd"] | //div[@class="list"] | id("lemma-content")',
      separatorReal: false,
      replaceE: "css;.page > .p-num"
    }
  },
  {
    name: "手机豆瓣",
    url: /^https?:\/\/m\.douban\.com\/.*/i,
    exampleUrl: "http://m.douban.com/book/subject/1088065/reviews?session=c0ea1419",
    nextLink: '//div[@class="pg" or @class="paginator"]/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("bd")/div[@class="itm"] | //div[@class="bd"]/div[@class="list"]',
      separatorReal: false
    }
  },
  {
    name: "手机新浪新闻",
    url: /^https?:\/\/[a-z]+\.sina\.cn\/\?sa=/i,
    exampleUrl: "http://news.sina.cn/?sa=t124d10608655v71&pos=108&vt=4&clicktime=1386267238910&userid=user138626723891024077253801575993",
    nextLink: 'id("j_loadingBtn")',
    autopager: {
      pageElement: 'id("j_articleContent")',
      relatedObj: true
    }
  },
  {
    name: "手机网易网",
    url: "^https?://3g\\.163\\.com/[a-z]+/.*\\.html",
    exampleUrl: "http://3g.163.com/news/13/0914/04/98N4CSHI0001124J.html",
    nextLink: ['//a[text()="余下全文"]', '//a[text()="下页"]'],
    autopager: {
      pageElement: '//div[@class="content"]',
      // separator: false,
      replaceE: '//div[@class="reset marTop10 cBlue"][child::a[text()="下页"]] | //div[child::form[@class="reset"]]',
      relatedObj: true
    }
  },
  {
    name: "手机凤凰网",
    url: "^https?://3g\\.ifeng\\.com/[a-z]+/",
    exampleUrl: "http://3g.163.com/news/13/0914/04/98N4CSHI0001124J.html",
    nextLink: ['//a[text()="余下全文"]', '//a[text()="下一页"]'],
    autopager: {
      pageElement: '//div[@class="zwword"]',
      // separator: false,
      relatedObj: true
    }
  },
  {
    name: "手机环球网",
    url: "^https?://wap\\.huanqiu\\.com/",
    nextLink: ['//a[text()="余下全文"]', '//a[text()="下一页"]'],
    autopager: {
      pageElement: '//div[@class="newscont"]',
      // separator: false,
      separatorReal: false,
      relatedObj: true
    }
  },
  {
    name: "cnBeta.COM - 移动版",
    url: /^https?:\/\/m\.cnbeta\.com\//i,
    exampleUrl: "http://m.cnbeta.com/",
    nextLink: 'id("yw0")/a[@class="page-next"]',
    autopager: {
      pageElement: '//div/div/div[@class="list"]'
    }
  },
  {
    name: "手机版M.BookLink.Me",
    url: /^https?:\/\/m\.booklink\.me\//i,
    exampleUrl: "http://m.booklink.me/charpter.php?site_id=2&book_id=69507",
    nextLink: '//div[@class="sec nav"]/form/a[text()="下一页"]',
    autopager: {
      pageElement: 'id("m_main")/ul[@class="list sec"]'
    }
  },
  {
    name: "开源中国(OSChina.NET)",
    url: /^https?:\/\/m\.oschina\.net\//i,
    exampleUrl: "http://m.oschina.net/",
    nextLink: "auto;",
    autopager: {
      pageElement: '//ul[@class="ui-listview"]',
      useiframe: true
    }
  },
  {
    name: "博客园博客手机版",
    url: /^https?:\/\/m\.cnblogs\.com\/blog\//i,
    exampleUrl: "http://m.cnblogs.com/blog/",
    nextLink: '//a[text()="下一页"]',
    autopager: {
      pageElement: '//div[@class="list_item"]'
    }
  },

  // ============== google 其它======================
  {
    name: "Google Bookmarks",
    url: "^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/bookmarks/",
    nextLink: '//div[contains(concat(" ", @class, " "), " kd-buttonbar ")]//tr/td[last()-1 or last]/a[img[contains(@src,"right.png")]]',
    pageElement: 'id("search")'
  },
  {
    name: "Google Code List",
    url: "^https?://code\\.google\\.com/[pr]/(?:[^/]+/){2}list",
    nextLink: 'id("colcontrol")//div[contains(concat(" ", @class, " "), " pagination ")]/a[contains(., "?")]',
    pageElement: 'id("resultstable")//tr'
  },
  {
    name: "google_hosting",
    url: "^https?://code\\.google\\.com/hosting/search\\?",
    nextLink: 'id("serp")/following::a[contains(., "Next")][1]',
    pageElement: 'id("serp")/*'
  },
  {
    name: "google_codesearch",
    url: "^https?://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/codesearch",
    nextLink: '(id("navbar")//td[@class="b"]/a)[last()]',
    pageElement: '//*[self::div[@class="h"] or self::pre[@class="j"] or self::div[@class="f"]]',
    insertBefore: 'id("navbar")'
  },
  {
    name: "google_groupsearch",
    url: "^https?://groups\\.google(?:\\.[^./]{2,3}){1,2}/groups/search",
    nextLink: 'id("navbar")//td[last()][@class="b"]/a',
    pageElement: 'id("res")/*[self::div or self::br]'
  },
  {
    name: "Google Scholar",
    url: "^https?://scholar.google.(?:[^.]{2,3}.)?[^./]{2,3}/scholar",
    nextLink: '//a[./span[@class="gs_ico gs_ico_nav_next"]]',
    exampleUrl: "https://scholar.google.com/scholar?q=wii&hl=ja",
    pageElement: '//div[@class="gs_r gs_or gs_scl"]'
  },
  {
    name: "google_news",
    url: "^https?://(?:[^.]+\\.)?google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/news",
    nextLink: 'id("end-next")/..',
    pageElement: 'id("search-stories story-articles")'
  },
  {
    name: "google_history",
    url: "^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/history/",
    nextLink: '//td[@class="bl"][last()-1]/a|//div[@class="nn"]/parent::a',
    pageElement: '//table[@class="res"]'
  },
  {
    name: "google_logos",
    url: "^https?://www\\.google\\.[^./]{2,3}(?:\\.[^./]{2,3})?/logos/",
    nextLink: '//div[@class="base-nav"]//a[contains(., "?")]',
    pageElement: 'id("doodles")|//div[contains(concat(" ", @class, " "), " title ")]'
  },
  {
    name: "google_books",
    url: "^https?://books\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/books",
    nextLink: 'id("navbar")//span[@class="navlink"]/parent::a',
    pageElement: 'id("main_content")/*'
  },
  {
    name: "google_app",
    url: "^https?://appengine\\.google\\.com/datastore/explorer\\?.",
    nextLink: 'id("ae-datastore-explorer")//a[@class="ae-paginate-next"]',
    pageElement: 'id("ae-datastore-explorer-entities")'
  },
  {
    name: "google_movie",
    url: "^https?://(?:[^/]+\\.)?google(?:\\.\\w{2,3}){1,2}/movies",
    nextLink: 'id("pnnext")|id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a|id("nn")/parent::a',
    pageElement: 'id("movie_results")/*'
  },
  {
    name: "google_chrome",
    url: "^https://chrome\\.google\\.com/webstore/(?:list|search)",
    nextLink: '//table[@class="paginator"]//td[last()]/a',
    pageElement: '//div[@class="mod-fullpage"]/div[@class="mod-body"]'
  },
  {
    name: "googlebooks/chrome",
    url: "^https?://www\\.google\\.com/intl/ja/googlebooks/chrome/",
    nextLink: 'id("info")/p[contains(concat(" ",@class," "),"nav")]/a[img[@src="images/arrowright.gif"]]',
    pageElement: 'id("page")/div[a[img] or img]'
  },
  {
    name: "desktop\\.google",
    url: "^https?://desktop\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/",
    nextLink: 'id("content")/table[@class="header"]//a[contains(., "?")]',
    pageElement: 'id("content")/*[(self::table and @class="gadget") or (self::br and @style="clear: both;")]'
  },
  {
    name: "sketchup",
    url: "^https?://sketchup\\.google\\.com/3dwarehouse/search\\?",
    nextLink: '//div[@class="pager_next"]/parent::a',
    pageElement: '//div[@class="searchresult"]/ancestor::tr[1]'
  },
  {
    name: "google_cpanel",
    url: "^https://www\\.google\\.com/a/cpanel/[^/]+/",
    nextLink: '//tr//ul[@class="inlinelist"]//a[contains(text(),"?")]',
    pageElement: 'id("list")'
  },
  {
    name: "google_forum",
    url: "^https?://www\\.google\\.com/support/forum/",
    nextLink: '//div[@class="wppkrootCSS"]/a[contains(text(), ">")]',
    pageElement: '//table[@class="lctCSS"]'
  },
  {
    name: "google_product",
    url: "^https?://www\\.google\\.com/products\\?",
    nextLink: 'id("nn")/parent::a',
    pageElement: 'id("results")|id("results")/following-sibling::p[@class="clear"]'
  },
  {
    name: "google_review",
    url: "^https?://www\\.google\\.com/reviews/t",
    nextLink: '//a[contains(text(), "Next")]',
    pageElement: 'id("allresults")/table',
    insertBefore: '//div[contains(concat(" ", normalize-space(@class), " "), " t_ftr ")]'
  },
  {
    name: "google_cse",
    url: "^https?://www\\.google\\.com/cse\\?cx=",
    nextLink: "//div[@class='gsc-cursor-page gsc-cursor-current-page']/following-sibling::node()[1]",
    pageElement: "//div[@class='gsc-webResult gsc-result']",
    insertBefore: "//div[@class='gsc-cursor-box gs-bidi-start-align']"
  },
  {
    name: "google_lab_follow",
    url: "^https?://followfinder\\.googlelabs\\.com/search",
    nextLink: '//td[@class="more"]//a[last()]',
    pageElement: "//table//tr[//div]"
  },
  {
    name: "googlelabs",
    url: "^https?://www\\.googlelabs\\.com/",
    nextLink: 'id("nav")//td[@class="cur"]/following-sibling::td[1]/a',
    pageElement: 'id("nav")/preceding-sibling::ul'
  },

  // ========================= github ================================
  {
    name: "github mix",
    url: "^https?://github\\.com/(?:dashboard|(?:timeline|[^/]+/[^/]+/(?:comments|network/feed)))",
    nextLink: '//a[@hotkey="l"]|//div[contains(concat(" ",@class," ")," pagination ")]/a',
    pageElement: '//div[@class="news"]/div[contains(@class, "alert")]'
  },
  {
    name: "github 搜索",
    url: "^https?://github\\.com/search",
    nextLink: "//div[@class='pagination']/a[@rel='next']",
    autopager: {
      pageElement: "id('code_search_results issue_search_results')|//div[@class='sort-bar']/following-sibling::*[following-sibling::span[@class='search-foot-note']] | //ul[@class='repo-list']",
      insertBefore: "//div[@class='pagination']",
      stylish: "li.repo-list-item { text-align: left; }"
    }
  },
  {
    name: "github-gist",
    url: "^https?://gist\\.github\\.com/",
    nextLink: '//div[contains(concat(" ", @class, " "), " pagination ")]/a[contains(text(),"Older")]',
    pageElement: '//div[contains(concat(" ", @class, " "), " gist-item ")]'
  },
  // 有点小问题，需要刷新下才有用
  {
    name: "github_changelog",
    url: "^https?://github\\.com/(?:changelog|[^/]+/[^/]+/commits)",
    nextLink: '//a[contains(text(), "Older")]',
    pageElement: '//*[starts-with(@class,"commit-group")]'
  },
  {
    name: "github_watchers",
    url: "^https?://github\\.com/[^/]+/[^/]+/watchers",
    nextLink: '//div[@class="pagination"]/span[@class="current"]/following-sibling::a',
    pageElement: 'id("watchers")'
  },
  {
    name: "github_following",
    url: "^https?://github\\.com/[^/]+/following",
    nextLink: "//a[hotkey='l']",
    pageElement: 'id("watchers")'
  },
  {
    name: "github_learn",
    url: "^https?://learn\\.github\\.com/p/",
    nextLink: '//a[contains(text(), "next")]',
    pageElement: '//div[@class="container"]/div[@id="welcome" or @class="content"]'
  },
  {
    name: "github_blog",
    url: "^https://github\\.com/blog",
    nextLink: '//div[contains(concat(" ",@class," ")," pagination ")]/a[contains(text(),"Next")]',
    pageElement: 'id("posts")/div[contains(concat(" ",@class," ")," list ")]/ul/li'
  },

  // ========= 很少用的 ================
  {
    name: "bookcool-小说合集",
    url: "^https?://www\\.bookcool\\.com/.*\\.htm",
    nextLink: '//div[@id="object1"]/descendant::a[last()][@href]',
    pageElement: '//div[@align="center"]/table[@width !="100%"]'
  },
  {
    name: "Hachiya Makoto",
    url: "^https?://g\\.e-hentai\\.org/s/.*$",
    nextLink: '//img[@src="http://ehgt.org/g/n.png"]/..',
    pageElement: '//body/div[@class="sni"]',
    exampleUrl: "http://g.e-hentai.org/s/2221a78fe2/592744-3",
    useiframe: true
  },
  // === hentai image ====
  {
    name: "ehentai",
    url: /^https:\/\/e[-x]hentai\.org\/s\/.*\/.*/,
    nextLink: '//a[@id="next"]',
    autopager: {
      enable: true,
      pageElement: '//div[@id="i3"]',
      ipages: [true, 30]
    },
    exampleUrl: "https://e-hentai.org/s/f61cb59d07/1099124-3"
  },
  {
    name: "ehentai gallary",
    url: /^https:\/\/e[x-]hentai\.org\/g\/[^\/]*\/[^\/]*(\/\?p=\d)?/,
    nextLink: '//table[@class="ptt"]/tbody/tr/td[last()]/a',
    pageElement: '//div[@id="gdt"]',
    exampleUrl: "https://e-hentai.org/g/1109427/b827f866e1/?p=3"
  },
  {
    name: "e-hentaidb",
    url: "^https://e-hentaidb.com/",
    nextLink: '//div[@class="pageUnit"]/a[b]/following-sibling::a',
    exampleUrl: "https://e-hentaidb.com/?female=%E5%87%A6%E5%A5%B3%E5%96%AA%E5%A4%B1",
    pageElement: '//div[@class="preview"]/div'
  },
  {
    name: "ehentai gallary front",
    url: /^https:\/\/e[x-]hentai\.org(\/\?[fp].*)?/,
    nextLink: '//table[@class="ptt"]/tbody/tr/td[last()]/a',
    pageElement: '//div[@id="gdt"]',
    exampleUrl: "https://e-hentai.org/g/1109427/b827f866e1/?p=3"
  },
  {
    name: "nhentai",
    url: /^https:\/\/nhentai\.net/,
    nextLink: '//section[@class="pagination"]/a[@class="next"]',
    pageElement: '//div[@class="container index-container"]|//section[@id="image-container"]',
    exampleUrl: "https://nhentai.net/tag/akigami-satoru/"
  },
  {
    name: "177pic",
    url: /^https?:\/\/(www\.)?177pic\.info\/html\/.*\.html/,
    nextLink: '//a[text()="下一页"]',
    autopager: {
      enable: true,
      useiframe: false,
      pageElement: '//div[@class="entry-content"]',
      ipages: [true, 30]
    },
    exampleUrl: "http://www.177pic.info/html/2017/06/1409443.html"
  },
  {
    name: "DL.Getchu.com",
    url: "^https?://dl.getchu.com/",
    nextLink: '//div[@class="pgr2"]/b/following-sibling::a[1]',
    exampleUrl: "http://dl.getchu.com/search/dojin_circle_detail.php?id=1447&pageID=3",
    pageElement: '//td[@bgcolor="white" and @align="center" and not(@class)]/*'
  },
  // ==== NSFW ====
  {
    name: "porn-image-xxx.com",
    url: /^https?:\/\/(\w*\.)?porn-image-xxx\.com\/image\/\.*/,
    nextLink: "auto;",
    autopager: {
      enable: true,
      pageElement: '//div[@id="display_image_detail"]',
      ipages: [true, 30]
    },
    exampleUrl: "https://zh.porn-image-xxx.com/image/g-cup-beauty-big-breasts-image-intertwined-konno-anzu-minami-and-shore-sayaka/page/1/"
  },
  {
    name: "namethatpornstar",
    url: /^https?:\/\/namethatpornstar.com/i,
    exampleUrl: "http://namethatpornstar.com/all-requests.php?page=2",
    nextLink: '//*[@id="pagination"]/a[./div[contains(@class,"selected")]]/following-sibling::a[1]',
    autopager: {
      useiframe: true,
      pageElement: '//*[@id="content"]'
    }
  },
  {
    name: "AV百科",
    url: "^https?://www\\.avbaike\\.net/\\d+\\.html",
    nextLink: 'id("content")/div[@class="article_container row  box"]/div[@class="context"]/descendant::a[text()="下一页"]',
    autopager: {
      enable: true,
      pageElement: '//div[@id="post_content"]',
      ipages: [true, 30]
    },
    exampleUrl: "http://www.avbaike.net/17237.html"
  },
  {
    name: "avgle",
    url: /^https:\/\/avgle\.com\/.*/,
    nextLink: '//a[@class="prevnext"]',
    pageElement: '//div[@id="wrapper"]/div[1]/div[@class="row"]/div[1]',
    exampleUrl: "https://avgle.com/search/videos?search_query=%E5%A5%B3%E6%95%99%E5%B8%AB&search_type=videos&o=tr"
  },
  {
    name: "PornHub.com",
    url: "^https://[^.]+.pornhub.com/",
    nextLink: '//li[contains(concat(" ", @class, " "), " page_next ")]/a',
    exampleUrl: "http://www.pornhub.com/video http://www.pornhub.com/album",
    pageElement: '//li[contains(concat(" ", @class, " "), " videoblock ")] | //li[contains(concat(" ", @class, " "), " photoAlbumListContainer ")] '
  },
  {
    name: "YouAV",
    url: "^https://www.youav.com/search|videos",
    nextLink: '//div[@class="hidden-xs"]/ul/li/a[@class="prevnext"]',
    exampleUrl: "",
    pageElement: '//div[@class="container"]/div[@class="row"]/div/div[@class="row"]'
  },
  {
    name: "Creema",
    url: "^https://(www.)?creema.jp/(listing|c)/",
    nextLink: '//link[@rel="next"]',
    exampleUrl: "https://www.creema.jp/listing?sort=newer",
    pageElement: '//ul[@class="p-items-article-list"]'
  },
  {
    name: "qyule",
    url: "^https?://[^.]+.qyule.tv/",
    preLink: "(//a[@class='prevnext'])[1]/@href",
    nextLink: "(//a[@class='prevnext'])[last()]",
    pageElement: "//li[div[@class='video']]"
  },
  {
    name: "chaturbate",
    url: "^https?://([^.]+.)?chaturbate.com/",
    nextLink: "auto;",
    pageElement: '//div[@class="c-1 endless_page_template"]'
  },
  // ==== English websites ====================
  {
    name: "Gamefaqs",
    url: "^https://gamefaqs.gamespot.com/",
    nextLink: '//a[i/@class="fa fa-angle-right"]',
    exampleUrl: "https://gamefaqs.gamespot.com/boards/631516-wii-u",
    pageElement:
      '//div[@class="ffaq ffaqbody"]//div[@class="section" and not(contains(h2,"(Continued)")) or @class="section_box"]|//table[starts-with(@class,"board topics tlist") or starts-with(@class,"board message") or @class="results"]/tbody/tr'
  },
  {
    name: "Screen Rant",
    url: "^https?://screenrant.com/.+",
    nextLink: '//*[@rel="next"]',
    exampleUrl:
      "http://screenrant.com/most-powerful-dc-comic-superheroes http://screenrant.com/fantastic-four-movie-rights-fox-marvel-studios-2015/2/ https://screenrant.com/movies-didnt-know-had-post-credits-scenes/4/?view=lista",
    pageElement:
      '(//a[@class="next-btn icon i-arrow-2"]/preceding-sibling::*[preceding-sibling::h2/@class="item-title"]|//h2[@class="item-title"]|//h2[@style="text-align: center;"][a]/preceding-sibling::*[preceding-sibling::p])[not(//div/@class="wp-pagenavi")]|//div[@itemprop="articleBody"]/div[@class="wp-pagenavi"]/preceding-sibling::*[not(self::h3 or self::h2[@style="text-align: center;"]/a)]'
  },
  {
    name: "rarbg",
    url: "^https?://(proxy)?rarbg(mirror|proxy|to|2018)?.(to|net|org)/",
    nextLink: '//a[@title="next page"]',
    exampleUrl: "https://rarbg.to/torrents.php?category=movies",
    pageElement: '//table[@class="lista2t"]/tbody/tr[td/@class="lista"]'
  },
  {
    name: "models",
    url: "^https?://([^.]+.)?models.com/models/",
    nextLink: '(//ul[@id="tabnavB"]/li)[last()]/a',
    pageElement: '//div[@class="work-div"]'
  },
  {
    name: "ghacks",
    url: /^https?:\/\/([^\.]+\.)?ghacks\.net(\/category\/.+)?/,
    nextLink: '//div[@class="nav-links"]/a[contains(text(),"Next Page")]',
    pageElement: '//div[@class="ghacks-content"]/div[contains(@class,"post-list")]'
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
  },
  {
    name: "Zophars Domain Music",
    url: "^https://(www.)?zophar.net/music/",
    nextLink: '//a[@title="Next"]',
    exampleUrl: "https://www.zophar.net/music/nintendo-nes-nsf",
    pageElement: 'id("gamelist")//tr[contains(@class,"regularrow")]'
  },
  {
    name: "Headline Planet",
    url: "^https://headlineplanet.com/home/",
    nextLink: '//link[@rel="next"]',
    exampleUrl: "https://headlineplanet.com/home/ https://headlineplanet.com/home/category/music/music-news/ https://headlineplanet.com/home/category/music/reviews-music/",
    pageElement: '//div[@id="primary"]/div/div/ul[@class="g1-collection-items"]/li'
  }
];

module.exports = SITEINFO;
