<script setup lang="ts">
import type { SwiperOptions } from 'swiper/types'

interface Props extends /** @vue-ignore */ SwiperOptions { }

defineProps<Props & {
  appPaginationWrapperClass?: string
}>()

const id = useId()
</script>

<template>
  <Swiper
    v-bind="{
      ...getDefaultScrollerParams(id),
      ...$props,
      ...$attrs,
    }"
  >
    <slot />

    <div
      class="flex items-center justify-center gap-x-3 mt-10"
      :class="appPaginationWrapperClass"
    >
      <button
        :id="`${id}-nav-prev`"
        class="hover:invert-[35%] transition-[filter]"
      >
        <NuxtImg
          src="/images/icons/prev.svg"
          class="w-2.5"
        />
      </button>
      <div
        :id="`${id}-pagination`"
        class="flex !w-auto min-w-28 items-center justify-center gap-x-2"
      />
      <button
        :id="`${id}-nav-next`"
        class="hover:invert-[35%] transition-[filter]"
      >
        <NuxtImg
          src="/images/icons/next.svg"
          class="w-2.5"
        />
      </button>
    </div>
  </Swiper>
</template>
