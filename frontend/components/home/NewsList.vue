<script setup lang="ts">
import type { NewsItem } from '~/@types/NewsItem'

const news = inject<NewsItem[]>('latestNewsItems', [])

const { t } = useI18n()
</script>

<template>
  <section>
    <LayoutContainer class="max-small-tablet:pt-16 small-tablet:max-lg:pt-20 lg:pt-28 max-small-tablet:pb-14 small-tablet:max-lg:pb-32 lg:pb-44">
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
