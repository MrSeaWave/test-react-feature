import React from 'react';

class Tem2 extends React.Component {
  constructor(props) {
    super(props);
    console.log('Exam19-1');
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

  render() {
    // 0,2,3,4
    console.log('this.state', this.state);

    return (
      <>
        <div>World</div>
      </>
    );
  }
}

export default Tem2;
