import answer from '../components/Answer';

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const parser = (array) => {
  return array.map((element) => {
    return {
      ...element,
      category: decodeURIComponent(element.category),
      question: decodeURIComponent(element.question),
      correct_answer: decodeURIComponent(element.correct_answer),
      incorrect_answers: element.incorrect_answers.map((answer) =>
        decodeURIComponent(answer)
      ),
    };
  });
};
