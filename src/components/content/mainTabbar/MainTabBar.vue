<template>
  

  <tab-bar>
    
    <tab-bar-item path="/home" >
      
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/imgs/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/imgs/tabbar/home-active.png" alt="">
      <div slot="item-text">Home</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/imgs/tabbar/category.png" alt="">
      <img slot="item-icon-active" src="~assets/imgs/tabbar/category-active.png" alt="">
      <div slot="item-text">Cate</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/imgs/tabbar/cart.png" alt="">
      <img slot="item-icon-active" src="~assets/imgs/tabbar/cart-active.png" alt="">
      <div slot="item-text">Cart</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/imgs/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/imgs/tabbar/profile-active.png" alt="">
      <div slot="item-text">Profile</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'

    export default {
        name: "MainTabBar",
        components: {
            TabBar,TabBarItem
        }
    }
</script>

<style scoped>

</style>