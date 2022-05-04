import { StatPageContainer } from './HistoryPage.styles';
import { useContext, useState } from 'react';
import { QuizContext } from '../../context';
import { useEffect } from 'react';

const HistoryPage = () => {
  const context = useContext(QuizContext);

  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    setUserHistory(JSON.parse(localStorage.getItem('userStat')));
  }, []);

  const averageQuizTimer = (array) => {
    return (
      array.reduce((total, current) => total + current.time, 0) / array.length
    );
  };

  const answersTotal = (array) => {
    return array.reduce(
      (total, current) => total + current.wrong + current.correct,
      0
    );
  };

  const answers = (array, type) => {
    return array.reduce((total, current) => total + current[type], 0);
  };

  if (userHistory.length === 0) {
    return (
      <StatPageContainer>
        <span>Play some quizzes first ;)</span>
      </StatPageContainer>
    );
  }

  return (
    <StatPageContainer>
      <h4>My History</h4>
      <span>Quizzes played: {userHistory.length}</span>
      <span>Question answered: {answersTotal(userHistory)}</span>
      <span>
        Average time of answering quiz: {averageQuizTimer(userHistory)}
      </span>
    </StatPageContainer>
  );
};

export default HistoryPage;
