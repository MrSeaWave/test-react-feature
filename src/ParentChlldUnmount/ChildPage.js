import React, { Component } from 'react';

class ChildPage extends Component {
  componentWillMount() {
    console.log('child componentWillMount');
  }

  componentDidMount() {
    console.log('child componentDidMount');
  }
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }
  render() {
    return <div>child</div>;
  }
}

export default ChildPage;
