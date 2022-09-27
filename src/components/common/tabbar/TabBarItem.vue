<template>
  <div class="tab-bar-item" @click="itemClick">
    
    <slot v-if="!isActive" name="item-icon"></slot>
    
    <slot v-else name="item-icon-active"></slot>
    <div :style="isStyleActive">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: {
                type: String,
            },
            activeStyle: {
                type: String,
                default: 'coral'
            }
        },
        data () {
            return {
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path)
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            isStyleActive() {
                return this.isActive ? {color:this.activeStyle} : {}
            }
        }
    }
</script>

<style scoped>

.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .actived {
    color:coral;
    font-weight: bolder;
  }

</style>