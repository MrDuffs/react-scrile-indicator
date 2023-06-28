import { memo } from 'react';
import './style.scss';

function TargetBlock({ currentTargetValue, finalTarget }) {
  const onSuccessStyle = () => {
    if (currentTargetValue === finalTarget) {
      return {
        background: '#00A910',
      };
    }
    return null;
  };

  return (
    <div
      className="target-block"
      style={onSuccessStyle()}
    >
      <div className="target-block__title">Target</div>
      <div className="target-block__divider" />
      <div className="target-block__goal">${finalTarget}</div>
    </div>
  );
}

export default memo(TargetBlock);
