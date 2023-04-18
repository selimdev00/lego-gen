<script lang="ts" setup>
import tops from "@/assets/elements/Tops";

import { Swiper, SwiperSlide } from "swiper/vue";
</script>

<template>
  <div>
    <swiper :slides-per-view="3" :space-between="50">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>
