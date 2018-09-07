import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Test from '@/components/Test'
import User from '@/components/User'
import UserAdd from '@/components/User/UserAdd'
import UserList from '@/components/User/UserList'
import { LocaleProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'Home',
      component: Home
    },
    {
      path: '/Home',
      name:'Home',
      component: Home
    },
    {
      path: '/News',
      name:'News',
      component: News
    },
    {
      path: '/Test',
      name:'Test',
      component: Test
    },
    {   
       path: '/User',
       name:'User',
       component: User,
       children:[
       {
       	path: 'UserAdd',
       	component: UserAdd
       },
       {
      	path: 'UserList',
      	component: UserList
       }]
    }
  ]
})
