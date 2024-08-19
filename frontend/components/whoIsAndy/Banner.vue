<script setup lang="ts">
import type { WhoIsAndyBanner } from '~/@types/WhoIsAndyBanner'

defineProps<{
  banner: WhoIsAndyBanner
}>()
</script>

<template>
  <LayoutContainer class="relative">
    <AppBackgroundPicture
      v-if="banner.image?.url"
      :img="banner.image"
      object-class="small-tablet:object-contain max-small-tablet:object-cover"
      class="z-10"
    />

    <div class="elipse absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden" />

    <Component
      :is="banner.titleTag"
      :class="{
        'who-is-andy': banner.transitionToTitle,
      }"
      class="banner-title relative text-center text-white uppercase font-druk-wide font-medium leading-tight z-20"
      data-swiper-parallax="-40%"
    >
      {{ banner.title }}
    </Component>

    <div class="andy-banner-gradient absolute bottom-0 left-0 right-0 z-10" />
  </LayoutContainer>
</template>

<style scoped lang="postcss">
.who-is-andy {
  view-transition-name: who-is-andy-title;
}

.banner-title {
  @apply max-small-tablet:text-[38.3px] max-small-tablet:pb-52 max-small-tablet:pt-64 small-tablet:max-lg:text-[55.8px] small-tablet:max-lg:pb-60 small-tablet:max-lg:pt-72 lg:text-[94.54px] lg:pb-80 lg:pt-96;
}

.andy-banner-gradient {
  @apply h-80 bg-gradient-to-t from-black to-black/0;
}

.elipse {
  @apply  blur-[5rem] backdrop-blur-xl;
}

.elipse:before {
  content: "";
  @apply block pt-[100%];
  background: radial-gradient(circle, rgba(244,45,14, .79) 0%, rgba(0,0,0,1) 100%);
}
</style>
