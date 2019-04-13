<template>
    <div class="bookList">
        <div class="top-bar">
            hhh
        </div>
        <i-card v-for="(item, index) in bookData" :key="index" class="book">
            <i-row>
                <i-col span="6">
                    图片占位
                </i-col>
                <i-col span="18" class="bookmsg">
                    <div class="name">
                        《{{ item.name }}》
                    </div>
                    <div class="price">
                        ¥{{ item.price }}
                    </div>
                    <div class="author">
                        作者:<span>{{ item.author }} </span>
                        出版社:<span>{{ item.from }}</span>
                    </div>
                    <div class="detail">
                        {{ item.detail }}
                    </div>
                </i-col>
            </i-row>
        </i-card>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
@Component()

export default class BookList extends Vue {
    bookData = [
        {
            name: '计算机网络',
            price: '100',
            author: '王字鹏',
            from: '长江文艺出版社',
            detail: '书很牛逼很牛逼很牛逼很牛逼很牛逼很牛逼很牛逼很牛逼很牛逼很牛逼很牛逼很牛逼'
        }
    ]
}
</script>
<style lang="scss" scoped>
.bookList{
    .top-bar{
        height: 60px;
        background-color: #f9f9f9;
        line-height: 60px;
        color: #646464;
        font-size: 18px;
    }
    .book{
        height: 160px;
        width: 60%;
        margin-left: 20%;
        margin-top: 20px;
        .bookmsg{
            text-align: left;
            .name{
                color: #1a66b3;
                font-size: 18px;
            }
            .price{
                color: #ff2832;
                font-size: 16px;
                font-weight: 700;
            }
            .author{
                color: #333;
                span{
                    color: #1a66b3;
                }
            }
            .detail{
                margin-top: 4px;
                color: #333333;
            }
        }
    }
}
</style>
