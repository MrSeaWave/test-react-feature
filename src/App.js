import React, { Component } from 'react';
import './App.css';
import HooksExample from './HooksExample';
import LifeCycleIndex from './LifeCycle';
import LazyExample from './LazyExample/LazyExample';
import DiffClassAndFunction from './DiffClassAndFunction';
import PureComponentTest from './PureComponent';
import TestContext from './Context';
import ParentChildComponent from './ParentChlldUnmount';

class App extends Component {
  render() {
    return (
      <div style={{}}>
        <ParentChildComponent/>
      </div>
    );
  }
}

export default App;
