import React, { lazy } from 'react';
// https://stackoverflow.com/questions/63808927/reactjs-create-chunks-automatically-with-lazy-loading

const lazyImport = (path) => {
  return lazy(() =>import(/* webpackChunkName: "[request]-lazy" */ `${path}`));
};

const routes = [
  {
    path: '/router-a',
    title: 'router A',
    component: lazy(() => import(/* webpackChunkName: "RouterA" */ './RouterTest/RouterA')),
  },
  {
    path: '/router-b',
    title: 'router B',
    component: lazy(() => import(/* webpackChunkName: "RouterB" */ './RouterTest/RouterB')),
  },
  {
    path: '/hoc',
    title: 'HOC',
    component: lazy(() => import(/* webpackChunkName: "HOC" */ './HOC')),
  },
  {
    path: '/life-cycle',
    title: 'life-cycle',
    component: lazy(() => import(/* webpackChunkName: "LifeCycle" */ './LifeCycle')),
  },
  {
    path: '/context',
    title: 'context-Provider-Consumer',
    component: lazy(() => import(/* webpackChunkName: "context" */ './Context')),
  },
  {
    path: '/clone-element',
    title: 'clone-element',
    component: lazy(() => import(/* webpackChunkName: "CloneElement" */ './CloneElement')),
  },
  {
    path: '/react-children',
    title: 'React.Children Api',
    component: lazy(() => import(/* webpackChunkName: "ReactChildrenPage" */ './ReactChildren')),
  },
  {
    path: '/hooks-state-push',
    title: 'hooks-state-push',
    component: lazy(() =>
      import(/* webpackChunkName: "StatePush" */ './HooksExample/StatePush/index')
    ),
  },
  {
    path: '/hooks-setTimeout',
    title: 'hooks/setTimeout',
    component: lazy(() =>
      import(/* webpackChunkName: "SetTimeoutPage" */ './HooksExample/SetTimeoutPage')
    ),
  },
  {
    path: '/hooks-class-different',
    title: 'hooks/different',
    component: lazy(() =>
      import(/* webpackChunkName: "CaptureRender" */ './HooksExample/CaptureRender')
    ),
  },
  {
    path: '/class-setStateAsync',
    title: 'class/setState异步、同步',
    component: lazy(() => import(/* webpackChunkName: "SetStateAsync" */ './SetStateAsync')),
  },
   {
    path: '/ErrorBoundary',
    title: 'ErrorBoundary',
    component: lazyImport('./ErrorBoundary/demo'),
  },
   {
    path: '/ref',
    title: 'ref',
    component: lazyImport('./Ref'),
  },
   {
    path: '/react-example',
    title: 'React例子',
    component: lazyImport('./ReactExample'),
  },
  {
    path: '/my-redux',
    title: '手写redux',
    // component: lazy(() => import(/* webpackChunkName: "MyRedux" */ './MyRedux/demo/index')),
    component: lazyImport('./MyRedux/demo'),
  },
];

export default routes;
