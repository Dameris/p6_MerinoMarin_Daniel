import "./assets/css/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./components/router/router.js"

// Se crea la instancia de la aplicación Vue utilizando la función createApp
// Se utiliza el componente principal App.vue como raíz de la aplicación
// Se agrega el enrutador a la instancia de la aplicación mediante el uso del método use
// Se monta la aplicación en el elemento con el id "app" en el DOM
createApp(App).use(router).mount("#app")
