import {defineConfig} from 'vitepress';

// https://vitepress.dev/reference/site-config
export const cn = defineConfig({
  title: 'Super-preloader',
  lang: 'zh-Hans',
  description: 'Super-preloader',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './images/logo.png',
    siteTitle: 'Super-preloader',
    nav: [{text: '主页', link: '/cn/index'}],
    sidebar: [
      {
        text: '指南',
        items: [
          {text: '介绍', link: '/cn/index'},
          {text: '简介', link: '/cn/example'},
          {text: '兼容性', link: '/cn/compatibility'},
          {text: '站点规则', link: '/cn/siterule'},
          {text: '规则库', link: '/cn/database'},
          {text: 'FAQ', link: '/cn/faq'}
        ]
      }
    ]
  }
});
