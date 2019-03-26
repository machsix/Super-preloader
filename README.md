
![icon!](https://raw.githubusercontent.com/machsix/Super-preloader/master/icon2.png)

# Complete document
[Complete Document](https://machsix.github.io/Super-preloader/super_preloader.html)

# Difference of verions:
 - Super_preloaderPlus_one_New_legacy.user.js: old version doesn't work with GM4 but doesn't use `Promise` at all
 - Super_preloaderPlus_one_New.user.js: stable version synced with [Greasefork](https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new) but using old javascript syntax
 - Super_preloaderPlus_one_ES8.user.js: version in active development

# Naming convention of commit message:
 - vXX: version XX commit for stable version
 - ES8 vXXX: version XX commit for ES8 version

# Introduction
A gm script for auto loading paginated web pages. It will join pages together based on the rules.

The script is forked from https://greasyfork.org/en/scripts/10433-super-preloaderplus-one.
Thanks for the original author [swdyh](https://github.com/swdyh) && [ywzhaiqi](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus) && NLF
swdyh is still actively improving [rules](http://wedata.net/databases/AutoPagerize/items) and developping the extension version,[AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/).

This userscript exists because someone needs to maintain the rules for Chinese and English users since swdyh's rules are mainly for Japanese websites. Don't be afraid of the fact that most feedbacks are in Chinese. I would like to add rules for English users if I could. Feel free to leave feedback.

Please leave feedback at [Greasefork page](https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new)

# Development Guide
I appreciate anyone who is interested in devoting their time to the development. We currently have two verions of the code. The `ES8` branch is in active development. As the name suggests, I will gradually abandon the further development of the code style code.

To take part into the development, you need to:
1. Be familiar with `javascript` and `xpath`
2. Install `node js` by `npm install`
3. Follow the style of the code and make your contributions!

Everytime you make a commt, `eslint` will check your code style.

# License
gpl-3.0

