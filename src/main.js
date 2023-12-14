import "./assets/main.css";

import App from "./App.vue";
import ar from "./locales/ar";
import en from "./locales/en";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createHead } from "@vueuse/head";

const i18n = createI18n({
  locale: localStorage.getItem("userLocale") || "ar",
  legacy: false,
  messages: {
    ar: ar,
    en: en,
  },
});
const head = createHead();
const app = createApp(App);

app.use(head);
app.use(i18n);
app.mount("#app");
