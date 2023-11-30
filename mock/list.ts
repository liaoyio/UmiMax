import mockjs from 'mockjs';

import { defineMock } from '@umijs/max';

export default defineMock({
  'GET /mock/api/list': mockjs.mock({
    success: true,
    'data|10': [
      {
        id: '@id',
        title: '@name',
        description: '@cparagraph(2)',
      },
    ],
  }),
});
