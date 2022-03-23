import React, { Component } from 'react';

class MyWidget extends Component {
  state = {
    counter: 0,
  };
  handleClick = () => {
    this.setState(
      (preState) => ({ counter: preState.counter + 1 }),
      () => {
        // throw Error('也会触发ErrorBoundary');
      }
    );
  };

  throwErrorClick = () => {
    throw new Error('错误事件处理，ErrorBoundary 捕获不到');
  };

  componentWillUnmount() {
    console.log('%c 子组件卸载', 'color:green');
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return (
      <div>
        子控件
        <button onClick={this.handleClick}>Click Me 5次，触发render时错误</button>
        <button onClick={this.throwErrorClick}>click me 触发事件处理时的错误</button>
      </div>
    );
  }
}

export default MyWidget;
