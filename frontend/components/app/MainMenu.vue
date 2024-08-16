<script setup lang="ts">
import type MenuItem from '~/@types/MenuItem'

const _menuItems = inject<{ attributes: MenuItem }[]>('MenuItems', [])
const menuItems = computed(() => _menuItems?.filter(item => item.attributes.showInHeader).map(item => ({
  ...item.attributes,
})))

const isOpened = useState<boolean>('isMainMenuOpened')
</script>

<template>
  <nav
    class="fixed inset-0 z-50 tablet:static bg-black pt-24 tablet:pt-0"
    :class="{
      'hidden tablet:block': !isOpened,
    }"
  >
    <button
      class="fixed tablet:hidden top-3 right-3 w-7 h-7 rotate-45"
      @click="isOpened = !isOpened"
    >
      <span class="absolute w-full h-0.5 top-1/2 left-1/2 bg-white rounded -translate-x-1/2 -translate-y-1/2" />
      <span class="absolute w-full h-0.5 top-1/2 left-1/2 bg-white rounded -translate-x-1/2 -translate-y-1/2 rotate-90" />
    </button>

    <ul
      role="menu"
      class="flex flex-col items-center tablet:flex-row gap-5 text-white font-medium text-lg tablet:text-sm lg:text-base -ml-1"
    >
      <li
        v-for="(menuItem, idx) in menuItems"
        :key="`header-menu-item-${idx}`"
        role="presentation"
      >
        <NuxtLinkLocale
          :to="menuItem.matchedUrl"
          class="transition-colors hover:text-accent p-1"
          exact-active-class="text-accent"
          role="menuitem"
        >
          {{ menuItem.title }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </nav>
</template>
