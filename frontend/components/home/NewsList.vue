<script setup lang="ts">
import type { NewsItem } from '~/@types/NewsItem'

const news = inject<NewsItem[]>('latestNewsItems')

const { t } = useI18n()
</script>

<template>
  <section>
    <LayoutContainer class="pt-28 pb-44">
      <LayoutBlockTitle :title="t('news.title')" />

      <NewsList :news="news" />
    </LayoutContainer>
  </section>
</template>
