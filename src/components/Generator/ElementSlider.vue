<script lang="ts" setup>
import { ref } from "vue";

import { useRoute, onBeforeRouteUpdate } from "vue-router";

import {
  Tops,
  Heads,
  Mouths,
  Glasses,
  Eyes,
  Eyebrows,
  Bodies,
  Backgrounds,
  Pets,
} from "./elements";
import type { Element } from "./types";

const route = useRoute();

const emit = defineEmits(["setElement"]);

const setElement = (element: object): void => {
  emit("setElement", element);
};

const elements = ref<Element[]>([]);

const initElements = (elementType: string | boolean): void => {
  if (!elementType) elementType = route.query?.["element-type"] as string;

  const ref = {
    Head: Heads,
    Top: Tops,
    Mouth: Mouths,
    Glasses: Glasses,
    Eyes: Eyes,
    Eyebrows: Eyebrows,
    Body: Bodies,
    Background: Backgrounds,
    Pet: Pets,
  };

  if (elementType) {
    elements.value = ref[elementType];
  }
};

onBeforeRouteUpdate((to, from) => {
  initElements(to.query["element-type"] as string);
});

initElements(false);
</script>

<template>
  <swiper-container
    class="w-full h-20"
    slides-per-view="6"
    space-between="14"
    centered-slides="true"
  >
    <swiper-slide v-for="(top, index) in elements" :key="`top-${index}`">
      <div
        class="h-full bg-zinc-800 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-50 ease-linear duration-150"
        @click="setElement(top)"
      >
        <img :src="top.icon" alt="" class="h-4/5" />
      </div>
    </swiper-slide>
  </swiper-container>
</template>
