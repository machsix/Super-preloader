// ==UserScript==
// @name           AutoPagerize
// @namespace      http://swdyh.yu.to/
// @description    loading next page and inserting into current page.
// @include        http://*
// @include        https://*
// @exclude        https://mail.google.com/*
// @exclude        http://b.hatena.ne.jp/*
// @exclude        http://www.facebook.com/plugins/like.php*
// @exclude        http://api.tweetmeme.com/button.js*
// @version        0.0.66
// @updateURL      https://userscripts.org/scripts/source/8551.user.js
// @icon           http://autopagerize.net/img/icons/icon_032.png
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_addStyle
// @grant          GM_log
// @grant          GM_xmlhttpRequest
// @grant          GM_registerMenuCommand
// ==/UserScript==
//
// auther:  swdyh http://d.hatena.ne.jp/swdyh/
// version: 0.0.66 2012-08-31T18:23:34+09:00
//
// this script based on
// GoogleAutoPager(http://la.ma.la/blog/diary_200506231749.htm) and
// estseek autopager(http://la.ma.la/blog/diary_200601100209.htm).
// thanks to ma.la.
//
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//

if (isGreasemonkey()) {
    var ep = getPref('exclude_patterns')
    if (ep && isExclude(ep)) {
        // FIXME
        // return
    }
}
else {
    gmCompatible()
}

var URL = 'http://autopagerize.net/'
var VERSION = '0.0.66'
var DEBUG = false
var AUTO_START = true
var CACHE_EXPIRE = 24 * 60 * 60 * 1000
var BASE_REMAIN_HEIGHT = 400
var FORCE_TARGET_WINDOW = getPref('force_target_window', true)
var XHR_TIMEOUT = 30 * 1000
var SITEINFO_IMPORT_URLS = [
    'http://wedata.net/databases/AutoPagerize/items.json',
]
var COLOR = {
    on: '#0f0',
    off: '#ccc',
    loading: '#0ff',
    terminated: '#00f',
    error: '#f0f'
}
var SITEINFO = [
    /* sample
    {
        url:          'http://(.*).google.+/(search).+',
        nextLink:     'id("navbar")//td[last()]/a',
        pageElement:  '//div[@id="res"]/div',
        exampleUrl:   'http://www.google.com/search?q=nsIObserver',
    },
    */
    /* template
    {
        url:          '',
        nextLink:     '',
        pageElement:  '',
        exampleUrl:   '',
    },
    */
]
var MICROFORMAT = {
    url:          '.*',
    nextLink:     '//a[@rel="next"] | //link[@rel="next"]',
    insertBefore: '//*[contains(@class, "autopagerize_insert_before")]',
    pageElement:  '//*[contains(@class, "autopagerize_page_element")]',
}

var AutoPager = function(info) {
    this.pageNum = 1
    this.info = info
    this.state = AUTO_START ? 'enable' : 'disable'
    var self = this
    var url = this.getNextURL(info.nextLink, document, location.href)

    if ( !url ) {
        debug("getNextURL returns null.", info.nextLink)
        return
    }
    if (info.insertBefore) {
        this.insertPoint = getFirstElementByXPath(info.insertBefore)
    }

    if (!this.insertPoint) {
        var lastPageElement = getElementsByXPath(info.pageElement).pop()
        if (lastPageElement) {
            this.insertPoint = lastPageElement.nextSibling ||
                lastPageElement.parentNode.appendChild(document.createTextNode(' '))
        }
    }

    if (!this.insertPoint) {
        debug("insertPoint not found.", lastPageElement, info.pageElement)
        return
    }

    this.requestURL = url
    this.loadedURLs = {}
    this.loadedURLs[location.href] = true
    var toggle = function() {self.stateToggle()}
    this.toggle = toggle
    GM_registerMenuCommand('AutoPagerize - on/off', toggle)
    this.scroll= function() { self.onScroll() }
    window.addEventListener("scroll", this.scroll, false)

    if (isFirefoxExtension()) {
        var div = document.createElement("div")
        div.setAttribute('id', 'autopagerize_icon')
        div.style.display = 'none'
        document.body.appendChild(div)
        this.icon = div
    }
    else if (isChromeExtension() || isSafariExtension() || isJetpack()) {
        var frame = document.createElement('iframe')
        frame.style.display = 'none'
        frame.style.position = 'fixed'
        frame.style.bottom = '0px'
        frame.style.left = '0px'
        frame.style.height = '25px'
        frame.style.border = '0px'
        frame.style.opacity = '0.8'
        frame.style.zIndex = '1000'
        frame.width = '100%'
        frame.scrolling = 'no'
        this.messageFrame = frame
        var u = settings['extension_path'] ?
            settings['extension_path'] + 'loading.html' :
            'http://autopagerize.net/files/loading.html'
        this.messageFrame.src = u
        document.body.appendChild(frame)
        if (isSafariExtension()) {
            safari.self.tab.dispatchMessage('launched', {url: location.href })
        }
        else if (isChromeExtension()) {
            chrome.extension.connect({name: "launched"}).postMessage()
        }
        if (isJetpack()) {
            postMessage({name: 'launched', data: location.href })
        }
   }
    else {
        this.initIcon()
        this.initHelp()
        GM_addStyle('@media print{#autopagerize_icon, #autopagerize_help {display: none !important;}}')
        GM_addStyle('hr.autopagerize_page_separator {clear: both;}')
        this.icon.addEventListener("mouseover", function() {
            self.viewHelp()
        }, true)
    }

    var scrollHeight = getScrollHeight()
    var bottom = getElementPosition(this.insertPoint).top ||
        this.getPageElementsBottom() ||
        (Math.round(scrollHeight * 0.8))
    this.remainHeight = scrollHeight - bottom + BASE_REMAIN_HEIGHT
    this.onScroll()

    var that = this
    document.addEventListener('AutoPagerizeToggleRequest', function() {
        that.toggle()
    }, false)
    document.addEventListener('AutoPagerizeUpdateIconRequest', function() {
        that.updateIcon()
    }, false)
    that.updateIcon()
}

