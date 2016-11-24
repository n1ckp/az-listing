import React, { Component } from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/app';
import ProgrammeList from './components/programme_list';
import NotFound from './components/not_found';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/a-z/A" />
    <Route path="/a-z/:letter" component={ProgrammeList} />
    <Route path="/not_found" component={NotFound} />
  </Route>
);
