import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import RepoSearch from 'Component/RepoSearch'

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <Redirect to="/repoSearch" />}
    />
    <Route
      exact
      path="/repoSearch"
      component={RepoSearch}
    />
  </Switch>
);

export default Routes;
