<template>
    <div class="login-container">
        <el-form class="login-form" :model="loginModel" ref="form" :rules="rules" :inline="false" size="large">
            <el-form-item>
                <div class="login-title">系统登陆</div>
            </el-form-item>
            <el-form-item prop="username">
                <el-input placeholder="请输入账户" v-model="loginModel.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" show-password placeholder="请输入密码" v-model="loginModel.password"></el-input>
            </el-form-item>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-button class="login-btn" type="primary" @click="onSubmit">登陆</el-button>
                </el-col>
                <el-col :span="12">
                    <el-button class="login-btn" @click="onReset">重置</el-button>
                </el-col>
            </el-row>
        </el-form>

    </div>
</template>

<script setup lang="ts">
import { routerConfig } from '@/config/router';
import { userStore } from '@/store/user';
import { login } from '@/user';
import { ElMessage, type FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const store = userStore();
const router = useRouter();
// 表单属性
const form = ref<FormInstance>();
// 表单绑定对象
const loginModel = reactive({
    username: store.getUserData.username || '',
    password: '',
})
// 表单验证规则
const rules = reactive({
    username: [{
        required: true,
        trigger: ['blur', 'change'],
        message: '账户不能为空',
    }],
    password: [{
        required: true,
        trigger: ['blur', 'change'],
        message: '密码不能为空',
    }],
})
const onSubmit = () => {
    form.value?.validate(async (valid) => {
        if (valid) {
            let res = await login(loginModel);
            if (res) {
                let data = res.data;
                ElMessage.success(data.message || data.msg);
                store.setUserData({
                    userId: data.user.id,
                    username: data.user.username,
                    token: data.accessToken,
                    tokenType: data.tokenType,
                    gender: data.user.gender,
                    nickname: data.user.name
                });
                router.push({ path: routerConfig.home.path });
            }
        }
    })
}
const onReset = () => {
    ElMessage.info("未开发");
}
</script>

<style scoped lang="scss">
.login-container {
    height: 100%;
    background-color: #63a2ff;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-form {
        height: 260px;
        width: 300px;
        padding: 20px 35px;
        border-radius: 10px;
        background-color: #ffffff;

        .login-title {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #606266;
            width: 100%;
            font-size: 25px;
            font-weight: 600;
        }

        .login-btn {
            width: 100%;
        }
    }
}
</style>