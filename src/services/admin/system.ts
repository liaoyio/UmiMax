/**
 * 系统服务接口
 */
import { request } from '@umijs/max';

/**
 * 获取系统字典
 */
export const gitDict = () => {
  return request<API.ResponseStructure<any>>('/mock/api/system/dictList', {
    method: 'get',
  });
};

export const getSettingGroup = () => {
  return request<API.ResponseStructure<any>>(
    '/admin.php/system.setting/querySettingGroup',
    {
      method: 'get',
    },
  );
};

export const querySettingPid = () => {
  return request<API.ResponseStructure<any>>(
    '/admin.php/system.setting/querySettingPid',
    {
      method: 'get',
    },
  );
};

export const addGroup = (data: {
  key: string;
  title: string;
  pid?: number;
}) => {
  return request<API.ResponseStructure<any>>(
    '/admin.php/system.setting/addGroup',
    {
      method: 'post',
      data,
    },
  );
};
