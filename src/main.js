import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
import messages from "./locales";
import { revele } from "./directives/revele";

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("locale") ?? "fr",
    fallbackLocale: "fr",
    messages,
});

createApp(App).use(i18n).use(router).directive("revele", revele).mount("#app");
