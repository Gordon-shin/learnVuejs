<template>
    <div>
        <h1>我是Profile文件</h1>
        <h1 v-for="(key,items) in $route.query">{{key}}+++{{items}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>