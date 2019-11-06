<template>
  <div>
    <a-button type="primary"
              :loading="loading"
              @click="enterLoading">
      登陆
    </a-button>
    <a-button type="danger">注册</a-button>
  </div>
</template>

<script>
    import { Button } from 'ant-design-vue';

    export default {
        name: "AntButton",
        data(){
          return{
            loading:false
          }

        },
        methods: {
            mouseout(){
               this.loading=false
            },
            enterLoading() {
                if (this.loading===true) {
                    this.loading=false;
                }
                else{
                    this.loading=true;
                }
            },
            enterIconLoading() {
                this.iconLoading = { delay: 1000 };
            }
            },
        components:{
            Button
        }
    }
</script>

<style scoped>
div{
  float: right;
}
</style>
