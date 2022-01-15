import { RequestConfig } from 'umi';
import { getCookie } from './utils/cookie';

export const request: RequestConfig = {
  timeout: 120 * 1000,
  errorConfig: {},
  middlewares: [],

  // 请求拦截
  requestInterceptors: [
    (url, options) => {
      let headers = {};
      const nfttoken = getCookie('nfttoken') || '';
      headers = {
        Authorization: `Bearer ${nfttoken}`,
      };

      return {
        url: `/api/${url}`,
        options: { ...options, headers },
      };
    },
  ],

  // 响应拦截
  responseInterceptors: [],
};
