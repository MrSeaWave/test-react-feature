import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HooksExample from './HooksExample';
import LifeCycleIndex from './LifeCycle';
import LazyExample from './LazyExample/LazyExample';
import DiffClassAndFunction from './DiffClassAndFunction';
import PureComponentTest from './PureComponent';
import TestContext from './Context';
import ParentChildComponent from './ParentChlldUnmount';
import KeyDiff from './KeyDiff';
import Tem from './Tem';
import FatherIndex from './Nest/Father';
import RouterA from './RouterTest/RouterA';
import RouterB from './RouterTest/RouterB';

class App extends Component {
  render() {
    return (
      <div style={{}}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/router-a">router A</Link>
            </li>
            <li>
              <Link to="/router-b">Router B</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={FatherIndex} />
            <Route path="/router-a" component={RouterA} />
            <Route path="/router-b" component={RouterB} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
