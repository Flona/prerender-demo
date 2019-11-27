<template>
    <div
        class="card cover-image"
        @mouseenter="toggleHover"
        @mouseleave="toggleHover"
        :style="{ width, height, backgroundImage: 'url(' + img + ')' }"
    >
        <div :class="['main', placement]" :style="gradient">
            <div :class="['main-content', lang]">
                <p class="title">{{ title }}</p>
                <p class="des" v-html="content"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data() {
        return {
            hover: false
        };
    },
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        placement: {
            type: String,
            default: 'right'
        },
        color1: {
            type: String,
            default: 'rgba(58,77,93,1)'
        },
        color2: {
            type: String,
            default: 'rgba(58,77,93,.97)'
        },
        width: {
            type: String,
            default: '595px'
        },
        height: {
            type: String,
            default: '335px'
        }
    },
    computed: {
        deg() {
            const p = this.placement;
            return p === 'right' ? '270' : '0';
        },
        gradient() {
            let background;
            const p = this.placement;
            const percentage = p === 'right' ? '48%' : '42%';

            if (this.hover) {
                background = `linear-gradient(${this.deg}deg,${this.color1} 0%,${this.color2} ${percentage},rgba(255,255,255,0) 100%)`;
            } else {
                background = `linear-gradient(${this.deg}deg,${this.color1} 0%,rgba(255,255,255,0) 50%)`;
            }
            return {
                background
            };
        },
        lang() {
            return this.$store.state.lang.language;
        }
    },
    methods: {
        toggleHover() {
            this.hover = !this.hover;
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    line-height: 1;
    position: relative;
    color: #fff;
    font-size: 34px;
    font-weight: 500;

    .main {
        position: absolute;
        overflow: hidden;

        &-content {
            height: 100%;
            display: flex;
            transition: all 0.5s linear;
            .title {
                font-weight: 500px;
            }
            .des {
                font-size: 14px;
                text-align: start;
                line-height: 24px;
            }
        }
    }

    .bottom {
        bottom: 0;
        width: 100%;
        height: 593px;

        .main-content {
            position: relative;
            flex-direction: column;
            justify-content: flex-end;
            transform: translateY(181px);
            // transition: all 0.5s linear;

            .des {
                margin: 29px 39px 42px;
            }

            &.en {
                transform: translateY(255px);
            }
        }
    }

    .right {
        right: 0;
        height: 100%;
        width: 524px;

        .main-content {
            width: 100%;
            justify-content: flex-end;
            transform: translateX(297px);
            // transition: all 0.5s linear;

            .title {
                width: 32px;
                display: flex;
                align-items: center;
            }

            .des {
                flex: none;
                width: 272px;
                margin: 54px 25px 44px 40px;
            }

            &.en {
                transform: translateX(455px);
                .title {
                    font-size: 18px;
                    writing-mode: vertical-rl;
                    display: flex;
                    justify-content: center;
                    margin-right: 36px;
                }
                .des {
                    width: 430px;
                    margin: 10px 25px 10px 0px;
                }
            }
        }
    }

    &:hover {
        .bottom,
        .right {
            transition: all 0.5s linear;
            .main-content.en {
                .title {
                    display: none;
                }
            }
        }
        .bottom {
            height: 593px;
            .main-content {
                transform: translateY(0);
            }
        }
        .right {
            width: 524px;
            .main-content {
                transform: translateX(0);
            }
        }
    }
}
</style>
