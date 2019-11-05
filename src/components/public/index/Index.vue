<template>
  <div class="index">
    <index-top-component></index-top-component>
    <div class="index-bottom">
      <el-row class="tac">
        <index-left-component></index-left-component>
        <index-user-index-component></index-user-index-component>
      </el-row>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import left from '../global/include/left/Left.vue'
import top from '../global/include/top/Top.vue'
import userIndex from '../user/UserIndex.vue'
export default {
  components:{
    indexLeftComponent:left,
    indexTopComponent:top,
    indexUserIndexComponent:userIndex
  }
}
</script>

<style scoped>
  .index .index-bottom {
    margin-top: 70px;
  }
</style>
