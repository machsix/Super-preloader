<p align="center" class="logo-img">
    <img src="/Super-preloader/logo.png" alt="logo" width="100">
</p>
<h1 align="center" class="logo-text">Super-preloader</h1>

# Introduction

A gm script for auto loading paginated web pages. It will join pages together based on the rules.

The script is forked from [ywzhaiqi/Super_preloaderPlus](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus). Thanks to the original author [swdyh](https://github.com/swdyh), [ywzhaiqi](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus) and [NLF](http://userscripts-mirror.org/scripts/show/84937). swdyh is still actively improving [rules](http://wedata.net/databases/AutoPagerize/items) and developing the Chrome extension, [AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/)

This userscript is more powerful than [AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/) in the sense that it has more flexibility for the method to define rules. You can not only use [xpath selector](https://developer.mozilla.org/en-US/docs/Web/XPath) link to derive the url for the next page, but also use [JavaScript](https://en.wikipedia.org/wiki/JavaScript) function to achieve the goal. You are also able to correct the content if the automatic rule is not perfect since we provide [ContentFilter]().

The other reason for the existence of this userscript is because someone needs to maintain the rules for Chinese and English users since swdyh’s rules are mainly for Japanese websites. Don’t be afraid of the fact that most feedbacks are in Chinese. I would like to add rules for English users if I could. Feel free to leave feedback.

I also hope that you can contribute rules for [wedata](http://wedata.net/databases/AutoPagerize/items). This will benifit other extensions with similar functions, like [uAutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/uautopagerize)
