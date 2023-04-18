<script lang="ts" setup>
import LayoutHeader from "@/components/Header/index.vue";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const showPage = ref<boolean>(false);
const PAGE_TRANSITION_MS: number = 450;

watch(route, () => {
  showPage.value = false;

  setTimeout(() => {
    showPage.value = true;
  }, PAGE_TRANSITION_MS);
});
</script>

<template>
  <div class="wrapper dark:bg-black dark:text-white">
    <LayoutHeader />

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component v-if="showPage" :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}
</style>
