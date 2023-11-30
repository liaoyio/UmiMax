import { defineMock } from '@umijs/max';

export default defineMock({
  'GET /mock/api/index': {
    data: {
      layout: {
        navTheme: 'light',
        colorPrimary: '#1890ff',
        layout: 'top',
        contentWidth: 'Fluid',
        fixedHeader: true,
        token: {
          pageContainer: {
            paddingBlockPageContainerContent: 0,
            paddingInlinePageContainerContent: 0,
          },
        },
        fixSiderbar: true,
        splitMenus: false,
        siderMenuType: 'sub',
      },
      web_setting: {
        title: 'Xin Admin',
        logo: 'https://file.xinadmin.cn/file/favicons.ico',
        subtitle: 'Xin Admin 快速开发框架',
      },
      menus: [
        {
          name: '首页',
          path: '/',
          key: 'index',
          icon: 'HomeOutlined',
        },
        {
          name: '会员中心',
          icon: 'UserOutlined',
        },
        {
          name: '代码仓库',
          path: '/git',
          key: 'git',
          icon: 'StarOutlined',
          children: [
            {
              name: 'Github',
              path: 'https://github.com/Xineny-liu/xinadmin',
              key: 'ttps:..github.com.Xineny-liu.xinadmin',
            },
            {
              name: 'Gitee',
              path: 'https://gitee.com/xineny/xin-admin',
              key: 'ttps:..gitee.com.xineny.xin-admin',
            },
          ],
        },
        {
          name: '官方文档',
          path: 'https://xinadmin.cn',
          key: 'ttps:..xinadmin.cn',
          icon: 'FileSearchOutlined',
        },
      ],
    },
    success: true,
    status: 200,
    msg: 'ok',
    showType: 0,
  },
  'POST /mock/api/index/login': {
    data: {
      refresh_token: '3c20d31e39daef9496f45bf3eca92874',
      token: '67ba5ed3c70e69f86a57352f1a42fa7a',
      id: 1,
    },
    success: true,
    status: 200,
    msg: 'ok',
    showType: 0,
  },
});
