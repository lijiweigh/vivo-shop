import Vue from "vue";
import Router from "vue-router";

let about = () => import(/* webpackChunkName: "about" */ "./views/About.vue")
let Home = () => import(/* webpackChunkName: "about" */ "./views/Home.vue")
let Classify = () => import(/* webpackChunkName: "about" */ "./views/Classify.vue")
let News = () => import(/* webpackChunkName: "about" */ "./views/News.vue")
let My = () => import(/* webpackChunkName: "about" */ "./views/my.vue")
let Choose = () => import(/* webpackChunkName: "about" */ "./views/choose.vue")
let GoodsDetail = () => import(/* webpackChunkName: "about" */ "./views/GoodsDetail.vue")

Vue.use(Router);
let router =  new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
        path: "/classify",
        name: "classify",
        component: Classify
    },
    {
        path: "/news",
        name: "news",
        component: News
    },
    {
        path: "/my",
        name: "my",
        component: My
    },
    {
        path: "/choose/:type",
        name: "choose",
        component: Choose
    },
    {
        path: "/goodsDetail",
        name: "goodsDetail",
        component: GoodsDetail
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: about
    },
    {
        path: "*",
        redirect: "/home"
    }
  ]
});

router.beforeEach ((to, from, next) => {
    if ( to.matched.some(route => route.meta.requireLogin) ) {
        // 判断是否已经登录
        if (localStorage.getItem("loginUserBaseInfo")) {
            let lifeTime = JSON.parse( localStorage.getItem("loginUserBaseInfo") ).lifeTime
            let nowTime = new Date().getTime()
            // 登录状态没过期
            if (nowTime < lifeTime) {
                next()
            } else {
                // 登录状态过期了
                console("登录过期，请重新登陆")
                next("/login")
            }
        } else {
            // 没有登录就去登陆
            next({path: "/login"})
        }
    } else {
        next()
    }
})



export default router