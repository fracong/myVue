<template>
  <div>
    <el-dialog title="新增用户" width="60%" class="dialog-title" :visible.sync="dialogFormVisible" :lock-scroll="lockScroll" :close-on-click-modal="closeOnClickModal">
      <el-form :label-position="labelPosition" label-width="80px" ref="form" :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.name" class="input-width-35 input-right"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-select class="input-right" v-model="form.region" placeholder="请选择地区">
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="广州" value="guangzhou"></el-option>
            <el-option label="深圳" value="shenzhen"></el-option>
            <el-option label="武汉" value="wuhan"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" class="input-width-35 input-right" v-model="form.password" show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      lockScroll:false,
      closeOnClickModal:false,
      labelPosition: 'right',
      form: {
        name: '',
        region: 'shenzhen',
        password: '',
      }
    };
  },
  methods:{
    resetFields(formName){
      this.$refs[formName].resetFields();
    },
    clickDialogForm(){
      this.dialogFormVisible = true;
    }
  }
}
</script>
<style scoped>
  @import '../global/css/dialog.css';
  .el-form .el-form-item .input-right {
    float: left;
  }
  .input-width-35 {
    width: 35%;
  }
  .el-form-item{
    margin-left: 30px;
  }
</style>
