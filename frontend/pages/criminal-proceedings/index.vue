<script lang="ts" setup>
import type CriminalProceedingsGraphqlReq from '~/@types/Requests/CriminalProceedingsGraphqlReq'
import type { CriminalProceedingItem } from '~/@types/CriminalProceedingItem'
import type { BackendPagination, Pagination } from '~/@types/Pagination'

const { localeProperties } = useI18n()

const query = `
query CriminalProceedingsPage($locale: I18NLocaleCode!, $pagination: PaginationArg!) {
  criminalProceedings(locale: $locale, sort: "createdAt:desc", pagination: $pagination) {
    data {
      id
      attributes {
        title
        shortDescription
        viewsCount
        showImageInList
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
    meta {
      pagination {
        page
        pageCount
      }
    }
  }
}`

const route = useRoute()

const pagination = reactive<Pagination>({
  page: Number(route.query?.page ?? 1),
  pageSize: 6,
  pageCount: 1,
  total: 0,
})

const backendPagination = ref<BackendPagination>({
  page: pagination.page as number,
  pageSize: pagination.pageSize as number,
})

const { data } = await useAPI<CriminalProceedingsGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
      pagination: backendPagination,
    },
  },
  query: {
    page: 'criminal-proceedings',
  },
})

watch(
  pagination,
  (newVal) => {
    backendPagination.value = {
      page: newVal.page as number,
      pageSize: newVal.pageSize as number,
    }
  },
  { deep: true }
)

const criminalProceedings = ref<CriminalProceedingItem[]>()

watch(data, newVal => {
  if (newVal?.data.criminalProceedings != void(0)) {
    criminalProceedings.value = transformCriminalProceedingsResponseItems(newVal.data.criminalProceedings.data)

    pagination.pageCount = newVal.data.criminalProceedings.meta.pagination.pageCount
  }
}, { immediate: true })

const { t } = useI18n()
</script>

<template>
  <LayoutContainer>
    <AppBreadcrumbs />

    <h1 class="app-header text-center mt-20 pb-2 mb-28">{{ t('criminalProceedings.title') }}</h1>

    <CriminalProceedingsList
      v-if="criminalProceedings?.length"
      :criminal-proceedings="criminalProceedings as CriminalProceedingItem[]"
      class="mb-12"
    />

    <ListsPagination
      v-if="(pagination.pageCount as number) > 1"
      v-model:pagination="pagination"
      class="mb-24"
    />
  </LayoutContainer>
</template>
