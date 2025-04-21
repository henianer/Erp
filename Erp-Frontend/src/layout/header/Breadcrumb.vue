<template>
    <el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in tabs">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { useRoute, type RouteLocationMatched } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';
const route = useRoute();
// 定义面包屑导航数据
const tabs: Ref<RouteLocationMatched[]> = ref([]);
// 获取面包屑数据
const getBreadcrumb = () => {
    let matched = route.matched.filter(item => item.meta && item.meta.title);
    // console.log('matched', matched);
    const first = matched[0];
    // 判断第一个是不是首页,不是的话拼接一个首页
    if (first.path !== '/dashboard') {
        matched = [{ path: '/dashboard', meta: { title: '首页' } } as any, ...matched];
    }
    tabs.value = matched;
}
getBreadcrumb();

// 监听路由变化
watch(
    () => route.path,
    () => getBreadcrumb()
);

</script>

<style scoped lang="scss">
.breadcrumb {
    margin-left: 20px;
}

// 字体颜色
:deep(.el-breadcrumb__inner) {
    color: #fff !important;
}

// 字体颜色
:deep(.el-breadcrumb__inner a) {
    color: #fff !important;
}

// 字体大小
:deep(.el-breadcrumb__item) {
    font-size: 14px !important;
}

// 分隔符颜色
:deep(.el-breadcrumb__separator) {
    color: #fff !important;
}
</style>