AutoPager.prototype.getPageElementsBottom = function() {
    try {
        var elem = getElementsByXPath(this.info.pageElement).pop()
        return getElementBottom(elem)
    }
    catch(e) {}
}

AutoPager.prototype.initHelp = function() {
    var helpDiv = document.createElement('div')
    helpDiv.setAttribute('id', 'autopagerize_help')
    helpDiv.setAttribute('style', 'padding:5px;position:fixed;' +
                     'top:-200px;right:3px;font-size:10px;' +
                     'background:#fff;color:#000;border:1px solid #ccc;' +
                     'z-index:256;text-align:left;font-weight:normal;' +
                     'line-height:120%;font-family:verdana;')

    var toggleDiv = document.createElement('div')
    toggleDiv.setAttribute('style', 'margin:0 0 0 50px;')
    var a = document.createElement('a')
    a.setAttribute('class', 'autopagerize_link')
    a.innerHTML = 'on/off'
    a.href = 'javascript:void(0)'
    var self = this
    var toggle = function() {
        self.stateToggle()
        helpDiv.style.top = '-200px'
    }
    a.addEventListener('click', toggle, false)
    toggleDiv.appendChild(a)

    var s = '<div style="width:100px; float:left;">'
    for (var i in COLOR) {
        s += '<div style="float:left;width:1em;height:1em;' +
            'margin:0 3px;background-color:' + COLOR[i] + ';' +
            '"></div><div style="margin:0 3px">' + i + '</div>'
    }
    s += '</div>'
    var colorDiv = document.createElement('div')
    colorDiv.innerHTML = s
    helpDiv.appendChild(colorDiv)
    helpDiv.appendChild(toggleDiv)

    var versionDiv = document.createElement('div')
    versionDiv.setAttribute('style', 'clear:both;')
    versionDiv.innerHTML = '<a href="' + URL +
        '">AutoPagerize</a> ver ' + VERSION
    helpDiv.appendChild(versionDiv)
    document.body.appendChild(helpDiv)

    var proc = function(e) {
        var c_style = document.defaultView.getComputedStyle(helpDiv, '')
        var s = ['top', 'left', 'height', 'width'].map(function(i) {
            return parseInt(c_style.getPropertyValue(i)) })
        if (e.clientX < s[1] || e.clientX > (s[1] + s[3] + 11) ||
            e.clientY < s[0] || e.clientY > (s[0] + s[2] + 11)) {
                helpDiv.style.top = '-200px'
        }
    }
    helpDiv.addEventListener('mouseout', proc, false)
    this.helpLayer = helpDiv
    GM_addStyle('#autopagerize_help a { color: #0f0; text-decoration: underline;}')
}

AutoPager.prototype.viewHelp = function() {
    this.helpLayer.style.top = '3px'
}

