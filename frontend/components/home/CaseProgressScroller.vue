<script lang="ts" setup>
import type { CaseProgressItem } from '~/@types/CaseProgressItem'

const caseProgressItems = inject<CaseProgressItem[]>('caseProgressItems', [])

const { t } = useI18n()
</script>

<template>
  <section>
    <LayoutContainer class="pt-16 pb-11">
      <LayoutBlockTitle
        :to="{ name: 'case-progress' }"
        :link-text="t('caseProgress.block.readMore')"
        :title="t('caseProgress.title')"
        class="case-progress-title"
      />

      <AppScroller class="max-sm:!-mr-4 sm:max-small-tablet:!-mr-6">
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
