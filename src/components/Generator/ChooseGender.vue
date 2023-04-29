<script lang="ts" setup>
import { ref } from "vue";

import { genders } from "./types";

import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

import type { GenderOption, QueryItem } from "./types";

const emit = defineEmits(["choose"]);

const gender = ref<GenderOption>();

const route = useRoute();
const router = useRouter();

const nextStep = (): void => {
  emit("choose", gender.value);
};

const setGender = (item: GenderOption): void => {
  gender.value = item;

  pushToQuery({ key: "gender", value: item.value });
};

const pushToQuery = ({ key, value }: QueryItem) => {
  const currentQuery = { ...route.query };

  currentQuery[key] = value;

  router.replace({ query: currentQuery });
};

const genderSelected = (item: GenderOption): boolean => {
  return item.value === gender.value?.value;
};
</script>

<template>
  <div class="flex flex-col gap-8 px-4 pb-8">
    <div class="columns-3 self-center mt-10">
      <div
        v-for="(item, index) in genders"
        :key="`${item.value}-${index}`"
        class="card flex flex-col items-center justify-center gap-6 w-full p-8 border-2 border-white rounded-xl text-center"
      >
        <div
          class="flex flex-col items-center gap-6"
          :class="[{ 'opacity-50': !genderSelected(item) }]"
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
        </div>

        <button
          class="bg-violet-700 py-2 px-6 rounded-lg hover:opacity-50 linear duration-150"
          :class="[{ 'opacity-50': genderSelected(item) }]"
          @click="setGender(item)"
        >
          {{ genderSelected(item) ? "Choosed" : "Choose" }}
        </button>
      </div>
    </div>

    <button
      v-if="gender"
      @click="() => nextStep()"
      class="relative flex items-center justify-center bg-violet-700 py-2 px-6 rounded-lg hover:opacity-50 linear duration-150 w-96 mx-auto"
    >
      Next

      <v-icon name="fa-chevron-right" class="absolute w-3 right-3" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 500px;
}
</style>
