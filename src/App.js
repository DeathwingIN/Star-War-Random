import logo from "./logo.svg";
import "./App.css";
// import Item from './MyItem';
import React from "react";

// class FilmItemRow extends React.Component {
//   render(){
//     return(
//         <li>
//           <a href={this.props.url}>{this.props.url}</a>
//         </li>
//     )
//   }
// }

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      image: null,
      homeworld: null,
    };
  }

  getNewCharactor() {
    const randomNumber = Math.round(Math.random() * 88);
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image,
          loadedCharacter: true,
        });
      });
  }

  render() {
    // Capitalize first letter of homeworld

    return (
      <div>
        {this.state.loadedCharacter && (
          <div
            // className="bg-img"
            // style={{ backgroundImage: `url(${this.stat.image})`}}
          >
            <img className="imageCSS" src={this.state.image}></img>
            <h1>{this.state.name}</h1>
            <p> {this.state.height} m</p>
            <p>HomeWorld:&nbsp;{this.state.homeworld}</p>
          </div>
        )}
        <button
          type="butoon"
          className="btn"
          onClick={() => this.getNewCharactor()}
        >
          Randomize Charactor
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars></StarWars>
      </header>
    </div>
  );
}

export default App;
