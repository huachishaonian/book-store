<template>
    <div>
        <div style="font-size: 20px"><i>MyBooks</i> Back-stage Management</div>
        <div>
            <i-card v-for="(item, index) in bookData" :key="index">
            <i-row>
                <div style="font-size: 18px"> {{item.typeName}} </div>
                <div v-for="(items, index) in item.adminBookList" :key="index">
                    <i-col span="4">
                    <img :src="require(`@/static/image/${items.avatar}`)" alt="图片加载失败" style="width: 50px;height:50px">
                    <i-row> 
                         {{items.bookname}}
                    </i-row>
                    <i-row> 
                        ¥ {{items.price}}  ∑ {{items.quantity}}
                    </i-row>
                    <i-row> 
                         <Button type="dashed">删除</Button>   <Button type="dashed">编辑</Button>
                    </i-row>
                    </i-col>
                </div>
                <div> <Icon type="ios-add-circle-outline" style="font-size: 70px; padding-top: 20px"/> </div>
            </i-row>
        </i-card>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import bookAPI from '@/bookList/api/api';

@Component({

})

export default class Manage extends Vue {
    created() {
        this.getBookList();
    }
    bookData = []
    getBookList() {
        bookAPI.manageBook().then((res) => {
           this.bookData = res.data;
        }).catch();
    }
}
</script>
<style lang="scss" scoped>

</style>
