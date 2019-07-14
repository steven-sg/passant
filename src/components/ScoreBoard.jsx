import React from 'react';
import PropTypes from 'prop-types';
import DisplayBoard from './DisplayBoard';

function ScoreBoard({ score }) {
  return <DisplayBoard header="Score" text={score.toString()} />;
}

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreBoard;
