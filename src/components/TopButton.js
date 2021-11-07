import React from 'react'

const TopButton = props => {
  return (
    <button
      className='top-button'
      onClick={props.displayKanji}
    >
      { props.text }
    </button>
  )
}

export default TopButton;