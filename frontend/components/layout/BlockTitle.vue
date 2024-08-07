<script lang="ts" setup>
import type {RouteLocationRaw} from "vue-router";

defineProps<{
  to: RouteLocationRaw
  linkText: string
  title: string
}>()
</script>

<template>
  <div class="flex justify-between items-center gap-5 mb-11">
    <h3 class="app-header">
      {{ title }}
    </h3>

    <NuxtLinkLocale
      :to="to"
      class="bg-black text-white leading-none py-2 px-3.5 rounded-md transition-colors hover:bg-light-black hover:text-accent"
    >
      {{ linkText }}
    </NuxtLinkLocale>
  </div>
</template>
