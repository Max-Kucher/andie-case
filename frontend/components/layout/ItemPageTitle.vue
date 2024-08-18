<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'

defineProps<{
  title: string
  viewsCount: number
  createdAt: string | Date
}>()

const titleElem = ref<HTMLElement>()
onMounted(() => {
  setTimeout(() => {
    titleElem.value?.classList.remove('item-page-title')
  }, 200)
})

const doNoCenterPageTitle = inject<boolean>('doNoCenterPageTitle', false)
</script>

<template>
  <div
    class="flex flex-col mt-20 pb-1 mb-16"
    :class="{
      'items-center': !doNoCenterPageTitle,
    }"
  >
    <h1
      ref="titleElem"
      class="app-header item-page-title"
    >
      {{ title }}
    </h1>

    <div class="flex mt-7 font-medium gap-x-9">
      <time
        :datetime="createdAt.toString()"
        class="text-lg"
      >
        {{ formatDate('d.m.Y', createdAt) }}
      </time>

      <LayoutViewsCount
        :views-count="viewsCount"
        class="text-base items-center"
      />
    </div>
  </div>
</template>
