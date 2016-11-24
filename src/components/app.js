import React, { Component } from 'react';
import { connect } from 'react-redux';
require('../styles/app.scss');

class App extends Component {
  render() {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
