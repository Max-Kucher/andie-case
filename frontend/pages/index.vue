<script setup lang="ts">
import { useI18n } from 'vue-i18n'

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
