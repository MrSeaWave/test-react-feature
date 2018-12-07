import React, { Component } from 'react';
import './App.css';
import HooksExample from './HooksExample';
import LifeCycleIndex from './LifeCycle';
import LazyExample from './LazyExample/LazyExample';
import DiffClassAndFunction from './DiffClassAndFunction';
import PureComponentTest from './PureComponent';

class App extends Component {
  render() {
    return (
      <div style={{}}>
        <PureComponentTest/>
      </div>
    );
  }
}

export default App;
