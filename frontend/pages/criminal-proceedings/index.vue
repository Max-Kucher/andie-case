<script lang="ts" setup>
import type CriminalProceedingsGraphqlReq from '~/@types/Requests/CriminalProceedingsGraphqlReq'

const { localeProperties } = useI18n()

const query = `
query CriminalProceedingsPage($locale: I18NLocaleCode!) {
  criminalProceedings(locale: $locale, sort: "createdAt:desc", pagination: { pageSize: 6 }) {
    data {
      id
      attributes {
        title
        shortDescription
      }
    }
  }
}`

const { data } = await useAPI<CriminalProceedingsGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
    },
  },
  query: {
    page: 'criminal-proceedings',
  },
})
</script>

<template>
  <LayoutContainer>
    <AppBreadcrumbs />

    <h1 class="text-red-400">Criminal proceedings</h1>

    {{ JSON.stringify(data) }}
  </LayoutContainer>
</template>
