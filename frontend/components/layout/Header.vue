<script setup lang="ts">
const isMainMenuOpened = useState<boolean>('isMainMenuOpened')
</script>

<template>
  <header>
    <LayoutContainer>
      <div class="py-7 flex items-center justify-between">
        <AppLogo class="text-white" />

        <ButtonsJoinCommunity class="max-tablet:hidden tablet:flex" />

        <LayoutHeaderMobileButtons />
      </div>

      <div class="max-tablet:hidden tablet:block opacity-30 border-b border-b-white" />
    </LayoutContainer>

    <LayoutContainer
      class="py-6 tablet:flex tablet:items-center tablet:justify-between"
      :class="{
        'hidden': !isMainMenuOpened,
      }"
    >
      <AppMainMenu />

      <AppSocialLinks class="max-lg:hidden lg:flex" />
    </LayoutContainer>
  </header>
</template>
