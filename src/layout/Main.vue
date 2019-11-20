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
    width: 100%;
    overflow: hidden;
    margin-top: -80px;
}
</style>
