import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import RoutesPrivates from './routesprivate';

import { Home } from '../Pages/Home/index';

export function Routes() {
   return (
    <Switch>
      <Route path="/" exact component={Home} />

      {/* <Redirect from='*' to='/' /> */}
    </Switch>
  );
}