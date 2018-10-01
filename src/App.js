import React, { Component } from "react";
import logo from "./ps4-logo.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route } from "react-router-dom";
import GlobalNav from "./components/GlobalNav";

import GameList from "./components/GameList";
import GameView from "./components/GameView";

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
      },
      {
        id: 4,
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

  handleClickView = id => {
    const games = this.state.games.filter(game => game.id === id);
    this.setState({ games });
    console.log("view");
  };

  handleClickDelete = id => {
    const games = this.state.games.filter(game => game.id !== id);
    this.setState({ games });
    console.log("delete");
  };

  handleClickFilter = filter => {
    console.log("filter");
    const basestate = this.baseState.games;
    const games = basestate.filter(game => game.category === filter);
    games.length === 0
      ? this.setState({ ...this.baseState })
      : this.setState({ games });
  };

  constructor() {
    super();
    this.baseState = this.state;
  }

  render() {
    return (
      <div className="App">
        <GlobalNav />
        <header className="App-header">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h1 className="App-title">Playstation Games</h1>
        </header>
        <main>
          <Route
            exact
            path="/"
            component={() => (
              <GameList
                onAdd={this.handleClickAdd}
                onFilter={this.handleClickFilter}
                onView={this.handleClickView}
                onDelete={this.handleClickDelete}
                games={this.state.games}
              />
            )}
          />
          <Route
            exact
            path="/ps4/game/:id"
            component={() => <GameView games={this.state.games} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
