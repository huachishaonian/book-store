<template>
    <div class="bookList">
        <i-card v-for="(item, index) in bookData" :key="index" class="book" @click.native="toDetail(item.bookid)">
            <i-row>
                <i-col span="8">
                    <img :src="require(`@/static/image/${item.avatar}`)" alt="图片加载失败" style="width: 100px;height:100px">
                </i-col>
                <i-col span="16" class="bookmsg">
                    <div class="name">
                        《{{ item.bookname }}》
                    </div>
                    <div class="price">
                        ¥{{ item.price }}
                    </div>
                    <div class="author">
                        作者:<span>{{ item.author }} </span>
                        出版时间:<span>{{ item.publicationtime }}</span>
                        浏览量:<span>{{ item.glance }}</span>
                    </div>
                </i-col>
            </i-row>
        </i-card>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import bookAPI from '@/bookList/api/api';
@Component({
    props: {
        bookName: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
    },
})

export default class BookList extends Vue {
    created() {
        this.getBookList();
    }
    bookData = []
    getBookList() {
        let data = new FormData();
        if (this.type === 'name') {
            data.append('bookName', this.bookName);
            bookAPI.bookList(data).then((res) => {
                this.bookData = res.data;
            }).catch();
        } else {
            data.append('typeId', this.bookName);
            bookAPI.bookListByType(data).then((res) => {
                this.bookData = res.data;
            }).catch();
        }
    }
    toDetail(id) {
        this.$router.push({ name: 'bookDetail', params: { bookId: id}});
    }
}
</script>
<style lang="scss" scoped>
.bookList{
    .book{
        height: 140px;
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
            .detail{
                margin-top: 4px;
                color: #333333;
            }
        }
    }
}
</style>
