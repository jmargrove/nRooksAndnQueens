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
      totalNumberOfSolutions: null
    };
  }

  async componentDidMount() {
    await this.setState({ allRes: calc(4) });
    await this.setState({ displaySolution: this.state.allRes[0] });
    this.setState({ totalNumberOfSolutions: this.state.allRes.length });
  }

  // delay(t) {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(console.log("happy")), t);
  //   });
  // }

  // renderingThesquares() {
  //   const arri = [];
  //   const arrj = [];
  //   for (let i = 0; i < 4; i++) {
  //     for (let j = 0; j < 4; j++) {
  //       arrj.push(j);
  //       arri.push(i);
  //     }
  //   }
  //   return arri.map((el, i) => {
  //     return (
  //       <div
  //         className="Square"
  //         key={i}
  //         id={"poss" + el + arrj[i]}
  //         style={{
  //           "background-color":
  //             el % 2
  //               ? i % 2 ? this.state.tileColor[0] : this.state.tileColor[1]
  //               : i % 2 ? this.state.tileColor[1] : this.state.tileColor[0]
  //         }}
  //       >
  //         {this.theRook("poss" + el + arrj[i])}
  //       </div>
  //     );
  //   });
  // }

  theRook(local) {
    if (this.state.displaySolution) {
      return this.state.displaySolution.map((possi, possj) => {
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

  ////////////////////////////////////////////
  solutionDisplayUpdate() {}
  render() {
    console.log("the rooks position", this.state);
    return (
      <div className="MaxWidth">
        <h1> nQueens & nRooks Algorithm </h1>
        <div className="CenteringContainer">
          <div className="BoardPositions">
            <Board
              displaySolution={this.state.displaySolution}
              theRook={this.theRook}
              theChosenTileColor={this.state.tileColor}
            />
            {/* <div className="TheBoard">{this.renderingThesquares()}</div> */}
          </div>
          <UserSettings
            colorChoice={this.colorChoice}
            // nextSolution={this.nextSolution}
            // previousSolution={this.state.previousSolution}
            totalNumberOfSolutions={this.state.totalNumberOfSolutions}
            updateSolutionNumber={this.updateSolutionNumber}
          />
        </div>
      </div>
    );
  }
}

export default App;
