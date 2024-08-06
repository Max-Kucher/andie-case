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

      {{ JSON.stringify(caseProgressItems) }}
    </LayoutContainer>
  </section>
</template>
