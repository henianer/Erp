// 类型定义

/** 用户数据类型 */
export type TUserData = {
    avatar?: string; // 头像
    gender?: number, // 性别
    nickname?: string; // 昵称
    userId?: string; // 用户ID
    username?: string; // 用户名
    phone?: string; // 手机号
    token?: string; // token
    tokenType?: string; // token类型
    password?: string; // 密码
    confirmPassword?: string; // 确认密码
    roles?: string[]; // 角色
}

/** 选项卡数据类型 */
export type TTab = {
    title: string; // 选项卡标题
    path: string; // 路由路径
    closable: boolean; // 是否可关闭
}

/** 选项卡state数据类型 */
export type TTabState = {
    tabsList: TTab[]; // 选项卡列表
}

/** 弹窗数据类型 */
export type TDialogProps = {
    title?: string; // 弹窗标题
    visible: boolean; // 弹窗是否可见
    width?: number; // 弹窗宽度
    height?: number; // 弹窗高度
}