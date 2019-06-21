<template>
  <div class="index">
    <div class="index-top">
      <img class="index-logo" src="./img/my_logo.png"/>
      <index-top-component :data="data"></index-top-component>
    </div>
    <div class="index-bottom">
      <el-row class="tac">
        <el-col :span="15">
          <index-left-component :data="data"></index-left-component>
        </el-col>
        <el-col :span="85">
          <div class="tab-info index-bottom-right">
            <div class="tab-info-top">
              <div class="tab-title">人员表格</div>
              <div class="tab-action" @click="handleAddUser">新增</div>
              <index-user-add-component ref="addUser"></index-user-add-component>
            </div>
            <index-right-component :data="data"></index-right-component>
            <el-pagination
              :page-size="20"
              :pager-count="11"
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import left from './left/Left.vue'
import top from './top/Top.vue'
import right from './right/Right.vue'
import userAdd from '../user/userAdd.vue'
export default {
  components:{
    indexLeftComponent:left,
    indexTopComponent:top,
    indexRightComponent:right,
    indexUserAddComponent:userAdd
  },
  methods: {
    handleAddUser(){
      this.$refs.addUser.clickDialogForm();
    }
  }
}
</script>

<style scoped>
  @import './css/index.css';
  @import '../global/css/tabinfo.css';
</style>
