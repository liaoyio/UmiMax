import { request } from '@umijs/max';

const api = {
  index: '/mock/api/index',
  login: '/mock/api/index/login',
};

/**
 * 获取网站信息
 * @constructor
 */
export async function index() {
  return request<API.ResponseStructure<any>>(api.index, {
    method: 'get',
  });
}

/**
 * 用户登录
 */
export async function login(data: API.UserLoginFrom) {
  if (data.username !== 'admin') {
    return;
  }
  return request<API.ResponseStructure<any>>(api.login, {
    method: 'post',
    data,
  });
}
