<template>
    <div class="main">
        <div class="search">
            <i-input v-model="bookName" search enter-button placeholder="请输入要搜索的图书" @on-search="search" />
        </div>
        <i-row class="content">
            <i-col span="6">
                <span class="top">猜你喜欢</span>
                <i-row  v-for="item in favor" :key="item.bookid">
                    <i-tooltip>
                        <i-card style="cursor: pointer; margin-top: 0px; width: 200px; overflow: hidden;text-overflow:ellipsis;white-space:nowrap;font-size:6px" @click.native="toDetail(item.bookid)">{{ item.bookname }}</i-card>
                        <div slot="content">
                            <img :src="require(`@/static/image/${item.avatar}`)" />
                        </div>       
                    </i-tooltip>
                </i-row>
            </i-col>
            <i-col span="12" class="carousel">
                <i-row style="margin-bottom: 20px">
                    <i-col v-for="item in typeList" :key="item.typeid" span="4">
                        <span style="color: #2d8cf0; font-size:16px; cursor: pointer" @click="sreachByType(item.typeid)">{{ item.typename }}</span>
                    </i-col>
                </i-row>
                <i-carousel autoplay loop>
                    <i-carousel-item>
                        <div style="width:750px;height:315px;background-color:black;color:#fff">
                            <img src="@/static/pic/1.jpg" alt="加载失败">
                        </div>
                    </i-carousel-item>
                    <i-carousel-item>
                        <div style="width:750px;height:315px;background-color:black;color:#fff">
                            <img src="@/static/pic/2.jpg" alt="加载失败">
                        </div>
                    </i-carousel-item>
                    <i-carousel-item>
                        <div style="width:750px;height:315px;background-color:black;color:#fff">
                            <img src="@/static/pic/3.jpg" alt="加载失败">
                        </div>
                    </i-carousel-item>
                    <i-carousel-item>
                        <div style="width:750px;height:315px;background-color:black;color:#fff">
                            <img src="@/static/pic/4.jpg" alt="加载失败">
                        </div>
                    </i-carousel-item>
                </i-carousel>
                 <i-row style="margin-bottom: 20px">
                    <i-col style=" margin-top: 60px;">
                        <span ><B>Copyright <i>MyBooks</i>  By Wym , All Rights Reserved<img src="@/static/pic/validate.gif" alt="加载失败">京ICP证 1504010321号 出版物经营许可证 , in 2019</B></span>
                    </i-col>
                </i-row>
            </i-col>
            <i-col span="6">
                <span class="top">图书榜单</span>
                <i-row  v-for="item in topList" :key="item.bookid">
                    <i-tooltip>
                        <i-card style="font-size:6px;cursor: pointer; width: 200px;  overflow: hidden;text-overflow:ellipsis;white-space:nowrap;" @click.native="toDetail(item.bookid)">{{ item.bookname }}</i-card>
                        <div slot="content">
                            <img :src="require(`@/static/image/${item.avatar}`)" />
                        </div>       
                    </i-tooltip>
                </i-row>
            </i-col>
        </i-row>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import mainAPI from '@/main/api/api';
@Component({
    computed: {
        isLogin() {
            return this.$store.state.username;
        }
    },
    watch: {
        isLogin(newVal, oldVal) {
            if (newVal === '') {
                this.getFavor();
                this.getTopList();
            }
        } ,
    },
})

export default class Main extends Vue {
    favor = []
    topList = []
    typeList = []
    bookName = ''
    created() {
        this.getFavor();
        this.getTopList();
        this.type();
    }
    getFavor() {
        let data = new FormData();
        if (this.$store.state.username !== '' && !this.$store.state.isRoot) {
            data.append('username', this.$store.state.username);
        }
        mainAPI.favor(data).then((res) => {
            this.favor = res.data;
        }).catch((err) => {
            this.$Message.error('数据错误');
        });
    }
    getTopList() {
        mainAPI.topList().then((res) => {
            this.topList = res.data;
        }).catch();
    }
    type() {
        mainAPI.type().then((res) => {
            this.typeList = res.data;
        }).catch();
    }
    search(value) {
        if (value === '') {
            this.$Message.warning('请输入搜索内容!');
            return;
        }
        this.$router.push({ name: 'bookList', params: { bookName: value, type: 'name' } });
    }
    sreachByType(value) {
        this.$router.push({ name: 'bookList', params: { bookName: value, type: 'type' } });
    }
    toDetail(id) {
        this.$router.push({ name: 'bookDetail', params: { bookId: id}});
    }
}
</script>
<style lang="scss" scoped>
.main{
    .search{
        width: 50%;
        margin-left: 25%;
        margin-top: 20px;
    }
    .hot{
        color: #646464;
        text-align: left;
        margin-top: 10px;
    }
    .content{
        margin-top: 40px;
    }
    .top{
        font-size: 18px;
        font-weight: 600;
    }
}
</style>
