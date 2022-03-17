import React, { Component, useState } from 'react';

function HooksSetTimeoutPage(props) {
  const [num, setNumber] = useState(0);
  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setNumber(num + 1);
        console.log('hooks', num); // 0 0 0 0 0
      }, 1000);
    }
    // 1. 执行setNumber后，会导致组件function重新，所有语句会被重新调用执行
    // 2. 走到useState的时候，react内部其实走了updateState，拿到最新的状态：1，此时一切正常
    // 3. 走到 handleClick，此时 handleClick 被重新创建，即 handleClick 指向了新的内存空间，
    // 值得注意的是：for循环接着往下走的时候，num所在的上下文并不是当前函数（新创建的函数），
    // 而是第一次初始化时创建的函数，而那个函数的上下文中，num永远都是0，所以console.log输出都是0
    // 相反：class写法，state发生变化 handleClick 没有被重新创建而已，并且this指向也没发生改变
  };
  return (
    <div>
      <h2>hooks</h2>
      <button onClick={handleClick}>{num}</button>
    </div>
  );
}

class ClassSetTimeoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.setState({ number: this.state.number + 1 });
        console.log('class', this.state.number);// 1 2 3 4 5
      }, 1000);
    }
  };

  render() {
    return (
      <div>
        <h2>class</h2>
        <button onClick={this.handleClick}>{this.state.number}</button>
      </div>
    );
  }
}

function SetTimeoutPage(props) {
  return (
    <div>
      <HooksSetTimeoutPage />
      <ClassSetTimeoutPage />
    </div>
  );
}

export default SetTimeoutPage;
