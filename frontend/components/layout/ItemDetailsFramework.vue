<script setup lang="ts">
defineProps<{
  id: number
  title: string
  viewsCount: number
  createdAt: string | Date
  prevText?: string
  nextText?: string
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
      >
        <template
          #prevText
          v-if="$slots.paginationPrevText"
        >
          <slot name="paginationPrevText" />
        </template>

        <template
          #nextText
          v-if="$slots.paginationNextText"
        >
          <slot name="paginationNextText" />
        </template>
      </AppNextPrevItem>
    </Suspense>
  </LayoutContainer>
</template>
