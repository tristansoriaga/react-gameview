import React, { Component } from "react";
import GameCard from "./GameCard";

class GameList extends Component {
  styleCss = {
    // paddingTop: 20
  };

  render() {
    return (
      <div style={this.styleCss} className="row">
        {this.props.games.map(game => (
          <GameCard
            onView={this.props.onView}
            onDelete={this.props.onDelete}
            key={game.id}
            game={game}
          />
        ))}
      </div>
    );
  }
}

export default GameList;
