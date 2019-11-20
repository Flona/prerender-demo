<template>
    <header class="header d-flex align-center">{{ $route.name }}</header>
</template>

<script>
export default {
    name: 'AppHeader'
};
</script>

<style scoped lang="scss">
@import '../../styles/variables';

.header {
    font-size: 20px;
    color: $app-text-1-color;
    padding: $app-offset-small;
}
</style>
