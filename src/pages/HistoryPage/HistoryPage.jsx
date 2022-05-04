import { StatPageContainer } from './HistoryPage.styles';
import { useContext } from 'react';
import { QuizContext } from '../../context';

const HistoryPage = () => {
  const context = useContext(QuizContext);

  //TODO: pie diagram wrong/correct ratio
  return (
    <StatPageContainer>
      <h4>My History</h4>
      <span>Quizzes played: </span>
      <span>Question answered: </span>
      <span>Average time of answering quiz: </span>
    </StatPageContainer>
  );
};

export default HistoryPage;
