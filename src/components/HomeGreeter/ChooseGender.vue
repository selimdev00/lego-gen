<script lang="ts" setup>
import { ref } from "vue";

import { male, female, any } from "@/assets/icons";

interface GenderOption {
  name: string;
  value: string;
  description: string;
  icon: string;
}

const options = ref<GenderOption[]>([
  {
    name: "Male ♂️",
    description: "Generate male character",
    value: "male",
    icon: male,
  },
  {
    name: "Female ♀️",
    description: "Generate female character",
    value: "female",
    icon: female,
  },
  {
    name: "Who cares? 🤔",
    description: "Generate monster",
    value: "any",
    icon: any,
  },
]);
</script>

<template>
  <div class="columns-3 self-center mt-10">
    <div
      v-for="(item, index) in options"
      :key="`${item.value}-${index}`"
      class="card flex flex-col items-center justify-center gap-6 w-full p-8 border-2 border-white rounded-xl text-center"
    >
      <div
        class="border-2 border-white rounded-full w-52 h-52 overflow-hidden bg-violet-700"
      >
        <img :src="item.icon" alt="" class="w-full h-full" />
      </div>

      <div class="flex flex-col gap-1">
        <h1 class="text-4xl font-bold tracking-wider">{{ item.name }}</h1>

        <p class="opacity-70">{{ item.description }}</p>
      </div>

      <button
        class="bg-violet-700 py-2 px-6 rounded-lg hover:opacity-50 linear duration-150"
      >
        Choose
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 500px;
}
</style>
