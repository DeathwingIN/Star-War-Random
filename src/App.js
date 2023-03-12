import logo from "./logo.svg";
import "./App.css";
// import Item from './MyItem';
import React from "react";

class StarWars extends React.Component {

  constructor(){
    super()
    this.state = {
      name:null,
      height:null,
      homeworld:null,
      films:[],
    }
  }

  getNewCharactor() {
    console.log("Ok");
    this.setState({
      name:"person1",
      height:"150",
      homeworld:'null',
      films:['item 1', 'item 2'],
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p> {this.state.height} cm</p>
        <p>HomeWorld: {this.state.homeworld}</p>
        <ul>
          <li>{this.state.films}</li>
        </ul>
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
