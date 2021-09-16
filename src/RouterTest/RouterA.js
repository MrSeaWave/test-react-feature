import React from 'react';
import { Link } from 'react-router-dom';

class RouterA extends React.Component {
  constructor(props) {
    super(props);
    console.log('routerA constructor');
    this.state = {
      val: 0,
    };
  }

  componentWillMount() {
    console.log('routerA componentWillMount')
  }

  componentDidMount() {
    console.log('routerA componentDidMount')
  }

  componentWillUnmount() {
    console.log('routerA componentWillUnmount')
  }

  render() {
    // 0,2,3,4
    console.log('routerA', this.state);

    return (
      <>
        <div style={{ height: 1500, backgroundColor: 'green'}}>routerA</div>
        <Link to="/router-b">Router B</Link>

      </>
    );
  }
}

export default RouterA;
