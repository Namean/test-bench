// 42. Monsters Rolodex - Searching & Filtering

// 0:18 / 7:51 - console.log(event.target.value)
// note: Look at the browser's console output
/*
Here.

What we're going to do is do this together.
*/
import React from "react";
import { Component } from "react";

export default class Snippet3413 extends Component {
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
            const searchString = event.target.value.toLowerCase();
            // [ { name: 'Leanne' }, { name: 'Yihua' } ]
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString);
            });

            this.setState(() => {
              return { monsters: filteredMonsters };
            });
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
