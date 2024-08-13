<script lang="ts" setup>
import type { CaseProgressItem } from '~/@types/CaseProgressItem'

const caseProgressItems = inject<CaseProgressItem[]>('caseProgressItems', [])

const { t } = useI18n()
</script>

<template>
  <section>
    <LayoutContainer class="pt-48 pb-16">
      <LayoutBlockTitle
        :to="{ name: 'case-progress' }"
        :link-text="t('caseProgress.block.readMore')"
        :title="t('caseProgress.title')"
        class="case-progress-title"
      />

      <AppScroller
        :slides-per-view="3"
        :space-between="22"
      >
        <SwiperSlide
          v-for="(caseProgressItem, idx) in caseProgressItems"
          :key="`case-progress-item-${idx}`"
        >
          <CaseProgressListItem
            :item="caseProgressItem"
            :item-idx="idx"
          />
        </SwiperSlide>
      </AppScroller>
    </LayoutContainer>
  </section>
</template>

<style scoped lang="postcss">
.case-progress-title :deep(.app-header) {
  view-transition-name: case-progress-title;
}
</style>
