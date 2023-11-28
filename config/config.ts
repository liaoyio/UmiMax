import { defineConfig } from '@umijs/max';
import { routes } from './routes';

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
    title: '@umijs/max',
  },
  routes,
  npmClient: 'pnpm',
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: { watch: ['src/**/*.tsx'] },
});
