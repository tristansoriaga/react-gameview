import React, { Component } from "react";

class GameFilter extends Component {
  styledCss = {
    paddingTop: 20
  };

  render() {
    return (
      <div style={this.styledCss}>
        <button className="btn btn-primary m-2">Add</button>
        <div className="btn-group">
          <button
            className="btn btn-secondary btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#/adventure">
              Adventure
            </a>
            <a className="dropdown-item" href="#/horror">
              Horror
            </a>
            <a className="dropdown-item" href="#/rpg">
              RPG
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GameFilter;
