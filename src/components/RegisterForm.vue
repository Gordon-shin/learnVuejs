<template>
    <!--ref表示表单的名字-->
    <el-form
            :ref="registerForm"
            :rules="rules"
            :model="registerUser"
            label-width="100px" class=" sign-up-form">
        <!--  RegisterUser对象 用于表单数据对象-->
        <el-form-item label="姓名" prop="name">
            <el-input v-model="registerUser.name" placeholder="请输入姓名...."></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerUser.email" placeholder="请输入姓名...."></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="registerUser.password" type="password" placeholder="请输入密码...."></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
            <el-input v-model="registerUser.password2" type="password"
                      placeholder="请重新输入密码...."></el-input>
        </el-form-item>
        <!--选择身份-->
        <el-form-item label="选择身份">
            <el-select v-model="registerUser.role" placeholder="请选择身份">
                <el-option label="管理员" value="admin"></el-option>
                <el-option label="用户" value="user"></el-option>
                <el-option label="访客" value="visitor"></el-option>
            </el-select>
        </el-form-item>
        <!--具体用法参考ElementUI Api用法-->
        <el-form-item>
            <el-button type="primary" @click="handleRegister('registerForm')">注册</el-button>
            <el-button>重置密码</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
    import {getCurrentInstance, ref} from "vue";

    export default {
        name: "RegisterForm",
        props:{
            registerUser:{
               type:Object,
                required : true
            },
            rules: {
                type: Object,
                required: true
            },
        },
        setup(){
            //@ts-ignore
            const {ctx} = getCurrentInstance()
            const handleRegister = (formName: string)=>{
                console.log(formName)
            }
        }
    }
</script>

<style scoped>

</style>