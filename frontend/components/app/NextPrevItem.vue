<script setup lang="ts">
defineProps<{
  prevText: string
  nextText: string
}>()

const route = useRoute()

const entityId = route.params.id
const entityType = getRouteEntity()

const { data } = await useAPI<{
  prev: number | null
  next: number | null
}>(`/api/${entityType}/${entityId}/next-prev`)
</script>

<template>
  <div class="flex gap-x-6 justify-center">
    <ButtonsPagination
      :text="prevText"
      :to="{ name: route.name, params: { id: data.prev } }"
      :disabled="data.prev === null"
    />

    <ButtonsPagination
      :text="nextText"
      :to="{ name: route.name, params: { id: data.next } }"
      :disabled="data.next === null"
      is-next
    />
  </div>
</template>
