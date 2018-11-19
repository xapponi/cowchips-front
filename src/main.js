import store from './store'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify/lib'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false;

Vue.use(Vuetify)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
