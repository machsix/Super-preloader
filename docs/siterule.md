---
sidebarDepth: 3
---

# Site rules

> :chestnut: has similar pronounciation as `example` in Chinese

> :joy: I didn't finish the manual translation yet.

> :jp: users: I would like to provide one for you but I don't speak Japanese. PR is welcomed

Site rules can be

- [JavaScript object](https://en.wikipedia.org/wiki/JavaScript) stored in the `SITEINFO` variable
- [JSON data](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON) stored in `dist/mydata.json`

We prefer [JSON data](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON) because [JSON]() can implement hot update. An example is shown at the [end](/en/siterule.md#example).

## The basic composition of the rules

### name

- **type**: `String` <Jbadge/>
- **description**: name of the website

### url

- **type**: `XPath String`<Jbadge/>, `XPath`<Jbadge :json="false"/>
- **description**: regular expression to match the URL of the website

### enable

- **type**: `Boolean` <Badge text="Optional" type="error" />
- **default**: `true`
- **description**: set to false to disable both autopager and preloader

### useiframe

- **type**: `Boolean` <Badge text="Optional" type="error" />
- **default**: `false`
- **description**: user iframe to preload next page content and display it

### exampleUrl <Badge text="Optional" type="error" />

- **type**: `String` <Jbadge/>
- **description**: example of the URL

### nextLink

The script finds the URL of `next page` based on `nextLink`. We provide a variety of methods to acheive it:

1. [XPath selector](https://devhints.io/xpath): an element that has an `href` attribute and points to the next page or an element whose content is the URL of the next page

   - **type**: `XPath String` <Jbadge/>, `XPath` <Jbadge :json="false"/>
   - **example**: `//div[@id="nav"]/a`, `//div[@id="nav"]/a/@href`, both equivalent

2. [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)<br>

   - **type**: `String` <Jbadge/>
   - **content**: `css;${CSS selector}`
   - **example**: `css;div#nav>a`

3. The ["auto;"]() the script will automatically find all `text()` elements containing "next page", "next page" and all `a` elements with `href` attribute.

   - **type**: `String` <Jbadge/>
   - **content**: `auto;` no options

4. [function]() a `JS` function return the link of next page

   - **type**: `JS function` <Jbadge :json="false"/>
   - **content**:

   ```js
   Function(currentDocument, currentWindow, currentPageURL) {
     // **** your function is here ****
     Return urlOfNextPage
   }
   ```

5. The [Array]() script will iterate through all the elements and use <span style="color:blue; font-weight:bold">above methods</span> until the link of the next page link found

6. [Object]() complex mode, check the function `hrefInc` to learn more<Jbadge/>

### prevLink <Badge text="Optional" type="error" />

It serves the same function as [nextLink](#nextlink) but is designed for previous page. Usually you don't need it :joy:

### pageElement

The script finds the elements that are joined together automatically when the page is flipped. For example :chestnut: a search engine like Google, `pageElement` should be the searching result. We also provide different methods:

1. [XPath selector](https://devhints.io/xpath): The `XPath selector` of the element.

   - **type**: `XPath String` <Jbadge/>, `XPath` <Jbadge :json="false"/>
   - **example**: `//div[@id="content]`

2. [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)<br>

   - **type**: `String` <Jbadge/>
   - **content**: `css;${CSS selector}`
   - **example**: `css;div#content`

3. [function]() a function returning [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) containing the elements. One example is the rule of `WordPress`. With the `JS` function we can determine whether a page is a post, if not, return `null` to jump out of the logic of the script, and if so, return the contents of the post. One more :chestnut: is some comic websites, we can use `pageElement` to directly calculate the address of the next figure, so as to avoid loading useless content.

   - **type**: `JS function` <Jbadge :json="false"/>
   - **content**:

   ```js
   Function(currentDocument, currentWindow, currentPageURL) {
     // **** your function is here ****
     Return HTMLCollection
   }
   ```

## Rules enhancements

In addition to the basic elements, the rule can also contain an `Object` with `key` as `autopager` for enhanced functionality. `autopager` can contain the following `key`. All `key` are <Badge text="Optional" type="error" />

### enable

- **type**: `Boolean` <Jbadge/>
- **default**: `true`
- **description**: enable autopager instead of preloadeder

### useiframe

- **type**: `Boolean` <Jbadge/>
- **default**: `false`
- **description**: user iframe to load next page content instead of [XHR](https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest)

### iloaded

- **type**: `Boolean` <Jbadge/><Badge text="useriframe: true" type="error" />
- **default**: `false`
- **description**: Whether to operate after the iframe is fully loaded.. otherwise the script will start after the DOM is loaded.

### itimeout

- **type**: `Number` <Jbadge/><Badge text="useriframe: true" type="error" />
- **default**: `0`
- **description**: Delay when `iloaded` is `false`, in milliseconds

### newIframe

- **type**: `Boolean` <Jbadge/><Badge text="useriframe: true" type="error" />
- **default**: `false`
- **description**: Whether to create a new `iframe` when flipping the current page +2, in some cases there is a miracle

### reload

- **type**: `Boolean` <Jbadge/><Badge text="useriframe: true" type="error" />
- **default**: `false`
- **description**: Force overloading of `iframe`, which has some effects in some cases

### force_enable

- **type**: `Boolean` <Jbadge/> <Badge text="Not Recommend" type="error" />
- **default**: `false`
- **description**: If it is really difficult to find [pageElement](/en/siterule.md#pageelement), turning this option on will make the entire page spliced ​​up.

### headers

- **type**: `Object` <Jbadge/>
- **default**: `{ Referer: <Link of current page> }`
- **description**: Customized headers to request next page

### remain

- **type**: `Number` <Jbadge/>
- **default**: `1` always pre-turns a page
- **description**: The script will decide whether to turn the page according to the remaining height of the current page. `When the remaining height` <= `page height` x `remain`

### maxpage

- **type**: `Number` <Jbadge/>
- **default**: `99`
- **description**: Maximum page views

### ipages

- **type**: `Array` <Jbadge/>
- **default**: `[false,2]`
- **description**: Turn the page immediately. The first item is to control whether the second item (must be smaller than maxpage) is turned off immediately when the script is loaded, such as `[true,3]`. That is to say, after JS is loaded. . Turn 3 pages immediately. For the map station you can have: the experience of joy:

### separator

- **type**: `Boolean` <Jbadge/>
- **default**: `true`
- **description**: Whether to display the page navigation bar

### sepdivDom

- **type**: `JS function` <Jbadge :json="false"/>
- **description**: For some pages, the navigation bar automatically added by the script may cause the page format to be garbled. `sepdivDom` defines a function to generate the appropriate navigation bar that will be inserted after the last [pageElement](/en/siterule.md#pageelement). An example is `小木虫-posts`
- **example**

```js
Function(currentDocument, sepdiv) {
  // currentDocument: read the next page of DOM
  // sepdiv: the navigation bar generated by the script, the tag is div
  Const td = doc.createElement("td");
  td.appendChild(sepdiv);
  Const tr = doc.createElement("tr");
  td.setAttribute("colspan", 2);
  tr.appendChild(td);
  Const tbody = doc.createElement("tbody");
  Return tbody;
},
```

### startFilter

- **type**: `JS function` <Jbadge :json="false"/>
- **description**: A js function that acts on the home page (i.e. current page) to fix the page. Receive `currentDocument`, `currentWindow` two parameters. For details, please see [documentFilter (1)](/en/siterule.md#documentfilter)

### documentFilter

1. [JS function]() <Jbadge :json="false"/>
   - **description**: A js function for prefetching content that can be used to correct prefetched content (such as csdn), remove ads (such as many nsfw), generate page content based on XHR results, and avoid using iframes (such as bl -novel) even generate new content (like m-team). In theory, you can use js to modify the static content of DOM.
   - **content**: `function (currentDocument, nextPageLink) {return newDocument}`
2. ["startFilter"]()
   - **description**: Reuse [startFilter](/en/siterule.md#startfilter)

### scriptFilter

- **type**: String <Jbadge/>
- **description**: The script will delete all `<script>` nodes before inserting the preloaded content into the page. You can set `scriptFilter` as a Regex string to match the `src` or inline content of the `<script>` node to keep some nodes. In this way, you can use these inline js scripts in the [filter](/en/siterule.md#filter)

### filter

1. [JS function]() <Jbadge :json="false"/>
   - **description**: a js function to manipulate with the preloaded content once it is inserted into the page
   - **content**: `function (pageElement) {return null}`

### stylish

- **type**: `String` <Jbadge/>
- **description**: [CSS Style] for fixing pages (https://www.w3schools.com/css/)

### replaceE

- **description**: Similar to [pageElement](/en/siterule.md#pageelement), select the `node` to replace the navigation bar.

## example

[https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json](https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json)
