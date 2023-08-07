import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import packageJson from './../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NenUI",
  description: "An unstyled Vue3 component library",
  titleTemplate: 'NenUI - :title',
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://nenui.nenlabs.org'
  },
  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    externalLinkIcon: true,
    editLink: {
      pattern: 'https://github.com/NenLabs/nen-ui/edit/main/packages/documentation/docs/:path',
      text: 'Edit this page on GitHub'
    },
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/api-examples' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Team', link: '/team' },
      {
        text: `v${packageJson.version}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/item-1' },
          { text: 'Contributing', link: '/item-2' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Guide',
        items: [
          {
            text: 'Markdown Examples',
            items: [
              { text: 'Example', link: '/markdown-examples' },
            ]
          },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NenLabs/nen-ui' },
      { icon: 'twitter', link: 'https://github.com/NenLabs/nen-ui' },
      { icon: 'discord', link: 'https://discord.gg/duCVQt5VSU' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023-present Egwuchukwu Diala,
      NenLabs Core Team and NenUI Contributors`
    }
  },
  vite: {
    plugins: [
      UnoCSS(),
    ],
  } as any,
})
