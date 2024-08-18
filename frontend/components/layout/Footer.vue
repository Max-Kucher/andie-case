<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const buttonsJoinCommunityClass = 'text-black w-max'
</script>

<template>
  <footer class="bg-black text-white">
    <LayoutContainer class="max-small-tablet:pt-12 max-small-tablet:pb-16 small-tablet:max-lg:pt-16 small-tablet:max-lg:pb-24 lg:pt-24 lg:pb-36 app-layout-cols">
      <div class="flex flex-wrap gap-x-6 justify-between small-tablet:block pt-2 lg:pt-5 space-y-6">
        <AppLogo class="w-full small-tablet:mb-10" />

        <LayoutFooterSocials />

        <ButtonsJoinCommunity :class="twMerge(buttonsJoinCommunityClass, 'lg:hidden')" />
      </div>

      <div class="mt-10 small-tablet:mt-0 small-tablet:max-lg:col-span-2 lg:col-span-1">
        <AppFooterMenu />
      </div>

      <div class="max-lg:hidden lg:block lg:pt-5">
        <ButtonsJoinCommunity :class="twMerge(buttonsJoinCommunityClass, 'lg:ml-auto')" />
      </div>
    </LayoutContainer>
  </footer>
</template>
