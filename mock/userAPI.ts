const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    return res.status(200).json({
      success: true,
      showType: 1,
      data: { list: users },
      status: 200,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    return res.status(200).json({
      success: true,
      showType: 1,
      status: 200,
    });
  },
};
