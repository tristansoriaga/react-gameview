import React, { Component } from "react";
import Select from "react-select";

class GameFilter extends Component {
  styledCss = {
    paddingTop: 20
  };

  buttonCss = {
    width: 80
  };

  gameCategory = [
    { label: "All", value: "all" },
    { label: "Adventure", value: "adventure" },
    { label: "Horror", value: "horror" },
    { label: "RPG", value: "rpg" }
  ];

  render() {
    return (
      <div style={this.styledCss}>
        <button onClick={this.props.onAdd} className="btn btn-primary m-2">
          Add
        </button>
        <Select
          style={this.styledCss}
          options={this.gameCategory}
          onChange={opt => this.props.onFilter(opt.value)}
        />
      </div>
    );
  }
}

export default GameFilter;
