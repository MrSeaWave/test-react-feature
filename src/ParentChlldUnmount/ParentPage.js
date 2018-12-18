import React, { Component } from 'react';
import ChildPage from './ChildPage';

class ParentPage extends Component {
  componentWillMount() {
    console.log('parent componentWillMount');
  }

  componentDidMount() {
    console.log('parent componentDidMount');
  }

  componentWillUnmount() {
    console.log('parent componentWillUnmount');
  }
  render() {
    return (
      <div>
        parent
        <ChildPage />
      </div>
    );
  }
}

export default ParentPage;
