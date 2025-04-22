<!-- 弹窗组件封装 -->
<template>
    <el-dialog :model-value="props.visible" :title="props.title" :width="props.width + 'px'" append-to-body
        :before-close="onClose">
        <!-- 弹窗内容插槽展示 -->
        <div :style="{ height: props.height + 'px' }">
            <slot name="dialog-content"></slot>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="danger" @click="onClose">取消</el-button>
                <el-button type="primary" @click="onConfirm">确定</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import type { TDialogProps } from '@/type/baseType';

// 接收父组件传递的 props 没有则使用默认值
const props = withDefaults(defineProps<TDialogProps>(), {
    title: '标题',
    visible: false,
    width: 630,
    height: 280,
})
// 注册事件
const emit = defineEmits(['onClose', 'onConfirm']);
const onClose = () => {
    emit('onClose');
}
const onConfirm = () => {
    emit('onConfirm');
}

</script>

<style scoped></style>