<template>
  <div class="index-top-left" style="float:right;">
    <el-row>
      <el-col :span="40">
        <el-menu :default-active="activeIndex"
          class="el-menu-demo"
          menu-trigger="hover/click"
          mode="horizontal"
          @select="handleSelect">
          <!--<el-menu-item index="1">处理中心</el-menu-item>-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              {{topName}}
            </template>
            <el-menu-item index="1-1">修改密码</el-menu-item>
            <el-menu-item index="1-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
     </el-row>
  </div>
</template>

<script>
  import {httpServiceIndex} from '../../constant.js'
  import axios from 'axios'
  export default {
    data(){
       return {
           topName:''
       }
    },
    mounted(){
      this.initTop();
    },
    methods: {
      initTop() {
         axios.get(httpServiceIndex+'/testuser/selectFracong/1')
          .then((response) => {
            console.log("name:"+response.data.name);
            this.topName = response.data.name;
          }).catch(function (error) {
            console.log(error);
          })
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style scoped>
  .el-menu.el-menu--horizontal {
    border-bottom:0px;
  }
</style>
