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
];

export default routes
