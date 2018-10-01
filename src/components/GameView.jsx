import React, { Component } from "react";

class GameView extends Component {
  render() {
    const games = this.props.games;
    return (
      <div>
        {games.map(game => (
          <div>
            <h1>{game.title}</h1>
            <img width="500px" src={game.imgUrl} />
            <p>{game.category}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GameView;
