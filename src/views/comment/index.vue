<template>
  <div class="info">
    <el-container>
      <el-aside width="200px">
          <layoutleft />
      </el-aside>
      <el-container>
        <el-header>
            <layouttop />
        </el-header>
          <!-- 将来请求 home, index, publish ... 路径时，优先加载 layout ，-->
                    <!-- 加载完 layout 之后再用 home, index, publish 组件替换掉 layout 中的 router-view -->
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入两个布局组件
import layoutleft from './layout/layoutleft'
import layouttop from './layout/layouttop'

export default {
  components: {
    layoutleft,
    layouttop
  }
}
</script>

<style lang='less' scoped>
.info{
    height: 100%;
    // & 去掉选择器后的空格
    // > 子代码选项器   .less用法
    &>.el-container{
        height: 100%;
    }
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  height: 50px !important;  //!important 最高层级,覆盖掉插件自动写好在标签中的style中的属性
}
.el-aside {
  background-color: #d3dce6;
  color: #333;

}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
