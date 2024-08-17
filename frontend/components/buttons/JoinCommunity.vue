<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'

defineComponent({
  inheritAttrs: false,
})

defineProps<{
  class?: string
}>()

const { t } = useI18n()
const settings = inject<Record<string, string>>('AppSettings', {})
</script>

<template>
  <NuxtLink
    :class="twMerge('flex items-center bg-white gap-2 rounded-[10px] py-2 px-2.5 font-medium text-[15px] lg:text-lg transition-colors hover:bg-white/95', $props.class)"
    :to="settings['telegram-link'] ?? null"
    target="_blank"
  >
    <NuxtImg
      src="/images/socials/telegram.svg"
      :alt="t('socials.telegram')"
      :width="32"
      class="w-[24px] tablet:w-[27px] lg:w-[32px]"
    />

    <span class="max-w-[114px] tablet:max-w-none">
      {{ t('common.joinCommunity.button.text') }}
    </span>
  </NuxtLink>
</template>
