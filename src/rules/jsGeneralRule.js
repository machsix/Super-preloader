//@ts-check
///<reference path="../index.d.ts"/>
import {getAllElements, getAllElementsByXpath, getElementByXpath} from '../utils/domSelector';
import {createDOM} from '../utils/domTools';
// General rules for CMS like phpwind
/**@type {IRule[]} */
export const jsGeneralRule = [
  {
    name: '2048 image mode',
    url: 'https?://[^/]*/2048/',
    pageElement: '//ul[@id="waterfall"]/li',
    nextLink: '//div[@class="pages"]/b/following-sibling::a'
  },
  {
    name: '2048 text mode',
    url: 'https?://[^/]*/2048/',
    pageElement: '//table[@id="ajaxtable"]/tbody[2]/tr[contains(@class,"tr3")]',
    nextLink: '//div[@class="pages"]/b/following-sibling::a',
    autopager: {
      relatedObj: true,
      documentFilter: 'startFilter',
      startFilter: function startFilter(doc) {
        try {
          doc.querySelector('tr[onmouseover]').remove();
        } catch (_err) {}
        var trs = doc.querySelectorAll('#ajaxtable .tr3');

        if (trs.length > 0) {
          for (var i = 0; i < trs.length; i++) {
            const thisTrs = trs[i];
            //@ts-ignore
            const postLink = thisTrs.querySelector('td:nth-of-type(2) a').href;
            if (postLink) {
              fetch(postLink)
                .then((r) => r.text())
                .then((html) => {
                  const doc = new DOMParser().parseFromString(html, 'text/html');
                  const imgNode = doc.querySelector('td.r_one img');
                  if (imgNode) {
                    thisTrs.querySelector('td:nth-of-type(1)').innerHTML = '';
                    thisTrs.querySelector('td:nth-of-type(1)').appendChild(
                      createDOM('IMG', {
                        attr: {
                          //@ts-ignore
                          src: imgNode.src,
                          width: '840',
                          title: 'Powered by Super-Preloader Plus',
                          onload: 'if(this.height>"840")this.width=this.width*840/this.height;'
                        }
                      })
                    );
                  }
                });
            }
          }
        }
      }
    }
  },
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
      stylish:
        '.mbbs_code{font-family:Monaco,Consolas,"Lucida Console","Courier New",serif;font-size:12px;line-height:1.8em;list-style-type:decimal-leading-zero;padding-left:10px;background:none repeat scroll 0 0 #f7f7f7;color:#666;border:1px solid #ccc;overflow:hidden;padding:10px 0 5px 10px}',
      filter: function (_pages) {
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
    exampleUrl: 'http://www.firefox.net.cn/forum/viewforum.php?f=4',
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
    exampleUrl: 'http://www.firefox.net.cn/forum/viewtopic.php?t=34339',
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
  },
  {
    name: 'discuz论坛通用搜索',
    url: '^https?://[^/]+/f/(?:discuz|search)',
    nextLink: 'auto;',
    pageElement: 'id("result-items")'
  },
  {
    name: 'View forum - 通用',
    url: '^https?://.+?/viewforum\\.php\\?',
    nextLink:
      '//span[@class="gensmall"]/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class="nav"])[last()]/b[last()]/following-sibling::a[1]  | //div[@class="pagination"]/span/strong/following-sibling::a[1] | //a[text()="Next"]',
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
    pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"] | //div[@id="threadlist" | //div[@id="postlist"]',
    separatorReal: false
  },
  {
    name: '通用 Forum 规则4',
    url: /^https?:\/\/forums\..*\/threads/i,
    nextLink: `(//div[@class="PageNav"])[1]//a[contains(text(),' > ')]`,
    pageElement: '//ol[@id="messageList"]/li',
    separatorReal: false
  },
  {
    name: 'PHPWind 5.3.0 / 6.0.0 / 6.3.2 / 7.0.0 / 7.5.0 - View Thread',
    url: '^https?://.+/read\\.php\\?.*tid((=[0-9]+.*)|(-[0-9]+.*\\.html?))$',
    nextLink: 'auto;',
    pageElement: '//form[@name="delatc"]',
    exampleUrl: 'http://www.yydzh.com/read.php?tid=1584013'
  },
  {
    name: 'Typecho',
    url: '^https?://',
    nextLink: "//ol[@class='page-navigator']/li[@class='next']/a",
    autopager: {
      pageElement: function (doc, _win, _cplink) {
        const gen = getElementByXpath("//head/meta[@name='generator']", doc, doc);
        //@ts-ignore
        if (!gen || !gen.content.includes('Typecho') || !doc.documentElement.outerHTML.includes('Typecho')) {
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
    name: 'WordPress',
    url: '^https?://[^/]+(/page/\\d+)?',
    nextLink: function (_doc, _win, _cplink) {
      const cplink = _cplink.replace(/^(.*)(#[^\/]*)?$/, '$1');
      if (cplink.slice(cplink.length - 5, cplink.length) === '.html') {
        return undefined;
      }
      if (cplink.slice(cplink.length - 4, cplink.length) === '.htm') {
        return undefined;
      }
      const a = /^(https?:\/\/.*?)(\/page\/\d+\/?)?$/.exec(cplink);
      if (a[2]) {
        const b = Number(/\/page\/(\d+)/.exec(a[2])[1]) + 1;
        return cplink.replace(/^(https?:\/\/.*?\/page\/)\d+(.*)$/, '$1' + String(b) + '$2');
      } else {
        return cplink.replace(/^(.*?)\/?$/, '$1') + '/page/2';
      }
    },
    autopager: {
      pageElement: function (doc, win, _cplink) {
        const blackList = [/^https?:\/\/bwg\.net\/?$/, /^https?:\/\/sunbox\.cc\/?$/, /^https?:\/\/anime1\.me/, /^https?:\/\/github\.com/];
        for (var i = 0; i < blackList.length; i++) {
          if (blackList[i].test(_cplink)) {
            return null;
          }
        }
        // detect if this is wordpress
        const wpText = ['wp-content', 'wp-plugin', 'wp-comment'];
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
        const submitComment = ['发表评论', '提交评论', '添加留言', '提交留言', 'コメントを送信', 'SUBMIT COMMENT', 'POST COMMENT', 'Submit Comment', 'Post comment', 'Post Comment'];
        for (i = 0; i < submitComment.length; i++) {
          if (getElementByXpath("//input[@value='" + submitComment[i] + "']", doc, doc)) {
            return null;
          }
          if (getElementByXpath("//a[text()='" + submitComment[i] + "']", doc, doc)) {
            return null;
          }
        }
        if ((document.documentElement.textContent || document.documentElement.innerText).indexOf('comment-form')) {
          // https://www.vlchelp.com/how-to-disable-building-font-cache/
          return null;
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
    name: 'Generic Posts Rule created by swdyh',
    exampleUrl: 'http://wedata.net/items/400.json',
    url: '^https?://.+',
    pageElement:
      "(//article[not(contains(../@class,'widget'))][not(contains(@class,'columns four'))][not(ancestor::*[starts-with(@class,'sidebar')])]|//*[starts-with(@id,'post-')][not(contains(@id,'post-rating'))])[not(.//*[contains(@class,'admz')])][not(id('load-more-posts') or @id='fpost' or contains(@class,'carousel'))][parent::node()[not(self::h2)][not(@id='side')][not(contains(@class,'thumbnail'))][not(following-sibling::*[not(@id='side')][article or *[starts-with(@id,'post-')]])]/*[self::article or starts-with(@id,'post-')][following-sibling::node()[self::article or starts-with(@id,'post-')][not(contains(@id,'nav'))] or not(following-sibling::*)][parent::*[not(contains(@class,'userContent'))]]]|id('content')[count(div)>1]/div[contains(@class,'post')][not(contains(div/@class,'breadcrumb'))][not(contains(div/@class,'nav'))]",
    nextLink:
      "(//*[not(contains(@class,'_inactive'))]/a[starts-with(@class,'nextpostslink') or contains(@class,'next page-numbers') or (.|..)[normalize-space(@rel)='next' or normalize-space(@class)='next' or contains(@class,'pagination-next')]][not(span/@class='link-text')]|//*[contains(@class,'nav-previous')][not(contains(@class,'pull'))]/a|(//*[contains(@class,'current')][number()>0]/following-sibling::a[1]|(//li|//span|//div)[(.//*|.)[contains(@class,'current')]][number()>0]/following-sibling::*[self::li or self::span or self::div][1]/a))[not(starts-with(@href, '#'))]",
    autopager: {
      stylish: '@-moz-document domain("wotopi.jp") { .figure-list{display:flex; flex-wrap:wrap;} }'
    }
  }
];
