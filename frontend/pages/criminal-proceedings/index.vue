<script lang="ts" setup>
import type CriminalProceedingsGraphqlReq from '~/@types/Requests/CriminalProceedingsGraphqlReq'
import type { CriminalProceedingItem } from '~/@types/CriminalProceedingItem'

definePageMeta({
  pageTransition: false,
})

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

const { pagination, backendPagination } = usePagination()

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

    <ListsPageTitle
      :title="t('criminalProceedings.title')"
      class="criminal-proceedings-title"
    />

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

<style scoped lang="postcss">
.criminal-proceedings-title :deep(.app-header) {
  view-transition-name: criminal-proceedings-title;
}
</style>
