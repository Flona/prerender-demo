<template>
    <div class="d-flex flex-column" cls-name="app">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LayoutApp',

    props: {
        clsMap: {
            type: Object
        }
    }
};
</script>

<style module lang="scss">
@import '~@/styles/variables';

.app {
    min-width: 100%;
    min-height: 100vh;
    background: #fff;
}
</style>
