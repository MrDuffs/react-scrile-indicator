import { memo } from 'react';
import TargetBlock from '../target-block';
import './style.scss';

function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <div className="progress-bar__outer">
        <div className="progress-bar__inner" />
        <span className="progress-bar__tooltip">$14</span>
      </div>
      <TargetBlock />
    </div>
  );
}

export default memo(ProgressBar);
