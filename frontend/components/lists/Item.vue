<script setup lang="ts">
import type BackendImage from '~/@types/BackendImage'
import type { RouteLocationRaw } from 'vue-router'
import BackgroundPicture from "~/components/app/BackgroundPicture.vue";

withDefaults(defineProps<{
  title: string
  description: string
  viewsCount: number
  to: RouteLocationRaw
  createdAt: string | Date
  backgroundClass?: string
  showImage?: boolean
  image?: BackendImage
}>(), {
  showImage: false,
  backgroundClass: 'bg-[#AFAFAF]/55',
})

const active = ref<boolean>(false)

const viewsImageSize = ref<number>(22)
onMounted(() => {
  if (window?.innerWidth < 1024) {
    viewsImageSize.value = 12
  }
})
</script>

<template>
  <div
    :class="{
      'active-list-item': active
    }"
  >
    <div class="relative bg-placeholder-light">
      <AppBackgroundPicture
        v-if="image?.url.length && showImage"
        :img="image"
      />

      <div class="relative z-20 px-3.5 max-lg:py-5 lg:pt-9 lg:pb-8">
        <div class="flex justify-between items-center font-medium">
          <time
            :datetime="createdAt.toString()"
            class="max-lg:text-xs lg:text-lg"
          >
            {{ formatDate('d.m.Y', createdAt) }}
          </time>

          <LayoutViewsCount
            :views-count="viewsCount"
            :image-width="viewsImageSize"
            class="max-lg:text-xs"
          />
        </div>

        <div class="list-item-title leading-[1.08] small-tablet:max-lg:text-[20px] lg:text-[33px] font-medium max-lg:max-w-36 lg:max-w-52 max-lg:mt-16 lg:mt-24">
          {{ title }}
        </div>
      </div>
    </div>

    <div
      class="relative"
    >
      <BackgroundPicture
        img="/images/bg-case-progress.jpg"
      />

      <div
        class="px-3.5 max-lg:pt-2.5 lg:pt-12 max-lg:pb-3 lg:pb-6 relative z-10"
        :class="backgroundClass"
      >
        <div
          class="line-clamp-4 max-lg:text-xs"
          v-html="description"
        />

        <ButtonsDarkReadMore
          :to="to"
          :image-width="viewsImageSize"
          class="mt-3.5 max-lg:py-1 max-lg:px-2 max-lg:text-sm"
          @click.native="active = true"
        />
      </div>
    </div>
  </div>
</template>
