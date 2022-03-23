import React, { Component } from 'react';
import MiddleComponent from './Children';
import { ThemeContext } from './context';

class TestContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'dark',
      providerValue: { value: 'dark', firstOnChange: this.firstOnChange },
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {}

  firstOnChange = () => {
    console.log('点击了我');
    this.setState({
      value: '在第一个consumer下点击操作',
      providerValue: { ...this.state.providerValue, value: "在第一个consumer下点击操作'" },
    });
  };

  render() {
    const { value, providerValue } = this.state;
    console.log('TestContextPage render state', this.state);
    return (
      <div>
        <button onClick={() => this.forceUpdate()}>forceUpdate强制重新渲染页面</button>
        <ThemeContext.Provider
          // value={{value,firstOnChange:this.firstOnChange}} // 在点击重复渲染页面时，consumer包括的依然会被渲染
          value={providerValue}
        >
          <h1>测试改变providerValue.value元素数据</h1>
          <input
            value={this.state.value}
            onChange={(e) =>
              this.setState({
                value: e.target.value,
                providerValue: { ...providerValue, value: e.target.value },
              })
            }
          />
          <button
            onClick={() => {
              // 只更改数据
              this.state.providerValue.value = 124;
              this.setState({ value: 23 });
            }}
          >
            测试使用Object.is的方法更新provider里的context.consumer数据
          </button>
          <div>
            <MiddleComponent />
          </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default TestContextPage;
