<script lang="ts" setup>
import type OfficerIdGraphqlReq from '~/@types/Requests/OfficerIdGraphqlReq'
import type { Officer } from '~/@types/Officer'
import type { ComponentPublicInstance } from 'vue'

definePageMeta({
  pageTransition: false,
})

const route = useRoute()
const { localeProperties } = useI18n()

useIncrementEntityViews(Number(route.params.id))

const query = `
query CriminalProceedingIdPage($id: ID!, $locale: I18NLocaleCode!) {
  officer(locale: $locale, id: $id) {
    data {
      id
      attributes {
        name
        description
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
  }
  caseProgressItems(locale: $locale, sort: "createdAt:desc", pagination: { pageSize: 6 }) {
    data {
      id
      attributes {
        title
        shortDescription
        viewsCount
        createdAt
        showImageInList
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
  }
}`

const { data } = await useAPI<OfficerIdGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
      id: route.params.id,
    },
  },
  query: {
    page: `officers-${route.params.id}`,
  },
})

const pageTitle = ref<string>('')
const officer = ref<Officer>()

const { t } = useI18n()

watch(data, newVal => {
  if (newVal?.data.officer.data === null) {
    throw createError({ status: 404, message: t('officers.errors.404.title') })
  } else {
    officer.value = transformOfficerResponse(newVal.data.officer.data)
    pageTitle.value = officer.value.name
  }

  if (newVal?.data.caseProgressItems != void(0)) {
    provide('caseProgressItems', transformCaseProgressItemResponseItems(newVal.data.caseProgressItems.data))
  }
}, { immediate: true })

useHead({
  title: pageTitle,
})

const imageElem = ref<ComponentPublicInstance>()
onMounted(() => {
  setTimeout(() => {
    imageElem.value?.$el.classList.remove('officer-image')
  }, 200)
})
</script>

<template>
  <div class="mb-16">
    <LayoutItemDetailsFramework
      :id="Number(officer?.id ?? 0)"
      :title="pageTitle"
      :views-count="officer?.viewsCount ?? 0"
      :created-at="officer?.createdAt ?? ''"
      :prev-text="t('officers.nextPrev.prev')"
      :next-text="t('officers.nextPrev.next')"
    >
      <div class="clearfix">
        <div
          v-if="officer?.image?.url.length"
          class="float-left w-1/2 mr-12 mb-12"
        >
          <NuxtPicture
            ref="imageElem"
            :src="buildBackendImageUrl($config, officer.image)"
            :alt="officer.image.alternativeText ?? ''"
            class="w-full officer-image"
          />
        </div>
        <div
          class="app-prose"
          v-html="officer?.description"
        />
      </div>
    </LayoutItemDetailsFramework>

    <HomeCaseProgressScroller v-if="data.data.caseProgressItems" />
  </div>
</template>

<style scoped lang="postcss">
.officer-image {
  view-transition-name: officer-image;
}
</style>
