import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getProgrammes } from '../actions';

import ProgrammeListItem from './programme_list_item';

require('../styles/programme_list.scss');

class ProgrammeList extends Component {
  componentDidMount() {
    if (this.props.params) {
      if (!this.validLetter(this.props.params.letter)) {
        // Redirect if no valid letter param is given
        browserHistory.push("/not_found");
        return;
      }
      if (this.props.params.letter != this.props.page_letter) {
        browserHistory.push(`/a-z/${this.props.page_letter}`);
      }
    }
    this.fetchProgrammes(this.props.page_number);
  }

  fetchProgrammes(page) {
    this.props.getProgrammes(this.props.page_letter.toLowerCase(), page);
  }

  validLetter(letter) {
    if (letter.length === 3) {
      return letter.match(/^(0\-9)$/);
    } else if (letter.length === 1) {
      return letter.match(/^[A-Z]|[a-z]$/);
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

  goToPrevPage() {
    this.props.getProgrammes(this.props.page_letter, this.props.page_number - 1);
  }

  goToNextPage() {
    this.props.getProgrammes(this.props.page_letter, this.props.page_number + 1);
  }

  hasMorePages() {
    return this.props.total_count > this.props.page_number*this.props.per_page;
  }

  renderPagination() {
    return (
      <div className="pagination row">
        <div className="row">
          <div className="small-2 columns">
            {(this.props.page_number > 1) ? <a className="prev-page" onClick={() => this.goToPrevPage()}>Prev Page</a> : null}
          </div>

          <div className="small-2 columns">
            {(this.hasMorePages()) ? <a className="next-page" onClick={() => this.goToNextPage() }>Next Page</a> : null}
          </div>
        </div>
        <div className="current-page row">Page {this.props.page_number}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Programme Listing for {this.props.page_letter.toUpperCase()}</h1>
        { this.renderPagination() }
        { this.renderList() }
        { this.renderPagination() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    programmes: state.programmes,
    page_letter: state.page_letter,
    page_number: state.page_number,
    total_count: state.count,
    per_page: state.per_page
  }
}

export default connect(mapStateToProps, { getProgrammes })(ProgrammeList);
