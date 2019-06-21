<template>
  <div>
    <el-col :span="15">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-cooperation"></i>
            <span slot="title">运维管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="goTo('/fracong')">日志管理</el-menu-item>
            <el-menu-item index="2-2">参数管理</el-menu-item>
            <el-menu-item index="2-3">工具管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">菜单管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-user-solid"></i>
          <span slot="title">人员管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">角色管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  import $ from 'jquery'
  import {httpServiceIndex} from '../../../constant.js'
export default {
  data() {
    return {};
  },
  created(){
    this.initMenuList();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    },
    initMenuList() {
      $.ajax({
          url: httpServiceIndex+'/testuser/selectFracong/1',
          type: 'get',
          dataType: 'json',
          success: function (data) {
            console.log(data);
          },
          error: function(xhr, errorType, error) {
              alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
          }
      });
    }
  }
};
</script>

<style scoped>
  .el-col-15{
    width: 15%;
  }
</style>
