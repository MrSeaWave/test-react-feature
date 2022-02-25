import React, { Component, createContext, PureComponent } from 'react';

const TestContextFirst = createContext();

const ChildrenComponent = () => {
  console.log('childrenComponent');
  return (
    <TestContextFirst.Consumer>
      {value => {
        console.log('value', value);
        return (
          <div>
            <h3>{value.value}</h3>
            <button onClick={value.firstOnChange}>第一个consumer</button>
          </div>
        );
      }}
    </TestContextFirst.Consumer>
  );
};

class MiddleComponent extends PureComponent {
  render() {
    console.log('middleFun');
    return <ChildrenComponent />;
  }
}

class TestContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'dark',
      providerValue: { value: 'dark', firstOnChange: this.firstOnChange },
    };
  }

  firstOnChange = () => {
    console.log('点击了我');
    this.setState({
      value: '在第一个consumer下点击操作',
      providerValue: { ...this.state.providerValue, value: "在第一个consumer下点击操作'" },
    });
  };
  render() {
    const { value, providerValue } = this.state;
    console.log('TestContext render state', this.state);
    return (
      <div>
        <TestContextFirst.Provider
          // value={{value,firstOnChange:this.firstOnChange}} // 在点击重复渲染页面时，consumer包括的依然会被渲染
          value={providerValue}
        >
          <div>
            <MiddleComponent />
          </div>
          <input
            onChange={e =>
              this.setState({
                value: e.target.value,
                providerValue: { ...providerValue, value: e.target.value },
              })
            }
          />
          <h1>测试第一个改变副元素数据</h1>
        </TestContextFirst.Provider>
        <button onClick={() => this.forceUpdate()}>重新渲染页面</button>
      </div>
    );
  }
}
export default TestContext;
