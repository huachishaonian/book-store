<template>
    <div class="main">
        <div class="search">
            <i-input search enter-button placeholder="请输入要搜索的图书" />
            <div class="hot">
                <span>
                    热搜:
                </span>
                <span v-for="(item, index) in hot" :key="index">
                    {{ item }}
                </span>
            </div>
        </div>
        <i-row class="content">
            <i-col span="6">
                猜你喜欢
            </i-col>
            <i-col span="12" class="carousel">
                <i-carousel autoplay loop>
                    <i-carousel-item>
                        <div style="width:100%;height:400px;background-color:black;color:#fff">
                            图片展示1
                        </div>
                    </i-carousel-item>
                    <i-carousel-item>
                        <div style="width:100%;height:400px;background-color:black;color:#fff">
                            图片展示2
                        </div>
                    </i-carousel-item>
                    <i-carousel-item>
                        <div style="width:100%;height:400px;background-color:black;color:#fff">
                            图片展示3
                        </div>
                    </i-carousel-item>
                    <i-carousel-item>
                        <div style="width:100%;height:400px;background-color:black;color:#fff">
                            图片展示4
                        </div>
                    </i-carousel-item>
                </i-carousel>
            </i-col>
            <i-col span="6">
                排行榜
            </i-col>
        </i-row>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
@Component()

export default class Main extends Vue {
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
}
</style>
