import axios from "axios";

const randInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const getCommonWord = async () => {
  const pageNum = Math.floor(Math.random() * 50); // Page number where common words are just カタカナ英語
  const { data } = await axios.get(
    `https://jisho.org/api/v1/search/words?keyword=%23common&page=${pageNum}`
  );
  const index = randInt(20);
  const word = data.data[index].japanese[0].word;
  const reading = data.data[index].japanese[0].reading;
  console.log(word);
  return [word, reading];
};