AutoPager.prototype.onScroll = function() {
    var scrollHeight = Math.max(document.documentElement.scrollHeight,
                                document.body.scrollHeight)
    var remain = scrollHeight - window.innerHeight - window.scrollY
    if (this.state == 'enable' && remain < this.remainHeight) {
          this.request()
    }
}

AutoPager.prototype.stateToggle = function() {
    if (this.state == 'enable') {
        this.disable()
    }
    else {
        this.enable()
    }
}

AutoPager.prototype.enable = function() {
    this.state = 'enable'
    this.updateIcon()
}

AutoPager.prototype.disable = function() {
    this.state = 'disable'
    this.updateIcon()
}

AutoPager.prototype.updateIcon = function(state) {
    var st = state || this.state
    var rename = {'enable': 'on', 'disable': 'off' }
    if (rename[st]) {
        st = rename[st]
    }
    var color = COLOR[st]
    if (color) {
        if (isFirefoxExtension()) {
            chlorine.pageAction.update(color, location.href)
        }
        else if (isChromeExtension()) {
            chrome.extension.connect({name: "pageActionChannel"}).postMessage(color)
        }
        else if (isSafariExtension() || isJetpack()) {
        }
        else {
            this.icon.style.background = color
        }
    }
}

AutoPager.prototype.request = function() {
    if (!this.requestURL || this.lastRequestURL == this.requestURL) {
        return
    }
    this.lastRequestURL = this.requestURL
    var self = this
    var mime = 'text/html; charset=' + document.characterSet
    var headers = {}

    if (isSameDomain(this.requestURL)) {
        headers.Cookie = document.cookie
    }
    else {
        this.error()
        return
    }
    var opt = {
        method: 'get',
        url: this.requestURL,
        headers: headers,
        overrideMimeType: mime,
        onerror: function(res) {
            self.error()
        },
        onload: function(res) {
            if (res.finalUrl) {
                var url_s = res.finalUrl.split(/[\/\?]/)
                if (url_s[0] == location.protocol && location.host == url_s[2]) {
                    self.requestLoad.apply(self, [res])
                    return
                }
            }
            self.error()
        }
    }
    AutoPager.requestFilters.forEach(function(i) { i(opt) }, this)
    if (opt.stop) {
        this.requestURL = opt.url
    }
    else {
        this.showLoading(true)
        GM_xmlhttpRequest(opt)
    }
}

AutoPager.prototype.showLoading = function(sw) {
    if (sw) {
        this.updateIcon('loading')
        if (this.messageFrame && settings['display_message_bar']) {
            this.messageFrame.style.display = 'block'
        }
    }
    else {
        this.updateIcon('enable')
        if (this.messageFrame) {
            this.messageFrame.style.display = 'none'
        }
    }
}

AutoPager.prototype.requestLoad = function(res) {
    AutoPager.responseFilters.forEach(function(i) {
        i(res, this.requestURL)
    }, this)
    var htmlDoc = createHTMLDocumentByString(res.responseText)
    AutoPager.documentFilters.forEach(function(i) {
        i(htmlDoc, this.requestURL, this.info)
    }, this)
    try {
        var page = getElementsByXPath(this.info.pageElement, htmlDoc)
        var url = this.getNextURL(this.info.nextLink, htmlDoc, this.requestURL)
    }
    catch(e){
        log(e)
        this.error()
        return
    }

    if (!page || page.length < 1 ) {
        debug('pageElement not found.' , this.info.pageElement)
        this.terminate()
        return
    }

    if (this.loadedURLs[this.requestURL]) {
        debug('page is already loaded.', this.requestURL, this.info.nextLink)
        this.terminate()
        return
    }

    this.loadedURLs[this.requestURL] = true
    page = this.addPage(htmlDoc, page)
    AutoPager.filters.forEach(function(i) {
        i(page)
    })
    this.requestURL = url
    this.showLoading(false)
    this.onScroll()
    if (!url) {
        debug('nextLink not found.', this.info.nextLink, htmlDoc)
        this.terminate()
    }
    var ev = document.createEvent('Event')
    ev.initEvent('GM_AutoPagerizeNextPageLoaded', true, false)
    document.dispatchEvent(ev)
}

