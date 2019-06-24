<template>
    <div class="newsItem">
        <h3 class="title">{{news.newsTitle}}</h3>
        <img v-lazy="news.newsImg" alt="">
        <p class="content">{{news.newsCon}}</p>
        <p class="date">发布日期：{{news.newsTime}}</p>
    </div>
</template>

<script>
export default {
    name: "newsItem",
    props: ["news"]
}
</script>

<style lang="scss" scoped>
@import "../style/style.scss";
.newsItem {
    width: 100%;
    box-sizing: border-box;
    padding:  .2rem;
    @include setBorder(bottom);
}

.title {
    font-size: .35rem;
}
img {
    width: 100%;
    margin: .2rem auto;
}
.content, .date {
    color: #696969;
    font-size: .2rem;
    text-align: justify;
    margin-bottom: .2rem;
}

</style>
