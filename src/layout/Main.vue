<template>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'LayoutMain'
};
</script>

<style lang="scss" scoped>
.main {
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    margin-top: -80px;
}
</style>
