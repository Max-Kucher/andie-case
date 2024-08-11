<script setup lang="ts">
defineProps<{
  title: string
  viewsCount: number
  createdAt: string | Date
}>()
</script>

<template>
  <div class="flex flex-col items-center mt-20 pb-1 mb-16">
    <h1 class="app-header item-page-title">{{ title }}</h1>

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
