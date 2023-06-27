import { memo } from 'react';
import TargetIndicatorContent from '../../containers/target-indicator-content';
import './style.scss';

function TargetIndicator() {
  return (
    <div className="target-indicator">
      <div className="target-indicator__header">
        Target Indicator Demo
      </div>
      <TargetIndicatorContent />
    </div>
  );
}

export default memo(TargetIndicator);
