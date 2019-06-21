<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="form">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      form: {
        name: '',
        region: '',
        password: '',
      }
    };
  }
}
</script>
<style scoped>
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
