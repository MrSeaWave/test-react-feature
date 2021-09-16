import React from 'react';

class Exam19 extends React.Component {
  constructor(props) {
    super(props);
    console.log('Exam19-1');
    this.state = {
      val: 0,
    };
  }

  componentDidMount() {
    this.setState({val:++this.state.val})
    console.log(this.state.val) // 1
    this.setState({val:++this.state.val})
    console.log(this.state.val) // 2
    setTimeout(()=>{
      this.setState({val:++this.state.val})
      console.log(this.state.val) // 3
      this.setState({val:++this.state.val})
      console.log(this.state.val) // 4
    },0)


  }

  render() {
    // 0,2,3,4
    console.log('this.state', this.state);

    return (
      <>
      <div>Hello</div>
      </>
    );
  }
}

export default Exam19;
