<!-- 页面总布局 -->
<template>
    <el-container class="home-container">
        <el-aside width="auto" class="left-menu">
            <MenuBar />
        </el-aside>
        <el-container>
            <el-header class="header">
                <Header />
            </el-header>
            <el-main class="main">
                <div class="tabs-container">
                    <Tabs class="tabs" />
                    <TabsClose />
                </div>
                <!-- 路由插槽 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Header from "@/layout/header/Header.vue";
import MenuBar from "@/layout/menu/MenuBar.vue";
import Tabs from "@/layout/tabs/Tabs.vue";
import TabsClose from "@/layout/tabs/TabsClose.vue";
</script>

<style scoped lang="scss">
.home-container {
    height: 100%;

    .left-menu {
        background-color: #304156;
    }

    .header {
        background-color: #3f9eff;
        display: flex;
        align-items: center;
    }

    .main {
        padding: 0px;

        .tabs-container {
            display: flex;
            justify-content: space-between;
            flex-grow: 1;
            border-bottom: 1px solid #e4e7ed;
            height: 44px;
            padding-right: 75px;

            .el-tabs {
                height: 40px;
                width: 100%;
            }

            .tabs {
                padding-top: 16.5px;
                padding-left: 2px;
                padding-right: 2px;
                height: 40px;
            }
        }
    }
}
</style>