import React from 'react';
import ChildIndex from './Child';

class FatherIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log('father constructor');
    this.state = {
      val: 0,
    };
  }

  componentWillMount() {
    console.log('father componentWillMount')
  }

  componentDidMount() {
    console.log('father componentDidMount')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("father getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("father componentDidUpdate")
  }

  render() {
    // 0,2,3,4
    console.log('father', this.state);

    return (
      <>
        <div>Father</div>
        <button onClick={()=>this.forceUpdate()}>forceUpdate</button>
        <ChildIndex/>
      </>
    );
  }
}

export default FatherIndex;
