<template>
    <div class="home">
        <div class="topbar">
            <i-row>
                <i-col span="4">
                    <i v-on:click="resMain">MyBooks</i>
                </i-col>
                <i-col span="8" offset="12">
                    <i-button v-if="isLogin === ''" @click="login">登录</i-button>
                    <i-dropdown v-else>
                        <a href="javascript:void(0)">
                            <span style="color: #ffffff">{{ isLogin }}</span>
                            <i-icon type="ios-arrow-down"></i-icon>
                        </a>
                    <i-dropdown-menu slot="list">
                        <i-dropdown-item v-if="!isRoot" @click.native="jump('cart')">
                            购物车
                        </i-dropdown-item>
                        <i-dropdown-item v-if="!isRoot" @click.native="jump('order')">
                            我的订单
                        </i-dropdown-item> 
                        <i-dropdown-item v-if="isRoot" @click.native="jump('manage')">
                            图书管理
                        </i-dropdown-item> 
                        <i-dropdown-item @click.native="logOut">
                            退出
                        </i-dropdown-item> 
                    </i-dropdown-menu>
                    </i-dropdown>
                </i-col>
            </i-row>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import loginAPI from '@/login/api/api';
@Component({
    computed: {
        isLogin() {
            return this.$store.state.username;
        },
        isRoot() {
            return this.$store.state.isRoot;
        }
    }
})

export default class Home extends Vue {
    login() {
        this.$router.push({ name: 'login' });
    }
    logOut() {
        loginAPI.logOut().then(() => {
            this.$store.commit('clearUserName');
        }).then(() => {
            this.$Message.success('退出成功!');
        }).catch(() => {
            this.$Message.error('退出失败!');
        });
    }
    jump(value) {
        this.$router.push({ name: value });
    }
    resMain() {
         this.$router.push({ name: 'main' });
    }
}
</script>
<style lang="scss" scoped>
.home{
    .topbar{
        height: 40px;
        background-color: grey;
        line-height: 40px;
        color: white;
        font-size: 14px;
    }
}
</style>
