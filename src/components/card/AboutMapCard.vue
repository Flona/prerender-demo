<template>
    <div>
        <el-image style="width: 100%; height: 120px" :src="location.img" :key="location.img" fit="cover"></el-image>
        <div class="main" :key="location.name">
            <div class="main-content">
                <p class="main-content-name">{{ location.name }}</p>
                <p class="main-content-address">{{ location.address }}</p>
            </div>

            <p class="main-tel">{{ location.tel }}</p>
            <p class="main-email">{{ location.email }}</p>
            <p class="main-postcode">{{ $t('about.contact.way.postcode') + ' ' + location.postcode }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMapCard',
    props: {
        location: {
            type: Object,
            required: true
        }
    },
    computed: {
        l() {
            return this.location;
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
    padding: 15px 12px;
    font-size: 14px;

    &-content {
        height: 97px;
        &-name {
            margin-bottom: 5px;
            line-height: 1.4;
        }

        &-address {
            font-size: 12px;
            color: $app-text-2-color;
            line-height: 1.5;
        }
    }

    &-email {
        padding: 7px 0 12px;
        border-bottom: 1px solid $app-grey-13-color;
        margin-bottom: 11px;
    }

    &-postcode {
        color: $app-text-2-color;
        font-size: 12px;
    }
}
</style>
