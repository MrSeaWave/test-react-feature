import React, { Component } from 'react';
import './index.css';
// https://react.docschina.org/docs/react-component.html#static-getderivedstatefromprops
// https://code.likeagirl.io/understanding-react-component-life-cycle-49bf4b8674de
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      count: 1,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', this);
    // return {test:1} // 这个数据会被添加进this.state
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate',);
    console.log('prevProps, prevState, snapshot',prevProps, prevState, snapshot)
  }
  render() {
    console.log('render');
    console.log('this.state', this.state);
    console.log('this.props', this.props);
    const { count } = this.state;
    return (
      <div
        style={{
          backgroundColor: '#ccf',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>生命周期</h3>
        <div className="lifecycle-img" style={{ alignSelf: 'center' }} />
        <button
          onClick={() => {
            this.setState(preState => ({ count: preState.count + 1 }));
          }}
        >
          setState
        </button>
        <button
          onClick={() => {
            this.forceUpdate();
          }}
        >
          forceUpdate
        </button>
      </div>
    );
  }
}

export default LifeCycle;
