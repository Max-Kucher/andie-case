<script lang="ts" setup>
import type { CaseProgressItem } from '~/@types/CaseProgressItem'
import {createShortDescription} from "~/utils/helpers";

defineProps<{
  item: CaseProgressItem
}>()

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div>
    <div class="relative">
      <NuxtPicture
        v-if="item.images?.length"
        :src="buildBackendImageUrl(runtimeConfig, item.images[0].url)"
      />
    </div>

    <div>
      <p v-html="createShortDescription(stripTags(item.description))" />

      <ButtonsReadMore
        :to="{ name: 'case-progress-id', params: { id: item.id } }"
        class="bg-black text-white transition-colors hover:bg-light-black hover:text-accent"
        inverted-image
      />
    </div>
  </div>
</template>
