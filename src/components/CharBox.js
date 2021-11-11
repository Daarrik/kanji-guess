import React, { useRef } from 'react';

const CharBox = props => {
  const clicked = useRef(false);

  const handleClick = e => {
    !clicked.current ? props.addToGuess(props.char) : props.removeFromGuess(props.char);
    clicked.current = !clicked.current;
    console.log(props.char + clicked.current);
  }

  console.log(props.char + clicked.current);

  return (
    <button
      className='normal-button'
      onClick={handleClick}
    >
    {props.char}
    </button>
  );
}

export default CharBox;