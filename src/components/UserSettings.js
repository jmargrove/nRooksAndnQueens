import React, { Component } from "react";

class UserSettings extends Component {
  gameType(type) {
    return (
      <div className="GameType">
        <div className="Type">{type}</div>
        <input className="CheckBox" type="checkbox" />
      </div>
    );
  }

  boardColor(color1, color2) {
    return (
      <div className="ColorChoice" id={color1}>
        <p> {color1}s</p>
        <input
          ref={el => (this.blue = el)}
          onClick={() => this.props.colorChoice(color1, color2)}
          type="button"
        />
      </div>
    );
  }

  render() {
    console.log(this);
    return (
      <div className="UserOptions">
        <div className="Title">
          <h3>User Settings</h3>
        </div>
        {this.gameType("nQueens")}
        {this.gameType("nRooks")}
        <div className="Color">
          {this.boardColor("blue", "lightblue")}
          {this.boardColor("black", "white")}
          {this.boardColor("red", "pink")}
          {this.boardColor("orange", "yellow")}
          {this.boardColor("purple", "white")}
        </div>
        <div className="Controler">runStopcontrole</div>
      </div>
    );
  }
}

export default UserSettings;
