<script setup lang="ts">
import type { CriminalProceedingItem } from '~/@types/CriminalProceedingItem'
import {trimString} from "~/utils/helpers";

defineProps<{
  criminalProceedings: CriminalProceedingItem[]
}>()
</script>

<template>
  <ListsItemsList>
    <ListsItem
      v-for="criminalProceeding in criminalProceedings"
      :key="`criminal-proceeding-list-item-${criminalProceeding.id}`"
      :title="criminalProceeding.title"
      :description="trimString(criminalProceeding.shortDescription)"
      :views-count="criminalProceeding.viewsCount"
      :to="{ name: 'criminal-proceedings-id', params: { id: criminalProceeding.id } }"
      :created-at="criminalProceeding.createdAt"
      :show-image="criminalProceeding.showImageInList && Boolean<number>(criminalProceeding.images?.length)"
      :image="criminalProceeding.images[0]"
    />
  </ListsItemsList>
</template>
