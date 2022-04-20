export const getCategories = () => {
  return fetch('https://opentdb.com/api_category.php')
    .then((request) => request.json())
    .then((data) => data);
};

export const getQuestionsAmount = (id) => {
  return fetch(`https://opentdb.com/api_count.php?category=${id}`)
    .then((response) => response.json())
    .then((data) => data);
};
