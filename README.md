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

- Known issue:
  - ~~Firefox < 62 + Tampermonkey is incompatible with the script < v6.9.3 because of incompatability between Tampermonkey and core-js@3 because https://github.com/Tampermonkey/tampermonkey/issues/834 . The solution is to bundle it with core-js@2.~~
  - Except GM4, all other userscript manger don't send `cookie` for `xhr` request. VM fixes this in PR: [https://github.com/violentmonkey/violentmonkey/pull/743](https://github.com/violentmonkey/violentmonkey/pull/743), which is not released yet. I currently add `document.cookie` manually to the header, which has some limitations.

## Introduction

A gm script for auto loading paginated web pages. It will join pages together based on the rules.

The script is forked from https://greasyfork.org/en/scripts/10433-super-preloaderplus-one.
Thanks for the original author [swdyh](https://github.com/swdyh) && [ywzhaiqi](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus) && NLF
swdyh is still actively improving [rules](http://wedata.net/databases/AutoPagerize/items) and developping the extension version,[AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/).

This userscript exists because someone needs to maintain the rules for Chinese and English users since swdyh's rules are mainly for Japanese websites. Don't be afraid of the fact that most feedbacks are in Chinese. I would like to add rules for English users if I could. Feel free to leave feedback.

Please leave feedback at [Greasefork page](https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new)

## Development Guide

I appreciate anyone who is interested in devoting their time to the development. We currently have two verions of the code. The `ES8` branch is in active development. As the name suggests, I will gradually abandon the further development of the code style code.

To take part into the development, you need to:

1. Be familiar with `javascript`, `xpath/css selector` and `node js`
2. Install modules by `yarn`
3. Make your modifications
4. Run `yarn test` to check bugs
5. Run `yarn run format` to format the code based on our code style
6. Commit and submit pull request!

Check more at [Complete Document](https://machsix.github.io/Super-preloader/)

## Contributers

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/machsix"><img src="https://avatars0.githubusercontent.com/u/28209092?v=4" width="100px;" alt="MachX"/><br /><sub><b>MachX</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=machsix" title="Code">💻</a> <a href="#design-machsix" title="Design">🎨</a> <a href="#content-machsix" title="Content">🖋</a> <a href="#review-machsix" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://github.com/suchunchen"><img src="https://avatars3.githubusercontent.com/u/17309819?v=4" width="100px;" alt="suchunchen"/><br /><sub><b>suchunchen</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=suchunchen" title="Code">💻</a> <a href="#content-suchunchen" title="Content">🖋</a></td><td align="center"><a href="http://wiki.mozilla.org/User:YFdyh000"><img src="https://avatars0.githubusercontent.com/u/1769875?v=4" width="100px;" alt="YFdyh000"/><br /><sub><b>YFdyh000</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=yfdyh000" title="Code">💻</a> <a href="#design-yfdyh000" title="Design">🎨</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

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
