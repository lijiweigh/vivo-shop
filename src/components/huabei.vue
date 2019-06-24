<template>
    <div class="huabei">
        <div class="wrap" @click="toggleShow">
            <div class="item"><i class="iconfont icon-icon--"></i>支持花呗分期</div>
            <div class="item"><i class="iconfont icon-icon--"></i>支持以旧换新</div>
            <i class="iconfont icon-youjiantou"></i>
        </div>

        <transition name="huabei">
            <div class="transition" v-show="showDetail"  @click="toggleShow">
                <div class="content" @click.stop>
                    <div class="head">
                        <i class="iconfont icon-cancel-1-copy" @click="toggleShow"></i>
                        <h3 class="title">服务说明</h3>
                    </div>
                    <div class="desc">
                        <div class="item"><i class="iconfont icon-icon--"></i>支持花呗分期</div>
                        <p>商品支持花呗分期</p>
                    </div>
                    <div class="desc">
                        <div class="item"><i class="iconfont icon-icon--"></i>可以使用换新鼓励金</div>
                        <p>换新鼓励金通过参加以旧换新回收旧手机以后获得，旧手机享受额外补贴。<span style="color:#00acff;">现在换机</span></p>
                    </div>
                    <button class="closeBtn" @click="toggleShow">关闭</button>
                </div>
                
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "huabei",
    data () {
        return {
            showDetail: false
        }
    },
    methods: {
        toggleShow () {
            this.showDetail = !this.showDetail
        }
    }
}
</script>

<style lang="scss" scoped>
.huabei {
    padding: .2rem;
    // display: flex;
    width: 100%;
    box-sizing: border-box;
}

.item {
    margin-right: .2rem;
    display: inline-block;
}

.icon-icon-- {
    color: #0098df;
}

.icon-youjiantou {
    float: right;
}

.transition {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: .5);
    .content {
        background: #fff;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50%;

        .head {
            padding: .3rem;
            .title {
                text-align: center;
            }
            .icon-cancel-1-copy {
                float: right;
            }
        }

        .desc {
            padding: 0 .5rem;
            line-height: .5rem;
            margin-bottom: .5rem;
        }

        .closeBtn {
            position: absolute;
            left: 50%;
            bottom: .5rem;
            transform: translateX(-50%);
            background: #0098df;
            border: none;
            width: 80%;
            height: .8rem;
            color: #fff;
            border-radius: .4rem;
        }
    }
}

.huabei-enter, .huabei-leave-to {
    transform: translateY(100%);
}

.huabei-enter-active, .huabei-leave-active {
    transition: .3s;
}
</style>

