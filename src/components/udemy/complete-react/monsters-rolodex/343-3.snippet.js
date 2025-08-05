import React from "react";
import { Component } from "react";

export default class Snippet3433 extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
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

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log({ startingArray: this.state.monsters });
            const searchField = event.target.value.toLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(event.target.value);
            });

            this.setState(() => {
              // Object shorthand, key == value
              // i.e. == to { searchField: searchField }
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
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
