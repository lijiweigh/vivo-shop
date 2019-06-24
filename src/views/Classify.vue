<template>
    <div class="classify">
        <header-plugin :title="'商品分类'"></header-plugin>
        <div class="content">
            <div class="left">
                <span class="left_item" :class="{active: index===curIndex}" v-for="(item, index) in left" :key="index" @click="changeRight(index)">{{item.name}}</span>
            </div>
            <div class="right">
                <div class="right_item" v-for="(item, index) in curRight" :key="index">
                    <div class="wrap">
                        <img :src="item.img" alt="">
                        <p class="name">{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
       <footer-plugin></footer-plugin> 
    </div>
</template>

<script>
import footerPlugin from "@/components/footer";
import headerPlugin from "@/components/header";
import axios from "../server/request/axios"

export default {
    name: "classify",
    data () {
        return {
            left: [],
            curRight: [],
            right_total: [],
            curIndex: 0
        }
    },
    methods: {
        changeRight(index) {
            this.curRight = this.right_total[index].rigth_data
            this.curIndex = index
        }
    },
    created () {
        axios.get("/api/ceshi.json").then(res => {
            let classify = res.data.data.classify
            this.left = classify.left
            this.right_total = classify.right
            this.curRight = classify.right[0].rigth_data
        })
    },
    components: {
        footerPlugin,
        headerPlugin
    }
}
</script>

<style lang="scss" scoped>
.classify {
    padding: 1rem 0 1rem 0;
}

.content {
    // display: flex;
    width: 100%;
}

.left {
    position: fixed;
    left: 0;
    top: 1rem;
    width: 25%;
    height: 100%;
    background: #f6f6f6;

    .left_item {
        display: inline-block;
        width: 100%;
        height: .9rem;
        line-height: .9rem;
        text-align: center;
    }
}
.right {
    width: 75%;
    float: right;

    .right_item {
        width: 33.33333%;
        display: inline-block;
        .wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .name {
            line-height: .5rem;
        }
        img {
            width: 70%;
        }
    }
}

.active {
    color: #199cfe;
    background: #fff;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: .1rem;
        height: 100%;
        background: #199cfe;
    }
}
</style>

