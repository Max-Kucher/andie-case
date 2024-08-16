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
      <div class="font-medium col-span-2 mt-56 lg:mb-32">
        <div class="flex gap-x-8 text-xl mb-8">
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
  @apply text-[53px] leading-[112%];
}
</style>
