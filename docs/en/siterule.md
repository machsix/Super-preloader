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

We prefer [JSON data](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON) because [JSON]() can implement hot update. An example is shown at the [end](/siterule.md#example).

## The basic composition of the rules

### name

- **type**: `String` <Jbadge/>
- **description**: name of the website

### url

- **type**: `XPath String`<Jbadge/>, `XPath`<Jbadge :json="false"/>
- **description**: regular expression to match the URL of the website

### exampleUrl <Badge text="Optional" type="error" />

- **type**: `String` <Jbadge/>
- **description**: example of the URL

### enable <Badge text="Optional" type="error" />

- **type**: `Boolean` <Jbadge/>
- **default**: `true`
- **description**: switch of the rule

### useiframe <Badge text="Optional" type="error" />

- **type**: `Boolean` <Jbadge/>
- **default**: `false`
- **description**: enable iframe instead of [XHR](https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest)

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

### preLink <Badge text="Optional" type="error" />

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
- **description**: If it is really difficult to find [pageElement](/siterule.md#pageelement), turning this option on will make the entire page spliced ​​up.

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
- **description**: For some pages, the navigation bar automatically added by the script may cause the page format to be garbled. `sepdivDom` defines a function to generate the appropriate navigation bar that will be inserted after the last [pageElement](/siterule.md#pageelement). An example is `小木虫-posts`
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
- **description**: A js function that acts on the home page (i.e. current page) to fix the page. Receive `currentDocument`, `currentWindow` two parameters. For details, please see [documentFilter (1)](/siterule.md#documentfilter)

### documentFilter

1. [JS function]() <Jbadge :json="false"/>
   - **description**: A js function for prefetching content that can be used to correct prefetched content (such as csdn), remove ads (such as many nsfw), generate page content based on XHR results, and avoid using iframes (such as bl -novel) even generate new content (like m-team). In theory, you can use js to modify the static content of DOM.
   - **content**: `function (currentDocument, nextPageLink) {return newDocument}`
2. ["startFilter"]()
   - **description**: Reuse [startFilter](/siterule.md#startfilter)

### stylish

- **type**: `String` <Jbadge/>
- **description**: [CSS Style] for fixing pages (https://www.w3schools.com/css/)

### replaceE

- **description**: Similar to [pageElement](/siterule.md#pageelement), select the `node` to replace the navigation bar.

## example

```js
    {
      Name: "Google search",
      Url: "^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp |search|#|$|\\?)",
      exampleUrl: "http://www.google.com",
      Enable: true,
      Useiframe: false,
      Viewcontent: false,
      nextLink: 'id("pnnext") | id("navbar navcnt nav")//td[span]/
      preLink: '//a[@id="pnprev"]',
      Autopager: {
        Enable: true,
        Useiframe: false,
        Iloaded: false,
        Itimeout: 0,
        newIframe: false,
        pageElement: '//div[@id="ires"]',
        Remain: 1 / 3,
        relatedObj: ["css;div#navcnt", "bottom"], calculation of the total height of the page. (optional)
        replaceE: '//div[@id="navcnt"]',
        Ipages: [false, 2],
        Separator: true,
        sepdivDom: function(doc, sepdiv) {}
        separatorReal: true,
        Maxpage: 66,
        manualA: false,
        HT_insert: ['//div[@id="res"]', 2],
        lazyImgSrc: "imgsrc",
        Stylish: "hr.rgsep{display:none;}" + ".rg_meta{display:none}.bili{display:inline-block;margin:0 6px 6px 0;overflow:hidden;position:relative;vertical-align: Top}._HG{margin-bottom:2px;margin-right:2px}",
        documentFilter: function(doc, nextLink) {
          Const x = doc.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', doc, null, 9, null).singleNodeValue;
          If (x) {
            Try {
              New Function("document", "window", "google", x.nodeValue)(doc, unsafeWindow, unsafeWindow.google);
            } catch (e) {}
          }
        },
        Filter: function() {
        },
        startFilter: function(doc, win) {
          Const script = doc.createElement("script");
          Script.type = "text/javascript";
          script.textContent =
            '\
                Object.defineProperty(window, "rwt", {\
                    Configurable: false,\
                    Enumerable: true,\
                    Get: function () {\
                        Return function() {};\
                    },\
                });\
                ';
          doc.documentElement.appendChild(script);
          doc.documentElement.removeChild(script);

          Const ins = doc.getElementById("ires");
          Const bres = doc.getElementById("bres");
          Const brs = doc.getElementById("brs");
          // var imagexbox = getElementByXpath('//*[@id="imagebox_bigimages"]//parent::div', doc, doc);
          // var rso = doc.getElementById('rso');
          If (ins) {
            If (bres) {
              ins.appendChild(bres);
            }
            If (brs) {
              ins.appendChild(brs);
            }
          }
        }
      }
    }
```
