<template>
    <div class="footer_plugin">
        <div class="wrap" >
            <div class="item" @click="handletab('/home')">
                <div class="icon">
                    <i class="iconfont icon-shouye_xuanzhong" style="color:#179dfe" v-if="active ==='home'"></i>
                     <i class="iconfont icon-shouye2" v-else></i>
                </div>
                <span :class="{'active': active === 'home'}">首页</span>
            </div>

            <div class="item" @click="handletab('/classify')">
                <div class="icon">
                    <i class="iconfont icon-fenleixuanzhong" style="color:#179dfe" v-if="active ==='classify'"></i>
                    <i class="iconfont icon-fenlei-copy" v-else></i>
                </div>
                <span :class="{'active': active === 'classify'}">分类</span>
            </div>

            <div class="item" @click="handletab('/news')">
                <div class="icon">
                     <i class="iconfont icon-dongtaixuanzhong" style="color:#179dfe" v-if="active ==='news'"></i>
                    <i class="iconfont icon-dongtai" v-else></i>
                </div>
                <span :class="{'active': active === 'news'}">动态</span>
            </div>

            <div class="item" @click="handletab('/my')">
                <div class="icon">
                    <i class="iconfont icon-wode-" style="color:#179dfe" v-if="active ==='my'"></i>
                    <i class="iconfont icon-wode"  v-else></i>
                </div>
                <span :class="{'active': active === 'my'}">我的</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "footer_plugin",
    data () {
        return {
            active: "home"
        }
    },
    methods: {
        handletab (path) {
            console.log(path)
            this.$router.push({path})
        }
    },
    mounted () {
        this.active = this.$route.path.slice(1)
    }
}
</script>

<style lang="scss" scoped>
@import "../style/style.scss";
.footer_plugin {
    position: fixed;
    z-index: 99;
    left: 0;
    bottom: 0;
    height: 1rem;
    width: 100%;
    background: #fff;
    .wrap {
        @include setBorder(top);
        display: flex;
        height: 100%;
    }

    .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .active {
        color: #25b5fe;
    }

}
</style>

