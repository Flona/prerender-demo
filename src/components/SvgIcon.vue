<template>
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" :style="{ width, height }">
        <title v-if="title">{{ title }}</title>
        <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
    </svg>
</template>

<script>
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('../assets/svg', false, /\.svg$/);
requireAll(req);

export default {
    name: 'svg-icon',

    props: {
        name: {
            type: String,
            required: true
        },

        title: {
            type: String,
            default: null
        },

        width: {
            type: String,
            default: '24px'
        },

        height: {
            type: String,
            default: '24px'
        }
    },

    computed: {
        iconPath() {
            let icon = require(`../assets/svg/${this.name}.svg`);
            icon = icon.default || icon;
            // {id: '...', url: '...', viewBox: '0 0 24 24'}
            return icon.url;
        },

        className() {
            return 'svg-icon svg-icon--' + this.name;
        }
    }
};
</script>

<style>
.svg-icon {
    fill: currentColor;
}
</style>
