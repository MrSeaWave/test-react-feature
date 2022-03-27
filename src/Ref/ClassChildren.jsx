import React, { Component } from 'react';

class ClassChildren extends Component {
  state = { classList: ['a'] };

  onClassClick = () => {
    console.log('ClassChildren', this.state);
  };

  render() {
    return <div>ClassChildren</div>;
  }
}

export default ClassChildren;
