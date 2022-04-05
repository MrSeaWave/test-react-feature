import React, { Component, useState } from 'react';

function HooksSetTimeoutPage(props) {
  const [num, setNumber] = useState(0);
  console.log('HooksSetTimeoutPage Render State Num:', num);
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
      // 闭包 五次 setNumber都是 1
      setNumber(num + 1);
      console.log('hooks', num); // 0 0 0 0 0
      //   HooksSetTimeoutPage 只会渲染一次

      // 五次 setNumber 分别为 1，2，3，4，5
      // setNumber((prevState) => prevState + 1);
      // console.log('hooks', num); // 0 0 0 0 0
      //   但 HooksSetTimeoutPage 只会渲染一次
      // 对于某个组件来说，多次调用同一个 setState ，它们会依次执行。而最终与 currentState 进行浅比较时只会用最终计算出来的 newState，来决定当前节点是否需要更新。
    }
  };

  const handleClick2 = () => {
    // https://zhuanlan.zhihu.com/p/452089306
    console.log('handleClick2_2', num);
    setNumber(2);

    // 如果当前fiber没有处于更新阶段。
    // 那么通过调用lastRenderedReducer获取最新的state,和上一次的currentState，进行浅比较，
    // 如果相等，那么就退出，
    // 这就证实了为什么useState，两次值相等的时候，组件不渲染的原因了，这个机制和Component模式下的setState有一定的区别。
    // 如果两次state不相等，那么调用scheduleUpdateOnFiber调度渲染当前fiber，scheduleUpdateOnFiber是react渲染更新的主要函数。
  };
  return (
    <div>
      <h2>hooks</h2>
      <h3>num: {num}</h3>
      <button onClick={handleClick}>在setTimeout中执行setState(val),过时的闭包</button>
      <button onClick={handleClick1}>
        在 hooks中5次setState(val)值，会在队列中依次执行setState,但最终会把最后结果渲染到页面上
      </button>
      <button onClick={handleClick2}>
        在 hooks中setState(2)值， 会进行数值的比较,不进行更新
      </button>
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
