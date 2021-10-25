import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faChevronLeft,
//   faChevronRight
// } from "@fortawesome/free-solid-svg-icons";
//
// library.add(faChevronLeft, faChevronRight);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
