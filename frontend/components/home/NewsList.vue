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

      <div class="flex justify-center">
        <NuxtLinkLocale
          :to="{ name: 'mass-media' }"
          class="flex items-center h-16 app-button bg-black text-white transition-colors hover:bg-light-black hover:text-accent"
        >
          {{ t('news.block.readMore') }}
        </NuxtLinkLocale>
      </div>
    </LayoutContainer>
  </section>
</template>
