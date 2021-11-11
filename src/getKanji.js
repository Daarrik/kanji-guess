import axios from 'axios';

export const fetchCharacter = async () => {
  const { data } = await axios.get('https://kanjiapi.dev/v1/kanji/grade-2');
  const index = Math.floor(Math.random() * data.length);
  return data[index];
}

export const getWordData = async (character) => {
  const { data } = await axios.get(`https://kanjiapi.dev/v1/words/${character}`);
  const dataIndex = Math.floor(Math.random() * data.length);
  const variantIndex = Math.floor(Math.random() * data[dataIndex].variants.length);
  const word = data[dataIndex].variants[variantIndex].written;
  if (word.length > 2) {
    return await getWordData(character);
  } else {
    const reading = data[dataIndex].variants[variantIndex].pronounced;
    return [word, reading];
  }
}