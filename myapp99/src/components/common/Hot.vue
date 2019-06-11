<template>
  <div class="hot">
    <div class="top">
      <div class="left">
        <span class="iconfont icon-shugang"></span>
        <span class="hot_">热门推荐</span>
      </div>
      <div class="right">
        <span class="iconfont icon-huanyihuan"></span>
        <span class="change">换一换</span>
      </div>
    </div>
    <ul>
      <router-link to="" tag="li"  v-for="(item,index) in hotlist" :key="index">
        <div class="left"><img :src="item.book_cover" alt=""></div>
        <div class="right">
          <div class="title">
            <h3>{{ item.bookname }}</h3>
            <span>{{ item.author_name }}</span>
          </div>
          <div class="txt">{{ item.book_info }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['hotlist']
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.hot {
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
      .hot_ {
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
    @include flex-direction(column);
    li {
      @include flex();
      @include flexbox();
      @include rect(100%, 100%);
      @include justify-content(space-around);
      @include margin(0 0 .25rem 0);
      @include padding(0 .05rem);
      .left {
        img {
          @include rect(.89rem, auto);
        }
      }
      .right {
        @include flexbox();
        @include flex-direction(column);
        @include rect(68%, 1.18rem);
        @include justify-content(space-between);
        .title {
          h3 {
            @include font-size(.16rem);
            @include font-weight(100);
          }
          span {
            @include color(rgb(148, 147, 147));
            @include font-size(.14rem);
          }
        }
        .txt {
          @include color(rgb(148, 147, 147));
          @include font-size(.14rem);
          text-overflow: -o-ellipsis-lastline;
          @include overflow(hidden);
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
