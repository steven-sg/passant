import React from 'react';
import PropTypes from 'prop-types';
import ScoreBoard from './ScoreBoard';
import HighScoreBoard from './HighScoreBoard';
import RecentScoreBoard from './RecentScoreBoard';
import QuestionBoard from './QuestionBoard';
import TimerBoard from './TimerBoard';

function SidePanel({
  question, stopGame, score, scoreHistory, started, mode,
}) {
  if (started) {
    return (
      <div style={{ width: '16rem' }}>
        <QuestionBoard question={question} />
        <TimerBoard score={score} stopGame={stopGame} />
      </div>
    );
  }

  const historyBoards = () => (
    <>
      <HighScoreBoard scoreHistory={scoreHistory} mode={mode} />
      <RecentScoreBoard scoreHistory={scoreHistory} mode={mode} />
    </>
  );

  return (
    <div style={{ width: '16rem' }}>
      <ScoreBoard score={score} scoreHistory={scoreHistory} />
      { scoreHistory.length > 0 && historyBoards() }
    </div>
  );
}

SidePanel.propTypes = {
  question: PropTypes.string.isRequired,
  stopGame: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  scoreHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
  started: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
};

export default SidePanel;
