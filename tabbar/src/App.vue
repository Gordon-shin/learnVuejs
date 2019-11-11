<template>
    <div id="app">
        <router-view></router-view>
        <tabbar>
            <tab-bar-item path="/home">
            <!--    <template #item-icon>
                    <img src="@/assets/img/tabbar/home.png">
                </template>
                <template #item-icon-active>
                    <img src="@/assets/img/tabbar/home_active.png">
                </template>
                <template #item-name>
                    <div>首页</div>
                </template>-->
                <img slot="item-icon" src="@/assets/img/tabbar/home.png">
                <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.png">
                <div slot="item-name">首页</div>
            </tab-bar-item >
            <tab-bar-item path="/category">
                <template #item-icon>
                    <img src="@/assets/img/tabbar/category.png">
                </template>
                <template #item-icon-active>
                    <img src="@/assets/img/tabbar/category_active.png">
                </template>
                <template #item-name>
                    <div>分类</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <template #item-icon>
                    <img src="@/assets/img/tabbar/cart.png">
                </template>
                <template #item-icon-active>
                    <img src="@/assets/img/tabbar/cart_active.png">
                </template>
                <template #item-name>
                    <div>购物车</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <template #item-icon>
                    <img src="@/assets/img/tabbar/profile.png">
                </template>
                <template #item-icon-active>
                    <img src="@/assets/img/tabbar/profile_active.png">
                </template>
                <template #item-name>
                    <div>我的</div>
                </template>
            </tab-bar-item>
        </tabbar>
    </div>
</template>

<script>
    import tabbar from '@/components/Tabbar/tabbar'
    import TabBarItem from "@/components/Tabbar/TabBarItem";


export default {
  name: 'app',
  components: {
      TabBarItem,
      tabbar
  }
}
</script>

<style>
@import "./assets/css/base.css";


</style>
