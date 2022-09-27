<template>
  <div id="home">
    <nav-bar class="home-nav" >
      <div slot="center">Singclub</div>
    </nav-bar>
    
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar.vue';
  import {getHomeData} from 'network/home'

  export default {
    name: 'Home',
    components: {
      NavBar
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeData().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: relative;
    top: 0;
    
  }
</style>
