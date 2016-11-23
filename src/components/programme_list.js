import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProgrammeList extends Component {
  render() {
    return (
      <div>
        <h1>Programme List</h1>
      </div>
    );
  }
}

export default connect()(ProgrammeList);
