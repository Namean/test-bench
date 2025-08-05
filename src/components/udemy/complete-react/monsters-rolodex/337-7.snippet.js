// 37. Monsters Rolodex - LifeCycle Methods: ComponentDidMount
// 8:23 / 10:14
// Add monsters, 3
import React from "react";
import { Component } from "react";

export class Snippet3377 extends Component {
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
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>;
            </div>
          );
        })}
      </div>
    );
  }
}
