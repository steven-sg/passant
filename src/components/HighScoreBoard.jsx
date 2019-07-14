import React from 'react';
import PropTypes from 'prop-types';
import ScoreTable from './ScoreTable';

function HighScoreBoard({ scoreHistory, mode }) {
  const filteredScores = scoreHistory.filter(score => score.mode === mode);
  const sortedScores = filteredScores.sort((a, b) => b.score - a.score);
  const highScores = sortedScores.slice(0, 3);
  return <ScoreTable header="Recent Scores" data={highScores} />;
}

HighScoreBoard.propTypes = {
  mode: PropTypes.string.isRequired,
  scoreHistory: PropTypes.arrayOf(PropTypes.shape({
    mode: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
};

export default HighScoreBoard;
