import {
  memo, useEffect, useState,
} from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ContentLayout from '../../components/content-layout';
import TargetIndicatorInfo from '../../components/target-indicator-info';
import TargetIndicatorProgress from '../../components/target-indicator-progress';
import { calculateProgress } from '../../utils/calculate-progress';

function TargetIndicatorContent() {
  const select = useSelector((state) => ({
    initialValue: state.indicatorValues.initialValue,
    finalTarget: state.indicatorValues.finalTarget,
  }), shallowEqual);

  const [currentValue, setCurrentValue] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentValue < select.initialValue) {
      setTimeout(() => {
        setCurrentValue((prev) => prev + 1);
      }, 50);
    }
  }, [select.initialValue, currentValue]);

  useEffect(() => {
    setProgress(() => calculateProgress(currentValue, select.finalTarget));
  }, [select.finalTarget, currentValue]);

  useEffect(() => {
    if (select.initialValue && select.finalTarget && currentValue >= select.initialValue && currentValue < select.finalTarget) {
      setTimeout(() => {
        setCurrentValue((prev) => +(prev + 0.2).toFixed(1));
      }, 2000);
    }
  }, [select.initialValue, select.finalTarget, currentValue]);

  return (
    <ContentLayout>
      <TargetIndicatorProgress
        currentTargetValue={currentValue}
        progress={progress}
        finalTarget={select.finalTarget}
      />
      {currentValue !== select.finalTarget && (
        <TargetIndicatorInfo
          currentTargetValue={currentValue}
          finalTarget={select.finalTarget}
        />
      )}
    </ContentLayout>
  );
}

export default memo(TargetIndicatorContent);
