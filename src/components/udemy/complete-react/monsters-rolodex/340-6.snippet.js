// 40. Monsters Rolodex - Input Search Box Component

// 10:35 / 11:19 - console.log(event.target.value)
// note: Look at the browser's console output
/*
Knowing that we need to use the event dot target dot value.
*/
import React from "react";
import { Component } from "react";

export default class Snippet3406 extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log("constructor()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
    // prettier-ignore
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => this.setState(() => {
        return {monsters: users}
    },
    () => {
        console.log(this.state)
    }));
  }

  render() {
    console.log("render()");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
