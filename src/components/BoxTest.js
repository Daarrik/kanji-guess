import React, { useState } from 'react';
import CharBox from './CharBox';
import { nanoid } from 'nanoid';

const BoxTest = props => {
  const charBoxes = props.reading.split('').map(character => (
    <CharBox
      key={nanoid()}
      char={character}
    />
  ));

  return (
    <div>
      {charBoxes}
    </div>
  )
}

export default BoxTest;