import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayBoard from './DisplayBoard';

class TimerBoard extends Component {
  timer = 30;

  state = {
    timeRemaining: this.timer,
  }

  componentDidMount() {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const { timeRemaining } = this.state;
    const { stopGame } = this.props;

    if (timeRemaining > 0) {
      this.setState(prevState => ({ timeRemaining: prevState.timeRemaining - 1 }));
    } else {
      clearInterval(this.timer);
      stopGame();
    }
  }

  render() {
    const { timeRemaining } = this.state;
    return <DisplayBoard header="Timer" text={timeRemaining} />;
  }
}

TimerBoard.propTypes = {
  stopGame: PropTypes.func.isRequired,
};

export default TimerBoard;
