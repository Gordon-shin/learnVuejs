<template>
  <div class="home">
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <img alt="Vue logo" src="@/assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() { //template 挂载完在dom上后
  },
  updated() {
  }
}
</script>
