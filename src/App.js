import React, { Component } from "react";
import "./App.css";

class App extends Component {
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
          id={
            el % 2
              ? i % 2 ? "DarkSquare" : "LightSquare"
              : i % 2 ? "LightSquare" : "DarkSquare"
          }
        />
      );
    });
  }

  addingARook() {
    window.getElementById();
  }

  render() {
    return (
      <div className="MaxWidth">
        <div className="BoardPositions">
          <div className="TheBoard">{this.renderingThesquares()}</div>
        </div>
      </div>
    );
  }
}

export default App;
