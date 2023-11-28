import { RunTimeLayoutConfig, history } from '@umijs/max';
import { theme } from 'antd';

import logo from '@/assets/images/logo.svg';
import { AvatarDropdown, CustomActionList, Footer } from './components/Layout';

export async function getInitialState(): Promise<{
  name: string;
  avatar?: string;
}> {
  return {
    name: 'Yi',
    avatar:
      'https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?',
  };
}

import { PageContainer } from '@ant-design/pro-components';

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo,
    menu: { locale: false },
    title: 'Umi Admin',
    layout: 'mix',
    /* layout 的头像设置，不同的 layout 放在不同的位置 */
    avatarProps: {
      src: initialState?.avatar || logo,
      size: 'default',
      render: (_, dom) => <AvatarDropdown dom={dom} />,
    },
    /* 自定义操作列表 */
    actionsRender: CustomActionList,
    footerRender: Footer,
    childrenRender: (dom) => <PageContainer title={false} content={dom} />,
    onPageChange: () => {
      const { location } = history;
      console.log({ location });
      // 如果没有登录，重定向到 login
      /*  if (!initialState && ROUTER_WHITE.indexOf(location.pathname) === -1) {
         history.push(LOGIN_PATH);
       } */
    },
  };
};

import { AntdConfig } from './types/config.type';

export const antd = (memo: AntdConfig) => {
  memo.theme = {
    token: {
      colorPrimary: '#00b96b',
      borderRadius: 4,
      colorLink: '#03a05e',
    },
  };
  memo.theme.algorithm = theme.darkAlgorithm;
  memo.appConfig = { message: { maxCount: 3 } };

  return memo;
};
