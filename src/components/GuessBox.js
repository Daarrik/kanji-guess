import React, { useState } from 'react';
import CharBox from './CharBox';
import { nanoid } from 'nanoid';

const GuessBox = props => {
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

  // const shuffle = array => {
  //   let currentIndex = array.length, randomIndex;

  //   // While there remain elements to shuffle...
  //   while (currentIndex != 0) {

  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex], array[currentIndex]];
  //   }
  //   return array;
  // }

  // AGONY
  const charBoxes = props.reading.split('').map(character => (
    <CharBox
      key={nanoid()}
      char={character}
      addToGuess={addToGuess}
      removeFromGuess={removeFromGuess}
    />
  ));

  return (
    <div
      className='guess-container'
    >

      <p>{boxGuess}</p>
      <div>{charBoxes}</div>
      <button
        className='normal-button'
        onClick={handleClick}  
      >
        チェック
      </button>
    </div>
  )
}

export default GuessBox;