<template>
  <div class="container">
    <div class="content">
      <header class="header">
        <router-link to="/home" class="box">
          <img class="logo" src="@/assets/logo.png" />
        </router-link>
        <ul>
          <router-link to="/male" tag="li">
            <span>男频</span>
          </router-link>
          <router-link to="/female" tag="li">
            <span>女频</span>
          </router-link>
          <router-link to="/ranking" tag="li">
            <span>排行</span>
          </router-link>
          <router-link to="/bookhome" tag="li">
            <span>书库</span>
          </router-link>
          <router-link to="/recharge" tag="li">
            <span>充值</span>
          </router-link>
          <router-link to="login">
            <span class="iconfont"></span>
          </router-link>
        </ul>
        <span class="iconfont icon-wode"></span>
      </header>
      <Search />
      <Banner />
      <div class="laba">
        <span class="iconfont icon-2"></span>
        <span class="new">新风尚征文大赛钻石排行榜</span>
      </div>
      <hot :hotlist="hotlist"/>
      <male :malelist="malelist" :top="mtop"/>
      <male :malelist="femalelist" :top="ftop"/>
      <Vip :first="vfirst" :list="vlist"><span slot="top">会员冲击榜单</span></Vip>
      <Vip :first="hfirst" :list="hlist"><span slot="top">鲜花榜</span></Vip>
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Hot from '@/components/common/Hot'
import Male from '@/components/common/Male'
import Search from '@/components/common/Search'
import Vip from '@/components/common/Vip'
import Footer from '@/components/common/Footer'
import Banner from '@/components/common/Banner'

export default {
  data () {
    return {
      hotlist: [],
      mtop: [],
      ftop: [],
      malelist: [],
      femalelist: [],
      vfirst: {},
      vlist: [],
      hfirst: [],
      hlist: []
    }
  },
  mounted () {
    axios.get('http://localhost:8080/json/data.json').then(res => {
      // this.hotlist = res.data[0]
      this.mtop = res.data[1]
      this.ftop = res.data[2]
      this.malelist = res.data[3]
      this.femalelist = res.data[4]
      this.vfirst = res.data[5]
      this.vlist = res.data[6]
      this.hfirst = res.data[7]
      this.hlist = res.data[8]
    })
    axios.get('https://www.apiopen.top/novelApi').then(res => {
      // console.log(res.data.data)
      this.hotlist = res.data.data
    })
    axios.get('https://www.apiopen.top/novelInfoApi?name=%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0').then(res => {
      console.log(res.data.data)
    })
  },
  components: {
    Hot,
    Male,
    Search,
    Vip,
    Footer,
    Banner
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
html, body {
  @include rect(100%, 100%);
}

.container {
  @include background-color(rgb(241, 241, 241));
  @include overflow();
  @include flexbox();
  @include rect(100%, auto);
  @include flex-direction(column);
  .content {
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#f26552);
      @include flexbox();
      @include justify-content();
      @include align-items();
      @include padding(0 2%);
      .box {
        @include rect(24%, auto);
        .logo {
          @include rect(70%, 50%);
        }
      }
      ul {
        @include flex();
        @include rect(80%, 100%);
        @include flexbox();
        @include justify-content();
        @include align-items();
        li {
          @include flex();
          @include font-size(.16rem);
          @include color(#fff);
          span {
            @include display(inline-block);
            @include rect(100%, 100%);
          }
        }
      }
      span {
        @include color(#fff);
      }
    }
    .laba {
      @include background-color(#fff);
      @include line-height(.34rem);
      @include font-size(.12rem);
      border-bottom: .01rem solid rgb(214, 213, 213);
      .iconfont.icon-2 {
        @include color(#f26552);
        @include margin(0 .05rem 0 .1rem);
      }
      .new {
        @include color(#666);
      }
    }
  }
}
</style>
