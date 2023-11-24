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
]
