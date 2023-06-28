import {
  memo, useEffect, useRef, useState,
} from 'react';
import './style.scss';

function ProgressBar({ currentTargetValue, progress, finalTarget }) {
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const tooltipRef = useRef();

  useEffect(() => {
    if (tooltipRef.current) {
      const tooltipStyle = tooltipRef.current.style.width;
      if (currentTargetValue !== finalTarget) {
        if (+tooltipStyle.slice(0, -1) < 38) setTooltipWidth(+tooltipStyle.slice(0, -1) + 1);
      }
    }
  }, [currentTargetValue, finalTarget, tooltipWidth]);

  const getTooltipStyles = () => {
    if (currentTargetValue % 1 !== 0) {
      return {
        textAlign: 'start',
        width: `${tooltipWidth}%`,
        left: `${progress + 1.5}%`,
      };
    }
    return {
      width: '26%',
      left: `${progress}%`,
    };
  };

  return (
    <div className="progress-bar">
      <div className="progress-bar__outer">
        <div
          className="progress-bar__inner"
          style={{ width: `${progress}%` }}
        />
        {currentTargetValue !== finalTarget && (
          <span
            ref={tooltipRef}
            className="progress-bar__tooltip"
            style={getTooltipStyles()}
          >
            ${currentTargetValue}
          </span>
        )}
      </div>
    </div>
  );
}

export default memo(ProgressBar);
