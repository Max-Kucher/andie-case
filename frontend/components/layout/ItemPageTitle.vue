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
    class="flex flex-col max-small-tablet:mt-10 small-tablet:max-lg:mt-16 lg:mt-20 max-small-tablet:mb-10 small-tablet:max-lg:mb-12 lg:mb-16"
    :class="{
      'items-center': !doNoCenterPageTitle,
    }"
  >
    <h1
      ref="titleElem"
      class="app-header item-page-title"
      :class="{
        'text-center max-small-tablet:max-w-xs small-tablet:max-lg:max-w-lg': !doNoCenterPageTitle,
      }"
    >
      {{ title }}
    </h1>

    <div class="flex max-lg:mt-3 lg:mt-7 font-medium gap-x-9">
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
