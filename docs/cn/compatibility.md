# 兼容性

## 浏览器及脚本管理器

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="48px" height="48px" />](http://godban.github.io/browsers-support-badges/) + [<img src="https://github.com/violentmonkey.png" width="48px" alt="violentmonkey"/>](https://github.com/violentmonkey) <br>Firefox + Violentmonkey | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="48px" height="48px" />](http://godban.github.io/browsers-support-badges/) [<img src="https://github.com/Tampermonkey.png" width="48px" alt="violentmonkey"/>](https://github.com/Tampermonkey) <br>Chrome/Microsoft Edge Dev + Tampermonkey | [<img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Waterfox_Logo_%28redesigned_2015%29.png" alt="Microsoft Edge Dev" width="48px" height="48px" />](http://godban.github.io/browsers-support-badges/)+ [<img src="https://github.com/greasemonkey.png" width="48px" alt="violentmonkey"/>](https://github.com/Tampermonkey) <br>Waterfox + Greasemonkey 4 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox > ESR                                                                                                                                                                                                                                                                                                                                              | Chrome > 45 , Edge Dev Channel                                                                                                                                                                                                                                                                                                                                       | Latest                                                                                                                                                                                                                                                                                                                                                                |

- Script is tested under:

  - Firefox latest + Violentmonkey (**Recommended combination**)
  - Microsoft Edge Dev + Tampermonkey
  - Waterfox 56.3 + Greasemonkey 4.9
  - Chrome 48 + Tampermonkey

- Known issue:
  - Firefox < 62 + Tampermonkey is incompatible with webpack or core-js. I don't really know where the :bug: is. I have submitted an issue to Tampermonkey [https://github.com/Tampermonkey/tampermonkey/issues/834](https://github.com/Tampermonkey/tampermonkey/issues/834). Unless he fixes it, I can do nothing.

## 漫画网站

| Website                | Chrome                      | Firefox                       |
| ---------------------- | --------------------------- | ----------------------------- |
| 天极动漫频道新闻 yesky | :white_check_mark:          | :white_check_mark:            |
| 动漫之家 dmzj          | :white_check_mark:          | :negative_squared_cross_mark: |
| 看漫画 manhuagui       | :white_check_mark: X-Header | :negative_squared_cross_mark: |
| CC 漫画网 tuku         | :white_check_mark:          | :white_check_mark:            |
| SF 在线漫画            | :white_check_mark:          | :negative_squared_cross_mark: |
| 哦漫画 omanhua         | :white_check_mark:          | :negative_squared_cross_mark: |
| 汗汗/虎虎漫画          | :white_check_mark:          | :white_check_mark:            |
| 99 漫画                | :white_check_mark:          | :white_check_mark:            |
| 酷酷动漫 kukudm        | :white_check_mark:          | :white_check_mark:            |
| 天使漫画网 tsdm        | :white_check_mark:          | :white_check_mark:            |
