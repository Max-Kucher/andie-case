<script setup lang="ts">
import type { NewsItem } from '~/@types/NewsItem'

const latestNewsItems = inject<NewsItem[]>('latestNewsItems', [])

const banner = computed(() => {
  return (latestNewsItems?.length ? latestNewsItems[0] : {}) as NewsItem
})
</script>

<template>
  <NuxtLinkLocale
    :to="{ name: 'mass-media-id', params: { id: banner.id } }"
    class="bg-placeholder relative block"
  >
    <AppBackgroundPicture
      v-if="banner.image?.url"
      :img="banner.image"
    />

    <div
      v-if="banner.image?.url"
      class="absolute inset-0 bg-black opacity-30 z-10"
    />

    <LayoutContainer class="app-layout-cols relative z-20">
      <div class="font-medium tablet:max-lg:col-span-3 lg:col-span-2 tablet:mt-64 tablet:mb-36 max-tablet:pt-56 max-tablet:pb-20">
        <div class="flex gap-x-8 text-xl mb-4 lg:mb-8">
          <time :datetime="banner.createdAt">
            {{ formatDate('H:i d.m.Y', banner.createdAt) }}
          </time>

          <LayoutViewsCount :views-count="banner.viewsCount" />
        </div>

        <h1>
          {{ banner.title }}
        </h1>
      </div>
    </LayoutContainer>
  </NuxtLinkLocale>
</template>

<style lang="postcss" scoped>
h1 {
  @apply max-tablet:text-[33px] tablet:max-lg:text-[45px] lg:text-[53px] leading-[112%];
}
</style>
