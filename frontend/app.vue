<script setup lang="ts">
import { provide } from 'vue'
import type MenuItem from '~/@types/MenuItem'

const { localeProperties } = useI18n()

const query = `
  query MenuItems($locale: I18NLocaleCode!) {
      menuItems(locale: $locale, sort: "priority:desc") {
          data {
              attributes {
                  title
                  matchedUrl
                  showInHeader
                  showInFooter
              }
          }
      }
  }
`

const { data: menuItems } = await useAPI<{ data: { menuItems: { data: MenuItem[] } } }>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
    },
  },
})

provide('MenuItems', menuItems.value.data.menuItems.data)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
