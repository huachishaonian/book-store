import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import iViewShim from './utils/iview-shim';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(iView, {
  transfer: true,
  size: 'large'
});
iViewShim();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
