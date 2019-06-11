<template>
<div class="register">
  <Nav><span slot="type">注册</span></Nav>
  <div class="box6">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        placeholder="手机号"
        :error-message="usernameState"
      >
        <van-icon slot="button" color="green" size="24px" :name="usernameicon" />
      </van-field>
      <van-cell-group>
        <van-field
          v-model="sms"
          required
          center
          clearable
          placeholder="短信验证码"
        >
          <van-button @click="sendCode" slot="button" size="small" type="primary" class="cc">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-field
        v-model="password"
        type="password"
        placeholder="密码"
        required
        :error-message="passwordState"
        clearable
      >
        <van-icon slot="button" color="green" size="24px" :name="passwordicon" />
      </van-field>
      <van-field
        v-model="password2"
        type="password"
        placeholder="确认密码"
        required
        :error-message="passwordState2"
        clearable
      >
        <van-icon slot="button" color="green" size="24px" :name="passwordicon2" />
      </van-field>
    </van-cell-group>
    <van-button class="btn" @click="register" size="large">提交</van-button>
    <p>点击注册即表明您已阅读并同意<span @click="agree">用户协议</span></p>
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
      password: '',
      password2: '',
      sms: '',
      code: '1'
    }
  },
  components: {
    Nav
  },
  computed: {
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    usernameicon () {
      if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return ''
      } else {
        return 'checked'
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else if (!(/^(\w){6,15}$/.test(this.password))) {
        return '！密码格式为6~15位数字、字母或下划线'
      } else {
        return ''
      }
    },
    passwordicon () {
      if (!(/^(\w){6,15}$/.test(this.password))) {
        return ''
      } else {
        return 'checked'
      }
    },
    passwordState2 () {
      if (this.password !== this.password2) {
        return '两次密码不一致！'
      } else {
        return ''
      }
    },
    passwordicon2 () {
      if (this.password !== this.password2 || this.password2 === '') {
        return ''
      } else {
        return 'checked'
      }
    }
  },
  methods: {
    agree () {
      this.$router.push('/Agreement')
    },
    sendCode () {
      if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        Toast('手机号输入错误')
      } else {
        this.getCode()
      }
    },
    getCode () {
      axios.get(`http://www.daxunxun.com/users/sendCode?tel=${this.username}`)
        .then(res => {
          if (res.data === 1) {
            Toast('该手机号已被注册')
          } else if (res.data === 0) {
            Toast('手机号验证码获取失败')
          } else {
            this.code = res.data.code
          }
        })
    },
    register () {
      if (this.sms !== this.code) {
        this.sms = ''
        Toast('验证码输入错误')
        return
      }
      if (this.usernameicon !== 'checked') {
        Toast('请输入正确的手机号')
        return
      }
      if (this.password !== 'checked') {
        Toast('请输入正确的密码')
        return
      }
      this.registerFn()
    },
    registerFn () {
      axios.post('http://www.daxunxun.com/users/register', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data === 0) {
          Toast('注册失败')
        } else if (res.data === 2) {
          Toast('用户名已注册')
        } else {
          Toast('注册成功')
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
html, body {
  @include rect(100%, 100%);
}

.register {
  @include rect(100%, 100%);
  .box6 {
    @include rect(100%, 100%);
    @include background-color(#f0f0f0);
    @include padding(.15rem 3% 0);
    .cc {
      @include color(#fff);
      @include padding(0 .05rem);
      @include font-weight(700);
    }
    .btn {
      @include background-color(#f26552);
      @include color(#fff);
      @include font-size(.16rem);
      @include border-radius(.04rem);
      @include margin(.3rem 0 0);
    }
    p {
      @include font-size(.13rem);
      @include color(#999);
      @include margin(.1rem 0 0);
      span {
        @include color(#f26552);
      }
    }
  }
}
</style>
