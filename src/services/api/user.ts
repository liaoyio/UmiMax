import { request } from '@umijs/max';

const api = {
  getUserInfoApi: '/mock/user/info',
  loginApi: '/mock/index/login',
  logoutApi: '/mock/user/logout',
  setUserApi: '/mock/user/setUserInfo',
  setPwdApi: '/mock/user/setPassword',
  getMoneyLogApi: '/mock/user/getMoneyLog',
};

/**
 * 获取网站信息
 * @constructor
 */
export async function getUserInfo() {
  return request<API.ResponseStructure<any>>(api.getUserInfoApi, {
    method: 'get',
  });
}

/**
 * 退出登录
 * @constructor
 */
export async function Logout() {
  return request<ResponseStructure<any>>(api.logoutApi, {
    method: 'post',
  });
}

/**
 * 设置用户信息
 * @constructor
 */
export async function setUserInfo(data: USER.UserInfo) {
  return request<ResponseStructure<any>>(api.setUserApi, {
    method: 'post',
    data,
  });
}

/**
 * 设置密码
 * @constructor
 */
export async function setPassWord(data: USER.UpdatePassword) {
  return request<ResponseStructure<any>>(api.setPwdApi, {
    method: 'post',
    data,
  });
}

/**
 * 获取积分记录
 * @constructor
 */
export async function getMoneyLog(params: any) {
  return request<ResponseStructure<any>>(api.getMoneyLogApi, {
    method: 'get',
    params,
  });
}
