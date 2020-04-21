import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ELEMENT from "element-ui";
Vue.use(ELEMENT);
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
import {mavonEditor} from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
