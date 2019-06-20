<template>
  <el-table
    :data="tableData"
    height="auto"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2013-01-03',
          name: 'fracong1',
          address: '北京市石景山区古城地铁站'
        }, {
          date: '2011-02-02',
          name: 'fracong2',
          address: '北京市石景山区古城地铁站'
        }, {
          date: '2012-05-04',
          name: 'fracong3',
          address: '北京市石景山区古城地铁站'
        }, {
          date: '2014-01-05',
          name: 'fracong4',
          address: '北京市通州区通州北苑地铁站'
        }, {
          date: '2016-05-08',
          name: 'fracong5',
          address: '北京市通州区通州北苑地铁站'
        }, {
          date: '2016-05-06',
          name: 'fracong6',
          address: '北京市通州区通州北苑地铁站'
        }, {
          date: '2016-05-07',
          name: 'fracong7',
          address: '北京市通州区通州北苑地铁站'
        }, {
         date: '2016-05-07',
         name: 'fracong8',
         address: '北京市昌平区回龙观地铁站'
        }, {
          date: '2016-05-07',
          name: 'fracong9',
          address: '北京市昌平区回龙观地铁站'
        }, {
           date: '2016-05-07',
           name: 'fracong10',
           address: '北京市昌平区回龙观地铁站'
        }]
      }
    }
  }
</script>
