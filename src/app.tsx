import { RunTimeLayoutConfig, history } from '@umijs/max';

import logo from '@/assets/images/logo.svg';
import { GetAdminInfo } from '@/services/admin';
import { index } from '@/services/api';
import {
  Access,
  AvatarDropdown,
  CustomActionList,
  Footer,
} from './components/Layout';

export async function getInitialState(): Promise<initialStateType> {
  // 记录当前应用
  if (!localStorage.getItem('app') || !localStorage.getItem('token')) {
    localStorage.setItem('app', 'app');
  }
  const fetchAdminInfo = async () => {
    const msg = await GetAdminInfo();
    return msg.data;
  };

  const { location } = history;
  const data: initialStateType = {
    access: [],
    fetchAdminInfo,
    isLogin: false,
    isAccess: false,
    drawerShow: false,
    app: localStorage.getItem('app')!,
    webSetting: {
      logo: 'https://file.xinadmin.cn/file/favicons.ico',
      title: 'Xin Admin',
    },
    menus: [],
  };
  try {
    let indexDate = await index();
    data.webSetting = indexDate.data.web_setting;
    data.menus = indexDate.data.menus;
    if (location.pathname !== 'admin/login' && localStorage.getItem('token')) {
      let userInfo = await fetchAdminInfo();
      data.isLogin = true;
      data.isAccess = true;
      data.currentUser = userInfo.adminInfo;
      data.menus = userInfo.menus;
      data.access = userInfo.access;
    }
    return data;
  } catch (e) {
    return data;
  }
}

// import { PageContainer } from '@ant-design/pro-components';
// MenuDataItem
import { PageLoading } from '@ant-design/pro-components';
// import fixMenuItemIcon from "@/utils/menuDataRender";

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo,

    title: 'Hello Umi',
    layout: 'mix',
    /* layout 的头像设置，不同的 layout 放在不同的位置 */
    avatarProps: {
      src: initialState?.currentUser?.avatar || logo,
      size: 'default',
      render: (_, dom) => <AvatarDropdown dom={dom} />,
    },
    /** 动态菜单 */
    menu: {
      locale: false,
      request: async () => {
        console.log('刷新菜单啦：', initialState!.menus);
        return initialState!.menus as any;
      },
    },
    /* 修复菜单图标不显示问题 */
    // menuDataRender: (menusData: MenuDataItem[]) => fixMenuItemIcon(menusData),
    /* 自定义操作列表 */
    actionsRender: CustomActionList,
    footerRender: Footer,

    rightRender: (initialState) => {
      return <div>rightRender</div>;
    },
    // childrenRender: (dom) => <PageContainer title={false} content={dom} />,
    childrenRender: (children: any) => {
      if (initialState?.loading) return <PageLoading />;
      return <Access>{children}</Access>;
    },
    onPageChange: () => {
      const { location } = history;
      console.log({ location });
      /* if (initialState!.app === 'admin') {
        // 如果没有登录，重定向到 登录页面
        if (!initialState!.isLogin) {
          localStorage.removeItem('app')
          history.push('/admin/login');
          return;
        }
        // 首页重定向
        if (location.pathname === '/') {
          history.push('/home');
          return;
        }
      }  */
    },
    // ...initialState?.settings,
  };
};

import { clientRoutes } from '@/components/Layout';
export const patchClientRoutes = clientRoutes;

import { AntdConfig } from './types/config.type';
export const antd = (memo: AntdConfig) => {
  memo.theme = {
    token: {
      colorPrimary: '#00b96b',
      borderRadius: 4,
      colorLink: '#03a05e',
    },
  };
  // memo.theme.algorithm = theme.darkAlgorithm;
  memo.appConfig = { message: { maxCount: 3 } };
  return memo;
};

import requestConfig from './utils/request';
export const request = { ...requestConfig };
