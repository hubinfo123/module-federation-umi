import React from 'react';
import styles from './index.less';

const RemoteButton = React.lazy(() => import('app2/Button'));

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index app1</h1>
      <React.Suspense fallback="loading button">
        <RemoteButton />
      </React.Suspense>
    </div>
  );
}
