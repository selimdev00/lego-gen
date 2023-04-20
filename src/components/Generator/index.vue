<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import ChooseGender from "./ChooseGender.vue";
import ElementTypeSidebar from "./ElementTypeSidebar.vue";
import ElementSlider from "./ElementSlider.vue";

import type {
  GenderOption,
  Character,
  ElementTypeItem,
  Element,
} from "./types";
import { genders } from "./types";

const route = useRoute();
const router = useRouter();

const gender = ref<GenderOption>();
initGender();

function initGender(): void {
  const queryGender = route.query.gender as string;

  if (gender) {
    const option = genders.find((e) => e.value === queryGender);

    if (option) {
      gender.value = option;
    }
  }
}

interface QueryItem {
  key: string;
  value: string;
}

const pushToQuery = ({ key, value }: QueryItem) => {
  const currentQuery = { ...route.query };

  currentQuery[key] = value;

  router.replace({ query: currentQuery });
};

const setGender = (item: GenderOption): void => {
  gender.value = item;

  pushToQuery({ key: "gender", value: item.value });
};

const setElementType = (type: ElementTypeItem): void => {
  pushToQuery({ key: "element-type", value: type.value });
};

const setElement = (type: Element): void => {
  const elementType = route.query["element-type"] as string;

  pushToQuery({
    key: elementType,
    value: type.name,
  });

  if (!character.value) return;
  character.value[elementType] = type.icon;
};

const character = ref<Character>({});
</script>

<template>
  <div>
    <ChooseGender v-if="!gender" @choose="setGender" />

    <div v-else class="generator relative">
      <ElementTypeSidebar @set-element-type="setElementType" />

      <div class="generator__main flex flex-col gap-3">
        <div class="generator__character">
          <div class="absolute generator__character__head element">
            <img :src="character?.Head" alt="" />
          </div>

          <div class="absolute center generator__character__top element">
            <img :src="character?.Top" alt="" />
          </div>

          <div class="absolute generator__character__mouth element">
            <img :src="character?.Mouth" alt="" />
          </div>
        </div>

        <ElementSlider class="mt-auto bottom-0" @set-element="setElement" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.generator {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;

  &__main {
    min-width: 0;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__character {
    height: 440px;
    width: 440px;
    position: relative;

    img {
      max-width: unset;
    }

    .element {
      left: 50%;
      transform: translateX(-50%);
    }

    &__head {
      top: 125px;
    }

    &__top {
      top: 58px;
    }

    &__mouth {
      top: 225px;
    }
  }
}
</style>
