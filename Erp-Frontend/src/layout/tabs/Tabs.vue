<!-- 选项卡布局 -->
<template>
    <el-tabs v-model="activeTab" type="card" class="demo-tabs" @tab-remove="remove" @tab-click="click">
        <el-tab-pane v-for="item in tabsList" :key="item.path" :closable="item.closable" :label="item.title"
            :name="item.path">
            <!-- {{ item.title }} -->
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import { routerConfig } from '@/config/router';
import { tabsStore } from '@/store/tabs';
import type { TTab } from '@/type/baseType';
import type { TabsPaneContext } from 'element-plus';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// 引入路由
const router = useRouter();
const route = useRoute();
// 引入选项卡数据
const store = tabsStore();
const tabsList = computed(() => store.getTabsList);
// 默认第一项激活
const activeTab = ref('');
// 点击事件
const click = (pane: TabsPaneContext) => {
    const { props } = pane;
    // console.log('props', props);
    router.push({ path: props.name as string });
}
// 删除事件
const remove = (targetPath: string) => {
    const tabs = tabsList.value
    let activePath = activeTab.value
    if (activePath === targetPath) {
        tabs.forEach((tab, index) => {
            if (tab.path === targetPath) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activePath = nextTab.path
                }
            }
        })
    }
    // 设置激活的选项卡
    activeTab.value = activePath
    // 设置选项卡数据
    store.setTabsList(tabs.filter((tab) => tab.path !== targetPath))
    // 跳转路由
    router.push({ path: activePath })
}
// 添加选项卡 监听路由
const add = () => {
    const { path, meta } = route;
    // console.log('path', path);
    // console.log('meta', meta);
    const tab: TTab = {
        path,
        title: meta.title as string,
        closable: path === routerConfig.dashboard.path ? false : true,
    }
    store.addTab(tab);
}
// 监听路由改变
watch(
    () => route.path,
    () => {
        add();
        setActiveTab();
    }
)
// 设置激活的选项卡
const setActiveTab = () => {
    activeTab.value = route.path;
}
onMounted(
    () => {
        add();
        setActiveTab();
    }
)
</script>

<style scoped lang="scss">
:deep(.el-tabs__nav.is-top) {
    border-radius: 0;
}

:deep(.el-tabs__item.is-top) {
    border-bottom: 1px solid #e4e7ed !important;
    // border-bottom: none !important;
    // border-top: none !important;
}

:deep(.el-tabs__header) {
    // border-bottom: 1px solid #e4e7ed;
    border-bottom: none !important;
    // border-top: none !important;
}
</style>