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
        description
        createdAt
        viewsCount
        image {
          data {
            attributes {
              url
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
        description
      }
    }
  }
  caseProgressItems(locale: $locale, sort: "createdAt:desc", pagination: { pageSize: 8 }) {
    data {
      id
      attributes {
        title
        description
        createdAt
        images(pagination: { pageSize: 1 }) {
          data {
            attributes {
              url
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
  if (newVal.data.newsItems !== undefined) {
    provide('latestNewsItems', newVal.data.newsItems.data.map(newsItem => ({
      ...newsItem.attributes,
      id: newsItem.id,
      image: {
        ...(newsItem.attributes.image.data?.attributes ?? {}),
      },
    })))
  }

  if (newVal.data.criminalProceedings !== undefined) {
    provide('criminalProceedings', transformCriminalProceedingsResponse(newVal.data.criminalProceedings.data))
  }

  if (newVal.data.caseProgressItems !== undefined) {
    provide('caseProgressItems', transformCaseProgressItemResponse(newVal.data.caseProgressItems.data))
  }
}, { immediate: true })
</script>

<template>
  <div>
    <NewsWideBanner />

    <HomeWhoIsAndy />

    <HomeCriminalProceedings />

    <HomeCaseProgressScroller />
  </div>
</template>