AutoPager.prototype.addPage = function(htmlDoc, page) {
    var HTML_NS  = 'http://www.w3.org/1999/xhtml'
    var hr = document.createElementNS(HTML_NS, 'hr')
    var p  = document.createElementNS(HTML_NS, 'p')
    hr.setAttribute('class', 'autopagerize_page_separator')
    p.setAttribute('class', 'autopagerize_page_info')
    var self = this

    if (page[0] && /tr/i.test(page[0].tagName)) {
        var insertParent = this.insertPoint.parentNode
        var colNodes = getElementsByXPath('child::tr[1]/child::*[self::td or self::th]', insertParent)

        var colums = 0
        for (var i = 0, l = colNodes.length; i < l; i++) {
            var col = colNodes[i].getAttribute('colspan')
            colums += parseInt(col, 10) || 1
        }
        var td = document.createElement('td')
        // td.appendChild(hr)
        td.appendChild(p)
        var tr = document.createElement('tr')
        td.setAttribute('colspan', colums)
        tr.appendChild(td)
        insertParent.insertBefore(tr, this.insertPoint)
    }
    else {
        this.insertPoint.parentNode.insertBefore(hr, this.insertPoint)
        this.insertPoint.parentNode.insertBefore(p, this.insertPoint)
    }

    p.innerHTML = 'page: <a class="autopagerize_link" href="' +
        this.requestURL.replace(/&/g, '&amp;') + '">' + (++this.pageNum) + '</a>'
    return page.map(function(i) {
        var pe = document.importNode(i, true)
        self.insertPoint.parentNode.insertBefore(pe, self.insertPoint)
        var ev = document.createEvent('MutationEvent')
        ev.initMutationEvent('AutoPagerize_DOMNodeInserted', true, false,
                             self.insertPoint.parentNode, null,
                             self.requestURL, null, null)
        pe.dispatchEvent(ev)
        return pe
    })
}

AutoPager.prototype.initIcon = function() {
    var div = document.createElement("div")
    div.setAttribute('id', 'autopagerize_icon')
    with (div.style) {
        fontSize   = '12px'
        position   = 'fixed'
        top        = '3px'
        right      = '3px'
        background = COLOR['on']
        color      = '#fff'
        width = '10px'
        height = '10px'
        zIndex = '255'
        if (this.state != 'enable') {
            background = COLOR['off']
        }
    }
    document.body.appendChild(div)
    this.icon = div
}

AutoPager.prototype.getNextURL = function(xpath, doc, url) {
    var nextLink = getFirstElementByXPath(xpath, doc)
    if (nextLink) {
        var nextValue = nextLink.getAttribute('href') ||
            nextLink.getAttribute('action') || nextLink.value
        if (nextValue.match(/^http(s)?:/)) {
            return nextValue
        }
        else {
            var base = getFirstElementByXPath('//base[@href]', doc)
            return resolvePath(nextValue, (base ? base.href : url))
        }
    }
}

AutoPager.prototype.terminate = function() {
    window.removeEventListener('scroll', this.scroll, false)
    this.updateIcon('terminated')
    var self = this
    setTimeout(function() {
        if (self.icon) {
            self.icon.parentNode.removeChild(self.icon)
        }
        if (isSafariExtension()) {
            var mf = self.messageFrame
            mf.parentNode.removeChild(mf)
        }
    }, 1500)
}

AutoPager.prototype.error = function() {
    this.updateIcon('error')
    window.removeEventListener('scroll', this.scroll, false)
    if (isSafariExtension() || isChromeExtension() || isJetpack()) {
        var mf = this.messageFrame
        var u = settings['extension_path'] ?
            settings['extension_path'] + 'error.html' :
            'http://autopagerize.net/files/error.html'
        mf.src = u
        mf.style.display = 'block'
        setTimeout(function() {
            mf.parentNode.removeChild(mf)
        }, 3000)
    }
}

AutoPager.documentFilters = []
AutoPager.requestFilters = []
AutoPager.responseFilters = []
AutoPager.filters = []

