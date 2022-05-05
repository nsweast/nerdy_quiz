import { HomeContainer } from './HomePage.styles';
import Quiz from '../../components/Quiz';
import { useContext, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { shuffleArray } from '../../helpers';
import quizProvider from '../../providers/';
import { QuizContext } from '../../context';

const HomePage = () => {
  const { setFetchedQuizIds } = useContext(QuizContext);

  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    quizProvider.categories
      .getCategories()
      .then((categories) => shuffleArray(categories).slice(0, 10))
      .then((randomTen) => {
        return quizProvider.questions
          .getQuestionsAmountTotal()
          .then((questions) => {
            return randomTen.map((category) => {
              return {
                ...category,
                amount: questions[category.id].total_num_of_verified_questions,
              };
            });
          });
      })
      .then((categories) => {
        setCategories(categories);
        setLoaded(true);
      });
  }, []);

  useEffect(() => {
    setFetchedQuizIds(categories.map((category) => category.id));
  }, [categories, setFetchedQuizIds]);

  if (!loaded) {
    return (
      <HomeContainer>
        <Loading />
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      {categories.map((category) => (
        <Quiz
          key={category.id}
          id={category.id}
          amount={category.amount}
          category={category.name}
        />
      ))}
    </HomeContainer>
  );
};

export default HomePage;
