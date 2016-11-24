import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getProgrammes } from '../actions';

import ProgrammeListItem from './programme_list_item';

class ProgrammeList extends Component {
  componentDidMount() {
    if (this.props.params) {
      if (!this.validLetter()) {
        // Redirect if no valid letter param is given
        browserHistory.push("/not_found");
        return;
      }
      this.props.getProgrammes(this.props.params.letter.toLowerCase(), 1);
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

  renderList() {
    if (!this.props.programmes) {return null;}
    return this.props.programmes.map((programme) => {
      return <ProgrammeListItem key={programme.id} programme={programme} img_size="medium" />;
    });
  }

  render() {
    return (
      <div>
        <h1>Programme Listing for {this.props.params ? this.props.params.letter.toUpperCase() : ""}</h1>
        { this.renderList() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    programmes: state.programmes
  }
}

export default connect(mapStateToProps, { getProgrammes })(ProgrammeList);
