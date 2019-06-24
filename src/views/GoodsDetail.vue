<template>
    <div class="goodsDetail">
        <header-plugin :title="'商品详情'"></header-plugin>
        <swiper :imgs="imgs"></swiper>
        <div class="describe">
            <h3 class="title">{{detail.homeName}}</h3>
            <p class="content"><span style="color: red;">[{{detail.homeBright}}]</span>{{detail.homeTitle}}</p>
            <p class="price">&yen;{{detail.homePrice}}</p>
        </div>
        <div class="count">
            <span class="text">购买数量&nbsp;:</span>
            <div class="countBox">
                <span @click="desc">-</span>
                <input type="text" class="buyCount" readonly v-model="buyCount">
                <span @click="add">+</span>
            </div>
        </div>
        <huabei></huabei>
        <div class="separater"></div>
        <div class="photoDetail">
            <div class="nav">
                <span class="item" @click="handleTab(0)" :class="{active: curTab==0}">图文详情</span>
                <span class="item" @click="handleTab(1)" :class="{active: curTab==1}">参数</span>
            </div>
            <transition name="photo">
                <div class="photo" v-show="curTab==0">
                    <img v-lazy="item.one" v-for="(item, index) in detail.Images" :key="index" alt="">
                </div>
            </transition>
            <transition name="config">
                <div class="config" v-show="curTab==1" v-html="detail.homePeizhi"></div>
            </transition>
        </div>
    </div>
</template>

<script>
import headerPlugin from "@/components/header"
import swiper from "@/components/swiper";
import huabei from "@/components/huabei";
export default {
    name: "goodsDetail",
    data () {
        return {
            detail: {},
            buyCount: 0,
            curTab: 0
        }
    },
    created () {
        this.detail = this.$store.state.watchingProduct
    },
    components: {
        headerPlugin,
        swiper,
        huabei
    },
    methods: {
        desc () {
            this.buyCount--
            if (this.buyCount < 0) {
                this.buyCount = 0
            }
        },
        add () {
            this.buyCount++
        },
        handleTab (index) {
            this.curTab = index
        }
    },
    computed: {
        imgs () {
            return this.detail.homeSwipe.map(item => {
                return item.swipe
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style/style.scss";
.goodsDetail {
    padding-top: 1rem;
}

.describe {
    padding: .2rem;
    @include setBorder(bottom);
    .title {
        font-size: .35rem;
    }
    .price {
        color: red;
        font-size: .45rem;
    }
    .content {
        margin: .1rem 0;
    }
}
.count {
    display: flex;
    padding: .3rem;
    @include setBorder(bottom);
    .text {
        display: inline-block;
        line-height: .6rem;
    }
    .countBox {
        margin-left: .3rem;
        span, input {
            float: left;
            box-sizing: border-box;
            display: inline-block;
            width: .8rem;
            height: .6rem;
            border: 1px solid #ccc;
            line-height: .6rem;
            text-align: center;
        }
    }
    
}

.separater {
    width: 100%;
    height: .2rem;
    background: #F4F4F4;
}

.photoDetail {
    .nav {
        display: flex;
        .item {
            flex: 1;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
        }

        .active {
            position: relative;
            color: #26a2ff;
            &:after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: .05rem;
                background: #26a2ff;
            }
        }
    }

    .photo {
        img {
            width: 100%;
        }
    }
}

.photo-enter, .photo-leave-to {
    transform: translateX(-100%);
}
.photo-enter-active, .photo-leave-active {
    transition: .3s;
}

.config-enter, .config-leave-to {
    transform: translateX(100%);
}
.config-enter-active, .config-leave-active {
    transition: .3s;
}
</style>
