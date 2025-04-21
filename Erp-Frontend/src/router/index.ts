import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Layout from "@/layout/Index.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component: () => import("@/views/dashboard/Index.vue"),
                meta: {
                    title: "首页",
                    icon: "#iconDashboard",
                }
            }
        ]
    },
    {
        path: "/system",
        component: Layout,
        name: "system",
        meta: {
            title: "系统管理",
            icon: "Setting",
            roles: ["system:manage"],
        },
        children: [
            {
                path: "/system/userList",
                name: "userList",
                component: () => import("@/views/system/user/UserList.vue"),
                meta: {
                    title: "用户列表",
                    icon: "User",
                    roles: ["system:userList"],
                }
            },
            {
                path: "/system/roleList",
                name: "roleList",
                component: () => import("@/views/system/role/RoleList.vue"),
                meta: {
                    title: "角色列表",
                    icon: "User",
                    roles: ["system:roleList"],
                }
            }
        ]
    },
    {
        path: "/company",
        component: Layout,
        name: "company",
        meta: {
            title: "公司管理",
            icon: "House",
            roles: ["company:manage"],
        },
        children: [
            {
                path: "/company/companyList",
                name: "companyList",
                component: () => import("@/views/company/CompanyList.vue"),
                meta: {
                    title: "公司列表",
                    icon: "House",
                    roles: ["company:companyList"],
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router