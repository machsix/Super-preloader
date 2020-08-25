![icon!](https://machsix.github.io/Super-preloader/logo.png)

![GitHub stars](https://img.shields.io/github/stars/machsix/Super-preloader?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/machsix/Super-preloader?style=flat-square)

# Github库
https://github.com/machsix/Super-preloader
欢迎star

# 授权协议
该脚本及其源代码依据GPL v3.0授权。 在此基础上，商业使用被完全禁止。除此之外，未经作者允许以任何方式再次分发此代码都将被认作侵权行为。

# 介绍
自动翻页脚本，由[ywzhaiqi && NLF原作](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus)修改规则而来。我的维护主要包括以下几方面
1. 适配Greasemonkey4的新异步编程API(欢迎其他脚本作者使用库函数实现Greasemonkey4的兼容[https://greasyfork.org/zh-CN/scripts/373124-gm4-polyfill-mach6-legacy](https://greasyfork.org/zh-CN/scripts/373124-gm4-polyfill-mach6-legacy)
2. 添加针对部分使用lazyload的网站的支持
3. 添加功能以直接使用共享数据库[wedata](http://wedata.net/databases/AutoPagerize/items)

[ywzhaiqi 原始脚本最后一次更新于 Sep 7th 2017](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus). Greasefork上其他所谓的Super_preloaderPlus基本是ywzhaiqi原脚本的拷贝

**向原作者[swdyh](https://github.com/swdyh) && ywzhaiqi && NLF 致敬**
**纪念伟大的Greasemonkey,期待猴子的重生**

# 开发指南
https://machsix.github.io/Super-preloader/

# 关于反馈
如遇你所需要的站点未包含在其中，请在issue区报告。

**报bug不提供网址的一律不理，比如像下面这几位**：

https://greasyfork.org/en/forum/discussion/43712/x

https://greasyfork.org/en/forum/discussion/55693/x

反馈时请选择**好评**。我利用业余时间学习js、无偿维护这个脚本已经很辛苦了，而且基本做到了有问必答定期更新。并且也没有在这个脚本里植入任何营销脚本，更不用说“求捐助了”。同时也希望各位自己写了规则的能够到我的github提交pull request [https://github.com/machsix/personal-scripts/tree/master/Super_preloader](https://github.com/machsix/personal-scripts/tree/master/Super_preloader)

**反馈请按如下规则提交feedback**
``` markdown
标题:
  非成人内容:  规则www.example.com
  成人内容:    [NSFW]规则www.example.com
内容:
  网址: www.example.com/a.html
  NSFW: yes or no
  截图:
        xxx
  规则: (如果你自己尝试写了但是失败了，也建议附上你写的规则让我更容易)

```
**NSFW=Not Safe For Work. 申请成人网站规则的，务必在帖子标题附上\[NSFW\]**
**如果你不按照格式feedback，请不要期待我会给你解决**

# 以下站点永远不会得到支持
- 京东



# 例子
1. Baidu:
![Baidu](https://machsix.github.io/Super-preloader/image/example/baidu.png)
2. 虎虎动漫:
![hhcomic](https://machsix.github.io/Super-preloader/image/example/hhmm.png)

# 贡献者
<table><tr><td align="center"><a href="https://github.com/machsix"><img src="https://avatars0.githubusercontent.com/u/28209092?v=4" width="100px;" alt="MachX"/><br /><sub><b>MachX</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=machsix" title="Code">💻</a> <a href="#design-machsix" title="Design">🎨</a> <a href="#content-machsix" title="Content">🖋</a> <a href="#review-machsix" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://github.com/suchunchen"><img src="https://avatars3.githubusercontent.com/u/17309819?v=4" width="100px;" alt="suchunchen"/><br /><sub><b>suchunchen</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=suchunchen" title="Code">💻</a> <a href="#content-suchunchen" title="Content">🖋</a></td><td align="center"><a href="http://wiki.mozilla.org/User:YFdyh000"><img src="https://avatars0.githubusercontent.com/u/1769875?v=4" width="100px;" alt="YFdyh000"/><br /><sub><b>YFdyh000</b></sub></a><br /><a href="https://github.com/machsix/Super-preloader/commits?author=yfdyh000" title="Code">💻</a> <a href="#design-yfdyh000" title="Design">🎨</a></td></tr></table>


# 兼容性说明
1. 本脚本在Firefox 57+/Chrome Tampermonkey 下测试通过
2. Greasemonkey 3 for Firefox < 57 理论上可以提供支持
3. Violentmonkey 经测试对于百度贴吧支持不良，主要表现为加载速度缓慢, 其余网站暂时正常
4. 部分规则来自 http://wedata.net/databases/AutoPagerize
5. 如何对特定网站开启自动翻页？ 鼠标悬停于悬浮窗上，勾选翻页模式，点击保存
6. 如何强制开启中文界面（在你浏览器语言为英语的情况下）？全局设定中勾选ChineseUI
7. Firefox禁止iframe内嵌套相同网址，造成部分使用锚点翻页的网站在Firefox种无法自翻
8. 部分网站response内有个'x-frame-options'的header，你需要安装插件[ModHeader for Firefox](https://addons.mozilla.org/en-US/firefox/addon/modheader-firefox/?src=search) 或者 [Ignore X-Frame headers for Chrome](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe?hl=en-US) 来修改header。对于前者，你需要手动添加规则 response header -> Name:X-Frame-Options Value:\[空白\]

# 浏览器兼容性
**浏览器需要提供对ES6的支持， Chrome>49**
|JS manager          | ![Chrome](https://img.shields.io/badge/Chrome-%3Ev49-blue.svg) | ![Firefox](https://img.shields.io/badge/Firefox-%3E57-red.svg) | Firefox (<57)
|--------------------|----------|---------------|---------------|
|Tampermonkey        |   ✓      | ✓             | NA            |
|Violentmonkey       |   ✓      | ✓             | Not test     |
|Greasemonkey 4      |   NA     | ✓             | NA            |
|Greasemonkey 3      |   NA     | NA            | ✓  (test with WaterFox 56.2.3)|
|--------------------|----------|---------------|---------------|
Support for Greasemonkey 3/Tampermonkey  is achieved by [https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js](https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js)


# 动漫网站兼容性
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

For website with X-Header, you should follow issue 8 in the last section



# 重大change

[Github](https://github.com/machsix/Super-preloader/commits/master)
