<template>
    <div class="home">
        <div class="topbar">
            <i-row>
                <i-col span="4">
                    吴云明的书店
                </i-col>
                <i-col span="8" offset="12">
                    <i-button @click="login">登录</i-button>
                </i-col>
            </i-row>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
@Component()

export default class Home extends Vue {
    hot = [ '计算机', '幼儿', '杂志', '生活'];
    login() {
        this.$router.push({ name: 'login' });
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
