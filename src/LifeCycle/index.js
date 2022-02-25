import React, { Component } from 'react';
import LifeCycle from './Life';

class LifeCycleIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { propsCount: 1 };
  }
  render() {
    const { propsCount } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ propsCount: propsCount + 1 });
          }}
        >
          props setState
        </button>
        <LifeCycle propsCount={propsCount} />
      </div>
    );
  }
}

export default LifeCycleIndex;
