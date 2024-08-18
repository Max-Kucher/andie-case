<script setup lang="ts">
import type { NewsItem } from '~/@types/NewsItem'

defineProps<{
  newsItem: NewsItem
}>()

const active = ref<boolean>(false)

const mobileHeader = ref<HTMLElement>()
const desktopHeader = ref<HTMLElement>()

const addTransitionClassToTitle = () => {
  const el = window.innerWidth > 699 ? desktopHeader : mobileHeader
  el.value?.classList.add('list-item-title')
}
</script>

<template>
  <div
    class="app-layout-cols max-small-tablet:flex max-small-tablet:flex-col max-small-tablet:pb-8 max-small-tablet:mb-8 small-tablet:pb-12 small-tablet:mb-12 border-b border-b-placeholder"
    :class="{
      'active-list-item': active,
    }"
  >
    <h4
      ref="mobileHeader"
      class="small-tablet:hidden mb-3 text-[20px] leading-[1.06em] font-medium"
    >
      {{ newsItem.title }}
    </h4>

    <div class="flex flex-col lg:justify-center max-small-tablet:order-2 items-start small-tablet:max-lg:col-span-2">
      <h4
        ref="desktopHeader"
        class="max-small-tablet:hidden text-[25px] leading-[1.06em] font-medium"
      >
        {{ newsItem.title }}
      </h4>

      <p
        v-if="newsItem.shortDescription?.length"
        class="max-small-tablet:mt-3 small-tablet:mt-5"
        v-html="newsItem.shortDescription"
      />

      <ButtonsDarkReadMore
        :to="{ name: 'mass-media-id', params: { id: newsItem.id } }"
        class="mt-6"
        @click.native="() => {
          addTransitionClassToTitle()
          active = true
        }"
      />
    </div>

    <div class="lg:col-span-2 bg-placeholder max-small-tablet:order-1 max-small-tablet:h-48 lg:h-[400px] relative">
      <AppBackgroundPicture
        v-if="newsItem.image?.url"
        :img="newsItem.image"
        class="news-image"
      />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.active-list-item .news-image {
  view-transition-name: news-image;
}
</style>
