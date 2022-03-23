import React, { Component, PureComponent } from 'react';
import { ThemeContext } from './context';

class DataWithContextType extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return null;
  }

  // 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。
  // 从 Provider 到其内部 consumer 组件（包括 .contextType 和 useContext）的传播
  // 不受制于 shouldComponentUpdate 函数，
  // 因此当 consumer 组件在其祖先组件跳过更新的情况下也能更新。
  // 通过新旧值检测来确定变化，使用了与 Object.is 相同的算法。
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('%c shouldComponentUpdate', 'color:green');
    return true;
  }

  // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('UNSAFE_componentWillReceiveProps');
  // }

  render() {
    /* 基于这个值进行渲染工作 */
    let value = this.context;
    console.log('DataWithContextType this.context', this.context);
    return (
      <div style={{ marginTop: 20, border: '1px solid', padding: 20 }}>
        <h3>通过ContextType 传递数据</h3>
        <div>
          <h3>{value.value}</h3>
          <button onClick={value.firstOnChange}>第一个consumer</button>
        </div>
        <button onClick={()=>{
          console.log('this.context',this.context)
        }}>打印this.context</button>
      </div>
    );
  }
}

const DataWithConsumer = () => {
  console.log('DataWithConsumer');
  return (
    <div style={{ marginTop: 20, border: '1px solid', padding: 20 }}>
      <h3>通过 ThemeContext.Consumer 传递数据</h3>
      <ThemeContext.Consumer>
        {(value) => {
          console.log('value', value);
          return (
            <div>
              <h3>{value.value}</h3>
              <button onClick={value.firstOnChange}>第一个consumer</button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    </div>
  );
};

class MiddleComponent extends PureComponent {
  render() {
    console.log('MiddleComponent Render');
    return (
      <div style={{ border: '1px solid ', padding: 20, marginTop: 20 }}>
        中间组件,两种方式使用Context的数据
        <DataWithContextType />
        <DataWithConsumer />
      </div>
    );
  }
}

export default MiddleComponent;
