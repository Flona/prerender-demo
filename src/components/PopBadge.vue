<template>
    <div class="pop-badge">NEW</div>
</template>

<style lang="scss" scoped>
.pop-badge {
    position: absolute;
    right: -7px;
    top: 2px;
    height: 24px;
    line-height: 20px;
    padding: 2px 3px;
    background: $app-danger-color;
    color: #fff;
    font-size: 14px;
    // for: chrome font-size >= 12px
    transform: scale(0.5);

    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        border-width: 5px 5px 0 0;
        border-style: solid;
        border-color: $app-danger-color transparent;
    }
}
</style>
