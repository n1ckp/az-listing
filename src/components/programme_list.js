import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class ProgrammeList extends Component {
  componentDidMount() {
    if (this.props.params && !this.validLetter()) {
      // Redirect if no valid letter param is given
      browserHistory.push("/not_found");
    }
  }

  validLetter() {
    if (this.props.params.letter.length === 3) {
      return this.props.params.letter.match(/^(0\-9)$/);
    } else if (this.props.params.letter.length === 1) {
      return this.props.params.letter.match(/^[A-Z]|[a-z]$/);
    } else {
      return false;
    }

  }

  render() {
    return (
      <div>
        <h1>Programme Listing for {this.props.params ? this.props.params.letter.toUpperCase() : ""}</h1>
      </div>
    );
  }
}

export default connect()(ProgrammeList);
