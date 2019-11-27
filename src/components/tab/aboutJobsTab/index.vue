<template>
    <tabs :value="active" @change="onChangeTab" class="about-tabs">
        <tab :id="tab" :label="tab" v-for="tab in tabs" :key="tab"></tab>
    </tabs>
</template>

<script>
import { Tabs, Tab } from './components';
import { getCityList } from '@/services/about';
import cityList from './en.js';

export default {
    name: 'AboutJobsTab',
    components: {
        Tabs,
        Tab
    },
    data() {
        return {
            tabs: [],
            active: ''
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
        },
        active(n) {
            this.onChangePlace();
        }
    },
    created() {
        this.setOptions();
    },
    methods: {
        setOptions() {
            if (this.lang === 'en') {
                this.tabs = cityList;
                this.active = 'Beijing';
            } else {
                this.getCityList();
            }
        },
        async getCityList() {
            let data = ['全部'];
            // for 调用接口时间期间先转换为中文
            this.active = '全部';
            this.tabs = data;
            try {
                data = data.concat(await getCityList());
            } finally {
                this.active = '全部';
                this.tabs = data;
            }
        },
        onChangeTab(id) {
            this.active = id;
        },
        onChangePlace() {
            const index = this.tabs.findIndex(item => item === this.active);
            this.$emit('changePlace', this.tabs[index]);
        }
    }
};
</script>

<style lang="scss" scoped>
.about-tabs {
    height: 26px;
    line-height: 26px;
}
</style>
