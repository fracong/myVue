<template>
  <div class="index">
    <div class="index-top">123</div>
    <div class="index-bottom">
      <index-left-component :data="data"></index-left-component>
    </div>
  </div>
</template>

<script>
import left from './left/Left.vue'
export default {
  components:{
    indexLeftComponent:left
  }
}
</script>

<style scoped>
  @import './css/index.css'
</style>
