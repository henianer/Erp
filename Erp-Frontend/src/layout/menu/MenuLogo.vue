<template>
    <div class="logo">
        <img :src="Logo" />
        <span v-show="!collapse" class="logo-title">{{ menuTitle }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Logo from '@/assets/Logo.jpg';
import { menuStore } from '@/store/menu';

const store = menuStore();
const collapse = computed(() => {
    return store.getCollapse;
});
const menuTitle = ref('HXH');
</script>

<style scoped lang="scss">
.logo {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #304156;
    text-align: center;
    cursor: pointer;
    align-items: center;

    img {
        width: 36px;
        height: 36px;
        margin-right: 6px;
        margin-left: 14px;
    }
}

.logo-title {
    color: #fff;
    font-size: 22px;
    font-weight: 800;
    line-height: 60px;
}
</style>