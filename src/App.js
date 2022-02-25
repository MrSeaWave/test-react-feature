import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
// import HooksExample from './HooksExample';
// import LifeCycleIndex from './LifeCycle';
// import LazyExample from './LazyExample/LazyExample';
// import DiffClassAndFunction from './DiffClassAndFunction';
// import PureComponentTest from './PureComponent';
// import TestContext from './Context';
// import ParentChildComponent from './ParentChlldUnmount';
// import KeyDiff from './KeyDiff';
// import Tem from './Tem';
import FatherIndex from './Nest/Father';
// import RouterA from './RouterTest/RouterA';
// import RouterB from './RouterTest/RouterB';
// import TestHocPage from './index';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div style={{}}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {routes.map(route => {
              const { path, title } = route;
              return (
                <li key={path}>
                  <Link to={path}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path="/" component={FatherIndex} />
              {routes.map(route => {
                const { path, component } = route;
                return <Route key={path} path={path} component={component} />;
              })}
            </Switch>
          </Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
