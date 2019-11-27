<template>
    <div class="image" :style="imageStyle">
        <img v-show="url" :src="url" :style="imageStyle" />
    </div>
</template>

<script>
export default {
    name: 'PlaceholderImage',
    props: {
        img: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: '382px'
        },
        height: {
            type: String,
            default: '268px'
        }
    },
    data() {
        return {
            url: ''
        };
    },
    computed: {
        imageStyle() {
            return {
                width: this.width,
                height: this.height
            };
        }
    },
    created() {
        this.loadImage();
    },
    watch: {
        picture() {
            this.loadImage();
        }
    },
    methods: {
        loadImage() {
            const img = new Image();
            img.onload = () => {
                this.url = this.img;
            };
            img.onerror = () => {
                this.url = '';
            };
            img.src = this.img;
        }
    }
};
</script>

<style lang="scss" scoped>
.image {
    background-color: $app-grey-12-color;

    img {
        object-fit: cover;
    }
}
</style>
