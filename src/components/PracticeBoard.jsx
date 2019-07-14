import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import PropTypes from 'prop-types';

class PracticeBoard extends Component {
  // TODO: constants
  files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];

  state = {
    squareStyles: {},
  }

  getLineSquares = (line) => {
    if (this.files.includes(line)) {
      return this.ranks.map(r => `${line}${r}`);
    }
    if (this.ranks.includes(line)) {
      return this.files.map(f => `${f}${line}`);
    }
    // TODO: throw error
  }

  extractLine = (square) => {
    const { mode } = this.props;

    if (mode === 'files') {
      return square.charAt(0);
    }
    if (mode === 'ranks') {
      return square.charAt(1);
    }
    // TODO: throw error
  }

  unhighlight = () => {
    this.setState({ squareStyles: {} });
  };

  highlight = (square) => {
    const line = this.extractLine(square);
    const highlightStyles = this.getLineSquares(line).reduce(
      (a, c) => ({
        ...a,
        ...{
          [c]: {
            background: 'rgb(240, 217, 100)',
          },
        },
      }),
      {},
    );
    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, ...highlightStyles },
    }));
  };

  handleClick = (square) => {
    const line = this.extractLine(square);
    const { checkAnswer } = this.props;

    checkAnswer(line);
  }

  render() {
    const { squareStyles } = this.state;
    return (
      <div>
        <Chessboard
          draggable={false}
          onMouseOverSquare={this.highlight}
          onMouseOutSquare={this.unhighlight}
          onSquareClick={this.handleClick}
          squareStyles={squareStyles}
        />
      </div>
    );
  }
}

PracticeBoard.propTypes = {
  mode: PropTypes.string.isRequired,
  checkAnswer: PropTypes.func.isRequired,
};

export default PracticeBoard;
