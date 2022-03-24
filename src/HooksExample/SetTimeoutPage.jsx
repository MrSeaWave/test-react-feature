import React, { Component, useState } from 'react';

function HooksSetTimeoutPage(props) {
  console.log('HooksSetTimeoutPage');
  const [num, setNumber] = useState(0);
  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        // 过时的闭包,此时的num为1秒前的num
        setNumber(num + 1); // 最终都会变成1
        console.log('hooks', num); // 0 0 0 0 0
        //  HooksSetTimeoutPage 会渲染两次
        // 触发 会有优先级不足的情况(updateExpirationTime < renderExpirationTime)？
        // 当我们调用setNumber时候，调用scheduleUpdateOnFiber渲染当前组件时，又产生了一次新的更新，
        // 所以把最终执行reducer更新state任务交给下一次更新。
        // 改为
        // setNumber(preState=>preState+1);// 最终会1，2，3，4，5
        // console.log('hooks', num); // 0 0 0 0 0
        // HooksSetTimeoutPage 会渲染5次
        // 如果第一个参数是一个函数，会引用上一次 update产生的 state,
        // 所以需要循环调用，每一个update的reducer，
        // 如果setNumber(2)是这种情况，那么只用更新值，
        // 如果是setNumber(state=>state+1),那么传入上一次的 state 得到最新state。
      }, 1000);
    }
    // 1. 执行setNumber后，会导致组件function重新，所有语句会被重新调用执行
    // 2. 走到useState的时候，react内部其实走了updateState，拿到最新的状态：1，此时一切正常
    // 3. 走到 handleClick，此时 handleClick 被重新创建，即 handleClick 指向了新的内存空间，
    // 值得注意的是：for循环接着往下走的时候，num所在的上下文并不是当前函数（新创建的函数），
    // 而是第一次初始化时创建的函数，而那个函数的上下文中，num永远都是0，所以console.log输出都是0
    // 相反：class写法，state发生变化 handleClick 没有被重新创建而已，并且this指向也没发生改变
  };

  const handleClick1 = () => {
    for (let i = 0; i < 5; i++) {
      setNumber(1);
      console.log('hooks', num); // 0 0 0 0 0
      //   HooksSetTimeoutPage 只会渲染一次
    }
  };
  return (
    <div>
      <h2>hooks</h2>
      <h3>num: {num}</h3>
      <button onClick={handleClick}>在setTimeout中执行setState(val),过时的闭包</button>
      <button onClick={handleClick1}>在 hooks中5次setState相同的值， 会进行数值的比较</button>
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
        this.setState({ number: 1 });
        console.log('class', this.state.number); // 1 2 3 4 5
      }, 1000);
    }
  };

  render() {
    console.log('render');
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
