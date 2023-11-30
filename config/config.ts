import { defineConfig } from '@umijs/max';

/* 无法执行 ? */
export function render(oldRender: any) {
  console.log('render');
  setTimeout(() => {
    oldRender();
  }, 8000);
}

export default defineConfig({
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
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '12312',
  },
  // routes,
  npmClient: 'pnpm',
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: { watch: ['src/**/*.tsx'] },
});
