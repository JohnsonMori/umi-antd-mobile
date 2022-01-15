import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'https://nft.500px.com.cn',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
  antd: { mobile: false }, // 解决antd-mobile样式引入问题
});
