<template>
    <div class="order">
        <div class="order-title">
            已完成订单
        </div>
        <div class="search">
            <i-input v-model="orderId" suffix="ios-search" placeholder="请输入要搜索的订单号" style="width:360px" @on-enter="searchOrder"/>
        </div>
        <div class="table" v-for="item in orderData" :key="item.orderId">
            <div class="table-title">
                <span>{{ item.orderDate }} </span>
                <span>{{ item.orderId }} </span>
                <div class="delete">
                    <i-button type="primary" @click="deleteOrder(item.orderId)">删除</i-button>
                </div>
            </div>
            <div>
                <i-table border ref="selection" :columns="columns" :data="item.orderDetailList">
                </i-table>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import bookAPI from '@/bookList/api/api';

@Component({
    computed: {
        isLogin() {
            return this.$store.state.username;
        }
    },
})
export default class Order extends Vue {
    orderData = []
    orderId = ''
    columns = [
        {
            title: '图片',
            key: 'avatar',
            render: (h, params) => {
                return h('img', {
                    attrs: {
                        src: require(`@/static/image/${params.row.avatar}`),
                    },
                    style: {
                        width: '60px',
                    }
                });
            }
        },
        {
            title: '图书名称',
            key: 'bookName',
            tooltip: true
        },
        {
            title: '单价',
            key: 'price'
        },
        {
            title: '数量',
            key: 'quantity'
        },
        {
            title: '总价',
            key: 'amount'
        },
        {
            title: '操作',
            render: (h, params) => {
                return h('Button',{
                    props: {
                        type: 'primary',
                    },
                    on: {
                        click: ()=> {
                            this.commit(params.row.bookId);
                        }
                    }
                },'评论');
            }
        }
]
    created() {
        this.getOrder();
    }
    getOrder() {
        let data = new FormData();
        data.append('username', this.isLogin);
        bookAPI.getOrder(data).then((res) => {
            this.orderData = res.data;
        }).catch();
    }
    searchOrder() {
        let data = new FormData();
        data.append('orderId', this.orderId);
        bookAPI.searchOrder(data).then((res) => {
            this.orderData = res.data;
        }).catch();
    }
    deleteOrder(id) {
        let data = new FormData();
        data.append('orderId', id);
        bookAPI.deleteOrder(data).then((res) => {
            this.$Message.success('删除成功!');
            this.getOrder();
        }).catch((err) => {
            this.$Message.success('删除失败!');
        });
    }
    commit(value) {
        let content = ''
        this.$Modal.confirm({
            title: '请输入评论!',
            render: (h) => {
                return h('Input', {
                    props: {
                        value: '',
                    },
                    on: {
                        'on-change' (event) {
                            content = event.target.value;
                        }
                    }
                });
            },
            onOk: () => {
                if (content === '') {
                    this.$Message.warning('请输入评论!');
                    return;
                }
                let data = new FormData();
                data.append('bookId',value);
                data.append('content', content);
                data.append('username', this.isLogin);
                bookAPI.comBook(data).then((res) => {
                    this.$Message.success('评论成功!');
                }).catch((err) => {
                    this.$Message.error('评论失败!');
                });
            },
        });
    }
}
</script>
<style lang="scss" scoped>
.order{
    .order-title{
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .table{
        width: 80%;
        margin-left: 10%;
        margin-top: 10px;
        .table-title{
            text-align: left;
            span{
                font-size: 14px;
                font-weight: 500;
            }
            .delete{
                margin-left: 90%;
                margin-bottom: 4px;
            }
        }
    }
}
</style>
