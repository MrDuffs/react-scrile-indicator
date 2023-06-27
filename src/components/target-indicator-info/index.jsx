import { memo } from 'react';
import info from '../../assets/info.svg';
import { getValueToBeReached } from '../../utils/get-value-to-be-reached';
import './style.scss';

function TargetIndicatorInfo({ currentTargetValue, finalTarget }) {
  return (
    <div className="target-indicator-info">
      <img src={info} className="target-indicator-info__img" alt="info" />
      <div className="target-indicator-info__text">
        You need ${getValueToBeReached(finalTarget, currentTargetValue)} more to reach your target.
      </div>
    </div>
  );
}

export default memo(TargetIndicatorInfo);
