<script lang="ts" setup>
import Head from "./elements/Head/Head.svg";
import Top from "./elements/Tops/Styled.svg";
import Mouth from "./elements/Mouths/Smile.svg";
import Glasses from "./elements/Glasses/Plain.svg";
import Eyes from "./elements/Eyes/Normal.svg";
import Eyebrows from "./elements/Eyebrows/Thick.svg";
import Body from "./elements/Bodies/Plain.svg";
import Background from "./elements/Backgrounds/Solid.svg";
import Pet from "./elements/Pets/Raptor.svg";

import { ref } from "vue";
import { useRoute } from "vue-router";
import type { ElementTypeItem } from "./types";

const route = useRoute();

const emit = defineEmits(["setElementType"]);

const items: ElementTypeItem[] = [
  {
    name: "Head",
    icon: Head,
    value: "Head",
  },
  {
    name: "Top",
    icon: Top,
    value: "Top",
  },
  {
    name: "Mouth",
    icon: Mouth,
    value: "Mouth",
  },
  {
    name: "Glasses",
    icon: Glasses,
    value: "Glasses",
  },
  {
    name: "Eyes",
    icon: Eyes,
    value: "Eyes",
  },
  {
    name: "Eyebrows",
    icon: Eyebrows,
    value: "Eyebrows",
  },
  {
    name: "Body",
    icon: Body,
    value: "Body",
  },
  {
    name: "Background",
    icon: Background,
    value: "Background",
  },
  {
    name: "Pet",
    icon: Pet,
    value: "Pet",
  },
];

const elementType = ref<ElementTypeItem>();

const setElementType = (item: ElementTypeItem): void => {
  elementType.value = item;

  emit("setElementType", item);
};

const elementSelected = (item: ElementTypeItem): boolean => {
  return (
    item.value === elementType.value?.value ||
    item.value === route.query?.["element-type"]
  );
};

const initElementType = (): void => {
  if (!route.query?.["element-type"]) {
    setElementType(items[0]);

    elementType.value = items[0];
  }
};

initElementType();
</script>

<template>
  <div class="generator-sidebar">
    <h2 class="mb-3 text-xs font-medium uppercase">Element types:</h2>
    <ul class="flex flex-col gap-2">
      <li
        v-for="(item, index) in items"
        :key="`element-${index}`"
        class="flex items-center gap-4 hover:opacity-50 ease-linear duration-150 bg-zinc-800 py-2 px-4 rounded-md cursor-pointer"
        :class="[{ '!bg-violet-700': elementSelected(item) }]"
        @click="setElementType(item)"
      >
        <img :src="item.icon" alt="" class="w-6 h-6" />
        <span> {{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.generator-sidebar {
}
</style>
