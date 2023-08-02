import { defineConfig } from 'vitepress'
import packageJson from './../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NenUI",
  description: "An unstyled Vue3 component library",
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/api-examples' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: `v${packageJson.version}`,
        items: [
          { text: 'Release Notes', link: '/item-1' },
          { text: 'Contributing', link: '/item-2' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NenLabs/nen-ui' }
    ]
  }
})
