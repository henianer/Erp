<!-- 头部布局 -->
<template>
    <div class="header-container">
        <div class="header-left">
            <Collapse />
            <Breadcrumb />
        </div>
        <div class="header-right">
            <span class="header-nickname" style="padding-right: 10px;">{{ nickname }}</span>
            <UserInfo />
        </div>
    </div>
</template>

<script setup lang="ts">
import Collapse from './Collapse.vue';
import Breadcrumb from './Breadcrumb.vue';
import UserInfo from './UserInfo.vue';
import { userStore } from '@/store/user';
import { computed } from 'vue';
const store = userStore();
const nickname = computed(() => {
    return store.getUserData.nickname;
})
</script>

<style scoped lang="scss">
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .header-left {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-right {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-nickname {
        color: #fff;
        font-size: 12px;
    }
}
</style>