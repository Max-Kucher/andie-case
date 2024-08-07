<script setup lang="ts">
const id = useId()
const { t } = useI18n()

const settings = inject<Record<string, string>>('AppSettings')
</script>

<template>
  <div class="flex items-center gap-x-2.5">
    <NuxtLink
      v-if="settings"
      v-for="social in ['x', 'instagram', 'youtube']"
      :key="`${id}-${social}`"
      :to="settings[`${social}-link`]"
      :title="t(`socials.${social}`)"
      class="p-2"
      target="_blank"
    >
      <NuxtImg
        :src="`/socials/${social}.svg`"
        :alt="t(`socials.${social}`)"
        :width="16"
        :class="{ 'invert': ~['x'].indexOf(social) }"
      />
    </NuxtLink>
  </div>
</template>
