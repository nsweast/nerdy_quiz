import {
  PieChart,
  PieChartContainer,
  PieChartLegend,
  PieChartSpan,
  StatPageContainer,
} from './StatsPage.styles';
import { useContext } from 'react';
import Timer from '../../components/Timer';
import { ALL_COLORS } from '../../constants';
import {
  getAverageQuizTimer,
  getAllAnswersNumber,
  getAnswersByType,
  getPieDegree,
} from '../../helpers';
import { QuizContext } from '../../context';

const StatsPage = () => {
  const { userStats } = useContext(QuizContext);

  const filteredStats = userStats.filter((object) => object.time !== 0);

  const averageQuizTimer = getAverageQuizTimer(filteredStats);
  const allAnswersNumber = getAllAnswersNumber(filteredStats);
  const correctAnswers = getAnswersByType(filteredStats, 'correct');
  const wrongAnswers = getAnswersByType(filteredStats, 'wrong');
  const pieDegree = getPieDegree(filteredStats);

  if (filteredStats.length === 0) {
    return (
      <StatPageContainer>
        <span>Play some quizzes first ;)</span>
      </StatPageContainer>
    );
  }

  return (
    <StatPageContainer>
      <h4>My History</h4>
      <span>Quizzes played: {filteredStats.length}</span>
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
