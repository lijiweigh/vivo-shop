<template>
    <div class="home">
        <div class="fixedTop"><i class="iconfont icon-VIVO"></i></div>
        <div class="official"><img class="official-img" v-lazy="'/static/img/official.png'" alt=""></div>
        <div class="swiper">
            <swiper :imgs="imgs"></swiper>
        </div>
        <div class="showList">
            <div class="imgWrap" v-for="(item, index) in showList" @click="listClick(item)" :key="index" >
                <img v-lazy="item.src" alt="">
            </div>
        </div>
        <div class="products">
            <div class="head">
                <h5 class="boom">爆款产品</h5>
                <div class="imgHead"><img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180405/20180405101609299910_original.jpg" alt=""></div>
            </div>
            <div class="productsList">
                <product-item v-for="(item, index) in products_list" :key="index" :item="item"></product-item>
            </div>
        </div> 

        <footer-plugin></footer-plugin>
    </div>
    
</template>

<script>
// @ is an alias to /src

import axios from "@/server/request/axios";
import swiper from "@/components/swiper";
import footerPlugin from "@/components/footer";
import productItem from "@/components/productItem";

export default {
  name: "home",
  data () {
      return {
          imgs: [
              "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg",
              "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
          ],
          showList: [
              {src: "/static/img/xuangou.jpg",name: "choose",type: 0},
              {src: "/static/img/peijian.jpg",name: "choose",type: 1},
              {src: "/static/img/pingbao.jpg",name: "choose",type: 0},
              {src: "/static/img/dingzhi.jpg",name: "choose",type: 0}
          ],
          products_list: []
      }
  },
  components: {
      swiper,
      footerPlugin,
      productItem
  },
  methods: {
      listClick (item) {
          this.$router.push({ name: item.name, params:{type: item.type} })
      },
      getData () {
          axios.get ("/api/ceshi.json").then (res => {
              console.log(res.data.data.home)
              this.products_list = res.data.data.home
          })
      }
  },
  mounted () {
      this.getData ()
  }
};
</script>

<style lang="scss" scoped>
@import "../style/style.scss";

.fixedTop {
    position: fixed;
    top: 0;
    left: 0;
    height: 1rem;
    width: 100%;
    line-height: 1rem;
    padding-left: .2rem;
    background: #fff;
    z-index: 888;
}

.home {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.official {
    @include setBorder(top);
}

.official-img {
    width: 100%;
}

.showList {
    display: flex;
    @include setBorder(bottom);

    .imgWrap {
        width: 25%;
        height: 1.52rem;
        box-sizing: border-box;
        flex: 1;
        display: flex;
        justify-content: center;
    }
    img {
        width: 65%;
        padding: .2rem 0;
        
    }
}

.products {
    .head {
        .boom {
            margin: .3rem 0 .5rem .2rem;
        }

        .imgHead {
            width: 100%;
            padding-bottom: .1rem;
            @include setBorder(bottom);
            img {
                width: 100%;
            }
        }
    }
}

</style>
