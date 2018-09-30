import React, { Component } from "react";

class GameCard extends Component {
  styleCss = {
    padding: 5,
    textAlign: "center",
    margin: "0 auto",
    border: "gray 1px solid",
    marginTop: 30
  };

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div style={this.styleCss}>
          <img
            className="p-2"
            src={this.props.game.imgUrl}
            width="200"
            height="120"
          />
          <h3>{this.props.game.title}</h3>
          <button onClick={this.props.onView} className="btn btn-primary m-2">
            View
          </button>
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
