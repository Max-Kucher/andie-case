<script lang="ts" setup>
import type { CriminalProceedingItem } from '~/@types/CriminalProceedingItem'

const criminalProceedings = inject<CriminalProceedingItem[]>('criminalProceedings', [])

const { t } = useI18n()

const active = useState()
</script>

<template>
<section class="pt-24 lg:pt-28 max-small-tablet:pb-12 small-tablet:pb-20 bg-[#E6EBE6]">
  <LayoutContainer>

    <div class="flex">
      <I18nT
        keypath="criminalProceedings.block.title"
        scope="global"
        tag="h3"
        class="app-header"
      >
        <br />
      </I18nT>
    </div>

    <div class="mt-11">
      <details
        v-for="item in criminalProceedings"
        :key="`home-criminal-proceedings-${item.id}`"
        class="border-b border-black"
        :class="{
          'active-list-item': active === item.id,
        }"
      >
        <summary class="marker:content-none flex items-center justify-between gap-x-20 max-small-tablet:text-[18px] small-tablet:max-lg:text-[22px] max-lg:leading-[1.08] lg:text-2xl font-medium py-5 cursor-pointer">
          <span class="list-item-title">
            {{ item.title }}
          </span>

          <span
            class="mc-summary-btn relative block max-lg:min-w-8 max-lg:h-8 lg:min-w-10 lg:h-10 border border-black rounded-full"
            role="button"
          >
            <span class="absolute w-1/2 top-1/2 left-1/2 bg-black rounded -translate-x-1/2 -translate-y-1/2" />
            <span class="absolute w-1/2 top-1/2 left-1/2 bg-black rounded -translate-x-1/2 -translate-y-1/2 rotate-90 transition-transform" />
          </span>
        </summary>

        <div class="prose-base" v-html="item.shortDescription" />

        <ButtonsDarkReadMore
          :to="{ name: 'criminal-proceedings-id', params: { id: item.id } }"
          class="mt-5"
          @click.native="active = item.id"
        />
      </details>
    </div>

    <NuxtLinkLocale
      :to="{ name: 'criminal-proceedings' }"
      class="app-button flex items-center h-14 bg-black text-white max-small-tablet:justify-center small-tablet:w-max max-small-tablet:mt-10 small-tablet:max-lg:mt-12 lg:mt-14 mx-auto transition-colors hover:text-accent hover:bg-light-black"
    >
      {{ t('criminalProceedings.block.button') }}
    </NuxtLinkLocale>

  </LayoutContainer>
</section>
</template>

<style scoped lang="postcss">
.app-header {
  view-transition-name: criminal-proceedings-title;
}

details[open] {
  @apply pb-5;
}

.mc-summary-btn span {
  height: 3px;
}

details[open] .mc-summary-btn span:last-child {
  transform: translate(-50%, -50%);
}
</style>
