import React, { Suspense } from 'react';
import WithHooksToGetData from './WithHooksToGetData';

function Spin({ tip }) {
  return <div>{tip}</div>;
}
export default function SuspensePage() {
  return (
    <div>
      Suspense
      <Suspense fallback={<Spin tip="正在拼命获取数据，请稍后..." />}>
        <WithHooksToGetData />
      </Suspense>
    </div>
  );
}
