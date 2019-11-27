<template>
    <header class="header">头部</header>
</template>

<script>
export default {
    name: 'AppHeader'
};
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.header {
    line-height: 80px;
    font-size: 40px;
    color: $app-text-1-color;
    background: $app-grey-7-color;
}
</style>
