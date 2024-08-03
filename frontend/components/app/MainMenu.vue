<script setup lang="ts">
import { inject } from 'vue'
import type MenuItem from '~/@types/MenuItem'

const _menuItems = inject<MenuItem[]>('MenuItems')
const menuItems = computed(() => _menuItems?.filter(item => item.attributes.showInHeader).map(item => ({
  ...item.attributes,
})))
</script>

<template>
  <nav>
    <ul
      role="menu"
      class="flex gap-x-7 text-white"
    >
      <li
        v-for="(menuItem, idx) in menuItems"
        :key="`header-menu-item-${idx}`"
      >
        <NuxtLinkLocale
          :to="menuItem.matchedUrl"
          exact-active-class="text-accent"
        >
          {{ menuItem.title }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </nav>
</template>
