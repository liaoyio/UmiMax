import { defineMock } from '@umijs/max';

export default defineMock({
  'GET /mock/system/dictList': {
    data: [
      {
        id: 12,
        name: '性别',
        type: 'default',
        describe: '性别',
        code: 'sex',
        create_time: '2023-08-08 12:47:30',
        update_time: '2023-08-17 16:52:44',
        dictItems: [
          {
            label: '男',
            value: '0',
            status: 'success',
          },
          {
            label: '女',
            value: '1',
            status: 'error',
          },
        ],
      },
      {
        id: 13,
        name: '人物',
        type: 'default',
        describe: '任务',
        code: 'pop',
        create_time: '2023-08-08 13:22:18',
        update_time: '2023-08-08 13:22:18',
        dictItems: [],
      },
      {
        id: 14,
        name: '状态',
        type: 'default',
        describe: '状态',
        code: 'status',
        create_time: '2023-08-08 13:39:57',
        update_time: '2023-08-08 13:39:57',
        dictItems: [
          {
            label: '男',
            value: '0',
            status: 'default',
          },
          {
            label: '女',
            value: '1',
            status: 'default',
          },
          {
            label: '变态',
            value: '3',
            status: 'default',
          },
        ],
      },
      {
        id: 16,
        name: '权限类型',
        type: 'tag',
        describe: '权限类型',
        code: 'ruleType',
        create_time: '2023-08-08 16:19:45',
        update_time: '2023-08-17 20:01:29',
        dictItems: [
          {
            label: '一级菜单',
            value: '0',
            status: 'processing',
          },
          {
            label: '子菜单',
            value: '1',
            status: 'success',
          },
          {
            label: '按钮',
            value: '2',
            status: 'default',
          },
        ],
      },
      {
        id: 17,
        name: '字段类型',
        type: 'default',
        describe: '前端表单类型字典，请不要修改',
        code: 'valueType',
        create_time: '2023-08-20 21:07:37',
        update_time: '2023-08-24 20:42:15',
        dictItems: [
          {
            label: '文本框',
            value: 'text',
            status: 'default',
          },
          {
            label: '数字输入框',
            value: 'digit',
            status: 'default',
          },
          {
            label: '日期',
            value: 'date',
            status: 'default',
          },
          {
            label: '金额输入框',
            value: 'money',
            status: 'default',
          },
          {
            label: '文本域',
            value: 'textarea',
            status: 'default',
          },
          {
            label: '下拉框',
            value: 'select',
            status: 'default',
          },
          {
            label: '多选框',
            value: 'checkbox',
            status: 'default',
          },
          {
            label: '星级组件',
            value: 'rate',
            status: 'default',
          },
          {
            label: '单选框',
            value: 'radio',
            status: 'default',
          },
          {
            label: '按钮单选框',
            value: 'radioButton',
            status: 'default',
          },
          {
            label: '开关',
            value: 'switch',
            status: 'default',
          },
          {
            label: '日期时间',
            value: 'dateTime',
            status: 'default',
          },
          {
            label: '数据字典',
            value: 'dict',
            status: 'default',
          },
          {
            label: '自增主键',
            value: 'id',
            status: 'default',
          },
          {
            label: '创建时间',
            value: 'createTime',
            status: 'default',
          },
          {
            label: '更新时间',
            value: 'updateTime',
            status: 'default',
          },
        ],
      },
      {
        id: 18,
        name: '数据类型',
        type: 'default',
        describe: '数据库字段类型字典，请不要修改',
        code: 'sqlType',
        create_time: '2023-08-22 19:23:54',
        update_time: '2023-08-24 20:42:28',
        dictItems: [
          {
            label: '字符串(TEXT)',
            value: 'text',
            status: 'default',
          },
          {
            label: '字符型(CHAR)',
            value: 'char',
            status: 'default',
          },
          {
            label: '变长字符型(VARCHAR)',
            value: 'varchar',
            status: 'default',
          },
          {
            label: '整数型(INT)',
            value: 'int',
            status: 'default',
          },
          {
            label: '长整数型(BIGINT)',
            value: 'bigint',
            status: 'default',
          },
          {
            label: '小数型(DECIMAL)',
            value: 'decimal',
            status: 'default',
          },
          {
            label: '浮点型(FLOAT)',
            value: 'float',
            status: 'default',
          },
          {
            label: '双精度浮点型(DOUBLE)',
            value: 'double',
            status: 'default',
          },
          {
            label: '布尔型(BOOLEAN)',
            value: 'boolean',
            status: 'default',
          },
          {
            label: '日期型(DATE)',
            value: 'date',
            status: 'default',
          },
          {
            label: '时间型(TIME)',
            value: 'time',
            status: 'default',
          },
          {
            label: '日期时间型(DATETIME)',
            value: 'datetime',
            status: 'default',
          },
          {
            label: '时间戳(TIMESTAMP)',
            value: 'timestamp',
            status: 'default',
          },
          {
            label: '二进制 large 对象 (BLOB)',
            value: 'blob',
            status: 'default',
          },
          {
            label: '字符 large 对象 (CLOB)',
            value: 'clob',
            status: 'default',
          },
        ],
      },
      {
        id: 19,
        name: '查询操作符',
        type: 'default',
        describe: '系统查询操作符，请不要修改',
        code: 'select',
        create_time: '2023-08-28 21:00:15',
        update_time: '2023-08-28 21:00:15',
        dictItems: [
          {
            label: '等于',
            value: '=',
            status: 'default',
          },
          {
            label: '大于',
            value: '>',
            status: 'default',
          },
          {
            label: '小于',
            value: '<',
            status: 'default',
          },
          {
            label: '大于等于',
            value: '>=',
            status: 'default',
          },
          {
            label: '小于等于',
            value: '<=',
            status: 'default',
          },
          {
            label: '不等于',
            value: '<>',
            status: 'default',
          },
          {
            label: '包含',
            value: 'like',
            status: 'default',
          },
          {
            label: '日期查询',
            value: 'date',
            status: 'default',
          },
        ],
      },
      {
        id: 20,
        name: '验证规则',
        type: 'default',
        describe: 'CRUD 验证规则，请不要修改',
        code: 'validation',
        create_time: '2023-09-05 14:33:06',
        update_time: '2023-09-05 14:33:06',
        dictItems: [
          {
            label: '必填',
            value: 'verifyRequired',
            status: 'default',
          },
          {
            label: '纯数字',
            value: 'verifyNumber',
            status: 'default',
          },
          {
            label: '邮箱',
            value: 'verifyEmail',
            status: 'default',
          },
          {
            label: 'Url',
            value: 'verifyUrl',
            status: 'default',
          },
          {
            label: '整数',
            value: 'verifyInteger',
            status: 'default',
          },
          {
            label: '手机号',
            value: 'verifyMobile',
            status: 'default',
          },
          {
            label: '身份证',
            value: 'verifyIdCard',
            status: 'default',
          },
          {
            label: '字符串',
            value: 'verifyString',
            status: 'default',
          },
        ],
      },
      {
        id: 21,
        name: '余额变动记录类型',
        type: 'tag',
        describe: '余额变动记录类型',
        code: 'moneyLog',
        create_time: '2023-10-17 17:27:51',
        update_time: '2023-10-17 17:27:51',
        dictItems: [
          {
            label: '管理员操作',
            value: '0',
            status: 'processing',
          },
          {
            label: '消费',
            value: '1',
            status: 'error',
          },
          {
            label: '签到奖励',
            value: '2',
            status: 'success',
          },
        ],
      },
    ],
    success: true,
    status: 200,
    msg: 'ok',
    showType: 0,
  },
});
