<script>
export default {
    name: 'Tab',
    props: {
        id: {
            type: [Number, String],
            required: true
        },
        label: {
            type: [Number, String]
        },
        url: {
            type: String
        }
    },
    computed: {
        active() {
            return this.id === this.$parent.value;
        }
    },
    mounted() {
        this.$parent.panes.push(this);
    },
    methods: {
        onClick(e) {
            e.preventDefault();
            this.$parent.onChange(this.id);
            if (this.url) {
                this.$router.replace({ path: this.url });
            }
        }
    },
    render() {
        const tab = this.$slots.label || this.label;

        const className = {
            tab: true,
            active: this.active
        };

        return (
            <li class={className} on-click={this.onClick}>
                {tab}
            </li>
        );
    }
};
</script>

<style lang="scss" scoped>
.tab {
    cursor: pointer;
    flex: auto;
    text-align: center;
    list-style: none;
    height: 100%;
    border-left: 1px solid $app-grey-15-color;
    border-bottom: 1px solid $app-grey-15-color;
    color: $app-text-2-color;
    &:first-child {
        border-left: none;
    }
    &.active {
        background-color: $app-primary-color;
        color: #fff;
    }
}
</style>
