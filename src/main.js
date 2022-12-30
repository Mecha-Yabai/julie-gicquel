import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
import BackToTop from "vue-backtotop";
import messages from "./locales";

const feather = require("feather-icons");
feather.replace();

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? "fr",
  fallbackLocale: "fr",
  messages,
});

createApp(App).use(i18n).use(router).use(BackToTop).mount("#app");

const mainTheme = localStorage.getItem("theme");

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
  mainTheme === "dark" &&
  document.querySelector("body").classList.contains("main-theme")
) {
  document.querySelector("body").classList.add("bg-primary-dark");
} else {
  document.querySelector("body").classList.add("bg-secondary-light");
}
