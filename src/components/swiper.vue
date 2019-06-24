<template>
    <div class="swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in imgs" :key="index" >
                    <img :src="item" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    name: "swiper",
    props: ["imgs"],
    mounted () {
        this.init()
    },
    methods: {
        init () {
                let mySwiper = new Swiper ('.swiper-container', {
                // Optional parameters
                
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

            })
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    height: 5.14rem;
    img {
        width: 100%;
    }
}
</style>

