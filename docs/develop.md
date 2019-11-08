# 简介

开发主要在[Github](https://github.com/machsix/Super-preloader)展开。 参加开发前请先完成以下步骤

1. 安装`node js`, `yarn`
2. fork it!
3. 使用`yarn`安装相关依赖（主要是代码格式化以及 lint）。请不要使用`npm`由于`npm`无法正确解析`vuepress`的依赖
4. 完整修改
5. 使用`yarn test`检查代码格式及脚本的正确性
6. 提交 PR，**PR 前请使用`git rebase`将 commit 合并**，[一个英文指南](https://www.internalpointers.com/post/squash-commits-into-one-git)

## 脚本开发

> 你可以对任何文件进行合理修改

> PR 请使用`fix`, `fea`, `feature` 或`core`的前缀

当前需求主要列在[issue](https://github.com/machsix/Super-preloader/issues)和[project](https://github.com/machsix/Super-preloader/projects)中。

目前的主要需求包括：

1. 固化`Super_preloaderPlus_one_New.user.js`
2. 将脚本分拆为函数，同时将规则从脚本中提取到`mydata.json`
3. 使用 ES8 重写`Super_preloaderPlus_one_ES8.user.js`

## 规则的添加及修复

> 你可以对`dist/mydata.json`或`Super_preloaderPlus_one_New.user.js`进行合理修改

> PR 请使用`rule`的前缀

请先学习[JSON 格式](https://www.jianshu.com/p/041c766742b0)，然后学习[Xpath 选择器](https://zhuanlan.zhihu.com/p/37911501)并尝试使用浏览器的开发者工具提取 XPath。

之后你就可以阅读[站点规则](/siterule.md)学习规则的格式然后编写规则了 :smile:

在可能的情况下请优先对`dist/mydata.json`进行修改。
