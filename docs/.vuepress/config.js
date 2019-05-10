module.exports = {
  plugins: ["@vuepress/last-updated", "@vuepress/back-to-top"],
  title: "Super-preloader",
  base: "/Super-preloader/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png"
      }
    ]
  ],
  description: ":scroll: Preload and Autopager",
  themeConfig: {
    repo: "machsix/Super-preloader",
    editLinks: true,
    docsDir: "docs",
    locales: {
      "/": {
        lang: "en-US",
        sidebar: {
          "/": [
            {
              title: "Introdction",
              collapsable: false,
              children: ["", "example", "compatibility"]
            },
            {
              title: "Development",
              collapsable: false,
              children: ["database"]
            },
            {
              title: "Faq",
              collapsable: false,
              children: ["faq"]
            }
          ]
        }
      }
    }
  }
};
