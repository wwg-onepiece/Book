<template>
  <div class="vip">
    <div class="top">
      <div class="left">
        <span class="iconfont icon-shugang"></span>
        <span class="vip"><slot name="top"></slot></span>
      </div>
      <div class="right">
        <span class="change">全部</span>
        <span class="iconfont icon-icon1"></span>
      </div>
    </div>
    <div class=ranking>
      <router-link to="" tag="li" class="first" v-for="(item,index) in first" :key="index">
        <span class="iconfont icon-shuzi1"></span>
        <div class="left"><img :src="item.src" alt=""></div>
        <div class="right">
          <div class="title">
            <p>{{ item.title }}</p>
            <span>{{ item.author }}</span>
          </div>
          <div class="txt">{{ item.txt }}</div>
        </div>
      </router-link>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="l_">
            <span :class="item.id"></span>
            <span class="title">{{ item.title}}</span>
          </div>
          <span class="r_">{{ item.author }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['first', 'list']
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.vip {
  @include rect(100%, auto);
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
      .vip {
        @include font-size(.16rem);
      }
    }
    .right {
      @include color(rgb(250, 183, 124));
      .iconfont.icon-huanyihuan{
        @include font-size(.24rem);
        @include margin(0 .05rem 0 0);
      }
      .change {
        @include font-size(.14rem);
      }
    }
  }
  .ranking {
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    .first {
      @include flex();
      @include flexbox();
      @include rect(100%, 100%);
      @include justify-content(space-around);
      @include padding(.08rem .05rem);
      .iconfont.icon-shuzi1{
        @include color(rgba(250, 7, 7, 0.89));
      }
      .left {
        img {
          @include rect(.8rem, auto);
        }
      }
      .right {
        @include flexbox();
        @include flex-direction(column);
        @include rect(60%, 1rem);
        @include justify-content(space-between);
        .title {
          p {
            @include font-size(.15rem);
          }
          span {
            @include color(rgb(148, 147, 147));
            @include font-size(.13rem);
          }
        }
        .txt {
          @include color(rgb(148, 147, 147));
          @include font-size(.13rem);
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
    ul{
      @include rect(100%, auto);
      @include flexbox();
      @include flex-direction(column);
      @include padding(0 0 .12rem 0);
      li {
        @include rect(100%, auto);
        @include flexbox();
        @include justify-content(space-between);
        @include padding(.06rem .12rem);
        .l_{
          .iconfont {
            @include margin(0 .15rem 0 0);
          }
          .iconfont.icon-shuzi2 {
            @include color(#FFD700);
          }
          .iconfont.icon-shuzi3 {
            @include color(#87CEEB);
          }
          .iconfont.icon-shuzi4 {
            @include color(#D3D3D3);
          }
          .iconfont.icon-shuzi5 {
            @include color(#D3D3D3);
          }
          .title {
            @include font-size(.15rem);
          }
        }
        .r_ {
          @include color(rgb(148, 147, 147));
          @include font-size(.13rem);
        }
      }
    }
  }
}
</style>
