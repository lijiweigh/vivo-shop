<template>
    <div class="choose">
        <header-plugin :title="title"></header-plugin>
        <div class="nav">
            <span class="nav_item" :class="{active: curIndex===index}" @click="handleNav(index)" v-for="(item, index) in upper" :key="index">{{item.name}}</span>
        </div>
        <div class="sort">
            <span class="price_rise" @click="handleRise">价格升序</span>
            <span class="price_fall" @click="handleFall">价格降序</span>
            <span class="sell_count" @click="handleCount">销量优先</span>
        </div>
        <div class="list">
            <product-item v-for="(item, index) in products_list" :item="item" :key="index"></product-item>
        </div>
    </div>
</template>

<script>
import axios from "@/server/request/axios";
import productItem from "@/components/productItem";
import headerPlugin from "@/components/header";


export default {
    name: "choose",
    data () {
        return {
            products_list: [],
            title: "",
            upper: [],
            lower: [],
            curIndex: 0
        }
    },
    components: {
        productItem,
        headerPlugin
    },
    methods: {
        getData () {
           
                axios.get ("/api/ceshi.json").then (res => {
                    if (this.title === "选购手机") {
                        this.upper = res.data.data.phone.upper
                        this.lower = res.data.data.phone.lower
                    } else {
                        this.upper = res.data.data.parts.upper
                        this.lower = res.data.data.parts.lower
                    }

                    this.products_list = this.lower[0].lower_data
                    
                })
            
        },
        handleNav (index) {
            this.curIndex = index
            this.products_list = this.lower[index].lower_data
        },
        handleRise () {
            this.products_list.sort(function (a, b) {
                
                return parseFloat(a.homePrice) - parseFloat(b.homePrice)
            })
            console.log("aort")
        },
        handleFall () {
            this.products_list.sort(function (a, b) {
                return parseFloat(b.homePrice) - parseFloat(a.homePrice)
            })
        },
        handleCount () {

        }
    },
    mounted () {
        this.getData()
        this.title = this.$route.params.type == 0 ? "选购手机" : "选购配件"
    }
}
</script>

<style lang="scss" scoped>
.choose {
    padding-top: 2.6rem;
}

.nav {
    position: fixed;
    left: 0;
    top: 1rem;
    width: 100%;
    background: #fff;
    display: flex;

    .nav_item {
        flex: 1;
        // width: 25%;
        height: .9rem;
        line-height: .9rem;
        text-align: center;
    }
}

.active {
    color: #25b5fe;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: .05rem;
        width: 100%;
        background: #25b5fe;
    }
}

.sort {
    display: flex;
    position: fixed;
    left: 0;
    top: 1.9rem;
    width: 100%;
    background: #f4f4f4;
    span {
        flex: 1;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
    }
}

</style>


