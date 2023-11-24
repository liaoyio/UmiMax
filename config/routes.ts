import { defineConfig } from '@umijs/max';
type Router = ReturnType<typeof defineConfig>['routes'];

export const routes: Router = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: '首页',
    path: '/home',
    icon: 'HomeOutlined',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    icon: 'LockOutlined',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    icon: 'TableOutlined',
    component: './Table',
  },
  {
    name: '客户管理',
    path: '/customer-manage',
    icon: 'UserOutlined',
    component: './CustomerManage',
    routes: [
      {
        name: '客户列表',
        path: '/customer-manage/list',
        component: './CustomerManage/List',
      },
      {
        name: '客户认证',
        path: '/customer-manage/auth',
        component: './CustomerManage/Auth',
      },
    ],
  },
  {
    name: 'Login',
    path: '/login',
    component: './Login',
    layout: false,
  }
]
