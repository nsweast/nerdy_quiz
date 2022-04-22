import { parser } from '../helpers/';

export const getCategories = () => {
  return fetch('https://opentdb.com/api_category.php')
    .then((request) => request.json())
    .then((data) => data.trivia_categories);
};
export const getTotalAmount = (id) => {
  return fetch(`https://opentdb.com/api_count.php?category=${id}`)
    .then((response) => response.json())
    .then((data) => data.category_question_count.total_question_count);
};
export const getRandomTenById = (id) => {
  return fetch(
    `https://opentdb.com/api.php?amount=10&encode=url3986&category=${id}`
  )
    .then((response) => response.json())
    .then((data) => parser(data.results));
};
