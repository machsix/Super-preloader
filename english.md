![icon!](https://machsix.github.io/Super-preloader/logo.png)

![GitHub stars](https://img.shields.io/github/stars/machsix/Super-preloader?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/machsix/Super-preloader?style=flat-square)
#Github repo:
https://github.com/machsix/Super-preloader

I greatly appreciate it if you can star my project

# License:
The script and its source code is licensed with GPL v3.0 and but commercial use is strictly not allowed. Reposting of the code without author's permission is also strictly not allowed.

#Introduction
A gm script for auto loading paginated web pages. It will join pages together based on the rules.

The script is forked from https://greasyfork.org/en/scripts/10433-super-preloaderplus-one.
Thanks for the original author [swdyh](https://github.com/swdyh) && [ywzhaiqi](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus) && [NLF](http://userscripts-mirror.org/scripts/show/84937)
swdyh is still actively improving [rules](http://wedata.net/databases/AutoPagerize/items) and developing the extension version,[AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/).

This userscript is more powerful than [AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/) in the sense that it has more flexibility for the method to define rules. You can not only use *Next page* link to derive the url for the next page, but also use js function to achieve the goal. You are also able to correct the content if the automatic rule is not perfect.

The other reason for the existence of this userscript is because someone needs to maintain the rules for Chinese and English users since swdyh's rules are mainly for Japanese websites. Don't be afraid of the fact that most feedbacks are in Chinese. I would like to add rules for English users if I could. Feel free to leave feedback.

I also hope that you can contribute rules for [wedata](http://wedata.net/databases/AutoPagerize/items). This will make the rules more widely used.

#To request rule, you should follow the following format
``` markdown
Title: [NSFW]Rule for www.example.com
Content:
  Link: www.example.com/a.html
  NSFW: yes or no
  Screenshot:
        xxx
  Rule: (If you create one but fail, you'd better provide it to make life easier for me)

```
**I won't spend time on writing rules for those who don't obey the rule.**

#Development Guide
https://machsix.github.io/Super-preloader/en/

#Examples:
1. google:
![google](https://machsix.github.io/Super-preloader/image/example/google.png)
2. XKCD:
![xkcd](https://machsix.github.io/Super-preloader/image/example/xkcd.png)

#Compatability Issue
1. Due to the design of Firefox, iframe with same baseURL but different anchor is not loaded. Details can be found at [https://stackoverflow.com/questions/22126190/why-iframe-is-not-loaded-for-same-url-as-page](https://stackoverflow.com/questions/22126190/why-iframe-is-not-loaded-for-same-url-as-page). This makes the script not work for some website (mainly manga website)
2. Some websites like Google send the response with header 'x-frame-options', which blocks the creation of iframe. You can use header modifier like [ModHeader for Firefox](https://addons.mozilla.org/en-US/firefox/addon/modheader-firefox/?src=search) or [Ignore X-Frame headers for Chrome](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe?hl=en-US) to remove the header and make the script work for this website. Luckily, there aren't many websites like this.
3. The script doesn't support pixiv.net. For those who use Firefox, you can install [weautopagerize](https://github.com/wantora/weautopagerize) and add the following line to the exclude URL in order to use them together

> /^https?://((?:\w+.)(?!pixiv))?\w+.(com|cn|ja|jp|net|ru|co|io|cc|me|tw|org|edu|tv|co)(.\w+)?/.*$/

#Compatibility with different brownser
Following the trend of asynchronous programming and new API of Greasemonkey 4 , your browser needs to support ES6 in order to use this script. If you have Chrome<49, you can use the old version of my script [download](https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new/code?version=634666) but the rules won't be updated anymore.
|JS manager          | ![Chrome](https://img.shields.io/badge/Chrome-%3Ev49-blue.svg) | ![Firefox](https://img.shields.io/badge/Firefox-%3E57-red.svg) | Firefox (<57)|--------------------|----------|---------------|---------------|
|Tampermonkey        |   ✓      | ✓             | NA            |
|Violentmonkey       |   ✓      | ✓             | No tested     |
|Greasemonkey 4      |   NA     | ✓             | NA            |
|Greasemonkey 3      |   NA     | NA            | ✓  (test with WaterFox 56.2.3)|
|--------------------|----------|---------------|---------------|
Support for Greasemonkey 3/Tampermonkey  is achieved by [https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js](https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js)


#Compatibility to some manga websites

|Website             | Chrome   | Firefox   |
|--------------------|----------|-----------|
|天极动漫频道新闻 yesky |  ✓  | ✓|
|动漫之家 dmzj        | ✓  | x |
|看漫画 manhuagui    | ✓  X-Header | x |
|CC漫画网 tuku |  ✓ | ✓|
|SF在线漫画 |  ✓ | x |
|哦漫画 omanhua| ✓ | x |
|汗汗/虎虎漫画|✓ | ✓|
|99漫画|✓ | ✓|
|酷酷动漫 kukudm|✓ | ✓|
|天使漫画网 tsdm|✓ | ✓|

For website with X-Header, you should follow issue 3 in the last section

#Contributers
<table><tr><td align="center"><a href="https://github.com/machsix"><img src="https://avatars0.githubusercontent.com/u/28209092?v=4" width="100px;" alt="MachX"/><br /><sub><b>MachX</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=machsix" title="Code">💻</a> <a href="#design-machsix" title="Design">🎨</a> <a href="#content-machsix" title="Content">🖋</a> <a href="#review-machsix" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://github.com/suchunchen"><img src="https://avatars3.githubusercontent.com/u/17309819?v=4" width="100px;" alt="suchunchen"/><br /><sub><b>suchunchen</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=suchunchen" title="Code">💻</a> <a href="#content-suchunchen" title="Content">🖋</a></td><td align="center"><a href="http://wiki.mozilla.org/User:YFdyh000"><img src="https://avatars0.githubusercontent.com/u/1769875?v=4" width="100px;" alt="YFdyh000"/><br /><sub><b>YFdyh000</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=yfdyh000" title="Code">💻</a> <a href="#design-yfdyh000" title="Design">🎨</a></td></tr></table>


#Changelog


[Github](https://github.com/machsix/Super-preloader/commits/master)
