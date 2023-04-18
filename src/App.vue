<script lang="ts" setup>
import LayoutHeader from "@/components/Header/index.vue";
</script>

<template>
  <div class="wrapper dark:bg-black dark:text-white">
    <LayoutHeader />

    <main>
      <router-view></router-view>
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
