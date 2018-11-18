<template>
  <Layout class="home-container">
    <Header class="header">
      <Row>
        <Col :span="10" class="logo">
          {{ logo }}
        </Col>
        <Col :span="10" class="tools">
          <Icon type="md-menu" size="24" />
        </Col>
        <Col :span="4" class="user-info">
          <Dropdown trigger="hover">
            <a class="user-info-inner">
              <img :src="this.sysUserAvatar" /> {{ sysUserName }}
            </a>
            <DropdownMenu slot="list" class="dropdown-menu">
              <DropdownItem>我的消息</DropdownItem>
              <DropdownItem>设置</DropdownItem>
              <DropdownItem divided @click.native="logoutConfirm = true">退出登录</DropdownItem>
              <Modal
                v-model="logoutConfirm"
                title="提示"
                @on-ok="logoutOK"
                @on-cancel="logoutCancel">
                <p>确认退出吗</p>
              </Modal>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </Header>

    <Layout>
      <Sider class="sider" style="max-width: 240px;min-width: 240px;background-color: #dddddd">
        <Row>
          <Col>
            <Menu :theme="theme2" :open-names="['1']" accordion router class="el-menu-vertical-demo">
              <template v-for="item in $router.options.routes" v-if="!item.hidden">
                <Submenu :name="item.name">
                  <template slot="title">
                    <Icon :type="item.iconCls" />{{ item.name }}
                  </template>
                  <MenuItem v-for="child in item.children" :name="child.path" :to="child.path">
                    {{ child.name }}
                  </MenuItem>
                </Submenu>
              </template>
            </Menu>
          </Col>
        </Row>
      </Sider>

      <Content class="content">
        <section>
          <Row>
            <Col class="content-title">
              <strong>{{ $route.name }}</strong>
              <Breadcrumb class="breadcrumb-wrapper">
                <BreadcrumbItem :to="item.path" v-for="item in $route.matched" style="font-weight: normal">
                  {{ item.name }}
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col class="content-wrapper">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </Col>
          </Row>
        </section>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
  export default {
    data(){
      return{
        logo: 'LOGO',
        sysUserAvatar: require("../../img/avatar.jpg"),
        sysUserName: "张三",
        logoutConfirm: false,
        theme2: 'light',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      }
    },
    methods:{
      logoutOK: function () {
        var _this = this;
        _this.$router.push('/login');
      },
      logoutCancel: function () {

      },
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .home-container{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .header{
      padding: 0;
      background-color: #2d8cf0;
      color: #ffffff;
      .logo {
        width: 240px;
        height:60px;
        font-size: 22px;
        padding:0 20px;
        border-color: rgba(238,241,146,0.3);
        border-right: 1px solid;
      }
      .user-info {
        text-align: right;
        padding-right: 35px;
        float: right;
        &:after{
          content: ' ';
          display: block;
          clear: both;
        }
        .user-info-inner {
          color: #ffffff;
          &:hover {
            color: #ffffff;
          }
          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 10px 0 10px 10px;
            float: right;
          }
        }
        .dropdown-menu{
          text-align: left;
        }
      }
      .tools{
        text-align: left;
        padding-left: 20px;
      }
    }

    .content{
      overflow-y: scroll;
      padding: 20px;
      .content-title{
        text-align: left;
        font-size: 16px;
        .breadcrumb-wrapper{
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
</style>
