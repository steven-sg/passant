import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

function ScoreBoard ({score, scoreHistory}) {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Header as='h2'>Score</Header>
      </Segment>
      <Segment attached='bottom' padded='very'>
        <div style={{color: 'black', margin:'1rem', fontSize: '4rem', fontWeight: 'bold'}}>
          {score}
        </div>
      </Segment>
    </Segment.Group>
  );
}

export default ScoreBoard;
