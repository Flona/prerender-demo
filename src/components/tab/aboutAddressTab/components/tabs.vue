<script>
import contents from './contents';
export default {
    name: 'Tabs',
    data() {
        return {
            panes: []
        };
    },
    props: {
        value: {
            type: [Number, String],
            required: true
        }
    },
    components: { contents },
    methods: {
        onChange(id) {
            this.$emit('change', id);
        }
    },
    render() {
        return (
            <div>
                <ul class="tabs-header">{this.$slots.default}</ul>
                <contents panes={this.panes} />
            </div>
        );
    }
};
</script>

<style lang="scss" scoped>
.tabs-header {
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: $app-grey-14-color;
    margin: 0;
    padding: 0;
    font-size: 14px;
    list-style: none;
}
</style>
