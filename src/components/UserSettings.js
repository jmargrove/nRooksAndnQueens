import React, { Component } from "react";

class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutionNumber: 0,
      boardDim: 0
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

  delay(n) {
    return new Promise(resolve => {
      setTimeout(resolve, n);
    });
  }

  async playSolutions() {
    while (this.state.solutionNumber < this.props.totalNumberOfSolutions - 1) {
      if (this.state.solutionNumber < this.props.totalNumberOfSolutions - 1) {
        await this.delay(
          Math.log10(5000 / this.props.totalNumberOfSolutions) * 100
        );
        await this.setState((prevState, props) => {
          return { solutionNumber: prevState.solutionNumber + 1 };
        });
        this.props.updateSolutionNumber(this.state.solutionNumber);
      }
    }
  }

  async rewindSolutions() {
    while (this.state.solutionNumber > 0) {
      if (this.state.solutionNumber > 0) {
        await this.delay(
          Math.log10(5000 / this.props.totalNumberOfSolutions) * 100
        );
        await this.setState((prevState, props) => {
          return { solutionNumber: prevState.solutionNumber - 1 };
        });
        this.props.updateSolutionNumber(this.state.solutionNumber);
      }
    }
  }

  render() {
    return (
      <div className="UserOptions">
        <div className="Title">
          <h2>Options</h2>
        </div>
        <div className="ChooseGameType">
          <div className="Title">nGame Type</div>
          <button onClick={() => this.props.gameType("Queens")}>nQueens</button>
          <button onClick={() => this.props.gameType("Rooks")}>nRooks</button>
        </div>
        <div className="BoardSizeChoice">
          <div className="Title">Board Size</div>
          <div>
            <input
              ref={el => (this.boardDim = el)}
              type="number"
              min={1}
              max={12}
            />
          </div>
          <button
            onClick={() => {
              if (this.boardDim.value < 12) {
                this.props.updateBoardDim(Number(this.boardDim.value));
                this.setState({ solutionNumber: 0 });
                this.props.findSolutions(this.boardDim.value);
              }
            }}
          >
            Make Board
          </button>
        </div>
        <div className="Color">
          <div className="Title">Choose Color</div>
          {this.boardColor("blue", "lightblue")}
          {this.boardColor("black", "white")}
          {this.boardColor("red", "pink")}
          {this.boardColor("orange", "yellow")}
          {this.boardColor("purple", "white")}
        </div>
        <div>
          <div className="Title">Play Solutions</div>
          <div className="Controler">
            <div
              className="PreviousButtion"
              onClick={() => this.rewindSolutions()}
            />
            <div className="SolutionNumber">
              {this.state.solutionNumber + 1}
            </div>
            <div className="NextButtion" onClick={() => this.playSolutions()} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserSettings;
