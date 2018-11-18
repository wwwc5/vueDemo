<template>
  <Table border ref="selection" :columns="columns" :data="userData"></Table>
</template>

<script>
  import {User} from '../../mock/data/user'

  export default {
    data() {
      return{
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
        ],
        userData: [ ],
      }
    },
    methods:{
      getUser(){
        this.userData = User;
      }
    },
    mounted(){
      this.getUser()
    }
  }

</script>
