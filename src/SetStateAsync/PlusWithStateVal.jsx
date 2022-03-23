import React, { PureComponent } from 'react';

class PlusWithStateVal extends PureComponent {
  constructor(props) {
    super(props);
    console.log('PlusWithStateVal');
    this.state = {
      val: 0,
    };
  }

  onClick0 = () => {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 第 1 次 log 0

    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 第 2 次 log 0

    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 3 次 log 2
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 4 次 log 3
    }, 0);
    //  render 1,2,3
  };

  onClick1 = () => {
    this.setState({ val: this.state.val++ });
    console.log(this.state.val); // 1
    this.setState({ val: this.state.val++ });
    console.log(this.state.val); // 2
    setTimeout(() => {
      this.setState({ val: this.state.val++ });
      console.log(this.state.val); // 1
      this.setState({ val: this.state.val++ });
      console.log(this.state.val); // 1
    }, 0);
    //  render 1,1,1
  };

  onClick2 = () => {
    this.setState({ val: ++this.state.val });
    console.log(this.state.val); // 1
    this.setState({ val: ++this.state.val });
    console.log(this.state.val); // 2
    setTimeout(() => {
      this.setState({ val: ++this.state.val });
      console.log(this.state.val); // 3
      this.setState({ val: ++this.state.val });
      console.log(this.state.val); // 4
    }, 0);
    //  render 2,3,4
  };

  render() {
    console.log('PlusWithStateVal Render this.state', this.state);

    return (
      <div style={{ marginTop: 20 }}>
        <h3>React ++数据setState 案例</h3>
        每次点击按钮前，请点击reset按钮
        <button
          onClick={() => {
            this.setState({ val: 0 });
          }}
        >
          Reset
        </button>
        <br />
        <button onClick={this.onClick0}>this.state.val+1</button>
        <button onClick={this.onClick1}>this.state.val++</button>
        <button onClick={this.onClick2}>++this.state.val</button>
      </div>
    );
  }
}

export default PlusWithStateVal;
