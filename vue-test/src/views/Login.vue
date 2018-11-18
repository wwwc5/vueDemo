<template>
  <div class="login-wrapper">
    <Form :model="formItem">
      <h3 class="title">系统登录</h3>
      <FormItem>
        <Input v-model="formItem.user" placeholder="账号"></Input>
      </FormItem>
      <FormItem>
        <Input v-model="formItem.password" type="password" placeholder="密码"></Input>
      </FormItem>
      <FormItem>
        <div class="remember">
          <Checkbox v-model="checked">记住密码</Checkbox>
        </div>
      </FormItem>
      <FormItem>
        <Button type="primary" long @click="loginSubmit">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<style scoped lang="scss" type="text/scss">
  .login-wrapper{
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0 auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0;
      text-align: left;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        formItem: {
          user: 'user',
          password: '123',
          checkbox: [],
        },
        checked: true,
      }
    },
    methods:{
      loginSubmit(){
        if(this.formItem.user === 'user' && this.formItem.password === '123'){
          this.$router.push({path: '/'})
        } else{
          this.$Message.error('账号或密码错误');
        }
      }
    }
  }
</script>
