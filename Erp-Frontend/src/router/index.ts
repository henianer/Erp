import { routerConfig } from "@/config/router";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: routerConfig.login.path,
        name: routerConfig.login.name,
        component: routerConfig.login.component,
    },
    {
        path: routerConfig.home.path,
        component: routerConfig.home.component,
        redirect: routerConfig.home.redirect,
        children: [
            {
                path: routerConfig.dashboard.path,
                name: routerConfig.dashboard.name,
                component: routerConfig.dashboard.component,
                meta: {
                    title: routerConfig.dashboard.title,
                    icon: routerConfig.dashboard.icon,
                }
            },
        ]
    },
    {
        path: routerConfig.default.path,
        // component: routerConfig.default.component,
        redirect: routerConfig.default.redirect,
        children: []
    },
    {
        path: routerConfig.system.path,
        component: routerConfig.system.component,
        redirect: routerConfig.system.redirect,
        name: routerConfig.system.name,
        meta: {
            title: routerConfig.system.title,
            icon: routerConfig.system.icon,
            roles: routerConfig.system.roles,
        },
        children: [
            {
                path: routerConfig.userManage.path,
                name: routerConfig.userManage.name,
                component: routerConfig.userManage.component,
                meta: {
                    title: routerConfig.userManage.title,
                    icon: routerConfig.userManage.icon,
                    roles: routerConfig.userManage.roles,
                }
            },
            {
                path: routerConfig.roleManage.path,
                name: routerConfig.roleManage.name,
                component: routerConfig.roleManage.component,
                meta: {
                    title: routerConfig.roleManage.title,
                    icon: routerConfig.roleManage.icon,
                    roles: routerConfig.roleManage.roles,
                }
            }
        ]
    },
    {
        path: routerConfig.company.path,
        component: routerConfig.company.component,
        name: routerConfig.company.name,
        redirect: routerConfig.company.redirect,
        meta: {
            title: routerConfig.company.title,
            icon: routerConfig.company.icon,
            roles: routerConfig.company.roles,
        },
        children: [
            {
                path: routerConfig.companyList.path,
                name: routerConfig.companyList.name,
                component: routerConfig.companyList.component,
                meta: {
                    title: routerConfig.companyList.title,
                    icon: routerConfig.companyList.icon,
                    roles: routerConfig.companyList.roles,
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