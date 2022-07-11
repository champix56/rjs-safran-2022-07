import React, { lazy, Suspense } from 'react';
import { ITchatWriterProps } from './TchatWriter';

const LazyTchatWriter = lazy(() => import('./TchatWriter'));

const TchatWriter = (props: JSX.IntrinsicAttributes & ITchatWriterProps) => (
  <Suspense fallback={null}>
    <LazyTchatWriter {...props} />
  </Suspense>
);

export default TchatWriter;
