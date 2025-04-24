import { routerConfig } from "@/config/router";
import type { TTab, TTabState } from "@/type/baseType";
import { defineStore } from "pinia";

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
                if (tab.path === routerConfig.dashboard.path) {
                    this.tabsList.unshift(tab);
                }
                else this.tabsList.push(tab);
            }
        },
        // 覆盖选项卡
        setTabsList(tabsList: TTab[]) {
            // 将首页放在第一个
            const index = tabsList.findIndex((item) => item && item.path === routerConfig.dashboard.path);
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
