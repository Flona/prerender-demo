<template>
    <div class="pagination">
        <svg-icon :name="preIcon" @click.native="toPre" />
        <span class="page">
            {{ pageNumber }} {{ $t('about.join.page') }} / {{ totalPage }} {{ $t('about.join.page') }}
        </span>
        <svg-icon :name="nextIcon" @click.native="toNext" />
    </div>
</template>

<script>
export default {
    name: 'JoinPagination',
    props: {
        pageNumber: {
            type: [Number, String],
            required: true
        },
        totalPage: {
            type: [Number, String],
            required: true
        }
    },
    computed: {
        isFirst() {
            return this.pageNumber == 1;
        },
        isLast() {
            return this.pageNumber >= this.totalPage;
        },
        preIcon() {
            return this.isFirst ? 'icon-pre-job-disabled' : 'icon-pre-job';
        },
        nextIcon() {
            return this.isLast ? 'icon-next-job-disabled' : 'icon-next-job';
        }
    },
    methods: {
        toPre() {
            if (this.isFirst) {
                return;
            }
            this.$emit('update:pageNumber', this.pageNumber - 1);
        },
        toNext() {
            if (this.isLast) {
                return;
            }
            this.$emit('update:pageNumber', this.pageNumber + 1);
        }
    }
};
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin: 25px 0 0;

    .page {
        margin: 0 52px;
    }

    .svg-icon--icon-next-job,
    .svg-icon--icon-pre-job {
        cursor: pointer;
    }

    .svg-icon--icon-pre-job-disabled,
    .svg-icon--icon-next-job-disabled {
        cursor: no-drop;
    }
}
</style>
