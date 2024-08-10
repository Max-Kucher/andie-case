<script lang="ts" setup>
import type CriminalProceedingsGraphqlReq from '~/@types/Requests/CriminalProceedingsGraphqlReq'

const { localeProperties } = useI18n()

const query = `
query IndexPage($locale: I18NLocaleCode!) {}`

</script>

<template>
  <LayoutContainer>
    <h1 class="text-red-400">Case progress</h1>
  </LayoutContainer>
</template>
