import { memo } from 'react';
import ProgressBar from '../progress-bar';
import TargetBlock from '../target-block';
import './style.scss';

function TargetIndicatorProgress({ currentTargetValue, progress, finalTarget }) {
  return (
    <div className="target-indicator-progress">
      <div className="target-indicator-progress__description">Reached:</div>
      <ProgressBar
        currentTargetValue={currentTargetValue}
        progress={progress}
        finalTarget={finalTarget}
      />
      <TargetBlock
        currentTargetValue={currentTargetValue}
        finalTarget={finalTarget}
      />
    </div>
  );
}

export default memo(TargetIndicatorProgress);
