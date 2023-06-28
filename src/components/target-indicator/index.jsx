import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TargetIndicatorContent from '../../containers/target-indicator-content';
import { loadIndicatorValues } from '../../store/reducers/target-indicator/actions';
import './style.scss';

function TargetIndicator() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIndicatorValues());
  }, [dispatch]);

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
