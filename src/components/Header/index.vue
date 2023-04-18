<script setup lang="ts">
import { ref } from "vue";

interface HeaderNavItem {
  name: string;
  path: string;
}

const nav = ref<HeaderNavItem[]>([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
]);
</script>

<template>
  <header class="header__wrapper dark:bg-black">
    <div class="xl:container mx-auto">
      <div class="header flex items-center justify-between py-4">
        <router-link
          to="/"
          class="header__logo flex gap-3 dark:text-white font-bold hover:opacity-50 ease-linear duration-150"
        >
          <span>L</span>
          <span>E</span>
          <span>G</span>
          <span>O</span>
          <span>|</span>
          <span>G</span>
          <span>E</span>
          <span>N</span>
        </router-link>

        <div class="flex items-center gap-6">
          <nav class="header__nav">
            <ul class="flex items-center gap-8">
              <li v-for="(item, index) in nav" :key="`${item.name}-${index}`">
                <router-link
                  :to="item.path"
                  class="dark:text-white hover:opacity-50 ease-linear duration-150"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </nav>

          <div class="header__panel">
            <button
              class="bg-violet-700 py-2 px-6 rounded-xl dark:text-white font-bold hover:opacity-50 ease-linear duration-150"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
