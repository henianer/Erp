<template>
    <el-main>
        <el-form :model="searchParam" :inline="true" size="default">
            <el-form-item>
                <el-input placeholder="请输入姓名" v-model="searchParam.nickname"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入电话" v-model="searchParam.phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button icon="Search" type="primary" round>搜索用户</el-button>
                <el-button icon="Close" type="danger" plain>重置搜索</el-button>
                <el-button icon="Plus" type="success" @click="addUser">新增用户</el-button>
            </el-form-item>
        </el-form>
        <!-- 弹窗 -->
        <Dialog :title="dialogProps.title" :visible="dialogProps.visible" :width="dialogProps.width"
            :height="dialogProps.height" @on-close="onClose" @on-confirm="onclickSubmit">
            <template v-slot:dialog-content>
                <el-form class="login-form" :model="addModel" ref="addForm" :rules="addRules" :inline="false"
                    size="default" label-width="60px">
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="0">
                            <el-form-item prop="username" label="账户:">
                                <el-input placeholder="请输入账户" v-model="addModel.username"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" :offset="0">
                            <el-form-item prop="nickname" label="姓名:">
                                <el-input placeholder="请输入姓名" v-model="addModel.nickname"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="0">
                            <el-form-item prop="phone" label="电话:">
                                <el-input placeholder="请输入电话" v-model="addModel.phone"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" :offset="0">
                            <el-form-item prop="gender" label="性别:">
                                <el-radio-group v-model="addModel.gender">
                                    <el-radio :value="1">男</el-radio>
                                    <el-radio :value="2">女</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="0">
                            <el-form-item prop="password" label="密码:">
                                <el-input type="password" show-password placeholder="请输入密码"
                                    v-model="addModel.password"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" :offset="0">
                            <el-form-item prop="confirmPassword" label="确认:">
                                <el-input type="password" show-password placeholder="请确认密码"
                                    v-model="addModel.confirmPassword"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="0">
                            <el-form-item prop="roles" label="角色:">
                                <el-input placeholder="开发中" disabled v-model="addModel.roles"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </template>
        </Dialog>
    </el-main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Dialog from '@/components/Dialog.vue';
import dialog from '@/hooks/dialog';
import { ElMessage, type FormInstance } from 'element-plus';
import type { TUserData } from '@/type/baseType';
import { createUser } from '@/user';
import { getUserList } from '@/user';

const { dialogProps, onShow, onClose } = dialog('新增用户', 640, 180);

// 表单属性
const addForm = ref<FormInstance>();
// 表单绑定对象
const addModel = reactive<TUserData>({
    username: '',
    nickname: '',
    phone: '',
    gender: 1,
    password: '',
    confirmPassword: '',
    roles: []
})

// 表单验证规则
const addRules = reactive({
    username: [{
        required: true,
        trigger: ['blur', 'change'],
        message: '不能为空',
    }],
    nickname: [{
        required: true,
        trigger: ['blur', 'change'],
        message: '不能为空',
    }],
    phone: [{
        required: true,
        trigger: ['blur', 'change'],
        message: '不能为空',
    }],
    password: [{
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
    // onClose();
    addForm.value?.validate(async (valid) => {
        if (valid) {
            if (addModel.password !== addModel.confirmPassword) {
                ElMessage.error('两次输入的密码不一致');
                return;
            } else {
                let res = await createUser({
                    username: addModel.username!,
                    name: addModel.nickname!,
                    phone: addModel.phone!,
                    password: addModel.password!,
                });
                if (res) {
                    if (typeof res.data === 'string') {
                        ElMessage.success(res.data);
                        addForm.value?.resetFields();
                        onClose();
                    } else {
                        ElMessage.error(res.message);
                    }
                }
            }
        }
    })
}

const userList = async () => {
    let res = await getUserList();
    console.log(res);
}

userList();

// 搜索栏绑定对象
const searchParam = reactive({
    phone: '',
    nickname: '',
    currentPage: 1,
    pageSize: 10,
})

const addUser = () => {
    onShow();
}

</script>

<style scoped></style>