import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Tips from "./plugins/tips"
import Navigation from "vue-navigation"
import LazyLoad from "vue-lazyload"
import Fastclick from "fastclick"

if ("addEventListener" in window) {
    document.addEventListener("DOMContentLoaded", function () {
        Fastclick.attach(document.body)
    })
}

// Vue.use(Navigation, {store, router})
Vue.use(LazyLoad, {
    loading: require("../public/static/img/qqq.png")
})

import "./config/rem"

Vue.use(Tips)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
