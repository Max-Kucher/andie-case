<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="bg-light-black">
    <LayoutContainer class="app-layout-cols lg:pt-48 lg:pb-32">
      <div>
        <h2 class="text-white font-medium text-4xl">
          {{ t('whoIsAndy.title') }}
        </h2>

        <div class="text-faded-text-light text-lg font-medium mt-12 space-y-4">
          <p>
            {{ t('whoIsAndy.short.text_1') }}
          </p>

          <p>
            {{ t('whoIsAndy.short.text_2') }}
          </p>

          <p>
            {{ t('whoIsAndy.short.text_3') }}
          </p>
        </div>
      </div>

      <div>
        <div class="bg-placeholder min-h-96"></div>
      </div>

      <div>
        <div class="bg-placeholder min-h-64"></div>
      </div>
    </LayoutContainer>
  </div>
</template>
