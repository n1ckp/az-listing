import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { getProgrammes } from '../actions';
import { connect } from 'react-redux';

require('../styles/a_to_z_menu.scss');

class AToZMenu extends Component {
  goToPage(letter) {
    this.props.getProgrammes(letter,1);
    browserHistory.push(`/a-z/${letter}`);
  }

  renderLinks() {
    const options = [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
      "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0-9"
    ];
    return options.map((option) => {
      return (
        <a className="menu-link" key={option} onClick={(event) => this.goToPage(option)}>{option}</a>
      );
    });
  }

  render() {
    return (
      <div className="atoz-menu row">
        { this.renderLinks() }
      </div>
    );
  }
}

export default connect(null, { getProgrammes })(AToZMenu);
