import React, { useState, useEffect, useRef } from 'react';
import GetKanji from './components/GetKanji';
import GuessText from './components/GuessText';
import { fetchCharacter, getWordData } from './getKanji';
import { getCommonWord } from './commonKanji';
import GuessBox from './components/GuessBox';

const App = () => {
  const [kanji, setKanji] = useState('');
  const [kanjiReading, setKanjiReading] = useState('');
  const [guessed, setGuessed] = useState(false);
  const [textBox, setTextBox] = useState(false);
  

  useEffect(() => {
    startNew()
  }, []);

  useEffect(() => {
    console.log(kanjiReading);
  }, [kanjiReading]);

  const kanjiContainer = useRef(null);

  const startNew = async () => {
    setKanji('...');
    setGuessed(false);
    const character = await fetchCharacter();
    const [word, reading] = await getWordData(character);
    setKanji(word);
    setKanjiReading(reading);
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

  // const startNew = async () => {
  //   setKanji('...');
  //   const [word, reading] = await getCommonWord();
  //   setKanji(word);
  //   setKanjiReading(reading);
  // }

  const checkGuess = (guess) => {
    if (guess) {
      if (guess === kanjiReading) {
        setGuessed(true);
        setKanji('正解');
        kanjiContainer.current.style.background = 'green';
      }
      else {
        const temp = kanji;
        setKanji('不正解');
        setTimeout(() => setKanji(temp), 1000);
      }
    }
    else {
      alert('Enter a guess.');
    }
  }

  return (
    <div className='kanji-guess-app'>
      <div className='kanji-container' ref={kanjiContainer}>
        <h1 className='kanji'>{ kanji }</h1>
      </div>
      <div className='guess-container'>
        { // Disgusting nested conditional rendering
          !guessed ?
            textBox ?
            <GuessText
              checkGuess={checkGuess}
            />
            :
            <GuessBox
              reading={kanjiReading}
            />
          :
            <GetKanji
              text={'次へ'}
              startNew={startNew}
              container={kanjiContainer}
          />
          }
      </div>
    </div>
  );
}

export default App;