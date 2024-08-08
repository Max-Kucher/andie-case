<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="bg-light-black">
    <LayoutContainer class="app-layout-cols lg:pt-48 lg:pb-32">
      <div>
        <h3 class="text-white app-header who-is-andy">
          {{ t('whoIsAndy.title') }}
        </h3>

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

        <ButtonsReadMore
          :to="{ name: 'about-andy' }"
          class="bg-accent mt-16"
        />
      </div>
      <div>
        <div class="bg-placeholder min-h-[645px]"></div>
      </div>

      <div>
        <div class="bg-placeholder min-h-96"></div>
      </div>
    </LayoutContainer>
  </section>
</template>

<style scoped>
.who-is-andy {
  view-transition-name: who-is-andy-title;
}
</style>
