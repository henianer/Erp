import type { TUserData } from "@/type/baseType";
import { defineStore } from "pinia";

export const userStore = defineStore('userStore', {
    state: (): { userData: TUserData } => {
        return {
            userData: {
                userId: '',
                nickname: '',
                gender: 1,
                username: '',
                token: '',
                tokenType: '',
            }
        }
    },
    getters: {
        getUserData(state) {
            return state.userData;
        }
    },
    actions: {
        setUserData(data: TUserData) {
            this.userData = data;
        }
    },
    persist: {
        storage: sessionStorage, // 使用sessionStorage持久化
        pick: ['userData'], // 需要持久化的状态
    },
})