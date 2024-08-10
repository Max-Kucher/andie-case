<script lang="ts" setup>

const breadcrumbs = useBreadcrumbItems({
  hideRoot: true,
})

const id = useId()
</script>

<template>
  <ul class="flex">
    <li
      v-for="(breadcrumb, idx) in breadcrumbs"
      :key="`breadcrumbs-${id}-${idx}`"
    >
      <NuxtLinkLocale
        v-if="!breadcrumb.current"
        :to="breadcrumb.to"
      >
        {{ breadcrumb.label }}
      </NuxtLinkLocale>
      <span>
        {{ breadcrumb.label }}
      </span>

      <span
        v-if="idx !== breadcrumbs.length - 1"
      >
        /
      </span>
    </li>
  </ul>
</template>
