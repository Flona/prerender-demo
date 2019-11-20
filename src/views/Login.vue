<template>
    <div class="d-flex flex-column align-center justify-center" cls-name="page">
        <p class="color-danger mb-large">注意，此时用户是未登录状态，但路由是正常路由</p>

        <el-button @click="onLogin" type="primary">
            登录
        </el-button>
    </div>
</template>

<script>
import { login } from '../services/user';

export default {
    name: 'Login',

    methods: {
        async onLogin() {
            try {
                await login();
            } catch (err) {
                alert(err.message);
            }
        }
    }
};
</script>

<style module lang="scss">
@import '../styles/variables';

.page {
    width: $app-main-width;
    height: 700px;
    margin: auto;
    background: #fff;
    border-radius: 4px;
}
</style>
