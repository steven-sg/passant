import React, { Component } from "react";
import Chessboard from "chessboardjsx";

class PracticeBoard extends Component {
    // TODO: constants
    files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];

    state = {
        squareStyles: {},
    }

    getLineSquares (line) {
        if (this.files.includes(line)) {
            return this.ranks.map(r => `${line}${r}`);
        } else {
           // TODO: what is best practice for this else?
            return this.files.map(f => `${f}${line}`);
        }
    }

    extractLine = (square) => {
        if (this.props.mode === 'files') {
            return square.charAt(0);
        } else {
           // TODO: what is best practice for this else?
            return square.charAt(1);
        }
    }

    unhighlight = () => {
        this.setState({squareStyles: {}});
    };

    highlight = square => {
        const line = this.extractLine(square);
        const highlightStyles = this.getLineSquares(line).reduce(
            (a, c) => {
                return {
                    ...a,
                    ...{ // TODO: is single object spread best practice?
                        [c]: {
                            background: "rgb(240, 217, 100)",
                        }
                    },
                };
            }
        , {});
        this.setState(({ squareStyles }) => ({
            squareStyles: { ...squareStyles, ...highlightStyles }
        }));
    };

    handleClick = square => {
        const line = this.extractLine(square);
        this.props.checkAnswer(line);
    }

    render () {
        return (
            <div>
                <Chessboard
                    draggable={false}
                    onMouseOverSquare={this.highlight}
                    onMouseOutSquare={this.unhighlight}
                    onSquareClick={this.handleClick}
                    squareStyles={this.state.squareStyles}
                />
            </div>
        )
    }
}

export default PracticeBoard;
