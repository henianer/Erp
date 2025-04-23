import Layout from "@/layout/Index.vue";

/** 路由配置 */
export const routerConfig = {
    // 默认路由
    default: {
        path: "/",
        title: "默认",
        component: Layout,
        redirect: "/dashboard",
    },
    // 登陆页面
    login: {
        path: "/login",
        title: "登陆",
        component: () => import("@/views/login/Login.vue"),
        name: "login",
    },
    // 主页
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
        redirect: "/system/userList",
        roles: ["system:manage"],
    },
    userList: {
        path: "/system/userList",
        component: () => import("@/views/system/user/UserList.vue"),
        title: "用户列表",
        icon: "User",
        name: "userList",
        roles: ["system:userList"],
    },
    roleList: {
        path: "/system/roleList",
        component: () => import("@/views/system/role/RoleList.vue"),
        title: "角色列表",
        icon: "User",
        name: "roleList",
        roles: ["system:roleList"],
    },
}