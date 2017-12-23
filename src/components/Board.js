import React, { Component } from "react";

class Board extends Component {
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
                ? i % 2
                  ? this.props.theChosenTileColor[0]
                  : this.props.theChosenTileColor[1]
                : i % 2
                  ? this.props.theChosenTileColor[1]
                  : this.props.theChosenTileColor[0]
          }}
        >
          {this.props.theRook("poss" + el + arrj[i])}
        </div>
      );
    });
  }

  render() {
    return <div className="TheBoard">{this.renderingThesquares()}</div>;
  }
}

export default Board;
