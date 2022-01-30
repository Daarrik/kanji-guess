import React, { useState, useEffect, useRef } from "react";
import GetKanji from "./components/GetKanji";
import GuessText from "./components/GuessText";
import { fetchCharacter, getWordData, getWord } from "./getKanji";
import { getCommonWord } from "./commonKanji";
import GuessBox from "./components/GuessBox";

const App = () => {
  const [kanji, setKanji] = useState("");
  const [kanjiReading, setKanjiReading] = useState("");
  const [guessed, setGuessed] = useState(false);
  const [textBox, setTextBox] = useState(false);

  useEffect(() => {
    startNew();
  }, []);

  const kanjiContainer = useRef(null);

  // Works without CORS bypass extension but words
  // are very difficult
  const startNew = async () => {
    setKanji("...");
    setGuessed(false);
    // const character = await fetchCharacter();
    // const [word, reading] = await getWordData(character);
    const [word, reading] = await getWord();
    setKanji(word);
    setKanjiReading(reading);
  };

  // Does not work without a CORS bypass extension
  // API isn't RESTful
  // const startNew = async () => {
  //   setKanji('...');
  //   setGuessed(false);
  //   const [word, reading] = await getCommonWord();
  //   setKanji(word);
  //   setKanjiReading(reading);
  // }

  const checkGuess = (guess) => {
    if (guess) {
      if (guess === kanjiReading) {
        setGuessed(true);
        setKanji("正解");
        kanjiContainer.current.style.background = "green";
      } else {
        const temp = kanji;
        setKanji("不正解");
        setGuessed(true);
        // setTimeout(() => setKanji(temp), 1000);
      }
    } else {
      alert("Enter a guess.");
    }
  };

  const guessMode = textBox ? (
    <GuessText checkGuess={checkGuess} />
  ) : (
    <GuessBox reading={kanjiReading} checkGuess={checkGuess} />
  );

  return (
    <div>
      <button
        className="normal-button bottom-left"
        onClick={() => setTextBox(!textBox)}
      >
        {textBox ? "ボックス" : "キーボード"}
      </button>
      <div className="kanji-guess-app">
        <div className="kanji-container" ref={kanjiContainer}>
          <h1 className="kanji">{kanji}</h1>
        </div>
        <div className="guess-container">
          {
            // Disgusting nested conditional rendering
            !guessed ? (
              guessMode
            ) : (
              <GetKanji
                text={"次へ"}
                startNew={startNew}
                container={kanjiContainer}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default App;
