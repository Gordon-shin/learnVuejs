// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from "ant-design-vue/es";
import "ant-design-vue/dist/antd.css";
import  Timer  from './components/Timer'
import  AntButton from './components/AntButton'
import  AntFormPass from './components/AntFormPass'
import * as babelpolyfill from "babel-polyfill"
Vue.use(Antd);
Vue.config.productionTip = false

/* eslint-disable no-new */
const app =new Vue({
  el: '#app',
  components: {
    Timer:Timer,
    AntButton:AntButton,
    AntFormPass:AntFormPass

  },

})
