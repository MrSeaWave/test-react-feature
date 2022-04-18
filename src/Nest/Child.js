import React from 'react';

class ChildIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log('Child constructor');
    this.state = {
      val: 0,
    };
  }

  componentWillMount() {
    console.log('children componentWillMount')
  }

  componentDidMount() {
    console.log('children componentDidMount')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("children getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('children componentDidUpdate')
  }

  render() {
    // 0,2,3,4
    console.log('children', this.state);

    return (
      <>
        <div>World</div>
      </>
    );
  }
}

export default ChildIndex;
