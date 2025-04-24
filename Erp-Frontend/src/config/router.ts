import Layout from "@/layout/Index.vue";

/** 路由配置 */
export const routerConfig = {
    // 默认路由
    default: {
        path: "/",
        title: "默认",
        // component: Layout,
        redirect: "/login",
    },
    // 登陆页面
    login: {
        path: "/login",
        title: "登陆",
        component: () => import("@/views/login/Login.vue"),
        name: "login",
    },
    // 主页
    home: {
        path: "/home",
        title: "主页",
        component: Layout,
        redirect: "/dashboard",
    },
    // dashboard
    dashboard: {
        path: "/dashboard",
        component: () => import("@/views/dashboard/Index.vue"),
        title: "首页",
        icon: "House",
        name: "dashboard",
        roles: ["dashboard"],
    },
    // 公司管理
    company: {
        path: "/company",
        component: Layout,
        title: "公司管理",
        icon: "House",
        name: "company",
        redirect: "/company/companyList",
        roles: ["company:manage"],
    },
    companyList: {
        path: "/company/companyList",
        component: () => import("@/views/company/CompanyList.vue"),
        title: "公司列表",
        icon: "House",
        name: "companyList",
        roles: ["company:companyList"],
    },
    // 系统管理
    system: {
        path: "/system",
        component: Layout,
        title: "系统管理",
        icon: "Setting",
        name: "system",
        redirect: "/system/userManage",
        roles: ["system:manage"],
    },
    userManage: {
        path: "/system/userManage",
        component: () => import("@/views/system/user/UserManage.vue"),
        title: "用户管理",
        icon: "User",
        name: "userManage",
        roles: ["system:userManage"],
    },
    roleManage: {
        path: "/system/roleManage",
        component: () => import("@/views/system/role/RoleManage.vue"),
        title: "角色管理",
        icon: "User",
        name: "roleManage",
        roles: ["system:roleManage"],
    },
}