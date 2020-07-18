import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
//2. import routes components from the routes.js file
import { routes } from './routes';
//1. this enables vue router
Vue.use(VueRouter);

//3. add a new VueRouter({})
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

//4.added router
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
