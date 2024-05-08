---
sidebarDepth: 3
---

# 站点规则

站点规则可以是

- [JavaScript object](https://en.wikipedia.org/wiki/JavaScript) stored in file [https://github.com/machsix/Super-preloader/blob/master/src/rules/jsSiteRule.js](https://github.com/machsix/Super-preloader/blob/master/src/rules/jsSiteRule.js). You need to submit [pull request](https://github.com/machsix/Super-preloader/pulls) through Github
- [JSON data](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON) 存储于[https://github.com/machsix/Super-preloader/blob/master/dist/mydata.json](https://github.com/machsix/Super-preloader/blob/master/dist/mydata.json)的规则. 你可以自行添加到`设置`中的`自定义站点规则`

我们更倾向于[JSON data](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON)因为[JSON]()可以实现热更新. 🌰 在[文末](#例子).

## 规则的基本构成

### name

- **type**: `String` <Jbadge/>
- **description**: 站点名称

### url

- **type**: `XPath String`<Jbadge/>, `XPath`<Jbadge :json="false"/>
- **description**: 匹配站点的正则表达式

### exampleUrl <Badge text="Optional" type="error" />

- **type**: `String` <Jbadge/>
- **description**: 地址范例

### enable

- **type**: `Boolean` <Badge text="Optional" type="error" />
- **default**: `true`
- **description**: 规则开关

### nextLink

脚本依据`nextLink`寻找`下一页`的 URL，我们提供了多种方式：

1. [XPath selector](https://devhints.io/xpath)：拥有`href`属性并指向下一页的元素 或 内容为下一页的元素

   - **type**: `XPath String` <Jbadge/>, `XPath` <Jbadge :json="false"/>
   - **example**: `//div[@id="nav"]/a`, `//div[@id="nav"]/a/@href`,两者等效

2. [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)<br>

   - **type**: `String` <Jbadge/>
   - **content**: `css;${CSS selector}`
   - **example**: `css;div#nav>a`

3. ["auto;"]()脚本会自动寻找所有`text()`为“下一页”, “next page”等预定义的下一页文字且含有`href`属性的`a`的元素

   - **type**: `String` <Jbadge/>
   - **content**: `auto;` 无选项

4. [function]()返回值为下一页链接的`JS`函数

   - **type**: `JS function` <Jbadge :json="false"/>
   - **content**:

   ```js
   function(currentDocument, currentWindow, currentPageURL) {
     // **** your function is here ****
     return urlOfNextPage
   }
   ```

5. [Array]()脚本会遍历所有元素并使用 <span style="color:blue; font-weight:bold">以上方法</span> 直至找到下一页链接地址

6. [Object]()复杂模式，参照函数`hrefInc`<Jbadge/>

### prevLink <Badge text="Optional" type="error" />

同[nextLink](#nextlink), 然而基本没什么时候需要:joy:

### pageElement

脚本根据`pageElement`的定义查找自动翻页时拼接的元素。举个:chestnut:，对于搜索引擎，`pageElement`应为搜索的结果。 我们同样提供了以下方式：

1. [XPath selector](https://devhints.io/xpath)：拼接元素的`XPath selector`

   - **type**: `XPath String` <Jbadge/>, `XPath` <Jbadge :json="false"/>
   - **example**: `//div[@id="content]`

2. [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)<br>

   - **type**: `String` <Jbadge/>
   - **content**: `css;${CSS selector}`
   - **example**: `css;div#content`

3. [function]()返回拼接元素的[HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)的函数。 一个:chestnut:是`WordPress`的规则, 通过`JS`函数我们可以判断一个页面是否是 post，如果不是就返回`null`跳出脚本逻辑，如果是就返回 post 的内容。再一个:chestnut:是某些漫画网站，我们可以使用`pageElement`直接计算下一张图片的地址，从而避免加载无用的内容。

   - **type**: `JS function` <Jbadge :json="false"/>
   - **content**:

   ```js
   function(currentDocument, currentWindow, currentPageURL) {
     // **** your function is here ****
     return HTMLCollection
   }
   ```

## 规则的增强功能

除基本元素外，规则还可包含一个`key`为`autopager`的`Object`以实现增强功能。`autopager`可包含以下`key`。所有`key`都为<Badge text="Optional" type="error" />

### useiframe

- **type**: `Boolean` <Jbadge/>
- **default**: `false`
- **description**: 使用 iframe 读取内容而不使用[XHR](https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest)

### iloaded

- **type**: `Boolean` <Jbadge/><Badge text="useriframe: true" type="error" />
- **default**: `false`
- **description**: 是否在 iframe 完全 load 后操作..否则在 DOM 完成后操作

### itimeout

- **type**: `Number` <Jbadge/><Badge text="useriframe: true" type="error" />
- **default**: `0`
- **description**: `iloaded`为`false`时的延迟，单位为毫秒

### newIframe

- **type**: `Boolean` <Jbadge/><Badge text="useriframe: true" type="error" />
- **default**: `false`
- **description**: 当翻当前页面+2 时是否新建一个`iframe`，在部分情况下有奇效

### reload

- **type**: `Boolean` <Jbadge/><Badge text="useriframe: true" type="error" />
- **default**: `false`
- **description**: 强制重载`iframe`，在部分情况下有奇效

### force_enable

- **type**: `Boolean` <Jbadge/> <Badge text="Not Recommend" type="error" />
- **default**: `false`
- **description**: 如果实在难以找出[pageElement](#pageelement),开启该选项会使整个页面被拼接上去

### headers

- **type**: `Object` <Jbadge/>
- **default**: `{ Referer: <本页链接> }`
- **description**: 自定义请求下一页的 headers

### remain

- **type**: `Number` <Jbadge/>
- **default**: `1` 总是预翻一页
- **description**: 脚本会根据当前页面所剩余的高度决定是否翻页，`当剩余高度` <= `页面高度` x `remain` 时开始翻页

### maxpage

- **type**: `Number` <Jbadge/>
- **default**: `99`
- **description**: 最多翻页次数

### mutationObserver

iframe 监听选项，用来控制主页面和 iframe 之间的通讯，一个例子

```js
{
  timeout: 1000,
  observers: {
    attributes: "//div[@class='x']",   // the node to monitor change of attributes
    addedNodes: "//div[@class='x']",   // the node to monitor MutationRecord.addedNodes
    removedNodes: "//div[@class='x']"  // the node to monitor MutationRecord.removedNodes
  }
}
```

timeout:

- **type**: `Int` <Jbadge/>
- **default**: null
- **description**: 延迟通讯时间

observer:

- **type**: `Array` <Jbadge/>
- **default**: null
- **description**: mutationObserver 监控的 element 的 selector

### ipages

- **type**: `Array` <Jbadge/>
- **default**: `[false,2]`
- **description**: 立即翻页,第一项是控制是否在脚本加载的时候立即翻第二项(必须小于 maxpage)的页数,比如`[true,3]`.就是说 JS 加载后.立即翻 3 页。对于图站可以有:joy:的体验

### separator

- **type**: `Boolean` <Jbadge/>
- **default**: `true`
- **description**: 是否显示翻页导航栏

### sepdivDom

- **type**: `JS function` <Jbadge :json="false"/>
- **description**: 对于部分页面，脚本自动添加的导航栏可能造成页面格式错乱。`sepdivDom`定义了一个函数来生成合适的导航栏，该导航栏会被插入在最后一个[pageElement](#pageelement)之后。 一个例子是`小木虫-帖子`
- **example**

```js
function(currentDocument, sepdiv) {
  // currentDocument: 读取的下一页的DOM
  // sepdiv: 脚本生成的导航栏，tag为div
  const td = doc.createElement("td");
  td.appendChild(sepdiv);
  const tr = doc.createElement("tr");
  td.setAttribute("colspan", 2);
  tr.appendChild(td);
  const tbody = doc.createElement("tbody");
  return tbody;
},
```

### startFilter

- **type**: `JS function` <Jbadge :json="false"/>
- **description**: 一个作用于首页(i.e. 当前页面)的 js 函数，用于修正页面。接收`currentDocument`, `currentWindow`两个参数。 详情请查看[documentFilter (1)](#documentfilter)

### documentFilter

1. [JS function]() <Jbadge :json="false"/>
   - **description**: 一个作用于预读内容整体的 js 函数，执行于预读内容被插入到当前页面前。可以用来修正预读内容(比如 csdn)、去除广告(比如很多 nsfw)、根据 XHR 结果生成页面内容而避免使用 iframe(比如 bl-novel)甚至生成新的内容(比如 m-team)。 理论上你可以用 js 实现对 DOM 静态内容的修改
   - **content**: `function (currentDocument, nextPageLink) {return newDocument}`
2. ["startFilter"]()
   - **description**: 重复使用[startFilter](#startfilter)

### scriptFilter

- **type**: String <Jbadge/>
- **description**: 在将预读内容插入到当前页面之前，脚本默认会移除所有的`<script>`元素。 如果你想保留某些`<script>`, 可以讲 scriptFilter 设置为一个匹配 inline code 或者 src 的正则表达式。 可以参考站点 kongregate

### filter

1. [JS function]() <Jbadge :json="false"/>
   - **description**: 一个作用预读内容 element 的 js 函数，执行于预读内容被插入到当前页面后。
   - **content**: `function (pageElements) {return null}`

### stylish

- **type**: `String` <Jbadge/>
- **description**: 用于修正页面的[CSS 样式](https://www.w3schools.com/css/)

### replaceE

- **description**: 类似[pageElement](#pageelement), 选择用于替换导航栏的`node`。

## 例子

[https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json](https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json)
