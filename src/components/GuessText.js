import React, { useState } from 'react';

const GuessText = props => {
  const [guess, setGuess] = useState('');

  const handleChange = e => {
    setGuess(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.checkGuess(guess);
    setGuess('');
  }

  return (
    <div
      className='guess-container'
    >
      <form
        id='guess-form'
        onSubmit={handleSubmit}
      >
        <input
          className='guess'
          type='text'
          name='guess'
          value={guess}
          placeholder='音読み当ててみよう'
          onChange={handleChange}
        />
        <div>
          <button
            className='normal-button'
            type='submit'
          >
          チェック
          </button>
        </div>
      </form>
    </div>
  )
}

export default GuessText;