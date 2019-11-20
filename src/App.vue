<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style lang="scss">
.app {
    display: flex;
    width: 100%;
    min-width: 1200px;
}
</style>
