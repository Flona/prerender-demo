<template>
    <footer cls-name="footer">
        &copy;xxxxx 2018-2019 版权所有
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.footer {
    text-align: center;
    color: $app-text-3-color;
    font-size: 12px;
    padding: $app-offset-large 0;
}
</style>
