<script setup lang="ts">
import type MenuItem from '~/@types/MenuItem'

const _menuItems = inject<{ attributes: MenuItem }[]>('MenuItems')
const menuItems = computed(() => (_menuItems?.filter(item => item.attributes.showInFooter) ?? []).map(item => ({
  ...item.attributes ?? [],
})))
</script>

<template>
  <nav class="flex gap-x-20 text-faded-text font-medium text-base">
    <ul
      v-for="(menuChunk, idx) in arrayChunk<MenuItem>(menuItems, 4)"
      :key="`footer-menu-${idx}`"
      role="menu"
      class="space-y-2"
    >
      <li
        v-for="(item, itemIdx) in menuChunk"
        :key="`footer-menu-${idx}-item-${itemIdx}`"
      >
        <NuxtLinkLocale
          :to="item.matchedUrl"
          role="menuitem"
          class="inline-block py-1 hover:text-white transition-colors"
        >
          {{ item.title }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </nav>
</template>
