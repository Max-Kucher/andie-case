<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to?: RouteLocationRaw
  linkText?: string
  title: string
}>()
</script>

<template>
  <div
    class="max-lg:mb-6 lg:mb-11 flex"
    :class="{ 'justify-between items-center gap-5': to || linkText }"
  >
    <h3 class="app-header">
      {{ title }}
    </h3>

    <NuxtLinkLocale
      v-if="to || linkText"
      :to="to"
      class="bg-black text-white leading-none py-2 px-3.5 rounded-md transition-colors hover:bg-light-black hover:text-accent"
    >
      {{ linkText }}
    </NuxtLinkLocale>
  </div>
</template>
