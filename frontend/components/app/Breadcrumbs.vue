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
  <ul class="flex gap-1 text-sm font-medium leading-none mt-12">
    <li
      v-for="(breadcrumb, idx) in breadcrumbs"
      :key="`breadcrumbs-${id}-${idx}`"
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
        class="text-[#CDCDCD] cursor-default ml-1"
      >
        /
      </span>
    </li>
  </ul>
</template>
