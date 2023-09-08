import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import packageJson from './../../package.json'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "NenUI",
  description: "An unstyled Vue3 component library",
  titleTemplate: 'NenUI - :title',
  lastUpdated: true,
  cleanUrls: true,
  lang: 'en-US',
  sitemap: {
    hostname: 'https://nenui.nenlabs.org'
  },
  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['link', { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180"}],
    ['link', { rel: "mask-icon", href: "/logo.svg", color: "#FFFFFF"}],
    ['meta', { name: "theme-color", content: "#ffffff" }],
    ['meta', { property: "og:title", content: "NenUI" }],
    ['meta', { property: "og:description", content: "An unstyled Vue3 component library" }],
    ['meta', { property: "og:image", content: "/og_image.png" }],
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
      {
        text: `v${packageJson.version}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/item-1' },
          { text: 'Contributing', link: '/contributing' },
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
      { icon: { svg: '<div class="i-fa6-brands:x-twitter text-base" />' }, link: 'https://github.com/NenLabs/nen-ui' },
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
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    plugins: [
      UnoCSS(),
    ],
  } as any,
  pwa: {
    mode: 'development',
    base: '/',
    scope: '/',
    includeAssets: ['logo.svg'],
    manifest: {
      name: 'Nen UI',
      short_name: 'NenUI',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
  },
}))
