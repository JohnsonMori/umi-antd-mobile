import { useEffect } from 'react';
import { Swiper, Toast } from 'antd-mobile';
import { listBanner } from '@/services/home';
import { useRequest } from 'ahooks';
import './index.less';

const IndexPage: React.FC = () => {
  const bannerParams = { page: 1, pageSize: 10, type: 2 };

  /**
   * 请求listBanner，此处useRequest第二个参数可不写
   */
  const {
    data: bannerData,
    loading: bannerLoading,
    run,
  } = useRequest(() => listBanner(bannerParams), {
    manual: false, // 默认false可不写,在页面或组件初始化时自动执行listBanner。如果设置为true，则需要手动调用run(bannerParams)触发执行
    onSuccess: (data, params) => {}, // listBanner请求成功的回调
  });

  const swiperItems = bannerData?.data?.banner?.map((v: any, i: number) => (
    <Swiper.Item key={v?.id}>
      <img
        src={v?.cover}
        alt=""
        onClick={() => {
          Toast.show(`你点击了卡片 ${i + 1}`);
        }}
      />
    </Swiper.Item>
  ));

  useEffect(() => {
    if (bannerLoading) {
      Toast.show({
        icon: 'loading',
        content: '加载中…',
      });
    }
  }, [bannerLoading]); // 监听接口loading状态

  return (
    <div className="home_wrap">
      <Swiper
        style={{ '--border-radius': '8px' }}
        className="swiper_wrap"
        autoplay
        loop
      >
        {swiperItems}
      </Swiper>
    </div>
  );
};

export default IndexPage;
