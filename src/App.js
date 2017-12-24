import React, { Component } from "react";
import UserSettings from "./components/UserSettings";
import { calcRooks } from "./RooksEquation";
import { calcQueens } from "./QueensEquation";
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
      boardDim: 0,
      gameType: "Rooks"
    };
  }

  findSolutions = async n => {
    if (this.state.gameType === "Rooks") {
      await this.setState({ allRes: calcRooks(Number(n)) });
    } else {
      await this.setState({ allRes: calcQueens(Number(n)) });
    }
    await this.setState({ displaySolution: this.state.allRes[0] });
    this.setState({ totalNumberOfSolutions: this.state.allRes.length });
  };

  theRook(local, displaySolution, GameType) {
    if (displaySolution) {
      return displaySolution.map((possi, possj) => {
        if ("poss" + possj + possi === local) {
          if (GameType === "Rooks") {
            return <img src={require("./rook.svg")} className="Rook" />;
          } else {
            return <img src={require("./queen.svg")} className="Rook" />;
          }
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

  updateGameType = type => {
    this.setState({ gameType: type });
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
              pieceType={this.state.gameType}
              boardDim={this.state.boardDim}
              displaySolution={this.state.displaySolution}
              theRook={this.theRook}
              theChosenTileColor={this.state.tileColor}
            />
          </div>
          <UserSettings
            gameType={this.updateGameType}
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
