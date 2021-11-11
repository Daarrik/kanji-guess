import React, { useState } from 'react';
import CharBox from './CharBox';
import { nanoid } from 'nanoid';

const GuessBox = props => {
  const [charBoxes, setCharBoxes] = useState([]);
  const [boxGuess, setBoxGuess] = useState('');

  const addToGuess = character => {
    setBoxGuess(boxGuess => boxGuess + character);
  }

  const removeFromGuess = character => {
    setBoxGuess(boxGuess => boxGuess.replace(character, ''));
  }

  const handleClick = () => {
    props.checkGuess(boxGuess);
    setBoxGuess('');
  }

  setCharBoxes(props.reading.split('').map(character => (
    <CharBox
      key={nanoid()}
      char={character}
      addToGuess={addToGuess}
      removeFromGuess={removeFromGuess}
    />
  )));

  return (
    <div>
      <p>{boxGuess}</p>
      <div>{charBoxes}</div>
      <button
        className='normal-button'
        onClick={handleClick}  
      >
      </button>
    </div>
  )
}

export default GuessBox;