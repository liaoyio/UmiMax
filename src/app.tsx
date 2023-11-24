import { GithubFilled, InfoCircleFilled, QuestionCircleFilled } from '@ant-design/icons';
import { RunTimeLayoutConfig } from '@umijs/max';
import { theme } from 'antd';

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

import { AntdConfig } from './types/config.type';

export const antd = (memo: AntdConfig) => {
  memo.theme = {
    token: {
      colorPrimary: '#00b96b',
      borderRadius: 4,
      colorLink: '#03a05e',
    },
  }
  memo.theme.algorithm = theme.darkAlgorithm;
  memo.appConfig = { message: { maxCount: 3 } }

  return memo;
};
