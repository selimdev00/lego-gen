import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.scss";
const app = createApp(App);

import router from "./router";
app.use(router);

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
app.mount("#app");
