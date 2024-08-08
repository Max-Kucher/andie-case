<script setup lang="ts">
import type { NewsItem } from '~/@types/NewsItem'

defineProps<{
  newsItem: NewsItem
}>()
</script>

<template>
  <div
    class="app-layout-cols pb-12 mb-12 border-b border-b-placeholder"
  >
    <div class="flex flex-col justify-center items-start">
      <h4 class="text-[25px] leading-[1.06em] font-medium">
        {{ newsItem.title }}
      </h4>

      <p
        class="mt-5"
        v-html="newsItem.shortDescription"
      />

      <ButtonsDarkReadMore
        :to="{ name: 'mass-media-id', params: { id: newsItem.id } }"
        class="mt-6"
      />
    </div>

    <div class="col-span-2 bg-placeholder h-[400px] relative">
      <AppBackgroundPicture
        v-if="newsItem.image?.url"
        :img="newsItem.image"
      />
    </div>
  </div>
</template>
