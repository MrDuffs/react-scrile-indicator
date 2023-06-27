import { memo } from 'react';
import info from '../../assets/info.svg';
import './style.scss';

function TargetIndicatorInfo(props) {
  return (
    <div className="target-indicator-info">
      <img src={info} className="target-indicator-info__img" alt="info" />
      <div className="target-indicator-info__text">
        You need $1 more to reach your target.
      </div>
    </div>
  );
}

export default memo(TargetIndicatorInfo);
