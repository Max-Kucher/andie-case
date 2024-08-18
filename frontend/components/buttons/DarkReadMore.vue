<script lang="ts" setup>
import type { ReadMoreButtonProps } from '~/components/buttons/ReadMore.vue'
import { twMerge } from 'tailwind-merge'

interface Props extends /** @vue-ignore */ ReadMoreButtonProps { }

defineProps<Props>()
</script>

<template>
  <ButtonsReadMore
    v-bind="{
      'inverted-image': true,
      ...$attrs,
      ...$props,
    }"
    :class="twMerge('bg-black text-white transition-colors hover:bg-light-black hover:text-accent', $props.class)"
  />
</template>
