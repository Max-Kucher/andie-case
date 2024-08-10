<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <LayoutContainer>
    <AppBreadcrumbs
      :breadcrumb-props="{
        hideCurrent: true,
        append: [
          {
            label: 'Test',
          },
        ],
      }"
    />

    <h1>News criminal proceeding: {{ route.params.id }}</h1>
  </LayoutContainer>
</template>
