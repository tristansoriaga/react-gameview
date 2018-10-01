import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class GlobalNav extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          paddingLeft: 50
        }}
      >
        <nav className="nav">
          <NavLink
            exact
            activeStyle={{ color: "gray" }}
            style={{ color: "white" }}
            className="nav-link active"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeStyle={{ color: "gray" }}
            style={{ color: "white" }}
            className="nav-link"
            to="/ps4"
          >
            PS4
          </NavLink>
          <NavLink
            exact
            activeStyle={{ color: "gray" }}
            style={{ color: "white" }}
            className="nav-link"
            to="/xbox"
          >
            XBOX
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default GlobalNav;
