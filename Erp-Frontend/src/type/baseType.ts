// 类型定义

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