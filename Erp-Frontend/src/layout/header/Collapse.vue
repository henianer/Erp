<template>
    <el-icon color="#FFF" size="30" style="cursor: pointer;" @click="click">
        <component :is="collapse ? Expand : Fold"></component>
    </el-icon>
</template>

<script setup lang="ts">
import { menuStore } from '@/store/menu';
import { computed } from 'vue';
import { Fold, Expand } from '@element-plus/icons-vue';
// 获取菜单收缩状态
const store = menuStore();
const collapse = computed(() => {
    return store.getCollapse;
})
// 鼠标点击
const click = () => {
    store.setCollapse(!store.getCollapse);
}
</script>

<style scoped></style>