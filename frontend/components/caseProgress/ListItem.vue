<script lang="ts" setup>
import type { CaseProgressItem } from '~/@types/CaseProgressItem'

const props = defineProps<{
  item: CaseProgressItem
  itemIdx: number
}>()

const runtimeConfig = useRuntimeConfig()

const backgroundClass = computed(() => {
  const classes = ['bg-[#FFBE5B]/55', 'bg-[#FF5B5B]/55', 'bg-[#5BCEFF]/55']
  return classes[props.itemIdx % classes.length]
})
</script>

<template>
  <div>
    <div class="relative bg-placeholder">
      <NuxtPicture
        v-if="item.images?.length"
        :src="buildBackendImageUrl(runtimeConfig, item.images[0].url)"
        class="object-fill absolute inset-0"
        :imgAttrs="{
          class: 'object-fill absolute w-full h-full'
        }"
      />
      <div
        v-if="item.images?.length"
        class="absolute inset-0 bg-black opacity-30 z-10"
      />

      <div class="relative z-20 px-3.5 pt-9 pb-8">
        <div class="flex justify-between items-center font-medium">
          <time
            :datetime="item.createdAt"
            class="text-lg"
          >
            {{ formatDate('d.m.Y', item.createdAt) }}
          </time>

          <div class="flex gap-1.5">
            <NuxtImg
              src="/icons/eye.svg"
              :width="22"
              alt=""
            />

            {{ item.viewsCount }}
          </div>
        </div>

        <div class="text-3xl max-w-[60%] mt-24">
          {{ item.title }}
        </div>
      </div>
    </div>

    <div
      class="px-3.5 pt-12 pb-6"
      :class="backgroundClass"
    >
      <div v-html="item.shortDescription" />

      <ButtonsReadMore
        :to="{ name: 'case-progress-id', params: { id: item.id } }"
        class="mt-3.5 bg-black text-white transition-colors hover:bg-light-black hover:text-accent"
        inverted-image
      />
    </div>
  </div>
</template>
