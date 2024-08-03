<script setup lang="ts">
import schema from '~/gql/schemas/GetGeneralSettingsQuery.gql'
// import GetGeneralSettingsQuery from '~/gql/GetGeneralSettingsQuery.graphql'

const { $graphql } = useNuxtApp();

console.log($graphql.default)

const { data: generalSettings } = await useAsyncData('generalSettings', async () => {
  return await $graphql.default.request(schema)
})

watch(generalSettings, newVal => {
  console.log(newVal)
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
