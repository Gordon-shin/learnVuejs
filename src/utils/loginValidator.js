import { ref } from "vue";
export const loginUser = ref({
    email: "",
    password: ""
});
//分离登录规则
export const rules = ref({
    email: [
        { type: "email", message: "邮箱不正确", required: true, trigger: 'blur' }
    ],
    password: [
        { required: true, message: "密码不能为空", trigger: 'blur' },
        //定义的规则可多条
        { min: 6, max: 30, message: "密码长度异常" }
    ],
});
//# sourceMappingURL=loginValidator.js.map