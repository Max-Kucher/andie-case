<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = withDefaults(defineProps<{
  link?: boolean
}>(), {
  link: true,
})

const nuxtLink = resolveComponent('NuxtLinkLocale')
const title = t('logo.title')
</script>

<template>
  <component
      :is="props.link ? nuxtLink : 'div'"
      :to="props.link ? { name: 'index' }  : null"
      class="block"
  >
    <NuxtImg
      src="/logo.svg"
      :title="title"
      :alt="title"
      class="w-[227px]"
    />
  </component>
</template>
