<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            <img :src=Logo class="user-info-img" />
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="onChangePassword">修改密码</el-dropdown-item>
                <el-dropdown-item @click="onclickLoginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>

    <Dialog :title="dialogProps.title" :visible="dialogProps.visible" :width="dialogProps.width"
        :height="dialogProps.height" @on-close="onClose" @on-confirm="onclickSubmit">
        <template v-slot:dialog-content>
            <el-form class="login-form" :model="loginModel" ref="form" :rules="rules" :inline="false" size="large">
                <el-form-item prop="newPassword">
                    <el-input type="password" show-password placeholder="请输入新密码"
                        v-model="loginModel.newPassword"></el-input>
                </el-form-item>
                <el-form-item prop="confirmPassword">
                    <el-input type="password" show-password placeholder="请确认新密码"
                        v-model="loginModel.confirmPassword"></el-input>
                </el-form-item>
            </el-form>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import Logo from '@/assets/Logo.jpg';
import Dialog from "@/components/Dialog.vue";
import { routerConfig } from '@/config/router';
import dialog from "@/hooks/dialog";
import { changePassword } from '@/user';
import { ElMessage, type FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const { dialogProps, onShow, onClose } = dialog('修改密码', 200, 110);

const router = useRouter();

const onChangePassword = () => {
    loginModel.newPassword = '';
    loginModel.confirmPassword = '';
    onShow();
}

// 表单属性
const form = ref<FormInstance>();
// 表单绑定对象
const loginModel = reactive({
    newPassword: '',
    confirmPassword: '',
})

// 表单验证规则
const rules = reactive({
    newPassword: [{
        required: true,
        trigger: ['blur', 'change'],
        message: '不能为空',
    }],
    confirmPassword: [{
        required: true,
        trigger: ['blur', 'change'],
        message: '不能为空',
    }]
})

const onclickSubmit = () => {
    form.value?.validate(async (valid) => {
        if (valid) {
            if (loginModel.newPassword !== loginModel.confirmPassword) {
                ElMessage.error('两次输入的密码不一致');
                return;
            } else {
                let res = await changePassword({ password: loginModel.confirmPassword });
                if (res) {
                    ElMessage.success(res.data.message || res.data.msg);
                    // onClose();
                    sessionStorage.clear();
                    router.push({ path: routerConfig.login.path });
                }
            }
        }
    })
}

const onclickLoginOut = () => {
    // 信息确定
    ElMessage.success('退出登录成功');
    sessionStorage.clear();
    router.push({ path: routerConfig.login.path });
}

</script>

<style scoped lang="scss">
.user-info-img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    color: #fff;
}

.el-dropdown-link:focus-visible {
    outline: none !important;
}
</style>