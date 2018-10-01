import React, { Component } from "react";

class GlobalFooter extends Component {
  styledCss = {
    backgroundColor: "black",
    color: "white",
    marginTop: 60
  };
  render() {
    return <div style={this.styledCss}>Global Footer</div>;
  }
}

export default GlobalFooter;
