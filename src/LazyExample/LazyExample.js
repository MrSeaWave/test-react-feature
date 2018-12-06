import React, { Component, Suspense, lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

class LazyExample extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  render() {
    const { visible } = this.state;
    return (
      <div>
        <Suspense fallback={<div>loading-----</div>}>
          {visible ? <OtherComponent /> : <div>仔细看Sources的变化</div>}
        </Suspense>
        <button
          onClick={() => {
            this.setState(preState => ({ visible: !preState.visible }));
          }}
        >
          懒加载
        </button>
      </div>
    );
  }
}

export default LazyExample;
