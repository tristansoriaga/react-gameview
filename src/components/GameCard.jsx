import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class GameCard extends Component {
  styledCss = {
    padding: 5,
    textAlign: "center",
    margin: "0 auto",
    border: "gray 1px solid",
    marginTop: 30
  };

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div style={this.styledCss}>
          <img
            alt={this.props.game.title}
            className="p-2"
            src={this.props.game.imgUrl}
            width="200"
            height="120"
          />
          <h3>{this.props.game.title}</h3>

          <div>
            <NavLink
              to={`/ps4/game/${this.props.game.id}`}
              onClick={() => this.props.onView(this.props.game.id)}
              className="btn btn-primary m-2"
            >
              View
            </NavLink>
          </div>

          <button
            onClick={() => this.props.onDelete(this.props.game.id)}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default GameCard;
