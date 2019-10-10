<template>
  <div class="layoutIfon">
              <!--项目的 logo -->
    <div class="login">
      <img src="./logo_admin.png" alt />
    </div>
      <!-- 导航菜单栏 -->
        <!-- el-menu：管理所有的菜单栏选项 default-active：默认选中 @open：展开导航的事件 @cloas：关闭导航的事件 -->
        <!-- background-color： 导航栏的背景颜色 text-color: 导航中文本的颜色 active-text-color: 导航中被选中文本的颜色-->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :router="true">
            <el-menu-item index="/home">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">发布文章</el-menu-item>
          <el-menu-item index="1-2">内容列表</el-menu-item>
          <el-menu-item index="1-3">评论列表</el-menu-item>
            <el-menu-item index="1-4">素材列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <span>粉丝管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">图文数据</el-menu-item>
          <el-menu-item index="1-2">粉丝概况</el-menu-item>
          <el-menu-item index="1-3">粉丝画像</el-menu-item>
            <el-menu-item index="1-4">粉丝列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.layoutIfon {
  height: 100%;
  .login {
      height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    img{
        width: 120px
    }
  }
}
</style>
