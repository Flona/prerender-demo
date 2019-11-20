<template>
    <div class="flex-shrink-0 flex-grow-1 d-flex" cls-name="main">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LayoutMain'
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.main {
    min-width: $app-main-width;
}
</style>
