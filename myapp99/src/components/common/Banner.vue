<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="@/assets/banner1.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner2.jpg" alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss">
.banner {
  img {
    width: 100%;
  }
}
</style>
