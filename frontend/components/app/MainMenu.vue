<script setup lang="ts">
import type MenuItem from '~/@types/MenuItem'

const _menuItems = inject<{ attributes: MenuItem }[]>('MenuItems')
const menuItems = computed(() => _menuItems?.filter(item => item.attributes.showInHeader).map(item => ({
  ...item.attributes,
})))
</script>

<template>
  <nav>
    <ul
      role="menu"
      class="flex gap-x-5 text-white font-medium text-base -ml-1"
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
