<script lang="ts" setup>
import type CaseProgressIdGraphqlReq from '~/@types/Requests/CaseProgressIdGraphqlReq'
import type { CaseProgressItem } from '~/@types/CaseProgressItem'

definePageMeta({
  pageTransition: false,
})

const route = useRoute()
const { localeProperties } = useI18n()

useIncrementEntityViews(Number(route.params.id))

const query = `
query CaseProgressIdPage($id: ID!, $locale: I18NLocaleCode!) {
  caseProgressItem(locale: $locale, id: $id) {
    data {
      id
      attributes {
        title
        description
        viewsCount
        createdAt
        images(pagination: { pageSize: 2 }) {
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
}`

const { data } = await useAPI<CaseProgressIdGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
      id: route.params.id,
    },
  },
  query: {
    page: `case-progress-${route.params.id}`,
  },
})

const pageTitle = ref<string>('')
const caseProgressItem = ref<CaseProgressItem>()

const { t } = useI18n()

watch(data, newVal => {
  if (newVal?.data.caseProgressItem.data === null) {
    throw createError({ status: 404, message: t('caseProgress.errors.404.title') })
  } else {
    caseProgressItem.value = transformCriminalProceedingsResponse(newVal.data.caseProgressItem.data)
    pageTitle.value = caseProgressItem.value.title
  }

  if (newVal?.data.officers != void(0)) {
    provide('officers', transformOfficerResponseItems(newVal.data.officers.data))
  }
}, { immediate: true })

useHead({
  title: pageTitle,
})
</script>

<template>
  <div class="mb-16">
    <LayoutItemDetails
      :id="Number(caseProgressItem?.id ?? 0)"
      :title="pageTitle"
      :description="caseProgressItem?.description ?? ''"
      :views-count="caseProgressItem?.viewsCount ?? 0"
      :created-at="caseProgressItem?.createdAt ?? ''"
      :images="caseProgressItem?.images ?? []"
      :prev-text="t('caseProgress.nextPrev.prev')"
      :next-text="t('caseProgress.nextPrev.next')"
    />

    <HomeOfficersScroller
      v-if="data.data.officers"
      class="max-lg:mt-12 lg:mt-16"
    />
  </div>
</template>
