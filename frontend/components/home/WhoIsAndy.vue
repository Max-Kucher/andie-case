<script setup lang="ts">
const { t } = useI18n()

const mobileHeader = ref<HTMLElement>()
const desktopHeader = ref<HTMLElement>()

const addTransitionClassToTitle = () => {
  const el = window.innerWidth > 833 ? desktopHeader : mobileHeader
  el.value?.classList.add('who-is-andy')
}
</script>

<template>
  <section class="bg-light-black">
    <LayoutContainer class="max-tablet:flex max-tablet:flex-col max-tablet:space-y-5 max-lg:!grid-cols-2 app-layout-cols max-lg:pt-32 lg:pt-48 max-tablet:pb-16 tablet:pb-32">
      <div
        ref="mobileHeader"
        class="tablet:hidden app-header text-white max-w-52"
      >
        {{ t('whoIsAndy.title') }}
      </div>

      <div class="max-tablet:order-2">
        <h3
          ref="desktopHeader"
          class="max-tablet:hidden text-white app-header"
        >
          {{ t('whoIsAndy.title') }}
        </h3>

        <div class="text-faded-text-light lg:text-lg font-medium tablet:max-lg:mt-9 lg:mt-12 space-y-4">
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
          class="bg-accent max-tablet:mt-8 tablet:max-lg:mt-12 lg:mt-16"
          @click.native="addTransitionClassToTitle"
        />
      </div>
      <div class="max-tablet:order-1">
        <div class="bg-placeholder max-tablet:min-h-[336px] tablet:min-h-[645px]"></div>
      </div>

      <div class="max-lg:hidden">
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
