<template>
    <LayoutContainer>
        <div cls-name="section">
            <h2 cls-name="section__title">css 模块化</h2>
            <div cls-name="section__examples">
                <img src="../assets/usage/carbon-css-module.png" alt="css-module" />
            </div>
        </div>
    </LayoutContainer>
</template>

<script>
import LayoutContainer from '../components/layout/LayoutContainer';

export default {
    name: 'Usage',

    components: {
        LayoutContainer
    }
};
</script>

<style module lang="scss">
@import '../styles/variables';

.section {
    margin-bottom: $app-offset-base;
    background: #fff;

    &:last-child {
        margin-bottom: 0;
    }

    &__title {
        line-height: 1;
        font-size: 30px;
        font-weight: normal;
        padding: $app-offset-base;
        background: $app-primary-light;
    }

    &__examples {
        padding: $app-offset-base;

        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
}
</style>
