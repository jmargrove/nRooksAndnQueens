import React, { Component } from "react";
import UserSettings from "./components/UserSettings";
import { calc } from "./RooksEquation";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileColor: ["black", "white"],
      allRes: null,
      solutionNumber: 0,
      displaySolution: null,
      totalNumberOfSolutions: null,
      boardDim: 0
    };
  }

  findSolutions = async n => {
    await this.setState({ allRes: calc(Number(n)) });
    await this.setState({ displaySolution: this.state.allRes[0] });
    this.setState({ totalNumberOfSolutions: this.state.allRes.length });
  };

  theRook(local, displaySolution) {
    if (displaySolution) {
      return displaySolution.map((possi, possj) => {
        if ("poss" + possj + possi === local) {
          return <img src={require("./rook.svg")} className="Rook" />;
        }
      });
    }
  }

  colorChoice = (color1, color2) => {
    this.setState({ tileColor: [color1, color2] });
  };

  updateSolutionNumber = value => {
    this.setState({ solutionNumber: value });
    this.setState((prevState, props) => {
      return { displaySolution: prevState.allRes[value] };
    });
  };

  updateBoardDim = settingsBoardDim => {
    this.setState({ boardDim: settingsBoardDim });
  };

  ////////////////////////////////////////////
  solutionDisplayUpdate() {}
  render() {
    return (
      <div className="MaxWidth">
        <h1> nQueens & nRooks Algorithm </h1>
        <div className="CenteringContainer">
          <div className="BoardPositions">
            <Board
              boardDim={this.state.boardDim}
              displaySolution={this.state.displaySolution}
              theRook={this.theRook}
              theChosenTileColor={this.state.tileColor}
            />
          </div>
          <UserSettings
            updateBoardDim={this.updateBoardDim}
            findSolutions={this.findSolutions}
            colorChoice={this.colorChoice}
            totalNumberOfSolutions={this.state.totalNumberOfSolutions}
            updateSolutionNumber={this.updateSolutionNumber}
          />
        </div>
      </div>
    );
  }
}

export default App;
