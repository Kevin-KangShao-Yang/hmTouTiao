<template>
  <div class="layoutTop" v-cloak>
    <el-col :span="14">
      <div class="grid-content bg-purple">
        <span>江苏传智播客教育科技股份有限公司</span>
      </div>
    </el-col>
    <el-col :span="6" :offset="4">
      <div class="grid-content bg-purple-light">
        <div class="dropDown">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <div class="imginfo">
                <img :src="userInfo.photo" alt />
                <span>{{userInfo.name}}</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  // 在模板渲染成html前调用
  created () {
    // 从 localstorage 中取出 userInfo
    this.userInfo = JSON.parse(window.localStorage.getItem('name'))
  }
}
</script>

<style lang='less' scoped>
.layoutTop {
  height: 100%;
  display: flex;
  align-items: center;
}

.bg-purple-light {
  display: flex;
  justify-content: flex-end;
  .imginfo {
    display: flex;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
[v-cloak] { display: none }
</style>
