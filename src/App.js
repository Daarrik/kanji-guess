import React, { useState } from 'react';
import TopButton from './components/TopButton';
import { fetchGrade1Kanji, getWords, getReading } from './getKanji';

const App = () => {
  const [kanji, setKanji] = useState('');
  const [reading, setReading] = useState('');

  const displayKanji = async () => {
    const character = await fetchGrade1Kanji()
    setKanji(character);
    getReading(character);
  }

  return (
    <div className='kanji-guess-app'>
      <div className='top'>
        <TopButton
          text={reading}
          displayKanji={displayKanji}
        />
      </div>
      <div className='kanji-container'>
        <h1 className='kanji'>{ kanji }</h1>
      </div>
    </div>
  );
}

export default App;