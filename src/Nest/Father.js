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

  render() {
    // 0,2,3,4
    console.log('father', this.state);

    return (
      <>
        <div>Father</div>
        <ChildIndex/>
      </>
    );
  }
}

export default FatherIndex;
