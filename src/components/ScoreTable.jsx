import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Table } from 'semantic-ui-react';

const dateFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
};

function ScoreTable({ header, data }) {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Header as="h2">{header}</Header>
      </Segment>
      <Segment attached="bottom">
        <Table basic="very">
          <Table.Body>
            {
              data.map(({ date, score }) => {
                const dateString = new Intl.DateTimeFormat('default', dateFormatOptions).format(date);
                return (
                  <Table.Row key={date}>
                    <Table.Cell textAlign="left">{dateString}</Table.Cell>
                    <Table.Cell textAlign="right">{score}</Table.Cell>
                  </Table.Row>
                );
              })
            }
          </Table.Body>
        </Table>
      </Segment>
    </Segment.Group>
  );
}

ScoreTable.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    score: PropTypes.number.isRequired,
  })).isRequired,
};

export default ScoreTable;
