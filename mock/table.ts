import mockjs from 'mockjs';

import { defineMock } from '@umijs/max';

export default defineMock({
  'GET /mock/api/table/list': mockjs.mock({
    data: {
      'data|3-10': [
        {
          id: '@increment',
          mobile: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
          username: '@first',
          email: '@email',
          password: '@guid',
          nickname: '@cname',
          avatar: 'https://t.mwm.moe/tx/',
          description: '@cparagraph(2)',
          'gender|0-1': 1,
          birthday: '@date',
          'group_id|1-12': 1,
          money: '@integer(60, 10000)',
          score: '@integer(60, 10000)',
          motto: '@cparagraph(2)',
          'status|1-2': 1,
          create_time: '@date',
          update_time: '@date',
        },
      ],
      total: 10,
      per_page: 20,
      current_page: 1,
      last_page: 1,
    },
    success: true,
    status: 200,
    msg: 'ok',
    showType: 0,
  }),
  'DELETE /mock/api/table/list': mockjs.mock({
    success: true,
    msg: '删除成功',
    showType: 1,
    status: 200,
  }),
});
