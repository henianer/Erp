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
// 定义菜单数据
let menuList = reactive([
    {
        path: '/dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
        name: 'dashboard',
        meta: {
            title: '首页',
            icon: 'House',
            roles: ['system:dashboard']
        },
    },
    {
        path: '/company',
        component: 'Layout',
        name: 'company',
        meta: {
            title: '公司管理',
            icon: 'Star',
            roles: ['company:manage']
        },
        children: [
            {
                path: "/company/companyList",
                name: "companyList",
                meta: {
                    title: "公司列表",
                    icon: "Operation",
                    roles: ["company:companyList"],
                }
            }
        ]
    },
    {
        path: '/system',
        component: 'Layout',
        name: 'system',
        meta: {
            title: '系统管理',
            icon: 'Setting',
            roles: ['system:manage']
        },
        children: [
            {
                path: "/system/userList",
                name: "userList",
                meta: {
                    title: "用户列表",
                    icon: "User",
                    roles: ["system:userList"],
                }
            },
            {
                path: "/system/roleList",
                name: "roleList",
                meta: {
                    title: "角色列表",
                    icon: "CollectionTag",
                    roles: ["system:roleList"],
                }
            }
        ]
    }
])
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