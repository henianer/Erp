<template>
    <template v-for="menu in menuList" :key="menu.path">
        <!-- 拥有下级菜单 -->
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
            <template #title>
                <el-icon>
                    <!-- 动态加载图标 -->
                    <component :is="menu.meta.icon"></component>
                </el-icon>
                <span>{{ menu.meta.title }}</span>
            </template>
            <!-- 生成下级 -->
            <MenuItem :menuList="menu.children" />
        </el-sub-menu>
        <!-- 没有下级菜单 -->
        <el-menu-item v-else :index="menu.path" style="color: #f4f4f5;">
            <el-icon>
                <component :is="menu.meta.icon"></component>
            </el-icon>
            <template #title>{{ menu.meta.title }}</template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
// 接受父组建传递的参数
defineProps(['menuList']);
</script>

<style scoped></style>