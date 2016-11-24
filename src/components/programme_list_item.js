import React, { Component } from 'react';

export default class ProgrammeListItem extends Component {
  renderImage() {
    let img_size = "";
    switch(this.props.img_size) {
      case "small":
        img_size = "192x108";
        break;
      case "medium":
        img_size = "406x228";
        break;
      case 'large':
        img_size = "560x315";
        break;
      default:
        return ""
        break;
    }
    return (
      <img src={this.props.programme.images.standard.replace("{recipe}", img_size)}></img>
    );
  }

  render() {
    if (!this.props.programme) {return null;}
    return (
      <div className="programme-list-item row">
        <div className="small-4 columns">
          {this.renderImage()}
        </div>
        <div className="small-8 columns">
          <h3>{ this.props.programme.title }</h3>
        </div>
      </div>
    );
  }
}
