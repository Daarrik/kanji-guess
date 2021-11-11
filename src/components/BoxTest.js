import React from 'react';
import CharBox from './CharBox';

const BoxTest = props => {
  const charBoxes = props.reading.split('').map(character => {
    <CharBox
      char={character}
    />
  });
  console.log(charBoxes);

  return (
    <div>
      {charBoxes}
      <CharBox
        char={props.reading}
      />
    </div>
  )
}

export default BoxTest;