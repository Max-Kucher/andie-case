<script lang="ts" setup>
import type OfficerIdGraphqlReq from '~/@types/Requests/MassMediaIdGraphqlReq'
import type { NewsItem } from '~/@types/NewsItem'

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

// const imageElem = ref<HTMLElement>()
// onMounted(() => {
//   setTimeout(() => {
//     imageElem.value?.classList.remove('officer-image')
//   }, 200)
// })

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
<!--      <div class="clearfix">-->
<!--        <div-->
<!--            v-if="officer?.image?.url.length"-->
<!--            class="float-left w-1/2 mr-12 mb-12"-->
<!--        >-->
<!--          <NuxtPicture-->
<!--              ref="imageElem"-->
<!--              provider="strapi"-->
<!--              :src="officer?.image.url.replace('/uploads', '')"-->
<!--              :alt="officer?.image?.alternativeText ?? ''"-->
<!--              class="w-full officer-image"-->
<!--          />-->
<!--        </div>-->
<!--        <div-->
<!--            class="prose-base prose-p:text-faded-text-light prose-headings:mt-11 prose-headings:mb-8 prose-headings:text-3xl prose-headings:font-medium prose-headings:uppercase prose-headings:font-druk-wide"-->
<!--            v-html="officer?.description"-->
<!--        />-->
<!--      </div>-->
    </LayoutItemDetailsFramework>

    <HomeCaseProgressScroller v-if="data.data.caseProgressItems" />
  </div>
</template>

<!--<style scoped lang="postcss">-->
<!--.officer-image {-->
<!--  view-transition-name: officer-image;-->
<!--}-->
<!--</style>-->
