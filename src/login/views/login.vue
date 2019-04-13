<template>
    <div class="login">
        <i-card>
            <i-tabs class="tab" type="card">
                <i-tab-pane label="登录">
                    <i-form ref="validate" :model="formValidate" :rules="rules" label-position="top" >
                        <i-form-item label="用户名" prop="name">
                            <i-input v-model="formValidate.name" />
                        </i-form-item>
                        <i-form-item label="密码" prop="password">
                            <i-input v-model="formValidate.password" type="password"  />
                        </i-form-item>
                        <i-form-item>
                            <i-button type="primary">登录</i-button>
                        </i-form-item>
                    </i-form>
                </i-tab-pane>
                <i-tab-pane label="注册">
                    <i-form ref="regvalidate" :model="regformValidate" :rules="regrules" label-position="top" >
                        <i-form-item>
                            <div>
                                <span style="color:red">*</span>头像
                            </div>
                            <i-upload>
                                <div style="width: 58px;height:58px;line-height: 58px;cursor: pointer;border: 1px dashed">
                                    <Icon type="ios-camera" size="20"></Icon>
                                </div>
                            </i-upload>
                        </i-form-item>
                        <i-form-item label="用户名" prop="name">
                            <i-input v-model="regformValidate.name" />
                        </i-form-item>
                        <i-form-item label="密码" prop="password">
                            <i-input v-model="regformValidate.password" type="password"  />
                        </i-form-item>
                        <i-form-item>
                            <i-button type="primary">注册</i-button>
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
@Component()

export default class Login extends Vue {
    formValidate = {
        name: '',
        password: '',
    }
    rules = {
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
    }
    regformValidate = {
        name: '',
        password: '',
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
