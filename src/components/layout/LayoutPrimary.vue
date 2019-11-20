<template>
    <div class="flex-grow-1 d-flex flex-column" cls-name="primary">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LayoutPrimary'
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.primary {
    padding-left: $app-offset-small;
    padding-right: $app-offset-small;

    &:not(:first-child) {
        padding-top: $app-offset-small;
    }

    &:not(:last-child) {
        padding-bottom: $app-offset-small;
    }
}
</style>
