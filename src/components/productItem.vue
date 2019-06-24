<template>
   <div class="products_item" @click="gotoDetail">
        <div class="product_wrap">
            <img v-lazy="item.homeImg || item.ImageOne" alt="">
            <div class="homeName">{{item.homeName || item.name}}</div>
            <div class="homeNametwo">{{item.homeNametwo || item.nametwo}}</div>
            <div class="homePrice">&yen;{{item.homePrice || item.Price}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "productItem",
    props: ["item"],
    methods: {
        gotoDetail () {
            this.$store.state.watchingProduct = this.item
            this.$router.push({name: "goodsDetail"})
        }
    }
}
</script>

<style lang="scss" scoped>
.products_item {
        display: inline-block;
        width: 50%;
        // margin-top: .2rem;
        padding: .5rem;
        // flex-basis: 50%;
        
        .product_wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
            box-sizing: border-box;
            font-size: .2rem;
        }
        .homeName, .homeNametwo, .homePrice {
            line-height: .35rem;
        }
        .homePrice {
            color: red;
        }
        img {
            width: 70%;
        }
    }
</style>
