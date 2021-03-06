// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import util from "./util/util"
import ElementUI from "element-ui"
import VueCookies from 'vue-cookies'
import {setCookie,getCookie,delCookie} from "./assets/js/cookies";


import "element-ui/lib/theme-chalk/index.css"

import "../src/assets/css/public.css"

Vue.config.productionTip = false;
Vue.prototype.axios=axios;
Vue.prototype.util = util;
Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.prototype.$cookieStore = {
  setCookie,getCookie,delCookie
}
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
