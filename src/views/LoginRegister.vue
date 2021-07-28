<template>
    <!--    组件内容器-->
    <!--    1.通过v-bind绑定类名格式-->
    <!--    :class="['需要绑定类名', ...]"-->

    <!--    注意点:-->
    <!--    1.直接赋值一个类名(没有放到数组中)默认回去Model中查找-->
    <!--    2.数组中的类名没有用引号括起来也会去Model中查找-->
    <!--    3.数组的每一个元素都可以是一个三目运算符按需导入。例如 :class="[flag?'active':'']"-->
    <!--    4.可以使用对象来替代数组中的三目运算符按需导入。例如  :class="[{'active': true}]"-->
    <!--    5.绑定的类名太多可以将类名封装到Model中。 例如在model中定义  obj={'active':true} ,使用 :class="obj"-->
    <!--   -->
    <div class="container" :class="{'sign-up-mode':signUPMode}">
        <!--表单容器-->
        <div class="forms-container">
            <div class="signin-signup">
                <!--登录-->
                <!--                <h1>登录</h1>-->
                <!--                <el-card style="width: 480px;height: 480px">-->
                <LoginForm class="sign-in-form loginForm" :loginUser="loginUser" :rules="rules"/>

                <!--                </el-card>-->

                <RegisterForm class="registerForm"
                        :register-user="registerUser"
                />
            </div>
        </div>
                <!--ref表示表单的名字-->
<!--                <el-form-->
<!--                        :ref="registerForm"-->
<!--                        :rules="rules"-->
<!--                        :model="registerUser"-->
<!--                        label-width="100px" class="loginForm sign-in-form">-->
<!--                    &lt;!&ndash;  RegisterUser对象 用于表单数据对象&ndash;&gt;-->
<!--                        <el-form-item label="姓名" prop="name">-->
<!--                            <el-input v-model="registerUser.name" placeholder="请输入姓名...."></el-input>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="邮箱" prop="email">-->
<!--                            <el-input v-model="registerUser.email" placeholder="请输入姓名...."></el-input>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="密码" prop="password">-->
<!--                        <el-input v-model="registerUser.password" type="password" placeholder="请输入密码...."></el-input>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="确认密码" prop="password">-->
<!--                            <el-input v-model="registerUser.password2" type="password"-->
<!--                                      placeholder="请重新输入密码...."></el-input>-->
<!--                        </el-form-item>-->
<!--                        &lt;!&ndash;选择身份&ndash;&gt;-->
<!--                        <el-form-item label="选择身份">-->
<!--                            <el-select v-model="registerUser.role" placeholder="请选择身份">-->
<!--                                <el-option label="管理员" value="admin"></el-option>-->
<!--                                <el-option label="用户" value="user"></el-option>-->
<!--                                <el-option label="访客" value="visitor"></el-option>-->
<!--                            </el-select>-->
<!--                        </el-form-item>-->
<!--                            &lt;!&ndash;具体用法参考ElementUI Api用法&ndash;&gt;-->
<!--                            <el-form-item>-->
<!--                                <el-button type="primary" @click="handleRegister('registerForm')">登录</el-button>-->
<!--                                <el-button>重置密码</el-button>-->
<!--                            </el-form-item>-->
<!--                </el-form>-->
                <!--注册-->


            <div class="panels-container">
                <!--设计的时候先显示在相同的页面，点击注册与登录的时候通过隐藏class来实现切换-->
                <div class="panel left-panel">
                    <div class="content">
                        <h3>我是左边的panel</h3>
                        <p>我是左边的panel</p>
                        <button class="btn transparent" @click="signUPMode=!signUPMode">注册</button>
                    </div>
                    <img src="@/assets/img/log.svg" class="image">
                </div>

                <div class="panel right-panel">
                    <div class="content">
                        <h3>我是右边的panel</h3>
                        <p>我是右边的panel</p>

                        <button class="btn transparent" @click="signUPMode=!signUPMode">登录</button>
                    </div>
                    <img src="@/assets/img/register.svg" class="image">
                </div>
            </div>

    </div>
