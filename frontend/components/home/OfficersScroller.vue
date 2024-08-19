<script setup lang="ts">
import type { Officer } from '~/@types/Officer'

const officers = inject<Officer[]>('officers', [])

const { t } = useI18n()
</script>

<template>
  <section>
    <LayoutContainer class="max-lg:pt-12 lg:pt-16 max-lg:pb-9 lg:pb-11">
      <LayoutBlockTitle
        :link-text="t('officers.block.readMore')"
        :to="{ name: 'law-enforcement-officers' }"
      >
        <I18nT
          keypath="officers.block.title"
          scope="global"
          tag="span"
        >&shy;</I18nT>
      </LayoutBlockTitle>

      <AppScroller class="max-sm:!-mr-4 sm:max-small-tablet:!-mr-6">
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
