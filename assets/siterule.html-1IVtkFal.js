import{_ as d,r as c,o as u,c as p,a as n,b as e,d as t,w as i,e as r}from"./app-zg9Rsi_A.js";const h={},_=n("h1",{id:"站点规则",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#站点规则","aria-hidden":"true"},"#"),e(" 站点规则")],-1),m=n("p",null,"站点规则可以是",-1),g={href:"https://en.wikipedia.org/wiki/JavaScript",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/machsix/Super-preloader/blob/master/src/rules/jsSiteRule.js",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/machsix/Super-preloader/pulls",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/machsix/Super-preloader/blob/master/dist/mydata.json",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"设置",-1),y=n("code",null,"自定义站点规则",-1),S={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON",target:"_blank",rel:"noopener noreferrer"},j=n("a",{href:""},"JSON",-1),w=n("h2",{id:"规则的基本构成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#规则的基本构成","aria-hidden":"true"},"#"),e(" 规则的基本构成")],-1),J=n("h3",{id:"name",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#name","aria-hidden":"true"},"#"),e(" name")],-1),O=n("strong",null,"type",-1),E=n("code",null,"String",-1),N=n("li",null,[n("strong",null,"description"),e(": 站点名称")],-1),q=n("h3",{id:"url",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#url","aria-hidden":"true"},"#"),e(" url")],-1),C=n("strong",null,"type",-1),L=n("code",null,"XPath String",-1),P=n("code",null,"XPath",-1),R=n("li",null,[n("strong",null,"description"),e(": 匹配站点的正则表达式")],-1),B={id:"exampleurl",tabindex:"-1"},D=n("a",{class:"header-anchor",href:"#exampleurl","aria-hidden":"true"},"#",-1),X=n("strong",null,"type",-1),W=n("code",null,"String",-1),M=n("li",null,[n("strong",null,"description"),e(": 地址范例")],-1),A=n("h3",{id:"enable",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#enable","aria-hidden":"true"},"#"),e(" enable")],-1),F=n("strong",null,"type",-1),I=n("code",null,"Boolean",-1),U=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"true")],-1),z=n("li",null,[n("strong",null,"description"),e(": 规则开关")],-1),H=n("h3",{id:"nextlink",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nextlink","aria-hidden":"true"},"#"),e(" nextLink")],-1),T=n("p",null,[e("脚本依据"),n("code",null,"nextLink"),e("寻找"),n("code",null,"下一页"),e("的 URL，我们提供了多种方式：")],-1),V={href:"https://devhints.io/xpath",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"href",-1),$=n("strong",null,"type",-1),Y=n("code",null,"XPath String",-1),K=n("code",null,"XPath",-1),Q=n("li",null,[n("strong",null,"example"),e(": "),n("code",null,'//div[@id="nav"]/a'),e(", "),n("code",null,'//div[@id="nav"]/a/@href'),e(",两者等效")],-1),Z={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener noreferrer"},nn=n("br",null,null,-1),en=n("strong",null,"type",-1),tn=n("code",null,"String",-1),sn=n("li",null,[n("strong",null,"content"),e(": "),n("code",null,"css;${CSS selector}")],-1),ln=n("li",null,[n("strong",null,"example"),e(": "),n("code",null,"css;div#nav>a")],-1),on=n("p",null,[n("a",{href:""},'"auto;"'),e("脚本会自动寻找所有"),n("code",null,"text()"),e("为“下一页”, “next page”等预定义的下一页文字且含有"),n("code",null,"href"),e("属性的"),n("code",null,"a"),e("的元素")],-1),an=n("strong",null,"type",-1),rn=n("code",null,"String",-1),cn=n("li",null,[n("strong",null,"content"),e(": "),n("code",null,"auto;"),e(" 无选项")],-1),dn=n("p",null,[n("a",{href:""},"function"),e("返回值为下一页链接的"),n("code",null,"JS"),e("函数")],-1),un=n("strong",null,"type",-1),pn=n("code",null,"JS function",-1),hn=n("li",null,[n("strong",null,"content"),e(":")],-1),_n=r(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">currentDocument<span class="token punctuation">,</span> currentWindow<span class="token punctuation">,</span> currentPageURL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// **** your function is here ****</span>
  <span class="token keyword">return</span> urlOfNextPage
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),mn=n("li",null,[n("p",null,[n("a",{href:""},"Array"),e("脚本会遍历所有元素并使用 "),n("span",{style:{color:"blue","font-weight":"bold"}},"以上方法"),e(" 直至找到下一页链接地址")])],-1),gn=n("a",{href:""},"Object",-1),fn=n("code",null,"hrefInc",-1),kn={id:"prevlink",tabindex:"-1"},bn=n("a",{class:"header-anchor",href:"#prevlink","aria-hidden":"true"},"#",-1),vn=n("p",null,[e("同"),n("a",{href:"#nextlink"},"nextLink"),e(", 然而基本没什么时候需要😂")],-1),xn=n("h3",{id:"pageelement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pageelement","aria-hidden":"true"},"#"),e(" pageElement")],-1),yn=n("p",null,[e("脚本根据"),n("code",null,"pageElement"),e("的定义查找自动翻页时拼接的元素。举个🌰，对于搜索引擎，"),n("code",null,"pageElement"),e("应为搜索的结果。 我们同样提供了以下方式：")],-1),Sn={href:"https://devhints.io/xpath",target:"_blank",rel:"noopener noreferrer"},jn=n("code",null,"XPath selector",-1),wn=n("strong",null,"type",-1),Jn=n("code",null,"XPath String",-1),On=n("code",null,"XPath",-1),En=n("li",null,[n("strong",null,"example"),e(": "),n("code",null,'//div[@id="content]')],-1),Nn={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener noreferrer"},qn=n("br",null,null,-1),Cn=n("strong",null,"type",-1),Ln=n("code",null,"String",-1),Pn=n("li",null,[n("strong",null,"content"),e(": "),n("code",null,"css;${CSS selector}")],-1),Rn=n("li",null,[n("strong",null,"example"),e(": "),n("code",null,"css;div#content")],-1),Bn=n("a",{href:""},"function",-1),Dn={href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection",target:"_blank",rel:"noopener noreferrer"},Xn=n("code",null,"WordPress",-1),Wn=n("code",null,"JS",-1),Mn=n("code",null,"null",-1),An=n("code",null,"pageElement",-1),Fn=n("strong",null,"type",-1),In=n("code",null,"JS function",-1),Un=n("li",null,[n("strong",null,"content"),e(":")],-1),zn=r(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">currentDocument<span class="token punctuation">,</span> currentWindow<span class="token punctuation">,</span> currentPageURL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// **** your function is here ****</span>
  <span class="token keyword">return</span> HTMLCollection
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Hn=n("h2",{id:"规则的增强功能",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#规则的增强功能","aria-hidden":"true"},"#"),e(" 规则的增强功能")],-1),Tn=n("code",null,"key",-1),Vn=n("code",null,"autopager",-1),Gn=n("code",null,"Object",-1),$n=n("code",null,"autopager",-1),Yn=n("code",null,"key",-1),Kn=n("code",null,"key",-1),Qn=n("h3",{id:"useiframe",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#useiframe","aria-hidden":"true"},"#"),e(" useiframe")],-1),Zn=n("strong",null,"type",-1),ne=n("code",null,"Boolean",-1),ee=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"false")],-1),te=n("strong",null,"description",-1),se={href:"https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"},le=n("h3",{id:"iloaded",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#iloaded","aria-hidden":"true"},"#"),e(" iloaded")],-1),oe=n("strong",null,"type",-1),ae=n("code",null,"Boolean",-1),ie=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"false")],-1),re=n("li",null,[n("strong",null,"description"),e(": 是否在 iframe 完全 load 后操作..否则在 DOM 完成后操作")],-1),ce=n("h3",{id:"itimeout",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#itimeout","aria-hidden":"true"},"#"),e(" itimeout")],-1),de=n("strong",null,"type",-1),ue=n("code",null,"Number",-1),pe=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"0")],-1),he=n("li",null,[n("strong",null,"description"),e(": "),n("code",null,"iloaded"),e("为"),n("code",null,"false"),e("时的延迟，单位为毫秒")],-1),_e=n("h3",{id:"newiframe",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#newiframe","aria-hidden":"true"},"#"),e(" newIframe")],-1),me=n("strong",null,"type",-1),ge=n("code",null,"Boolean",-1),fe=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"false")],-1),ke=n("li",null,[n("strong",null,"description"),e(": 当翻当前页面+2 时是否新建一个"),n("code",null,"iframe"),e("，在部分情况下有奇效")],-1),be=n("h3",{id:"reload",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reload","aria-hidden":"true"},"#"),e(" reload")],-1),ve=n("strong",null,"type",-1),xe=n("code",null,"Boolean",-1),ye=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"false")],-1),Se=n("li",null,[n("strong",null,"description"),e(": 强制重载"),n("code",null,"iframe"),e("，在部分情况下有奇效")],-1),je=n("h3",{id:"force-enable",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#force-enable","aria-hidden":"true"},"#"),e(" force_enable")],-1),we=n("strong",null,"type",-1),Je=n("code",null,"Boolean",-1),Oe=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"false")],-1),Ee=n("strong",null,"description",-1),Ne=n("h3",{id:"headers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#headers","aria-hidden":"true"},"#"),e(" headers")],-1),qe=n("strong",null,"type",-1),Ce=n("code",null,"Object",-1),Le=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"{ Referer: <本页链接> }")],-1),Pe=n("li",null,[n("strong",null,"description"),e(": 自定义请求下一页的 headers")],-1),Re=n("h3",{id:"remain",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#remain","aria-hidden":"true"},"#"),e(" remain")],-1),Be=n("strong",null,"type",-1),De=n("code",null,"Number",-1),Xe=r("<li><strong>default</strong>: <code>1</code> 总是预翻一页</li><li><strong>description</strong>: 脚本会根据当前页面所剩余的高度决定是否翻页，<code>当剩余高度</code> &lt;= <code>页面高度</code> x <code>remain</code> 时开始翻页</li>",2),We=n("h3",{id:"maxpage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#maxpage","aria-hidden":"true"},"#"),e(" maxpage")],-1),Me=n("strong",null,"type",-1),Ae=n("code",null,"Number",-1),Fe=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"99")],-1),Ie=n("li",null,[n("strong",null,"description"),e(": 最多翻页次数")],-1),Ue=r(`<h3 id="mutationobserver" tabindex="-1"><a class="header-anchor" href="#mutationobserver" aria-hidden="true">#</a> mutationObserver</h3><p>iframe 监听选项，用来控制主页面和 iframe 之间的通讯，一个例子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token string">&quot;//div[@class=&#39;x&#39;]&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// the node to monitor change of attributes</span>
    <span class="token literal-property property">addedNodes</span><span class="token operator">:</span> <span class="token string">&quot;//div[@class=&#39;x&#39;]&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// the node to monitor MutationRecord.addedNodes</span>
    <span class="token literal-property property">removedNodes</span><span class="token operator">:</span> <span class="token string">&quot;//div[@class=&#39;x&#39;]&quot;</span>  <span class="token comment">// the node to monitor MutationRecord.removedNodes</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>timeout:</p>`,4),ze=n("strong",null,"type",-1),He=n("code",null,"Int",-1),Te=n("li",null,[n("strong",null,"default"),e(": null")],-1),Ve=n("li",null,[n("strong",null,"description"),e(": 延迟通讯时间")],-1),Ge=n("p",null,"observer:",-1),$e=n("strong",null,"type",-1),Ye=n("code",null,"Array",-1),Ke=n("li",null,[n("strong",null,"default"),e(": null")],-1),Qe=n("li",null,[n("strong",null,"description"),e(": mutationObserver 监控的 element 的 selector")],-1),Ze=n("h3",{id:"ipages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ipages","aria-hidden":"true"},"#"),e(" ipages")],-1),nt=n("strong",null,"type",-1),et=n("code",null,"Array",-1),tt=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"[false,2]")],-1),st=n("li",null,[n("strong",null,"description"),e(": 立即翻页,第一项是控制是否在脚本加载的时候立即翻第二项(必须小于 maxpage)的页数,比如"),n("code",null,"[true,3]"),e(".就是说 JS 加载后.立即翻 3 页。对于图站可以有😂的体验")],-1),lt=n("h3",{id:"separator",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#separator","aria-hidden":"true"},"#"),e(" separator")],-1),ot=n("strong",null,"type",-1),at=n("code",null,"Boolean",-1),it=n("li",null,[n("strong",null,"default"),e(": "),n("code",null,"true")],-1),rt=n("li",null,[n("strong",null,"description"),e(": 是否显示翻页导航栏")],-1),ct=n("h3",{id:"sepdivdom",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sepdivdom","aria-hidden":"true"},"#"),e(" sepdivDom")],-1),dt=n("strong",null,"type",-1),ut=n("code",null,"JS function",-1),pt=n("strong",null,"description",-1),ht=n("code",null,"sepdivDom",-1),_t=n("code",null,"小木虫-帖子",-1),mt=n("li",null,[n("strong",null,"example")],-1),gt=r(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">currentDocument<span class="token punctuation">,</span> sepdiv</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// currentDocument: 读取的下一页的DOM</span>
  <span class="token comment">// sepdiv: 脚本生成的导航栏，tag为div</span>
  <span class="token keyword">const</span> td <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;td&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  td<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>sepdiv<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tr <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;tr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  td<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;colspan&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  tr<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>td<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tbody <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;tbody&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> tbody<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="startfilter" tabindex="-1"><a class="header-anchor" href="#startfilter" aria-hidden="true">#</a> startFilter</h3>`,2),ft=n("strong",null,"type",-1),kt=n("code",null,"JS function",-1),bt=n("strong",null,"description",-1),vt=n("code",null,"currentDocument",-1),xt=n("code",null,"currentWindow",-1),yt=n("h3",{id:"documentfilter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#documentfilter","aria-hidden":"true"},"#"),e(" documentFilter")],-1),St=n("a",{href:""},"JS function",-1),jt=n("ul",null,[n("li",null,[n("strong",null,"description"),e(": 一个作用于预读内容整体的 js 函数，执行于预读内容被插入到当前页面前。可以用来修正预读内容(比如 csdn)、去除广告(比如很多 nsfw)、根据 XHR 结果生成页面内容而避免使用 iframe(比如 bl-novel)甚至生成新的内容(比如 m-team)。 理论上你可以用 js 实现对 DOM 静态内容的修改")]),n("li",null,[n("strong",null,"content"),e(": "),n("code",null,"function (currentDocument, nextPageLink) {return newDocument}")])],-1),wt=n("a",{href:""},'"startFilter"',-1),Jt=n("strong",null,"description",-1),Ot=n("h3",{id:"scriptfilter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scriptfilter","aria-hidden":"true"},"#"),e(" scriptFilter")],-1),Et=n("strong",null,"type",-1),Nt=n("li",null,[n("strong",null,"description"),e(": 在将预读内容插入到当前页面之前，脚本默认会移除所有的"),n("code",null,"<script>"),e("元素。 如果你想保留某些"),n("code",null,"<script>"),e(", 可以讲 scriptFilter 设置为一个匹配 inline code 或者 src 的正则表达式。 可以参考站点 kongregate")],-1),qt=n("h3",{id:"filter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#filter","aria-hidden":"true"},"#"),e(" filter")],-1),Ct=n("a",{href:""},"JS function",-1),Lt=n("ul",null,[n("li",null,[n("strong",null,"description"),e(": 一个作用预读内容 element 的 js 函数，执行于预读内容被插入到当前页面后。")]),n("li",null,[n("strong",null,"content"),e(": "),n("code",null,"function (pageElements) {return null}")])],-1),Pt=n("h3",{id:"stylish",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stylish","aria-hidden":"true"},"#"),e(" stylish")],-1),Rt=n("strong",null,"type",-1),Bt=n("code",null,"String",-1),Dt=n("strong",null,"description",-1),Xt={href:"https://www.w3schools.com/css/",target:"_blank",rel:"noopener noreferrer"},Wt=n("h3",{id:"replacee",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#replacee","aria-hidden":"true"},"#"),e(" replaceE")],-1),Mt=n("strong",null,"description",-1),At=n("code",null,"node",-1),Ft=n("h2",{id:"例子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#例子","aria-hidden":"true"},"#"),e(" 例子")],-1),It={href:"https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json",target:"_blank",rel:"noopener noreferrer"};function Ut(zt,Ht){const l=c("ExternalLinkIcon"),a=c("RouterLink"),s=c("Jbadge"),o=c("Badge");return u(),p("div",null,[_,m,n("ul",null,[n("li",null,[n("a",g,[e("JavaScript object"),t(l)]),e(" stored in file "),n("a",f,[e("https://github.com/machsix/Super-preloader/blob/master/src/rules/jsSiteRule.js"),t(l)]),e(". You need to submit "),n("a",k,[e("pull request"),t(l)]),e(" through Github")]),n("li",null,[n("a",b,[e("JSON data"),t(l)]),e(" 存储于"),n("a",v,[e("https://github.com/machsix/Super-preloader/blob/master/dist/mydata.json"),t(l)]),e("的规则. 你可以自行添加到"),x,e("中的"),y])]),n("p",null,[e("我们更倾向于"),n("a",S,[e("JSON data"),t(l)]),e("因为"),j,e("可以实现热更新. 🌰 在"),t(a,{to:"/siterule.html#%E4%BE%8B%E5%AD%90"},{default:i(()=>[e("文末")]),_:1}),e(".")]),w,J,n("ul",null,[n("li",null,[O,e(": "),E,e(),t(s)]),N]),q,n("ul",null,[n("li",null,[C,e(": "),L,t(s),e(", "),P,t(s,{json:!1})]),R]),n("h3",B,[D,e(" exampleUrl "),t(o,{text:"Optional",type:"error"})]),n("ul",null,[n("li",null,[X,e(": "),W,e(),t(s)]),M]),A,n("ul",null,[n("li",null,[F,e(": "),I,e(),t(o,{text:"Optional",type:"error"})]),U,z]),H,T,n("ol",null,[n("li",null,[n("p",null,[n("a",V,[e("XPath selector"),t(l)]),e("：拥有"),G,e("属性并指向下一页的元素 或 内容为下一页的元素")]),n("ul",null,[n("li",null,[$,e(": "),Y,e(),t(s),e(", "),K,e(),t(s,{json:!1})]),Q])]),n("li",null,[n("p",null,[n("a",Z,[e("CSS selector"),t(l)]),nn]),n("ul",null,[n("li",null,[en,e(": "),tn,e(),t(s)]),sn,ln])]),n("li",null,[on,n("ul",null,[n("li",null,[an,e(": "),rn,e(),t(s)]),cn])]),n("li",null,[dn,n("ul",null,[n("li",null,[un,e(": "),pn,e(),t(s,{json:!1})]),hn]),_n]),mn,n("li",null,[n("p",null,[gn,e("复杂模式，参照函数"),fn,t(s)])])]),n("h3",kn,[bn,e(" prevLink "),t(o,{text:"Optional",type:"error"})]),vn,xn,yn,n("ol",null,[n("li",null,[n("p",null,[n("a",Sn,[e("XPath selector"),t(l)]),e("：拼接元素的"),jn]),n("ul",null,[n("li",null,[wn,e(": "),Jn,e(),t(s),e(", "),On,e(),t(s,{json:!1})]),En])]),n("li",null,[n("p",null,[n("a",Nn,[e("CSS selector"),t(l)]),qn]),n("ul",null,[n("li",null,[Cn,e(": "),Ln,e(),t(s)]),Pn,Rn])]),n("li",null,[n("p",null,[Bn,e("返回拼接元素的"),n("a",Dn,[e("HTMLCollection"),t(l)]),e("的函数。 一个🌰是"),Xn,e("的规则, 通过"),Wn,e("函数我们可以判断一个页面是否是 post，如果不是就返回"),Mn,e("跳出脚本逻辑，如果是就返回 post 的内容。再一个🌰是某些漫画网站，我们可以使用"),An,e("直接计算下一张图片的地址，从而避免加载无用的内容。")]),n("ul",null,[n("li",null,[Fn,e(": "),In,e(),t(s,{json:!1})]),Un]),zn])]),Hn,n("p",null,[e("除基本元素外，规则还可包含一个"),Tn,e("为"),Vn,e("的"),Gn,e("以实现增强功能。"),$n,e("可包含以下"),Yn,e("。所有"),Kn,e("都为"),t(o,{text:"Optional",type:"error"})]),Qn,n("ul",null,[n("li",null,[Zn,e(": "),ne,e(),t(s)]),ee,n("li",null,[te,e(": 使用 iframe 读取内容而不使用"),n("a",se,[e("XHR"),t(l)])])]),le,n("ul",null,[n("li",null,[oe,e(": "),ae,e(),t(s),t(o,{text:"useriframe: true",type:"error"})]),ie,re]),ce,n("ul",null,[n("li",null,[de,e(": "),ue,e(),t(s),t(o,{text:"useriframe: true",type:"error"})]),pe,he]),_e,n("ul",null,[n("li",null,[me,e(": "),ge,e(),t(s),t(o,{text:"useriframe: true",type:"error"})]),fe,ke]),be,n("ul",null,[n("li",null,[ve,e(": "),xe,e(),t(s),t(o,{text:"useriframe: true",type:"error"})]),ye,Se]),je,n("ul",null,[n("li",null,[we,e(": "),Je,e(),t(s),e(),t(o,{text:"Not Recommend",type:"error"})]),Oe,n("li",null,[Ee,e(": 如果实在难以找出"),t(a,{to:"/siterule.html#pageelement"},{default:i(()=>[e("pageElement")]),_:1}),e(",开启该选项会使整个页面被拼接上去")])]),Ne,n("ul",null,[n("li",null,[qe,e(": "),Ce,e(),t(s)]),Le,Pe]),Re,n("ul",null,[n("li",null,[Be,e(": "),De,e(),t(s)]),Xe]),We,n("ul",null,[n("li",null,[Me,e(": "),Ae,e(),t(s)]),Fe,Ie]),Ue,n("ul",null,[n("li",null,[ze,e(": "),He,e(),t(s)]),Te,Ve]),Ge,n("ul",null,[n("li",null,[$e,e(": "),Ye,e(),t(s)]),Ke,Qe]),Ze,n("ul",null,[n("li",null,[nt,e(": "),et,e(),t(s)]),tt,st]),lt,n("ul",null,[n("li",null,[ot,e(": "),at,e(),t(s)]),it,rt]),ct,n("ul",null,[n("li",null,[dt,e(": "),ut,e(),t(s,{json:!1})]),n("li",null,[pt,e(": 对于部分页面，脚本自动添加的导航栏可能造成页面格式错乱。"),ht,e("定义了一个函数来生成合适的导航栏，该导航栏会被插入在最后一个"),t(a,{to:"/siterule.html#pageelement"},{default:i(()=>[e("pageElement")]),_:1}),e("之后。 一个例子是"),_t]),mt]),gt,n("ul",null,[n("li",null,[ft,e(": "),kt,e(),t(s,{json:!1})]),n("li",null,[bt,e(": 一个作用于首页(i.e. 当前页面)的 js 函数，用于修正页面。接收"),vt,e(", "),xt,e("两个参数。 详情请查看"),t(a,{to:"/siterule.html#documentfilter"},{default:i(()=>[e("documentFilter (1)")]),_:1})])]),yt,n("ol",null,[n("li",null,[St,e(),t(s,{json:!1}),jt]),n("li",null,[wt,n("ul",null,[n("li",null,[Jt,e(": 重复使用"),t(a,{to:"/siterule.html#startfilter"},{default:i(()=>[e("startFilter")]),_:1})])])])]),Ot,n("ul",null,[n("li",null,[Et,e(": String "),t(s)]),Nt]),qt,n("ol",null,[n("li",null,[Ct,e(),t(s,{json:!1}),Lt])]),Pt,n("ul",null,[n("li",null,[Rt,e(": "),Bt,e(),t(s)]),n("li",null,[Dt,e(": 用于修正页面的"),n("a",Xt,[e("CSS 样式"),t(l)])])]),Wt,n("ul",null,[n("li",null,[Mt,e(": 类似"),t(a,{to:"/siterule.html#pageelement"},{default:i(()=>[e("pageElement")]),_:1}),e(", 选择用于替换导航栏的"),At,e("。")])]),Ft,n("p",null,[n("a",It,[e("https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json"),t(l)])])])}const Vt=d(h,[["render",Ut],["__file","siterule.html.vue"]]);export{Vt as default};
