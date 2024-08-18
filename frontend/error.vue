<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})

const { t } = useI18n()
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col justify-center items-center min-h-[70dvh]">
      <h1 class="text-5xl sm:text-7xl font-bold tracking-tight">
        {{ error?.statusCode }}
      </h1>
      <p
        v-if="error?.message?.length || error?.statusMessage?.length"
        class="mt-4 text-base/7 text-gray-500 text-center"
      >
        {{ error?.message?.length
            ? error.message
            : error.statusMessage }}
      </p>

      <ButtonsReadMore
        :to="{ name: 'index' }"
        class="bg-accent mt-8"
      >
        {{ t('errors.goBackHome') }}
      </ButtonsReadMore>

      <pre class="py-7 hidden">{{ JSON.stringify(error) }}</pre>
    </div>
  </NuxtLayout>
</template>
