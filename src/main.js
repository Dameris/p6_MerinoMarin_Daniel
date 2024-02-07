import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/router.js";

createApp(App).use(router).mount("#app");
