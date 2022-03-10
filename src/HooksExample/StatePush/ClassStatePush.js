import React, { Component } from 'react';
class ClassStatePush extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3],
    };
  }

  test = () => {
    // class采用同样的方式是没有问题的
    this.state.nums.push(1);
    this.setState({
      nums: this.state.nums,
    });
  };

  render() {
    let { nums } = this.state;
    return (
      <div>
        <h2>class 页面</h2>
        <button onClick={this.test}>测试</button>
        <div>
          {nums.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ClassStatePush;
