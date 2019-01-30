import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

// use vue apollo
Vue.use(VueApollo);

// setup apollo client
const defaultClient = new ApolloClient({
  uri: 'http://localhost:2000'
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
