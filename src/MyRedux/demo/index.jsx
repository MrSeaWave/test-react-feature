import React from 'react';
import { ReduxProvider } from '../ReactRedux';
import store from './store';
import ColorPanel from './pages/ColorPanel';

function MyReduxDemo() {
  return (
    <div>
      <a>自定义redux</a>
      <ReduxProvider value={{ store: store }}>
        <ColorPanel />
      </ReduxProvider>
    </div>
  );
}

export default MyReduxDemo;
