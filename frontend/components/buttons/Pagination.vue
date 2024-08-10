<script setup lang="ts">
import type { RouteLocationAsRelativeGeneric } from 'vue-router'

withDefaults(defineProps<{
  text: string
  to: RouteLocationAsRelativeGeneric
  page: number,
  disabled: boolean
  isNext?: boolean
}>(), {
  isNext: false,
})
</script>

<template>
  <NuxtLink
    :to="{ ...to, query: { page } }"
    class="app-button gap-x-1.5 inline-flex text-white transition-colors"
    :class="{
      'bg-[#E9E9E9] pointer-events-none': disabled,
      'bg-black hover:bg-light-black hover:text-accent': !disabled,
    }"
  >
    {{ text }}

    <NuxtImg
      src="/images/icons/button-arrow.svg"
      :width="21"
      :alt="text"
      class="invert"
      :class="{
        'rotate-180': !isNext,
      }"
    />
  </NuxtLink>
</template>
