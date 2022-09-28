<template>
  <div id="home">
    <nav-bar class="home-nav" >
      <div slot="center">Singclub</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar.vue';
  import {getHomeData} from 'network/home';
  import HomeSwiper from './childComps/HomeSwiper.vue';
 

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
     
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeData().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  
  .home-nav {
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;
    
  }
</style>
