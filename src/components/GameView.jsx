import React, { Component } from "react";

class GameView extends Component {
  render() {
    return (
      <div>
        {this.props.games.map(x => (
          <div key={x.id}>
            <h1>{x.title}</h1>
            <img alt={x.title} width="500px" src={x.imgUrl} />
            <p>{x.category}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GameView;
