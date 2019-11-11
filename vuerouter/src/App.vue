<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> <!--router link 表示组件的位置-->
      <router-link :to="'/user/'+userid">user</router-link>  <!--拼接url实现动态路由-->
      <router-link to="/about">About </router-link>
<!--
      <router-link :to="{path: '/profile',query:{name:'why',age:18}}">profile</router-link>
-->
      <button @click="toProfile()">profile</button>
    </div>  <!--用query属性传参数 url中的？=query-->
    <router-view></router-view>
  </div>
</template>

<script>
  export  default
  {
    name:'App',
    data(){
      return{
        userid:"lisi"
      }

    },
      methods:{
      toHome(){
        this.$router.push('/')
      },
        toProfile(){
        this.$router.push(
          {path: '/profile',query:{name:'why',age:18}}
        )
        }
    }
  }

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
