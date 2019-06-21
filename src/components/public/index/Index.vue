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
              <div class="tab-action" @click="dialogFormVisible = true">新增</div>
              <el-dialog title="新增用户" width="60%" class="dialog-title" :visible.sync="dialogFormVisible" :lock-scroll="lockScroll" :close-on-click-modal="closeOnClickModal">
                <index-user-add-component :data="data"></index-user-add-component>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
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
  data() {
    return {
      dialogFormVisible: false,
      lockScroll:false,
      closeOnClickModal:false
    };
  },
  components:{
    indexLeftComponent:left,
    indexTopComponent:top,
    indexRightComponent:right,
    indexUserAddComponent:userAdd
  },
  methods: {
  }
}
</script>

<style scoped>
  @import './css/index.css';
  @import '../global/css/tabinfo.css';
  @import '../global/css/dialog.css';
</style>
