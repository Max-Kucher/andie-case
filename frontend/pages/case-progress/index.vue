<script lang="ts" setup>
import type CaseProgressGraphqlReq from '~/@types/Requests/CaseProgressGraphqlReq'
import type { CaseProgressItem } from '~/@types/CaseProgressItem'

definePageMeta({
  pageTransition: false,
})

const { localeProperties } = useI18n()

const query = `
query CaseProgressPage($locale: I18NLocaleCode!, $pagination: PaginationArg!) {
  caseProgressItems(locale: $locale, sort: "createdAt:desc", pagination: $pagination) {
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

const { data } = await useAPI<CaseProgressGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
      pagination: backendPagination,
    },
  },
  query: {
    page: 'case-progress',
  },
})

const caseProgressItems = ref<CaseProgressItem[]>()

watch(data, newVal => {
  if (newVal?.data.caseProgressItems != void(0)) {
    caseProgressItems.value = transformCaseProgressItemResponseItems(newVal.data.caseProgressItems.data)

    pagination.pageCount = newVal.data.caseProgressItems.meta.pagination.pageCount
  }
}, { immediate: true })

const { t } = useI18n()
</script>

<template>
  <LayoutContainer>
    <AppBreadcrumbs />

    <ListsPageTitle
      :title="t('caseProgress.title')"
      class="case-progress-title"
    />

    <CaseProgressList
      v-if="caseProgressItems?.length"
      :case-progress-items="caseProgressItems"
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
.case-progress-title :deep(.app-header) {
  view-transition-name: case-progress-title;
}
</style>
