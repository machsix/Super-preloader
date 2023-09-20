(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{529:function(t,e,r){"use strict";r.r(e);var a=r(43),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"站点规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#站点规则"}},[t._v("#")]),t._v(" 站点规则")]),t._v(" "),e("p",[t._v("站点规则可以是")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/JavaScript",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript object"),e("OutboundLink")],1),t._v(" stored in file "),e("a",{attrs:{href:"https://github.com/machsix/Super-preloader/blob/master/src/rules/jsSiteRule.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/machsix/Super-preloader/blob/master/src/rules/jsSiteRule.js"),e("OutboundLink")],1),t._v(". You need to submit "),e("a",{attrs:{href:"https://github.com/machsix/Super-preloader/pulls",target:"_blank",rel:"noopener noreferrer"}},[t._v("pull request"),e("OutboundLink")],1),t._v(" through Github")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON data"),e("OutboundLink")],1),t._v(" 存储于"),e("a",{attrs:{href:"https://github.com/machsix/Super-preloader/blob/master/dist/mydata.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/machsix/Super-preloader/blob/master/dist/mydata.json"),e("OutboundLink")],1),t._v("的规则. 你可以自行添加到"),e("code",[t._v("设置")]),t._v("中的"),e("code",[t._v("自定义站点规则")])])]),t._v(" "),e("p",[t._v("我们更倾向于"),e("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON data"),e("OutboundLink")],1),t._v("因为"),e("a",{attrs:{href:""}},[t._v("JSON")]),t._v("可以实现热更新. 🌰 在"),e("RouterLink",{attrs:{to:"/siterule.html#例子"}},[t._v("文末")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"规则的基本构成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则的基本构成"}},[t._v("#")]),t._v(" 规则的基本构成")]),t._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("String")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 站点名称")])]),t._v(" "),e("h3",{attrs:{id:"url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" url")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("XPath String")]),e("Jbadge"),t._v(", "),e("code",[t._v("XPath")]),e("Jbadge",{attrs:{json:!1}})],1),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 匹配站点的正则表达式")])]),t._v(" "),e("h3",{attrs:{id:"exampleurl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exampleurl"}},[t._v("#")]),t._v(" exampleUrl "),e("Badge",{attrs:{text:"Optional",type:"error"}})],1),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("String")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 地址范例")])]),t._v(" "),e("h3",{attrs:{id:"enable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[t._v("#")]),t._v(" enable")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Boolean")]),t._v(" "),e("Badge",{attrs:{text:"Optional",type:"error"}})],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("true")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 规则开关")])]),t._v(" "),e("h3",{attrs:{id:"nextlink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nextlink"}},[t._v("#")]),t._v(" nextLink")]),t._v(" "),e("p",[t._v("脚本依据"),e("code",[t._v("nextLink")]),t._v("寻找"),e("code",[t._v("下一页")]),t._v("的 URL，我们提供了多种方式：")]),t._v(" "),e("ol",[e("li",[e("p",[e("a",{attrs:{href:"https://devhints.io/xpath",target:"_blank",rel:"noopener noreferrer"}},[t._v("XPath selector"),e("OutboundLink")],1),t._v("：拥有"),e("code",[t._v("href")]),t._v("属性并指向下一页的元素 或 内容为下一页的元素")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("XPath String")]),t._v(" "),e("Jbadge"),t._v(", "),e("code",[t._v("XPath")]),t._v(" "),e("Jbadge",{attrs:{json:!1}})],1),t._v(" "),e("li",[e("strong",[t._v("example")]),t._v(": "),e("code",[t._v('//div[@id="nav"]/a')]),t._v(", "),e("code",[t._v('//div[@id="nav"]/a/@href')]),t._v(",两者等效")])])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS selector"),e("OutboundLink")],1),e("br")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("String")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("content")]),t._v(": "),e("code",[t._v("css;${CSS selector}")])]),t._v(" "),e("li",[e("strong",[t._v("example")]),t._v(": "),e("code",[t._v("css;div#nav>a")])])])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:""}},[t._v('"auto;"')]),t._v("脚本会自动寻找所有"),e("code",[t._v("text()")]),t._v("为“下一页”, “next page”等预定义的下一页文字且含有"),e("code",[t._v("href")]),t._v("属性的"),e("code",[t._v("a")]),t._v("的元素")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("String")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("content")]),t._v(": "),e("code",[t._v("auto;")]),t._v(" 无选项")])])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:""}},[t._v("function")]),t._v("返回值为下一页链接的"),e("code",[t._v("JS")]),t._v("函数")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("JS function")]),t._v(" "),e("Jbadge",{attrs:{json:!1}})],1),t._v(" "),e("li",[e("strong",[t._v("content")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("currentDocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentWindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentPageURL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// **** your function is here ****")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" urlOfNextPage\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:""}},[t._v("Array")]),t._v("脚本会遍历所有元素并使用 "),e("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("以上方法")]),t._v(" 直至找到下一页链接地址")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:""}},[t._v("Object")]),t._v("复杂模式，参照函数"),e("code",[t._v("hrefInc")]),e("Jbadge")],1)])]),t._v(" "),e("h3",{attrs:{id:"prevlink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prevlink"}},[t._v("#")]),t._v(" prevLink "),e("Badge",{attrs:{text:"Optional",type:"error"}})],1),t._v(" "),e("p",[t._v("同"),e("a",{attrs:{href:"#nextlink"}},[t._v("nextLink")]),t._v(", 然而基本没什么时候需要😂")]),t._v(" "),e("h3",{attrs:{id:"pageelement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pageelement"}},[t._v("#")]),t._v(" pageElement")]),t._v(" "),e("p",[t._v("脚本根据"),e("code",[t._v("pageElement")]),t._v("的定义查找自动翻页时拼接的元素。举个🌰，对于搜索引擎，"),e("code",[t._v("pageElement")]),t._v("应为搜索的结果。 我们同样提供了以下方式：")]),t._v(" "),e("ol",[e("li",[e("p",[e("a",{attrs:{href:"https://devhints.io/xpath",target:"_blank",rel:"noopener noreferrer"}},[t._v("XPath selector"),e("OutboundLink")],1),t._v("：拼接元素的"),e("code",[t._v("XPath selector")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("XPath String")]),t._v(" "),e("Jbadge"),t._v(", "),e("code",[t._v("XPath")]),t._v(" "),e("Jbadge",{attrs:{json:!1}})],1),t._v(" "),e("li",[e("strong",[t._v("example")]),t._v(": "),e("code",[t._v('//div[@id="content]')])])])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS selector"),e("OutboundLink")],1),e("br")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("String")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("content")]),t._v(": "),e("code",[t._v("css;${CSS selector}")])]),t._v(" "),e("li",[e("strong",[t._v("example")]),t._v(": "),e("code",[t._v("css;div#content")])])])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:""}},[t._v("function")]),t._v("返回拼接元素的"),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLCollection"),e("OutboundLink")],1),t._v("的函数。 一个🌰是"),e("code",[t._v("WordPress")]),t._v("的规则, 通过"),e("code",[t._v("JS")]),t._v("函数我们可以判断一个页面是否是 post，如果不是就返回"),e("code",[t._v("null")]),t._v("跳出脚本逻辑，如果是就返回 post 的内容。再一个🌰是某些漫画网站，我们可以使用"),e("code",[t._v("pageElement")]),t._v("直接计算下一张图片的地址，从而避免加载无用的内容。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("JS function")]),t._v(" "),e("Jbadge",{attrs:{json:!1}})],1),t._v(" "),e("li",[e("strong",[t._v("content")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("currentDocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentWindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentPageURL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// **** your function is here ****")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HTMLCollection\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"规则的增强功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则的增强功能"}},[t._v("#")]),t._v(" 规则的增强功能")]),t._v(" "),e("p",[t._v("除基本元素外，规则还可包含一个"),e("code",[t._v("key")]),t._v("为"),e("code",[t._v("autopager")]),t._v("的"),e("code",[t._v("Object")]),t._v("以实现增强功能。"),e("code",[t._v("autopager")]),t._v("可包含以下"),e("code",[t._v("key")]),t._v("。所有"),e("code",[t._v("key")]),t._v("都为"),e("Badge",{attrs:{text:"Optional",type:"error"}})],1),t._v(" "),e("h3",{attrs:{id:"useiframe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useiframe"}},[t._v("#")]),t._v(" useiframe")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Boolean")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("false")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 使用 iframe 读取内容而不使用"),e("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[t._v("XHR"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"iloaded"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iloaded"}},[t._v("#")]),t._v(" iloaded")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Boolean")]),t._v(" "),e("Jbadge"),e("Badge",{attrs:{text:"useriframe: true",type:"error"}})],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("false")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 是否在 iframe 完全 load 后操作..否则在 DOM 完成后操作")])]),t._v(" "),e("h3",{attrs:{id:"itimeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#itimeout"}},[t._v("#")]),t._v(" itimeout")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Number")]),t._v(" "),e("Jbadge"),e("Badge",{attrs:{text:"useriframe: true",type:"error"}})],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("0")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": "),e("code",[t._v("iloaded")]),t._v("为"),e("code",[t._v("false")]),t._v("时的延迟，单位为毫秒")])]),t._v(" "),e("h3",{attrs:{id:"newiframe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#newiframe"}},[t._v("#")]),t._v(" newIframe")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Boolean")]),t._v(" "),e("Jbadge"),e("Badge",{attrs:{text:"useriframe: true",type:"error"}})],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("false")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 当翻当前页面+2 时是否新建一个"),e("code",[t._v("iframe")]),t._v("，在部分情况下有奇效")])]),t._v(" "),e("h3",{attrs:{id:"reload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reload"}},[t._v("#")]),t._v(" reload")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Boolean")]),t._v(" "),e("Jbadge"),e("Badge",{attrs:{text:"useriframe: true",type:"error"}})],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("false")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 强制重载"),e("code",[t._v("iframe")]),t._v("，在部分情况下有奇效")])]),t._v(" "),e("h3",{attrs:{id:"force-enable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#force-enable"}},[t._v("#")]),t._v(" force_enable")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Boolean")]),t._v(" "),e("Jbadge"),t._v(" "),e("Badge",{attrs:{text:"Not Recommend",type:"error"}})],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("false")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 如果实在难以找出"),e("RouterLink",{attrs:{to:"/siterule.html#pageelement"}},[t._v("pageElement")]),t._v(",开启该选项会使整个页面被拼接上去")],1)]),t._v(" "),e("h3",{attrs:{id:"headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" headers")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Object")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("{ Referer: <本页链接> }")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 自定义请求下一页的 headers")])]),t._v(" "),e("h3",{attrs:{id:"remain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remain"}},[t._v("#")]),t._v(" remain")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Number")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("1")]),t._v(" 总是预翻一页")]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 脚本会根据当前页面所剩余的高度决定是否翻页，"),e("code",[t._v("当剩余高度")]),t._v(" <= "),e("code",[t._v("页面高度")]),t._v(" x "),e("code",[t._v("remain")]),t._v(" 时开始翻页")])]),t._v(" "),e("h3",{attrs:{id:"maxpage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxpage"}},[t._v("#")]),t._v(" maxpage")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Number")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("99")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 最多翻页次数")])]),t._v(" "),e("h3",{attrs:{id:"mutationobserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mutationobserver"}},[t._v("#")]),t._v(" mutationObserver")]),t._v(" "),e("p",[t._v("iframe 监听选项，用来控制主页面和 iframe 之间的通讯，一个例子")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeout")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("observers")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("attributes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"//div[@class='x']\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the node to monitor change of attributes")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("addedNodes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"//div[@class='x']\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the node to monitor MutationRecord.addedNodes")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("removedNodes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"//div[@class='x']\"")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the node to monitor MutationRecord.removedNodes")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("timeout:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Int")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": null")]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 延迟通讯时间")])]),t._v(" "),e("p",[t._v("observer:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Array")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": null")]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": mutationObserver 监控的 element 的 selector")])]),t._v(" "),e("h3",{attrs:{id:"ipages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ipages"}},[t._v("#")]),t._v(" ipages")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Array")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("[false,2]")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 立即翻页,第一项是控制是否在脚本加载的时候立即翻第二项(必须小于 maxpage)的页数,比如"),e("code",[t._v("[true,3]")]),t._v(".就是说 JS 加载后.立即翻 3 页。对于图站可以有😂的体验")])]),t._v(" "),e("h3",{attrs:{id:"separator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#separator"}},[t._v("#")]),t._v(" separator")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("Boolean")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("default")]),t._v(": "),e("code",[t._v("true")])]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 是否显示翻页导航栏")])]),t._v(" "),e("h3",{attrs:{id:"sepdivdom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sepdivdom"}},[t._v("#")]),t._v(" sepdivDom")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("JS function")]),t._v(" "),e("Jbadge",{attrs:{json:!1}})],1),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 对于部分页面，脚本自动添加的导航栏可能造成页面格式错乱。"),e("code",[t._v("sepdivDom")]),t._v("定义了一个函数来生成合适的导航栏，该导航栏会被插入在最后一个"),e("RouterLink",{attrs:{to:"/siterule.html#pageelement"}},[t._v("pageElement")]),t._v("之后。 一个例子是"),e("code",[t._v("小木虫-帖子")])],1),t._v(" "),e("li",[e("strong",[t._v("example")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("currentDocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sepdiv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// currentDocument: 读取的下一页的DOM")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sepdiv: 脚本生成的导航栏，tag为div")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" td "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"td"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  td"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sepdiv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tr"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  td"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"colspan"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  tr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("td"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tbody "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tbody"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tbody"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h3",{attrs:{id:"startfilter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#startfilter"}},[t._v("#")]),t._v(" startFilter")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("JS function")]),t._v(" "),e("Jbadge",{attrs:{json:!1}})],1),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 一个作用于首页(i.e. 当前页面)的 js 函数，用于修正页面。接收"),e("code",[t._v("currentDocument")]),t._v(", "),e("code",[t._v("currentWindow")]),t._v("两个参数。 详情请查看"),e("RouterLink",{attrs:{to:"/siterule.html#documentfilter"}},[t._v("documentFilter (1)")])],1)]),t._v(" "),e("h3",{attrs:{id:"documentfilter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#documentfilter"}},[t._v("#")]),t._v(" documentFilter")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:""}},[t._v("JS function")]),t._v(" "),e("Jbadge",{attrs:{json:!1}}),t._v(" "),e("ul",[e("li",[e("strong",[t._v("description")]),t._v(": 一个作用于预读内容整体的 js 函数，执行于预读内容被插入到当前页面前。可以用来修正预读内容(比如 csdn)、去除广告(比如很多 nsfw)、根据 XHR 结果生成页面内容而避免使用 iframe(比如 bl-novel)甚至生成新的内容(比如 m-team)。 理论上你可以用 js 实现对 DOM 静态内容的修改")]),t._v(" "),e("li",[e("strong",[t._v("content")]),t._v(": "),e("code",[t._v("function (currentDocument, nextPageLink) {return newDocument}")])])])],1),t._v(" "),e("li",[e("a",{attrs:{href:""}},[t._v('"startFilter"')]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("description")]),t._v(": 重复使用"),e("RouterLink",{attrs:{to:"/siterule.html#startfilter"}},[t._v("startFilter")])],1)])])]),t._v(" "),e("h3",{attrs:{id:"scriptfilter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scriptfilter"}},[t._v("#")]),t._v(" scriptFilter")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": String "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 在将预读内容插入到当前页面之前，脚本默认会移除所有的"),e("code",[t._v("<script>")]),t._v("元素。 如果你想保留某些"),e("code",[t._v("<script>")]),t._v(", 可以讲 scriptFilter 设置为一个匹配 inline code 或者 src 的正则表达式。 可以参考站点 kongregate")])]),t._v(" "),e("h3",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" filter")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:""}},[t._v("JS function")]),t._v(" "),e("Jbadge",{attrs:{json:!1}}),t._v(" "),e("ul",[e("li",[e("strong",[t._v("description")]),t._v(": 一个作用预读内容 element 的 js 函数，执行于预读内容被插入到当前页面后。")]),t._v(" "),e("li",[e("strong",[t._v("content")]),t._v(": "),e("code",[t._v("function (pageElements) {return null}")])])])],1)]),t._v(" "),e("h3",{attrs:{id:"stylish"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stylish"}},[t._v("#")]),t._v(" stylish")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type")]),t._v(": "),e("code",[t._v("String")]),t._v(" "),e("Jbadge")],1),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": 用于修正页面的"),e("a",{attrs:{href:"https://www.w3schools.com/css/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 样式"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"replacee"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replacee"}},[t._v("#")]),t._v(" replaceE")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("description")]),t._v(": 类似"),e("RouterLink",{attrs:{to:"/siterule.html#pageelement"}},[t._v("pageElement")]),t._v(", 选择用于替换导航栏的"),e("code",[t._v("node")]),t._v("。")],1)]),t._v(" "),e("h2",{attrs:{id:"例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);