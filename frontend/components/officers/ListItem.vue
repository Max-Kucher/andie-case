<script lang="ts" setup>
import type { Officer } from '~/@types/Officer'

defineProps<{
  item: Officer
}>()

const { t } = useI18n()

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div>
    <div class="relative bg-placeholder h-60">
      <NuxtPicture
        v-if="item.image"
        :src="buildBackendImageUrl(runtimeConfig, item.image.url)"
        class="object-fill absolute inset-0"
        :imgAttrs="{
          class: 'object-fill absolute w-full h-full',
          alt: item.image.alternativeText ?? '',
        }"
      />
    </div>
    <div class="px-3.5 pt-5 pb-6 bg-[#F8F8F8]">
      <div class="text-3xl font-medium mb-2.5">
        {{ item.name }}
      </div>

      <p>
        {{ item.shortDescription }}
      </p>

      <ButtonsDarkReadMore
        :to="{ name: 'law-enforcement-officers-id', params: { id: item.id } }"
        :text="t('officers.readMore')"
        class="mt-8 cursor-pointer"
      />
    </div>
  </div>
</template>
