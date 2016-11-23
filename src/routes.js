import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProgrammeList from './components/programme_list';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProgrammeList} />
  </Route>
);
