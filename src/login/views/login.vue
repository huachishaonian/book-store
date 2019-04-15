<template>
    <div class="login">
        <i-card>
            <i-tabs class="tab" type="card">
                <i-tab-pane label="登录">
                    <i-form ref="validate" :model="formValidate" :rules="rules" label-position="top" >
                        <i-form-item label="用户名" prop="username">
                            <i-input v-model="formValidate.username" />
                        </i-form-item>
                        <i-form-item label="密码" prop="password">
                            <i-input v-model="formValidate.password" type="password"  />
                        </i-form-item>
                        <i-form-item>
                            <i-button type="primary" @click="login('validate')">登录</i-button>
                        </i-form-item>
                    </i-form>
                </i-tab-pane>
                <i-tab-pane label="注册">
                    <i-form ref="regvalidate" :model="regformValidate" :rules="regrules" label-position="top" >
                        <i-form-item>
                            <div>
                                <span style="color:red">*</span>头像
                            </div>
                            <i-upload :before-upload="beforeUpload" action="''">
                                <div style="width: 58px;height:58px;line-height: 58px;cursor: pointer;border: 1px dashed">
                                    <Icon type="ios-camera" size="20"></Icon>
                                </div>
                            </i-upload>
                            <i-tag v-if="uploadFile.name" color="blue" closable @on-close="deleteFile">
                                {{ uploadFile.name }}
                            </i-tag>
                        </i-form-item>
                        <i-form-item label="用户名" prop="name">
                            <i-input v-model="regformValidate.name" />
                        </i-form-item>
                        <i-form-item label="密码" prop="password">
                            <i-input v-model="regformValidate.password" type="password"  />
                        </i-form-item>
                        <i-form-item label="喜爱" prop="favor">
                            <i-select v-model="regformValidate.favor" placeholder="请选择您喜爱的图书类别">
                                <i-option value="计算机类">计算机类</i-option>
                                <i-option value="教育类">教育类</i-option>
                                <i-option value="医疗类">医疗类</i-option>
                                <i-option value="儿童类">儿童类</i-option>
                                <i-option value="生活类">生活类</i-option>
                                <i-option value="小说类">小说类</i-option>
                            </i-select>
                        </i-form-item>
                        <i-form-item>
                            <i-button type="primary" @click="register('regvalidate')">注册</i-button>
                        </i-form-item>
                    </i-form>
                </i-tab-pane>
            </i-tabs>
        </i-card>
    </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import loginAPI from '@/login/api/api';
@Component()

export default class Login extends Vue {
    uploadFile = {}
    formValidate = {
        username: '',
        password: '',
    }
    rules = {
        username: [
            {
                required: true,
                trigger: 'blur',
                message: '请输入用户名'
            },
        ],
        password: [
            {
                required: true,
                trigger: 'blur',
                message: '请输入密码'
            },
        ],
    }
    regformValidate = {
        name: '',
        password: '',
        favor: '',
    }
    regrules = {
        name: [
            {
                required: true,
                trigger: 'blur',
                message: '请输入用户名'
            },
        ],
        password: [
            {
                required: true,
                trigger: 'blur',
                message: '请输入密码'
            },
        ],
        favor: [
            {
                required: true,
                trigger: 'blur',
                message: '请选择喜爱的图书类别!'
            },
        ],
    }
    login(name) {
        let data = new FormData();
        data.append('username', this.formValidate.username);
        data.append('password', this.formValidate.password);
        this.$refs[name].validate((valid) => {
            if (valid) {
                loginAPI.login(data).then((res) => {
                    this.$Message.success('登录成功!');
                    this.$store.commit('setUserName', res.data.username);
                    this.$store.commit('setisRoot', res.data.isRoot);
                    this.$router.push({ name: 'main' });
                }).catch((err) => {
                    this.$Message.error('登录失败!');
                });
            } else {
                this.$Message.error('请输入用户名和密码!');
            }
        });
    }
    register(name) {
        let data = new FormData();
        data.append('username', this.regformValidate.name);
        data.append('password', this.regformValidate.password);
        data.append('favor', this.regformValidate.favor);
        data.append('file', this.uploadFile);
        this.$refs[name].validate((valid) => {
            if (valid && this.uploadFile.name) {
                loginAPI.register(data).then((res) => {
                    this.$Message.success('注册成功，请登录!');
                }).catch((err) => {
                    this.$Message.error('注册失败!');
                });
            } else {
                this.$Message.error('请输入用户名和密码!');
            }
        });
    }
    beforeUpload(file) {
        this.uploadFile = file;
        return false;
    }
    deleteFile() {
        this.uploadFile = {};
    }
}
</script>
<style lang="scss" scoped>
.login{
    width: 40%;
    margin-left: 30%;
    margin-top: 40px;
    .tab{
        width: 60%;
        margin-left: 20%;
        margin-top: 120px;
    }
}
</style>
