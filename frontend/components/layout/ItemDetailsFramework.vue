<script setup lang="ts">
defineProps<{
  id: number
  title: string
  viewsCount: number
  createdAt: string | Date
  prevText: string
  nextText: string
}>()
</script>

<template>
  <LayoutContainer>
    <AppBreadcrumbs
      :breadcrumb-props="{
        hideCurrent: true,
        append: [
          {
            label: title,
          },
        ],
      }"
    />

    <LayoutItemPageTitle
      :title="title"
      :views-count="viewsCount ?? 0"
      :created-at="createdAt"
    />

    <slot />

    <AppShare :title="title ?? ''" />

    <Suspense>
      <AppNextPrevItem
        class="mt-11"
        :prev-text="prevText"
        :next-text="nextText"
      />
    </Suspense>
  </LayoutContainer>
</template>
