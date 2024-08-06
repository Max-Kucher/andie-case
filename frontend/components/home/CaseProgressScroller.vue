<script lang="ts" setup>
import type { CaseProgressItem } from '~/@types/CaseProgressItem'

const caseProgressItems = inject<CaseProgressItem[]>('caseProgressItems')

const { t } = useI18n()
</script>

<template>
  <section>
    <LayoutContainer class="mt-48 mb-32">
      <div class="flex justify-between items-center gap-5 mb-11">
        <h3 class="app-header">
          {{ t('caseProgress.title') }}
        </h3>

        <NuxtLinkLocale
          :to="{ name: 'case-progress' }"
          class="bg-black text-white leading-none py-2 px-3.5 rounded-md transition-colors hover:bg-light-black hover:text-accent"
        >
          {{ t('caseProgress.block.readMore') }}
        </NuxtLinkLocale>
      </div>

      <Swiper
        loop
        :slides-per-view="3"
        :space-between="22"
        :modules="[SwiperPagination, SwiperNavigation, SwiperParallax]"
        :pagination="{
          enabled: true,
        }"
        :navigation="{
          enabled: true,
        }"
      >
        <SwiperSlide
          v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8]"
          :key="`case-progress-item-${i}`"
        >
          <CaseProgressListItem :item="caseProgressItems[0]" />
        </SwiperSlide>
      </Swiper>
    </LayoutContainer>
  </section>
</template>
