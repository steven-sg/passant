import React from 'react';
import PropTypes from 'prop-types';
import ScoreTable from './ScoreTable';

function RecentScoreBoard({ mode, scoreHistory }) {
  const filteredScores = scoreHistory.filter(score => score.mode === mode);
  const recentScores = filteredScores.slice(0, 3);
  return <ScoreTable header="Recent Scores" data={recentScores} />;
}

RecentScoreBoard.propTypes = {
  mode: PropTypes.string.isRequired,
  scoreHistory: PropTypes.arrayOf(PropTypes.shape({
    mode: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })).isRequired,
};

export default RecentScoreBoard;
