<template>
    <div class="jobsCollapse">
        <div class="jobsCollapse-header">
            <span v-for="item in titles" :key="item.id">{{ item.title }}</span>
        </div>
        <div class="line"></div>
        <el-collapse v-show="!noJobs" accordion>
            <el-collapse-item v-for="item in jobList" :key="item.id">
                <template slot="title">
                    <span class="name">{{ item.name }}</span>
                    <span class="city">{{ item.city }}</span>
                    <span class="publishTime">{{ item.publishTime }}</span>
                </template>
                <p class="job-title">{{ $t('about.join.jobDescription') }}</p>
                <div class="job-content" v-html="item.duty"></div>

                <p class="job-title">{{ $t('about.join.jobRequirements') }}</p>
                <div class="job-content" v-html="item.qualification"></div>

                <p class="job-title">{{ $t('about.join.positionApplied') }}</p>
                <div class="job-content">
                    <span>{{ $t('about.join.email') }}</span>
                    <span>hr@xxx.com</span>
                    <p class="job-des">{{ $t('about.join.emailDes') }}</p>
                </div>
            </el-collapse-item>
        </el-collapse>
        <div class="line"></div>

        <p v-show="noJobs" class="no-jobs">{{ $t('about.join.noJobs') }}</p>
        <Pagination :pageNumber.sync="pageNumber" :totalPage.sync="totalPage" />
    </div>
</template>

<script>
import { getCareerList } from '@/services/about';
import Pagination from '@/components/pagination/JoinPagination.vue';
import jobList from './en';

export default {
    name: 'JobsCollapse',
    components: {
        Pagination
    },
    props: {
        activeCity: {
            type: String,
            required: true
        }
    },
    computed: {
        active() {
            return this.activeCity === '全部' ? '' : this.activeCity;
        },
        noJobs() {
            return this.jobList <= 0;
        },
        lang() {
            return this.$store.state.lang.language;
        }
    },
    data() {
        return {
            titles: [],
            pageSize: 12,
            pageNumber: 1,
            totalPage: 1,
            jobList: []
        };
    },
    watch: {
        activeCity() {
            this.pageNumber = 1;
            this.getPageList();
        },
        pageNumber() {
            this.getPageList();
        },
        lang() {
            this.setOptions();
        }
    },
    methods: {
        getPageList() {
            if (this.lang === 'en') {
                // 英文招聘岗位很少，未做分页处理！
                this.jobList = jobList;
            } else {
                this.getJobList();
            }
        },
        async getJobList() {
            let data = { list: [], currentPage: 1, totalPage: 1 };
            try {
                data = await getCareerList(this.pageSize, this.pageNumber, this.active);
            } catch (e) {
                this.pageNumber = 1;
                this.totalPage = 1;
            } finally {
                this.jobList = data.list;
                this.pageNumber = data.currentPage;
                this.totalPage = data.totalPage;
            }
        },
        setOptions() {
            this.titles = [
                {
                    id: 1,
                    title: this.$t('about.join.name')
                },
                {
                    id: 2,
                    title: this.$t('about.join.place')
                },
                {
                    id: 3,
                    title: this.$t('about.join.time')
                }
            ];
        }
    },
    created() {
        this.getPageList();
        this.setOptions();
    }
};
</script>

<style lang="scss" scoped>
.jobsCollapse {
    color: $app-text-1-color;
    margin-top: 25px;
    .line {
        height: 1px;
        width: 772px;
        margin: 0 auto;
        background-color: $app-grey-13-color;
    }

    &-header {
        padding: 23px 64px;
        display: flex;
        justify-content: space-between;

        span:first-child {
            width: 331px;
            margin-left: 32px;
        }

        span:nth-of-type(2) {
            width: 247px;
        }
        span:last-child {
            width: 80px;
            margin-right: 84px;
        }
    }

    /deep/ .el-collapse {
        border: none;
        /*border-top: 1px solid $app-grey-13-color;
        border-bottom: 1px solid $app-grey-13-color;*/
        padding: 14.5px 0 42.5px;
        &-item {
            margin: 5.5px 0;

            &__header {
                justify-content: space-between;
                position: relative;
                height: 40px;
                border: none;
                font-size: 14px;
                padding: 0 64px;

                &.focusing:focus:not(:hover) {
                    color: inherit;
                }

                &:hover {
                    background-color: $app-grey-16-color;
                }

                .name {
                    width: 331px;
                    margin-left: 19px;
                    line-height: 1;
                }

                .city {
                    width: 247px;
                }
                .publishTime {
                    width: 80px;
                    margin-right: 84px;
                }
            }
            &__arrow {
                order: -1;
                margin: 0;
            }
            &__wrap {
                background-color: $app-grey-17-color;
                border: none;

                .el-collapse-item__content {
                    padding: 42px 99px 28px;

                    .job-title {
                        font-size: 16px;
                        margin-bottom: 20px;
                        font-weight: 500;
                    }
                    .job-content {
                        font-size: 14px;
                        margin-bottom: 37px;

                        .job-des {
                            color: $app-grey-18-color;
                            font-size: 12px;
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
    }
    .no-jobs {
        text-align: center;
        font-size: 14px;
        color: $app-text-2-color;
        padding: 142px 0;
        margin: 0 64px;
        border-bottom: 1px solid $app-grey-13-color;
    }
}
</style>
