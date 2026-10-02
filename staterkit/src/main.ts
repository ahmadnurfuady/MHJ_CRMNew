import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tooltip, Popover, ScrollSpy } from "bootstrap";

import App from "./App.vue";
import router from "./router";
import { createHead } from "@vueuse/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/scss/app.scss";

import VueFeather from "vue-feather";

import English from "@/core/locales/en.json";
import Russian from "@/core/locales/ru.json";
import Arabic from "@/core/locales/ar.json";
import German from "@/core/locales/ge.json";
import لعربية from "@/core/locales/ae.json";
import 简体中文 from "@/core/locales/cn.json";
import Português from "@/core/locales/pt.json";
import Français from "@/core/locales/fr.json";
import Deutsch from "@/core/locales/de.json";
import Español from "@/core/locales/es.json";

import { createI18n } from "vue-i18n";
const i18n = createI18n({
  legacy: false,
  locale: "English",
  messages: {
    English: English,
    German: German,
    Russian: Russian,
    Arabic: Arabic,
    Español: Español,
    Deutsch: Deutsch,
    Français: Français,
    Português: Português,
    简体中文: 简体中文,
    لعربية: لعربية,
  },
});

const app = createApp(App);
const head = createHead();

app
  .use(createPinia())
  .use(router)
  .use(i18n)
  .component(VueFeather.name!, VueFeather);

app.directive("tooltip", {
  mounted(el) {
    new Tooltip(el);
  },
  unmounted(el) {
    const tooltipInstance = Tooltip.getInstance(el);
    if (tooltipInstance) tooltipInstance.dispose();
  },
});

app.directive("popover", {
  mounted(el) {
    new Popover(el);
  },
});

app.directive("scrollspy", {
  mounted(el, binding) {
    const options = binding.value || {};
    new ScrollSpy(el, options);
  },
});
app.use(head);
app.mount("#app");
