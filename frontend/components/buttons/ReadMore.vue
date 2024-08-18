<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import {twMerge} from "tailwind-merge";

export interface ReadMoreButtonProps {
  to: RouteLocationRaw
  invertedImage?: boolean
  text?: string
  class?: string
  imageWidth?: number
}

const props = withDefaults(defineProps<ReadMoreButtonProps>(), {
  imageWidth: 21,
})

const { t } = useI18n()

const readFullTxt = computed(() => {
  return props.text ?? t('readFull')
})
</script>

<template>
  <NuxtLinkLocale
    :to="to"
    :class="twMerge('app-button gap-x-2 inline-flex', $props.class)"
  >
    <slot v-if="$slots.default" />
    <span v-else>
      {{ readFullTxt }}
    </span>

    <NuxtImg
      src="/images/icons/button-arrow.svg"
      :width="$props.imageWidth"
      :alt="readFullTxt"
      :class="{ 'invert': invertedImage }"
    />
  </NuxtLinkLocale>
</template>
