import { memo } from 'react';
import ContentLayout from '../../components/content-layout';
import TargetIndicatorInfo from '../../components/target-indicator-info';
import TargetIndicatorProgress from '../../components/target-indicator-progress';

function TargetIndicatorContent() {
  return (
    <ContentLayout>
      <TargetIndicatorProgress />
      <TargetIndicatorInfo />
    </ContentLayout>
  );
}

export default memo(TargetIndicatorContent);
