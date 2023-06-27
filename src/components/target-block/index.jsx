import { memo } from 'react';
import './style.scss';

function TargetBlock(props) {
  return (
    <div className="target-block">
      <div className="target-block__title">Target</div>
      <div className="target-block__divider" />
      { /* <div className="target-block__divider_mask" /> */ }
      <div className="target-block__goal">$15</div>
    </div>
  );
}

export default memo(TargetBlock);
