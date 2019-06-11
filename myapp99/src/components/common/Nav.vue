<template>
  <div class="nav">
    <div class="left">
      <span class="iconfont icon-iconfontyoujiantou" @click="goHome"></span>
      <span class="title"><slot name="type"></slot></span>
    </div>
    <div class="right">
      <span class="iconfont icon-fangzi" @click="goHome"></span>
      <span class="iconfont icon-wode" @click="reg"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push('/home')
    },
    reg () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.nav {
  @include rect(100%, .44rem);
  @include background-color(#f26552);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include color(#fff);
  .left {
    span {
    @include padding(0 .08rem);
    }
    .iconfont.icon-iconfontyoujiantou {
      @include font-size(.18rem);
    }
    .title {
      @include font-size(.16rem);
    }
  }
  .right {
    span {
    @include padding(0 .1rem);
    }
    .iconfont {
      @include font-size(.18rem);
    }
  }
}
</style>
