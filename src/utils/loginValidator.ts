import {ref} from "vue";

//用typeScript 将js添加类型匹配
interface User {
    email: string;
    password: string;
}

interface ValidateRules {
    email: { type: string, message: string, required: boolean, trigger: string }[],
    password: ({ required: boolean, message: string, trigger: string, min?: undefined, max?: undefined } |
        { min: number, max: number, message: string, required?: undefined, trigger?: undefined })[]
}

export const loginUser = ref<User>({
    email: "",
    password: ""
})
//分离登录规则
export const rules = ref<ValidateRules>({
    email: [
        {type: "email", message: "邮箱不正确", required: true, trigger: 'blur'}
    ],
    password: [
        {required: true, message: "密码不能为空", trigger: 'blur'},
        //定义的规则可多条
        {min: 6, max: 30, message: "密码长度异常"}
    ],
})