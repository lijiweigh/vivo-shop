<template>
    <transition name="tips">
        <div class="tips" v-if="show">{{ message }}</div>
    </transition>
</template>

<script>
export default {
    name: "tips-plugin",
    data () {
        return {
            message: "",
            show: false
        }
    }
}
</script>


<style lang="scss" scoped>
.tips {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    max-width: 50%;
    padding: .3rem;
    text-align: center;
    line-height: .5rem;
    font-size: .3rem;
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    border-radius: .1rem;
    word-break: break-all;
}

.tips-enter, .tips-leave-to {
    opacity: 0;
}

.tips.enter-active, .tips-leave-to {
    transition: .2s;
}
</style>
