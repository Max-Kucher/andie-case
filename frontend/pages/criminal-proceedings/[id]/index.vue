<script lang="ts" setup>
import type CriminalProceedingIdGraphqlReq from '~/@types/Requests/CriminalProceedingIdGraphqlReq'
import type { CriminalProceedingItem } from '~/@types/CriminalProceedingItem'

definePageMeta({
  pageTransition: false,
})

const route = useRoute()
const { localeProperties } = useI18n()

await useIncrementEntityViews(Number(route.params.id))

const query = `
query CriminalProceedingIdPage($id: ID!, $locale: I18NLocaleCode!) {
  criminalProceeding(locale: $locale, id: $id) {
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

const { data } = await useAPI<CriminalProceedingIdGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
      id: route.params.id,
    },
  },
  query: {
    page: `criminal-proceedings-${route.params.id}`,
  },
})

const pageTitle = ref<string>('')
const criminalProceeding = ref<CriminalProceedingItem>()

const { t } = useI18n()

watch(data, newVal => {
  if (newVal?.data.criminalProceeding.data === null) {
    throw createError({ status: 404, statusMessage: t('criminalProceedings.errors.404.title') })
  } else {
    criminalProceeding.value = transformCriminalProceedingsResponse(newVal.data.criminalProceeding.data)
    pageTitle.value = criminalProceeding.value.title
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
    <LayoutContainer>
      <AppBreadcrumbs
        :breadcrumb-props="{
          hideCurrent: true,
          append: [
            {
              label: pageTitle,
            },
          ],
        }"
      />

      <LayoutItemPageTitle
        :title="pageTitle"
        :views-count="criminalProceeding?.viewsCount ?? 0"
        :created-at="criminalProceeding?.createdAt ?? ''"
      />

      <div
        class="prose-base prose-p:text-faded-text-light prose-headings:mt-11 prose-headings:mb-8 prose-headings:text-3xl prose-headings:font-medium prose-headings:uppercase prose-headings:font-druk-wide"
        v-html="criminalProceeding?.description"
      />

      <div
        v-if="criminalProceeding?.images?.length"
        class="grid grid-cols-2 gap-7 mt-12"
      >
        <NuxtPicture
          v-for="(image, idx) in criminalProceeding?.images"
          :key="`criminal-procedding-details-${criminalProceeding?.id}-${idx}`"
          :src="image.url?.replace('/uploads', '')"
          :alt="image.alternativeText ?? ''"
          provider="strapi"
        />
      </div>

      <AppShare :title="criminalProceeding?.title ?? ''" />

      <Suspense>
        <AppNextPrevItem
          class="mt-11"
          :prev-text="t('criminalProceedings.nextPrev.prev')"
          :next-text="t('criminalProceedings.nextPrev.next')"
        />
      </Suspense>
    </LayoutContainer>

    <HomeOfficersScroller
      v-if="data.data.officers"
      class="mt-16"
    />
  </div>
</template>
