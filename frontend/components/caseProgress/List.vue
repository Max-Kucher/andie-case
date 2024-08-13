<script setup lang="ts">
import type { CaseProgressItem } from '~/@types/CaseProgressItem'

defineProps<{
  caseProgressItems: CaseProgressItem[]
}>()
</script>

<template>
  <ListsItemsList>
    <CaseProgressListItem
      v-for="(caseProgressItem, idx) in caseProgressItems"
      :key="`criminal-proceeding-list-item-${caseProgressItem.id}`"
      :item="caseProgressItem"
      :item-idx="idx"
    />
  </ListsItemsList>
</template>
