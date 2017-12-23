import React, { Component } from "react";

class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutionNumber: 0,
      boardDim: 4
    };
  }
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

  async nextSolution() {
    if (this.state.solutionNumber < this.props.totalNumberOfSolutions - 1) {
      await this.setState((prevState, props) => {
        return { solutionNumber: prevState.solutionNumber + 1 };
      });
      this.props.updateSolutionNumber(this.state.solutionNumber);
    }
  }

  async previousSolution() {
    if (this.state.solutionNumber > 0) {
      await this.setState((prevState, props) => {
        return { solutionNumber: prevState.solutionNumber - 1 };
      });
      this.props.updateSolutionNumber(this.state.solutionNumber);
    }
  }

  render() {
    return (
      <div className="UserOptions">
        <div className="Title">
          <h2>Options</h2>
        </div>
        <div className="BoardSizeChoice">
          <div>Board Size</div>
          <div>
            <input
              ref={el => (this.boardDim = el)}
              type="number"
              min={1}
              max={12}
            />
          </div>
          <button
            onClick={() =>
              this.props.updateBoardDim(Number(this.boardDim.value))}
          >
            Make Board
          </button>
        </div>
        <div className="Title">Type</div>
        {this.gameType("nQueens")}
        {this.gameType("nRooks")}
        <div className="Title">
          <button onClick={this.props.findSolutions}> GO! </button>
        </div>
        {/* <div className="Color">
          {this.boardColor("blue", "lightblue")}
          {this.boardColor("black", "white")}
          {this.boardColor("red", "pink")}
          {this.boardColor("orange", "yellow")}
          {this.boardColor("purple", "white")}
        </div> */}
        <div className="Controler">
          <div
            className="PreviousButtion"
            onClick={() => this.previousSolution()}
          />
          <div className="SolutionNumber">{this.state.solutionNumber + 1}</div>
          <div className="NextButtion" onClick={() => this.nextSolution()} />
        </div>
      </div>
    );
  }
}

export default UserSettings;
