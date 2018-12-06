import React, { Component } from 'react';
import './App.css';
import HooksExample from './HooksExample';
import LifeCycleIndex from './LifeCycle';
import LazyExample from './LazyExample/LazyExample';

class App extends Component {
  render() {
    return (
      <div style={{}}>
        <LazyExample/>
      </div>
    );
  }
}

export default App;
