import { HomeContainer } from './HomePage.styles';
import Quiz from '../../components/Quiz';
import { getCategories } from '../../providers';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setQuizzes(data.trivia_categories));
  }, []);

  //TODO: make it random
  return (
    <HomeContainer>
      {quizzes.slice(0, 10).map((quiz) => (
        <Quiz key={quiz.id} id={quiz.id} category={quiz.name} />
      ))}
    </HomeContainer>
  );
};

export default HomePage;
