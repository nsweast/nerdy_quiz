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
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    setUserStats(JSON.parse(localStorage.getItem('userStat')) || []);
  }, []);

  useEffect(() => {
    setUserStats((prevHistory) =>
      prevHistory.filter((object) => object.time !== 0)
    );
  }, [userStats.length]);

  const averageQuizTimer = getAverageQuizTimer(userStats);
  const allAnswersNumber = getAllAnswersNumber(userStats);
  const correctAnswers = getAnswersByType(userStats, 'correct');
  const wrongAnswers = getAnswersByType(userStats, 'wrong');
  const pieDegree = getPieDegree(userStats);

  if (userStats.length === 0) {
    return (
      <StatPageContainer>
        <span>Play some quizzes first ;)</span>
      </StatPageContainer>
    );
  }

  return (
    <StatPageContainer>
      <h4>My History</h4>
      <span>Quizzes played: {userStats.length}</span>
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
