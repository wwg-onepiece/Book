<template>
  <div class="footer">
    <div class="box3">
      <ul class="footer_nav">
        <router-link to="/home" tag="li">
          <p>首页</p>
        </router-link>
        <router-link to="" tag="li">
          <p>排行</p>
        </router-link>
        <router-link to="" tag="li">
          <p>书库</p>
        </router-link>
        <router-link to="" tag="li">
          <p>充值</p>
        </router-link>
      </ul>
      <p class="bottom">不良信息举报：jubao@zhangyue.com</p>
      <p class="bottom">举报电话：010-59845699</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.box3 {
  @include background-color(#3c3c3c);
  @include rect(100%, auto);
  @include flexbox();
  @include flex-direction(column);
  @include justify-content(space-around);
  @include align-items();
  @include line-height(.41rem);
  @include margin(.1rem 0 0);
  @include padding(.1rem 0);
  .footer_nav {
    @include rect(50%, auto);
    @include flexbox();
    @include justify-content(space-between);
    @include color(#fff);
    @include font-size(.15rem);
  }
  .bottom {
    @include color(#999);
    @include font-size(.13rem);
  }
}
</style>
