import React, { useRef } from 'react';

const CharBox = props => {
  const clicked = useRef(props.clicked);
  const button = useRef(null);

  const handleClick = e => {
    if (!clicked.current) {
      props.addToGuess(props.character);
      button.current.style.background = '#C3073F';
      button.current.style.color = 'white';
    } else {
      props.removeFromGuess(props.character);
      button.current.style.background = 'white';
      button.current.style.color = '#C3073F';
    }
    clicked.current = !clicked.current;
  }

  return (
    <button
    ref={button}
      className='char-box'
      onClick={handleClick}
    >
    {props.character}
    </button>
  );
}

export default CharBox;