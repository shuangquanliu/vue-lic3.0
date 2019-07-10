import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './vuex/store.js'
import Header from './components/Header/Header.vue'
import { Button } from 'mint-ui'
import './validate'
import './mock/mockServer.js'
        

//组件对象可以看到vm实例对象方法:组件对象的原型对象时vm的实例

//引入全局公共组件
Vue.component('Header',Header)

Vue.component(Button.name, Button)  // mt-button
new Vue({
  el:'#app',
 /*  components:{
    App
  },
  template:'<App/>', */
  render: h => h(App), 
  router,
  store
})
