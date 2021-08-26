import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import x5GMaps from 'x5-gmaps'
import axios from 'axios'
import store from './store/store'

import routes from './routes.js';

axios.defaults.baseURL = 'http://opentable.herokuapp.com/api';

Vue.use(x5GMaps, 'AIzaSyAe9LPPTrjfaY-JGfs4EIv-FD4VBPk2ipM')
Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

Vue.filter('phoneformat', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.replace(/(\d{3}).*(\d{3}).*(\d{4}).*/, "$1-$2-$3")
})

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
