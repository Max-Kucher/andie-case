<script lang="ts" setup>
import type OfficersGraphqlReq from '~/@types/Requests/OfficersGraphqlReq'
import type { Officer } from '~/@types/Officer'

definePageMeta({
  pageTransition: false,
})

const { localeProperties } = useI18n()

const query = `
query OfficersPage($locale: I18NLocaleCode!, $pagination: PaginationArg!) {
  officers(locale: $locale, sort: "createdAt:desc", pagination: $pagination) {
    data {
      id
      attributes {
        name
        shortDescription
        viewsCount
        createdAt
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

const { data } = await useAPI<OfficersGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
      pagination: backendPagination,
    },
  },
  query: {
    page: 'officers',
  },
})

const officers = ref<Officer[]>()

watch(data, newVal => {
  if (newVal?.data.officers != void(0)) {
    officers.value = transformOfficerResponseItems(newVal.data.officers.data)

    pagination.pageCount = newVal.data.officers.meta.pagination.pageCount
  }
}, { immediate: true })

const { t } = useI18n()
</script>

<template>
  <LayoutContainer>
    <AppBreadcrumbs />

    <ListsPageTitle
      :title="t('officers.title')"
      class="officers-title"
    />

    <ListsItemsList>
      <OfficersListItem
        v-for="officer in officers"
        :key="`officers-list-item-${officer.id}`"
        :item="officer"
      />
    </ListsItemsList>

    <ListsPagination
      v-if="(pagination.pageCount as number) > 1"
      v-model:pagination="pagination"
    />
  </LayoutContainer>
</template>
