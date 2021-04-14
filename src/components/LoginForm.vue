<template>
    <el-form ref="loginForm" :rules="rules" :model="loginUser" label-width="100px" class="loginForm sign-in-form">
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginUser.email" placeholder="请输入邮箱...."></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="loginUser.password" type="password" placeholder="请输入密码...."></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="handleLogin('loginForm')">登录</el-button>
            <el-button>重置密码</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
    import {getCurrentInstance} from "vue";

    export default {
        name: "LoginForm",
        props: {
            loginUser: {
                type: Object,
                required: true
            },
            rules: {
                type: Object,
                required: true
            },

        },
        setup() {
            //获取当前实例需要对返回对象进行解构
            //@ts-ignore
            const {ctx} = getCurrentInstance()
            //该组件固定写法
            const handleLogin = (formName: string) => {
                //composition Api 无法指向当前实例，可以导入getCurrentInstance模块，然后再结构获取ctx对象
                console.log(ctx)
                ctx.$refs[formName].validate((valid: boolean) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                //入参为表单名
                console.log(formName);
            }
            return {
                handleLogin
            }
        }
    }
</script>

<style scoped>

</style>