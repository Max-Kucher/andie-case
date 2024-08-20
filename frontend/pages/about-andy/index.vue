<script setup lang="ts">
import type AboutAndyGraphqlReq from '~/@types/Requests/AboutAndyGraphqlReq'

definePageMeta({
  pageTransition: false,
})

const { localeProperties } = useI18n()

const query = `
query AboutAndyPage($locale: I18NLocaleCode!) {
  whoIsAndyBanners(locale: $locale, sort: "priority:desc") {
    data {
      attributes {
        title
        titleTag
        transitionToTitle
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
  whoIsAndy(locale: $locale) {
    data {
      attributes {
        description
      }
    }
  }
}`

const { data } = await useAPI<AboutAndyGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
    },
  },
  query: {
    page: 'about-andy',
  },
})
</script>

<template>
  <div>
    <WhoIsAndyScroller
      v-if="data.data.whoIsAndyBanners"
      :banners="transformWhoIsAndyBannersResponseItems(data.data.whoIsAndyBanners.data)"
      class="max-lg:!pt-1 lg:!pt-10"
    />

    <LayoutContainer class="pt-8 pb-24">
      <section
        v-if="data.data.whoIsAndy"
        v-html="transformContentPageResponse(data.data.whoIsAndy.data).description"
        class="app-prose"
      />
    </LayoutContainer>
  </div>
</template>
