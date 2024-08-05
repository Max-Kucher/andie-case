<script setup lang="ts">
import type NewsItem from '~/@types/NewsItem'

const latestNewsItems = inject<NewsItem[]>('latestNewsItems')

const banner = computed(() => {
  return (latestNewsItems?.length ? latestNewsItems[0] : {}) as NewsItem
})

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <NuxtLinkLocale
    :to="{ name: 'mass-media-id', params: { id: banner.id } }"
    class="bg-placeholder min-h-[80dvh] relative block"
  >
    <NuxtPicture
      v-if="banner.image"
      :src="buildBackendImageUrl(runtimeConfig, banner.image.url)"
      class="object-fill absolute inset-0"
      :imgAttrs="{
        class: 'object-fill absolute w-full h-full'
      }"
    />

    <div class="absolute inset-0 bg-black opacity-30 z-10" />

    <LayoutContainer class="app-layout-cols relative z-20">
      <div class="font-medium col-span-2 lg:mt-36 lg:mb-24">
        <div class="flex gap-x-8 text-xl mb-8">
          <time :datetime="banner.createdAt">
            {{ formatDate('H:i d.m.Y', banner.createdAt) }}
          </time>

          <div class="flex gap-1.5">
            <NuxtImg
              src="/icons/eye.svg"
              :alt="banner.viewsCount.toString()"
              :width="22"
            />

            {{ banner.viewsCount }}
          </div>
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
