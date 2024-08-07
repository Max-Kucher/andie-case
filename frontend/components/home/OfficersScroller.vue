<script setup lang="ts">
import type { Officer } from '~/@types/Officer'

const officers = inject<Officer[]>('officers')

const { t } = useI18n()
</script>

<template>
  <section>
    <LayoutContainer class="mt-16">
      <LayoutBlockTitle
        :title="t('officers.title')"
        :link-text="t('officers.block.readMore')"
        :to="{ name: 'law-enforcement-officers' }"
      />
    </LayoutContainer>
  </section>
</template>
