import React, { Component } from 'react';
import { connect } from 'react-redux';

import AToZMenu from './a_to_z_menu';

require('../styles/app.scss');

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <AToZMenu />
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
