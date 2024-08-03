<script setup lang="ts">
import { provide } from 'vue'
import type MenuItem from '~/@types/MenuItem'
import type SettingItem from '~/@types/SettingItem'

const { localeProperties } = useI18n()

const query = `
  query MenuItems($locale: I18NLocaleCode!) {
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
  }
`

interface GeneralSettingsResponse {
  data: {
    menuItems: {
      data: MenuItem[]
    }
    customSettings: {
      data: {
        attributes: SettingItem
      }[]
    }
  }
}

const { data: menuItems } = await useAPI<GeneralSettingsResponse>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      locale: localeProperties.value.iso,
    },
  },
})

provide('MenuItems', menuItems.value.data.menuItems.data)

const customSettings = menuItems.value.data.customSettings.data.reduce((acc: Record<string, string>, item: { attributes: SettingItem }) => {
  acc[item.attributes.name] = item.attributes.value

  return acc
}, {} as Record<string, string>)
provide('AppSettings', customSettings)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
