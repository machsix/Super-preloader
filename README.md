
![icon!](https://raw.githubusercontent.com/machsix/Super-preloader/master/icon2.png)


[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)   &nbsp; [![Build Status](https://travis-ci.org/machsix/Super-preloader.svg?branch=master)](https://travis-ci.org/machsix/Super-preloader)

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
3. Make your modifications
4. Run `npm run lint` to check bugs
4. Run `npm run format` to format the code based on our code style
5. Commit and submit pull request!

Everytime you make a commt, `eslint` will check your code style.

# Contributers
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/machsix"><img src="https://avatars0.githubusercontent.com/u/28209092?v=4" width="100px;" alt="MachX"/><br /><sub><b>MachX</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=machsix" title="Code">💻</a> <a href="#design-machsix" title="Design">🎨</a> <a href="#content-machsix" title="Content">🖋</a> <a href="#review-machsix" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://github.com/suchunchen"><img src="https://avatars3.githubusercontent.com/u/17309819?v=4" width="100px;" alt="suchunchen"/><br /><sub><b>suchunchen</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=suchunchen" title="Code">💻</a> <a href="#content-suchunchen" title="Content">🖋</a></td><td align="center"><a href="http://wiki.mozilla.org/User:YFdyh000"><img src="https://avatars0.githubusercontent.com/u/1769875?v=4" width="100px;" alt="YFdyh000"/><br /><sub><b>YFdyh000</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=yfdyh000" title="Code">💻</a> <a href="#design-yfdyh000" title="Design">🎨</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


# Donation

<a href='https://ko-fi.com/X8X6UEPM' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2' border='0' alt='Buy Me a Coffee' /></a>

# License

![GPLv3](https://www.gnu.org/graphics/gplv3-127x51.png)

This program is licensed under [GNU General Public License](https://www.gnu.org/licenses/gpl.html) Version 3 or later.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.