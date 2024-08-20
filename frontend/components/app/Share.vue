<script setup lang="ts">
const props = defineProps<{
  title: string
  url?: string
}>()

const currentUrl = useRequestURL()

const url = computed(() => {
  return props.url === undefined ? currentUrl.toString() : props.url
})

const { t } = useI18n()
const clickHandler = () => {
  if (navigator.share === undefined || window.location.protocol !== 'https:') {
    navigator.clipboard.writeText(url.value).then(() => {
      alert(t('share.linkCopied'))
    })
  } else {
    navigator.share({
      title: props.title,
      url: url.value,
    })
  }
}

const shareTitle = t('share.title')
</script>

<template>
  <div class="mt-16 border-b border-black/20">
    <div
      class="inline-flex gap-x-2 text-lg font-medium cursor-pointer"
      @click="clickHandler"
    >
      <NuxtImg
        src="/images/icons/share.svg"
        :width="17"
        :alt="shareTitle"
      />

      {{ shareTitle }}
    </div>
  </div>
</template>
