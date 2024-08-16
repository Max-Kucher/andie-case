<script setup lang="ts">
const { t } = useI18n()
const settings = inject<Record<string, string>>('AppSettings', {})

const isOpened = useState('isMainMenuOpened')
</script>

<template>
  <div class="tablet:hidden flex items-center gap-x-2 -mr-1">
    <NuxtLink
      :to="settings['telegram-link'] ?? null"
      target="_blank"
      class="p-1"
    >
      <NuxtImg
        src="/images/socials/telegram.svg"
        :alt="t('socials.telegram')"
        :width="22"
      />
    </NuxtLink>

    <button
      class="p-1"
      :title="t('layouts.menu')"
      @click="isOpened = !isOpened"
    >
      <NuxtImg
        src="/images/icons/menu.svg"
        :width="32"
        :alt="t('layouts.menu')"
      />
    </button>
  </div>
</template>
