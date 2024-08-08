<script setup lang="ts">
import type { SwiperOptions } from 'swiper/types'

interface Props extends /** @vue-ignore */ SwiperOptions { }

defineProps<Props>()

const id = useId()
</script>

<template>
  <Swiper
    loop
    :modules="[SwiperPagination, SwiperNavigation]"
    :pagination="{
      enabled: true,
      clickable: true,
      el: `#${id}-pagination`,
    }"
    :navigation="{
      enabled: true,
      prevEl: `#${id}-nav-prev`,
      nextEl: `#${id}-nav-next`,
    }"
  >
    <slot />

    <div class="flex items-center justify-center gap-x-3 mt-10">
      <button :id="`${id}-nav-prev`">
        <NuxtImg
          src="/icons/prev.svg"
          class="w-2.5"
        />
      </button>
      <div
        :id="`${id}-pagination`"
        class="flex !w-auto min-w-28 items-center justify-center gap-x-2"
      />
      <button :id="`${id}-nav-next`">
        <NuxtImg
          src="/icons/next.svg"
          class="w-2.5"
        />
      </button>
    </div>
  </Swiper>
</template>
