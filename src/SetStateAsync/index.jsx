import React from 'react';
import PlusWithStateVal from './PlusWithStateVal';

class SetStateAsync extends React.Component {
  constructor(props) {
    super(props);
    console.log('SetStateAsync');
    this.state = {
      val: 0,
    };
  }
  // react 生命周期 setState 异步

  onSetStateClick = () => {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 0
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 0
    //  render --->this.state 1
  };

  //如果是下一个state依赖前一个state的话，推荐给setState一个参数传入一个function
  onSetStateCbClick = () => {
    this.setState(
      (prevState, props) => ({ val: prevState.val + 1 }),
      () => {
        console.log('setState,的第二个callBack，this.state.val', this.state.val); // 1
      }
    );
    console.log(this.state.val); // 0
    this.setState((prevState, props) => ({ val: prevState.val + 1 })); 
    console.log(this.state.val); // 0
    // render --->this.state 2
  };

  onSetTimeOutClick = () => {
    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 1
      //  render ---this.state 1
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 2
      //  render ---this.state 2
    }, 0);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('SetStateAsync componentDidUpdate');
  }

  render() {
    // 0,2,3,4
    console.log('SetStateAsync Render this.state', this.state);

    return (
      <>
        <div>
          <h3>React Class SetState 异步 同步案例</h3>
          每次点击按钮前，请点击reset按钮
          <button
            onClick={() => {
              this.setState({ val: 0 });
            }}
          >
            Reset
          </button>
          <br />
          <button onClick={this.onSetStateClick}>this.setState({})</button>
          <button onClick={this.onSetStateCbClick}>this.setState((prevState,props)=>({}))</button>
          <button onClick={this.onSetTimeOutClick}>setTimeout</button>
          <br />
          <PlusWithStateVal />
        </div>
      </>
    );
  }
}

export default SetStateAsync;
