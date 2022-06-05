import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { registerComponents } from "./registerComponents";
import { registerPublishOwnPackages } from "./registerPublishOwnPackages";

import { filters } from "./filters";
import { directives } from "./directives";
createApp(App)
  .use(registerComponents)
  .use(registerPublishOwnPackages)
  .use(filters)
  .use(directives)
  .use(store)
  .use(router)
  .mount("#app");
