<template>
    <div class="header-plugin">
        <div class="icon" @click="$router.go(-1)"><i class="iconfont icon-zuojiantou"></i></div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
export default {
    name: "header-plugin",
    props: ['title']
}
</script>

<style lang="scss" scoped>
.header-plugin {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    height: 1rem;
    width: 100%;
    font-size: .3rem;
    background: #fff;
}
.icon {
    position: absolute;
    left: .1rem;
    top: 50%;
    transform: translateY(-50%);
}

.title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
