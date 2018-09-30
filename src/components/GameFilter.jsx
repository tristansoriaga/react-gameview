import React, { Component } from "react";

class GameFilter extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary m-2">Add</button>
        {/* <select>
          <option value="action" selected>
            Action
          </option>
          <option value="adventure">Adventure</option>
          <option value="horror">Horror</option>
          <option value="rpg">RPG</option>
        </select> */}
        <div className="btn-group">
          <button
            className="btn btn-secondary btn-lg dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Large button
          </button>
          <div className="dropdown-menu">...</div>
        </div>
      </div>
    );
  }
}

export default GameFilter;
