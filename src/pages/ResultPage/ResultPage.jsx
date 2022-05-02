import { ResultPageContainer } from './ResultPage.styles';
import { useContext } from 'react';
import { QuizContext } from '../../context';

const ResultPage = () => {
  // eslint-disable-next-line no-unused-vars
  const context = useContext(QuizContext);

  return (
    <ResultPageContainer>
      <h4>Category Name</h4>
      <span>You score 8 points</span>
      <span>You've answered correctly to 4 of 10 questions</span>
    </ResultPageContainer>
  );
};

export default ResultPage;
