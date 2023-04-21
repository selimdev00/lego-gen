<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import ChooseGender from "./ChooseGender.vue";
import ElementTypeSidebar from "./ElementTypeSidebar.vue";
import ElementSlider from "./ElementSlider.vue";

import elements from "./elements";

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
const initCharacter = (): void => {
  const { Top, Head, Mouth, Glasses, Eyes, Eyebrows, Body, Background, Pet } =
    route.query as object;

  if (Top) {
    character.value.Top = elements.Tops.find((e) => e.name === Top).icon;
  }

  if (Head) {
    character.value.Head = elements.Heads.find((e) => e.name === Head).icon;
  }

  if (Mouth) {
    character.value.Mouth = elements.Mouths.find((e) => e.name === Mouth).icon;
  }

  if (Glasses) {
    character.value.Glasses = elements.Glasses.find(
      (e) => e.name === Glasses
    ).icon;
  }

  if (Eyes) {
    character.value.Eyes = elements.Eyes.find((e) => e.name === Eyes).icon;
  }

  if (Eyebrows) {
    character.value.Eyebrows = elements.Eyebrows.find(
      (e) => e.name === Eyebrows
    ).icon;
  }

  if (Body) {
    character.value.Body = elements.Bodies.find((e) => e.name === Body).icon;
  }

  if (Background) {
    character.value.Background = elements.Backgrounds.find(
      (e) => e.name === Background
    ).icon;
  }

  if (Pet) {
    character.value.Pet = elements.Pets.find((e) => e.name === Pet).icon;
  }
};
initCharacter();
</script>

<template>
  <div>
    <ChooseGender v-if="!gender" @choose="setGender" />

    <div v-else class="generator relative">
      <ElementTypeSidebar @set-element-type="setElementType" />

      <div class="generator__main flex flex-col gap-3">
        <div id="character" class="generator__character">
          <div class="absolute generator__character__head element">
            <img :src="character?.Head" alt="" />
          </div>

          <div class="absolute center generator__character__top element">
            <img :src="character?.Top" alt="" />
          </div>

          <div class="absolute generator__character__mouth element">
            <img :src="character?.Mouth" alt="" />
          </div>

          <div class="absolute generator__character__glasses element">
            <img :src="character?.Glasses" alt="" />
          </div>

          <div class="absolute generator__character__eyes element">
            <img :src="character?.Eyes" alt="" />
          </div>

          <div class="absolute generator__character__eyebrows element">
            <img :src="character?.Eyebrows" alt="" />
          </div>

          <div class="absolute generator__character__body element">
            <img :src="character?.Body" alt="" />
          </div>

          <div class="absolute generator__character__background element">
            <img :src="character?.Background" alt="" />
          </div>

          <div
            v-if="character.Pet"
            class="absolute generator__character__pet element"
          >
            <img :src="character?.Pet" alt="" />
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
    overflow: hidden;

    img {
      max-width: unset;
    }

    .element {
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
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

    &__glasses {
      top: 194px;
    }

    &__eyes {
      top: 194px;
    }

    &__eyebrows {
      top: 176px;
    }

    &__body {
      top: 297px;
    }

    &__background {
      left: 0;
      top: 0;
      z-index: 1 !important;
    }

    &__pet {
      left: -88px !important;
      top: 310px;
      transform: rotate(-20deg) !important;

      img {
        width: 290px;
        height: 184px;
      }
    }
  }
}
</style>
