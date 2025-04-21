import { defineStore } from "pinia";

export const menuStore = defineStore('menuStore', {
    state: () => {
        return {
            collapse: false, // 菜单侧边栏是否收起
        }
    },
    getters: {
        getCollapse(state) {
            return state.collapse;
        }
    },
    actions: {
        setCollapse(collapse: boolean) {
            this.collapse = collapse;
        }
    }
})