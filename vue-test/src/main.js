// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './routes'

Vue.use(iview);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes
});

let isLogin = false;

router.beforeEach((to, from, next) => {
  if (to.path === '/login'){
    isLogin = true;
  }
  if (!isLogin && to.path !== '/login'){
    next({path: '/login'})
  } else{
    next()
  }
});


/* eslint-disable no-new */
const app = new Vue({
  //el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