var parseInfo = function(str) {
    var lines = str.split(/\r\n|\r|\n/)
    var re = /(^[^:]*?):(.*)$/
    var strip = function(str) {
        return str.replace(/^\s*/, '').replace(/\s*$/, '')
    }
    var info = {}
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].match(re)) {
            info[RegExp.$1] = strip(RegExp.$2)
        }
    }
    var isValid = function(info) {
        var infoProp = ['url', 'nextLink', 'pageElement']
        for (var i = 0; i < infoProp.length; i++) {
            if (!info[infoProp[i]]) {
                return false
            }
        }
        return true
    }
    return isValid(info) ? info : null
}
var launchAutoPager = function(list) {
    if (list.length == 0) {
        return
    }
    for (var i = 0; i < list.length; i++) {
        try {
            if (ap) {
                return
            }
            else if (!location.href.match(list[i].url)) {
            }
            else if (!getFirstElementByXPath(list[i].nextLink)) {
                // FIXME microformats case detection.
                // limiting greater than 12 to filter microformats like SITEINFOs.
                if (list[i].url.length > 12 ) {
                    debug("nextLink not found.", list[i].nextLink)
                }
            }
            else if (!getFirstElementByXPath(list[i].pageElement)) {
                if (list[i].url.length > 12 ) {
                    debug("pageElement not found.", list[i].pageElement)
                }
            }
            else {
                ap = new AutoPager(list[i])
                return
            }
        }
        catch(e) {
            log(e)
            continue
        }
    }
}
var clearCache = function() {
    GM_setValue('cacheInfo', '')
}
var getCache = function() {
    try {
        return JSON.parse(GM_getValue('cacheInfo')) || {}
    }
    catch(e) {
        return {}
    }
}
var getCacheCallback = function(res, url) {
    if (res.status != 200) {
        return getCacheErrorCallback(url)
    }

    var info
    try {
        info = JSON.parse(res.responseText).map(function(i) { return i.data })
    }
    catch(e) {
        info = []
    }
    if (info.length > 0) {
        info = info.filter(function(i) { return ('url' in i) })
        info.sort(function(a, b) { return (b.url.length - a.url.length) })

        var r_keys = ['url', 'nextLink', 'insertBefore', 'pageElement']
        info = info.map(function(i) {
            var item = {}
            r_keys.forEach(function(key) {
                if (i[key]) {
                    item[key] = i[key]
                }
            })
            return item
        })

        cacheInfo[url] = {
            url: url,
            expire: new Date(new Date().getTime() + CACHE_EXPIRE),
            info: info
        }
        GM_setValue('cacheInfo', JSON.stringify(cacheInfo))
        launchAutoPager(info)
    }
    else {
        getCacheErrorCallback(url)
    }
}
var getCacheErrorCallback = function(url) {
    var expire = new Date(new Date().getTime() + CACHE_EXPIRE)
    if (cacheInfo[url]) {
        cacheInfo[url].expire = expire
        launchAutoPager(cacheInfo[url].info)
    }
    else {
        cacheInfo[url] = {
            url: url,
            expire: expire,
            info: []
        }
    }
    GM_setValue('cacheInfo', cacheInfo.toSource())
}

