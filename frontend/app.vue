<script setup lang="ts">
import type MenuItem from '~/@types/MenuItem'
import type SettingItem from '~/@types/SettingItem'
import type PageItem from '~/@types/PageItem'
import type BackendImage from '~/@types/BackendImage'
import { provide } from 'vue'

const { localeProperties } = useI18n()

const query = `
  query GeneralSettings($locale: I18NLocaleCode!) {
    menuItems(locale: $locale, sort: "priority:desc") {
      data {
        attributes {
          title
          matchedUrl
          showInHeader
          showInFooter
        }
      }
    }
    customSettings {
      data {
        attributes {
          name
          value
        }
      }
    }
    pages {
      data {
        attributes {
          title
          description
          name
          ogImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

interface GeneralSettingsResponse {
  data: {
    menuItems: {
      data: {
        attributes: MenuItem
      }[]
    }
    customSettings: {
      data: {
        attributes: SettingItem
      }[]
    }
    pages: {
      data: {
        attributes: PageItem & {
          ogImage: {
            data: {
              attributes: BackendImage
            }
          }
        }
      }[]
    }
  }
}

const { data: generalSettings } = await useAPI<GeneralSettingsResponse>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
    },
  },
})

provide('MenuItems', generalSettings.value.data.menuItems.data)

const customSettings = generalSettings.value.data.customSettings.data.reduce((acc: Record<string, string>, item: { attributes: SettingItem }) => {
  acc[item.attributes.name] = item.attributes.value

  return acc
}, {} as Record<string, string>)
provide('AppSettings', customSettings)

const pages = generalSettings.value.data.pages.data.map(page => ({
  ...page.attributes,
  ogImage: {
    ...(page.attributes.ogImage.data?.attributes ?? {}),
  },
}))
provide('PagesSettings', pages)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
