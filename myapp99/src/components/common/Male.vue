<template>
  <div class="male">
    <div class="top">
      <div class="left">
        <span class="iconfont icon-shugang"></span>
        <span class="male_" v-for="(item,index) in top" :key="index">{{ item }}</span>
      </div>
      <div class="right">
        <span class="iconfont icon-huanyihuan"></span>
        <span class="change">换一换</span>
      </div>
    </div>
    <ul>
      <router-link to="" tag="li"  v-for="(item,index) in malelist" :key="index">
        <img :src="item.src" alt="">
        <span>{{ item.title }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['malelist', 'top']
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.male {
  @include background-color(#fff);
  @include margin(.1rem 0 0);
  .top {
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    @include padding(0 .1rem);
    @include line-height(.5rem);
    .left {
      .iconfont.icon-shugang {
        @include color(#f5422a);
        @include margin(0 .05rem 0 0);
      }
      .male_ {
        @include font-size(.16rem);
      }
    }
    .right {
      @include color(rgb(245, 174, 111));
      .iconfont.icon-huanyihuan{
        @include font-size(.24rem);
        @include margin(0 .05rem 0 0);
      }
      .change {
        @include font-size(.15rem);
      }
    }
  }
  ul {
    @include flexbox();
    @include rect(100%, auto);
    @include flex-wrap(wrap);
    @include justify-content(space-around);
    li {
      @include flex();
      @include flexbox();
      @include rect(100%, 100%);
      @include margin(0 0 .25rem 0);
      @include flex-direction(column);
      @include align-items();
      @include text-align();
      img {
        @include rect(1.11rem, auto);
        @include margin(0 0 .06rem 0);
      }
      span {
        @include rect(1.06rem, auto);
        @include font-size(.15rem);
        white-space: nowrap;
        text-overflow: ellipsis;
        @include overflow(hidden);
        word-break: break-all;
      }
    }
  }
}
</style>
