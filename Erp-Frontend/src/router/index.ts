import { routerConfig } from "@/config/router";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: routerConfig.login.path,
        name: routerConfig.login.name,
        component: routerConfig.login.component,
    },
    {
        path: routerConfig.default.path,
        component: routerConfig.default.component,
        redirect: routerConfig.default.redirect,
        children: [
            {
                path: routerConfig.dashboard.path,
                name: routerConfig.dashboard.name,
                component: routerConfig.dashboard.component,
                meta: {
                    title: routerConfig.dashboard.title,
                    icon: routerConfig.dashboard.icon,
                }
            }
        ]
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
                path: routerConfig.userList.path,
                name: routerConfig.userList.name,
                component: routerConfig.userList.component,
                meta: {
                    title: routerConfig.userList.title,
                    icon: routerConfig.userList.icon,
                    roles: routerConfig.userList.roles,
                }
            },
            {
                path: routerConfig.roleList.path,
                name: routerConfig.roleList.name,
                component: routerConfig.roleList.component,
                meta: {
                    title: routerConfig.roleList.title,
                    icon: routerConfig.roleList.icon,
                    roles: routerConfig.roleList.roles,
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