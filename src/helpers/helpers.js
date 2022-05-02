export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const isObjectEmpty = (object) => {
  return Object.keys(object).length === 0;
};
