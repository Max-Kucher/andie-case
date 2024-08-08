<script setup lang="ts">
import type { Officer } from '~/@types/Officer'

const officers = inject<Officer[]>('officers')

const { t } = useI18n()
</script>

<template>
  <section>
    <LayoutContainer class="mt-16 mb-11">
      <LayoutBlockTitle
        :title="t('officers.title')"
        :link-text="t('officers.block.readMore')"
        :to="{ name: 'law-enforcement-officers' }"
      />

      <AppScroller
        :slides-per-view="3"
        :space-between="22"
      >
        <SwiperSlide
          v-for="officer in officers"
          :key="`officer-slide-${officer.id}`"
        >
          <OfficersListItem :item="officer" />
        </SwiperSlide>
      </AppScroller>
    </LayoutContainer>
  </section>
</template>
