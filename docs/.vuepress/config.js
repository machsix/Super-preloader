module.exports = {
  plugins: {
    '@vuepress/last-updated': true,
    '@vuepress/back-to-top': true,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/google-analytics': {
      ga: 'UA-139969974-1'
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Super-preloader'
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'Super-preloader'
    }
  },
  base: '/Super-preloader/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ]
  ],
  description: ':scroll: Preload and Autopager',
  themeConfig: {
    logo: '/logo.png',
    repo: 'machsix/Super-preloader',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/zh-cn/': {
        lang: 'zh-CN',
        label: '中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '更新时间',
        nav: [
          {
            text: '介绍',
            link: '/zh-cn/'
          }
        ],
        sidebar: {
          '/zh-cn/': [
            {
              title: '介绍',
              collapsable: false,
              children: [['', '简介'], 'example', 'compatibility', 'database']
            },
            {
              title: '开发指南',
              collapsable: false,
              children: ['develop', 'siterule']
            },
            {
              title: 'HOW TO',
              collapsable: false,
              children: ['faq']
            }
          ]
        }
      },
      '/': {
        lang: 'en-US',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Introduction',
            link: '/'
          }
        ],
        sidebar: {
          '/': [
            {
              title: 'Introduction',
              collapsable: false,
              children: [['', 'Introduction'], 'example', 'compatibility', 'database']
            },
            {
              title: 'Development',
              collapsable: false,
              children: ['siterule']
            },
            {
              title: 'HOW TO',
              collapsable: false,
              children: ['faq']
            }
          ]
        }
      }
    }
  }
};
