import { defineMock } from '@umijs/max';

export default defineMock({
  'GET /mock/api/admin/tableList': {
    data: {
      total: 4,
      per_page: 20,
      current_page: 1,
      last_page: 1,
      data: [
        {
          id: 1,
          username: 'admin',
          nickname: 'Xin Admin',
          avatar:
            'http://127.0.0.1:8000/storage/file/c4\\0a68035ffb3ec01b9c3d94ffcdc8f8.png',
          sex: '0',
          email: '111@qq.com',
          mobile: '15966666666',
          status: '1',
          group_id: 1,
          create_time: '2022-02-26 19:55:29',
          update_time: '2023-10-19 14:34:00',
        },
        {
          id: 2,
          username: 'test1',
          nickname: '测试账号1',
          avatar:
            'http://127.0.0.1:8000/storage/file/4c\\53e0fec4facbcb9416fc9da3f9ad32.png',
          sex: '0',
          email: '230@qq.com',
          mobile: '15866666666',
          status: '0',
          group_id: 1,
          create_time: '2023-10-19 14:35:05',
          update_time: '2023-10-19 15:09:35',
        },
        {
          id: 3,
          username: 'test2',
          nickname: '测试账号2',
          avatar:
            'http://127.0.0.1:8000/storage/file/62\\87527b4016e4e3c812e46900fd1087.png',
          sex: '1',
          email: '230@qq.com',
          mobile: '16695635422',
          status: '0',
          group_id: 1,
          create_time: '2023-10-19 14:39:46',
          update_time: '2023-10-19 15:09:21',
        },
        {
          id: 4,
          username: 'test3',
          nickname: '测试账号3',
          avatar:
            'http://127.0.0.1:8000/storage/file/73\\77aef6d9fed083b664119cccb2e351.jpg',
          sex: '1',
          email: '230@qw.com',
          mobile: '15699999999',
          status: '0',
          group_id: 4,
          create_time: '2023-10-19 15:04:39',
          update_time: '2023-10-19 15:24:12',
        },
      ],
    },
    success: true,
    status: 200,
    msg: 'ok',
    showType: 0,
  },
  'GET /mock/api/admin/adminGroup': {
    data: {
      total: 2,
      per_page: 100,
      current_page: 1,
      last_page: 1,
      data: [
        {
          id: 1,
          pid: 0,
          name: '系统管理员',
          create_time: '2023-08-16 13:22:08',
          update_time: '2023-08-16 13:22:08',
          children: [
            {
              id: 2,
              pid: 1,
              name: '二级管理员',
              create_time: '2023-08-16 13:32:00',
              update_time: '2023-08-16 13:32:00',
              children: [
                {
                  id: 3,
                  pid: 2,
                  name: '三级管理员',
                  create_time: '2023-08-16 13:46:02',
                  update_time: '2023-08-16 13:46:02',
                },
              ],
            },
          ],
        },
        {
          id: 4,
          pid: 0,
          name: '访客',
          create_time: '2023-08-16 19:05:30',
          update_time: '2023-08-16 19:05:30',
        },
      ],
    },
    success: true,
    status: 200,
    msg: 'ok',
    showType: 0,
  },
  'DELETE /mock/api/admin/delete': {
    success: true,
    msg: '删除成功',
    showType: 1,
    status: 200,
  },
});
