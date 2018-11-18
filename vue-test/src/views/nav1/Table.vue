<template>
  <section>
    <!--工具条-->
    <div span="24" class="toolbar">
      <Form>
        <FormItem :model="formItem" class="form-wrapper">
          <Button class="add-button" type="primary" @click="addUser = true">新增</Button>
        </FormItem>
      </Form>
    </div>

    <!--列表-->
    <div>
      <Table border ref="selection" :columns="columns" :data="userData"></Table>
    </div>


    <!--工具条-->
    <div :span="24" class="toolbar">
      <Form>
        <Page :total="page.totalCount " show-total @on-change="getUser" style="float: right;" :page-size="page.pageSize"/>
        <div style="clear: both"> </div>
      </Form>
    </div>

    <!--新增界面-->
    <Modal
      v-model="addUser"
      title="新增">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="姓名" prop="name">
          <Input v-model="formValidate.name"></Input>
        </FormItem>
        <FormItem label="年龄" prop="age" style="width: 200px">
          <Input v-model="formValidate.age"></Input>
        </FormItem>
        <FormItem label="生日" prop="date" >
          <DatePicker type="date" v-model="formValidate.date"></DatePicker>
        </FormItem>
        <FormItem label="性别" prop="gender">
          <RadioGroup v-model="formValidate.gender">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="地址" prop="desc">
          <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')" >Submit</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
      <div slot="footer"></div>
    </Modal>

  </section>
</template>

<script>
  import {User} from '../../mock/data/user'

  export default {
    data(){
      return{
        page:{
          current: 1,
          pageSize: 10,
          totalCount: User.length
        },
        formItem: {
          input: '',
        },
        columns: [
          {
          type: 'selection',
          width: 60,
          align: 'center',
          },
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '姓名',
            key: 'name',
            width: 120,
            sortable: true,
          },
          {
            title: '性别',
            key: 'sex',
            width: 100,
            sortable: true
          },
          {
            title: '年龄',
            key: 'age',
            width: 100,
            sortable: true
          },
          {
            title: '生日',
            key: 'birth',
            width: 120,
            sortable: true
          },
          {
            title: '地址',
            key: 'addr',
            minWidth: 180,
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            },
          },
        ],
        userData: [ ],
        addUser: false,
        formValidate: {
          name: '',
          age: '',
          gender: '',
          date: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '名字不能为空', trigger: 'blur' }
          ],
          age: [
            { required: true, message: '年龄不能为空', trigger: 'blur' }
          ],
          gender: [
            {required: true, message: '请选择性别', trigger: 'change' }
          ],
          date: [
            {required: true,  type: 'date', message: '请选择出生年月', trigger: 'change' }
          ],
          desc: [
            {required: true, message: '请填写居住地址', trigger: 'blur' },
          ]
        },
      }
    },
    methods:{
      //获取用户列表
      getUser(data){
        if(!data){
          data = 1;
        }
        let arr = [];
        this.page.current = data;
        for(let i = 0; i < this.page.pageSize && (i + (this.page.current - 1) * 10) < this.page.totalCount; i++){
          let index = i + (this.page.current - 1) * 10;
          arr.push(User[index]);
        }
        this.userData = arr;
      },

      remove(index) {
        this.userData.splice(index, 1);
      },
      handleSubmit (name) {
        let arr = {};
        this.$refs[name].validate((valid) => {
          if (valid) {
            arr.name = this.formValidate.name;
            arr.sex = this.formValidate.gender;
            arr.age = this.formValidate.age;
            arr.birth = this.formValidate.date;
            arr.addr = this.formValidate.desc;
          } else {
            this.$Message.error('请继续输入');
          }
        });
        this.userData.push(arr)
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    },
    mounted(){
      this.getUser()
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .toolbar{
    text-align: left;
    padding: 5px;
    background-color: #dddddd;
    margin-top: 20px;
    margin-bottom: 20px;
    .form-wrapper{
      margin: 0;
      .name-input{
        width: 190px;
        padding: 5px;
      }
      .add-button{
        margin-left: 20px;
        padding: 6px 20px;
      }
    }
  }
</style>
