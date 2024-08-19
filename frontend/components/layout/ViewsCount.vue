<script setup lang="ts">
withDefaults(defineProps<{
  viewsCount: number
  imageWidth?: number
  invertImage?: boolean
}>(), {
  imageWidth: 22,
})

const { t } = useI18n()
</script>

<template>
  <div class="flex gap-1.5">
    <NuxtImg
      src="/images/icons/eye.svg"
      :width="$props.imageWidth"
      :alt="t('viewsCount')"
      :class="{
        'invert': invertImage,
      }"
    />

    {{ viewsCount }}
  </div>
</template>
