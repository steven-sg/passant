import React from 'react';
import PropTypes from 'prop-types';
import DisplayBoard from './DisplayBoard';

function QuestionBoard({ question }) {
  return <DisplayBoard header="Question" text={question.toUpperCase()} />;
}

QuestionBoard.propTypes = {
  question: PropTypes.string.isRequired,
};

export default QuestionBoard;
