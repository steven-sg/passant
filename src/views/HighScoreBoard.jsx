import React from 'react';
import { Header, Segment, Table } from 'semantic-ui-react';

function HighScoreBoard ({scoreHistory, mode}) {
    const filteredScores = scoreHistory.filter(score => score.mode === mode);
    const sortedScores = filteredScores.sort((a, b) => b.score - a.score);
    const highScores = sortedScores.slice(0, 3);

  return (
<Segment.Group>
        <Segment attached='top'>
        <Header as='h2'>High Scores</Header>
        </Segment>
        <Segment attached='bottom'>
        <Table basic='very'>
            <Table.Body style={{}}>
                { highScores.map((score) => {
                    return (
                        <Table.Row>
                            <Table.Cell textAlign='left'>{score.date.toDateString()}</Table.Cell>
                            <Table.Cell textAlign='right'>{score.score}</Table.Cell>
                        </Table.Row>
                    )
                })
                }
            </Table.Body>
        </Table>
    </Segment>
    </Segment.Group>
  );
}

export default HighScoreBoard;
