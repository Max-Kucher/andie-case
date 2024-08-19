<script lang="ts" setup>
import type OfficerIdGraphqlReq from '~/@types/Requests/MassMediaIdGraphqlReq'
import type { NewsItem } from '~/@types/NewsItem'
import type { ComponentPublicInstance } from 'vue'
import {buildBackendImageUrl} from "~/utils/helpers";

definePageMeta({
  pageTransition: false,
})

const route = useRoute()
const { localeProperties } = useI18n()

useIncrementEntityViews(Number(route.params.id))

const query = `
query CriminalProceedingIdPage($id: ID!, $locale: I18NLocaleCode!) {
  newsItem(locale: $locale, id: $id) {
    data {
      id
      attributes {
        title
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
    page: `mass-media-${route.params.id}`,
  },
})

const pageTitle = ref<string>('')
const newsItem = ref<NewsItem>()

const { t } = useI18n()

watch(data, newVal => {
  if (newVal?.data.newsItem.data === null) {
    throw createError({ status: 404, message: t('massMedia.errors.404.title') })
  } else {
    newsItem.value = transformNewsResponse(newVal.data.newsItem.data)
    pageTitle.value = newsItem.value.title
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
    imageElem.value?.$el.classList.remove('news-image')
  }, 200)
})

provide<boolean>('doNoCenterPageTitle', true)
</script>

<template>
  <div class="mb-16">
    <LayoutItemDetailsFramework
      :id="Number(newsItem?.id ?? 0)"
      :title="pageTitle"
      :views-count="newsItem?.viewsCount ?? 0"
      :created-at="newsItem?.createdAt ?? ''"
      :prev-text="t('massMedia.nextPrev.prev')"
      :next-text="t('massMedia.nextPrev.next')"
    >
      <NuxtPicture
        ref="imageElem"
        :src="buildBackendImageUrl($config, newsItem?.image ?? '')"
        :alt="newsItem?.image?.alternativeText ?? ''"
        class="block news-image mb-12"
      />

      <div
        class="prose-base prose-p:text-faded-text-light prose-headings:mt-11 prose-headings:mb-8 prose-headings:text-3xl prose-headings:font-medium prose-headings:uppercase prose-headings:font-druk-wide"
        v-html="newsItem?.description"
      />
    </LayoutItemDetailsFramework>

    <HomeCaseProgressScroller v-if="data.data.caseProgressItems" />
  </div>
</template>

<style scoped lang="postcss">
.news-image {
  view-transition-name: news-image;
}
</style>
