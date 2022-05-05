import {
  PieChart,
  PieChartContainer,
  PieChartLegend,
  PieChartSpan,
  StatPageContainer,
} from './StatsPage.styles';
import { useState } from 'react';
import { useEffect } from 'react';
import Timer from '../../components/Timer';
import { ALL_COLORS } from '../../constants';
import {
  getAverageQuizTimer,
  getAllAnswersNumber,
  getAnswersByType,
  getPieDegree,
} from '../../helpers';

const StatsPage = () => {
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    setUserHistory(JSON.parse(localStorage.getItem('userStat')));
  }, []);

  useEffect(() => {
    setUserHistory((prevHistory) =>
      prevHistory.filter((object) => object.time !== 0)
    );
  }, [userHistory.length]);

  const averageQuizTimer = getAverageQuizTimer(userHistory);
  const allAnswersNumber = getAllAnswersNumber(userHistory);
  const correctAnswers = getAnswersByType(userHistory, 'correct');
  const wrongAnswers = getAnswersByType(userHistory, 'wrong');
  const pieDegree = getPieDegree(userHistory);

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
      <span>Question answered: {allAnswersNumber}</span>
      <span>
        Average time of answering quiz: <Timer timer={averageQuizTimer} />
      </span>

      <PieChartContainer>
        <PieChart degree={pieDegree} />

        <PieChartLegend>
          <PieChartSpan color={ALL_COLORS.green}>
            Correct: {correctAnswers}
          </PieChartSpan>
          <PieChartSpan color={ALL_COLORS.red}>
            Wrong: {wrongAnswers}
          </PieChartSpan>
        </PieChartLegend>
      </PieChartContainer>
    </StatPageContainer>
  );
};

export default StatsPage;
