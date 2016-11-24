import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getProgrammes } from '../actions';

import ProgrammeListItem from './programme_list_item';

require('../styles/programme_list.scss');

class ProgrammeList extends Component {
  constructor(props) {
    super(props);
    this.state = { current_page: 1 };
  }

  componentDidMount() {
    if (this.props.params) {
      if (!this.validLetter()) {
        // Redirect if no valid letter param is given
        browserHistory.push("/not_found");
        return;
      }
      this.fetchProgrammes(this.state.current_page);
    }
  }

  fetchProgrammes(page) {
    this.props.getProgrammes(this.props.params.letter.toLowerCase(), page);
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

  goToPrevPage() {
    const prev_page = this.state.current_page - 1;
    this.setState({current_page: prev_page});
    this.fetchProgrammes(prev_page);
  }

  goToNextPage() {
    const next_page = this.state.current_page + 1;
    this.setState({current_page: next_page});
    this.fetchProgrammes(next_page);
  }

  renderPagination() {
    if(!this.props.more_pages == undefined) { return null; }
    return (
      <div className="pagination row">
        <div className="row">
          <div className="small-2 columns">
            {(this.state.current_page > 1) ? <a className="prev-page" onClick={() => this.goToPrevPage()}>Prev Page</a> : null}
          </div>

          <div className="small-2 columns">
            {(this.props.more_pages) ? <a className="next-page" onClick={() => this.goToNextPage() }>Next Page</a> : null}
          </div>
        </div>
        <div className="current-page row">Page {this.state.current_page}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Programme Listing for {this.props.params ? this.props.params.letter.toUpperCase() : ""}</h1>
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
    more_pages: state.more_pages
  }
}

export default connect(mapStateToProps, { getProgrammes })(ProgrammeList);
