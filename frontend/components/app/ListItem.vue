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

const { t } = useI18n()
</script>

<template>
  <div>
    <div class="relative bg-placeholder-light">
      <AppBackgroundPicture
        v-if="image?.url.length && showImage"
        :img="image"
      />

      <div class="relative z-20 px-3.5 pt-9 pb-8">
        <div class="flex justify-between items-center font-medium">
          <time
            :datetime="createdAt.toString()"
            class="text-lg"
          >
            {{ formatDate('d.m.Y', createdAt) }}
          </time>

          <div class="flex gap-1.5">
            <NuxtImg
              src="/images/icons/eye.svg"
              :width="22"
              :alt="t('viewsCount')"
            />

            {{ viewsCount }}
          </div>
        </div>

        <div class="text-3xl max-w-[60%] mt-24">
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
        class="px-3.5 pt-12 pb-6 relative z-10"
        :class="backgroundClass"
      >
        <div v-html="description" />

        <ButtonsDarkReadMore
          :to="to"
          class="mt-3.5"
        />
      </div>
    </div>
  </div>
</template>
