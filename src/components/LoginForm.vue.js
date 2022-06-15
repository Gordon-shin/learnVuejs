import { getCurrentInstance } from "vue";
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
        const { ctx } = getCurrentInstance();
        //该组件固定写法
        const handleLogin = (formName) => {
            //composition Api 无法指向当前实例，可以导入getCurrentInstance模块，然后再结构获取ctx对象
            console.log(ctx);
            ctx.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                }
                else {
                    console.log('error submit!!');
                    return false;
                }
            });
            //入参为表单名
            console.log(formName);
        };
        return {
            handleLogin
        };
    }
};
//# sourceMappingURL=LoginForm.vue.js.map