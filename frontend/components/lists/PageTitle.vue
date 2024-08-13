<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex justify-center mt-20 pb-2 mb-28">
    <h1 class="app-header">{{ title }}</h1>
  </div>
</template>
