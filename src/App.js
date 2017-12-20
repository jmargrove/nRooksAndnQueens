import React, { Component } from "react";
import { calc } from "./RooksEquation";
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
          id={el.toString() + i.toString()}
          id={
            el % 2
              ? i % 2 ? "DarkSquare" : "LightSquare"
              : i % 2 ? "LightSquare" : "DarkSquare"
          }
        />
      );
    });
  }

  render() {
    return (
      <div className="MaxWidth">
        <div className="CenteringContainer">
          <div className="BoardPositions">
            <div className="TheBoard">{this.renderingThesquares()}</div>
          </div>
          <div className="UserOptions">
            <div className="Title">
              <h2>settings</h2>
            </div>
            <div className="GameType">gameType</div>
            <div className="Color">color setting</div>
            <div className="Controler">runStopcontrole</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