</template>

<script lang="ts">
    import {ref, getCurrentInstance} from 'vue'
    import {loginUser,registerUser, rules} from "../utils/loginValidator";
    import LoginForm from '@/components/LoginForm.vue'
    import RegisterForm from "@/components/RegisterForm.vue";

    export default {
        name: "LoginRegister"
        ,
        components: {RegisterForm, LoginForm},
        setup() {
            // 主要设计思路：先设计前端表单绑定的数据类型 ，在通过v-model 与字段进行绑定
            //注册表单
            // const registerUser = ref({
            //     name: "",
            //     email: "",
            //     password: "",
            //     password2: "", //密码确认
            //     role: "" //权限管理 选择身份
            // })
            //该方法传入表单的名称然后进行操作
            // const handlerRegister = (formName:string) => {
            //
            // }

            //const signUPMode = ref<boolean>(false)
            const signUPMode = ref<boolean>(false)
            //登录组件的数据结构
            // const loginUser = ref({
            //     email: "",
            //     password: ""
            // })
            // const rules = ref({
            //     email: [
            //         {type:"email",message:"邮箱不正确",required:true, trigger: 'blur'}
            //     ],
            //     password: [
            //         {required:true, message:"密码不能为空", trigger: 'blur'},
            //         //定义的规则可多条
            //         {min:6,max:30,message: "密码长度异常"}
            //     ],
            // })
            // const signUPModeChange = () => {
            //     // if (signUPMode.value) {
            //     //     signUPMode.value = false
            //     // } else {
            //     //     signUPMode.value = true
            //     // }
            // }
            //处理提交动作
            //composition Api 需要返回
            //setup 的生命 周期早于实例生成 return 后ref类型的会和data方法和methods合并
            return {
                signUPMode,
                // signUPModeChange,
                loginUser,
                rules,
                registerUser
            }
        }
    }
</script>

