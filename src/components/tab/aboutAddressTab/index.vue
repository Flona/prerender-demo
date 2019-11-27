<template>
    <tabs :value="active" @change="onChangeTab" class="about-tabs">
        <tab :id="tab.id" v-for="tab in tabs" :key="tab.id">
            <div slot="label" class="about-tabs-content">
                <p class="title">{{ tab.company }}</p>
                <p class="des">( {{ tab.name }} )</p>
            </div>
        </tab>
    </tabs>
</template>

<script>
import { Tabs, Tab } from './components';
import bei from '@/assets/imgs/banner1.png';
import liao from '@/assets/imgs/banner4.png';
import chong from '@/assets/imgs/banner3.png';

export default {
    name: 'AboutAddressTab',
    components: {
        Tabs,
        Tab
    },
    data() {
        return {
            active: 'bei',
            tabs: []
        };
    },
    computed: {
        lang() {
            return this.$store.state.lang.language;
        }
    },
    watch: {
        lang() {
            this.setOptions();
            this.onChangeLocation();
        },
        active(n) {
            this.onChangeLocation();
        }
    },
    created() {
        this.setOptions();
        this.onChangeLocation();
    },
    methods: {
        setOptions() {
            this.tabs = [
                {
                    id: 'bei',
                    company: this.$t('about.contact.way.places.name1'),
                    name: this.$t('about.contact.way.places.company1'),
                    address: this.$t('about.contact.way.places.location1'),
                    tel: '000-00000000',
                    email: 'Service@xxx.com',
                    postcode: '000000',
                    location: [116.397442, 39.909146],
                    img: bei
                },
                {
                    id: 'liao',
                    company: this.$t('about.contact.way.places.name2'),
                    name: this.$t('about.contact.way.places.company2'),
                    address: this.$t('about.contact.way.places.location2'),
                    tel: '111-111111',
                    email: 'Service@xxx.com',
                    postcode: '111111',
                    location: [121.796506, 41.598292],
                    img: liao
                },
                {
                    id: 'chong',
                    company: this.$t('about.contact.way.places.name3'),
                    name: this.$t('about.contact.way.places.company3'),
                    address: this.$t('about.contact.way.places.location3'),
                    tel: '222-222222',
                    email: 'Service@xxx.com',
                    postcode: '222222',
                    location: [106.588553, 29.490958],
                    img: chong
                }
            ];
        },
        onChangeTab(id) {
            this.active = id;
        },
        onChangeLocation() {
            const index = this.tabs.findIndex(item => item.id === this.active);
            this.$emit('changeLocation', this.tabs[index]);
        }
    }
};
</script>

<style lang="scss" scoped>
.about-tabs {
    height: 80px;
    &-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .des {
            font-size: 12px;
        }
    }
}
</style>
