import React, { Component } from 'react';
import ParentPage from './ParentPage';

class ParentChildComponent extends Component {
  state = {
    visible: true,
  };
  render() {
    const { visible } = this.state;
    return (
      <div>
        {visible ? <ParentPage /> : 'null'}
        <button
          onClick={() => {
            this.setState({ visible: !visible });
          }}
        >
          click
        </button>
      </div>
    );
  }
}
export default ParentChildComponent;
