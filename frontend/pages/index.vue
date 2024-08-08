<script setup lang="ts">
import type IndexPageGraphqlReq from '~/@types/Requests/IndexPageGraphqlReq'

const { localeProperties } = useI18n()

const query = `
query IndexPage($locale: I18NLocaleCode!) {
  newsItems(locale: $locale, sort: "createdAt:desc", pagination: { pageSize: 3 }) {
    data {
      id
      attributes {
        title
        shortDescription
        createdAt
        viewsCount
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
  criminalProceedings(locale: $locale, sort: "createdAt:desc", pagination: { pageSize: 5 }) {
    data {
      id
      attributes {
        title
        shortDescription
      }
    }
  }
  caseProgressItems(locale: $locale, sort: "createdAt:desc", pagination: { pageSize: 6 }) {
    data {
      id
      attributes {
        title
        shortDescription
        viewsCount
        createdAt
        images(pagination: { pageSize: 1 }) {
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
  officers(locale: $locale, sort: "createdAt:desc", pagination: { pageSize: 6 }) {
    data {
      id
      attributes {
        name
        shortDescription
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
}
`

const { data } = await useAPI<IndexPageGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
    },
  },
  query: {
    page: 'index',
  },
})

watch(data, newVal => {
  if (newVal.data.newsItems != void(0)) {
    provide('latestNewsItems', transformNewsResponse(newVal.data.newsItems.data))
  }

  if (newVal.data.criminalProceedings != void(0)) {
    provide('criminalProceedings', transformCriminalProceedingsResponse(newVal.data.criminalProceedings.data))
  }

  if (newVal.data.caseProgressItems != void(0)) {
    provide('caseProgressItems', transformCaseProgressItemResponse(newVal.data.caseProgressItems.data))
  }

  if (newVal.data.officers != void(0)) {
    provide('officers', transformOfficerResponse(newVal.data.officers.data))
  }
}, { immediate: true })
</script>

<template>
  <div>
    <NewsWideBanner v-if="data.data.newsItems" />

    <HomeWhoIsAndy />

    <HomeCriminalProceedings v-if="data.data.criminalProceedings" />

    <HomeCaseProgressScroller v-if="data.data.caseProgressItems" />

    <HomeOfficersScroller v-if="data.data.officers" />

    <HomeNewsList v-if="data.data.newsItems" />
  </div>
</template>
