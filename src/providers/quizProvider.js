import { parser } from '../helpers/';

// export const getCategories = () => {
//   return fetch('https://opentdb.com/api_category.php')
//     .then((request) => request.json())
//     .then((data) => data.trivia_categories);
// };
// export const getQuestionsAmountById = (id) => {
//   return fetch(`https://opentdb.com/api_count.php?category=${id}`)
//     .then((response) => response.json())
//     .then((data) => data.category_question_count.total_question_count);
// };
//
// export const getQuestionsAmountTotal = () => {
//   return fetch('https://opentdb.com/api_count_global.php')
//     .then((response) => response.json())
//     .then((data) => data.categories);
// };
//
// export const getTenQuestionsById = (id) => {
//   return fetch(
//     `https://opentdb.com/api.php?amount=10&encode=url3986&category=${id}`
//   )
//     .then((response) => response.json())
//     .then((data) => parser(data.results));
// };

class Categories {
  getCategories() {
    // get data
  }
}

class Questions {
  parse(response) {
    // convert data
    const data = response;
    return data;
  }

  serialize(data) {
    // modify data
    return data;
  }

  async getQuestions() {
    const response = await fetch('get_questions');
    const data = await response.json();

    return this.parse(data);
  }

  async postQuestion(data) {
    const body = this.serialize(data);
    await fetch('post_question', { method: 'POST', body });
  }
}

class QuizProvider {
  categories = new Categories();
  questions = new Questions();
}

const quizProvider = new QuizProvider();

export default quizProvider;

const categories = quizProvider.categories.getCategories();
const questions = quizProvider.questions.getQuestions();
