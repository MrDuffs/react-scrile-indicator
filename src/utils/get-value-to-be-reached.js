export function getValueToBeReached(finalTarget, currentTargetValue) {
  return Math.round((finalTarget - currentTargetValue) * 10) / 10;
}
