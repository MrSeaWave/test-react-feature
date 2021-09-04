import React, { Component } from 'react';
import uuid from 'uuid/v1';

let time = 0

class KeyDiff extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    const list = Array.from({length: 1000}).fill(null).map(() => ({
      value: uuid(),
      key: uuid()
    }));
    this.setState({list})

    setTimeout( () => {
      const list = Array.from({length: 1000}).fill(null).map(() => ({
        value: uuid(),
        key: uuid()
      }), 1000);
      this.setState({list})
    })
  }

  componentWillUpdate() {
    time = +Date.now()
  }

  componentDidUpdate() {
    console.log(+Date.now() - time)
  }

  render() {
    const {list} = this.state;
    return (
      <div className="App">
        <ul>
          {list.map((item,idx) => (
            // <li>{item.value}</li>
            <li key={item.key}>{item.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default KeyDiff
