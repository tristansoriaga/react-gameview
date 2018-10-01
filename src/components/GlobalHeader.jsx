import React, { Component } from "react";
import ps4logo from "../ps4-logo.jpg";
import xboxonelogo from "../xboxone-logo.jpg";

class GlobalHeader extends Component {
  styledCss = {
    backgroundColor: "#0040a0",
    height: 150,
    padding: 20,
    color: "white"
  };

  render() {
    return (
      <header style={this.styledCss} className="App-header">
        <a href="/ps4/">
          <img src={ps4logo} className="App-logo" alt="logo" />
        </a>

        <h1 className="App-title">Playstation Games</h1>
      </header>
    );
  }
}

export default GlobalHeader;
