![icon](https://machsix.github.io/Super-preloader/logo.png)

[![Build Status](https://travis-ci.org/machsix/Super-preloader.svg?branch=master)](https://travis-ci.org/machsix/Super-preloader) [![Netlify Status](https://api.netlify.com/api/v1/badges/9c4dac1a-823b-4bb7-9760-57895931fc16/deploy-status)](https://app.netlify.com/sites/super-preloader/deploys) <a href='https://ko-fi.com/X8X6UEPM' target='_blank'><img height='36' style='border:0px;height:28px;' src='https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2' border='0' alt='Buy Me a Coffee' /></a>

# Super-preloader

## Installation and Document

| Document                                                                                                                                                                                             | Installation                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img height="40" width="40" onclick="window.open(https://super-preloader.netlify.com/)" src="https://simpleicons.org/icons/netlify.svg" /> [Netlify](https://super-preloader.netlify.com/)           | <img height="40" width="40" onclick="window.open(https://super-preloader.netlify.com/)" src="https://greasyfork.org/assets/blacklogo96-e0c2c76180916332b7516ad47e1e206b42d131d36ff4afe98da3b1ba61fd5d6c.png" /> [greasyfork](https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new) |
| <img height="40" width="40" onclick="window.open(https://machsix.github.io/Super-preloader/)" src="https://simpleicons.org/icons/github.svg" /> [Github](https://machsix.github.io/Super-preloader/) | <img height="40" width="40" onclick="window.open(https://machsix.github.io/Super-preloader/)" src="https://simpleicons.org/icons/github.svg" /> [Github](https://machsix.github.io/Super-preloader/Super_preloaderPlus_one_New.user.js)                                                           |

## Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="48px" height="48px" />](http://godban.github.io/browsers-support-badges/) + [<img src="https://github.com/violentmonkey.png" height="48px" alt="violentmonkey"/>](https://github.com/violentmonkey)/[<img src="https://github.com/greasemonkey.png" height="48px" alt="greasemonkey"/>](https://github.com/Greasemonkey) <br>Firefox + Violentmonkey/Greasemonkey 4 | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="48px" height="48px" />](http://godban.github.io/browsers-support-badges/) / [<img src="https://edgetipscdn.microsoft.com/insider-site/images/logo-dev.f87ac296.png" alt="Microsoft Edge Dev" width="48px" height="48px" />](http://godban.github.io/browsers-support-badges/)+ [<img src="https://github.com/Tampermonkey.png" height="48px" alt="violentmonkey"/>](https://github.com/Tampermonkey) <br>Chrome/Microsoft Edge Dev + Tampermonkey | [<img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Waterfox_Logo_%28redesigned_2015%29.png" alt="Microsoft Edge Dev" width="48px" height="48px" />](http://godban.github.io/browsers-support-badges/)+ [<img src="https://github.com/greasemonkey.png" height="48px" alt="greasemonkey"/>](https://github.com/Greasemonkey) <br>Waterfox + Greasemonkey 3/4 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox > ESR                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Chrome > 45 , Edge Dev Channel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Latest                                                                                                                                                                                                                                                                                                                                                                  |

- Script is tested under:

  - Firefox latest + Violentmonkey (**Recommended combination**)
  - Microsoft Edge Dev + Tampermonkey
  - Waterfox 56.3 + Greasemonkey 4.9
  - Chrome 48 + Tampermonkey

## Introduction

A userscript for auto loading paginated web pages. It will join pages together based on the rules.

The script is forked from https://greasyfork.org/en/scripts/10433-super-preloaderplus-one. However, it is refactored since v6.8.xx. Now we are embracing new techniques (features of ES6) and ~~webpack~~rollup to pack the script.

Thanks to 
- [swdyh](https://github.com/swdyh) initial idea of autopagger and preloader. (swdyh is still actively improving [rules](http://wedata.net/databases/AutoPagerize/items) and developping the extension version,[AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/). )
- NLF: initial version of the Preloader
- Users of Opera China forum: contributions to the rules
- [ywzhaiqi](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus): Autopagger

Thanks to 红叶舞秋山, who introduced the history of the script to me
>ywzhaiqi也不是原创，这是个很久远的故事啊！还记得很多年以前，那时候我们还用Opera的旧版，总拿着它看小说之类的。然后在当年的Opera中国官方论坛，NLF 开始写这么个脚本的最初版，开始叫Preloader还是PreloaderPlus有点儿记不起来了！我们帮着测试，大家一起顺便也写写规则之类的。当年好像还有个简化版，只能预读不能拼接的，后来还有Firefox版，Chrome版等等，甚至自己还考虑过自己写个外接可定制网页的GUI...。开始时候这东西没啥按钮Debug什么的，都是一点点加的，还记得当年为了找个函数翻Xml等等文档翻了两天终于搞定的日子。后来基本功能有了，也没啥人维护了，大部分都是遇到问题自己写个规则用了。。。再后来Opera中国论坛也散了，很久之后ywzhaiqi接手改了个Super_preloader，然后Super_preloader one的合一版他到

Please leave feedback at [Greasefork page](https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new) or Github issue

## Development Guide

I appreciate anyone who is interested in devoting their time to the development. You can contribute by either **writing rules** or **improving the script**.

### To write rules

1. Check the [Document](https://machsix.github.io/Super-preloader/) and learn the structure of the rule
2. Modify file `dist/mydata.json` for simple json rules
3. Modify file `src/rules/jsSiteRule.js` for complex js rules

### To modify document

1. Modify content in `docs/`

### To improve the script

1. Clone the whole repo and install modules by `npm install`
1. Make your modifications with your favoriate IDE. You IDE should support eslint and prettier to ease your life.
1. Run `npm run check` to do a static check with eslint and prettier
1. Run `npm run test` to test the script on certain websites with puppeteer
1. Run `npm run dev` to launch the dev server and install the script from [http://localhost:8081/Super_preloaderPlus_one_New.user.js](http://localhost:8081/Super_preloaderPlus_one_New_dev.user.js). Test it on the website your added
1. **Only if all previous tests pass**, you can now run `npm run publish:patch` to bump up the version and build the script. The file `dist/Super_preloaderPlus_one_New.user.js` will be updated.
1. Commit all the changes you make and submit a pull request.

### Note:

1. You shouldn't commit changes of `package.json`, `package-lock.json`, and `.eslintrc.json` unless you have a good reason to do that.
2. I won't check the PR until travis ci test passes. You can simulate travis ci test locally by running `npm run check` and `npm run test`.

Check more at [Document](https://machsix.github.io/Super-preloader/)

## Known issues:

- Firefox + Tampermonkey won't send cookie with `GM_xmlhttpRequest`. Unless [this issue](https://github.com/Tampermonkey/tampermonkey/issues/786) is resolved, I can do nothing with special websites. -Dec 31th 2019
- Violentmonkey doesn't inject the scripts correctly on [https://nhentai.org](https://nhentai.org). Check [this issue](https://github.com/violentmonkey/violentmonkey/issues/991) The new release candidate v2.12.8 may fix the issuse.

## Donation

It takes time and patiency to maintain the project (beacure there are :thumbsdown: websites like [JD](https://jd.com)). If you like my work, a donation is welcomed. This will keep my passion to continue developing. :satisfied:

<a href='https://ko-fi.com/X8X6UEPM' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2' border='0' alt='Buy Me a Coffee' /></a>

**Thanks to the following donors**:

- loveqianool (1st donor)

## License

![GPLv3](https://www.gnu.org/graphics/gplv3-127x51.png)

This program is licensed under [GNU General Public License](https://www.gnu.org/licenses/gpl.html) Version 3 or later.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>.
