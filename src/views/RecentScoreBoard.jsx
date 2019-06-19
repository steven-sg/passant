import React from 'react';
import { Header, Segment, Table } from 'semantic-ui-react';
// TODO: (local) issues board in vsx?
// TODO: lint this project
// TODO: performance test

function RecentScoreBoard ({scoreHistory, mode}) {
    const filteredScores = scoreHistory.filter(score => score.mode === mode);
    const recentScores = filteredScores.slice(0, 3);
    // TODO: pad array
    return (
<Segment.Group>
        <Segment attached='top'>
        <Header as='h2'>Recent Scores</Header>
        </Segment>
        <Segment attached='bottom'>
        <Table basic='very'>
            <Table.Body style={{}}>
                { recentScores.map((score) => {
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

export default RecentScoreBoard;
