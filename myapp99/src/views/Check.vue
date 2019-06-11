<template>
  <div class="check">
    <div class="box">
      <Nav><span slot="type">书库</span></Nav>
      <div class="c_box">
        <van-search
          v-model="value"
          placeholder="书名/作者/关键词"
          show-action
          class="txt"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch" class="suosou">搜索</div>
        </van-search>
      </div>
      <div class="condition">
        <span @click="open" class="txt">筛选条件</span>
        <div class="kind" ref="kind" style="display:none">
          <span class="iconfont icon-ptz-topleft"></span>
          <ul class="con_">
            <li v-for="(item,index) in kindlist" :key="index">
              <span class="con_l">{{ item.title }}</span>
              <div class="con_r">
                <span v-for="(items,index) in item.type" :key="index"> {{ items }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
      infinite-scroll-distance="6" class="c_box2">
        <router-link to="" tag="li" v-for="(item,index) in prolist" :key="index">
          <div class="left"><img :src="item.cover" alt=""></div>
          <div class="right">
            <div class="top">
              <div class="left_">
                <p class="title">{{ item.title }}</p>
                <span>{{ item.author }}</span>
              </div>
              <div class="time">{{ item.first_cid }}</div>
            </div>
            <div class="txt">{{ item.desc }}</div>
          </div>
        </router-link>
      </ul>
      <Footer />
    </div>
    <BackTop :scrollmyself='true'/>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Nav from '@/components/common/Nav'
import BackTop from '@/BackTop'
import Footer from '@/components/common/Footer'
import { InfiniteScroll } from 'mint-ui'

Vue.use(InfiniteScroll)
export default {
  data () {
    return {
      value: '',
      prolist: [],
      kindlist: []
    }
  },
  components: {
    Nav,
    BackTop,
    Footer
  },
  methods: {
    open () {
      // console.log(this.$refs.kind.style.display)
      if (this.$refs.kind.style.display == 'none') {
        this.$refs.kind.style.display = 'block'
      } else {
        this.$refs.kind.style.display = 'none'
      }
    },
    onSearch () {},
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.prolist[this.prolist.length - 1]
        for (let i = 1; i <= 6; i++) {
          this.prolist.push(last + i)
        }
        this.loading = false
      }, 2500)
    }
  },
  mounted () {
    axios.get('http://localhost:8080/json/data.json').then(res => {
      console.log(res.data)
      // this.prolist = res.data[9]
      this.kindlist = res.data[10]
    }).catch(err => {
      console.log(err)
    })
    axios.get('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sddetail&sdid=46695&p=1&shuqi_h5=&onlyCpBooks=1&_=1560136759989').then(res => {
      console.log(res.data.data)
      this.prolist = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';

.active {
  @include color(#fff);
  @include background-color(#f26552);
  @include font-size(.12rem);
  @include border-radius(.04rem);
}
.check {
  @include overflow();
  @include flexbox();
  @include rect(100%, auto);
  @include flex-direction(column);
  .box{
    .c_box {
      @include rect(100%, 0.55rem);
      @include padding(0 .1rem 0 0);
      border-bottom:.01rem solid #f3a870;
      .van-search.van-search--show-action {
        .van-search__content.van-search__content--square {
          @include background-color(#f0f0f0);
          @include border-radius(.06rem 0 0 .06rem);
          @include color(#999);
        }
      }
      .van-search__action {
        @include background-color(#f3a870);
        @include border-radius(0 .06rem .06rem 0);
        @include padding(0 .16rem);
        @include font-size(.16rem);
        @include color(#fff);
      }
    }
    .condition {
      @include padding(.18rem);
      position:relative;
      .txt {
        @include color(#f26552)
      }
      .kind {
        @include rect(3.75rem, 2.48rem);
        @include background-color(#ffefed);
        position:absolute;
        left:0;
        top:.5rem;
        box-shadow:rgb(201, 200, 200) 1px 2px 4px 2px;
        .iconfont.icon-ptz-topleft {
          @include color(#ffe7e4);
          @include font-size(.24rem);
          position:absolute;
          top:-.15rem;
          left:.5rem;
          z-index: -1;
        }
        .con_ {
          @include flexbox();
          @include flex-direction(column);
          @include justify-content(space-around);
          @include rect(100%, 80%);
          @include margin(.2rem 0 0 .12rem);
          li {
            @include line-height(.16rem);
            @include flexbox();
            .con_l {
              @include color(#f26552);
              @include margin(.06rem 0);
            }
            .con_r {
              @include margin(0 0 0 .2rem);
              @include display(inline-block);
              @include color(#666);
              @include rect(70%, auto);
              span {
                &:nth-child(1) {
                  @include color(#fff);
                  @include background-color(#f26552);
                  @include font-size(.12rem);
                  @include border-radius(.1rem);
                }
                float:left;
                @include padding(.02rem .08rem);
                @include margin(.06rem .07rem);
              }
            }
          }
        }
      }
    }
    .c_box2 {
      @include flexbox();
      @include rect(100%, auto);
      @include flex-direction(column);
      @include margin(.06rem 0);
      li {
        @include flex();
        @include flexbox();
        @include rect(100%, 100%);
        @include justify-content(space-around);
        @include margin(0 0 .2rem 0);
        @include padding(0 .05rem);
        .left {
          img {
            @include rect(.8rem, auto);
          }
        }
        .right {
          @include flexbox();
          @include flex-direction(column);
          @include rect(68%, 1.06rem);
          @include justify-content(space-between);
          .top {
            @include flexbox();
            @include justify-content(space-between);
            .left_ {
              .title {
                @include font-size(.15rem);
              }
              span {
                @include color(rgb(148, 147, 147));
                @include font-size(.13rem);
              }
            }
            .time {
              @include color(rgb(148, 147, 147));
              @include font-size(.13rem);
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
}
</style>
