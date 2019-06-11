<template>
  <div class="login">
    <Nav><span slot="type">登录</span></Nav>
    <div class="content">
      <div class="logo">
        <img src="http://wap.yc.ireader.com.cn/static/images/dl_logo.png" alt="" class="dl_logo" />
      </div>
      <div class="data">
        <div class="top list">
          <span class="iconfont icon-yonghu"></span><input type="text" placeholder="手机号" v-model="username"><br/>
        </div>
        <div class="bt list">
          <span class="iconfont icon-mima"></span><input type="password" placeholder="密码" v-model="password">
        </div>
      </div>
      <div class="reg"><span @click="reg">立即注册</span></div>
      <van-button class="btn" @click="login" size="large">登录</van-button>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/common/Nav'
import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    Nav
  },
  methods: {
    reg () {
      this.$router.push('/Register')
    },
    login () {
      if (this.username === '') {
        Toast('请输入手机号')
        return
      }
      if (this.password === '') {
        Toast('请输入密码')
        return
      }
      if (!(/^1[3456789]\d{9}$/.test(this.username)) || !(/^(\w){6,15}$/.test(this.password))) {
        Toast('手机号或密码错误')
        return
      }
      this.loginFn()
    },
    loginFn () {
      axios.post('http://www.daxunxun.com/users/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data === 0) {
          Toast('登录失败')
        } else if (res.data === 2) {
          Toast('没有该用户')
        } else if (res.data === -1) {
          Toast('密码错误')
        } else {
          Toast('登录成功')
          this.$store.commit('changeLoginState', 'ok')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';

.login {
  @include rect(100%, 100%);
  @include background-color(#f0f0f0);
  .content {
    @include rect(100%, 100%);
    @include padding(0 .13rem);
    .logo {
      @include text-align();
      img {
        @include rect(.39rem, auto);
        @include margin(.25rem auto .2rem);
      }
    }
    .data {
      border:.01rem solid rgb(211, 210, 210);
      @include rect(100%, auto);
      @include background-color(#fff);
      @include padding(0 .1rem);
      .top {
        border-bottom: .01rem solid rgb(182, 181, 181);
      }
      div {
        @include rect(100%, auto);
        span {
          @include display(inline-block);
          @include rect(12%, auto);
          @include text-align();
          @include color(#999);
        }
        input {
          border: none;
          @include rect(88%, .4rem);
        }
      }
    }
    .reg {
      @include rect(100%, auto);
      @include margin(.12rem 0);
      @include flexbox();
      @include justify-content(flex-end);
      span {
        @include font-size(.13rem);
        @include color(#f26552);
      }
    }
    .btn {
      @include background-color(#f26552);
      @include color(#fff);
      @include rect(100%, .44rem);
      @include font-size(.15rem);
      @include border-radius(.05rem);
    }
  }
}
</style>
