import { defineConfig } from '@umijs/max';

/* 无法执行 ? */
export function render(oldRender: any) {
  console.log('render');
  setTimeout(() => {
    oldRender();
  }, 8000);
}

export default defineConfig({
  /** Ant Design 配置 */
  antd: {
    appConfig: {},
    theme: {},
  },
  /** 国际化插件  https://umijs.org/docs/max/i18n   */
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  /** 权限配置 */
  access: {},
  /** 数据流 */
  model: {},
  dva: false,
  /** 初始化状态 */
  initialState: {},
  /** 请求配置 */
  request: {},
  layout: {},
  /** 约定式路由配置 */
  conventionRoutes: {
    // MARK: 排除不需要生成路由的文件夹，解决约定式路由生成问题，如: login页面不展示全局layout
    exclude: [/\/components\//, /\/models\//, /\/common\//, /\/auth\//],
  },
  // routes,
  npmClient: 'pnpm',
  /** 代理设置 */
  /* proxy: {
    '/admin.php': {
      target: 'http://127.0.0.1:8000/admin.php',
      changeOrigin: true,
      pathRewrite: { '^/admin.php': '' },
    },
    '/api.php': {
      target: 'http://127.0.0.1:8000/api.php',
      changeOrigin: true,
      pathRewrite: { '^/api.php': '' },
    },
  } */
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: { watch: ['src/**/*.tsx'] },

  /** 第三方统计，百度统计配置*/
  // analytics: { baidu: '' },
  favicons: ['https://file.xinadmin.cn/file/favicons.ico'],
  metas: [
    {
      name: 'keywords',
      content:
        'Yi Admin,Umi,Umi js,中后台管理框架,React,,yiadmin,admin,react admin',
    },
    {
      name: 'description',
      content:
        'Yi Admin是一款基于 Ant Design Pro components 构建一套完善的 Yi Table， 只需一个 Columns 就可以实现增删改查等表单、表格、查询等功能，以及组件的高度自定义',
    },
  ],
});
