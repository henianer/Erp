<template>
    <div>
        <el-button type="primary" @click="addBtn">新增</el-button>
        <Dialog :title="dialogProps.title" :visible="dialogProps.visible" :width="dialogProps.width"
            :height="dialogProps.height" @on-close="onClose" @on-confirm="onConfirm">
            <template v-slot:dialog-content>
                <div>张三</div>
            </template>
        </Dialog>

    </div>
</template>

<script setup lang="ts">
import Dialog from "@/components/Dialog.vue";
import dialog from "@/hooks/dialog";
// 定义弹窗属性
const { dialogProps, onShow, onClose, onConfirm } = dialog('新增');
const addBtn = () => {
    onShow();
}
</script>

<style scoped></style>