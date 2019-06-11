<template>
  <div class="search">
    <router-link to="/check" tag="div" class="box2">
      <span class="iconfont icon-sousuo"></span>
      请输入关键字
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.search {
  @include background-color(#fff);
  @include rect(100%, auto);
  @include padding(.1rem 0);
  .box2 {
    @include rect(95%, .24rem);
    @include margin(auto);
    @include background-color(#e3e4e5);
    @include border-radius(.07rem);
    @include text-align();
    @include color(#999);
    @include font-size(50%);
  }
}
</style>
