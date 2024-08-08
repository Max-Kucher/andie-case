<script setup lang="ts">
import type { WhoIsAndyBanner } from '~/@types/WhoIsAndyBanner'

defineProps<{
  banners: WhoIsAndyBanner[]
}>()
</script>

<template>
  <AppScroller
    :speed="700"
    :modules="[SwiperPagination, SwiperNavigation, SwiperParallax]"
    :parallax="{
      enabled: true,
    }"
  >
    <SwiperSlide
        v-for="(banner, idx) in banners"
        :key="`who-is-andy-banner-${idx}`"
    >
      <WhoIsAndyBanner :banner="banner" />
    </SwiperSlide>
  </AppScroller>
</template>
