import React, { Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardDim: 4,
      boardHeight: "600px",
      boardWidth: "600px"
    };
  }

  renderingThesquares() {
    const arri = [];
    const arrj = [];
    for (let i = 0; i < this.state.boardDim; i++) {
      for (let j = 0; j < this.state.boardDim; j++) {
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
            backgroundColor:
              el % 2
                ? i % 2
                  ? this.props.theChosenTileColor[0]
                  : this.props.theChosenTileColor[1]
                : i % 2
                  ? this.props.theChosenTileColor[1]
                  : this.props.theChosenTileColor[0]
          }}
        >
          {this.props.theRook(
            "poss" + el + arrj[i],
            this.props.displaySolution
          )}
        </div>
      );
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.boardDim !== nextProps.boardDim) {
      this.setState({ boardDim: nextProps.boardDim });
      this.setState((prevState, props) => {
        return { boardWidth: 600 / 4 * props.boardDim + "px" };
      });
      this.setState((prevState, props) => {
        return { boardHeight: 600 / 4 * props.boardDim + "px" };
      });
    }
  }

  boardDimentions = () => {
    return {
      width: this.state.boardWidth,
      height: this.state.boardHeight,
      display: "flex",
      flexWrap: "wrap",
      border: "solid",
      borderWidth: "thin",
      backgroundColor: "black"
    };
  };

  render() {
    console.log("the state", this.boardDimentions());
    return <div style={this.boardDimentions()} />;
  }
}

export default Board;
