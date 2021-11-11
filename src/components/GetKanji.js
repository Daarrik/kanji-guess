import React, { useRef } from 'react'

const GetKanji = props => {
  const debounced = useRef(false)
  
  const handleClick = (e) => {
    if (debounced.current) return;
    debounced.current = true;
    props.startNew();
    props.container.current.style.background = '#C3073F';
  }

  return (
    <button
      className='normal-button'
      onClick={handleClick}
    >
      { props.text }
    </button>
  )
}

export default GetKanji;