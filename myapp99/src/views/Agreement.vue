<template>
  <div class="agreement">
    <Nav><span slot="type">用户协议</span></Nav>
    <div class="txt">
      <h2>用户协议</h2>
      <p>您只有无条件接受以下所有服务条款，才能申请掌阅小说网注册帐号<br>1. 特别提示<br>掌阅小说网同意按照本协议的规定及其不时发布的操作规则提供基于互联网的相关服务(以下称"网络服务")，为获得网络服务，服务使用人(以下称"用户")同意本协议的全部条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击"同意"按钮即表示用户完全接受本协议项下的全部条款。这些条款可由掌阅小说网域名所有者随时更新，本服务协议一旦发生变动，掌阅小说网将会在相关的页面上提示修改内容。修改后的服务协议一旦在页面上公布即有效代替原来的服务协议。用户可随时造访查阅最新服务协议。用户在使用掌阅小说网提供的各项服务之前，应仔细阅读本服务协议，如用户不同意本服务协议及/或随时对其的修改，用户可以主动取消掌阅小说网提供的服务。<br>2. 服务内容<br>2.1 掌阅小说网网络服务的具体内容由掌阅小说网根据实际情况提供，例如文学作品阅读、论坛(BBS)、聊天室、电子邮件、发表新闻评论等。掌阅小说网保留随时变更、中断或终止部分或全部网络服务的权利。<br>2.2 掌阅小说网在提供网络服务时，可能会对部分网络服务(例如VIP作品阅读)的用户收取一定的费用。在此情况下，掌阅小说网会在相关页面上做明确的提示。如用户拒绝支付该等费用，则不能使用相关的网络服务。<br>2.3 用户理解，掌阅小说网仅提供相关的网络服务，除此之外与相关网络服务有关的设备(如电脑、调制解调器及其他与接入互联网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费)均应由用户自行负担。<br>3.使用规则</p>

    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';

.agreement {
  @include overflow();
  @include background-color(#f0f0f0);
  .txt {
    @include background-color(#fff);
    @include padding(.14rem .12rem);
    h2 {
      @include font-size(.16rem);
      @include line-height(.36rem);
    }
    p {
      @include color(#666);
      @include line-height(.22rem);
    }
  }
}
</style>
