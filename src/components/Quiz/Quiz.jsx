import { PlayQuizLink, QuizBlock } from './Quiz.styles';
import { useContext } from 'react';
import { QuizContext } from '../../context';
import { ALL_PAGES } from '../../constants';

const Quiz = ({ category, id, amount }) => {
  const context = useContext(QuizContext);

  return (
    <QuizBlock>
      <h3>{category}</h3>
      <span>{amount} questions</span>
      <PlayQuizLink
        to={`/play/${id}`}
        onClick={() => context.pageSwitcher(ALL_PAGES.play)}
      >
        <strong>START QUIZ</strong>
      </PlayQuizLink>
    </QuizBlock>
  );
};

export default Quiz;
