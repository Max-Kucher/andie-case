<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

const defaultTitle = t((route.meta.title ?? 'layouts.title') as string)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
        ? `${titleChunk} - ${defaultTitle}` : defaultTitle;
  },
  meta: [
    { name: 'description', content: t('layouts.metaDescription') }
  ],
})

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
    <main class="min-h-[calc(100dvh-100px)]">
      <slot />
    </main>

<!--  <AuthAside v-show="authAsideOpened" />-->

<!--  <LayoutAppFooter />-->
  </Body>
  </Html>
</template>
