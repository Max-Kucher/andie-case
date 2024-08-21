<script lang="ts" setup>
import type { BreadcrumbProps } from '@nuxtjs/seo/dist/runtime/nuxt/composables/useBreadcrumbItems'

const props = defineProps<{
  breadcrumbProps?: BreadcrumbProps
}>()

const breadcrumbs = useBreadcrumbItems({
  hideRoot: true,
  ...(props?.breadcrumbProps ?? {}),
})

const id = useId()
</script>

<template>
  <ul class="text-sm font-medium leading-none max-small-tablet:mt-7 small-tablet:max-lg:mt-10 lg:mt-12">
    <li
      v-for="(breadcrumb, idx) in breadcrumbs"
      :key="`breadcrumbs-${id}-${idx}`"
      class="inline"
    >
      <NuxtLinkLocale
        v-if="!breadcrumb.current && breadcrumb.to !== undefined"
        :to="breadcrumb.to"
      >
        {{ breadcrumb.label }}
      </NuxtLinkLocale>
      <span
        v-else
        class="text-[#CDCDCD] cursor-default"
      >
        {{ breadcrumb.label }}
      </span>

      <span
        v-if="idx !== breadcrumbs.length - 1"
        class="text-[#CDCDCD] cursor-default"
      >
        /
      </span>
    </li>
  </ul>
</template>
