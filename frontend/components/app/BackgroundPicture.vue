<script lang="ts" setup>
import type BackendImage from '~/@types/BackendImage'

defineProps<{
  img: BackendImage
}>()

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <NuxtPicture
    :src="buildBackendImageUrl(runtimeConfig, img.url)"
    class="object-fill absolute inset-0"
    :imgAttrs="{
      class: 'object-fill absolute w-full h-full',
      alt: img.alternativeText ?? '',
    }"
  />
</template>
