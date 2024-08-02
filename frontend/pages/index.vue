<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('homepage.seo.title')
})
</script>

<template>
  <LayoutContainer>
    <h1 class="text-red-400">Homepage</h1>
  </LayoutContainer>
</template>

