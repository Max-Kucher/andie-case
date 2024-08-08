<script setup lang="ts">
import type { NewsItem } from '~/@types/NewsItem'

defineProps<{
  news: NewsItem[]
}>()
</script>

<template>
  <div>
    <NewsListItem
      v-for="newsItem in news"
      :key="`news-list-${newsItem.id}`"
      :news-item="newsItem"
    />
  </div>
</template>
