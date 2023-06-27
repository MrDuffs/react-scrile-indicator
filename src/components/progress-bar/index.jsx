import { memo } from 'react';
import './style.scss';

function ProgressBar({ currentTargetValue, progress, finalTarget }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar__outer">
        <div
          className="progress-bar__inner"
          style={{ width: `${progress}%` }}
        />
        {currentTargetValue !== finalTarget && (
          <span
            className="progress-bar__tooltip"
            style={{ left: `${progress}%` }}
          >
            ${currentTargetValue}
          </span>
        )}
      </div>
    </div>
  );
}

export default memo(ProgressBar);
