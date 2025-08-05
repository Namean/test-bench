// <!-- snippet 340-4.snippet.js -->
// 40. Monsters Rolodex - Input Search Box Component
// 7:24 / 10:14
/*
Now, what we want to do is we want to actually code in the functionality in order to filter down this list.
*/
import React from "react";
import { Component } from "react";

export default class Snippet3404 extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
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
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event);
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
