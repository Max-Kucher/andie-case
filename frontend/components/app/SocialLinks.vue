<script setup lang="ts">
const id = useId()
const { t } = useI18n()

const settings = inject('AppSettings') as Record<string, string>
</script>

<template>
  <div class="flex items-center gap-x-2.5">
    <NuxtLink
      v-for="social in ['x', 'instagram', 'youtube']"
      :key="`${id}-${social}`"
      :to="settings[`${social}-link`]"
      :title="t(`socials.${social}`)"
      class="p-2"
    >
      <NuxtImg
        :src="`/socials/${social}.svg`"
        :alt="t(`socials.${social}`)"
        :width="16"
      />
    </NuxtLink>
  </div>
</template>
