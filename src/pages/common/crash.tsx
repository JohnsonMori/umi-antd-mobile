import './crash.less';

const imgCrash = require('@/assets/crash.png');
const imgWait = require('@/assets/wait.png');

const CrashPage: React.FC = () => {
  return (
    <div className="crash_wrap">
      <img className="crash_img_crash" src={imgCrash} alt="" />
      <div className="crash_title">太火爆了，都被挤爆啦</div>
      <div className="crash_desc">请稍后再试</div>
      <img className="crash_img_wait" src={imgWait} alt="" />
    </div>
  );
};

export default CrashPage;
