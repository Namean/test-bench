// <!-- snippet 340-4.snippet.js -->
// 40. Monsters Rolodex - Input Search Box Component
// 7:24 / 10:14
/*
Now, what we want to do is we want to actually code in the functionality in order to filter down this list.
*/
import React from "react";
import { Component } from "react";

export class Challenge3404 extends Component {
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
    .then((users) =>
      this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state);
        }
      )
    );
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            let { value } = event.target;
            const { monsters } = this.state;
            const copy = monsters.slice();

            function filterMonsters(_monsters, value) {
              let copy = monsters.slice();
              return copy
                .map((v) =>
                  v.name
                    .toLowerCase()
                    .slice(0, Infinity)
                    .includes(value.toLowerCase())
                    ? v
                    : null
                )
                .filter((v) => v);
            }

            // console.log(value);
            // console.log(monsters);
            this.setState(
              () => {
                return { filteredMonsters: filterMonsters(copy, value) };
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        />
        {this.state.filteredMonsters
          ? this.state.filteredMonsters.map((monster) => {
              return (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
              );
            })
          : this.state.monsters.map((monster) => {
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