<style scoped>

    .container {
        position: relative;
        width: 100%;
        background-color: #fff;
        min-height: 100vh;
        overflow: hidden;
    }

    .forms-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .signin-signup {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 75%;
        width: 44%;
        transition: 1s 0.7s ease-in-out;
        display: grid;
        grid-template-columns: 1fr;
        z-index: 5;
    }

    /* 左右切换动画 */
    .social-text {
        padding: 0.7rem 0;
        font-size: 1rem;
    }

    .social-media {
        display: flex;
        justify-content: center;
    }

    .social-icon {
        height: 46px;
        width: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.45rem;
        color: #333;
        border-radius: 50%;
        border: 1px solid #333;
        text-decoration: none;
        font-size: 1.1rem;
        transition: 0.3s;
    }

    .social-icon:hover {
        color: #4481eb;
        border-color: #4481eb;
    }

    .btn {
        width: 150px;
        background-color: #5995fd;
        border: none;
        outline: none;
        height: 49px;
        border-radius: 49px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        margin: 10px 0;
        cursor: pointer;
        transition: 0.5s;
    }

    .btn:hover {
        background-color: #4d84e2;
    }

    .panels-container {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .container:before {
        content: "";
        position: absolute;
        height: 2000px;
        width: 2000px;
        top: -10%;
        right: 48%;
        transform: translateY(-50%);
        background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
        transition: 1.8s ease-in-out;
        border-radius: 50%;
        z-index: 6;
    }

    .image {
        width: 100%;
        transition: transform 1.1s ease-in-out;
        transition-delay: 0.4s;
    }

    .panel {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
        text-align: center;
        z-index: 6;
    }

    .left-panel {
        pointer-events: all;
        padding: 3rem 17% 2rem 12%;
    }

    .right-panel {
        pointer-events: none;
        padding: 3rem 12% 2rem 17%;
    }

    .panel .content {
        color: #fff;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.6s;
    }

    .panel h3 {
        font-weight: 600;
        line-height: 1;
        font-size: 1.5rem;
    }

    .panel p {
        font-size: 0.95rem;
        padding: 0.7rem 0;
    }

    .btn.transparent {
        margin: 0;
        background: none;
        border: 2px solid #fff;
        width: 130px;
        height: 41px;
        font-weight: 600;
        font-size: 0.8rem;
    }

    .right-panel .image,
    .right-panel .content {
        transform: translateX(800px);
    }

    /* ANIMATION */

    .container.sign-up-mode:before {
        transform: translate(100%, -50%);
        right: 52%;
    }

    .container.sign-up-mode .left-panel .image,
    .container.sign-up-mode .left-panel .content {
        transform: translateX(-800px);
    }

    .container.sign-up-mode .signin-signup {
        left: 25%;
    }

    .container.sign-up-mode form.sign-up-form {
        opacity: 1;
        z-index: 2;
    }

    .container.sign-up-mode form.sign-in-form {
        opacity: 0;
        z-index: 1;
    }

    .container.sign-up-mode .right-panel .image,
    .container.sign-up-mode .right-panel .content {
        transform: translateX(0%);
    }

    .container.sign-up-mode .left-panel {
        pointer-events: none;
    }

    .container.sign-up-mode .right-panel {
        pointer-events: all;
    }

    @media (max-width: 870px) {
        .container {
            min-height: 800px;
            height: 100vh;
        }

        .signin-signup {
            width: 100%;
            top: 95%;
            transform: translate(-50%, -100%);
            transition: 1s 0.8s ease-in-out;
        }

        .signin-signup,
        .container.sign-up-mode .signin-signup {
            left: 50%;
        }

        .panels-container {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr 1fr;
        }

        .panel {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 2.5rem 8%;
            grid-column: 1 / 2;
        }

        .right-panel {
            grid-row: 3 / 4;
        }

        .left-panel {
            grid-row: 1 / 2;
        }

        .image {
            width: 200px;
            transition: transform 0.9s ease-in-out;
            transition-delay: 0.6s;
        }

        .panel .content {
            padding-right: 15%;
            transition: transform 0.9s ease-in-out;
            transition-delay: 0.8s;
        }

        .panel h3 {
            font-size: 1.2rem;
        }

        .panel p {
            font-size: 0.7rem;
            padding: 0.5rem 0;
        }

        .btn.transparent {
            width: 110px;
            height: 35px;
            font-size: 0.7rem;
        }

        .container:before {
            width: 1500px;
            height: 1500px;
            transform: translateX(-50%);
            left: 30%;
            bottom: 68%;
            right: initial;
            top: initial;
            transition: 2s ease-in-out;
        }

        .container.sign-up-mode:before {
            transform: translate(-50%, 100%);
            bottom: 32%;
            right: initial;
        }

        .container.sign-up-mode .left-panel .image,
        .container.sign-up-mode .left-panel .content {
            transform: translateY(-300px);
        }

        .container.sign-up-mode .right-panel .image,
        .container.sign-up-mode .right-panel .content {
            transform: translateY(0px);
        }

        .right-panel .image,
        .right-panel .content {
            transform: translateY(300px);
        }

        .container.sign-up-mode .signin-signup {
            top: 5%;
            transform: translate(-50%, 0);
        }
    }

    @media (max-width: 570px) {
        form {
            padding: 0 1.5rem;
        }

        .image {
            display: none;
        }

        .panel .content {
            padding: 0.5rem 1rem;
        }

        .container {
            padding: 1.5rem;
        }

        .container:before {
            bottom: 72%;
            left: 50%;
        }

        .container.sign-up-mode:before {
            bottom: 28%;
            left: 50%;
        }
    }

    /* 控制login & register显示 */
    form {
        padding: 0rem 5rem;
        transition: all 0.2s 0.7s;
        overflow: hidden;
    }

    form.sign-in-form {
        z-index: 2;
    }

    form.sign-up-form {
        opacity: 0;
        z-index: 1;
    }

    /* register */
    .registerForm {
        margin-top: 20px;
        background-color: #fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #cccc;
    }

    .submit_btn {
        width: 100%;
    }

</style>