import { defineConfig } from 'vitepress'
import { readFileList } from './tools/readFileList'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "web-daily",
  description: "A website collects web technology",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xxholly32/web-daily' }
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '介绍', link: '/' },
        ]
      },
      ...readFileList("2024", "04")
    ]
    // "/": [
    //   {
    //     text: "介绍",
    //     link: "/",
    //     items: ['/']
    //   },
    //   ...readFileList("2024", "04")
    // ]
  },

})
