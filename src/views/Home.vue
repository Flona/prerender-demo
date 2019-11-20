<template>
    <LayoutContainer cls-name="home">
        <div class="flex-grow-1 d-flex flex-column justify-center align-center">
            <div cls-name="brand">
                <img src="../assets/logo.png" alt="logo" width="400" cls-name="brand__logo" />

                <p class="d-flex align-center justify-center" cls-name="brand__park">
                    <SvgIcon name="park"></SvgIcon>
                    xxxx
                </p>
            </div>

            <div cls-name="todo">
                <h2 cls-name="todo__head">Todo</h2>
                <p cls-name="todo__title">{{ todo.title }}</p>
            </div>
        </div>
    </LayoutContainer>
</template>

<script>
import LayoutContainer from '../components/layout/LayoutContainer';
import SvgIcon from '../components/SvgIcon';
import { getTodo } from '../services/todo';

export default {
    components: {
        LayoutContainer,
        SvgIcon
    },

    name: 'Home',

    data() {
        return {
            todo: {
                title: '...'
            }
        };
    },

    mounted() {
        this.initData();
    },

    methods: {
        async initData() {
            try {
                this.todo = await getTodo();
            } catch (err) {
                alert(err.message);
            }
        }
    }
};
</script>

<style module lang="scss">
@import '../styles/variables';

.home {
    background: #fff;
}

.brand {
    margin-bottom: $app-offset-large;

    &__logo {
        max-width: 600px;
        height: auto;
    }

    &__park {
        font-size: 20px;
        color: $app-text-1-color;

        .svg-icon {
            margin-right: $app-offset-xsmall;
        }
    }
}

.todo {
    color: $app-text-1-color;

    &__head {
        font-weight: normal;
        font-size: 20px;
        line-height: 1.5;
        text-align: center;
    }

    &__title {
        font-size: 16px;
    }
}
</style>
