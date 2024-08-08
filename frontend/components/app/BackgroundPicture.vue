<script lang="ts" setup>
import type BackendImage from '~/@types/BackendImage'

const props = defineProps<{
  img: BackendImage | string
}>()

const runtimeConfig = useRuntimeConfig()

const alternateText = computed(() => {
  return typeof props.img === 'string' ? '' : props.img?.alternativeText ?? ''
})
</script>

<template>
  <NuxtPicture
    :src="typeof img === 'string' ? img : buildBackendImageUrl(runtimeConfig, img.url)"
    class="object-fill absolute inset-0"
    :imgAttrs="{
      class: 'object-fill absolute w-full h-full',
      alt: alternateText,
    }"
  />
</template>
