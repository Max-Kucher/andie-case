<script lang="ts" setup>
import type BackendImage from '~/@types/BackendImage'

const props = withDefaults(defineProps<{
  img: BackendImage | string
  objectClass?: string
}>(), {
  objectClass: 'object-fill',
})

const alternateText = computed(() => {
  return typeof props.img === 'string' ? '' : props.img?.alternativeText ?? ''
})
</script>

<template>
  <NuxtPicture
    :src="typeof img === 'string' ? img : buildBackendImageUrl($config, img)"
    class="absolute inset-0"
    :class="props.objectClass"
    :imgAttrs="{
      class: `${props.objectClass} absolute w-full h-full`,
      alt: alternateText,
    }"
  />
</template>
