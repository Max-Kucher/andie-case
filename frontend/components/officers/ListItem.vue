<script lang="ts" setup>
import type { Officer } from '~/@types/Officer'

defineProps<{
  item: Officer
}>()

const { t } = useI18n()
</script>

<template>
  <div>
    <div class="relative bg-placeholder h-60">
      <AppBackgroundPicture
        v-if="item.image"
        :img="item.image"
      />
    </div>
    <div class="px-3.5 pt-5 pb-6 bg-placeholder-light">
      <div class="text-3xl font-medium mb-2.5">
        {{ item.name }}
      </div>

      <p>
        {{ item.shortDescription }}
      </p>

      <ButtonsDarkReadMore
        :to="{ name: 'law-enforcement-officers-id', params: { id: item.id } }"
        :text="t('officers.readMore')"
        class="mt-8 cursor-pointer"
      />
    </div>
  </div>
</template>
