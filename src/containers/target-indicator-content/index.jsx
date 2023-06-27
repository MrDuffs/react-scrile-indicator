import {
  memo, useEffect, useLayoutEffect, useState,
} from 'react';
import ContentLayout from '../../components/content-layout';
import TargetIndicatorInfo from '../../components/target-indicator-info';
import TargetIndicatorProgress from '../../components/target-indicator-progress';
import { calculateProgress } from '../../utils/calculate-progress';

function TargetIndicatorContent() {
  const initialValue = 14;
  const finalTarget = 15;
  const [currentValue, setCurrentValue] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentValue < initialValue) {
      setTimeout(() => {
        setCurrentValue((prev) => prev + 1);
      }, 50);
    }
  }, [currentValue]);

  useLayoutEffect(() => {
    setProgress(() => calculateProgress(currentValue, finalTarget));
  }, [currentValue]);

  useEffect(() => {
    if (currentValue >= initialValue && currentValue < finalTarget) {
      setTimeout(() => {
        setCurrentValue((prev) => +(prev + 0.2).toFixed(1));
      }, 2000);
    }
  }, [currentValue]);

  // const callbacks = {
  //   onProgress: useCallback(() => {
  //     progress < finalTarget ? setProgress((prev) => prev + 0.2) : setProgress(0);
  //   }, [progress]),
  // };

  return (
    <ContentLayout>
      <TargetIndicatorProgress
        currentTargetValue={currentValue}
        progress={progress}
        finalTarget={finalTarget}
      />
      {currentValue !== finalTarget && (
        <TargetIndicatorInfo
          currentTargetValue={currentValue}
          finalTarget={finalTarget}
        />
      )}
    </ContentLayout>
  );
}

export default memo(TargetIndicatorContent);
