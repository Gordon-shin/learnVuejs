<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户的相关信息</p>
        <h2>{{userid}}</h2>
    </div>
</template>

<script>
    export default {
        name: "user",
        computed:{
            userid(){
                return this.$route.params.id
            }

        }
    }
</script>

<style scoped>

</style>