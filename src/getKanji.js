import axios from 'axios';

// export const fetchGrade1Kanji = () => {
//   return axios.get('https://kanjiapi.dev/v1/kanji/grade-1')
//     .then(({data}) => {
//       const index = Math.floor(Math.random() * data.length);
//       return data[index];
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

export const fetchGrade1Kanji = async () => {
  const { data } = await axios.get('https://kanjiapi.dev/v1/kanji/grade-1');
  const index = Math.floor(Math.random() * data.length);
  return data[index];
}

export const getWords = async (character) => {
  console.log(character);
  const { data } = await axios.get(`https://kanjiapi.dev/v1/words/${character}`);
  console.log(data);
};

export const getReading = async (character) => {
  const { data } = await axios.get(`https://kanjiapi.dev/v1/kanji/${character}`);
  console.log(data.on_readings);
  console.log(data.kun_readings);
}