<script lang="ts" setup>
import type MassMediaGraphqlReq from '~/@types/Requests/MassMediaGraphqlReq'
import type { NewsItem } from '~/@types/NewsItem'

const { localeProperties } = useI18n()

const query = `
query MassMediaPage($locale: I18NLocaleCode!, $pagination: PaginationArg!) {
  newsItems(locale: $locale, sort: "id:desc", pagination: $pagination) {
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
    meta {
      pagination {
        page
        pageCount
      }
    }
  }
}`

const { pagination, backendPagination } = usePagination()

const { data } = await useAPI<MassMediaGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
      pagination: backendPagination,
    },
  },
  query: {
    page: 'mass-media',
  },
})

const newsItems = ref<NewsItem[]>([])

watch(data, newVal => {
  if (newVal?.data.newsItems != void(0)) {
    newsItems.value = transformNewsResponseItems(newVal.data.newsItems.data)

    pagination.pageCount = newVal.data.newsItems.meta.pagination.pageCount
  }
}, { immediate: true })

const { t } = useI18n()
</script>

<template>
  <LayoutContainer>
    <AppBreadcrumbs />

    <ListsPageTitle :title="t('massMedia.title')" />

    <NewsList :news="newsItems" />

    <ListsPagination
      v-if="(pagination.pageCount as number) > 1"
      v-model:pagination="pagination"
    />
  </LayoutContainer>
</template>
