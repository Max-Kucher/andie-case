<script setup lang="ts">
import type { WhoIsAndyBanner } from '~/@types/WhoIsAndyBanner'

defineProps<{
  banner: WhoIsAndyBanner
}>()
</script>

<template>
  <LayoutContainer>
    <Component
      :is="banner.titleTag"
      :class="{
        'who-is-andy': banner.transitionToTitle,
      }"
      class=""
      data-swiper-parallax="-25%"
    >
      {{ banner.title }}
    </Component>
  </LayoutContainer>
</template>

<style scoped>
.who-is-andy {
  view-transition-name: who-is-andy-title;
}
</style>
