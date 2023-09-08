---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "NenUI"
  text: "An unstyled Vue3 component library"
  tagline: An unstyled Vue3 component library
  image:
    src: /logo.png
    alt: NenUI
  actions:
    - theme: brand
      text: Get Started
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - icon: 🎨
    title: Fully Customizable
    details: Components can be styled with TailwindCSS classes.
  - icon: 🚀
    title: Build Fast
    details: Worry less about functionality, focus more on styling.
  - icon: 💪🏾
    title: Typed Components
    details: Components have been built completely with typescript.
  - icon: 📦
    title: Lightweight
    details: Zero deps and browser friendly, ~6kb bundle size.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
    {
    avatar: 'https://avatars.githubusercontent.com/u/46764458?v=4',
    name: 'Egwuchukwu Diala',
    title: 'Open sourcer',
    desc: 'Frontend Engineer & Designer',
    org: 'NenLabs',
    orgLink: 'https://github.com/NenLabs',
    links: [
      { icon: 'github', link: 'https://github.com/egdiala' },
      { icon: { svg: '<div class="i-fa6-brands:x-twitter text-base" />' }, link: 'https://twitter.com/e_diala' },
      { icon: {
          svg: '<div class="i-heroicons:globe-europe-africa-solid text-lg" />'
        }, link: 'https://egdiala.dev' }
    ]
  }
]
</script>

<VPTeamPage pt-8>
  <VPTeamPageSection>
    <template #title>Core Team</template>
    <template #lead>The development of NenUI is guided by an international
      team, some of whom have chosen to be featured below.</template>
    <template #members>
      <VPTeamMembers size="small" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>