import {
  PieChart,
  PieChartContainer,
  PieChartLegend,
  PieChartSpan,
  StatPageContainer,
} from './HistoryPage.styles';
import { useContext, useState } from 'react';
import { QuizContext } from '../../context';
import { useEffect } from 'react';
import Timer from '../../components/Timer';
import { ALL_COLORS } from '../../constants';

const HistoryPage = () => {
  const context = useContext(QuizContext);

  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    setUserHistory(JSON.parse(localStorage.getItem('userStat')));
  }, []);

  useEffect(() => {
    setUserHistory((prevHistory) =>
      prevHistory.filter((object) => object.time !== 0)
    );
  }, [userHistory.length]);

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

  const pieDegree = () => {
    return (
      (((360 / 100) * answers(userHistory, 'correct')) /
        answersTotal(userHistory)) *
        100 +
      'deg'
    );
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
        Average time of answering quiz:{' '}
        <Timer timer={averageQuizTimer(userHistory)} />
      </span>

      <PieChartContainer>
        <PieChart degree={pieDegree()} />

        <PieChartLegend>
          <PieChartSpan color={ALL_COLORS.green}>
            Correct: {answers(userHistory, 'correct')}
          </PieChartSpan>
          <PieChartSpan color={ALL_COLORS.red}>
            Wrong: {answers(userHistory, 'wrong')}
          </PieChartSpan>
        </PieChartLegend>
      </PieChartContainer>
    </StatPageContainer>
  );
};

export default HistoryPage;
