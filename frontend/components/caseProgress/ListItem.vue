<script lang="ts" setup>
import type { CaseProgressItem } from '~/@types/CaseProgressItem'

const props = defineProps<{
  item: CaseProgressItem
  itemIdx: number
}>()

const backgroundClass = computed(() => {
  const classes = ['bg-[#FFBE5B]/55', 'bg-[#FF5B5B]/55', 'bg-[#5BCEFF]/55']
  return classes[props.itemIdx % classes.length]
})
</script>

<template>
  <div>
    <div class="relative bg-placeholder-light">
      <AppBackgroundPicture
        v-if="item.images?.length && item.showImageInList"
        :img="item.images[0]"
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
      class="relative"
    >
      <NuxtPicture
        src="/bg-case-progress.jpg"
        class="absolute inset-0 object-fill"
        :width="380"
        loading="lazy"
        :imgAttrs="{
          class: 'object-fill absolute w-full h-full',
          alt: '',
        }"
      />

      <div
        class="px-3.5 pt-12 pb-6 relative z-10"
        :class="backgroundClass"
      >
        <div v-html="item.shortDescription" />

        <ButtonsDarkReadMore
          :to="{ name: 'case-progress-id', params: { id: item.id } }"
          class="mt-3.5"
        />
      </div>
    </div>
  </div>
</template>
