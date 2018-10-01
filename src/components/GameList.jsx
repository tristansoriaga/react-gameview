import React, { Component } from "react";
import GameCard from "./GameCard";
import GameFilter from "./GameFilter";

class GameList extends Component {
  styleCss = {
    // paddingTop: 20
  };

  render() {
    return (
      <div>
        <GameFilter onAdd={this.props.onAdd} onFilter={this.props.onFilter} />

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
      </div>
    );
  }
}

export default GameList;
