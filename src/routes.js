import React, { lazy } from 'react';

const routes = [
  {
    path: '/router-a',
    title: 'router A',
    component: lazy(() => import(/* webpackChunkName: "RouterA" */  './RouterTest/RouterA')),
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
    component: lazy(() => import(/* webpackChunkName: "StatePush" */ './HooksExample/StatePush/index')),
  },
    {
    path: '/my-redux',
    title: '手写redux',
    component: lazy(() => import(/* webpackChunkName: "MyRedux" */ './MyRedux/demo/index')),
  },
];

export default routes
