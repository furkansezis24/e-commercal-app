import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import "primeflex/primeflex.css";

import Dialog from "primevue/dialog";
import Card from "primevue/card";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";

const pinia = createPinia();
const app = createApp(App);

app.use(PrimeVue);
app.use(pinia);
app.use(router);
app.component("Card", Card);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("Menubar", Menubar);
app.component("InputText", InputText);

app.mount("#app");
