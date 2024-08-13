<script lang="ts" setup>
import type { Officer } from '~/@types/Officer'

defineProps<{
  item: Officer
}>()

const { t } = useI18n()

const active = ref<boolean>(false)
</script>

<template>
  <div
    :class="{
      'active-list-item': active
    }"
  >
    <div class="relative bg-placeholder h-60">
      <AppBackgroundPicture
        v-if="item.image?.url"
        :img="item.image"
        class="officer-image"
      />
    </div>
    <div class="px-3.5 pt-5 pb-6 bg-placeholder-light">
      <div class="list-item-title text-3xl font-medium mb-2.5">
        {{ item.name }}
      </div>

      <p>
        {{ item.shortDescription }}
      </p>

      <ButtonsDarkReadMore
        :to="{ name: 'law-enforcement-officers-id', params: { id: item.id } }"
        :text="t('officers.readMore')"
        class="mt-8 cursor-pointer"
        @click.native="active = true"
      />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.active-list-item .officer-image {
  view-transition-name: officer-image;
}
</style>
