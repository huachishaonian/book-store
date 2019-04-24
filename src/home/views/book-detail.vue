<template>
    <div class="book-detail">
        <i-card class="book">
            <i-row>
                <i-col span="8">
                    <img :src="require(`@/static/image/${bookData.avatar}`)" alt="图片加载失败" style="width: 180px;height:180px">
                </i-col>
                <i-col span="16" class="bookmsg">
                    <div class="name">
                        《{{ bookData.bookname }}》
                    </div>
                    <div class="price">
                        ¥{{ bookData.price }}
                    </div>
                    <div class="author">
                        作者:<span>{{ bookData.author }} </span>
                        出版时间:<span>{{ bookData.publicationtime }}</span>
                        浏览量:<span>{{ bookData.glance }}</span>
                    </div>
                    <div class="descri">
                        描述:<span>{{ bookData.descri }}</span>
                    </div>
                    <div class="cart">
                        <i-badge :count="count">
                            <i-button @click="joinCart">
                                加入购物车
                                <i-icon type="md-cart"></i-icon>
                            </i-button>
                        </i-badge>
                    </div>
                </i-col>
            </i-row>
        </i-card>
        <i-card v-for="(item, index) in bookData.commentList" :key="index" class="commit">
            <i-row>
                <i-col span="6">
                    <img :src="require(`@/static/image/${item.user.avatar}`)" alt="..." style="width: 50px; height:50px">
                    <div>{{ item.user.username}}</div>
                </i-col>
                <i-col span="18">
                    <div>{{ item.content }}</div>
                </i-col>
            </i-row>
        </i-card>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import detailAPI from '@/bookList/api/api';

@Component({
    props: {
        bookId: {
            type: String,
            default: ''
        },
    },
    computed: {
        isLogin() {
            return this.$store.state.username;
        }
    },
})
export default class BookDetail extends Vue {
    count = 0
    bookData = {}
    created() {
        this.getDetail();
    }
    getDetail() {
        let data = new FormData();
        data.append('bookId', this.bookId);
        detailAPI.getBookDetail(data).then((res) => {
            this.bookData = res.data;
        }).catch();
    }
    joinCart() {
        if (this.isLogin === '') {
            this.$Message.warning('请登录!');
            return;
        }
        if (this.count > this.bookData.quantity) {
            this.$Message.warning('库存不足!');
            return;
        }
        let data = new FormData();
        data.append('username', this.isLogin);
        data.append('bookId', this.bookId);
        detailAPI.addCart(data).then((res) => {
            this.$Message.success('加入购物车成功!');
            this.count += 1;
        }).catch((err) => {
            this.$Message.error('加入购物车失败!');
        });
    }
}
</script>
<style lang="scss" scoped>
.book-detail{
    .commit{
        margin-bottom: 10px;
        width: 60%;
        margin-left: 20%;
    }
    .book{
        width: 60%;
        margin-left: 20%;
        margin-top: 20px;
        cursor: pointer;
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
            .descri{
                margin-top: 4px;
                span{
                    color: #1a66b3;
                }
            }
            .cart{
                margin-left: 80%;
            }
        }
    }
}
</style>
