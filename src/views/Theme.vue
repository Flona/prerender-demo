<template>
    <LayoutContainer cls-name="theme">
        <dl cls-name="section">
            <dt cls-name="section__title">1、背景色</dt>
            <dd cls-name="grid">
                <div
                    class="d-flex align-center flex-column"
                    cls-name="unit"
                    v-for="(item, index) in backgroundColorList"
                    :key="index"
                >
                    <div cls-name="unit__main color" :style="{ backgroundColor: item[1] }"></div>
                    <div cls-name="unit__code">$app-{{ item[0] }}</div>
                </div>
            </dd>
        </dl>

        <dl>
            <dt>2、功能色</dt>
            <dd cls-name="grid">
                <div
                    class="d-flex align-center flex-column"
                    cls-name="unit"
                    v-for="(item, index) in functionColorList"
                    :key="index"
                >
                    <div cls-name="unit__main color" :style="{ backgroundColor: item[1] }"></div>
                    <div cls-name="unit__code">$app-{{ item[0] }}</div>
                </div>
            </dd>
        </dl>

        <dl>
            <dt>3、灰度色</dt>
            <dd cls-name="grid">
                <div
                    class="d-flex align-center flex-column"
                    cls-name="unit"
                    v-for="(item, index) in greyColorList"
                    :key="index"
                >
                    <div cls-name="unit__main color" :style="{ backgroundColor: item[1] }"></div>
                    <div cls-name="unit__code">$app-grey-{{ item[0] }}-color</div>
                </div>
            </dd>
        </dl>

        <dl>
            <dt>3、宽度</dt>
            <dd>
                <div
                    class="d-flex align-center flex-column"
                    cls-name="unit"
                    v-for="(item, index) in widthList"
                    :key="index"
                >
                    <div cls-name="unit__main size size--width" :style="{ width: item[1] / 2 + 'px' }"></div>
                    <div cls-name="unit__code">$app-{{ item[0] }}-width: {{ item[1] }}px</div>
                </div>
            </dd>
        </dl>

        <dl>
            <dt>4、高度</dt>
            <dd cls-name="grid">
                <div
                    class="d-flex align-center flex-column"
                    cls-name="unit"
                    v-for="(item, index) in heightList"
                    :key="index"
                >
                    <div cls-name="unit__main size size--height" :style="{ height: item[1] + 'px' }"></div>
                    <div cls-name="unit__code">$app-height-{{ item[0] }}: {{ item[1] }}px</div>
                </div>
            </dd>
        </dl>

        <dl>
            <dt>5、间隔</dt>
            <dd cls-name="grid">
                <div
                    class="d-flex align-center flex-column"
                    cls-name="unit"
                    v-for="(item, index) in offsetList"
                    :key="index"
                >
                    <div cls-name="unit__main size size--offset" :style="{ width: item[1] + 'px' }"></div>
                    <div cls-name="unit__code">$app-offset-{{ item[0] }}: {{ item[1] }}px</div>
                </div>
            </dd>
        </dl>
    </LayoutContainer>
</template>

<script>
import LayoutContainer from '../components/layout/LayoutContainer';
import {
    backgroundColor,
    primaryColor,
    primaryLight,
    warningColor,
    warningLight,
    dangerColor,
    dangerLight,
    successColor,
    successLight,
    text1Color,
    text2Color,
    text3Color,
    grey1Color,
    grey2Color,
    grey3Color,
    grey4Color,
    grey5Color,
    grey6Color,
    grey7Color,
    bodyWidth,
    asideWidth,
    mainWidth,
    heightSmall,
    heightBase,
    offsetXSmall,
    offsetSmall,
    offsetBase,
    offsetLarge,
    offsetXLarge
} from '../theme/default';

export default {
    name: 'AppTheme',

    components: {
        LayoutContainer
    },

    data() {
        return {
            backgroundColorList: [['background-color', backgroundColor]],

            functionColorList: [
                ['primary-color', primaryColor],
                ['primary-light', primaryLight],
                ['warning-color', warningColor],
                ['warning-light', warningLight],
                ['danger-color', dangerColor],
                ['danger-light', dangerLight],
                ['success-color', successColor],
                ['success-light', successLight]
            ],

            textColorList: [
                [1, text1Color],
                [2, text2Color],
                [3, text3Color]
            ],

            greyColorList: [
                [1, grey1Color],
                [2, grey2Color],
                [3, grey3Color],
                [4, grey4Color],
                [5, grey5Color],
                [6, grey6Color],
                [7, grey7Color]
            ],

            widthList: [
                ['body', bodyWidth],
                ['main', mainWidth],
                ['aside', asideWidth]
            ],

            heightList: [
                ['small', heightSmall],
                ['base', heightBase]
            ],

            offsetList: [
                ['x-small', offsetXSmall],
                ['small', offsetSmall],
                ['base', offsetBase],
                ['large', offsetLarge],
                ['x-large', offsetXLarge]
            ]
        };
    }
};
</script>

<style module lang="scss">
@import '../styles/variables';

.theme {
    background: #fff;
    padding: $app-offset-small;
}

dl {
    margin-bottom: $app-offset-base;
}

dt {
    color: $app-text-1-color;
    line-height: 30px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
}

.unit {
    padding: $app-offset-xsmall;
    margin-bottom: $app-offset-base;

    &__main {
        margin-bottom: $app-offset-xsmall;
    }

    &__code {
        color: $app-text-2-color;
        line-height: 20px;
    }
}

.color {
    width: 50px;
    height: 50px;
    border-radius: 100%;
}

.size {
    width: 50px;
    height: 50px;
    color: $app-grey-7-color;

    &--width {
        background: $app-primary-color;
    }

    &--height {
        background: $app-success-color;
    }

    &--offset {
        background: $app-danger-color;
    }
}
</style>
