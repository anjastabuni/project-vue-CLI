import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bottstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

vue.Config.productionTip = false;

new vue({
  render: (h) => h(App),
}).$mount("#app");
// createApp(App).mount("#app");
