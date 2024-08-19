<script lang="ts" setup>
import type { Officer } from '~/@types/Officer'

defineProps<{
  item: Officer
}>()

const { t } = useI18n()

const active = ref<boolean>(false)

const readMoreImageSize = ref<number>(21)
onMounted(() => {
  if (window?.innerWidth < 1024) {
    readMoreImageSize.value = 12
  }
})
</script>

<template>
  <div
    :class="{
      'active-list-item': active
    }"
  >
    <div class="relative bg-placeholder max-lg:h-40 lg:h-60">
      <AppBackgroundPicture
        v-if="item.image?.url"
        :img="item.image"
        class="officer-image"
      />
    </div>
    <div class="px-3.5 max-lg:pt-2.5 lg:pt-5 max-lg:pb-3 lg:pb-6 bg-placeholder-light">
      <div class="list-item-title leading-[1.08] small-tablet:max-lg:text-[20px] lg:text-[33px] font-medium mb-2.5">
        {{ item.name }}
      </div>

      <p class="max-lg:text-xs">
        {{ item.shortDescription }}
      </p>

      <ButtonsDarkReadMore
        :to="{ name: 'law-enforcement-officers-id', params: { id: item.id } }"
        :text="t('officers.readMore')"
        :image-width="readMoreImageSize"
        class="max-lg:mt-3 lg:mt-8 cursor-pointer max-lg:py-1 max-lg:px-2 max-lg:text-sm"
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
