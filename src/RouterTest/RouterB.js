import React from 'react';

class RouterB extends React.Component {
  constructor(props) {
    super(props);
    console.log('routerB constructor');
    this.state = {
      val: 0,
    };
  }

  componentWillMount() {
    console.log('routerB componentWillMount')
  }

  componentDidMount() {
    console.log('routerB componentDidMount')
  }

  componentWillUnmount() {
    console.log('routerB componentWillUnmount')
  }

  render() {
    // 0,2,3,4
    console.log('routerB', this.state);

    return (
      <>
        <div style={{ height: 1500, backgroundColor: 'green'}}>routerB</div>
        <h1>bbbb</h1>
      </>
    );
  }
}

export default RouterB;
