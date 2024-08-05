<script setup lang="ts">
import type NewsItem from '~/@types/NewsItem'
import type BackendImage from '~/@types/BackendImage'

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
}
`

interface IndexPageResponse {
  data: {
    newsItems: {
      data: {
        id: number
        attributes: NewsItem & {
          image: {
            data: {
              attributes: BackendImage
            }
          }
        }
      }[]
    }
  }
}

const { data } = await useAPI<IndexPageResponse>('/graphql', {
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

  console.log(newVal.data)

}, { immediate: true })
</script>

<template>
  <div>
    <NewsWideBanner />

    <HomeWhoIsAndy />
  </div>
</template>
