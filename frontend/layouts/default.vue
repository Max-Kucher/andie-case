<script setup lang="ts">
import type PageItem from '~/@types/PageItem'

const route = useRoute()
const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

const defaultTitle = t((route.meta.title ?? 'layouts.title') as string)
const pagesSettings = inject<PageItem[]>('PagesSettings', [])

const runtimeConfig = useRuntimeConfig()

const headParams = computed(() => {
  if (pagesSettings === undefined) {
    return {}
  }

  const routeName = route.name?.split('___')[0]

  const pageSettings = pagesSettings.find(page => {
    return page.name === routeName
  })

  const title = `${pageSettings?.title ?? ''} - ${defaultTitle}`

  const head = {
    title,
    meta: [
      { name: 'theme-color', content: '#000000' },
      { property: 'og:title', content: title },
    ],
  }

  if (pageSettings?.description !== undefined && pageSettings.description?.length) {
    head.meta.push({ name: 'description', content: pageSettings.description })
  }

  if (pageSettings?.description !== undefined && pageSettings.description?.length) {
    head.meta.push({ property: 'og:description', content: pageSettings.description })
  }

  if (pageSettings?.ogImage !== undefined && pageSettings.ogImage.url !== undefined) {
    head.meta.push({ property: 'og:description', content: buildBackendImageUrl(runtimeConfig, pageSettings.ogImage.url) })
  }

  return head
})

useHead(headParams)
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
  <Head>
    <template v-for="link in head.link" :key="link.id">
      <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
    </template>
    <template v-for="meta in head.meta" :key="meta.id">
      <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
    </template>
  </Head>
  <Body>
    <LayoutHeader class="bg-black" />

    <main>
      <slot />
    </main>

    <LayoutFooter />
  </Body>
  </Html>
</template>
