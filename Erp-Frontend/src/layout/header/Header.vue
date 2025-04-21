<!-- 头部布局 -->
<template>
    <div class="header-container">
        <Collapse />
        <Breadcrumb />
    </div>
</template>

<script setup lang="ts">
import Collapse from './Collapse.vue';
import Breadcrumb from './Breadcrumb.vue';
</script>

<style scoped lang="scss">
.header-container {
    display: flex;
    align-items: center;
}
</style>