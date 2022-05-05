export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const getCorrectAnswers = (array) => {
  return array.filter((answer) => answer.userAnswer === answer.correctAnswer);
};

export const getWrongAnswers = (array) => {
  return array.filter((answer) => answer.userAnswer !== answer.correctAnswer);
};

export const getAverageQuizTimer = (array) => {
  return (
    array.reduce((total, current) => total + current.time, 0) / array.length
  );
};

export const getAllAnswersNumber = (array) => {
  return array.reduce(
    (total, current) => total + current.wrong + current.correct,
    0
  );
};

export const getAnswersByType = (array, type) => {
  return array.reduce((total, current) => total + current[type], 0);
};

export const getPieDegree = (array) => {
  return (
    (((360 / 100) * getAnswersByType(array, 'correct')) /
      getAllAnswersNumber(array)) *
      100 +
    'deg'
  );
};
