<script setup lang="ts">
import type BackendImage from '~/@types/BackendImage'

defineProps<{
  id: number
  title: string
  description: string
  viewsCount: number
  createdAt: string | Date
  images: BackendImage[]
  prevText: string
  nextText: string
}>()
</script>

<template>
  <LayoutItemDetailsFramework
    :id="id"
    :title="title"
    :views-count="viewsCount"
    :created-at="createdAt"
    :prev-text="prevText"
    :next-text="nextText"
  >
    <div
      class="app-prose"
      v-html="description"
    />

    <div
      v-if="images?.length"
      class="grid tablet:grid-cols-2 gap-7 max-small-tablet:mt-6 small-tablet:mt-12"
    >
      <NuxtPicture
        v-for="(image, idx) in images"
        :key="`criminal-procedding-details-${id}-${idx}`"
        :src="buildBackendImageUrl($config, image)"
        :alt="image.alternativeText ?? ''"
      />
    </div>
  </LayoutItemDetailsFramework>
</template>
