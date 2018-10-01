import React, { Component } from "react";
import logo from "./ps4-logo.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import GameList from "./components/GameList";
import GameFilter from "./components/GameFilter";

class App extends Component {
  state = {
    games: [
      {
        id: 1,
        category: "adventure",
        title: "Persona 5",
        imgUrl:
          "https://cdn-images-1.medium.com/max/2000/1*dolqI-kOURRiXko4h5rLvw.jpeg"
      },
      {
        id: 2,
        category: "horror",
        title: "Spider man",
        imgUrl: "https://img.game.co.uk/ml2/5/6/2/9/562944_scr1_a.png"
      },
      {
        id: 3,
        category: "rpg",
        title: "Witcher 3",
        imgUrl:
          "https://static.cdprojektred.com/thewitcher.com/media/wallpapers/witcher3/full/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_2560x1600_1449484679.png"
      }
    ]
  };

  handleClickAdd = () => {
    console.log("add");
  };

  handleClickDelete = id => {
    let state = this.state;
    const games = state.games.filter(game => game.id !== id);
    this.setState({ games });
    console.log("delete");
  };

  handleClickFilter = filter => {
    console.log(filter);

    const games = this.state.games.filter(game => game.category === filter);
    this.setState({ games });
  };

  filter;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Game View</h1>
        </header>
        <main>
          <GameFilter
            onAdd={this.handleClickAdd}
            onFilter={this.handleClickFilter}
          />
          <GameList
            onView={this.handleClickView}
            onDelete={this.handleClickDelete}
            games={this.state.games}
          />
        </main>
      </div>
    );
  }
}

export default App;
