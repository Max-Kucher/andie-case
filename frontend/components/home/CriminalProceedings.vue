<script lang="ts" setup>
import type { CriminalProceedingItem } from '~/@types/CriminalProceedingItem'

const criminalProceedings = inject<CriminalProceedingItem[]>('criminalProceedings')

const { t } = useI18n()
</script>

<template>
<section class="pt-28 pb-20 bg-[#E6EBE6]">
  <LayoutContainer>

    <I18nT
      keypath="criminalProceedings.block.title"
      scope="global"
      tag="h3"
      class="app-header"
    >
      <br />
    </I18nT>

    <div class="mt-11">
      <details
        v-for="item in criminalProceedings"
        :key="`home-criminal-proceedings-${item.id}`"
        class="border-b border-black"
      >
        <summary class="marker:content-none flex items-center justify-between text-2xl font-medium py-5 cursor-pointer">
          {{ item.title }}

          <span class="mc-summary-btn relative block w-10 h-10 border border-black rounded-full">
            <span class="absolute bg-black rounded" />
            <span class="absolute bg-black rounded transition-transform" />
          </span>
        </summary>

        <div class="prose-base" v-html="createShortDescription(item.description, 8)" />

        <ButtonsReadMore
          :to="{ name: 'criminal-proceedings-id', params: { id: item.id } }"
          class="bg-black text-white mt-5 transition-colors hover:bg-light-black"
          inverted-image
        />
      </details>
    </div>

    <NuxtLinkLocale
      :to="{ name: 'criminal-proceedings' }"
      class="app-button flex items-center h-14 bg-black text-white w-max mt-14 mx-auto transition-colors hover:text-accent hover:bg-light-black"
    >
      {{ t('criminalProceedings.block.button') }}
    </NuxtLinkLocale>

  </LayoutContainer>
</section>
</template>

<style scoped lang="postcss">
details[open] {
  @apply pb-5;
}

.mc-summary-btn span {
  height: 3px;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

details[open] .mc-summary-btn span:last-child {
  transform: translate(-50%, -50%) rotateZ(90deg);
}
</style>
