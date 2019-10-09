<template>
  <!-- 登录页面 -->
  <div class="login">
            <!-- logo 区域 -->
    <div class="loginHost">
      <div class="loginImg">
        <img src="./logo_index.png" alt />
      </div>
       <!-- el-form: 管理所有表单元素的父容器  ref: vue 中提供的操作 dom 的方式 model: 表单元素的数据源 label-width： 描述文本的宽度 -->
      <el-form ref="form" :model="form" :rules="rules">
               <!-- el-form-item：表单域 label: 当前选项的描述文字 -->
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="code">
                <!-- 一行 -->
          <el-row>
            <el-col :span="14">
              <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8" :offset="2">
                  <!-- timer: 2 (定时器的标识) 定时器开启 timer: null 定时器关闭 -->
                  <!-- !!timer 隐式转换,最后的值就是布尔值 -->
              <el-button
                type="primary"
                plain
                class="btnCode"
                @click="verifyBtn('form')"
                :disabled="!!timer"
              >{{timer?`${timeNum}s发送`:'发送验证码'}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="region">
          <el-checkbox v-model="form.region">
            我已阅读并同意
            <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
              <a href="#" slot="reference">用户协议</a>
            </el-popover>和
            <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
              <a href="#" slot="reference">隐私条款</a>
            </el-popover>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="btnLogins"
            @click="submitForm('form')"
            :loading="loadingBtn"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单的参数
      form: {
        mobile: '',
        code: '',
        region: ''
      },
      // 定义规则
      rules: {
        mobile: [
          // 必填
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          // 限制长度
          { min: 11, max: 11, message: '长度在11位数', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度在6位数', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请勾选已阅读并同意用户协议和隐私条款', trigger: 'change' },
          // 限制结果为 true: 正则
          // pattern: 设置一个正则规则
          // pattern: /true/ 只能匹配到结果为 true
          { pattern: /true/, message: '请勾选已阅读并同意用户协议和隐私条款', trigger: 'change' }
        ]
      },
      // 倒计时的时候
      timeNum: 60,
      // 设置一个定时器
      timer: null,
      // 控制loading的显示
      loadingBtn: false
    }
  },
  methods: {
    // 用户的登录
    submitForm (formName) {
      // 得到 el-form 元素
      // validate: 验证当前表单元素中所有的规则
      this.$refs[formName].validate((valid) => {
        // 如果 valid 为 true 说明验证通过
        // 如果 valid 为 false 说明验证不通过
        if (valid) {
          // 将加载状态设置为 true
          this.loadingBtn = true
          // 发送请求到服务器
          this.$axios({
            url: ' http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
            method: 'post',
            data: this.form
          }).then(res => {
            // res 中有一个属性叫做 data, 在 data 中有两个属性后面我们会用上： token , refresh_token
            // 只要进入到这个方法中说明登录成功
            this.$message({
              showClose: true,
              message: '登录成功',
              type: 'success',
              duration: 2000
            })
            // 将加载状态改为 false
            this.loadingBtn = false
            // 跳转到主页
            this.$router.push('/comment')
          }).catch(err => {
            console.log(err)
            this.$message({
              showClose: true,
              message: '登录失败,手机号或验证码错误',
              type: 'success',
              duration: 2000
            })
            this.loadingBtn = false
          })
        } else {
          // 结束当前方法
          console.log('error submit!!')
          return false
        }
      })
    },
    // 验证手机号码是否存在
    verifyBtn (formName) {
      // 获取 form 表单
      // validateField(field, callback)
      // field: 要验证的字段
      // callback：验证后的回调函数
      //    errMsg：验证不通过时的提示文本
      this.$refs['form'].validateField('mobile', errMsg => {
        if (errMsg.trim().length > 0) {
          // 说明验证不通过
          return
        }
        // 验证通过：开启倒计时
        this.timer = setInterval(() => {
          // 时间需要减少
          this.codeTime--
          // 当时间为 0 时，需要将定时器清除
          if (this.codeTime <= 0) {
            // 清除定时器
            clearTimeout(this.timer)
            // 重置倒计时
            this.codeTime = 60
            // 将定时器重置为 null
            this.timer = null
          }
        }, 1000)
      })
    }
  }
}

</script>

<style lang='less' scoped>
.login {
  background: url("./login_bg.jpg");
  background-size: 100% 100%;
  height: 100%;
  display: flex;  // flex 布局
  align-items: center; // 主轴居中：默认 水平
  justify-content: space-around; // 侧轴居中：默认 垂直
  .loginHost {
    width: 350px;
    padding: 15px;
    background-color: #fff;
    .loginImg {
      text-align: center;
      margin-bottom: 20px;
        img {
            width:200px;
        }
        }
    .btnLogins {
      width: 100%;
    }
    .btnCode {
      width: 100%;
      padding: 10px;
    }
  }
}
</style>
