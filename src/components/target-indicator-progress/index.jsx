import { memo } from 'react';
import ProgressBar from '../progress-bar';
import './style.scss';

function TargetIndicatorProgress(props) {
  return (
    <div className="target-indicator-progress">
      <div className="target-indicator-progress__description">Reached:</div>
      <ProgressBar />
    </div>
  );
}

export default memo(TargetIndicatorProgress);
