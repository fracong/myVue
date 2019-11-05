<template>
  <div>
    <el-col :span="85">
      <div class="tab-info index-bottom-right">
        <div class="tab-info-top">
          <div class="tab-title">人员表格</div>
          <div class="tab-action" @click="handleAddUser">新增</div>
          <index-user-add-component ref="addUser"></index-user-add-component>
        </div>
        <index-user-table-list-component :data="data"></index-user-table-list-component>
      </div>
    </el-col>
  </div>
</template>
<script>
import userTableList from './UserTableList.vue'
import userAdd from './userAdd.vue'
export default {
  components:{
    indexUserTableListComponent:userTableList,
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
  @import '../global/css/tabinfo.css';
  .el-col-85{
    width: 85%;
  }
  .index .index-bottom-right{
    padding: 10px 10px 0 10px;
  }
</style>
