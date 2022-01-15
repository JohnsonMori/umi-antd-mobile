import { request } from 'umi';

/**
 * Banner列表
 * @param data
 * @returns
 */
export const listBanner = (data: {
  page: number;
  pageSize: number;
  type: number;
}) => {
  return request('/admmgr/listBanner', {
    method: 'post',
    data,
  });
};

/**
 * QA分类列表
 * @param data
 * @returns
 */
export const homeListQa = (data: { showNum: number }) => {
  return request('/admmgr/homeListQa', {
    method: 'post',
    data,
  });
};

/**
 * QA首页列表
 * @param data
 * @returns
 */
export const indexListQa = (data: {
  categoryId: number;
  page: number;
  pageSize: number;
}) => {
  return request('/admmgr/indexListQa', {
    method: 'post',
    data,
  });
};
