<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

export interface ReadMoreButtonProps {
  to: RouteLocationRaw
  invertedImage?: boolean
  text?: string
}

const props = defineProps<ReadMoreButtonProps>()

const { t } = useI18n()

const readFullTxt = computed(() => {
  return props.text ?? t('readFull')
})
</script>

<template>
  <NuxtLinkLocale
    :to="to"
    class="app-button gap-x-1.5 inline-flex"
  >
    {{ readFullTxt }}

    <NuxtImg
      src="/images/icons/button-arrow.svg"
      :width="21"
      :alt="readFullTxt"
      :class="{ 'invert': invertedImage }"
    />
  </NuxtLinkLocale>
</template>
