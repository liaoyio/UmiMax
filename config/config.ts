import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
  antd: {
    appConfig: {},
    theme: {}
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max'
  },
  routes,
  npmClient: 'pnpm',
  plugins: [
    require.resolve('@umijs/plugins/dist/unocss')
  ],
  unocss: { watch: ['src/**/*.tsx'] },
});

