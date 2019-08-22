<template>
  <div id="box">
    <el-container class="box">
      <el-header height="55px" class="header">
        <div class="header-left"><a href="#"><img src="../assets/img/logo.png" alt=""></a></div>
        <div class="header-right">
          <div class="header-right-left"><a href="#"><i class="el-icon-s-tools"></i><span slot="title">沙发等等</span></a></div>
          <ul class="header-right-right">
            <li><a href="#"><i class="el-icon-message">通知</i></a></li>
            <li><a href="#"><i class="el-icon-upload2">购买/升级</i></a></li>
            <li><a href="#"><img src="../assets/img/phoneicon.png" alt=""></a></li>
            <li><a href="#"><i class="el-icon-upload2">购买/升级</i></a></li>
            <li><a href="#"><i class="el-icon-upload2">购买/升级</i></a></li>
          </ul>
        </div>
      </el-header>
      <el-container>
        <el-aside width="180px">
          <el-col>
            <el-menu class="el-menu-vertical-demo" active-text-color="#ffffff" :router="true">
              <el-menu-item index="/">
                <template slot="title"><i class="el-icon-s-home"></i>首页</template>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-receiving"></i><span>产品管理</span></template>
                <el-menu-item index="/categroy"><i class="el-icon-shopping-cart-full"></i>产品分类</el-menu-item>
                <el-submenu index="2-11">
                  <template slot="title"><i class="el-icon-s-marketing"></i><span>分析报表</span></template>
                  <el-menu-item index="2-11-1"><i class="el-icon-document"></i></el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title"><i class="el-icon-setting"></i><span>系统管理</span></template>
                <el-menu-item index="/team">组织结构</el-menu-item>
                <el-menu-item index="/person">员工管理</el-menu-item>
                <el-menu-item index="/tree">树形结构</el-menu-item>
                <el-menu-item index="/tree2">树形结构</el-menu-item>
              </el-submenu>
            </el-menu>

          </el-col>
        </el-aside>
        <!--                <el-container>-->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!--                </el-container>-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  #box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .box{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
  }
  .el-header{
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-menu-item {
    width: 180px;
    background-color: #2b3647;
    color: #a0abbf;
    width: auto;
  }
  .el-submenu{
    background: #2b3647;
    width: auto;
  }
  .el-submenu > .el-submenu__title > span{
    color: #a0abbf;
  }
  .el-aside {
    background-color: #2b3647;
    overflow:auto;
    position: absolute;
    top: 55px;
    bottom: 0;
  }
  .el-main {
    background-color: #ecf0f5;
    color: #333;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    top: 55px;
    bottom: 0;
    left: 180px;
    right: 0;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .header{
    width: 100%;
    height: 55px;
    padding: 0;
  }
  .header-left{
    width: 180px;
    height: 100%;
    background: #2b3647;;
    float: left;
  }
  .header-left > a{
    width: 100%;
    height: 100%;
    display: block;
  }
  .header-left a img{
    width: 140px;
    margin: -10px 0 0 -15px;
  }
  .header > .header-right{
    width: calc(100% - 180px);
    line-height: 55px;
    color: #9ba3af;
    height: 53px;
    float: right;
    font-size: 13px;
    padding: 0 1%;
    box-sizing: border-box;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
  }
  .header-right > .header-right-left{
    float: left;
  }
  .header-right-left a {
    color: #9ba3af;
  }
  .header-right .header-right-right{
    float: right;
  }
  .header-right .header-right-right >li{
    float: left;
    padding: 15px;
    line-height: 20px;
  }
  .header-right .header-right-right > li a{
    color: #9ba3af;
  }
  .header-right .header-right-right > li a >img{
    width: 28px;
    height: 28px;
    margin-top: -5px;
  }
</style>