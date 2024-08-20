<script setup lang="ts">
import type { Pagination } from '~/@types/Pagination'

const pagination = defineModel<Pagination>('pagination', { required: true })

const route = useRoute()
const { t } = useI18n()

const prevPage = computed(() => {
  return pagination.value.page === 1 ? 1 : pagination.value.page - 1
})

const nextPage = computed(() => {
  return pagination.value.page === pagination.value.pageCount
      ? pagination.value.page
      : pagination.value.page + 1
})
</script>

<template>
  <div class="flex max-small-tablet:gap-x-4 small-tablet:gap-x-6 justify-center max-tablet:mb-16 tablet:mb-24">
    <ButtonsPagination
      :text="t('layouts.pagination.prev')"
      :to="{ name: route.name }"
      :disabled="pagination.page === 1"
      :page="prevPage"
      @click="() => {
        pagination.page = prevPage
      }"
    />

    <ButtonsPagination
      :text="t('layouts.pagination.next')"
      :to="{ name: route.name }"
      :disabled="pagination.page === pagination.pageCount"
      :page="nextPage"
      is-next
      @click.prevent="() => {
        pagination.page = nextPage
      }"
    />
  </div>
</template>
