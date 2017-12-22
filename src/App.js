import React, { Component } from "react";
// import { calc } from "./RooksEquation";
import UserSettings from "./components/UserSettings";
import "./App.css";
// hard code it for 4x4
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileColor: ["black", "white"],
      rookPositioni: null,
      rookPositionj: null,
      rookPosition: "poss33"
    };
  }

  delay(t) {
    return new Promise(resolve => {
      setTimeout(() => resolve(console.log("happy")), t);
    });
  }

  calc(n) {
    let rooks = 0;
    let j = 0;
    let solutions = 0;
    let col = Array(n).fill(0);

    const recur = async () => {
      for (let i = 0; i < n; i++) {
        if (col[i] === 0) {
          col[i] = 1;
          rooks++;
          if (rooks === n) {
            solutions++;
            await this.delay(5);
            console.log(i);
            this.setState({ rookPosition: "poss" + i + j });
          }
          j++;
          recur();
          col[i] = 0;
          j--;
          rooks--;
          // }
        }
      }
    };
    recur();
    console.log("number of solutions ", solutions);
    return solutions;
  }

  renderingThesquares() {
    const arri = [];
    const arrj = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        arrj.push(j);
        arri.push(i);
      }
    }
    return arri.map((el, i) => {
      return (
        <div
          className="Square"
          key={i}
          id={"poss" + el + arrj[i]}
          style={{
            "background-color":
              el % 2
                ? i % 2 ? this.state.tileColor[0] : this.state.tileColor[1]
                : i % 2 ? this.state.tileColor[1] : this.state.tileColor[0]
          }}
        >
          {this.theRook("poss" + el + arrj[i])}
        </div>
      );
    });
  }

  theRook(local) {
    if (this.state.rookPosition === local) {
      console.log(local, "IT IS TRUE");
      return <div className="Rook" />;
    }
  }

  colorChoice = (color1, color2) => {
    this.setState({ tileColor: [color1, color2] });
  };

  render() {
    console.log("the rooks position", this.state.rookPosition);
    return (
      <div className="MaxWidth">
        <h1> nQueens & nRooks Algorythem </h1>
        <div className="CenteringContainer">
          <div className="BoardPositions">
            <div className="TheBoard">{this.renderingThesquares()}</div>
          </div>
          <UserSettings colorChoice={this.colorChoice} />
          <button
            style={{ width: "50px", height: "50px" }}
            onClick={() => this.calc(4)}
          />
        </div>
      </div>
    );
  }
}

export default App;
