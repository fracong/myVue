<template>
  <div class="index">
    <div class="index-top">
      <img class="index-logo"src="./img/my_logo.png"/>
      <index-top-component :data="data"></index-top-component>
    </div>
    <div class="index-bottom">
      <el-row class="tac">
        <el-col :span="15">
          <index-left-component :data="data"></index-left-component>
        </el-col>
        <el-col :span="40">
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-col>
      </el-row>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import left from './left/Left.vue'
import top from './top/Top.vue'
export default {
  components:{
    indexLeftComponent:left,
    indexTopComponent:top
  }
}
</script>

<style scoped>
  @import './css/index.css';
  .el-col-15{
    width: 15%;
  }
  .el-col-40{
    width: 40%;
  }
</style>
