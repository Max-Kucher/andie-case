<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
  invertedImage?: boolean
}>()

const { t } = useI18n()

const readFullTxt = t('readFull')
</script>

<template>
  <NuxtLinkLocale
    :to="to"
    class="app-button gap-x-1.5 inline-flex"
  >
    {{ readFullTxt }}

    <NuxtImg
      src="/icons/button-arrow.svg"
      :width="21"
      :alt="readFullTxt"
      :class="{ 'invert': invertedImage }"
    />
  </NuxtLinkLocale>
</template>
