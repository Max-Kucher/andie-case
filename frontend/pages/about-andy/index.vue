<script setup lang="ts">
import type AboutAndyGraphqlReq from '~/@types/Requests/AboutAndyGraphqlReq'

const { localeProperties } = useI18n()

const query = `
query AboutAndyPage($locale: I18NLocaleCode!) {
  whoIsAndyBanners(locale: $locale, sort: "createdAt:desc") {
    data {
      attributes {
        title
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
  whoIsAndy(locale: $locale) {
    data {
      attributes {
        description
      }
    }
  }
}`

const { data } = await useAPI<AboutAndyGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
    },
  },
  query: {
    page: 'about-andy',
  },
})
</script>

<template>
  <div>
    {{ JSON.stringify(data) }}
  </div>
</template>
