class Categories {
  getCategories = () => {
    return fetch('https://opentdb.com/api_category.php')
      .then((request) => request.json())
      .then((data) => data.trivia_categories);
  };
}

class Questions {
  getQuestionsAmountById = (id) => {
    return fetch(`https://opentdb.com/api_count.php?category=${id}`)
      .then((response) => response.json())
      .then((data) => data.category_question_count.total_question_count);
  };

  getQuestionsAmountTotal = () => {
    return fetch('https://opentdb.com/api_count_global.php')
      .then((response) => response.json())
      .then((data) => data.categories);
  };

  getTenQuestionsById = (id) => {
    return fetch(
      `https://opentdb.com/api.php?amount=10&encode=url3986&category=${id}`
    )
      .then((response) => response.json())
      .then((data) => this.parser(data.results));
  };

  parser = (array) => {
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
}

class QuizProvider {
  categories = new Categories();
  questions = new Questions();
}

const quizProvider = new QuizProvider();

export default quizProvider;
