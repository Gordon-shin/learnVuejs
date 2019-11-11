<template>
    <div id="tab-bar">
    <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
    #tab-bar{
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        box-shadow: 0px -5px 10px rgba(100,100,100,.1);
        /*第一个参数是x轴偏移
        第二个参数y轴偏移*/
    }

</style>