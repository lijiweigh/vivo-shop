<template>
    <div class="my">
        <header-plugin :title="'我的'"></header-plugin>
        <div class="container">
            <div class="head">
                <img src="/static/img/tou.jpg" alt="" class="avatar">
                <p class="name">Timo</p>
                <p class="geyan">提莫队长正在送命</p>
            </div>
            <div class="someTip">
                <div class="item" v-for="(item, index) in someTip" :key="index">
                    <p class="value">{{item.value}}</p>
                    <p class="name">{{item.name}}</p>
                </div>
            </div>
            <div class="separater"></div>
            <div class="order">
                <div class="order_head">
                    <span class="myOrder">我的订单</span>
                    <span class="allOrder">全部订单<i data-v-5481b2f8="" class="iconfont icon-youjiantou"></i></span>
                </div>
                <div class="icons">
                    <div class="icon" v-for="(item, index) in orderIcons" :key="index">
                        <img :src="item.img" alt="">
                        <p class="name">{{item.name}}</p>
                    </div>
                </div>
            </div>
            <div class="separater"></div>
            <div class="menus">
                <div class="menu">
                    <i data-v-5481b2f8="" class="iconfont icon-collection"></i>
                    我的收藏
                    <i data-v-5481b2f8="" class="iconfont icon-youjiantou"></i>
                </div>
                <div class="menu">
                    <i data-v-5481b2f8="" class="iconfont icon-gouwuche"></i>
                    我的收货地址
                    <i data-v-5481b2f8="" class="iconfont icon-youjiantou"></i>
                </div>
                <div class="menu">
                    <i data-v-5481b2f8="" class="iconfont icon-gouwuche"></i>
                    我的购物车
                    <i data-v-5481b2f8="" class="iconfont icon-youjiantou"></i>
                </div>
                <div class="menu">
                    <i data-v-5481b2f8="" class="iconfont icon-share_icon"></i>
                    扫码分享
                    <i data-v-5481b2f8="" class="iconfont icon-youjiantou"></i>
                </div>
                <div class="menu">
                    <i data-v-5481b2f8="" class="iconfont icon-bangzhuguanyuwomen"></i>
                    关于我
                    <i data-v-5481b2f8="" class="iconfont icon-youjiantou"></i>
                </div>
            </div>
        </div>
        <footer-plugin></footer-plugin>
    </div>
</template>

<script>
import footerPlugin from "@/components/footer";
import headerPlugin from "@/components/header";
import axios from "../server/request/axios";

export default {
    name: "my",
    data () {
        return {
            someTip: [
                {
                    name: "优惠券",
                    value: 0
                },
                {
                    name: "鼓励金",
                    value: 0
                },
                {
                    name: "积分",
                    value: 0
                },
            ],
            orderIcons: [
                {
                    name: "待付款",
                    img: "/static/img/111.png"
                },
                {
                    name: "待收货",
                    img: "/static/img/222.png"
                },
                {
                    name: "待评价",
                    img: "/static/img/333.png"
                },
                {
                    name: "退货/退款",
                    img: "/static/img/444.png"
                },
            ]
        }
    },
    components: {
        footerPlugin,
        headerPlugin
    }
}
</script>

<style lang="scss" scoped>
@import "../style/style.scss";
.my {
    padding: 1rem 0;
}
.container {

}

.head {
    width: 100%;
    height: 3.58rem;
    background: url("/static/img/bj.png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        margin-top: .7rem;
    }
    .name {
        font-weight: bold;
        font-size: .35rem;
    }
}

.someTip {
    width: 100%;
    height: 1.4rem;
    display: flex;

    .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .value {
        margin-bottom: .1rem;
    }
}

.separater {
    width: 100%;
    height: .1rem;
    background-color: #eee;
}

.order {
    .order_head {
        display: flex;
        padding: .2rem;
        justify-content: space-between;
    }

    .icons {
        display: flex;
        padding: .2rem 0;
        .icon {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: .6rem;
        }
        .name {
            margin-top: .2rem;
        }
    }
}

.menu {
    padding: .3rem;
    @include setBorder(bottom);
    .icon-youjiantou {
        float: right;
    }
}
</style>

