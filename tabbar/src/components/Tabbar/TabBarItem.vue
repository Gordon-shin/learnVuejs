<template>
    <div class="tab-bar-item">
        <div @click="itemClick">
            <div v-if="!isActive"><slot name="item-icon"></slot></div>
            <div v-else><slot name="item-icon-active"></slot></div>
        </div>

        <div :class="{active:isActive}"><slot name="item-name"></slot></div>
       <!-- <img src="@/assets/img/tabbar/home.png">
        <div>首页</div>-->
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String
        },
        data(){
            return {
                //isActive:true
            }
        },
        computed:{
           isActive(){
               return this.$route.path.indexOf(this.path)!==-1
           }
        },
        methods:{
            itemClick(){
               this.isActive=!this.isActive
              // console.log(this.path)
                this.$router.push({path:this.path});
            }
        }
    }
</script>

<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
}
.tab-bar-item img{
   width:24px;
    height: 24px;
}
.active{
    color: hotpink;
}

</style>