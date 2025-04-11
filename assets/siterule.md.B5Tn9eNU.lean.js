import{_ as o,E as a,c as r,o as h,a1 as i,j as e,a as t,I as l}from"./chunks/framework.DAV72BLh.js";const ml=JSON.parse('{"title":"Site rules","description":"","frontmatter":{"sidebarDepth":3},"headers":[],"relativePath":"siterule.md","filePath":"siterule.md","lastUpdated":1744370806000}'),d={name:"siterule.md"},c=i("",9),u=e("strong",null,"type",-1),p=e("code",null,"String",-1),_=e("li",null,[e("strong",null,"description"),t(": name of the website")],-1),g=e("h3",{id:"url",tabindex:"-1"},[t("url "),e("a",{class:"header-anchor",href:"#url","aria-label":'Permalink to "url"'},"​")],-1),m=e("strong",null,"type",-1),f=e("code",null,"XPath String",-1),k=e("code",null,"XPath",-1),b=e("li",null,[e("strong",null,"description"),t(": regular expression to match the URL of the website")],-1),y=e("h3",{id:"enable",tabindex:"-1"},[t("enable "),e("a",{class:"header-anchor",href:"#enable","aria-label":'Permalink to "enable"'},"​")],-1),E=e("strong",null,"type",-1),x=e("code",null,"Boolean",-1),S=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"true")],-1),v=e("li",null,[e("strong",null,"description"),t(": set to false to disable both autopager and preloader")],-1),P=e("h3",{id:"useiframe",tabindex:"-1"},[t("useiframe "),e("a",{class:"header-anchor",href:"#useiframe","aria-label":'Permalink to "useiframe"'},"​")],-1),w=e("strong",null,"type",-1),C=e("code",null,"Boolean",-1),T=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"false")],-1),F=e("li",null,[e("strong",null,"description"),t(": user iframe to preload next page content and display it")],-1),A={id:"exampleurl",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#exampleurl","aria-label":'Permalink to "exampleUrl <Badge text="Optional" type="danger" />"'},"​",-1),D=e("strong",null,"type",-1),q=e("code",null,"String",-1),B=e("li",null,[e("strong",null,"description"),t(": example of the URL")],-1),R=e("h3",{id:"nextlink",tabindex:"-1"},[t("nextLink "),e("a",{class:"header-anchor",href:"#nextlink","aria-label":'Permalink to "nextLink"'},"​")],-1),I=e("p",null,[t("The script finds the URL of "),e("code",null,"next page"),t(" based on "),e("code",null,"nextLink"),t(". We provide a variety of methods to acheive it:")],-1),O=e("p",null,[e("a",{href:"https://devhints.io/xpath",target:"_blank",rel:"noreferrer"},"XPath selector"),t(": an element that has an "),e("code",null,"href"),t(" attribute and points to the next page or an element whose content is the URL of the next page")],-1),J=e("strong",null,"type",-1),N=e("code",null,"XPath String",-1),L=e("code",null,"XPath",-1),W=e("li",null,[e("strong",null,"example"),t(": "),e("code",null,'//div[@id="nav"]/a'),t(", "),e("code",null,'//div[@id="nav"]/a/@href'),t(", both equivalent")],-1),V=e("p",null,[e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noreferrer"},"CSS selector"),e("br")],-1),U=e("strong",null,"type",-1),X=e("code",null,"String",-1),M=e("li",null,[e("strong",null,"content"),t(": "),e("code",null,"css;${CSS selector}")],-1),z=e("li",null,[e("strong",null,"example"),t(": "),e("code",null,"css;div#nav>a")],-1),H=e("p",null,[t("The "),e("a",{href:"./.html"},'"auto;"'),t(" the script will automatically find all "),e("code",null,"text()"),t(' elements containing "next page", "next page" and all '),e("code",null,"a"),t(" elements with "),e("code",null,"href"),t(" attribute.")],-1),$=e("strong",null,"type",-1),G=e("code",null,"String",-1),Y=e("li",null,[e("strong",null,"content"),t(": "),e("code",null,"auto;"),t(" no options")],-1),K=e("p",null,[e("a",{href:"./.html"},"function"),t(" a "),e("code",null,"JS"),t(" function return the link of next page")],-1),Q=e("strong",null,"type",-1),Z=e("code",null,"JS function",-1),ee=e("li",null,[e("strong",null,"content"),t(":")],-1),te=i("",1),le=e("li",null,[e("p",null,[t("The "),e("a",{href:"./.html"},"Array"),t(" script will iterate through all the elements and use "),e("span",{style:{color:"blue","font-weight":"bold"}},"above methods"),t(" until the link of the next page link found")])],-1),ne=e("a",{href:"./.html"},"Object",-1),se=e("code",null,"hrefInc",-1),ie={id:"prevlink",tabindex:"-1"},ae=e("a",{class:"header-anchor",href:"#prevlink","aria-label":'Permalink to "prevLink <Badge text="Optional" type="danger" />"'},"​",-1),oe=e("p",null,[t("It serves the same function as "),e("a",{href:"#nextlink"},"nextLink"),t(" but is designed for previous page. Usually you don't need it 😂")],-1),re=e("h3",{id:"pageelement",tabindex:"-1"},[t("pageElement "),e("a",{class:"header-anchor",href:"#pageelement","aria-label":'Permalink to "pageElement"'},"​")],-1),he=e("p",null,[t("The script finds the elements that are joined together automatically when the page is flipped. For example 🌰 a search engine like Google, "),e("code",null,"pageElement"),t(" should be the searching result. We also provide different methods:")],-1),de=e("p",null,[e("a",{href:"https://devhints.io/xpath",target:"_blank",rel:"noreferrer"},"XPath selector"),t(": The "),e("code",null,"XPath selector"),t(" of the element.")],-1),ce=e("strong",null,"type",-1),ue=e("code",null,"XPath String",-1),pe=e("code",null,"XPath",-1),_e=e("li",null,[e("strong",null,"example"),t(": "),e("code",null,'//div[@id="content]')],-1),ge=e("p",null,[e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noreferrer"},"CSS selector"),e("br")],-1),me=e("strong",null,"type",-1),fe=e("code",null,"String",-1),ke=e("li",null,[e("strong",null,"content"),t(": "),e("code",null,"css;${CSS selector}")],-1),be=e("li",null,[e("strong",null,"example"),t(": "),e("code",null,"css;div#content")],-1),ye=e("p",null,[e("a",{href:"./.html"},"function"),t(" a function returning "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection",target:"_blank",rel:"noreferrer"},"HTMLCollection"),t(" containing the elements. One example is the rule of "),e("code",null,"WordPress"),t(". With the "),e("code",null,"JS"),t(" function we can determine whether a page is a post, if not, return "),e("code",null,"null"),t(" to jump out of the logic of the script, and if so, return the contents of the post. One more 🌰 is some comic websites, we can use "),e("code",null,"pageElement"),t(" to directly calculate the address of the next figure, so as to avoid loading useless content.")],-1),Ee=e("strong",null,"type",-1),xe=e("code",null,"JS function",-1),Se=e("li",null,[e("strong",null,"content"),t(":")],-1),ve=i("",1),Pe=e("h2",{id:"rules-enhancements",tabindex:"-1"},[t("Rules enhancements "),e("a",{class:"header-anchor",href:"#rules-enhancements","aria-label":'Permalink to "Rules enhancements"'},"​")],-1),we=e("code",null,"Object",-1),Ce=e("code",null,"key",-1),Te=e("code",null,"autopager",-1),Fe=e("code",null,"autopager",-1),Ae=e("code",null,"key",-1),je=e("code",null,"key",-1),De=e("h3",{id:"enable-1",tabindex:"-1"},[t("enable "),e("a",{class:"header-anchor",href:"#enable-1","aria-label":'Permalink to "enable"'},"​")],-1),qe=e("strong",null,"type",-1),Be=e("code",null,"Boolean",-1),Re=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"true")],-1),Ie=e("li",null,[e("strong",null,"description"),t(": enable autopager instead of preloadeder")],-1),Oe=e("h3",{id:"useiframe-1",tabindex:"-1"},[t("useiframe "),e("a",{class:"header-anchor",href:"#useiframe-1","aria-label":'Permalink to "useiframe"'},"​")],-1),Je=e("strong",null,"type",-1),Ne=e("code",null,"Boolean",-1),Le=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"false")],-1),We=e("li",null,[e("strong",null,"description"),t(": user iframe to load next page content instead of "),e("a",{href:"https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noreferrer"},"XHR")],-1),Ve=e("h3",{id:"iloaded",tabindex:"-1"},[t("iloaded "),e("a",{class:"header-anchor",href:"#iloaded","aria-label":'Permalink to "iloaded"'},"​")],-1),Ue=e("strong",null,"type",-1),Xe=e("code",null,"Boolean",-1),Me=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"false")],-1),ze=e("li",null,[e("strong",null,"description"),t(": Whether to operate after the iframe is fully loaded.. otherwise the script will start after the DOM is loaded.")],-1),He=e("h3",{id:"itimeout",tabindex:"-1"},[t("itimeout "),e("a",{class:"header-anchor",href:"#itimeout","aria-label":'Permalink to "itimeout"'},"​")],-1),$e=e("strong",null,"type",-1),Ge=e("code",null,"Number",-1),Ye=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"0")],-1),Ke=e("li",null,[e("strong",null,"description"),t(": Delay when "),e("code",null,"iloaded"),t(" is "),e("code",null,"false"),t(", in milliseconds")],-1),Qe=e("h3",{id:"newiframe",tabindex:"-1"},[t("newIframe "),e("a",{class:"header-anchor",href:"#newiframe","aria-label":'Permalink to "newIframe"'},"​")],-1),Ze=e("strong",null,"type",-1),et=e("code",null,"Boolean",-1),tt=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"false")],-1),lt=e("li",null,[e("strong",null,"description"),t(": Whether to create a new "),e("code",null,"iframe"),t(" when flipping the current page +2, in some cases there is a miracle")],-1),nt=e("h3",{id:"reload",tabindex:"-1"},[t("reload "),e("a",{class:"header-anchor",href:"#reload","aria-label":'Permalink to "reload"'},"​")],-1),st=e("strong",null,"type",-1),it=e("code",null,"Boolean",-1),at=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"false")],-1),ot=e("li",null,[e("strong",null,"description"),t(": Force overloading of "),e("code",null,"iframe"),t(", which has some effects in some cases")],-1),rt=e("h3",{id:"force-enable",tabindex:"-1"},[t("force_enable "),e("a",{class:"header-anchor",href:"#force-enable","aria-label":'Permalink to "force_enable"'},"​")],-1),ht=e("strong",null,"type",-1),dt=e("code",null,"Boolean",-1),ct=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"false")],-1),ut=e("li",null,[e("strong",null,"description"),t(": If it is really difficult to find "),e("a",{href:"#pageelement"},"pageElement"),t(", turning this option on will make the entire page spliced ​​up.")],-1),pt=e("h3",{id:"headers",tabindex:"-1"},[t("headers "),e("a",{class:"header-anchor",href:"#headers","aria-label":'Permalink to "headers"'},"​")],-1),_t=e("strong",null,"type",-1),gt=e("code",null,"Object",-1),mt=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"{ Referer: <Link of current page> }")],-1),ft=e("li",null,[e("strong",null,"description"),t(": Customized headers to request next page")],-1),kt=e("h3",{id:"remain",tabindex:"-1"},[t("remain "),e("a",{class:"header-anchor",href:"#remain","aria-label":'Permalink to "remain"'},"​")],-1),bt=e("strong",null,"type",-1),yt=e("code",null,"Number",-1),Et=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"1"),t(" always pre-turns a page")],-1),xt=e("li",null,[e("strong",null,"description"),t(": The script will decide whether to turn the page according to the remaining height of the current page. "),e("code",null,"When the remaining height"),t(" <= "),e("code",null,"page height"),t(" x "),e("code",null,"remain")],-1),St=e("h3",{id:"maxpage",tabindex:"-1"},[t("maxpage "),e("a",{class:"header-anchor",href:"#maxpage","aria-label":'Permalink to "maxpage"'},"​")],-1),vt=e("strong",null,"type",-1),Pt=e("code",null,"Number",-1),wt=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"99")],-1),Ct=e("li",null,[e("strong",null,"description"),t(": Maximum page views")],-1),Tt=e("h3",{id:"ipages",tabindex:"-1"},[t("ipages "),e("a",{class:"header-anchor",href:"#ipages","aria-label":'Permalink to "ipages"'},"​")],-1),Ft=e("strong",null,"type",-1),At=e("code",null,"Array",-1),jt=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"[false,2]")],-1),Dt=e("li",null,[e("strong",null,"description"),t(": Turn the page immediately. The first item is to control whether the second item (must be smaller than maxpage) is turned off immediately when the script is loaded, such as "),e("code",null,"[true,3]"),t(". That is to say, after JS is loaded. . Turn 3 pages immediately. For the map station you can have: the experience of joy:")],-1),qt=e("h3",{id:"separator",tabindex:"-1"},[t("separator "),e("a",{class:"header-anchor",href:"#separator","aria-label":'Permalink to "separator"'},"​")],-1),Bt=e("strong",null,"type",-1),Rt=e("code",null,"Boolean",-1),It=e("li",null,[e("strong",null,"default"),t(": "),e("code",null,"true")],-1),Ot=e("li",null,[e("strong",null,"description"),t(": Whether to display the page navigation bar")],-1),Jt=e("h3",{id:"sepdivdom",tabindex:"-1"},[t("sepdivDom "),e("a",{class:"header-anchor",href:"#sepdivdom","aria-label":'Permalink to "sepdivDom"'},"​")],-1),Nt=e("strong",null,"type",-1),Lt=e("code",null,"JS function",-1),Wt=e("li",null,[e("strong",null,"description"),t(": For some pages, the navigation bar automatically added by the script may cause the page format to be garbled. "),e("code",null,"sepdivDom"),t(" defines a function to generate the appropriate navigation bar that will be inserted after the last "),e("a",{href:"#pageelement"},"pageElement"),t(". An example is "),e("code",null,"小木虫-posts")],-1),Vt=e("li",null,[e("strong",null,"example")],-1),Ut=i("",2),Xt=e("strong",null,"type",-1),Mt=e("code",null,"JS function",-1),zt=e("li",null,[e("strong",null,"description"),t(": A js function that acts on the home page (i.e. current page) to fix the page. Receive "),e("code",null,"currentDocument"),t(", "),e("code",null,"currentWindow"),t(" two parameters. For details, please see "),e("a",{href:"#documentfilter"},"documentFilter (1)")],-1),Ht=e("h3",{id:"documentfilter",tabindex:"-1"},[t("documentFilter "),e("a",{class:"header-anchor",href:"#documentfilter","aria-label":'Permalink to "documentFilter"'},"​")],-1),$t=e("a",{href:"./.html"},"JS function",-1),Gt=e("ul",null,[e("li",null,[e("strong",null,"description"),t(": A js function for prefetching content that can be used to correct prefetched content (such as csdn), remove ads (such as many nsfw), generate page content based on XHR results, and avoid using iframes (such as bl -novel) even generate new content (like m-team). In theory, you can use js to modify the static content of DOM.")]),e("li",null,[e("strong",null,"content"),t(": "),e("code",null,"function (currentDocument, nextPageLink) {return newDocument}")])],-1),Yt=e("li",null,[e("a",{href:"./.html"},'"startFilter"'),e("ul",null,[e("li",null,[e("strong",null,"description"),t(": Reuse "),e("a",{href:"#startfilter"},"startFilter")])])],-1),Kt=e("h3",{id:"scriptfilter",tabindex:"-1"},[t("scriptFilter "),e("a",{class:"header-anchor",href:"#scriptfilter","aria-label":'Permalink to "scriptFilter"'},"​")],-1),Qt=e("strong",null,"type",-1),Zt=i("",1),el=e("h3",{id:"filter",tabindex:"-1"},[t("filter "),e("a",{class:"header-anchor",href:"#filter","aria-label":'Permalink to "filter"'},"​")],-1),tl=e("a",{href:"./.html"},"JS function",-1),ll=e("ul",null,[e("li",null,[e("strong",null,"description"),t(": a js function to manipulate with the preloaded content once it is inserted into the page")]),e("li",null,[e("strong",null,"content"),t(": "),e("code",null,"function (pageElements) {return null}")])],-1),nl=e("h3",{id:"stylish",tabindex:"-1"},[t("stylish "),e("a",{class:"header-anchor",href:"#stylish","aria-label":'Permalink to "stylish"'},"​")],-1),sl=e("strong",null,"type",-1),il=e("code",null,"String",-1),al=e("li",null,[e("strong",null,"description"),t(": [CSS Style] for fixing pages ("),e("a",{href:"https://www.w3schools.com/css/",target:"_blank",rel:"noreferrer"},"https://www.w3schools.com/css/"),t(")")],-1),ol=i("",4);function rl(hl,dl,cl,ul,pl,_l){const n=a("Jbadge"),s=a("Badge");return h(),r("div",null,[c,e("ul",null,[e("li",null,[u,t(": "),p,t(),l(n)]),_]),g,e("ul",null,[e("li",null,[m,t(": "),f,l(n),t(", "),k,l(n,{json:!1})]),b]),y,e("ul",null,[e("li",null,[E,t(": "),x,t(),l(s,{text:"Optional",type:"danger"})]),S,v]),P,e("ul",null,[e("li",null,[w,t(": "),C,t(),l(s,{text:"Optional",type:"danger"})]),T,F]),e("h3",A,[t("exampleUrl "),l(s,{text:"Optional",type:"danger"}),t(),j]),e("ul",null,[e("li",null,[D,t(": "),q,t(),l(n)]),B]),R,I,e("ol",null,[e("li",null,[O,e("ul",null,[e("li",null,[J,t(": "),N,t(),l(n),t(", "),L,t(),l(n,{json:!1})]),W])]),e("li",null,[V,e("ul",null,[e("li",null,[U,t(": "),X,t(),l(n)]),M,z])]),e("li",null,[H,e("ul",null,[e("li",null,[$,t(": "),G,t(),l(n)]),Y])]),e("li",null,[K,e("ul",null,[e("li",null,[Q,t(": "),Z,t(),l(n,{json:!1})]),ee]),te]),le,e("li",null,[e("p",null,[ne,t(" complex mode, check the function "),se,t(" to learn more"),l(n)])])]),e("h3",ie,[t("prevLink "),l(s,{text:"Optional",type:"danger"}),t(),ae]),oe,re,he,e("ol",null,[e("li",null,[de,e("ul",null,[e("li",null,[ce,t(": "),ue,t(),l(n),t(", "),pe,t(),l(n,{json:!1})]),_e])]),e("li",null,[ge,e("ul",null,[e("li",null,[me,t(": "),fe,t(),l(n)]),ke,be])]),e("li",null,[ye,e("ul",null,[e("li",null,[Ee,t(": "),xe,t(),l(n,{json:!1})]),Se]),ve])]),Pe,e("p",null,[t("In addition to the basic elements, the rule can also contain an "),we,t(" with "),Ce,t(" as "),Te,t(" for enhanced functionality. "),Fe,t(" can contain the following "),Ae,t(". All "),je,t(" are "),l(s,{text:"Optional",type:"danger"})]),De,e("ul",null,[e("li",null,[qe,t(": "),Be,t(),l(n)]),Re,Ie]),Oe,e("ul",null,[e("li",null,[Je,t(": "),Ne,t(),l(n)]),Le,We]),Ve,e("ul",null,[e("li",null,[Ue,t(": "),Xe,t(),l(n),l(s,{text:"useriframe: true",type:"danger"})]),Me,ze]),He,e("ul",null,[e("li",null,[$e,t(": "),Ge,t(),l(n),l(s,{text:"useriframe: true",type:"danger"})]),Ye,Ke]),Qe,e("ul",null,[e("li",null,[Ze,t(": "),et,t(),l(n),l(s,{text:"useriframe: true",type:"danger"})]),tt,lt]),nt,e("ul",null,[e("li",null,[st,t(": "),it,t(),l(n),l(s,{text:"useriframe: true",type:"danger"})]),at,ot]),rt,e("ul",null,[e("li",null,[ht,t(": "),dt,t(),l(n),t(),l(s,{text:"Not Recommend",type:"danger"})]),ct,ut]),pt,e("ul",null,[e("li",null,[_t,t(": "),gt,t(),l(n)]),mt,ft]),kt,e("ul",null,[e("li",null,[bt,t(": "),yt,t(),l(n)]),Et,xt]),St,e("ul",null,[e("li",null,[vt,t(": "),Pt,t(),l(n)]),wt,Ct]),Tt,e("ul",null,[e("li",null,[Ft,t(": "),At,t(),l(n)]),jt,Dt]),qt,e("ul",null,[e("li",null,[Bt,t(": "),Rt,t(),l(n)]),It,Ot]),Jt,e("ul",null,[e("li",null,[Nt,t(": "),Lt,t(),l(n,{json:!1})]),Wt,Vt]),Ut,e("ul",null,[e("li",null,[Xt,t(": "),Mt,t(),l(n,{json:!1})]),zt]),Ht,e("ol",null,[e("li",null,[$t,t(),l(n,{json:!1}),Gt]),Yt]),Kt,e("ul",null,[e("li",null,[Qt,t(": String "),l(n)]),Zt]),el,e("ol",null,[e("li",null,[tl,t(),l(n,{json:!1}),ll])]),nl,e("ul",null,[e("li",null,[sl,t(": "),il,t(),l(n)]),al]),ol])}const fl=o(d,[["render",rl]]);export{ml as __pageData,fl as default};
