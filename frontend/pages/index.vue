<script setup lang="ts">
import type BackendImage from '~/@types/BackendImage'
import type NewsItem from '~/@types/NewsItem'
import type CriminalProceedingItem from '~/@types/CriminalProceedingItem'

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
    criminalProceedings: {
      data: {
        id: number
        attributes: CriminalProceedingItem
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

  if (newVal.data.criminalProceedings !== undefined) {
    provide('criminalProceedings', newVal.data.criminalProceedings.data.map(item => ({
      ...item.attributes,
      id: item.id,
    })))
  }
}, { immediate: true })
</script>

<template>
  <div>
    <NewsWideBanner />

    <HomeWhoIsAndy />

    <HomeCriminalProceedings />
  </div>
</template>
