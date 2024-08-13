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
      class="prose-base prose-p:text-faded-text-light prose-headings:mt-11 prose-headings:mb-8 prose-headings:text-3xl prose-headings:font-medium prose-headings:uppercase prose-headings:font-druk-wide"
      v-html="description"
    />

    <div
      v-if="images?.length"
      class="grid grid-cols-2 gap-7 mt-12"
    >
      <NuxtPicture
        v-for="(image, idx) in images"
        :key="`criminal-procedding-details-${id}-${idx}`"
        :src="image.url?.replace('/uploads', '')"
        :alt="image.alternativeText ?? ''"
        provider="strapi"
      />
    </div>
  </LayoutItemDetailsFramework>
</template>
