import Vue from 'vue' // 引入vue ES6 標準導入寫法
import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false
// 意思為渲染App至#app
// h(App)渲染用的
new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
