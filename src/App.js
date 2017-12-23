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
      boardDim: 4
    };
  }

  async findSolutions() {
    await this.setState({ allRes: calc(4) });
    await this.setState({ displaySolution: this.state.allRes[0] });
    this.setState({ totalNumberOfSolutions: this.state.allRes.length });
  }

  // delay(t) {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(console.log("happy")), t);
  //   });
  // }

  theRook(local, displaySolution) {
    if (displaySolution) {
      return displaySolution.map((possi, possj) => {
        if ("poss" + possj + possi === local) {
          return <div className="Rook" />;
        }
      });
    }
  }

  colorChoice = (color1, color2) => {
    this.setState({ tileColor: [color1, color2] });
  };

  updateSolutionNumber = value => {
    console.log("value", value);
    this.setState({ solutionNumber: value });
    this.setState((prevState, props) => {
      console.log(prevState.allRes);
      return { displaySolution: prevState.allRes[value] };
    });
  };

  updateBoardDim = settingsBoardDim => {
    this.setState({ boardDim: settingsBoardDim });
  };

  ////////////////////////////////////////////
  solutionDisplayUpdate() {}
  render() {
    console.log("the state", this.state);
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
            findSolutions={this.findSolutionsSwitch}
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
