<script lang="ts" setup>
import { ref } from "vue";
import ChooseGender from "./ChooseGender.vue";
import ElementSidebar from "./ElementSidebar.vue";
import ElementSlider from "./ElementSlider.vue";
import { GenderOption } from "./types";

const gender = ref<GenderOption>();

const setGender = (item: GenderOption): void => {
  gender.value = item;
};
</script>

<template>
  <div>
    <ChooseGender v-if="!gender" @choose="setGender" />

    <div v-else class="generator relative">
      <ElementSidebar />

      <div class="flex flex-col gap-3">
        <h1>Here is character</h1>

        <ElementSlider class="absolute bottom-0" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.generator {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  height: 0vh;
}
</style>
