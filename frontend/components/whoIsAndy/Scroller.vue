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
    class="bg-black"
    app-pagination-wrapper-class="absolute left-1/2 z-[11] -translate-x-1/2 bottom-24"
    :slides-per-view="1"
    :breakpoints="{}"
  >
    <SwiperSlide
        v-for="(banner, idx) in banners"
        :key="`who-is-andy-banner-${idx}`"
    >
      <WhoIsAndyBanner :banner="banner" />
    </SwiperSlide>
  </AppScroller>
</template>
