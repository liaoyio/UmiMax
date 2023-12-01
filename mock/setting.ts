import { defineMock } from '@umijs/max';

export default defineMock({
  'GET /mock/api/setting/querySettingGroup': {
    data: [
      {
        id: 1,
        pid: 0,
        title: '系统配置',
        key: 'system',
        type: '1',
        create_time: '2023-09-16 10:13:36',
        update_time: '2023-09-16 10:13:36',
        children: [
          {
            id: 3,
            pid: 1,
            title: '网站设置',
            key: 'web',
            type: '2',
            create_time: '2023-09-16 10:45:30',
            update_time: '2023-09-16 10:45:30',
          },
        ],
      },
      {
        id: 2,
        pid: 0,
        title: '邮件配置',
        key: 'email',
        type: '2',
        create_time: '2023-09-16 10:15:40',
        update_time: '2023-09-16 10:15:40',
      },
      {
        id: 4,
        pid: 0,
        title: '其它配置',
        key: 'other',
        type: '1',
        create_time: '2023-09-16 14:02:41',
        update_time: '2023-09-16 14:02:41',
      },
    ],
    success: true,
    status: 200,
    msg: 'ok',
    showType: 0,
  },
  'GET /mock/api/setting/querySettingPid': {
    data: [
      {
        value: 1,
        title: '系统配置',
        type: '1',
      },
      {
        value: 4,
        title: '其它配置',
        type: '1',
      },
    ],
    success: true,
    status: 200,
    msg: 'ok',
    showType: 0,
  },
  'POST /mock/api/setting/addGroup': {
    success: true,
    msg: '添加成功',
    showType: 1,
    status: 200,
  },
});
