<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex justify-center max-small-tablet:mt-12 max-small-tablet:mb-10 small-tablet:max-lg:mt-16 small-tablet:max-lg:mb-11 lg:mt-20 lg:pb-2 lg:mb-28">
    <h1 class="app-header text-center">{{ title }}</h1>
  </div>
</template>
