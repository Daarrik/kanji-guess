import React, { useRef } from 'react';

const CharBox = props => {
  const clicked = useRef(props.clicked);

  const handleClick = e => {
    !clicked.current ? 
      props.addToGuess(props.character) 
    : 
      props.removeFromGuess(props.character);
    clicked.current = !clicked.current;
    console.log(props.character + clicked.current);
  }

  console.log(props.character + clicked.current);

  return (
    <button
      className='normal-button'
      onClick={handleClick}
    >
    {props.character}
    </button>
  );
}

export default CharBox;