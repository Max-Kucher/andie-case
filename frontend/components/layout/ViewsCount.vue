<script setup lang="ts">
defineProps<{
  viewsCount: number
}>()

const { t } = useI18n()
</script>

<template>
  <div class="flex gap-1.5">
    <NuxtImg
        src="/images/icons/eye.svg"
        :width="22"
        :alt="t('viewsCount')"
    />

    {{ viewsCount }}
  </div>
</template>
