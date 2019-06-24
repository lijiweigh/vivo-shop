<template>
    <div class="news">
        <header-plugin :title="'动态'"></header-plugin>
        <div class="content">
            <news-item v-for="(item, index) in newsList" :key="index" :news="item"></news-item>
        </div>
        <footer-plugin></footer-plugin>
    </div>
</template>

<script>
import footerPlugin from "@/components/footer";
import headerPlugin from "@/components/header";
import newsItem from "@/components/newsItem";
import axios from "../server/request/axios"

export default {
    name: "news",
    data() {
        return {
            newsList: []
        }
    },
    components: {
        footerPlugin,
        headerPlugin,
        newsItem
    },
    created () {
        axios.get("/api/ceshi.json").then (res => {
            this.newsList = res.data.data.news
        })
    }
}
</script>

<style lang="scss" scoped>
.news {
    padding: 1rem 0 1rem 0;
}
</style>
