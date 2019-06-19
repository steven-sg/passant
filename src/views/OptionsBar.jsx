import React from 'react';
import { Button } from 'semantic-ui-react'

function OptionsBar ({mode, started, setMode}) {
  const handleClick = (e, { value }) => {
    setMode(value);
  }

  const getButtonColor = (active) => {
    if (active) {
      return null;
    } else {
      return 'black';
    }
  }
  // TODO: single or double quotes?
  const filesActive = mode === 'files';
  const ranksActive = mode === 'ranks';

  return (
    <Button.Group size='large'>
      <Button
        onClick={handleClick}
        value='files'
        content='Files'
        color={getButtonColor(filesActive)}
        basic={!filesActive}
        inverted={!filesActive}
        disabled={!filesActive && started}
        />
      <Button
        onClick={handleClick}
        value='ranks'
        content='Ranks'
        color={getButtonColor(ranksActive)}
        basic={!ranksActive}
        inverted={!ranksActive}
        disabled={!ranksActive && started}
        />
    </Button.Group>
  );
}

export default OptionsBar;
