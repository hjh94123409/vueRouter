<template>
    <div class="login">
        <el-card class="box-card">
            <el-form ref="form" :model="formInline" :rules="rules" class="demo-form-inline">
                <el-form-item label="账号" prop="user">
                    <el-input
                        v-model="formInline.user"
                        placeholder="请输入账号"
                    />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="formInline.password"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router'
import type { FormItemRule, FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { nanoid } from 'nanoid'

const router = useRouter()

type Form = {
    user: string
    password: string
}

type Rules = {
    [k in keyof Form]?: Array<FormItemRule>
}

const formInline = reactive<Form>({
    user: "",
    password: "",
});

const form = ref<FormInstance>()

const rules = reactive<Rules>({
    user: [
        {
            required: true,
            message: '请输入账号',
            type: 'string'
        }
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            type: 'string'
        }
    ]
})

const onSubmit = () => {
    form.value.validate((validate) => {
        console.log(validate)
        if (validate) { 
            router.push('/index')
            localStorage.setItem('routerToken', nanoid())
        } else {
            ElMessage.error('请输入完整')
        }
    })
    // 
};
</script>

<style lang="less" scoped>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
