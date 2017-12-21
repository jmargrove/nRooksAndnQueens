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

  boardColor() {}

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
          <div className="ColorChoice" id="Blues">
            <input
              ref={el => (this.blue = el)}
              onClick={() => this.props.colorChoice("blue", "lightblue")}
              type="button"
            />
          </div>
          <div className="ColorChoice" id="Blacks">
            <input
              ref={el => (this.black = el)}
              onClick={() => this.props.colorChoice("black", "white")}
              type="button"
              labels="black"
            />
          </div>
          <div className="ColorChoice" id="Reds" />
          <div className="ColorChoice" id="Oranges" />
          <div className="ColorChoice" id="Purples" />
        </div>
        <div className="Controler">runStopcontrole</div>
      </div>
    );
  }
}

export default UserSettings;
