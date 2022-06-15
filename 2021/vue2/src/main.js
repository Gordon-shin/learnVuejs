import Vue from 'vue'

//import Layout from 'ant-design-vue/lib/layout'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
//全量引入
Vue.use(Antd)
//Vue.component(Button.name, Button);
//Vue.component(Layout.name, Layout);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
