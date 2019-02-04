import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vueApollo'
import App from './App.vue'
import router from './router'
import store from './store'
import { apolloProvider } from './apollo'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
  created() {
    // execute getCurrentUser query
    this.$store.dispatch('getCurrentUser');
  }
}).$mount('#app')
