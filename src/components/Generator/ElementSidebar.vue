<script lang="ts" setup>
import Head from "@/assets/elements/Head/Head.svg";
import Top from "@/assets/elements/Tops/Styled.svg";
import { ref } from "vue";

interface ElementItem {
  name: string;
  icon: string;
  value: string;
}

const items: ElementItem[] = [
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
];

const element = ref<ElementItem>();

const setElement = (item: ElementItem): void => {
  element.value = item;
};

const elementSelected = (item: ElementItem): boolean => {
  console.log(item.value === element.value?.value);
  return item.value === element.value?.value;
};
</script>

<template>
  <div>
    <h2 class="mb-3 text-xs font-medium uppercase">Elements:</h2>
    <ul class="flex flex-col gap-2">
      <li
        v-for="(item, index) in items"
        :key="`element-${index}`"
        class="flex items-center gap-4 hover:opacity-50 ease-linear duration-150 bg-zinc-800 py-2 px-4 rounded-md cursor-pointer"
        :class="[{ '!bg-violet-700': elementSelected(item) }]"
        @click="setElement(item)"
      >
        <img :src="item.icon" alt="" class="w-6 h-6" />
        <span> {{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
