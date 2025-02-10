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
      ...readFileList("2025", "02"),
      ...readFileList("2025", "01"),
      ...readFileList("2024", "12"),
      ...readFileList("2024", "11"),
      ...readFileList("2024", "10"),
      ...readFileList("2024", "09"),
      ...readFileList("2024", "08"),
      ...readFileList("2024", "07"),
      ...readFileList("2024", "06"),
      ...readFileList("2024", "05"),
      ...readFileList("2024", "04")
    ]
  },

})