var linkFilter = function(doc, url) {
    var base = getFirstElementByXPath('//base[@href]', doc)
    var baseUrl = base ? base.href : url
    var isSameBase = isSameBaseUrl(location.href, baseUrl)
    if (!FORCE_TARGET_WINDOW && isSameBase) {
        return
    }

    var anchors = getElementsByXPath('descendant-or-self::a[@href]', doc)
    anchors.forEach(function(i) {
        var attrHref = i.getAttribute('href')
        if (FORCE_TARGET_WINDOW && !attrHref.match(/^#|^javascript:/) &&
            i.className.indexOf('autopagerize_link') < 0) {
            i.target = '_blank'
        }
        if (!isSameBase && !attrHref.match(/^#|^\w+:/)) {
            i.href = resolvePath(i.getAttribute('href'), baseUrl)
        }
    })

    if (!isSameBase) {
        var images = getElementsByXPath('descendant-or-self::img', doc)
        images.forEach(function(i) {
            i.src = resolvePath(i.getAttribute('src'), baseUrl)
        })
    }
}
AutoPager.documentFilters.push(linkFilter)

fixResolvePath()

if (typeof(window.AutoPagerize) == 'undefined') {
    window.AutoPagerize = {}
    window.AutoPagerize.addFilter = function(f) {
        AutoPager.filters.push(f)
    }
    window.AutoPagerize.addDocumentFilter = function(f) {
        AutoPager.documentFilters.push(f)
    }
    window.AutoPagerize.addResponseFilter = function(f) {
        AutoPager.responseFilters.push(f)
    }
    window.AutoPagerize.addRequestFilter = function(f) {
        AutoPager.requestFilters.push(f)
    }
    window.AutoPagerize.launchAutoPager = launchAutoPager

    var ev = document.createEvent('Event')
    ev.initEvent('GM_AutoPagerizeLoaded', true, false)
    document.dispatchEvent(ev)
}

var settings = {}
var ap = null
if (isChromeExtension()) {
    var port = chrome.extension.connect({name: "settingsChannel"})
    port.postMessage()
    port.onMessage.addListener(function(res) {
        settings = res
        if (res['exclude_patterns'] && isExclude(res['exclude_patterns'])) {
            return
        }
        launchAutoPager(SITEINFO)
        var port_ = chrome.extension.connect({name: "siteinfoChannel"})
        port_.postMessage({ url: location.href })
        port_.onMessage.addListener(function(res) {
            launchAutoPager(res)
            chrome.extension.onConnect.addListener(function(port) {
                if (port.name == "toggleRequestChannel") {
                    port.onMessage.addListener(function(msg) {
                        if (ap) {
                            ap.toggle()
                        }
                    })
                }
            })
        })
    })
}
else if (isSafariExtension()) {
    var re_exclude = /^(about:|safari-extension:)/
    if (!location.href.match(re_exclude)) {
        safari.self.addEventListener('message', function(event) {
            if (event.name === 'settings') {
                settings = event.message
                safari.self.tab.dispatchMessage('siteinfoChannel', {url: location.href })
            }
            else if (event.name === 'siteinfoChannel') {
                if (!settings['exclude_patterns'] || !isExclude(settings['exclude_patterns'])) {
                    launchAutoPager(SITEINFO)
                    launchAutoPager([MICROFORMAT])
                    launchAutoPager(event.message)
                }
            }
            else if (event.name === 'toggleRequestChannel') {
                if (ap) {
                    ap.toggle()
                }
            }
            else if (event.name === 'updateSettings') {
                settings = event.message
            }
        }, false)
        safari.self.tab.dispatchMessage('settings')
    }
}
else if (isJetpack()) {
    postMessage({ name: 'settings' })
    onMessage = function(message) {
        if (message.name == 'siteinfo') {
            // launchAutoPager(SITEINFO)
            launchAutoPager(message.data)
        }
        else if (message.name == 'settings') {
            settings = message.data
            if (settings['exclude_patterns'] && isExclude(settings['exclude_patterns'])) {
                // return
            }
            else  {
                postMessage({ name: 'siteinfo', url: location.href })
                launchAutoPager([MICROFORMAT])
            }
        }
    }
}
else {
    launchAutoPager(SITEINFO)
    GM_registerMenuCommand('AutoPagerize - clear cache', clearCache)
    var cacheInfo = getCache()
    var xhrStates = {}
    SITEINFO_IMPORT_URLS.forEach(function(i) {
        if (!cacheInfo[i] || new Date(cacheInfo[i].expire) < new Date()) {
            var opt = {
                method: 'get',
                url: i,
                onload: function(res) {
                    xhrStates[i] = 'loaded'
                    getCacheCallback(res, i)
                },
                onerror: function(res){
                    xhrStates[i] = 'error'
                    getCacheErrorCallback(i)
                },
            }
            xhrStates[i] = 'start'
            GM_xmlhttpRequest(opt)
            setTimeout(function() {
                if (xhrStates[i] == 'start') {
                    getCacheErrorCallback(i)
                }
            }, XHR_TIMEOUT)
        }
        else {
            launchAutoPager(cacheInfo[i].info)
        }
    })
    launchAutoPager([MICROFORMAT])
}


// new google search sucks!
if (location.href.match('^http://[^.]+\.google\.(?:[^.]{2,3}\.)?[^./]{2,3}/.*(&fp=)')) {
    var to = location.href.replace(/&fp=.*/, '')
    // console.log([location.href, to])
    location.href = to
}




// utility functions.
function createHTMLDocumentByString(str) {
    if (document.documentElement.nodeName != 'HTML') {
        return new DOMParser().parseFromString(str, 'application/xhtml+xml')
    }
    var html = strip_html_tag(str)
    var htmlDoc
    try {
        // We have to handle exceptions since Opera 9.6 throws
        // a NOT_SUPPORTED_ERR exception for |document.cloneNode(false)|
        // against the DOM 3 Core spec.
        htmlDoc = document.cloneNode(false)
        htmlDoc.appendChild(htmlDoc.importNode(document.documentElement, false))
    }
    catch(e) {
        htmlDoc = document.implementation.createDocument(null, 'html', null)
    }
    var fragment = createDocumentFragmentByString(html)
    try {
        fragment = htmlDoc.adoptNode(fragment)
    }
    catch(e) {
        fragment = htmlDoc.importNode(fragment, true)
    }
    htmlDoc.documentElement.appendChild(fragment)
    return htmlDoc
}

function getElementsByXPath(xpath, node) {
    var nodesSnapshot = getXPathResult(xpath, node,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE)
    var data = []
    for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
        data.push(nodesSnapshot.snapshotItem(i))
    }
    return data
}

function getFirstElementByXPath(xpath, node) {
    var result = getXPathResult(xpath, node,
        XPathResult.FIRST_ORDERED_NODE_TYPE)
    return result.singleNodeValue
}

function getXPathResult(xpath, node, resultType) {
    var node = node || document
    var doc = node.ownerDocument || node
    var resolver = doc.createNSResolver(node.documentElement || node)
    // Use |node.lookupNamespaceURI('')| for Opera 9.5
    // A workaround for bugs of Node.lookupNamespaceURI(null)
    // https://bugzilla.mozilla.org/show_bug.cgi?id=693615
    // https://bugzilla.mozilla.org/show_bug.cgi?id=694754
    var defaultNS = null
    try {
        // This follows the spec: http://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespaceURIAlgo
        if (node.nodeType == node.DOCUMENT_NODE) {
            defaultNS = node.documentElement.lookupNamespaceURI(null)
        }
        else {
            defaultNS = node.lookupNamespaceURI(null)
        }
    }
    catch(e) {}

    if (defaultNS) {
        const defaultPrefix = '__default__'
        xpath = addDefaultPrefix(xpath, defaultPrefix)
        var defaultResolver = resolver
        resolver = function (prefix) {
            return (prefix == defaultPrefix)
                ? defaultNS : defaultResolver.lookupNamespaceURI(prefix)
        }
    }
    return doc.evaluate(xpath, node, resolver, resultType, null)
}

function addDefaultPrefix(xpath, prefix) {
    const tokenPattern = /([A-Za-z_\u00c0-\ufffd][\w\-.\u00b7-\ufffd]*|\*)\s*(::?|\()?|(".*?"|'.*?'|\d+(?:\.\d*)?|\.(?:\.|\d+)?|[\)\]])|(\/\/?|!=|[<>]=?|[\(\[|,=+-])|([@$])/g
    const TERM = 1, OPERATOR = 2, MODIFIER = 3
    var tokenType = OPERATOR
    prefix += ':'
    function replacer(token, identifier, suffix, term, operator, modifier) {
        if (suffix) {
            tokenType =
                (suffix == ':' || (suffix == '::' &&
                 (identifier == 'attribute' || identifier == 'namespace')))
                ? MODIFIER : OPERATOR
        }
        else if (identifier) {
            if (tokenType == OPERATOR && identifier != '*') {
                token = prefix + token
            }
            tokenType = (tokenType == TERM) ? OPERATOR : TERM
        }
        else {
            tokenType = term ? TERM : operator ? OPERATOR : MODIFIER
        }
        return token
    }
    return xpath.replace(tokenPattern, replacer)
}

function createDocumentFragmentByString(str) {
    var range = document.createRange()
    range.setStartAfter(document.body)
    return range.createContextualFragment(str)
}

function log(message) {
    if (typeof console == 'object') {
        console.log(message)
    }
    else {
        GM_log(message)
    }
}

function debug() {
    if ( typeof DEBUG != 'undefined' && DEBUG ) {
        if (console.log.apply) {
            console.log.apply(console, arguments)
        }
        else {
            Function.prototype.apply.apply(console.log, [console, arguments])
        }
    }
}

function getElementPosition(elem) {
    var offsetTrail = elem
    var offsetLeft  = 0
    var offsetTop   = 0
    while (offsetTrail) {
        offsetLeft += offsetTrail.offsetLeft
        offsetTop  += offsetTrail.offsetTop
        offsetTrail = offsetTrail.offsetParent
    }
    offsetTop = offsetTop || null
    offsetLeft = offsetLeft || null
    return {left: offsetLeft, top: offsetTop}
}

function getElementBottom(elem) {
    var c_style = document.defaultView.getComputedStyle(elem, '')
    var height  = 0
    var prop    = ['height', 'borderTopWidth', 'borderBottomWidth',
                   'paddingTop', 'paddingBottom',
                   'marginTop', 'marginBottom']
    prop.forEach(function(i) {
        var h = parseInt(c_style[i])
        if (typeof h == 'number') {
            height += h
        }
    })
    var top = getElementPosition(elem).top
    return top ? (top + height) : null
}

function getScrollHeight() {
    return Math.max(document.documentElement.scrollHeight,
                                document.body.scrollHeight)
}

function isSameDomain(url) {
    if (url.match(/^\w+:/)) {
        var url_s = url.split(/[\/\?]/)
        return url_s[0] == location.protocol && location.host == url_s[2]
    }
    else {
        return true
    }
}

function isSameBaseUrl(urlA, urlB) {
    return (urlA.replace(/[^/]+$/, '') == urlB.replace(/[^/]+$/, ''))
}

function resolvePath(path, base) {
    if (path.match(/^https?:\/\//)) {
        return path
    }
    if (path.match(/^\?/)) {
        return base.replace(/\?.+$/, '') + path;
    }
    if (path.match(/^[^\/]/)) {
        return base.replace(/[^/]+$/, '') + path
    }
    else {
        return base.replace(/([^/]+:\/\/[^/]+)\/.*/, '\$1') + path
    }
}

function fixResolvePath() {
    if (resolvePath('', 'http://resolve.test/') == 'http://resolve.test/') {
        return
    }
    // A workaround for WebKit and Mozilla 1.9.2a1pre,
    // which don't support XML Base in HTML.
    // https://bugs.webkit.org/show_bug.cgi?id=17423
    // https://bugzilla.mozilla.org/show_bug.cgi?id=505783
    var XML_NS = 'http://www.w3.org/XML/1998/namespace'
    var baseElement = document.createElementNS(null, 'base')
    var pathElement = document.createElementNS(null, 'path')
    baseElement.appendChild(pathElement)
    resolvePath = function resolvePath_workaround(path, base) {
        baseElement.setAttributeNS(XML_NS, 'xml:base', base)
        pathElement.setAttributeNS(XML_NS, 'xml:base', path)
        return pathElement.baseURI
    }
}

function strip_html_tag(str) {
    var chunks = str.split(/(<html(?:[ \t\r\n][^>]*)?>)/)
    if (chunks.length >= 3) {
        chunks.splice(0, 2)
    }
    str = chunks.join('')
    chunks = str.split(/(<\/html[ \t\r\n]*>)/)
    if (chunks.length >= 3) {
        chunks.splice(chunks.length - 2)
    }
    return chunks.join('')
}

function getPref(key, defaultValue) {
    var value = GM_getValue(key)
    return (typeof value == 'undefined') ? defaultValue : value
}

function wildcard2regep(str) {
    return '^' + str.replace(/([-()\[\]{}+?.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08').replace(/\*/g, '.*')
}

function isExclude(patterns) {
    var rr = /^\/(.+)\/$/
    var eps = (patterns || '').split(/[\r\n ]+/)
    for (var i = 0; i < eps.length; i++) {
        var reg = null
        if (rr.test(eps[i])) {
            reg = eps[i].match(rr)[1]
        }
        else {
            reg = wildcard2regep(eps[i])
        }
        if (location.href.match(reg)) {
            return true
        }
    }
    return false
}
// obsolete
function isFirefoxExtension() {
    return (typeof chlorine == 'object')
}

function isChromeExtension() {
    return (typeof chrome == 'object') &&
        (typeof chrome.extension == 'object')
}

function isSafariExtension() {
    return (typeof safari == 'object') &&
        (typeof safari.extension == 'object')
}

function isGreasemonkey() {
    return (typeof GM_log == 'function')
}

function isJetpack() {
    // isFirefoxExtension is obsolete
    return (!isGreasemonkey() && !isSafariExtension() &&
            !isChromeExtension() && !isFirefoxExtension())
}

function gmCompatible() {
    GM_registerMenuCommand = function() {}
    GM_setValue = function() {}
    GM_getValue = function() {}
    GM_addStyle = function() {}
    uneval = function() {}
    fixResolvePath = function() {}
    resolvePath = function (path, base) { return path }

    if (isChromeExtension() || isSafariExtension()) {
        createHTMLDocumentByString = function(str) {
            if (document.documentElement.nodeName != 'HTML') {
                return new DOMParser().parseFromString(str, 'application/xhtml+xml')
            }
            // FIXME
            var html = str.replace(/<script(?:[ \t\r\n][^>]*)?>[\S\s]*?<\/script[ \t\r\n]*>|<\/?(?:i?frame|html|script|object)(?:[ \t\r\n][^<>]*)?>/gi, ' ')
            var htmlDoc = document.implementation.createHTMLDocument ?
                document.implementation.createHTMLDocument('apfc') :
                document.implementation.createDocument(null, 'html', null)
            var range = document.createRange()
            range.selectNodeContents(document.documentElement)
            htmlDoc.documentElement.appendChild(range.createContextualFragment(html))
            return htmlDoc
        }
    }
    return true
}
