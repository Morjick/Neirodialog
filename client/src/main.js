import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMapbox from "vue-mapbox"
import Mapbox from "mapbox-gl"

import router from './functions/routes'
import store from './vuex/store'

import Toast, { POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css"

const options = {
  position: POSITION.TOP_LEFT
}

Vue.use(VueMapbox, { mapboxgl: Mapbox })
Vue.use(Toast, options)
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
