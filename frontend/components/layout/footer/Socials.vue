<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <p class="uppercase text-sm mb-1">
      {{ t('footer.socials.title') }}
    </p>

    <AppSocialLinks />
  </div>
</template>
