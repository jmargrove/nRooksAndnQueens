import React, { Component } from "react";
import { calc } from "./RooksEquation";
import UserSettings from "./components/UserSettings";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileColor: ["black", "white"]
    };
  }

  renderingThesquares() {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(...Array(8).fill(i));
    }

    return arr.map((el, i) => {
      return (
        <div
          className="Square"
          key={i}
          id={el.toString() + i.toString()}
          style={{
            "background-color":
              el % 2
                ? i % 2 ? this.state.tileColor[0] : this.state.tileColor[1]
                : i % 2 ? this.state.tileColor[1] : this.state.tileColor[0]
          }}
          // id={
          //   el % 2
          //     ? i % 2 ? "DarkSquare" : "LightSquare"
          //     : i % 2 ? "LightSquare" : "DarkSquare"
          // }
        />
      );
    });
  }

  colorChoice = (color1, color2) => {
    this.setState({ tileColor: [color1, color2] });
  };

  render() {
    return (
      <div className="MaxWidth">
        <h1> nQueens & nRooks Algorythem </h1>
        <div className="CenteringContainer">
          <div className="BoardPositions">
            <div className="TheBoard">{this.renderingThesquares()}</div>
          </div>
          <UserSettings colorChoice={this.colorChoice} />
        </div>
      </div>
    );
  }
}

export default App;
