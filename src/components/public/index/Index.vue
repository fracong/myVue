<template>
  <div class="index">
    <div class="index-top">{{haha1}}</div>
    <div class="index-left" @click="aaa"></div>
    <div class="index-right"></div>
  </div>
</template>

<script>
  import {httpIndex} from '../login/js/login.js'
  import $ from 'jquery'
  export default {
    data(){
      return {
        haha1:"11",
      }
    },
    methods:{
      aaa:function(){
        alert($(".index-top").html())
        alert(httpIndex);
      }
    }
  }
</script>

<style scoped>
  @import './css/index.css'
</style>
