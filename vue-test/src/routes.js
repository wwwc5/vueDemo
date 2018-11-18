import Login from './views/Login.vue'
import NotFound from './views/404'
import Home from './views/Home'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'

let routes = [
 {
    path: '/login',
    component: Login,
    name: 'login',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: 'notFound',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'md-person',
    children:[
      { path: '/', component: Table, name: 'table'},
      { path: '/form', component: Form, name: 'form' },
      { path: '/user', component: user, name: '列表' }
    ],
  },
  {
    path: '/',
    component: Home,
    name: '导航二',
    iconCls: 'md-folder',
    children: [
      { path: '/page4', component: Page4, name: '页面4' },
      { path: '/page5', component: Page5, name: '页面5' },
    ]
  },
  {
    path: '/',
    component: Home,
    name: '导航三',
    iconCls: 'md-albums',
    children: [
      { path: '/page6', component: Page6, name: '页面6' }
    ]
  },
  {
    path: '*',
    hidden: 'true',
    redirect: { path: '/404' }
  }
];

export default routes;
