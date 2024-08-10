<script lang="ts" setup>
import type { CaseProgressItem } from '~/@types/CaseProgressItem'
import BackgroundPicture from "~/components/app/BackgroundPicture.vue";

const props = defineProps<{
  item: CaseProgressItem
  itemIdx: number
}>()

const backgroundClass = computed(() => {
  const classes = ['bg-[#FFBE5B]/55', 'bg-[#FF5B5B]/55', 'bg-[#5BCEFF]/55']
  return classes[props.itemIdx % classes.length]
})
</script>

<template>
  <AppListItem
    :title="item.title"
    :description="item.shortDescription"
    :views-count="item.viewsCount"
    :to="{ name: 'case-progress-id', params: { id: item.id } }"
    :createdAt="item.createdAt"
    :backgroundClass="backgroundClass"
    :show-image="item.showImageInList"
    :image="item.images[0]"
  />
</template>
