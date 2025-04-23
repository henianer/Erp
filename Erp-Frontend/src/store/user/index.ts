import { defineStore } from "pinia";

export const userStore = defineStore('userStore', {
    state: () => {
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
        setUserData(data: {
            userId: string;
            nickname: string;
            gender: number;
            username: string;
            token: string;
            tokenType: string;
        }) {
            this.userData = data;
        }
    },
    persist: {
        storage: sessionStorage, // 使用sessionStorage持久化
        pick: ['userData'], // 需要持久化的状态
    },
})