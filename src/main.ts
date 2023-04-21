import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.scss";
const app = createApp(App);

import router from "./router";
app.use(router);

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaChevronRight, FaSave, FaFileExport } from "oh-vue-icons/icons";

addIcons(FaChevronRight, FaSave, FaFileExport);
app.component("v-icon", OhVueIcon);

const loadSystemTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

loadSystemTheme();

import { register } from "swiper/element/bundle";
register();

app.mount("#app");
