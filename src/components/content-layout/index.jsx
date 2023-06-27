import { memo } from 'react';
import './style.scss';

function ContentLayout({ children }) {
  return (
    <div className="content-layout">
      {children}
    </div>
  );
}

export default memo(ContentLayout);
