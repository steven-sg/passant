import React, { Component } from 'react';
import { Dimmer, Header, Button } from 'semantic-ui-react';
import PracticeBoard from './PracticeBoard';
import SidePanel from './SidePanel';
import OptionsBar from './OptionsBar';

class ControlCentre extends Component {
  // TODO: constants
  files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];

  modes = ['files', 'ranks'];

  state = {
    question: 0,
    score: 0,
    mode: this.modes[0],
    started: false,
    scoreHistory: [],
  }

  generateNewQuestion = () => this.getRandomInt(8)

  generateNextQuestion = () => {
    const { question } = this.state;
    return (question + 1 + this.getRandomInt(7)) % 8;
  }

  getQuestion = (lineType) => {
    // TODO: should this take param?
    const { question } = this.state;
    if (lineType === 'files') {
      return this.files[question];
    }
    if (lineType === 'ranks') {
      return this.ranks[question];
    }
    // TODO: throw error
  }

  setMode = (newMode) => {
    const { mode, started } = this.state;
    // TODO: if statement can probably be removed
    if (newMode === mode || started) {
      return;
    }
    this.setState({ mode: newMode, score: 0 });
  }

  getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
  // TODO: move to utils

  startGame = () => {
    const { started, mode } = this.state;
    if (!started) {
      const question = this.generateNewQuestion(mode);
      this.setState({ question, started: true, score: 0 });
    }
  }

  stopGame = () => {
    const { started } = this.state;
    if (started) {
      this.setState(prevState => ({
        started: false,
        scoreHistory: [{
          date: new Date(),
          score: prevState.score,
          mode: prevState.mode,
        }, ...prevState.scoreHistory],
      }));
    }
  }

  checkAnswer = (answer) => {
    const { started, mode } = this.state;
    if (!started) {
      return;
    }
    if (answer === this.getQuestion(mode)) {
      const question = this.generateNextQuestion(mode);
      this.setState(prevState => ({
        question,
        score: prevState.score + 1,
      }));
    }
  }

  // TODO: abstract entire dimmer section
  render() {
    const {
      started, score, scoreHistory, mode,
    } = this.state;
    return (
      <div style={{ display: 'grid', gridGap: '1rem ', gridTemplateColumns: 'auto auto' }}>
        <SidePanel
          started={started}
          stopGame={this.stopGame}
          score={score}
          scoreHistory={scoreHistory}
          question={this.getQuestion(mode)}
          mode={mode}
        />
        <div style={{ display: 'grid', gridGap: '1rem ', gridTemplateRows: 'auto auto' }}>
          <div>
            <Dimmer.Dimmable dimmed={!started}>
              <Dimmer active={!started}>
                <Header as="h2" inverted>
                  New Game
                </Header>
                <Button onClick={this.startGame} primary>Start</Button>
              </Dimmer>
              <PracticeBoard mode={mode} checkAnswer={this.checkAnswer} started={started} />
            </Dimmer.Dimmable>
          </div>
          <div>
            <OptionsBar mode={mode} setMode={this.setMode} started={started} />
          </div>
        </div>
      </div>
    );
  }
}

export default ControlCentre;
