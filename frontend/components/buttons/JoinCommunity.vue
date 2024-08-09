<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <NuxtLink
    class="flex items-center bg-white gap-2 rounded-[10px] py-2 px-2.5 font-medium text-lg transition-colors hover:bg-white/95"
    to="https://t.me/max_cscart"
    target="_blank"
  >
    <NuxtImg
      src="/images/socials/telegram.svg"
      :alt="t('socials.telegram')"
      :width="32"
    />

    {{ t('common.joinCommunity.button.text') }}
  </NuxtLink>
</template>
