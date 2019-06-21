<template>
  <div>
    <el-dialog title="新增用户" width="60%" class="dialog-title" :visible.sync="dialogFormVisible" :lock-scroll="lockScroll" :close-on-click-modal="closeOnClickModal">
      <el-form :label-position="labelPosition" :rules="rules" label-width="80px" ref="form" :model="form">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" class="input-width-35 input-right" ></el-input>
        </el-form-item>
        <el-form-item label="地区" prop="region">
          <el-select class="input-right" v-model="form.region" placeholder="请选择地区" >
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="广州" value="guangzhou"></el-option>
            <el-option label="深圳" value="shenzhen"></el-option>
            <el-option label="武汉" value="wuhan"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" class="input-width-35 input-right"  v-model="form.password" show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeUserAdd('form')">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      lockScroll:false,//不锁定底层页面的滚轮
      closeOnClickModal:false,//点击底层页面，页面不关闭
      labelPosition: 'right',
      form: {
        name: '',
        region: '',
        password: '',
      },
      rules: {//校验的规则，prop上的值一致
       name: [
         { required: true, message: '请输入用户名', trigger: 'blur' },
         { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
       ],
       region: [
         { required: true, message: '请选择地区', trigger: 'change' }
       ],
       password: [
         { type: 'string', required: true, message: '请填写密码', trigger: 'change' },
         { min: 6, max: 32, message: '密码长度在 6 到 32 个字符', trigger: 'blur' }
       ]
      }
    };
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {//提交时进行校验
        if (valid) {
          alert('submit!');
          this.dialogFormVisible = false;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    closeUserAdd(formName){
      this.$refs[formName].resetFields();//清空表单，清空的值包含prop属性，且prop属性必须标记在el-form-item上
      this.dialogFormVisible = false;
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
