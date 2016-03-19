import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory as history } from 'react-router';

import MainFrameset from './framesets/main-frameset';
import MainView from './views/main-view';
import DummyView from './views/dummy-view';

const routeConfig = [
  {
    path: '/',
    component: MainFrameset,
    indexRoute: {
      component: MainView
    },
    childRoutes: [{
      path: 'dummy-page',
      component: DummyView
    }]
  }
];

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store(history)}>
      <Router history={history} routes={routeConfig} />
    </Provider>
  );
}

export default Root;
