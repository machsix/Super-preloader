import {defineConfig} from 'vitepress';

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: 'Super-preloader',
  lang: 'en-US',
  description: 'Super-preloader',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './images/logo.png',
    siteTitle: 'Super-preloader',
    nav: [{text: 'Home', link: '/'}],
    sidebar: [
      {
        text: 'Reference',
        items: [
          {text: 'Introduction', link: '/index'},
          {text: 'Examples', link: '/example'},
          {text: 'Compatibility', link: '/compatibility'},
          {text: 'Site rules', link: '/siterule'},
          {text: 'Database', link: '/database'},
          {text: 'FAQ', link: '/faq'}
        ]
      }
    ]
  }
});
