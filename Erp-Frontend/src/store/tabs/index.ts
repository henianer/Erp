import { defineStore } from "pinia";

// 定义选项卡数据类型 名称和路由
export type TTab = {
    title: string;
    path: string;
    closable: boolean; // 是否可关闭
}
// 定义State数据类型
export type TTabState = {
    tabsList: TTab[];
}

export const tabsStore = defineStore('tabsStore', {
    state: (): TTabState => {
        return {
            tabsList: []
        }
    },
    getters: {
        getTabsList(state) {
            return state.tabsList;
        },
    },
    actions: {
        // 添加选项卡
        addTab(tab: TTab) {
            const isExist = this.tabsList.some(item => item && item.path === tab.path);
            if (!isExist) {
                if (tab.path === '/dashboard') {
                    this.tabsList.unshift(tab);
                }
                else this.tabsList.push(tab);
            }
        },
        // 覆盖选项卡
        setTabsList(tabsList: TTab[]) {
            // 将首页放在第一个
            const index = tabsList.findIndex((item) => item && item.path === '/dashboard');
            if (index >= 0) {
                [tabsList[0], tabsList[index]] = [tabsList[index], tabsList[0]];
            }
            this.tabsList = tabsList;
        }
    },
    persist: {
        storage: sessionStorage, // 使用sessionStorage持久化
        pick: ['tabsList'], // 需要持久化的状态
    },
})
