<script setup>
import { withBase } from 'vitepress'
</script>

<p align="center" class="logo-img">
    <img src="../images/logo.png" alt="logo" width="100">
</p>
<h1 align="center" class="logo-text">Super-preloader</h1>
<br>
<div class="center">从<a href="https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new" target="_blank">Greasy Fork</a>,
<a href="https://github.com/machsix/Super-preloader/raw/master/dist/Super_preloaderPlus_one_New.user.js" target="_blank">Github</a> 或 <a :href="withBase('/Super_preloaderPlus_one_New.user.js')" target="_blank">Dev version</a>安装</div>
<br>

# 简介

自动翻页脚本，由[ywzhaiqi/Super_preloaderPlus](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus)修改而来。在此首先对作者[swdyh](https://github.com/swdyh), [ywzhaiqi](https://github.com/ywzhaiqi/userscript/tree/master/scripts/Super_preloaderPlus)和[NLF](http://userscripts-mirror.org/scripts/show/84937)致以谢意。swdyh 仍在频繁的更新[规则](http://wedata.net/databases/AutoPagerize/items)以及开发扩展[AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/)。

相比[AutoPagerize](https://addons.mozilla.org/en-US/firefox/addon/autopagerize/)， 该脚本的主要优势在于规则的定义和 DOM 的处理更加灵活。你不仅可以使用[xpath selector](https://developer.mozilla.org/en-US/docs/Web/XPath)定义规则，还可以直接使用[JavaScript](https://en.wikipedia.org/wiki/JavaScript)提取元素、修改页面（比如去广告[DocumentFilter](/siterule.md#documentfilter)、增加新功能）等。另一方面，鉴于 swdyh 维护的规则主要针对日文用户，我也希望该脚本及相关规则能惠及中文、英文用户。
