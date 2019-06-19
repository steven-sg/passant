import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

function QuestionBoard ({question}) {
  return (
    <Segment.Group>
      <Segment attached='top'>
          <Header as='h2'>Question</Header>
      </Segment>
      <Segment attached='bottom' padded='very'>
        <div style={{color: 'black', margin:'1rem', fontSize: '4rem', fontWeight: 'bold'}}>
          {question.toUpperCase()}
        </div>
      </Segment>
    </Segment.Group>
  );
}

export default QuestionBoard;
