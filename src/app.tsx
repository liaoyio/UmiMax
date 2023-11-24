import { GithubFilled, InfoCircleFilled, QuestionCircleFilled } from '@ant-design/icons';
import { RunTimeLayoutConfig, RequestConfig } from '@umijs/max';

import AvatarDropdown from './components/AvatarDropdown';
import logo from '@/assets/images/logo.svg';

export async function getInitialState(): Promise<{ name: string; avatar?: string; }> {
  return {
    name: 'Yi',
    avatar:
      'https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?',
  };
}

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
      render: (props, dom) => <AvatarDropdown dom={dom} />
    },
    /* 自定义操作列表 */
    actionsRender: (props) => {
      if (props.isMobile) return [];
      if (typeof window === 'undefined') return [];
      return [
        <InfoCircleFilled key="InfoCircleFilled" />,
        <QuestionCircleFilled key="QuestionCircleFilled" />,
        <GithubFilled key="GithubFilled" />,
      ];
    },
  }
}

import { message } from 'antd';

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    errorHandler(error: any) {
      const { response } = error;
      if (response && response.status === 500) {
        message.error('请求错误：服务器故障，请稍后再试');
      }
    },
    errorThrower() { },
  },
  // 请求拦截
  requestInterceptors: [
    (config: any) => {
      let token = localStorage.getItem('token') || '';
      if (token.startsWith('"')) {
        token = JSON.parse(token);
      }
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    (error: any) => {
      return error;
    },
  ],
  // 相应拦截
  responseInterceptors: [
    (response: any) => {
      const { data, message } = response;
      if (!data.success) {
        message.error(message);
      }
      return response;
    },
  ],
};

