import React, { Component } from "react";
import { Dimmer, Header, Button } from 'semantic-ui-react';
import PracticeBoard from "./PracticeBoard";
import SidePanel from "./SidePanel";
import OptionsBar from "./OptionsBar";

class ControlCentre extends Component {
    // TODO: what is best practice for constants here?
    files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
    modes = ['files', 'ranks'];

    state = {
        question: 0,
        score: 0,
        mode: this.modes[0],
        true: false,
        scoreHistory: [],
    }

    generateNewQuestion = (lineType) => {
        return this.getRandomInt(8);
    }

    generateNextQuestion = (lineType) => {
        return (this.state.question + 1 + this.getRandomInt(7)) % 8;
    }

    getQuestion = (lineType) => {
        // TODO: should this take param
        // TODO: if else problem
        if (lineType === 'files') {
            return this.files[this.state.question];
        }
        // TODO: if else problem
        return this.ranks[this.state.question];
    }
    setMode = (mode) => {
        if (mode === this.state.mode || this.state.started) {
            return
        }
        this.setState({mode, score: 0});
    }

    getRandomInt = (max) => {
        // TODO: move to utils
        return Math.floor(Math.random() * Math.floor(max));
    }

    startGame = () => {
        if (!this.state.started) {
            const question = this.generateNewQuestion(this.state.mode);
            this.setState({question, started: true, score: 0})
        }
    }

    stopGame = () => {
        if (this.state.started) {
            // TODO: change all setstates https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs
            this.setState(prevState => ({
                started: false,
                scoreHistory: [{
                    score: this.state.score,
                    date: new Date(),
                    mode: this.state.mode,
                },...prevState.scoreHistory]
            }))
        }
    }

    checkAnswer = (answer) => {
        if (!this.state.started) {
            return;
        }
        if (answer === this.getQuestion(this.state.mode)) {
            const question = this.generateNextQuestion(this.state.mode);
            const score = this.state.score + 1;
            this.setState({
                question,
                score,
            });
        }
    }

    // TODO: abstract entire dimmer section
    render () {
        return (
            <div style={{display: 'grid', gridGap: '1rem ', gridTemplateColumns:'auto auto'}}>
                <SidePanel
                    started={this.state.started}
                    stopGame={this.stopGame}
                    score={this.state.score}
                    scoreHistory={this.state.scoreHistory}
                    question={this.getQuestion(this.state.mode)}
                    mode={this.state.mode}
                    />
                <div style={{display: 'grid', gridGap: '1rem ', gridTemplateRows:'auto auto'}}>
                    <div>
                        <Dimmer.Dimmable dimmed={!this.state.started}>
                            <Dimmer active={!this.state.started}>
                                <Header as='h2' inverted>
                                    New Game
                                </Header>
                                <Button onClick={this.startGame} primary>Start</Button>
                            </Dimmer>
                            <PracticeBoard mode={this.state.mode} checkAnswer={this.checkAnswer} started={this.state.started}/>
                        </Dimmer.Dimmable>
                    </div>
                    <div>
                        <OptionsBar mode={this.state.mode} setMode={this.setMode} started={this.state.started}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ControlCentre;
