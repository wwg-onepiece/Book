<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
html, body, #app {
  @include rect(100%, 100%);
}

#app {
  @include flexbox();
  @include flex-direction(column);
  .container {
    @include flex();
    @include flexbox();
    @include flex-direction(column);
    @include rect(100%, auto);
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow();
    }
  }
}
</style>
