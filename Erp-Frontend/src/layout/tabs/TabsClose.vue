<template>
    <div class="tabs-close">
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-icon class="el-icon--right">
                    <Close />
                </el-icon>
                选项
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="closeCurrent">关闭当前</el-dropdown-item>
                    <el-dropdown-item @click="closeLeft">关闭左侧</el-dropdown-item>
                    <el-dropdown-item @click="closeRight">关闭右侧</el-dropdown-item>
                    <el-dropdown-item @click="closeAll">关闭全部</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import { routerConfig } from '@/config/router';
import { tabsStore } from '@/store/tabs';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const tabStore = tabsStore();

const closeCurrent = () => {
    const tabs = tabStore.getTabsList;
    let targetPath = route.path;
    if (targetPath === routerConfig.dashboard.path) return;
    let activePath = route.path;
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
    // 设置选项卡数据
    tabStore.setTabsList(tabs.filter((tab) => tab.path !== targetPath))
    // 跳转路由
    router.push({ path: activePath })
}

const closeRight = () => {
    const activePath = route.path;
    const index = tabStore.getTabsList.findIndex(tab => tab && tab.path === activePath);
    const tabs = tabStore.getTabsList;
    if (index >= 0 && index < tabs.length - 1) {
        const newTabs = tabs.slice(0, index + 1);
        tabStore.setTabsList(newTabs);
    }
}

const closeLeft = () => {
    const activePath = route.path;
    const index = tabStore.getTabsList.findIndex(tab => tab && tab.path === activePath);
    const tabs = tabStore.getTabsList;
    if (index > 0) {
        const newTabs = [tabs[0]].concat(tabs.slice(index));
        tabStore.setTabsList(newTabs);
    }
}

const closeAll = () => {
    const newTabs = tabStore.getTabsList.slice(0, 1);
    tabStore.setTabsList(newTabs);
    const activePath = tabStore.getTabsList[0].path;
    router.push({ path: activePath });
}

</script>

<style scoped lang="scss">
.el-dropdown-link {
    cursor: pointer;
    // color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.tabs-close {
    display: flex;
    align-items: center;
    // justify-content: center;
    width: 60px;
    height: 42px;
    z-index: 100;
    position: fixed;
    right: 0;
    border-left: 1px solid #e4e7ed;
    padding-left: 10px;
    padding-top: 2px;
}

.el-dropdown-link:focus-visible {
    outline: none !important;
}
</style>