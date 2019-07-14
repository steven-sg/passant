import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const BigText = styled.div`
  color: black;
  margin: 1rem;
  font-size: 4rem;
  font-weight: bold;
`;

function DisplayBoard({ header, text }) {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Header as="h2">{header}</Header>
      </Segment>
      <Segment attached="bottom" padded="very">
        <BigText>{text}</BigText>
      </Segment>
    </Segment.Group>
  );
}

DisplayBoard.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
};

export default DisplayBoard;
