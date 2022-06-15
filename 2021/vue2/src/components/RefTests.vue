<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
      <button @click="showDOM">点我showDOM</button>

    <SpaceButton ref="button"/>

  </div>

</template>

<script>
import SpaceButton from "@/components/SpaceButton";
export default {
  name: "RefTests",
  components:{SpaceButton},
  data(){
    return {
      msg:"welcome to ccb"
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs)//vue中ref的所有实例对象
      console.log(this.$refs.button)//vue中的button组件的实例对象
    }
  }
}
</script>

<style scoped>

</style>