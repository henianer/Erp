<!-- 左侧菜单布局 -->
<template>
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose" background-color="#304156" router unique-opened>
        <MenuLogo />
        <MenuItem :menuList />
    </el-menu>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import MenuItem from '@/layout/menu/MenuItem.vue';
import MenuLogo from '@/layout/menu/MenuLogo.vue';
import { useRoute } from 'vue-router';
import { menuStore } from '@/store/menu';
import { routerConfig } from '@/config/router';
// 定义菜单数据
let menuList = reactive([
    {
        path: routerConfig.dashboard.path,
        component: routerConfig.dashboard.component,
        name: routerConfig.dashboard.name,
        meta: {
            title: routerConfig.dashboard.title,
            icon: routerConfig.dashboard.icon,
            roles: routerConfig.dashboard.roles,
        },
    },
    {
        path: routerConfig.company.path,
        component: routerConfig.company.component,
        name: routerConfig.company.name,
        meta: {
            title: routerConfig.company.title,
            icon: routerConfig.company.icon,
            roles: routerConfig.company.roles,
        },
        children: [
            {
                path: routerConfig.companyList.path,
                name: routerConfig.companyList.name,
                meta: {
                    title: routerConfig.companyList.title,
                    icon: routerConfig.companyList.icon,
                    roles: routerConfig.companyList.roles,
                }
            }
        ]
    },
    {
        path: routerConfig.system.path,
        component: routerConfig.system.component,
        name: routerConfig.system.name,
        meta: {
            title: routerConfig.system.title,
            icon: routerConfig.system.icon,
            roles: routerConfig.system.roles,
        },
        children: [
            {
                path: routerConfig.userList.path,
                name: routerConfig.userList.name,
                meta: {
                    title: routerConfig.userList.title,
                    icon: routerConfig.userList.icon,
                    roles: routerConfig.userList.roles,
                }
            },
            {
                path: routerConfig.roleList.path,
                name: routerConfig.roleList.name,
                meta: {
                    title: routerConfig.roleList.title,
                    icon: routerConfig.roleList.icon,
                    roles: routerConfig.roleList.roles,
                }
            }
        ]
    }
]);
// 获取菜单收缩状态
const store = menuStore();
const isCollapse = computed(() => {
    return store.getCollapse;
})
// 当前激活的菜单
const route = useRoute()
const defaultActive = computed(() => {
    return route.path;
})
// 定义响应式数据 是否收起
// const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    border-right: none;
}

:deep(.el-sub-menu .el-sub-menu__title) {
    color: #f4f4f5 !important;
}

:deep(.el-menu .el-menu-item) {
    color: #bfcbd9;
}

/** 选中菜单文字颜色 */
:deep(.el-menu-item.is-active) {
    color: #409eff !important;
}

/** 当前打开的菜单的所有子菜单 */
:deep(.is-opened .el-menu-item) {
    background-color: #1f2d3d !important;
}

/** 鼠标在菜单上方的颜色 */
:deep(.el-menu-item:hover) {
    background-color: #001528 !important;
}
</style>