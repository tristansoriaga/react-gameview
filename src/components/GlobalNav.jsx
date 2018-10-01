import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class GlobalNav extends Component {
  styledCss = {
    backgroundColor: "black",
    color: "white",
    paddingLeft: 50
  };

  navCss = {
    color: "white"
  };
  render() {
    return (
      <div style={this.styledCss}>
        <nav className="nav">
          <NavLink style={this.navCss} className="nav-link active" to="/">
            Home
          </NavLink>
          <NavLink style={this.navCss} className="nav-link" to="/ps4">
            PS4
          </NavLink>
          <NavLink style={this.navCss} className="nav-link" to="/xbox">
            XBOX
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default GlobalNav;
